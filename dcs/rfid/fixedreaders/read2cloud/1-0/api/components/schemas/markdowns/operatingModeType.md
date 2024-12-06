## SIMPLE

Simple mode configures the radio to read and report all unique tags in the field of view of the radio.

By default:

- The radio attempts to read tags on all antennas. This can be adjusted using the antennas object when setting the mode.
- The radio reports all unique tags. This can be adjusted using the filter object when setting the mode.

## INVENTORY

Inventory mode configures the radio to read tags and report all unique tags for each antenna on a periodic interval. Additional meta-data (i.e. peak RSSI and number of reads for each antenna during the interval) is reported.

By default:

- The radio will attempt to read tags on all antennas. This can be adjusted using the antennas object when setting the mode.
- The radio will report all unique tags. This can be adjusted using the filter object when setting the mode.
- The radio will report tags every second. This can be adjusted using the interval object in the modeSpecificSettings for inventory when setting the mode.

## PORTAL

Portal mode configures the radio to report all unique tags that pass by each antenna immediately following a GPI event. The GPI event signals the beginning of the read period. As soon as the GPI event triggers the radio, the radio continues to read tags until no new unique tags are read for a configurable stop interval. Once the radio stops reading tags, it waits for the next GPI event to start the process again.

By default:

- The radio will attempt to read tags on all antennas. This can be adjusted using the antennas object when setting the mode.
- The radio will report all unique tags. This can be adjusted using the filter object when setting the mode.
- The radio waits for a LOW signal on GPI 1. This can be adjusted using the startTrigger object in the modeSpecificSettings for portal when setting the mode.
- The radio continues to read until no new unique tags have been read for 3 seconds. This can be adjusted using the stopInterval object in the modeSpecificSettings for portal when setting the mode.

## CONVEYOR

Conveyer mode configures the radio to read tags and report all unique tags for each antenna.

By default:

- The radio will attempt to read tags on all antennas. This can be adjusted using the antennas object when setting the mode.
- The radio will report all unique tags. This can be adjusted using the filter object when setting the mode.
