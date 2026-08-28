# Development Guidelines for TC501, TC701, TC201 & ET4 Tablets

- [Overview](#overview)
- [Architectural Enhancements](#architectural-enhancements)
  - [High-Performance Sessions](#high-performance-sessions)
  - [Integrated OS Updates](#integrated-os-updates)
  - [Instant Wake-Up](#instant-wake-up)
  - [Focused Customization (CSP)](#focused-customization-csp)
  - [Unified Data Connectivity](#unified-data-connectivity)
  - [Hardware Prefiltering](#hardware-prefiltering)
  - [Optimized Writes & Instant Reads](#optimized-writes--instant-reads)
- [Flexible Connection Modes](#flexible-connection-modes)
  - [RFID_ONLY Mode (Max Performance)](#rfid_only-mode-max-performance)
  - [RFID+WAN Mode (Real-Time Sync)](#rfidwan-mode-real-time-sync)
  - [API Configuration Control](#api-configuration-control)
- [Performance Management](#performance-management)
  - [WAN State vs. RFID Behavior](#wan-state-vs-rfid-behavior)
- [WWAN + RFID Use Cases](#wwan--rfid-use-cases)
  - [SIM & eSIM Combinations](#sim--esim-combinations)
- [Built-in Safeguards](#built-in-safeguards)
  - [USB & Charge Protection](#usb--charge-protection)
  - [Low Battery Protection](#low-battery-protection)
  - [Airplane Mode](#airplane-mode)
  - [Idle Power-Save](#idle-power-save)
- [Frequently Asked Questions](#frequently-asked-questions)

## Overview

This guide provides the technical framework to implement high-performance RFID on Zebra TC501, TC701, TC201 & ET4 Tablets. It details foundational architectural enhancements, key connection modes, built-in safeguards, and recommended settings to optimize performance on these devices.

## Architectural Enhancements

### High-Performance Sessions

The previous AB Flip Configuration is replaced by high-performance session management that operates directly on the chip. This is optimized for faster inventory workflows. *To ensure seamless software continuity,* the standard AB Flip configuration will also be supported in an upcoming SDK release.

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

```
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

| SIM 1 Status | SIM 2 (eSIM) Status | Resulting System Behavior |
| --- | --- | --- |
| Configured | Not Configured | RFID and VoIP calls can co-exist. Cellular calls are paused during RFID use on SIM 1. |
| Not Configured | Configured | RFID and VoIP calls can co-exist. Cellular calls are paused during RFID use on SIM 2. |
| Configured (Data Preference) | Configured | RFID, Data apps, and VoIP apps co-exist on SIM 1. SIM 2 is paused to ensure a stable connection. |
| Configured | Configured (Data Preference) | RFID, Data apps, and VoIP apps co-exist on SIM 2. SIM 1 is paused to ensure a stable connection. |

---

## Built-in Safeguards

Several safeguards are in place to ensure reliable and safe operation.

### USB & Charge Protection

To ensure a stable data connection and prevent conflicts, RFID is not active while the USB cable is plugged in for charging or data transfer.

### Low Battery Protection

To preserve power for critical functions, the RFID reader automatically enters a low-power state when the battery drops below 10%. This directly reduces transmit power to conserve remaining battery life.

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