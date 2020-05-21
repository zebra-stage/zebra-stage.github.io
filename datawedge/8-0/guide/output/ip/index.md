---
title: IP Output
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## Overview
IP Output allows captured data to be sent to a specified IP address and port using either TCP or UDP transport protocols. Zebra recommends that the receiving machine be running Windows and the Zebra IPWedge software, but it's not required. 

IPWedge is a small Windows app that monitors a network port and receives scanned data sent by devices using the DataWedge IP Output option. The receiving PC inserts the data as keystrokes into the foreground application or the Windows Clipboard, essentially using the device as a wireless scanner. 

### Prerequisites
Using IPWedge requires the following: 

* A PC with Windows and the .NET Framework 3.5 (SP 1 or later)
* A Zebra device running Android 4.4 KitKat (or later)
* DataWedge for Android 1.5 (or later)

-----

## IP Output Setup

**From the Profile in which to activate IP Output**:  

&#49;. Locate the IP Output section of the Profile.  

&#50;. **Check "Enabled" and "Remote Wedge" boxes** to enable IP Output and communication with the IPWedge Windows app:

<img style="height:350px" src="../ip_output.png"/>
_IP Output options_ 
<br>

&#51;. **Select the desired Protocol** (TCP or UDP) for data transport (default=TCP).

&#52;. **Enter the IP address** of the system that's running IPWedge.

&#53;. **Enter the Port number** if other than the default of 58627. 

-----

### UDI Data Output
This setting applies when the Scanning mode in [Barcode Reader Params](../../input/barcode/#readerparams) is set to UDI, which acquires multiple data points (tokens) as specified in the Universal Device Identifier parameter(s) selected in the above-referenced section. 

**Support for UDI barcodes, such as GS1, HIBCC and ICCBBA, is being terminated. This feature is supported using the imager on [selected Zebra devices](../../input/barcode/#udidecoding) up to Android P (version 9.x) only**

<!-- 2/8/18- removed pre-DW 6.7 panel 
<img style="height:350px" src="../token_selection_highlighted.png"/>
 -->
<img style="height:350px" src="../dw_6.7_data_formatting_and_ordering.png"/>

**Token selection -** allows the output order of acquired UDI data to be adjusted and the optional insertion of a Tab, Line Feed or Carriage Return character between tokens, if required.

**To adjust UDI Token settings**: 

**&#49;. Tap "Send tokens" to select the desired output** for acquired UDI data. 
<img style="height:350px" src="../token_selector.png"/>

**Tokens only -** DataWedge parses the UDI data into separate Tokens for output (separated by a separator character, if selected).

**Barcodes and tokens -** DataWedge sends the barcode string appended by the tokenized data. If no separator character is selected (see Step 2), DataWedge sends two instances of the same data.

**&#50;. Tap "Token separator" in the Token selection screen to specify a separator character** to be inserted between Tokens, if desired. If "Barcode and tokens" mode is selected, the selected character also is inserted between the two. 
<img style="height:350px" src="../separator.png"/>
_This setting is not available if "Send tokens" is disabled_.
<br>

**&#51;. Tap "Token order" to include/exclude Tokens** from the output and adjust their output order. 
<img style="height:350px" src="../token_order.png"/>
_Drag tokens to adjust output order_.
<br>
<br>

Programmatically configure UDI Data Output and retrieve the configuration:
* [SetConfig API](../../api/setconfig)
* [GetConfig API](../../api/getconfig)

-----

### MultiBarcode Data Output

This setting applies when the Scanning mode in [Barcode Reader Params](../../input/barcode/#readerparams) is set to MultiBarcode, which simultaneously acquires the number of barcodes (from 2-10) specified in the corresponding reader parameter. 

**Note: Supported on select devices only**. See the [About page](../../about) for details. 

**To configure MultiBarcode output**: 

**&#49;. Tap "Data formatting and ordering" to specify a separator character** to be inserted between the data from each barcode. 
<img style="height:350px" src="../dw_6.7_data_formatting_and_ordering.png"/>
<br>
**&#50;. Tap "Barcode separator" to specify the desired insertion character** (CR, LF or TAB).<br>Data from each barcode is otherwise concatenated and delivered as a single string of keystrokes.
<img style="height:350px" src="../dw_6.7_data_separating.png"/>

-----

### Using IP Output Plug-in without IPWedge

To use IP Output to send captured data to a remote device that's not running IPWedge, the system at the receiving end must be running a client app that monitors a port for data coming via TCP or UDP on the port specified on the device as described above. **Warning: Zebra does not support this usage scenario**.

**Configure IP Output to send captured data to a remote computer or device**:

&#49;. Locate the IP Output section of the Profile.  

&#50;. **Check "Enabled" box** and **_<u>uncheck</u>_ the "Remote Wedge" box**.

&#51;. **Select the desired Protocol** (TCP or UDP) for data transport (default=TCP).

&#52;. **Enter the IP address** of the server or device to receive the data.

&#53;. **Enter the Port number** (if other than the default of 58627). 

**Warning: Zebra does not support this usage scenario**.

-----

## Set Up IPWedge

&#49;. Visit the **[IP Wedge for Windows download page](https://www.zebra.com/apps/dlmanager?dlp=-227178c9720c025483893483886ea540bd07dd0f9873752cf891686eb495040ba85f97bf163f9fd95347bc39767aa16e5152c1728f99b445d656378ddc8ebac53885a53a0632e89d37b18cfe4b3299cd5e1762688da483afbbcf475ccabf9cb&c=us&l=en)** at the Zebra Support Portal, accept the EULA and download. 

**Note: Windows Mobile/CE devices might need a different version of IPWedge**. [Visit the Windows Mobile/CE download page](https://www.zebra.com/us/en/support-downloads/software/utilities/ipwedge-for-datawedge.html) for more information. 

&#50;. **Install the .zip file** on the system to which the scanned data will be sent. 

&#51;. **Run the IPWedge app**. A screen appears similar to the image below. **Make a note of the IP address and port number** (in the red box). 
<img style="height:200px" src="04_ipwedge.jpg"/>
_IPWedge System Tray menu shows system IP address and monitored port_ 
<br>

> **Note: The port number must be the same as that specified in IP Output** on the device.

&#52;. **Open the IPWedge app** from the Windows Start menu or click on the IPWedge icon in the System Tray and select "Options" from the menu. 

The IPWedge Options panels appears similar to the images below. 
<img style="height:250px" src="01_ipwedge.jpg"/>
_General Options_
<br>

<img style="height:250px" src="02_ipwedge.jpg"/>
_Keystroke Options_
<br>

<img style="height:250px" src="03_ipwedge.jpg"/>
_Clipboard Options_
<br>

&#53;. **Make any required changes** to Options in the General, Keystroke and Clipboard tabs. **Click OK on each tab** to save settings. 

The PC is now ready to receive data from DataWedge IP Output (with IP address and port settings matching those of the PC). 

-----

## Configuration

Programmatically configure IP Output and retrieve the configuration:
* [SetConfig API](../../api/setconfig/#setipoutput)
* [GetConfig API](../../api/getconfig/#getipoutput)

-----

**Other DataWedge Output Options**:

* **[Intent](../intent) -** programmatic data hand-off
* **[Keystroke](../keystroke) -** keyboard emulation

**Related guides**:

* [Profiles/Plug-ins](../../profiles)
* [DataWedge APIs](../../api) 

