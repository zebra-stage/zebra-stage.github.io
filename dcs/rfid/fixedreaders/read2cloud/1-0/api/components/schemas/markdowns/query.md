## EPC Gen2 query parameters

See <a href="https://www.gs1.org/standards/epc-rfid/uhf-air-interface-protocol" target="_blank">EPC Gen2 Spec</a> for more details

| Option | Description |
|--------- | ----------- |
|Object| Desired query parameters applies to all antennas|
|Array of Object| Each query parameters object in array applies to each antenna in the antennas array.<br />Array length must match antennas array length. |

### Default

```json
{
    "tagPopulation": 0,
    "sel": "ALL",
    "session": "S1",
    "target": "A"
}
```
