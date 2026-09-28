# Plan: Replace "FXR60 / FXR90" with "FXR readers" in the API Docs

**Date:** 2026-09-24
**Request (PDM):** Customers don't generally know the FXR60 by name; it's only given to selected customers. Remove FXR60 / FXR90 references from the REST and MQTT API documentation and refer to the products as **"FXR readers"**. This includes file and folder names.

**Status:** Plan for discussion. No changes have been made yet.

---

## 1. Current Footprint

There are **418 mentions across 6 files**. Two file names also contain the model numbers.

| File | Mentions | Notes |
|---|---|---|
| `rest/FXR_60-90_rest_api.yaml` | 137 | REST spec (auto-generated, see Risk 1) |
| `mqtt/FXR_60-90_mqtt_api.json` | 137 | MQTT spec |
| `mqtt/docs/openapi_md.json` | 137 | Copy of the MQTT spec used by the viewer |
| `index.html` | 5 | Landing page title, heading, download links |
| `mqtt/docs/index.html` | 1 | Page meta description |
| `rest/docs/swagger.html` | 1 | Loads the REST YAML by file name |

The mentions fall into five groups (A to E), and each group needs different handling.

---

## 2. Group A: Generic Mentions (Direct Replacement)

This group covers most of the mentions. They can be replaced with **"FXR readers"** without losing any information.

| Current | Proposed |
|---|---|
| `Applies To: FXR60 / FXR90` | `Applies To: FXR readers` |
| "…not supported on FXR60/FXR90." | "…not supported on FXR readers." |
| "Local REST is always enabled on FXR60/FXR90…" | "Local REST is always enabled on FXR readers…" |
| "FXR documentation includes **FXR60** and **FXR90**." | *(remove sentence)* |
| Page titles: "FXR60 / FXR90 API Documentation" | "FXR Readers API Documentation" |
| "Zebra FXR60 and FXR90 fixed RFID readers" | "Zebra FXR fixed RFID readers" |

---

## 3. Group B: Model-Specific Notes (PDM Decision Needed)

These notes describe real hardware differences. Replacing them with "FXR readers" would make the documentation incorrect. The proposal is to describe the **feature** instead of the model name.

| Current | Proposed |
|---|---|
| **FXR60 only.** Display APIs are not available on FXR90. `Applies To: FXR60` | **Applies only to FXR readers with a display.** |
| **FXR60 Premium only.** The stack LED is not on other FXR60 variants. The FXR90 has no stack light. `Applies To: FXR60 Premium` | **Applies only to FXR readers with a stack LED.** Check `GET /cloud/capabilities` (`stackLED.supported`) before use. |
| "Supported on FXR90 only." `Applies To: FXR90` (cellular) | **Applies only to FXR readers with cellular connectivity (`wan0`).** |
| "`wan0` is FXR90 only." / "not present on FXR60" | "`wan0` is present only on FXR readers with cellular connectivity." |
| `wan0.activeSim`: "FXR90 only." | "Only on FXR readers with cellular connectivity." |
| "GPO port number (1–4 for FXR90; device-specific maximum applies)." | "GPO port number (the maximum depends on the device)." |
| "FXR90 returns supported as false. FXR60 returns…" (stack LED schema) | "Readers without a stack LED return `supported: false`. Readers with one return…" |
| "FXR90 and FXR60 support only POE, POE+, and P…" (power source) | "FXR readers support only POE, POE+, and P…" |

---

## 4. Group C: Values Returned by the Reader (Recommend Keeping)

| Item | Where |
|---|---|
| `model` enum: `FXR60`, `FXR90` | Schema definition |
| `model` field description listing `FXR90`, `FX7500`, `FX9600`, `ATR7000`… | Reader info response |
| `model: FXR60` | Example response |

The device actually sends these values. If they are removed from the docs, integrators will receive values the documentation doesn't describe.

**Recommendation:** Keep the enum values as they are. Change only the example response to a neutral value where possible.

---

## 5. Group D: Example Data (Neutral Values)

These are sample values only, so they can be changed freely.

| Current | Proposed |
|---|---|
| `/data/apps/fxr60-client.key` / `.crt` | `/data/apps/reader-client.key` / `.crt` |
| `pfxPassword: Fxr60-Client-Pfx-2026!` | `pfxPassword: Reader-Client-Pfx-2026!` |
| `hostname: FXR90C60C001` | `hostname: FXRC60C001` |
| `ssid: FXR90Hotspot` | `ssid: ReaderHotspot` |
| `https://…/BUILDS/FXR90_2.0.10.tar.bz2` | `https://…/BUILDS/FXR_2.0.10.tar.bz2` |
| Example tabs `fxr60` / `fxr90` (capabilities) | `reader_with_display_and_stackled` / `reader_without_stackled` |
| Example tabs `fxr60` / `fxr90` (network) | `reader_ethernet_wifi` / `reader_with_cellular` |

---

## 6. Group E: File, Repo, and Folder Names

| Item | Current | Proposed | Impact |
|---|---|---|---|
| REST spec file | `rest/FXR_60-90_rest_api.yaml` | `rest/FXR_rest_api.yaml` | Update links in `index.html` and `rest/docs/swagger.html` |
| MQTT spec file | `mqtt/FXR_60-90_mqtt_api.json` | `mqtt/FXR_mqtt_api.json` | Update the link in `index.html` |
| GitHub repo | `fxr60-90-api-docs` | `fxr-api-docs` | Git push/pull is redirected automatically. **GitHub Pages links that people have saved will stop working**, so the new link must be shared. |
| Local project folder | `fxr60-90-rest-mqtt-main` | `fxr-rest-mqtt` | Local only. Close the editor before renaming. |

---

## 7. Risks

### Risk 1: The REST YAML Is Auto-Generated
The REST YAML header says it is generated by `FXR60-90/rest/scripts/FXR_60-90_api_rest_api.py` from `operation_descriptions/*.md` and `operation_examples/`. Those source files are **not in this repo**.

If only the output YAML is edited, the next rebuild will bring the FXR60 / FXR90 text back. The changes must also be made in:
- the `operation_descriptions/*.md` files
- the `operation_examples/` files
- the generator script, including any paths it uses if folders are renamed

### Risk 2: Git History Still Contains FXR60
After the change, the current files will be clean, but **older commits on GitHub will still mention FXR60**.

- **If the repo is private or internal:** no action is needed.
- **If the repo is public and FXR60 is treated as confidential:** there are two options:
  - rewrite the git history (destructive; everyone with a copy must re-clone)
  - publish a fresh repo containing only the cleaned files

---

## 8. Open Questions for PDM

| # | Question | Proposed Answer | PDM Decision |
|---|---|---|---|
| 1 | Is "FXR readers" the approved name everywhere, including page titles? | Yes | |
| 2 | Is feature-based wording OK for model-specific notes ("FXR readers with a display / stack LED / cellular")? | Yes | |
| 3 | Can the `model` enum values (`FXR60`, `FXR90`) stay, since the reader returns them? | Keep | |
| 4 | Are the example tab labels in Group D acceptable? | Yes | |
| 5 | Should the GitHub repo be renamed, knowing that saved Pages links will break? | Rename, share the new link | |
| 6 | Is the repo public? Does old git history need to be cleaned? | Depends on visibility | |
| 7 | Where do the generator source files live, and who owns them? | To confirm | |

---

## 9. Execution Order (After PDM Sign-Off)

1. Apply Groups A to D in the generator source files (descriptions, examples, script), then rebuild the REST YAML.
2. Apply the same changes to `mqtt/FXR_60-90_mqtt_api.json` and `mqtt/docs/openapi_md.json`.
3. Rename the spec files and update the three links (`index.html` ×2, `rest/docs/swagger.html`).
4. Search the repo again and confirm that the only remaining mentions are the Group C values PDM approved.
5. Check the REST (Swagger) and MQTT viewers in a browser, including the display, stack LED, and cellular sections.
6. Commit and push.
7. Rename the GitHub repo, share the new link, then rename the local folder.
