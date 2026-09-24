**Description:**
Selectively silences one or more specific tags by their EPC ID, preventing them from responding to inventory rounds without affecting other tags.

**Usage:**
Send this command with an array of one or more EPC IDs to quiet. Quieted tags will not participate in inventory responses and will not transmit RF signals to the reader. This is useful for isolating problematic tags, managing high-density inventory operations, or testing specific tag subsets. You can quiet up to 31 tag EPCs in a single command.

**Parameters (MQTT & REST):**

- **action** (string): Silence the specified tags Must be `quiet`.
- **tagIDs** (array): List of tag EPCs (hex strings) to quiet

**Advanced mode:** select the **Advanced** request example to use `tagQuieting.advanced` (state-aware SELECT) instead of `basic`. Provide `preSelect` (optional, max 31), `tagQuietMasks` (1-3), `target`, and `stateAwareAction`. `basic` and `advanced` are mutually exclusive.

<div class="endpoint-block"><div class="ep-heading ep-mqtt">MQTT Endpoint Details</div><table class="endpoint-table"><tbody><tr><td>Command</td><td><code>set_impinjGen2X</code></td></tr></tbody></table></div>

<div class="endpoint-block"><div class="ep-heading ep-rest">REST Endpoint Details</div><table class="endpoint-table"><tbody><tr><td>Method</td><td><span class="ep-method ep-method-put">PUT</span></td></tr><tr><td>Path</td><td><code>/cloud/impinjGen2X</code></td></tr><tr><td>Request URL</td><td><code>https://&lt;device-ip&gt;/cloud/impinjGen2X</code></td></tr><tr><td>Content-Type</td><td><code>application/json</code></td></tr></tbody></table></div>