Use this guide to enable, configure, and manage Impinj Gen2X features on Zebra fixed RFID readers using both MQTT and REST APIs. These features are currently supported with Firmware 4.0.8 and above, with additional fixed reader support coming soon.

## Overview

This reference explains how to use Gen2X operations across MQTT and REST for:

- **Protected Mode**: Lock individual tags with a password so they are invisible to unauthorized readers. 
- **FastID**: Return the EPC and TID in a single inventory response. 
- **TagFocus**: Reduce repeated reports from already-read tags so the reader prioritizes new tags. 
- **Tag Quieting**: Quiet specific tags by EPC ID through reader-level configuration. 

Impinj Gen2X extends Gen2 radio and logical layers. Tags must support Gen2X to use these features. For tag compatibility, refer to [Impinj Gen2X specifications](http://www.impinj.com/Gen2X).

## Protocols

This documentation covers both interfaces for the same Gen2X feature set:

- MQTT: Command-based operations for cloud-connected workflows.
- REST: HTTPS endpoints for direct API integration.

Use either interface based on your deployment and integration architecture.

## Before You Begin

- Set up your MQTT connection, broker, and topic before using this API. For setup instructions, see the [Zebra IoTC MQTT Setup Guide](https://zebradevs.github.io/rfid-ziotc-docs/other_cloud_support/MQTT/index.html).
- For REST API integration and setup instructions, see the following guide: [Zebra IoTC HTTP POST Integration Guide](https://zebradevs.github.io/rfid-ziotc-docs/other_cloud_support/HTTP_POST/index.html)
- Protected Mode needs an access password on the tag. See [How to Set the Access Password](#info-how-to-set-the-access-password).

## Getting Started with REST API

### Authentication

1. Send `PUT /cloud/localRestLogin`.
2. Extract the access token from the login response.
3. Add the token to all protected requests.

### Configuration Workflow

Use this sequence to safely stage and apply Gen2X updates:

1. Send `GET /cloud/impinjGen2X` to check current Gen2X configuration.
2. Send `PUT /cloud/stop` to stop the IoT cloud service if it is running.
3. Send `PUT /cloud/impinjGen2X` to stage one or more feature updates.
4. Send `GET /cloud/impinjGen2X` to verify staged configuration.
5. Send `PUT /cloud/start` with `applyImpinjGen2X: true` to start the service and apply staged configuration.

## Getting Started with MQTT

Use this sequence for the same workflow through MQTT commands:

1. Send `get_impinjGen2X` to check current Gen2X configuration.
2. Send `stop` to stop the IoT cloud service if it is running.
3. Send `set_impinjGen2X` to stage one or more feature updates.
4. Send `get_impinjGen2X` to verify staged configuration.
5. Send `start` with `applyImpinjGen2X: true` to start the service and apply staged configuration.

## How to Set the Access Password

Use this procedure to read the Access Password on a tag, write a new one if needed, and confirm it is stored.

### Step 1 — Read the current password

You are checking whether the tag already has an Access Password. Many tags are supplied with one. If a password is already set, use it and skip Steps 3 and 4.

1. Send a mode command that reads words 0–3 of the `RESERVED` bank.
2. Use **REST** `PUT /cloud/mode` or **MQTT** `set_mode`.
3. Include a `filter` with the tag EPC so only that tag is read.

<div class="payload-section">
<div class="tab-bar">
<button type="button" class="tab-btn active" data-tab="ap-read-mqtt">MQTT Example</button>
<button type="button" class="tab-btn" data-tab="ap-read-rest">REST Example</button>
</div>
<div class="tab-panel active" id="ap-read-mqtt">
<pre class="language-json"><code class="language-json">{
  "command": "set_mode",
  "command_id": "1f2c9d84-7b30-4a56-9c81-2e6a0b47d913",
  "payload": {
    "type": "CUSTOM",
    "antennas": [1],
    "transmitPower": 30,
    "filter": {
      "value": "e2801191a5030069073b426d",
      "match": "prefix",
      "operation": "include"
    },
    "accesses": [
      {
        "type": "READ",
        "config": {
          "membank": "RESERVED",
          "wordPointer": 0,
          "wordCount": 4
        }
      }
    ]
  }
}</code></pre>
</div>
<div class="tab-panel" id="ap-read-rest">
<pre class="language-json"><code class="language-json">{
  "type": "CUSTOM",
  "antennas": [1],
  "transmitPower": 30,
  "filter": {
    "value": "e2801191a5030069073b426d",
    "match": "prefix",
    "operation": "include"
  },
  "accesses": [
    {
      "type": "READ",
      "config": {
        "membank": "RESERVED",
        "wordPointer": 0,
        "wordCount": 4
      }
    }
  ]
}</code></pre>
</div>
</div><!-- /payload-section -->

### Step 2 — Run the read

The read does not run when the mode command returns. You start the reader so the tag is inventoried, then stop it and collect the result from the tag data stream.

1. Start the reader with **REST** `PUT /cloud/start` or **MQTT** `start`. Send an empty payload. Do not send `applyImpinjGen2X`.
2. Wait until the tag is read, then stop the reader with **REST** `PUT /cloud/stop` or **MQTT** `stop`.
3. Open the tag data stream and find `accessResults`. The result is 16 hex characters. The last 8 characters are the Access Password.

Example result:

```json
{
  "data": {
    "idHex": "e2801191a5030069073b426d",
    "accessResults": [
      "1234876512348765"
    ]
  }
}
```

| Result | What you do next |
|---|---|
| `0000000000000000` | No password is set. Go to Step 3. |
| Any other value, for example `1234876512348765` | Use the last 8 characters (`12348765`) as the Access Password, or go to Step 3 to replace it. |

### Step 3 — Write the Access Password

You are writing a new Access Password to the tag. This sets a first password or replaces an existing one.

1. Send a mode command that writes 8 hexadecimal characters to `wordPointer: 2`.
2. Use **REST** `PUT /cloud/mode` or **MQTT** `set_mode`.
3. Include a `filter` with the tag EPC so the password is written only to that tag.
4. Do not use `00000000`. On a Gen2 tag that value means no password is set, so Protected Mode cannot lock the tag.

The example below writes `77777777`.

<div class="payload-section">
<div class="tab-bar">
<button type="button" class="tab-btn active" data-tab="ap-write-mqtt">MQTT Example</button>
<button type="button" class="tab-btn" data-tab="ap-write-rest">REST Example</button>
</div>
<div class="tab-panel active" id="ap-write-mqtt">
<pre class="language-json"><code class="language-json">{
  "command": "set_mode",
  "command_id": "6b0e3a17-45d2-4c98-8f31-9a7c25e08b64",
  "payload": {
    "type": "CUSTOM",
    "antennas": [1],
    "transmitPower": 30,
    "filter": {
      "value": "e2801191a5030069073b426d",
      "match": "prefix",
      "operation": "include"
    },
    "accesses": [
      {
        "type": "WRITE",
        "config": {
          "membank": "RESERVED",
          "wordPointer": 2,
          "data": "77777777"
        }
      }
    ]
  }
}</code></pre>
</div>
<div class="tab-panel" id="ap-write-rest">
<pre class="language-json"><code class="language-json">{
  "type": "CUSTOM",
  "antennas": [1],
  "transmitPower": 30,
  "filter": {
    "value": "e2801191a5030069073b426d",
    "match": "prefix",
    "operation": "include"
  },
  "accesses": [
    {
      "type": "WRITE",
      "config": {
        "membank": "RESERVED",
        "wordPointer": 2,
        "data": "77777777"
      }
    }
  ]
}</code></pre>
</div>
</div><!-- /payload-section -->

### Step 4 — Run the write

The write does not run when the mode command returns. You start the reader so the write from Step 3 can execute, then stop it and confirm the result.

1. Start the reader with **REST** `PUT /cloud/start` or **MQTT** `start`. Send an empty payload. Do not send `applyImpinjGen2X`.
2. Wait until the tag is written, then stop the reader with **REST** `PUT /cloud/stop` or **MQTT** `stop`.
3. Confirm `accessResults` shows `SUCCESS`.

```json
{
  "data": {
    "idHex": "e2801191a5030069073b426d",
    "accessResults": [
      "SUCCESS"
    ]
  }
}
```

### Step 5 — Verify the password

You are reading the password back to confirm it is stored on the tag.

1. Repeat Steps 1 and 2.
2. Confirm that the last 8 characters of `accessResults` match the password you wrote.

```json
{
  "data": {
    "idHex": "e2801191a5030069073b426d",
    "accessResults": [
      "0000000077777777"
    ]
  }
}
```

Access Password = `77777777`.

The tag is ready for Protected Mode. Use the same value in `tagProtect.password`.

## Feature Scope and Behavior

Gen2X supports four features:
- **Protected Mode** (tag-scoped)
- **TagFocus** (reader-scoped)
- **FastID** (reader-scoped)
- **Tag Quieting** (reader-scoped)

### Feature Scope

- **Tag-Scoped** - Protected Mode applies to specific tags identified by EPC. It operates independently of reader-scoped features, so you can protect or unprotect individual tags while any reader-scoped feature remains active.

- **Reader-Scoped** - FastID, TagFocus, and Tag Quieting apply at the reader level. These features are mutually exclusive, so only one reader-scoped feature can be active at a time. Enabling a different reader-scoped feature replaces the currently active one for subsequent inventory operations.

### Feature Persistence

The reader retains the last configured Gen2X feature and automatically restores it upon start with `applyImpinjGen2X: true`. This behavior is maintained across the following scenarios:

- Stopping and restarting the reader
- Disconnecting and reconnecting MQTT
- Rebooting the device
