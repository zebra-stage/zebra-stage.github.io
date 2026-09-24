#!/usr/bin/env python3
"""
Menu-driven Gen2X REST tester.

This script is intentionally separate from MQTT tooling so it does not affect
existing MQTT workflows.
"""

import json
import os
import ssl
import time
from datetime import datetime, timezone
from urllib import error, request
from urllib.parse import urlparse, urlunparse

# === Configuration ===
BASE_URL = "https://10.117.229.9"
AUTH_TOKEN = ""  # Optional: Bearer token
BASIC_USERNAME = ""  # Optional: Basic auth username
BASIC_PASSWORD = ""  # Optional: Basic auth password
REQUEST_TIMEOUT_SECONDS = 15

# TLS behavior (similar flexibility to MQTT script)
VERIFY_TLS = False
CERTS_DIR = r"C:\Users\AA5123\Desktop\TLS folder"
CA_CERT = os.path.join(CERTS_DIR, "ca9.pem")

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
REST_API_DIR = os.path.join(PROJECT_ROOT, "rest api")

OUTPUT_BASE = os.path.join(SCRIPT_DIR, "rest_capture")
REQUESTS_DIR = os.path.join(OUTPUT_BASE, "request_messages")
RESPONSES_DIR = os.path.join(OUTPUT_BASE, "response_messages")
os.makedirs(REQUESTS_DIR, exist_ok=True)
os.makedirs(RESPONSES_DIR, exist_ok=True)

REQUEST_FILE_COUNTS = {}
RESPONSE_FILE_COUNTS = {}

# Keys are menu entries to preserve stable sorted order like MQTT tester.
COMMANDS = {
    "1_enable_tag_protection": {
        "folder": "enableTagProtection",
        "method": "PUT",
        "path": "/cloud/impinjGen2X",
    },
    "2_disable_tag_protection": {
        "folder": "disableTagProtection",
        "method": "PUT",
        "path": "/cloud/impinjGen2X",
    },
    "3_enable_tag_visibility": {
        "folder": "enableTagVisibility",
        "method": "PUT",
        "path": "/cloud/impinjGen2X",
    },
    "4_disable_tag_visibility": {
        "folder": "disableTagVisibility",
        "method": "PUT",
        "path": "/cloud/impinjGen2X",
    },
    "5_enable_short_range": {
        "folder": "enableShortRange",
        "method": "PUT",
        "path": "/cloud/impinjGen2X",
    },
    "6_enable_fastid": {
        "folder": "enableFastid",
        "method": "PUT",
        "path": "/cloud/impinjGen2X",
    },
    "7_disable_fastid": {
        "folder": "disableFastid",
        "method": "PUT",
        "path": "/cloud/impinjGen2X",
    },
    "8_enable_tagfocus": {
        "folder": "enableTagfocus",
        "method": "PUT",
        "path": "/cloud/impinjGen2X",
    },
    "9_disable_tagfocus": {
        "folder": "disableTagfocus",
        "method": "PUT",
        "path": "/cloud/impinjGen2X",
    },
    "10_quiet_tags": {
        "folder": "quietTags",
        "method": "PUT",
        "path": "/cloud/impinjGen2X",
    },
    "11_unquiet_tags": {
        "folder": "unquietTags",
        "method": "PUT",
        "path": "/cloud/impinjGen2X",
    },
    "12_get_gen2x_config": {
        "folder": "getGen2xConfig",
        "method": "GET",
        "path": "/cloud/impinjGen2X",
    },
    "13_start_with_gen2x": {
        "folder": "start",
        "method": "PUT",
        "path": "/cloud/start",
    },
    "14_stop": {
        "folder": "stop",
        "method": "PUT",
        "path": "/cloud/stop",
    },
}


def build_filename(name, suffix, counts):
    counts[name] = counts.get(name, 0) + 1
    occurrence = counts[name]
    if occurrence == 1:
        return f"{name}_{suffix}.json"
    return f"{name}_{occurrence}_{suffix}.json"


def load_request_payload(folder):
    expected_prefix = folder
    filename = f"{expected_prefix}_request_example.json"
    path = os.path.join(REST_API_DIR, folder, filename)
    if not os.path.exists(path):
        return {}
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def save_request(name, method, path, payload):
    filename = build_filename(name, "request", REQUEST_FILE_COUNTS)
    filepath = os.path.join(REQUESTS_DIR, filename)
    envelope = {
        "timestamp": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
        "method": method,
        "path": path,
        "payload": payload,
    }
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(envelope, f, indent=2)
    print(f"  Saved: {filepath}")


def save_response(name, method, path, status, headers, body):
    filename = build_filename(name, "response", RESPONSE_FILE_COUNTS)
    filepath = os.path.join(RESPONSES_DIR, filename)
    envelope = {
        "timestamp": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
        "method": method,
        "path": path,
        "status": status,
        "headers": headers,
        "body": body,
    }
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(envelope, f, indent=2)
    print(f"  Saved: {filepath}")


def build_auth_header():
    if AUTH_TOKEN:
        return f"Bearer {AUTH_TOKEN}"
    if BASIC_USERNAME:
        import base64

        raw = f"{BASIC_USERNAME}:{BASIC_PASSWORD}".encode("utf-8")
        return "Basic " + base64.b64encode(raw).decode("ascii")
    return ""


def build_ssl_context():
    if VERIFY_TLS:
        if os.path.exists(CA_CERT):
            return ssl.create_default_context(cafile=CA_CERT)
        return ssl.create_default_context()

    context = ssl.create_default_context()
    context.check_hostname = False
    context.verify_mode = ssl.CERT_NONE
    return context


def maybe_http_fallback_url(url, error_text):
    """If HTTPS fails with EOF during TLS negotiation, retry as HTTP."""
    if "UNEXPECTED_EOF_WHILE_READING" not in (error_text or ""):
        return None

    parsed = urlparse(url)
    if parsed.scheme != "https":
        return None

    return urlunparse(("http", parsed.netloc, parsed.path, parsed.params, parsed.query, parsed.fragment))


def send_command(name, command):
    method = command["method"].upper()
    path = command["path"]
    url = BASE_URL.rstrip("/") + path

    payload = load_request_payload(command["folder"])
    data = None
    headers = {"Content-Type": "application/json"}

    auth = build_auth_header()
    if auth:
        headers["Authorization"] = auth

    if method in ("PUT", "POST", "PATCH"):
        data = json.dumps(payload).encode("utf-8")

    print(f"\n<< Sending [{name}] {method} {url}")
    if data is not None:
        print(json.dumps(payload, indent=2))

    req = request.Request(url=url, method=method, data=data, headers=headers)
    ssl_context = build_ssl_context() if url.startswith("https://") else None

    save_request(name, method, path, payload)

    try:
        with request.urlopen(req, context=ssl_context, timeout=REQUEST_TIMEOUT_SECONDS) as resp:
            status = resp.getcode()
            raw = resp.read().decode("utf-8", errors="replace")
            resp_headers = dict(resp.headers.items())
    except error.HTTPError as exc:
        status = exc.code
        raw = exc.read().decode("utf-8", errors="replace")
        resp_headers = dict(exc.headers.items()) if exc.headers else {}
    except Exception as exc:
        # Common reader setup: REST served over HTTP while HTTPS URL is configured.
        fallback_url = maybe_http_fallback_url(url, str(exc))
        if fallback_url:
            print(f"!! HTTPS failed with TLS EOF. Retrying over HTTP: {fallback_url}")
            try:
                req = request.Request(url=fallback_url, method=method, data=data, headers=headers)
                with request.urlopen(req, timeout=REQUEST_TIMEOUT_SECONDS) as resp:
                    status = resp.getcode()
                    raw = resp.read().decode("utf-8", errors="replace")
                    resp_headers = dict(resp.headers.items())
            except error.HTTPError as retry_exc:
                status = retry_exc.code
                raw = retry_exc.read().decode("utf-8", errors="replace")
                resp_headers = dict(retry_exc.headers.items()) if retry_exc.headers else {}
            except Exception as retry_exc:
                status = 0
                raw = str(retry_exc)
                resp_headers = {}
        else:
            status = 0
            raw = str(exc)
            resp_headers = {}

    try:
        body = json.loads(raw) if raw else ""
    except json.JSONDecodeError:
        body = {"raw": raw}

    print(f">> Response [{name}] status={status}")
    print(json.dumps(body, indent=2))
    save_response(name, method, path, status, resp_headers, body)


def print_menu():
    print("\n===== Impinj Gen2X REST Tester =====")
    for key in sorted(COMMANDS.keys()):
        print(f"  {key}")
    print("  0_run_all        - Run all commands sequentially")
    print("  q                - Quit")
    print("====================================")


def main():
    print(f"Target BASE_URL: {BASE_URL}")
    print(f"TLS verification: {'enabled' if VERIFY_TLS else 'disabled'}")

    try:
        while True:
            print_menu()
            choice = input("Select command: ").strip()

            if choice == "q":
                break
            if choice == "0_run_all":
                for name in sorted(COMMANDS.keys()):
                    send_command(name, COMMANDS[name])
                    time.sleep(1)
                continue
            if choice in COMMANDS:
                send_command(choice, COMMANDS[choice])
                continue

            print("Invalid choice. Try again.")
    except KeyboardInterrupt:
        print("\nInterrupted.")

    print("Done.")


if __name__ == "__main__":
    main()
