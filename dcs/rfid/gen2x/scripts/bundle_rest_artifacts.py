"""
Bundle all REST API artifact JSON files into a single docs/rest_artifacts.json.

Usage:
    python scripts/bundle_rest_artifacts.py

Reads from:  rest api/<folder>/<folder>_<suffix>.json
Writes to:   docs/rest_artifacts.json

The individual files in 'rest api/' remain the single source of truth.
Run this script after editing any REST artifact file, then commit the
updated docs/rest_artifacts.json.
"""

import json
import os
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REST_API_DIR = os.path.join(REPO_ROOT, "rest api")
OUTPUT_FILE = os.path.join(REPO_ROOT, "docs", "rest_artifacts.json")

SUFFIXES = [
    "request_example",
    "request_examples",
    "request_schema",
    "response_example",
    "response_schema",
]


def main():
    if not os.path.isdir(REST_API_DIR):
        print(f"ERROR: '{REST_API_DIR}' not found.", file=sys.stderr)
        sys.exit(1)

    bundle = {}

    for folder in sorted(os.listdir(REST_API_DIR)):
        folder_path = os.path.join(REST_API_DIR, folder)
        if not os.path.isdir(folder_path):
            continue

        entry = {}
        for suffix in SUFFIXES:
            filename = f"{folder}_{suffix}.json"
            filepath = os.path.join(folder_path, filename)
            if os.path.isfile(filepath):
                with open(filepath, encoding="utf-8") as f:
                    try:
                        entry[suffix] = json.load(f)
                    except json.JSONDecodeError as e:
                        print(f"WARNING: Invalid JSON in {filepath}: {e}", file=sys.stderr)
                        entry[suffix] = None
            else:
                entry[suffix] = None

        bundle[folder] = entry

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(bundle, f, indent=2)
        f.write("\n")

    count = sum(
        1
        for folder in bundle.values()
        for v in folder.values()
        if v is not None
    )
    print(f"Bundled {count} artifacts from {len(bundle)} folders into {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
