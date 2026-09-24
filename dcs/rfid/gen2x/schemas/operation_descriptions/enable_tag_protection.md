**Description:**
Enable Protected Mode — Locks an RFID tag using a 32-bit access password, rendering it invisible to readers.

**Usage:**
Send this command with the target tag's EPC ID and a 32-bit access password. Once enabled, the tag enters Protected Mode and ceases to respond to standard inventory commands. Use the **disable tag protection** command to remove password protection and restore normal tag operation. This is useful for securing sensitive tags or preventing unauthorized reading in high-traffic environments.

**Parameters (MQTT & REST):**

- **action** (string): Enables Protected Mode on the tag Must be `enableTagProtection`.
- **password** (string): 8-character hexadecimal 32-bit password
- **tagID** (string): Tag EPC ID

<div class="endpoint-block"><div class="ep-heading ep-mqtt">MQTT Endpoint Details</div><table class="endpoint-table"><tbody><tr><td>Command</td><td><code>set_impinjGen2X</code></td></tr></tbody></table></div>

<div class="endpoint-block"><div class="ep-heading ep-rest">REST Endpoint Details</div><table class="endpoint-table"><tbody><tr><td>Method</td><td><span class="ep-method ep-method-put">PUT</span></td></tr><tr><td>Path</td><td><code>/cloud/impinjGen2X</code></td></tr><tr><td>Request URL</td><td><code>https://&lt;device-ip&gt;/cloud/impinjGen2X</code></td></tr><tr><td>Content-Type</td><td><code>application/json</code></td></tr></tbody></table></div>