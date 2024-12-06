## Additional Tag Meta Data

Tag data reports always include timestamp and tag identifier. tagMetaData allows the user to include additional tag meta data.

| Additional Tag Meta Data | Description |
|--------- | ----------- |
|ANTENNA | Reports the antenna port upon which the tag was inventoried.|
|RSSI | Report the rssi (in dbm) of the inventoried tag. If the tag is only reported occasionally (see reportFilter), this tag will be the peak rssi since the last reported read. |
| PHASE | Reports the phase (in degrees) of the inventoried tag. This value will only be reported if each individual tag read is reported (in other words, if reportFilter duration is set to 0). Otherwise, it will not be reported.|
|CHANNEL|Reports the channel (in MHz) the reader was using when the tag was inventoried. This value will only be reported if each individual tag read is reported (in other words, if reportFilter duration is set to 0). Otherwise, it will not be reported.|
|SEEN_COUNT|Reports the number of times the tag has been inventoried since the previous report. This value will always be 1 if each individual tag read is reported (in other words, if reportFilter duration is set to 0).|
|PC|Reports the PC bits of the inventoried tag as a hex string.|
|XPC|Reports the XPC bits of the inventoried tag, if present, as a hex string.|
|CRC|Report the CRC bits of the inventoried tag as a hex string.|

### Defaults
|Mode|Default Additional Tag Meta Data|
|--------- | ----------- |
|SIMPLE|`[]`|
|INVENTORY|`["ANTENNA", "RSSI", "SEEN_COUNT"]`|
|PORTAL|`["ANTENNA"]`|
|CONVEYOR|`["ANTENNA"]`|
