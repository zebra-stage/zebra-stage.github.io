---
title: Using Device Diagnostic Tool
layout: guide.html
product: Device Diagnostic Tool
productversion: "2.3"
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

## User Interface

When launching the app for the first time, the main screen displays the tests available to run:

<img style="height:400px" src="mainscreen.png"/>

_Main screen_
<br/>
If tests have already been conducted, the test name is followed by the date when the last test was conducted.
<br />
<br />

Tap **Run Tests** from the main screen to execute all the tests. Test execution is based on the tests selected in the **Configure Tests** screen. Once the test is initiated, the user is prompted to perform additional actions during test execution of the following: Scanner Test, Button Test, Touch Screen Test, and Audio Test. It is recommended for all tests to be performed while the device is in normal use, i.e. not docked in a cradle or connected via USB to a computer. Once testing is complete, the results are displayed:
<br /><br>

&nbsp;&nbsp;&nbsp;<img align="left" style="height:25px" src="testpassed.png"/><b>Pass -</b> Test executed and passed. Result passed test criteria.
<br>
&nbsp;&nbsp;&nbsp;<img align="left" style="height:25px" src="testfailed.png"/><b>Fail -</b>Test executed and did not meet the test criteria.
<br>
&nbsp;&nbsp;&nbsp;<img align="left" style="height:20px" src="testinfo.png"/><b>Information -</b>Data retrieved and displayed.
<br /><br />
Alternatively, in admin mode individual tests can be performed by tapping on the individual test category and then tapping <b>Run Tests</b>.
<br>

**Test failed** and **test timed-out** result to the same red hazard icon.
<br><br>

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
- **Network Test –** displays _connected_ or _not connected_<!-- _ping failed_ or the time (in ms or sec) it takes to ping the specified address if successful.--> Failure occurs if the WiFi is not connected to any network. The state of the radio is preserved prior to this test. If test is successful, the following values are displayed:
  - **strength –** displays signal strength
  - **essid –** displays ESSID. To display the ESSID **on Android O and above,** _Location_ is required to be enabled in device settings due to Android restrictions. If _Location_ is not enabled, the user is prompted to enable it. If the user proceeds to run the test without _Location_ enabled, _ESSID_ returns "Location not enabled." 
  - **ip –** displays IP address
  - **bssid –** _valid_ or _invalid_
  - **speed –** displays connection speed
<br><br>


### Battery Test

Checks the battery status and returns battery related information. Results:

- **Part number –** displays the part number
- **Serial number –** displays the serial number
- **Manufacture date –** displays the battery date of manufacture
- **Decommission status –** displays the health of the battery as:
        - **Good –** the battery is in a healthy state
        - **Decommissioned –** the battery has reached the threshold designated, currently 400 charge cycles, indicating that the battery should be replaced with a new one soon.
        - **Unknown –** indicates a problem retrieving the battery health information
- **Voltage –** displays the voltage
- **Current –** displays the current
- **Temperature –** displays the temperature
- **Level -** displays the percentage (%) of remaining battery
- **Current Capacity -** displays the amount of energy stored in the battery in mAh (milliampere hour). Only supported with [PowerPrecision+ batteries](https://www.zebra.com/us/en/products/accessories/powerprecision-battery-solutions.html).
<br><br>


### WWAN Test

Checks the operation of the WWAN radio and returns related WWAN information. Results:

* **Sim State –** Airplane mode must be disabled. Displays one of the following values:
        * **Present –** sim card is present
        * **Absent –** sim card is not present
* **Voice State -** displays one of the following values:
        * **Voice in service**
        * **Voice out of service**
        * **Voice Emergency only**
        * **Voice power off**
        * **Unknown voice**
* **Data State –** displays one of the following values:
        * **Data connected**
        * **Data disconnected**
        * **Data connecting**
        * **Data suspended**
        * **Unknown data**
* **WAN Type –** displays the network type, such as: _LTE, 2G, 3G, 4G,_ or _Not Available_
* **Signal Strength –** displays one of the following:
        * **Not applicable -** SIM card absent
        * **Unknown –** device could be in airplane mode
        * **Signal strength -** in dBm
* **Phone Number –** _valid_ or _invalid_, depending on whether or not the phone number is exposed by the service provider.
* **Device ID –** _valid_ or _invalid_, depending on whether or not the device ID is exposed
<br><br>


### Audio Test

Checks for operation of the device microphone and speaker. Results:

- **Audio Test –** _test successful_ or _test failed_

<br>
<br>
<!-- -->
------

## See Also

- [About Device Diagnostic Tool](../about)
- [Test Criteria](../criteria)
- [Configuration](../configuration)
