**Description:**
Retrieves the last saved Gen2X feature from the reader.

**Usage:**
Send this command with an empty payload. After any successful PUT, the response contains exactly one feature object (`fastID`, `tagFocus`, `tagProtect`, or `tagQuieting`). A later PUT replaces the stored object; GET is not a merge of all features.

GET returns the saved configuration, not whether it is running. Use `GET /cloud/status` and `impinjGen2X.isActive` for the current inventory session.

If Gen2X has never been configured, REST `GET /cloud/impinjGen2X` returns HTTP 200 with an empty body (not JSON `{}`). MQTT returns an empty `payload` object. After the first successful PUT, GET always returns a JSON object. `PUT /cloud/impinjGen2X` with `{}` is rejected (422).

**Parameters (MQTT & REST):**

_No parameters required._

<div class="endpoint-block"><div class="ep-heading ep-mqtt">MQTT Endpoint Details</div><table class="endpoint-table"><tbody><tr><td>Command</td><td><code>get_impinjGen2X</code></td></tr></tbody></table></div>

<div class="endpoint-block"><div class="ep-heading ep-rest">REST Endpoint Details</div><table class="endpoint-table"><tbody><tr><td>Method</td><td><span class="ep-method ep-method-get">GET</span></td></tr><tr><td>Path</td><td><code>/cloud/impinjGen2X</code></td></tr><tr><td>Request URL</td><td><code>https://&lt;device-ip&gt;/cloud/impinjGen2X</code></td></tr><tr><td>Content-Type</td><td><code>application/json</code></td></tr></tbody></table></div>
