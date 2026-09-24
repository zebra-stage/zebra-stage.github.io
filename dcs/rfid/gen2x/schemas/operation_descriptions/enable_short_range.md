**Description:**
Enable Protected Mode with Short Range — Protects an RFID tag with a 32-bit access password and restricts its response range to short distance only.

**Usage:**
Send this command with the target tag's EPC ID, a 32-bit access password, and set `enableShortRange` to `true`. The tag enters Protected Mode and only responds to readers in close physical proximity. This is ideal for point-of-sale operations or scenarios requiring location-specific tag reads.

**Parameters (MQTT & REST):**

- **action** (string): Enables Protected Mode on the tag Must be `enableTagProtection`.
- **password** (string): 8-character hexadecimal 32-bit password
- **tagID** (string): Hexadecimal tagID (EPC) of the target tag
- **enableShortRange** (boolean): true to enable short-range protection mode for higher security

<div class="endpoint-block"><div class="ep-heading ep-mqtt">MQTT Endpoint Details</div><table class="endpoint-table"><tbody><tr><td>Command</td><td><code>set_impinjGen2X</code></td></tr></tbody></table></div>

<div class="endpoint-block"><div class="ep-heading ep-rest">REST Endpoint Details</div><table class="endpoint-table"><tbody><tr><td>Method</td><td><span class="ep-method ep-method-put">PUT</span></td></tr><tr><td>Path</td><td><code>/cloud/impinjGen2X</code></td></tr><tr><td>Request URL</td><td><code>https://&lt;device-ip&gt;/cloud/impinjGen2X</code></td></tr><tr><td>Content-Type</td><td><code>application/json</code></td></tr></tbody></table></div>