## Stop Condition for antennas

| Option | Description |
|--------- | ----------- |
|Object | Same stop conditions apply to all antennas|
|Array of Objects | Each object in array applies to each antenna in the antennas array.<br>Array length must match antennas array length.|

### Default

Single inventory with limited duration with duration is set to 1 second/number of enabled antennas. If the number of enabled antennas exceeds 8, the duration is not less than 125 mS.