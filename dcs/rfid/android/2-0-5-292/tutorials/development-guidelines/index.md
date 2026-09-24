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

## WWAN + RFID Operations

### Overview & Operating Modes

Device behavior depends on the selected operating mode:

- RFID Only Mode: WWAN connectivity is completely disabled, regardless of the number or presence of physical SIMs or eSIM profiles.
- RFID + WWAN Mode:
  - When RFID is OFF: Standard WWAN services operate normally with no restrictions.
  - When RFID is ON:
    - Single Active Subscription: The active SIM/eSIM continues operating normally without interruption.
    - Dual Active Subscriptions (Physical SIM + eSIM or Dual eSIM): The Non-DDS (Non-Default Data Subscription) is temporarily deactivated while RFID is active. It automatically resumes once RFID is turned OFF.

### SIM Configurations

The following tables outline the definitions for SIM states and the subscription behaviors when RFID is ON across various SIM slot configurations.

#### State Definitions

| State | Description |
| --- | --- |
| In Service | SIM/eSIM is present and network cellular service is actively connected. |
| Not Active | SIM/eSIM is present, but cellular network service is temporarily disconnected/deactivated. |
| Not Present | No physical SIM card is inserted or no eSIM profile is loaded in the slot. |

#### Combination Matrix

| Operating Mode | Scenario / Setup | Default Data Sub (DDS) | Physical SIM | eSIM Slot 1 | eSIM Slot 2 |
| --- | --- | --- | --- | --- | --- |
| **RFID Only** | Physical SIM / eSIM present or not present | N/A | Not Active | Not Active | Not Active |
| **RFID Only** | No Physical SIM & No eSIM | N/A | Not Present | Not Present | Not Present |
| **RFID + WWAN** | 1 Physical SIM & 1 eSIM | Physical SIM | In Service | Not Active | Not Present |
| **RFID + WWAN** | 1 Physical SIM & 1 eSIM | eSIM 1 | Not Active | In Service | Not Present |
| **RFID + WWAN** | 1 Physical SIM & No eSIM | Physical SIM | In Service | Not Present | Not Present |
| **RFID + WWAN** | No Physical SIM & 1 eSIM (Slot 1) | eSIM 1 | Not Present | In Service | Not Present |
| **RFID + WWAN** | No Physical SIM & 1 eSIM (Slot 2) | eSIM 2 | Not Present | Not Present | In Service |
| **RFID + WWAN** | No Physical SIM & 2 eSIMs | eSIM 1 | Not Present | In Service | Not Active |
| **RFID + WWAN** | No Physical SIM & 2 eSIMs | eSIM 2 | Not Present | Not Active | In Service |

### Coexistence Scenarios

The following table details system and priority behaviors during simultaneous voice, data, and RFID operations:

| Scenario | Condition & User Action | System / Device Behavior |
| --- | --- | --- |
| **Data & RFID** | • A: Active WWAN data transmission; user initiates RFID in RFID + WWAN mode.<br>• B: Active WWAN data transmission; user initiates RFID in RFID Only mode. | • A: Both WWAN data and RFID operate concurrently.<br>• B: RFID is active; WWAN data transmission is blocked. |
| **Voice Call (Near Head)**<br>***(Devices with Proximity Sensor only)*** | • A: User is on a handset call (near head) and attempts to use RFID.<br>• B: User is actively using RFID in RFID + WWAN mode and a call is attempted.<br>• C: User is actively using RFID in RFID Only mode and a call is attempted. | • A: RFID will not connect; the WWAN call remains active uninterrupted.<br>• B: WWAN call takes priority; RFID disconnects and displays a user notification.<br>• C: WWAN call cannot be established; RFID remains active. |
| **Voice Call (Handsfree)** | • A: User is on a handsfree/speaker call and attempts to use RFID.<br>• B: User is actively using RFID in RFID + WWAN mode and a call is attempted.<br>• C: User is actively using RFID in RFID Only mode and a call is attempted. | • A: RFID connects successfully; the WWAN call is placed on hold.<br>• B: WWAN call takes priority; RFID disconnects and displays a user notification.<br>• C: WWAN call cannot be established; RFID remains active. |

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
