---
title: Basic Data Formatting
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## Overview
Process Plug-ins manipulate the acquired data in a specified way before sending it via the Output Plug-in to the associated application or server. Controls for Process Plug-ins appear as "Basic Data Formatting" and "Advanced Data Formatting," and are grouped in a Profile's settings panel along with its Output Plug-in. 

**Process Plug-ins specify**: 
* Basic data formatting (i.e. append with keystrokes, a prefix, a suffix, etc.)
* Advanced data formatting (rules-based data manipulation, action triggers, etc.)

**The Basic Formatting Process Plug-in** allows DataWedge to add a prefix and/or a suffix to captured data before passing it to an Output Plug-in. It also permits the insertion of TAB and ENTER keystrokes, which can be used to move the cursor to from one field of an app to another to facilitate a series of data acquisition tasks.  

If desired, BDF also can convert acquired data to hexidecimal notation. For example, if an acquired barcode data is 012345, this option could convert and send the hex equivalent data of 30**31**32**33**34**35**. 

Get more info about [how Profiles work](../../overview). 

> The parameters of this feature can be configured using the [Set Config API](../../api/setconfig).

-----

## Basic Data Formatting

**Basic Data Formatting** provides an easy way to append or prepend acquired data with custom values or keystrokes before passing it to an Output Plug-in. It also permits the conversion of data to hexadecimal format. If the Basic Data Formatting is not enabled, captured data is passed to the selected Output Plug-in without modification. 

<img style="height:350px" src="../basic_data_formatting.png"/>
_Basic Data Formatting Output options_
<br>

**Prefix to data -** adds (prepends) the specified characters(s) **to the beginning** of the acquired data before sending.

**Suffix to data -** adds (appends) the specified characters(s) **to the end** of the acquired data before sending.

**Send data -** allows transfer of the captured data to the associated application when it comes to the foreground. **Enabled by default**.<br>**<u>Note</u>**: Disabling this option prevents only the <u>_captured_</u> data from being transferred; any prefix and/or suffix strings will <u>_always_</u> be handed to the associated app(s), even when this option is disabled. 

**Send as hex -** sends the data in hexadecimal format. For example, if the acquired barcode data is 012345, this option would send the hex equivalent of 30**31**32**33**34**35**. 

**Send TAB key -** appends a TAB character to the processed data. 

**Send ENTER key -** appends an ENTER character to the processed data. 

-----

**DataWedge Output options**: 

* **[Keystroke](../../output/keystroke) -** outputs acquired data as if the keyboard was pressed
* **[Internet Protocol](../../output/ip) -** outputs data over a network using TCP or UDP
* **[Intent](../../output/intent) -** delivers data to the app as an intent extra


**Related guides**:
* [Advanced Data Formatting](../adf)
* [DataWedge Profiles](../../profiles)
* [DataWedge APIs](../../api) 
