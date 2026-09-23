**Description:**
Disable Protected Mode — Removes the 32-bit access password protection from an RFID tag, restoring normal operation.

**Usage:**
Send this command with the target tag's EPC ID and the 32-bit access password that was used to enable Protected Mode. Once disabled, the tag returns to normal operation and responds to all standard inventory commands without authentication.

**Parameters (MQTT & REST):**

- **action** (string): Disables Protected Mode on the tag Must be `disableTagProtection`.
- **password** (string): 8-character hexadecimal 32-bit password
- **tagID** (string): Tag EPC ID

<div class="endpoint-block"><div class="ep-heading ep-mqtt">MQTT Endpoint Details</div><table class="endpoint-table"><tbody><tr><td>Command</td><td><code>set_impinjGen2X</code></td></tr></tbody></table></div>

<div class="endpoint-block"><div class="ep-heading ep-rest">REST Endpoint Details</div><table class="endpoint-table"><tbody><tr><td>Method</td><td><span class="ep-method ep-method-put">PUT</span></td></tr><tr><td>Path</td><td><code>/cloud/impinjGen2X</code></td></tr><tr><td>Request URL</td><td><code>https://&lt;device-ip&gt;/cloud/impinjGen2X</code></td></tr><tr><td>Content-Type</td><td><code>application/json</code></td></tr></tbody></table></div>