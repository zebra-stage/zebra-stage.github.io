#!/usr/bin/env python3
"""
generate_combined_descriptions.py
----------------------------------
Regenerates schemas/operation_descriptions/*.md files in a unified format
that includes both MQTT and REST endpoint details and parameter tables.

Format per file:
  Description -> Usage -> MQTT Endpoint -> MQTT Params Table
  -> REST Endpoint -> REST Params Table

Run:
    python scripts/generate_combined_descriptions.py
Then:
    python scripts/generate_openapi_tags_md.py
"""

import json
import os
import re
import sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(SCRIPT_DIR)

OP_DESC_DIR = os.path.join(ROOT, "schemas", "operation_descriptions")
CMD_DIR = os.path.join(ROOT, "schemas", "commands", "gen2x")
REST_API_DIR = os.path.join(ROOT, "rest api")
BASE_URL_TEMPLATE = "https://&lt;device-ip&gt;"

# ── Operation → REST folder mapping ──────────────────────────────────────────
OP_TO_REST = {
    "enable_tag_protection":  "enableTagProtection",
    "disable_tag_protection": "disableTagProtection",
    "enable_tag_visibility":  "enableTagVisibility",
    "disable_tag_visibility": "disableTagVisibility",
    "enable_short_range":     "enableShortRange",
    "enable_fastid":          "enableFastid",
    "disable_fastid":         "disableFastid",
    "enable_tagfocus":        "enableTagfocus",
    "disable_tagfocus":       "disableTagfocus",
    "quiet_tags":             "quietTags",
    "unquiet_tags":           "unquietTags",
    "get_gen2x_config":       "getGen2xConfig",
    "start":                  "start",
    "stop":                   "stop",
}

# ── REST endpoint routing ─────────────────────────────────────────────────────
REST_ENDPOINT = {
    "enable_tag_protection":  ("PUT", "/cloud/impinjGen2X"),
    "disable_tag_protection": ("PUT", "/cloud/impinjGen2X"),
    "enable_tag_visibility":  ("PUT", "/cloud/impinjGen2X"),
    "disable_tag_visibility": ("PUT", "/cloud/impinjGen2X"),
    "enable_short_range":     ("PUT", "/cloud/impinjGen2X"),
    "enable_fastid":          ("PUT", "/cloud/impinjGen2X"),
    "disable_fastid":         ("PUT", "/cloud/impinjGen2X"),
    "enable_tagfocus":        ("PUT", "/cloud/impinjGen2X"),
    "disable_tagfocus":       ("PUT", "/cloud/impinjGen2X"),
    "quiet_tags":             ("PUT", "/cloud/impinjGen2X"),
    "unquiet_tags":           ("PUT", "/cloud/impinjGen2X"),
    "get_gen2x_config":       ("GET", "/cloud/impinjGen2X"),
    "start":                  ("PUT", "/cloud/start"),
    "stop":                   ("PUT", "/cloud/stop"),
}

# ── REST staging notes (shown below endpoint table) ───────────────────────────
REST_NOTES = {
    "enable_tag_protection":  "",
    "disable_tag_protection": "",
    "enable_tag_visibility":  "",
    "disable_tag_visibility": "",
    "enable_short_range":     "",
    "enable_fastid":          "",
    "disable_fastid":         "",
    "enable_tagfocus":        "",
    "disable_tagfocus":       "",
    "quiet_tags":             "",
    "unquiet_tags":           "",
    "get_gen2x_config":       "",
    "start":                  "",
    "stop":                   "",
}

# Always render one combined parameter section for these operations.
FORCE_MERGED_PARAMS = {
    "enable_tag_protection",
    "enable_tag_visibility",
    "disable_tag_visibility",
}


# ── Helpers ───────────────────────────────────────────────────────────────────

def load_json(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def parse_existing_md(text):
    """Extract Description, Usage, and Persistence from existing .md file.
    Stops at '---', HTML tags, or the next bold heading to avoid picking up
    generated endpoint/parameter blocks from a previous run.
    """
    def extract_section(heading, src):
        pattern = rf"\*\*{re.escape(heading)}:\*\*\s*\n(.*?)(?=\n\*\*[A-Z]|\n---|\n<|\Z)"
        m = re.search(pattern, src, re.DOTALL)
        return m.group(1).strip() if m else ""

    desc = extract_section("Description", text)
    usage = extract_section("Usage", text)
    return desc, usage


def leaf_params_for_bullets(schema):
    """
    Recursively extract leaf (non-object) parameters for bullet-list display.
    Skips object-wrapper fields, showing only concrete typed leaf fields.
    """
    if not schema:
        return []
    props = schema.get("properties", {})
    required = schema.get("required", [])
    rows = []
    for key, prop in props.items():
        ptype = prop.get("type", "object")
        if ptype == "object" and "properties" in prop:
            child_schema = dict(prop)
            child_schema.setdefault("required", [])
            rows.extend(leaf_params_for_bullets(child_schema))
        else:
            desc = prop.get("description", "")
            const = prop.get("const")
            if const is not None:
                desc = (desc + f" Must be `{const}`.").strip()
            elif prop.get("enum") and "const" not in prop:
                vals = ", ".join(f"`{v}`" for v in prop["enum"])
                desc = (desc + f" One of: {vals}.").strip()
            rows.append({
                "name": key,
                "type": ptype,
                "required": key in required,
                "description": desc,
            })
    return rows


def params_bullets(rows):
    """Render parameter rows as a markdown bullet list."""
    if not rows:
        return "_No parameters required._"
    return "\n".join(
        f"- **{r['name']}** ({r['type']}): {r['description']}"
        for r in rows
    )


def html_endpoint_table(row_pairs):
    """Build an HTML endpoint detail table from (label, value_html) pairs."""
    inner = "".join(
        f"<tr><td>{label}</td><td>{value}</td></tr>"
        for label, value in row_pairs
    )
    return f'<table class="endpoint-table"><tbody>{inner}</tbody></table>'


def method_badge_html(method):
    cls = f"ep-method ep-method-{method.lower()}"
    return f'<span class="{cls}">{method}</span>'


def get_mqtt_command_name(cmd_schema):
    return (
        cmd_schema.get("properties", {})
        .get("command", {})
        .get("const", "set_impinjGen2X")
    )


# ── Main generator ────────────────────────────────────────────────────────────

def generate(op_name):
    # Load existing description/usage narrative
    md_path = os.path.join(OP_DESC_DIR, f"{op_name}.md")
    if os.path.exists(md_path):
        with open(md_path, encoding="utf-8") as f:
            existing = f.read()
        description, usage = parse_existing_md(existing)
    else:
        description, usage = "", ""

    # Load MQTT command schema
    cmd_path = os.path.join(CMD_DIR, f"{op_name}.json")
    cmd_schema = load_json(cmd_path) if os.path.exists(cmd_path) else {}
    mqtt_cmd = get_mqtt_command_name(cmd_schema)
    mqtt_payload = cmd_schema.get("properties", {}).get("payload", {})
    mqtt_leaf = leaf_params_for_bullets(mqtt_payload)

    # Load REST request schema
    rest_folder = OP_TO_REST.get(op_name, "")
    rest_schema_path = os.path.join(REST_API_DIR, rest_folder, f"{rest_folder}_request_schema.json")
    rest_schema = load_json(rest_schema_path) if os.path.exists(rest_schema_path) else {}
    rest_leaf = leaf_params_for_bullets(rest_schema)

    # REST endpoint details
    method, path = REST_ENDPOINT.get(op_name, ("PUT", "/cloud/impinjGen2X"))
    rest_note = REST_NOTES.get(op_name, "")

    # Merge params if MQTT and REST field names are identical
    mqtt_names = {r["name"] for r in mqtt_leaf}
    rest_names = {r["name"] for r in rest_leaf}
    merged = (mqtt_names == rest_names) or (op_name in FORCE_MERGED_PARAMS)

    # For forced-merged operations, keep only parameters common to both protocols.
    if op_name in FORCE_MERGED_PARAMS:
        common_names = rest_names.intersection(mqtt_names)
        mqtt_leaf = [r for r in mqtt_leaf if r["name"] in common_names]

    # MQTT endpoint HTML block — single <div> passes md() block check unchanged
    mqtt_block = (
        '<div class="endpoint-block">'
        '<div class="ep-heading ep-mqtt">MQTT Endpoint Details</div>'
        + html_endpoint_table([("Command", f"<code>{mqtt_cmd}</code>")])
        + "</div>"
    )

    # REST endpoint HTML block
    rest_rows = [
        ("Method", method_badge_html(method)),
        ("Path", f"<code>{path}</code>"),
        ("Request URL", f"<code>{BASE_URL_TEMPLATE}{path}</code>"),
        ("Content-Type", "<code>application/json</code>"),
    ]
    note_html = f'<p class="ep-note">{rest_note}</p>' if rest_note else ""
    rest_block = (
        '<div class="endpoint-block">'
        '<div class="ep-heading ep-rest">REST Endpoint Details</div>'
        + html_endpoint_table(rest_rows)
        + note_html
        + "</div>"
    )

    # Assemble parts joined with double newlines so md() block-splits correctly
    parts = []
    parts.append(f"**Description:**\n{description}")
    parts.append(f"**Usage:**\n{usage}")

    if merged:
        parts.append("**Parameters (MQTT & REST):**")
        parts.append(params_bullets(mqtt_leaf))
    else:
        if mqtt_leaf:
            parts.append("**MQTT Parameters:**")
            parts.append(params_bullets(mqtt_leaf))
        if rest_leaf:
            parts.append("**REST Parameters:**")
            parts.append(params_bullets(rest_leaf))

    parts.append(mqtt_block)
    parts.append(rest_block)

    return "\n\n".join(parts)


def main():
    ops = list(OP_TO_REST.keys())
    print(f"Generating combined descriptions for {len(ops)} operations...")
    for op_name in ops:
        out = generate(op_name)
        dest = os.path.join(OP_DESC_DIR, f"{op_name}.md")
        with open(dest, "w", encoding="utf-8") as f:
            f.write(out)
        print(f"  Updated: {op_name}.md")
    print("Done.")
    print("\nNext steps:")
    print("  python scripts/generate_openapi_tags_md.py")


if __name__ == "__main__":
    main()
