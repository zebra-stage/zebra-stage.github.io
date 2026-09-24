**Description:**
Starts the reader radio with all staged Gen2X configuration settings applied and active.

**Usage:**
Send this command after configuring your desired Gen2X settings (such as TagProtect, FastID, TagFocus, and Tag Quieting). Set the `applyImpinjGen2X` parameter to `true` to ensure all configuration changes take effect immediately when the radio starts. The radio will operate with all configured features active. You must stop the radio before making configuration changes using this start command.

**Parameters (MQTT & REST):**

- **applyImpinjGen2X** (boolean): true to apply Gen2X config when starting the radio Must be `True`.

<div class="endpoint-block"><div class="ep-heading ep-mqtt">MQTT Endpoint Details</div><table class="endpoint-table"><tbody><tr><td>Command</td><td><code>start</code></td></tr></tbody></table></div>

<div class="endpoint-block"><div class="ep-heading ep-rest">REST Endpoint Details</div><table class="endpoint-table"><tbody><tr><td>Method</td><td><span class="ep-method ep-method-put">PUT</span></td></tr><tr><td>Path</td><td><code>/cloud/start</code></td></tr><tr><td>Request URL</td><td><code>https://&lt;device-ip&gt;/cloud/start</code></td></tr><tr><td>Content-Type</td><td><code>application/json</code></td></tr></tbody></table></div>