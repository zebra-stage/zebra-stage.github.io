---
title: Test Criteria
layout: guide.html
product: Device Diagnostic Tool
productversion: "2.3"
---

## Overview

Device Diagnostic Tool tests for the operation of device hardware features based on specific criteria, with the following results:

- **Pass** - if the criteria is met
- **Fail** - if the criteria is not met
- **Information** - displays informational data (pass/fail is not applicable)

<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th style="text-align:center">Test</th>
    <th style="text-align:center">Requires User Intervention</th>
    <th style="text-align:center">Properties/Action</th>
    <th style="text-align:center">Pass/Fail Criteria</th>
  </tr>
  <tr>
    <td style="text-align:center">Scanner</td>
    <td style="text-align:center">Yes</td>
    <td style="text-align:center">Scan a barcode</td>
    <td style="text-align:left">Passes when a barcode is scanned successfully.</td>
  </tr>
  <tr>
    <td style="text-align:center">Button</td>
    <td style="text-align:center">Yes</td>
    <td style="text-align:left">Button press:<br>&nbsp;&nbsp;- Scan trigger (left or right)<br>&nbsp;&nbsp;- Push-to-talk<br>&nbsp;&nbsp;- Volume up<br>&nbsp;&nbsp;- Volume down</td>
    <td style="text-align:left">Passes when the button press is detected for each of the buttons.</td>
  </tr>
  <tr>
    <td style="text-align:center">Touch Screen</td>
    <td style="text-align:center">Yes</td>
    <td style="text-align:center">Touch grid</td>
    <td style="text-align:left">Passes when touch is detected within each grid box on the screen.</td>
  </tr>
  <tr>
    <td style="text-align:center">Bluetooth</td>
    <td style="text-align:center">No</td>
    <td style="text-align:left">Information returned:<br>&nbsp;&nbsp;- Name<br>&nbsp;&nbsp;- Radio power cycle<br>&nbsp;&nbsp;- Functional/<br>Non-functional<br>&nbsp;&nbsp;- Connectable/<br>Discoverable</td>
    <td style="text-align:left">Passes if the Bluetooth radio can be power cycled and the information is returned successfully.</td>
  </tr>
  <tr>
    <td style="text-align:center">WLAN</td>
    <td style="text-align:center">No</td>
    <td style="text-align:left">Information returned:<br>&nbsp;&nbsp;- <font color="red">MAC address</font><br>&nbsp;&nbsp;- Network test<br>&nbsp;&nbsp;- Radio power cycle<br>&nbsp;&nbsp;- Signal strength (i)<br>&nbsp;&nbsp;- ESSID (i)<br>&nbsp;&nbsp;- IP address (i)<br>&nbsp;&nbsp;- <font color="red">BSSID (i)</font><br>&nbsp;&nbsp;- Speed (i)</td>
    <td style="text-align:left">Passes when the network test is successful. </td>
  </tr>
  <tr>
    <td style="text-align:center">WWAN</td>
    <td style="text-align:center">No</td>
    <td style="text-align:left">Information returned:<br>&nbsp;&nbsp;- Sim state<br>&nbsp;&nbsp;- Voice state<br>&nbsp;&nbsp;- Data state<br>&nbsp;&nbsp;- WAN type (i)<br>&nbsp;&nbsp;- Signal strength (i)<br>&nbsp;&nbsp;- <font color="red">Phone number (i)</font><br>&nbsp;&nbsp;- <font color="red">Device ID (i)</font></td>
    <td style="text-align:left">Passes when the sim card is present. Passes automatically on non-WAN devices.</td>
  </tr>
  <tr>
    <td style="text-align:center">Battery</td>
    <td style="text-align:center">No</td>
    <td style="text-align:left">Information returned:<br>&nbsp;&nbsp;- Part number<br>&nbsp;&nbsp;- Serial number<br>&nbsp;&nbsp;- Manufacture date<br>&nbsp;&nbsp;- Decommission status<br>&nbsp;&nbsp;- Voltage (i)<br>&nbsp;&nbsp;- Current (i)<br>&nbsp;&nbsp;- Temperature (i)<br>&nbsp;&nbsp;- Level (i)<br>&nbsp;&nbsp;- Current Capacity (i)</td>
    <td style="text-align:left">Passes if the battery health is good and the battery information is retrieved successfully. <b>Note: </b>Current Capacity only applies to PowerPrecision+ batteris.</td>
  </tr>
  <tr>
    <td style="text-align:center">Audio</td>
    <td style="text-align:center">Yes</td>
    <td style="text-align:left">Record and play file</td>
    <td style="text-align:left">User manual intervention is required. The user manually records audio then listens to the recording. Test pass/fail is based on user discretion. Device speakers should be used for this test - use of headphones is not acceptable. This test should be conducted in an environment with minimal background noise for successful testing. Set the device to maximum volume during playback for best results. <br><b>Note:</b> This test cannot be performed if the device does not have a microphone, e.g. MC18.</td>
  </tr>
</table>

<br />
<font color="red">Red colored text</font> indicates sensitive information that is not displayed.  Instead, “valid” or “invalid” is shown to indicate whether the information is detected in the proper format. “Valid” indicates the appropriate value was retrieved. “Invalid” indicates the value retrieved is null, empty, or does not match the expected MAC address pattern (only applies to MAC address).<br /><br />
<b>(i)</b> indicates informational data that is considered as extra data, which is displayed if <b>show_extra_data</b> is set to “true” in the `configuration.xml` file.
<br/>
<br/>

Refer to [Configure Tests](../configuration#configuretests) section for a description of each test.
<br>
<br>

## <!-- -->

## See Also

- [About Device Diagnostic Tool](../about)
- [Usage Guide](../usage)
- [Configuration](../configuration)
