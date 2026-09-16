# Development Guidelines for TC501, TC701, TC201 & ET4 Tablets

## Overview

This guide provides the technical framework to implement high-performance RFID on Zebra TC501, TC701, TC201 & ET4 Tablets. It details foundational architectural enhancements, key connection modes, built-in safeguards, and recommended settings to optimize performance on these devices.

## Architectural Enhancements

### High-Performance Sessions

Reader supports high performance for Session targeting A or B. *To ensure seamless software continuity,* the standard AB Flip configuration will also be supported in an upcoming SDK release.

### Integrated OS Updates

Separate RFID firmware updates are no longer required. RFID enhancements are now part of standard OS updates, which simplifies IT maintenance and ensures greater system stability.

### Instant Wake-Up

Periodic Start/Stop Triggers have been eliminated. The system now wakes up instantly only when the scan button is pressed, which eliminates background battery waste.

### Focused Customization (CSP)

The new CSP is focused strictly on foundational needs, such as factory reset and region configuration, to provide a more secure and stable platform.

### Unified Data Connectivity

DataWedge now connects to both RFID and WAN modes by default, supporting simultaneous tag scanning and cellular connectivity.

### Hardware Prefiltering

Post-filtering is no longer used. Instead, prefiltering is utilized early at the hardware level to optimize chip performance.

### Optimized Writes & Instant Reads

- Writes: The chip prioritizes core single-write commands to maximize processing speed and save battery. Standard sequential writes are used as an alternative.
- Reads: The chip operates so quickly that grouping data is no longer necessary to save time. Tag reads are sent instantly.

---

## Flexible Connection Modes

There are two primary connection modes available to manage device resources.

### RFID_ONLY Mode (Max Performance)

- How it works: Dedicates the device's full resources to the RFID reader while temporarily pausing cellular connectivity.
- Benefit: Eliminates potential radio interference to guarantee the fastest read rates and peak throughput.

### RFID+WAN Mode (Real-Time Sync)

- How it works: Allows standard data operations to co-exist simultaneously with active RFID scanning.
- Benefit: Enables instant data updates while keeping cellular data active. It intelligently prioritizes voice calls, pausing RFID scanning only while you are on a call.

### API Configuration Control

By default, the device starts in RFID_ONLY mode to ensure the best possible scanning performance right away. Developers can easily switch the device to `RFID+WAN` mode using this simple code command:

```java
void connect(ENUM_CONNECTION_MODE mode)
```

---

## Performance Management

### WAN State vs. RFID Behavior

The RFID behavior is intelligently managed based on the cellular (WAN) state:

| Cellular (WAN) State | Resulting RFID Behavior |
| --- | --- |
| Idle | Maximum Performance: Delivers full RFID throughput for high-speed scanning. |
| Hold Voice/Data | Balanced Performance: Enables simultaneous scanning and data use by expertly sharing resources. |
| Active Voice Call | Prioritizes Voice: Intelligently pauses RFID to ensure perfect call clarity, then automatically resumes. |

---

## WWAN + RFID Use Cases

### SIM & eSIM Combinations

The system behavior varies based on your SIM configuration:

In case of "RFID Only mode" Mode

- WWAN will not be available irrespective of number of Phy SIM or eSIM presence.

In case of "RFID + WWAN" Mode

- If **RFID is OFF** then there will not be any impact to WWAN service.
- In case of **RFID in ON**
  - If only one SIM/eSIM active then it will continue in the same state, no impact.
  - If two subscriptions are active ( Phy SIM+ eSIM or eSIM+eSIM ) then **Non DDS** (non default data sub) subscriptions will get deactivated as soon as RFID is ON and resume back once RFID is OFF.

Not Active : SIM Present, Network Removed\
In Service : SIM present, Network service Active\
Not Present : No SIM Present

| Scenario | RFID | Default Data Sub | Physical SIM | ESIM 1 | ESIM 2 | Mode |
| --- | --- | --- | --- | --- | --- | --- |
| Physical SIM, E-SIM, Either Present or not Present | ON | NA | Not Active | Not Active | Not Active | RFID Only |
| No Physical SIM, No ESIM | ON | NA | Not Present | Not Present | Not Present | RFID Only |
| 1 Physical SIM & 1 ESIM | ON | Physical SIM | In Service | Not Active | Not Present | RFID + WWAN |
| 1 Physical SIM & 1 ESIM | ON | ESIM | Not Active | In Service | Not Present | RFID + WWAN |
| 1 Physical SIM & NO ESIM | ON | NA | In Service | Not Present | Not Present | RFID + WWAN |
| No Physical SIM & 1 ESIM (1st Slot) | ON | NA | Not Present | In Service | Not Present | RFID + WWAN |
| No Physical SIM & 1 ESIM (2nd Slot) | ON | NA | Not Present | Not Present | In Service | RFID + WWAN |
| No Physical SIM & 2 ESIM | ON | ESIM | Not Present | In Service | Not Active | RFID + WWAN |
| No Physical SIM & 2 ESIM | ON | ESIM | Not Present | Not Active | In Service | RFID + WWAN |

| # | Scenario | Device Behavior |
| --- | --- | --- |
| 1 | **WWAN data + RFID usage**<br>A) User is in WWAN Data Mode and attempts to use RFID in RFID + WWAN mode<br>B) User is in WWAN Data Mode and attempts to use RFID in RFID ONLY mode | A) Both WWAN Data and RFID scanning shall work<br>B) RFID is active, no WWAN data transmition |
| 2 | {ONLY ON DEVICE WITH PROXIMITY SENSOR}<br>**WWAN call near head + RFID usage**<br>A) User is in WWAN call with device near head and attempts to use RFID<br>B) User uses RFID in RFID+WWAN mode and WWAN call attempts<br>C) User uses RFID in RFID ONLY mode and WWAN call attempts | RFID restricted due to SAR prevention<br>A) RFID shall not connect, WWAN call remains active<br>B) WWAN call is active, RFID disconnects with a notification<br>C) WWAN call cannot happen in RFID ONLY mode, RFID is still active |
| 3 | **WWAN call hand free + RFID usage**<br>A) User is in WWAN call with device in Handsfree mode and attempts to use RFID<br>B) User uses RFID in RFID+WWAN mode and WWAN call attempts<br>C) User uses RFID in RFID ONLY mode and WWAN call attempts | Limited to toggle mode (due to QC WWAN/RFID design)<br>A) RFID shall connect, WWAN call goes on hold<br>B) WWAN call is active, RFID disconnects with a notification<br>C) WWAN call cannot happen in RFID ONLY mode, RFID is still active |

---

## Built-in Safeguards

Several safeguards are in place to ensure reliable and safe operation.

### USB & Charge Protection

To ensure a stable data connection and prevent conflicts, RFID is not active while the USB cable is plugged in for charging or data transfer.

### Low Battery Protection

To preserve power for critical functions, the RFID reader automatically enters a low-power state when the battery drops below 15%. In low power mode user will not be able to connect, the reason behind this is to prevent RFID disturbance and emissions down to the AC line.

### Airplane Mode

As required by aviation regulations, all radios, including RFID, are disabled when Airplane Mode is active.

### Idle Power-Save

To maximize battery life, the RFID connection automatically sleeps if idle for more than 9 minutes and instantly wakes when you resume scanning. This Idle Power mode exclusively applies to inventory rounds, saving power without disrupting other system tasks.

---

## Frequently Asked Questions

**Q: Is RFID enabled when in an eConnex cradle?**\
A: Yes, it is enabled. However, it is automatically disabled under two specific conditions:

1. When the device is actively charging.
2. When an external RFID reader is attached to the cradle.

**Q: Does the "Low Battery" state affect transmit power or duty cycle?**\
A: It directly reduces transmit power to conserve the remaining battery life.

**Q: Does "Idle Power" mode impact all device functions?**\
A: No, it exclusively applies to inventory rounds, saving power without disrupting other system tasks.
