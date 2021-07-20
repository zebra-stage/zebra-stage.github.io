---
title: Using Device Diagnostic Tool
layout: guide.html
product: Device Diagnostic Tool
productversion: "2.6"
---

## Overview

Device Diagnostic Tool supports two modes of operation:

1. **Admin mode -** The administrator can access app settings, modify test configurations and run each individual test. This is the default mode.
2. **User mode -** The user is restricted to only run tests. There is no access to app settings, test configurations nor individual tests. To set user mode, disable <i>admin_mode</i> as referenced in the [Configuration](../configuration#configurationfile) section.
   <br>

## Launch the App

Run Device Diagnostic Tool using one of the following methods:

1. **Manually using the User Interface** - The user launches Device Diagnostic Tool and runs the tests manually. See [User Interface](#userinterface) section below.
2. **Remotely with an EMM (Enterprise Mobility Management) system** - Launch Device Diagnostic Tool in the background and generate a log using command: <br>`adb shell am broadcast -n "com.symbol.selfdiagnostics/com.symbol.selfdiagnostics.SESReceiver"`
<br>
<p>Only one of the methods should be used to run Device Diagnostic Tool, otherwise unexpected behavior can occur.</p>

## Device Tests

When launching the app for the first time, the main screen displays the tests available to run:

<table>
 <tr>
     <td><img style="height:350px" src="mainscreen-1.png"/></td>
     <td>&nbsp;&nbsp;&nbsp;</td>
     <td><img style="height:350px" src="mainscreen-2.png"/></td>
 </tr>
</table>

_Main screen_
<br/>
If tests have already been conducted, the test name is followed by the date when the last test was conducted.
<br />

Tap **Run Tests** from the main screen to execute all the tests. Test execution is based on the tests selected in the **Configure Tests** screen. Once the test is initiated, the user is prompted to perform additional actions during test execution of the following: Scanner Test, Button Test, Touch Screen Test, and Audio Test. It is recommended for all tests to be performed while the device is in normal use, i.e. not docked in a cradle or connected via USB to a computer. Once testing is complete, the results are displayed:
<br />

&nbsp;&nbsp;&nbsp;<img align="left" style="height:25px" src="testpassed.png"/><b>Pass -</b> Test executed and passed. Result passed test criteria.
<br>
&nbsp;&nbsp;&nbsp;<img align="left" style="height:25px" src="testfailed.png"/><b>Fail -</b>Test executed and did not meet the test criteria.
<br>
&nbsp;&nbsp;&nbsp;<img align="left" style="height:20px" src="testinfo.png"/><b>Information -</b>Data retrieved and displayed.
<br />
Alternatively, in admin mode individual tests can be performed by tapping on the individual test category and then tapping <b>Run Tests</b>.
<br>

**Test failed** and **test timed-out** result to the same red hazard icon.
<br>

**Help** option is available by tapping on the top right menu of the main screen. This links to the [Device Diagnostics Tool support portal](https://www.zebra.com/us/en/support-downloads/software/utilities/device-diagnostic-tool.html).
<br><br>

### Scanner Test

The user is prompted to scan a barcode. Results:

- **Scanner Test –** displays barcode data
- **Label Type –** displays barcode type or decoder scanned
<br>
<p><b>Note:</b> When performing the Scanner Test on TC55, the user must long press the scanner button for it to be detected.</p>
<br>

### Button Test

The user is prompted to press the hard buttons on the device: scan trigger (left or right), push-to-talk, volume up, and volume down. Results:

- **Button Test –** _test successful_, _test failed_, or _test timed-out_
<br>
<p><b>Note:</b> If hard key buttons are remapped, the Button test does not work as expected.</p>
<br>

### Touch Screen Test

The user is prompted to touch each grid box on the screen

- **Touch Screen Test –** _test successful_, _test failed_, or _test timed-out_
  <br><br>

### Bluetooth Tests

Checks whether the Bluetooth radio is operable and returns Bluetooth related information. Results:

- **Name –** displays the Bluetooth name
- **Radio Power Cycle –** _test successful_ or _test failed_. The state of the radio is preserved prior to this test.
- **Functional/Non-functional –** _functional_ or _non-functional_
- **Discoverable/Connectable -** _connectable_, _discoverable_, or _none_
  <br><br>

### WiFi Test

Checks for operation of the WiFi radio and returns WiFi related information. Results:

- **MAC Address –** _valid_ or _invalid_
- **Network Test –** displays _connected_ or _not connected_. Failure occurs if the WiFi is not connected to any network. The state of the radio is preserved prior to this test. If test is successful, the following values are displayed:
  - **strength –** displays signal strength
  - **ip –** displays IP address
  - **bssid –** _valid_ or _invalid_
  - **speed –** displays connection speed
  <!--
  - **essid –** displays ESSID. To display the ESSID **on Android O and above,** _Location_ is required to be enabled in device settings due to Android restrictions. If _Location_ is not enabled, the user is prompted to enable it. If the user proceeds to run the test without _Location_ enabled, _ESSID_ returns "Location not enabled."
    -->
    <br>

### Battery Test

Checks the battery status and returns battery related information. Results:

- **Part number –** displays the part number
- **Serial number –** displays the serial number
- **Manufacture date –** displays the battery date of manufacture
- **Battery Health –** displays the health of the battery as:
  - **Good –** the battery is in a healthy state
  - **Need to replace battery –** the charge cycle count (for [PowerPrecision batteries](https://www.zebra.com/us/en/products/accessories/powerprecision-battery-solutions.html)) or the setting retrieved from the internal Zebra framework (for [PowerPrecision+ batteries](https://www.zebra.com/us/en/products/accessories/powerprecision-battery-solutions.html)) has reached the [Battery Threshold](../configuration/#configuretests) value, indicating that the battery should be replaced with a new one soon.
  - **Unknown –** indicates a problem retrieving the battery health information
- **Voltage –** displays the voltage
- **Current –** displays the current
- **Temperature –** displays the temperature
- **Level -** displays the percentage (%) of remaining battery
- **Current Capacity -** displays the amount of energy stored in the battery in mAh (milliampere hour). Only supported with [PowerPrecision+ batteries](https://www.zebra.com/us/en/products/accessories/powerprecision-battery-solutions.html).
  <br><br>

### WWAN Test

Checks the operation of the WWAN radio and returns related WWAN information. Results:

- **Sim State –** Airplane mode must be disabled. Displays one of the following values:
  - **Present –** sim card is present
  - **Absent –** sim card is not present
- **Voice State -** displays one of the following values:
  - **Voice in service**
  - **Voice out of service**
  - **Voice Emergency only**
  - **Voice power off**
  - **Unknown voice**
- **Data State –** displays one of the following values:
  - **Data connected**
  - **Data disconnected**
  - **Data connecting**
  - **Data suspended**
  - **Unknown data**
- **WAN Type –** displays the network type, such as: _LTE, 2G, 3G, 4G,_ or _Not Available_
- **Signal Strength –** displays one of the following:
  - **Not applicable -** SIM card absent
  - **Unknown –** device could be in airplane mode
  - **Signal strength -** in dBm
- **Phone Number –** _valid_ or _invalid_, depending on whether or not the phone number is exposed by the service provider.
- **Device ID –** _valid_ or _invalid_, depending on whether or not the device ID is exposed
  <br><br>

### Audio Test

Checks for operation of the device microphone and speaker. Results:

- **Audio Test –** _test successful_ or _test failed_
  <br><br>

### SD Card Test

Checks external SD card status and information. The SD card must be mounted as portable storage in order to be detected. If the SD card is mounted as internal storage, DDT does not detect it. This applies similarly when formatting SD cards - only SD cards formatted as portable storage are detected by DDT. Results:

- **SD Card -** _present_ or _absent_
- **Read -** _passed_ or _not applicable_
- **Write -** _passed_ or _not applicable_
- **Total Space -** amount of total space on SD card in GB or _not available_
- **Free Space -** amount of free space on SD card in GB or _not available_

<br><br>

## Upload Logs

The configuration file and log files and can be uploaded on demand from the device to an FTP server. The files uploaded include: test result logs, configuration.xml, history log, and status log. To access this feature, from the main app screen tap the options menu at the top right and select **Upload.**

Upload screen options:

- **Protocol -** FTP (default value), only option available
- **IP Address -** enter the IP address of the FTP server (required)
- **UserName -** enter the user name to login (required)
- **Delete File From Device -** if enabled, deletes all files (configuration and log files) from the device after the upload is complete.

<p>If <a href="../configuration/#settings">Server Details</a> are entered in the Settings screen, these options are automatically populated and can be edited if necessary.</p>

After entering the appropriate information, tap **Upload.** Enter the FTP password when prompted. If successful, the files are uploaded to the FTP server in a .zip file with the file format `DDTLOG_[TimeStamp(ddMMyyyyHHmmss)]_[device_identifier].zip`, where:

- _[TimeStamp(ddMMyyyyHHmmss)]_ is the timestamp in 2 digit day, 2 digit month, 4 digit year, 2 digit hour, 2 digit minute and 2 digit seconds.
- _[device_identifier]_ is the unique identifier for the device, displaying one of the following based on the Android platform:
  - **UUID -** applies to Android 10 and later devices
  - **Serial number -** applies to Android Oreo and earlier devices

## Schedule Jobs

Device tests can be scheduled to perform at a specified time. Once a job is scheduled, it automatically repeats at the specified time on a weekly basis. The scheduled job can be deleted after completion to prevent it from repeating again. Only device tests that do not involve user interaction can be scheduled. When a scheduled job is complete, it is logged in `/storage/emulated/0/Android/data/com.symbol.selfdiagnostics/files/history.log`.

<p>To schedule a job:</p>

1. From the main app screen tap the options menu at the top right and select **Job Scheduler.**
2. In the Job Scheduler screen, tap "+" button to create a job.
3. Select the time in hours/minutes to perform the job.
4. Select the device test to perform.
5. Select the day of the week for the test to be performed.
6. Tap the save icon at the top right.

<p>To modify an existing scheduled job:</p>

1. In the Job Scheduler screen, tap on a scheduled job listed.
2. Make the necessary changes.
3. Tap the save icon at the top right.

<p>To delete an existing scheduled job:</p>

1. In the Job Scheduler screen, tap on a scheduled job listed.
2. Tap the trash icon at the top right.
<br>
<br>
<!-- -->

---

## See Also

- [About Device Diagnostic Tool](../about)
- [Test Criteria](../criteria)
- [Configuration](../configuration)
