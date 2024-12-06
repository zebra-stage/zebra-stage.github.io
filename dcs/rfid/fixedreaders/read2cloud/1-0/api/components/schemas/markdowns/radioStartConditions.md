## Radio Start Conditions

Controls when, after a [start](#operation/start) is issued, the radio starts trying to inventory tags.

If this element is absent, the radio will immediately begin inventorying tags upon a [start](#operation/start) command.

### Defaults
|Mode| Default Radio Start Condition |
|----|--------------------------------|-------------|
|SIMPLE|`Start immediately on [start](#operation/start) command|
|INVENTORY | Start immediately on [start](#operation/start) command|
|PORTAL| Wait for GPI on Port 1 to go HIGH and wait again after activity completes (see radioStopConditions)|
|CONVEYOR| Start immediately on [start](#operation/start) command|
