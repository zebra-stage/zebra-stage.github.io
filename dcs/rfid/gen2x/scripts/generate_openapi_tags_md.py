#!/usr/bin/env python3
"""
generate_openapi_tags_md.py
---------------------------
Builds docs/openapi_md.json from schemas/* with markdown-first descriptions.

Usage:
    python scripts/generate_openapi_tags_md.py
"""

import json
import os
from collections import OrderedDict


SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
SCHEMAS_DIR = os.path.join(PROJECT_ROOT, "schemas")
OUTPUT_PATH = os.path.join(PROJECT_ROOT, "docs", "openapi_md.json")

COMMANDS_DIR = os.path.join(SCHEMAS_DIR, "commands")
RESPONSE_DIR = os.path.join(SCHEMAS_DIR, "response")
EVENTS_DIR = os.path.join(SCHEMAS_DIR, "events")

TAG_CONFIG_PATH = os.path.join(SCHEMAS_DIR, "tag_config.json")
ERROR_CODES_PATH = os.path.join(SCHEMAS_DIR, "error_codes.json")
OP_DESCRIPTIONS_DIR = os.path.join(SCHEMAS_DIR, "operation_descriptions")
EXAMPLE_DESC_PATH = os.path.join(SCHEMAS_DIR, "example_description.json")

TAG_DESCRIPTIONS_DIR = os.path.join(SCHEMAS_DIR, "tag_descriptions")
INFO_DESCRIPTION_PATH = os.path.join(SCHEMAS_DIR, "info_description.md")

SKIP_FILES = set()


def load_json(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        return json.load(f, object_pairs_hook=OrderedDict)


def load_tag_config():
    if os.path.exists(TAG_CONFIG_PATH):
        return load_json(TAG_CONFIG_PATH)
    print(f"  WARNING: {TAG_CONFIG_PATH} not found, using empty config")
    return {"tag_groups": {}, "tag_descriptions": {}}


def load_operation_descriptions():
    descriptions = {}
    if os.path.isdir(OP_DESCRIPTIONS_DIR):
        for filename in os.listdir(OP_DESCRIPTIONS_DIR):
            if filename.endswith(".md"):
                op_name = filename[:-3]
                filepath = os.path.join(OP_DESCRIPTIONS_DIR, filename)
                with open(filepath, "r", encoding="utf-8") as f:
                    descriptions[op_name] = f.read().strip()
    return descriptions


def load_error_codes():
    if not os.path.exists(ERROR_CODES_PATH):
        print(f"  WARNING: {ERROR_CODES_PATH} not found, skipping error codes")
        return {}
    all_codes = load_json(ERROR_CODES_PATH).get("codes", [])
    cmd_map = {}
    for entry in all_codes:
        for cmd in entry.get("commands", []):
            if cmd == "*":
                continue
            cmd_map.setdefault(cmd, []).append(entry)

    code_zero = [e for e in all_codes if e.get("code") == 0]
    for cmd in cmd_map:
        cmd_map[cmd] = code_zero + cmd_map[cmd]
    return cmd_map


def load_example_descriptions():
    if os.path.exists(EXAMPLE_DESC_PATH):
        return load_json(EXAMPLE_DESC_PATH)
    return {}


def load_info_description():
    if os.path.isfile(INFO_DESCRIPTION_PATH):
        with open(INFO_DESCRIPTION_PATH, "r", encoding="utf-8") as f:
            text = f.read().strip()
        print("  Loaded info description from info_description.md")
        return text
    return (
        "# Gen2X API Reference &nbsp; v1.0.0\n\n"
        "MQTT-based API for controlling Impinj Gen2X features on Zebra fixed RFID readers."
    )


def load_tag_descriptions_from_md():
    descriptions = {}
    if not os.path.isdir(TAG_DESCRIPTIONS_DIR):
        print(f"  WARNING: {TAG_DESCRIPTIONS_DIR} not found")
        return descriptions

    for filename in sorted(os.listdir(TAG_DESCRIPTIONS_DIR)):
        if filename.endswith(".md"):
            tag_name = filename[:-3].replace("_", " ")
            filepath = os.path.join(TAG_DESCRIPTIONS_DIR, filename)
            with open(filepath, "r", encoding="utf-8") as f:
                descriptions[tag_name] = f.read().strip()
            print(f"  Loaded tag description: '{tag_name}' from {filename}")
    return descriptions


def discover_operations():
    operations = []

    if os.path.isdir(COMMANDS_DIR):
        for subfolder in sorted(os.listdir(COMMANDS_DIR)):
            subfolder_path = os.path.join(COMMANDS_DIR, subfolder)
            if not os.path.isdir(subfolder_path):
                continue
            for filename in sorted(os.listdir(subfolder_path)):
                if not filename.endswith(".json") or filename in SKIP_FILES:
                    continue
                filepath = os.path.join(subfolder_path, filename)
                op_name = filename[:-5]
                try:
                    data = load_json(filepath)
                    tag = data.get("x-tag")
                    if not tag:
                        print(f"  WARNING: {filepath} has no x-tag, skipping")
                        continue
                    operations.append((op_name, tag, subfolder, filepath))
                except Exception as exc:
                    print(f"  WARNING: Error reading {filepath}: {exc}")

    if os.path.isdir(EVENTS_DIR):
        for filename in sorted(os.listdir(EVENTS_DIR)):
            if not filename.endswith(".json") or filename in SKIP_FILES:
                continue
            filepath = os.path.join(EVENTS_DIR, filename)
            op_name = filename[:-5]
            try:
                data = load_json(filepath)
                tag = data.get("x-tag")
                if not tag:
                    print(f"  WARNING: {filepath} has no x-tag, skipping")
                    continue
                operations.append((op_name, tag, "events", filepath))
            except Exception as exc:
                print(f"  WARNING: Error reading {filepath}: {exc}")

    return operations


def get_response_path(operation, source):
    if source == "events":
        return None
    return os.path.join(RESPONSE_DIR, source, f"{operation}.json")


def extract_examples(schema, title, example_data):
    if "examples" not in schema:
        return {}
    examples = schema["examples"]
    if not isinstance(examples, list) or not examples:
        return {}

    result = OrderedDict()
    descriptions = example_data.get(title, {})
    desc_keys = list(descriptions.keys()) if descriptions else []

    for idx, example in enumerate(examples):
        if idx < len(desc_keys):
            label = desc_keys[idx]
            desc = descriptions[label]
        else:
            label = f"example{idx + 1}"
            desc = None
        entry = OrderedDict()
        if desc:
            entry["description"] = desc
        entry["value"] = example
        result[label] = entry
    return result


def replace_const_with_enum(obj):
    """Recursively replace 'const': value with 'enum': [value] in dicts/lists."""
    if isinstance(obj, dict):
        obj = OrderedDict(obj)
        if "const" in obj:
            obj["enum"] = [obj.pop("const")]
        for k, v in obj.items():
            obj[k] = replace_const_with_enum(v)
        return obj
    elif isinstance(obj, list):
        return [replace_const_with_enum(i) for i in obj]
    else:
        return obj


def normalize_schema_examples(obj):
    """Recursively convert JSON Schema 'examples' arrays into OpenAPI 'example'."""
    if isinstance(obj, dict):
        normalized = OrderedDict()
        for key, value in obj.items():
            if key == "examples" and isinstance(value, list):
                if value:
                    normalized["example"] = normalize_schema_examples(value[0])
                continue
            normalized[key] = normalize_schema_examples(value)
        return normalized
    if isinstance(obj, list):
        return [normalize_schema_examples(i) for i in obj]
    return obj

def extract_schema(raw_schema):
    skip_keys = {"title", "x-stoplight", "x-tag", "examples", "description"}
    schema = OrderedDict()
    for key, value in raw_schema.items():
        if key not in skip_keys:
            schema[key] = value
    if "type" not in schema:
        schema["type"] = "object"
    schema = replace_const_with_enum(schema)
    schema = normalize_schema_examples(schema)
    return schema


def sort_operations(operations, tag_config):
    tag_groups = tag_config.get("tag_groups", {})
    op_order = tag_config.get("operation_order", {})

    tag_order = {}
    for group_index, (_, tags) in enumerate(tag_groups.items()):
        for tag_index, tag_name in enumerate(tags):
            tag_order[tag_name] = (group_index, tag_index)

    def key_fn(op_tuple):
        op_name, tag, _, _ = op_tuple
        order = tag_order.get(tag, (999, 999))
        if tag in op_order:
            try:
                op_index = op_order[tag].index(op_name)
            except ValueError:
                op_index = 999
            return (order[0], order[1], op_index)
        return (order[0], order[1], op_name)

    return sorted(operations, key=key_fn)


def build_openapi():
    tag_config = load_tag_config()
    op_descriptions = load_operation_descriptions()
    example_data = load_example_descriptions()
    error_codes_map = load_error_codes()

    tag_groups = tag_config.get("tag_groups", {})
    tag_descriptions = {
        **tag_config.get("tag_descriptions", {}),
        **load_tag_descriptions_from_md(),
    }

    operations = discover_operations()
    operations = sort_operations(operations, tag_config)
    print(f"  Discovered {len(operations)} operations")

    used_tags = OrderedDict()
    for _, tag, _, _ in operations:
        if tag not in used_tags:
            used_tags[tag] = True

    openapi = OrderedDict()
    openapi["openapi"] = "3.0.0"
    openapi["info"] = OrderedDict([
        ("title", "Gen2X API Reference"),
        ("version", "1.0.0"),
        ("description", load_info_description()),
    ])

    tags = []
    all_tag_names = set()
    for group_tags in tag_groups.values():
        for tag_name in group_tags:
            if tag_name in all_tag_names:
                continue
            all_tag_names.add(tag_name)
            tag_entry = OrderedDict()
            tag_entry["name"] = tag_name
            if tag_name in tag_descriptions:
                tag_entry["description"] = tag_descriptions[tag_name]
            tags.append(tag_entry)

    for tag_name in used_tags:
        if tag_name in all_tag_names:
            continue
        all_tag_names.add(tag_name)
        tags.append(OrderedDict([("name", tag_name)]))
        print(f"  NEW TAG discovered: '{tag_name}' (not in tag_config.json)")

    openapi["tags"] = tags

    x_tag_groups = []
    for group_name, group_tags in tag_groups.items():
        x_tag_groups.append(OrderedDict([
            ("name", group_name),
            ("tags", list(group_tags)),
        ]))

    all_grouped_tags = set()
    for group_tags in tag_groups.values():
        all_grouped_tags.update(group_tags)
    uncategorized = [tag for tag in used_tags if tag not in all_grouped_tags]
    if uncategorized:
        x_tag_groups.append(OrderedDict([
            ("name", "Other"),
            ("tags", uncategorized),
        ]))
        print(f"  NEW GROUP 'Other' created for tags: {uncategorized}")

    openapi["x-tagGroups"] = x_tag_groups

    paths = OrderedDict()
    skipped = []

    for op_name, tag_name, source, req_path in operations:
        try:
            req_schema = load_json(req_path)
        except Exception as exc:
            skipped.append(f"  SKIP {op_name}: error reading {req_path}: {exc}")
            continue

        title = req_schema.get("title", op_name)
        description = op_descriptions.get(op_name) or req_schema.get("description", None)

        op = OrderedDict()
        op["tags"] = [tag_name]
        op["summary"] = req_schema.get("x-summary", op_name.replace("_", " ").title())
        if description:
            op["description"] = description

        if source == "events":
            evt_examples = extract_examples(req_schema, title, example_data)
            evt_schema_clean = extract_schema(req_schema)
            evt_content = OrderedDict()
            evt_content["application/json"] = OrderedDict()
            evt_content["application/json"]["schema"] = evt_schema_clean
            if evt_examples:
                evt_content["application/json"]["examples"] = evt_examples
            op["responses"] = OrderedDict([
                ("default", OrderedDict([
                    ("description", f"{op_name} event payload"),
                    ("content", evt_content),
                ]))
            ])
        else:
            req_examples = extract_examples(req_schema, title, example_data)
            req_schema_clean = extract_schema(req_schema)
            req_content = OrderedDict()
            req_content["application/json"] = OrderedDict()
            req_content["application/json"]["schema"] = req_schema_clean
            if req_examples:
                req_content["application/json"]["examples"] = req_examples
            op["requestBody"] = OrderedDict([
                ("required", True),
                ("content", req_content),
            ])

            resp_path = get_response_path(op_name, source)
            if resp_path and os.path.exists(resp_path):
                try:
                    resp_schema = load_json(resp_path)
                    resp_title = resp_schema.get("title", op_name)
                    resp_examples = extract_examples(resp_schema, resp_title, example_data)
                    resp_schema_clean = extract_schema(resp_schema)
                    resp_content = OrderedDict()
                    resp_content["application/json"] = OrderedDict()
                    resp_content["application/json"]["schema"] = resp_schema_clean
                    if resp_examples:
                        resp_content["application/json"]["examples"] = resp_examples
                    op["responses"] = OrderedDict([
                        ("default", OrderedDict([
                            ("description", f"{op_name} response"),
                            ("content", resp_content),
                        ]))
                    ])
                except Exception:
                    op["responses"] = OrderedDict([
                        ("200", OrderedDict([("description", "Success")]))
                    ])
            else:
                op["responses"] = OrderedDict([
                    ("200", OrderedDict([("description", "Success")]))
                ])

        error_codes_for_cmd = error_codes_map.get(op_name, [])
        if error_codes_for_cmd:
            op["x-error-codes"] = [
                OrderedDict([
                    ("code", e["code"]),
                    ("description", e["description"]),
                    ("iot_status_code", e["iot_status_code"]),
                    ("cause", e.get("cause", "")),
                    ("recommended_action", e.get("recommended_action", "")),
                ])
                for e in error_codes_for_cmd
            ]

        paths[f"/{op_name}"] = OrderedDict([("post", op)])

    openapi["paths"] = paths
    return openapi, skipped


def main():
    print("Generating OpenAPI spec (with tag descriptions from markdown) ...")
    openapi, skipped = build_openapi()

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(openapi, f, indent=4, ensure_ascii=False)

    group_count = len(openapi.get("x-tagGroups", []))
    tag_count = len(openapi.get("tags", []))
    path_count = len(openapi.get("paths", {}))
    print(f"  {group_count} tag groups, {tag_count} tags, {path_count} endpoints")

    if skipped:
        for warning in skipped:
            print(warning)

    print(f"  Written to {OUTPUT_PATH}")
    print("\nDone!")


if __name__ == "__main__":
    main()
