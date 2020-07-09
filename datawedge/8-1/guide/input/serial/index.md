---
title: Serial Input
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## Overview

Serial Input options are used to specify communications parameters for a scanner or other device connected to a serial port that will be used to acquire data. In the DataWedge UI, the number of serial ports availabile for selection varies according to the number of serial ports on the host device. If a USB cable is connected to the device, serial port is not available nor visible in the UI. For example, if a VC80x device is connnected to a computer via USB cable, serial port communications are blocked. Zebra recommends removing the USB cable before using the serial port.

<!-- 2/28/18- Removed per eng. 
**Note: DataWedge provides audio and other feedback to alert the user of scanning results and barcode type. See the [Scanner Parameters](#scanparams) section for more information**. 
 -->

-----

### Serial Port Configuration 
**_Applies only to devices running Android N and higher_**. _Pre-N versions offer Enable/Disable function only_.

<img style="height:450px" src="DW_serial_02.png"/>
_Input enabled on Serial port 1 of a Zebra VC80x; second serial port (disabled) also shown._
<br>


**Baud rate -** specifies the modulation rate of the connected serial device. 

**Data bits -** specifies the number of data bits in a serial frame (data bits per byte). 

**Parity -** specifies the parity bits using one of the following values: 

* None: No parity check
* Odd: Sets the parity bit so the count of bits set is an odd number
* Even: Sets the parity bit so the count of bits set is an even number
* Mark: Leaves the parity bit set to 1
* Space: Leaves the parity bit set to 0

**Stop bits -** specifies the number of stop bits to use.  

<img style="height:450px" src="DW_serial_04.png"/>
_Tapping on a setting displays a dialog box for changing its value._
<br>

**Notes**: 

* **<u>Serial port configuration is available only on devices running Android N and higher</u>**. For prior versions, only the Enable/Disable options are available for serial ports.
* **For more information about required serial communication settings** of a specific device, please refer to documentation that accompanied the peripheral being connected. 
* **Serial-port settings also can be configured programmatically.** See [SET_CONFIG API](../../api/setconfig) section. 

<!--  10/11/18 - remove per engineering
-----

### Output Using Intents

For some scanning applications, it might be preferable to output acquired data directly to an app or app activity rather than displaying decoded data on the screen. **This is done using Android intents**:

* **[SET_CONFIG API](../../api/setconfig)** and **[sample code](../../api/setconfig/#setserialinputconfiguration)** for setting serial parameters
* **[GET_CONFIG API](../../api/getconfig)** and **[sample code](../../api/getconfig/#getserialinputconfig)** for getting serial parameter settings

-->
-----

**Relates Gudies**:
* **[Intent Output guide](../../output/intent)** | Information and important warnings about intent usage
* **[DataWedge APIs](../../api)** | List of all DataWedge intent APIs
* **[DataWedge Profiles](../../profiles)** | List of dataWedge Plug-ins for input, output and data processing
* **[Android Developer site](https://developer.android.com/guide/components/intents-filters.html)** | General information about Android intents 

