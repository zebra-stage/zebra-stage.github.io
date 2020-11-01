---
title: About Device Diagnostic Tool
layout: guide.html
product: Device Diagnostic Tool
productversion: "2.3"
---

## Overview

Device Diagnostic Tool instantly tests and diagnoses the hardware operability on Zebra mobile devices to determine system health and functionality. Where appropriate, Zebra Help Desk uses this tool for troubleshooting device issues, relying on the results to provide optimum steps to reach a resolution. It is useful for quickly troubleshooting device issues, resulting to increased worker productivity, limited device downtime, and unnecessary returns to the Zebra Repair Center.

Hardware features tested:

- **Scanner Test** – checks whether the scanner is operable
- **Button Test** – checks the operation of push-to-talk, left or right scan trigger, volume up and volume down device buttons
- **Touch Screen Test** – checks for operation of the device touch display
- **Bluetooth Tests** – checks whether the Bluetooth radio is operable and returns Bluetooth related information: Bluetooth name, radio power cycle result, radio functional/non-functional, and discoverable/connectable.
- **WiFi Tests** – checks for operation of the WiFi radio and returns WiFi related information: MAC address, network test results from specified address, signal strength, ESSID, IP address, BSSID, and speed
- **Battery Tests** – checks the battery status and returns battery related information: part number, serial number, manufacture date, decommission status, voltage, current, temperature, battery level and current capacity
- **WWAN Tests** – checks for operation of the WWAN radio and returns related WWAN information: SIM state, voice state, data state, WAN type, signal strength, phone number, and device ID
- **Audio Test** – checks for operation of the device microphone and speaker

<br>
<p>For more information on each test, refer to <a href="../criteria">Test Criteria.</a></p>

## New in Device Diagnostic Tool 2.3

* New [Help](../usage/#userinterface) option available which links to the Device Diagnostic Tool support portal.
* New data fields captured for the [Battery test](../usage/#batterytest): battery level and battery current capacity.
* New features configurable through the configuration file:
        * [perform tests individually](../configuration/#configurationfile) 
        * [capture logs individually](../configuration/#configurationfile) for each test performed
* Fixed issue: For the WWAN test, if a sim card is not present in the device, the test no longer fails and now shows _Absent_ for the _Sim State_ along with the appropriate status for the rest of the WWAN parameters.
* [Enhancements:](../usage/#userinterface)
        * For the WLAN test, the radio power cycle is replaced by a check to determine if the WiFi radio is enabled. When initiating the WLAN test, if the WiFi radio is not enabled the user is prompted to enable the radio.
        * To display the ESSID from a WLAN test on Android O or higher, _Location_ is required to be enabled in device settings due to Android restrictions. If _Location_ is not enabled, the user is prompted to enable it. If the test proceeds without _Location_ enabled, _ESSID_ returns "Location not enabled" instead of "Unknown SSID." 


## Version History

### New in Device Diagnostic Tool 2.2

- New devices supported - see supported devices for **Device Diagnostic Tool** on [Zebra Downloads](https://www.zebra.com/us/en/support-downloads/software/utilities/device-diagnostic-tool.html).
- Android 10 limitations due to security restrictions:
  - In the WWAN test details screen, "Device ID" is not visible.
  - In the History.log file, "Device ID" and "Device Serial#" is not visible.
- Fixed Issues:
  - On TC20 and TC25 Android Oreo, when performing the Button test the scan trigger press fails.
  - On TC25 Android Nougat, when performing the Button test the Time Remaining value for the parameter timeout does not take into effect for PTT or scan buttons.
- Known Issues:
  _ On Android 10 WWAN devices, if a sim card is not inserted and a WWAN test is performed, improper values may be returned for Voice state.
  _ When a battery test is performed, improper values may be displayed on the following devices:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Devices that require AC Power to operate (no battery exists), such as CC605 and CC610<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• ET50 devices - the part number, serial number and manufactured date may display improperly

### Device Diagnostic Tool 2.1

- Introduced 2 modes of operation: [admin mode and user mode](../usage).
- Changes in supported tests:
  - Tests added: Scanner, Button, Touch Screen, Audio
  - Tests removed: GPS, System
- Added capability to [import or export configuration files](../configuration).
- New [Settings](../configuration) and [Configure Tests](../configuration) app screens for administrators.
- Added and removed device support. See **Supported Devices** table below.
- Known Issues:
  - On TC20 and TC25 Android Oreo, when performing the Button test the scan trigger press fails.
  - On TC20 and TC25 Android Nougat, when performing the Battery test the Decommission status may return incorrect information.
  - On TC25 Android Nougat, when performing the Button test the Time Remaining value for the parameter timeout does not take into effect for PTT or scan buttons.
  - On TC75x Android Marshmallow, Data State in WWAN test may display “Data Disconnected” even though mobile data is enabled on the device.
  - When the app is running and the EMM command is executed to run the test remotely, if the user tries to launch the app manually after the test completes, the app may encounter unexpected behavior. In this case the user must manually restart Device Diagnostic Tool to recover.

## Supported Devices

See supported devices for **Device Diagnostic Tool** on [Zebra Downloads](https://www.zebra.com/us/en/support-downloads/software/utilities/device-diagnostic-tool.html).

<!--
The following table lists the supported GMS devices, except for MC33 which only supports non-GMS: </p>

<table class="facelift" align="center" style="width:90%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Device</th>
    <th style="text-align:center">Android 4.4 <br>(KitKat)</th>
    <th style="text-align:center">Android 5.x <br>(Lollipop)</th>
    <th style="text-align:center">Android 6.x <br>(Marshmallow)</th>
    <th style="text-align:center">Android 7.x <br>(Nougat)</th>
    <th style="text-align:center">Android 8.x <br>(Oreo)</th>
    <th style="text-align:center">Android 9.x <br>(Pie)</th>
  </tr>
  <tr>
    <td>MC18</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>MC32</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>MC33</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>MC67</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>

  <tr>
    <td>TC20</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC25</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC51</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC52</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC55</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>TC56</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC57</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC70</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>TC70X</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>TC75</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>TC75X</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>TC8000</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
-->

**Installation Notes:**

- **Multiple instances of app -** If Device Diagnostic Tool v1.0 is already present on the device and Device Diagnostic Tool v2.1 is then installed on the same device, there will be 2 versions of the app that exist. To avoid this scenario, the administrator can disable Device Diagnostic Tool v1.0 using [AppManager CSP](/mx/appmgr) for the device to run a single version of the app.
- **Setting persistence -** Upon initial app install, any setting changes made through the UI persist since configuration.xml does not exist. However, after exporting the .xml file, any changes in the UI no longer persist until the .xml file is imported into the device.

## Important Usage Notes

1. **Multiple Android user accounts -** When using multiple Android user accounts on a single device, Device Diagnostic Tool use and functionality only applies to the active primary user.
2. **Limitation due to low memory on the device -** Once the available device memory is less than 3 MB, a message appears indicating there is no space on the device and logging will no longer take place. Additionally the Audio Test cannot be executed.
3. **Device orientation -** Device Diagnostic Tool is only supported in the default orientation of the device. It does not support switching between both portrait and landscape modes.
4. **Split screen support -** On Android N and above, Device Diagnostic Tool does not support split screen mode.

<br>

## <!-- -->

## See Also

- [Usage Guide](../usage)
- [Test Criteria](../criteria)
- [Configuration](../configuration)
