# Gen2X docs update — 10 Sep 2026

Notes for this push to `main`. Live reader testing was on FXR60/FXR90, reader application 5.0.7.

## Included in this push

- **Access password:** procedure in the guide introduction. Protected Mode points to it. `PUT /cloud/impinjGen2X` does not write the password onto the tag.
- **Tag Quieting:** one request schema with `basic` and `advanced` (`oneOf`). Example dropdown is Basic | Advanced. Action enums match the current state-aware SELECT pairs.
- **FastID:** REST GET/PUT no longer document `tidSelector`. Request is `{ "fastID": { "enabled": true|false } }` only.
- **GET `/cloud/impinjGen2X`:** last saved feature only (`maxProperties: 1`). Never configured returns an empty body, not JSON `{}`. FastID `enabled: false` example added. GET is saved config, not radio state — use `GET /cloud/status` → `impinjGen2X.isActive`.

Protected Mode and TagFocus request schemas were already aligned. No schema change for those.

## Remaining follow-up (not in this push)

These still differ from the latest spec. Do them in a later change.

1. **Feature Scope (intro)**  
   Still says Protected Mode can run with FastID, TagFocus, or Tag Quieting. Latest spec: all four features are mutually exclusive. PUT allows exactly one feature object. A later PUT replaces the previous one.

2. **PUT `/cloud/impinjGen2X` (REST OpenAPI)**  
   - Add `maxProperties: 1` (exactly one feature, not “at least one”).  
   - 200 body is `{ "message": "Success: Gen2X configured. …" }`, not `""`.  
   - `tagProtect.tagID` should be any hex (`^[0-9A-Fa-f]+$`), not 24-character groups.  
   MQTT/REST artifacts already use the success `message`.

3. **Start / Radio Control**  
   `applyImpinjGen2X: true` is per inventory session. After stop, a plain start does not re-apply Gen2X.

4. **Unquiet Tags**  
   Quieting is session-scoped. Starting **without** `applyImpinjGen2X` is what brings tags back. The page still describes `unquiet` as restoring them.

### Optional wording (not schema)

- FastID inventory events: `format: "fastID"`, `idHex` is 48 hex characters, no separate `tid` field.
- TagFocus: set `reportFilter.duration` to `0` on the mode to observe the effect.
- Tag Quieting intro says “tag-scoped”; latest spec treats it as reader-scoped.
