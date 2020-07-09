---
title: Output Plug-ins
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## Overview
**Output Plug-ins** send the processed data to the associated application or server. Those included with DataWedge are explained below. 

**The Keystroke Output Plug-in** collects the processed data and sends it to the associated application as a series of keystrokes, emulating the actions of a user pressing the keys.

**The Intent Output Plug-in** sends the processed data to the associated foreground application as payload within an Android Intent.

**The IP Output Plug-in** allows captured data to be sent to a specified IP address and port using either TCP or UDP transport protocols to a Windows server running Zebra IPWedge software. Please refer to the [IP Output Guide](../ipwedge) for further information. <!-- **Note: Profile0 cannot be used with IPWedge**. 10/18/16- removed per Tharindu -->


**DataWedge Output Options**:

* [Intent](../intent) (programmatic data hand-off)
* [Internet Protocol](../ip) (to a PC or server via TCP or UDP) 
* [Keystroke](../keystroke) (keyboard emulation)


The "Auto" option will automatically determine the best scanning device from the list of available devices based on the rules below. 

**Auto Scanner Selection Rules**:
* If a Zebra Scan Module or Scan/MSR Module is installed, the 2D imager will be selected. 
* If no Scan Module is installed, the camera will be selected. 
* When the camera is selected, scanning is performed with the rear-facing camera.
* When 2D Imager is selected, scanning is performed using the installed Scan or Scan/MSR module.

#### Bluetooth Scanners
DataWedge supports the following Zebra Bluetooth scanners: 

* **RS507** Cordless Ring Scanner
* **RS6000** Ring Scanner
* **DS3678** Ultra-Rugged Scanner

Bluetooth scanners are supported according to the following rules:

* **To initially configure the RS507** in a Profile, the scanner must be paired and connected.
* **After initial configuration**, the Bluetooth scanner can be enabled and disabled in the Profile even if it is disconnected from the device. However, to configure reader parameters, decoders and other scanner settings, the Bluetooth scanner must be connected.
* **DataWedge will not automatically reconnect** to a Bluetooth scanner if that scanner is connected while DataWedge is using a different auto-selected scanner. To re-enable a Bluetooth scanner, connect the scanner and select it in the Profile or re-choose the Auto select option.
* **Auto-selection and Battery Swap -** If Scanner selection is set to Auto and the RS507 was enabled prior to a battery swap, DataWedge will continue working with that RS507 scanner upon reconnection after the battery is swapped. If the RS507 does not reconnect with after the swap, DataWedge will revert to the current default scanner.
* **Keep Enabled on Suspend -** This mode is supported on Bluetooth and pluggable scanners, and might result in faster battery drain than would otherwise be expected while in suspend mode.**Note: The Zebra computing device will wake from suspend mode after pressing the scan trigger of any supported scanner**.

## SimulScan Input 
The SimulScan Input Plug-in permits simultaneous capture of barcodes, images, text, signatures, phone numbers and other data on multi-part forms. The SimulScan Input Plug-in adds this capability to DataWedge. When form data is captured according to a designated SimulScan template, data can be processed or formatted as required using Process Plug-ins. 

<img style="height:350px" src="keystroke-output.png"/>
_SimulScan Input Plug-in options_.
<br>

**SimulScan Capture Notes**:

* **Text captured through SimulScan** is concatenated into a single string, and processing is performed on that string.
* **If the Barcode Input Plug-in is enabled** in a Profile, enabling SimulScan in that Profile will cause the Barcode Input Plug-in to be disabled. 

**Device Selection -** permits selection between the device camera or the default scanning device set by the system.  

**Template selection -** sets a SimulScan template for the Profile being configured. 

**Templates included with DataWedge**:

* **BankCheck.xml -** captures the account number and routing number from the machine-readable zone (MRZ) of a check.

* **Barcode1.xml -** decodes a single barcode of any symbology.

* **Barcode2.xml -** decodes two barcodes of the same or differing symbologies.

* **Barcode4.xml -** decodes four barcodes of the same or differing symbologies.

* **Barcode5.xml -** decodes five barcodes of the same or differing symbologies.

* **Barcode10.xml -** decodes 10 barcodes of the same or differing symbologies.

* **BookNumber.xml -** decodes 10- or 13-digit ISBN codes.

* **DocCap+Optional-Barcode.xml -** captures the form as an image and optionally decodes a barcode if present. This is the default form if none is selected.

* **DocCap+Required-Barcode.xml -** captures the form and decodes any available barcode.

* **TravelDoc.xml -** captures information from the machine-readable zone (MRZ) of a travel document such as a passport.

* **Unstructured Multi-Line.xml -** uses OCR to acquire multiple lines of alpha/numeric text.

* **Unstructured Single Line.xml -** uses OCR to acquire a single line of alpha/numeric text.

_The names of all Templates included with SimulScan are preceded by the word "Default" plus a hyphen_.

Custom template XML files copied to the following device directory will be available for selection using this option:

`/enterprise/device/settings/datawedge/templates` 

**Note: Files and folders within the /enterprise directory are invisible to Android File Browser** by default; they can be made visible by manually inputting the path.

Partners and other authorized users can create custom templates online using Zebra's [SimulScan Template Builder](../../../../simulscan/1-1/guide/templatebuilder). 

**Region separator -** is used to configure a separator character for SimulScan text-region data. When multiple text regions exist, the region separator will be inserted between the data strings from each region on the acquisition form. Region separators can be used with the Keystrokes Plug-in Action key character setting (see below) to dispatch SimulScan region data to separate text fields.

Possible values:
* None (default)
* Tab
* Line feed 
* Carriage return 

**Notes**: 
* **Barcode, OCR and OMR regions** are considered as text regions. When using keystroke output and IP output, only text-region data will be dispatched to the foreground application or the remote server.
* **Picture-region data** can be retrieved only through the Intent Output Plug-in.

## Keystroke Output
The Keystroke Output Plug-in collects the processed data and sends it to the associated application as a series of keystrokes, emulating the actions of a user pressing the keys. 

<img style="height:350px" src="keystroke-output.png"/>
_Keystroke Output Plug-in options_. 
<br>

**Action key character -** enables injection of a special character embedded within barcode or MSR data.

Possible values:

* **None -** inject no action key
* **Tab -** inject action key in place of a ASCII Tab (0x09) character
* **Line feed -** inject action key in place of ASCII LF (0x0A) character
* **Carriage return -** inject action key in place of ASCII CR (0x0D) character

**Multi byte character delay -** used to set an inter-character delay (in ms) for sending multibyte characters. This parameter can help avoid problems that arise when sending Unicode and multibyte characters to the Android browser. Value is set to zero by default. If experiencing errors in the delivery of keystrokes, increase the delay value in increments of 100 ms.

**Key event delay -** used to set a delay (in ms) for dispatching control characters as keystrokes to the foreground application. 

<!-- 
Send data - Set to transfer the captured data to the foreground application. Disabling this option prevents the actual data from being transmitted. However, the prefix and suffix strings, if present, are still transmitted even when this option is disabled (default - enabled).
-->

## Basic Data Formatting
The Basic Format Process Plug-in provides an easy way to append or prepend acquired data with custom values or keystrokes before passing it to an Output Plug-in. It also permits the conversion of data to hexadecimal format. If the Basic Formatting Plug-in is not enabled, captured data is passed to the selected Output Plug-in without modification.

<img style="height:350px" src="basic_data_formatting.png"/>
_Basic Data Formatting Output Plug-in options_. 
<br>

**Prefix to data -** adds (prepends) the specified characters(s) **to the beginning** of the acquired data before sending.

**Suffix to data -** adds (appends) the specified characters(s) **to the end** of the acquired data before sending.

**Send data -** Enabled by default, this allows transfer of the captured data to the associated application when it comes to the foreground. **Note**: Disabling this option prevents only the _captured_ data from being transferred; any prefix and/or suffix strings will be handed to the associated application(s), even when this option is disabled.

**Send as hex -** sends the data in hexadecimal format. For example, if the acquired barcode data is 012345, this option would send the hex equivalent of 30**31**32**33**34**35**. 

**Send TAB key -** appends a TAB character to the processed data. 

**Send ENTER key -** appends an Enter character to the processed data. 

## Advanced Data Formatting
The Advanced Data Format Process Plug-in allows for acquired data to be customized to suit any requirement based on a set of complex rules containing individual or multiple criteria and actions. For more information, please see the [Advanced Data Formatting Guide](../advanced). 

## Intent Output
The Intent Output Plug-in allows acquired data to be passed programmatically to an application using the Android Intent mechanism. The core components of an application (its activities, services, and broadcast receivers) are activated by Intents. An Intent Object is a bundle of information that describes a desired action. It includes the data to be acted upon, the category of component that should perform the action and some other pertinent instructions. When an Intent is initiated, Android locates an appropriate component to respond to the Intent, launches a new instance of the component (if needed), and passes the Intent Object to it.

Components advertise the kinds of Intents they can handle through Intent Filters, which are specified in the `AndroidManifest.xml` file as &lt;intent-filter&gt; elements. A component may have any number of Intent Filters, each describing a different capability. 

<img style="height:350px" src="intent_output.png"/>
_Intent Output Plug-in options_. 
<br>

DataWedge invokes an Intent though an **Intent Action** in an **Intent Category** as described in its `AndroidManifest.xml` file. For example, if the DataWedge manifest contains the lines...

    <intent-filter>
        ...
        <action android:name="com.myapp.action" />
		<category android:name="android.intent.category.DEFAULT" />
        ...
    </intent-filter>

...then the **Intent Action** in the Intent Output Plug-in would be `com.myapp.action` and the **Intent Category** would be `android.intent.category.DEFAULT`.

The Intent Delivery option allows the method by which the Intent is delivered to be specified. Intent-based data is delivered through one of three delivery mechanisms:  

* **Send via startActivity** 

* **Send via startService** 

* **Broadcast Intent** 

When Intent delivery is sent via Broadcast Intent, DataWedge sets the **Receiver foreground flag** `Intent.FLAG_RECEIVER_FOREGROUND` in the broadcast Intent, giving the broadcast recipient permission to run at foreground priority with a shorter timeout interval. This flag is set only when Intent delivery is set to Broadcast Intent. **Note: Use this flag only if delays are seen in delivery of Intents immediately following device boot-up**.

####Decode-related data
The decode-related data added to an Intent bundle can be retrieved using the followng call: 

* `Intent.getStringtExtra()`
<!-- * `Intent.getSerializableExtra()`-->

The call above can be used with the following String tags:

* **String LABEL_TYPE_TAG = "com.symbol.datawedge.label_type"**; String contains the barcode label type

* **String DATA_STRING_TAG = "com.symbol.datawedge.data_string"**; String contains the output data as a String. In the case of concatenated barcodes, the decode data is concatenated and sent out as a single string.

* **String DECODE_DATA_TAG = "com.symbol.datawedge.decode_data"**; Decode data is returned as a list of byte arrays. In most cases there will be one byte array per decode. For barcode symbologies that support concatenation (i.e. Codabar, Code128, MicroPDF, etc.) the decoded data is stored in multiple byte arrays (one byte array, per bar code). Clients can get data in each byte array by passing an index.

####MSR-related data
The MSR-related data added to an Intent bundle can be retrieved using the following calls: 

* `Intent.getStringtExtra()`
<!-- * `Intent.getSerializableExtra()` -->

The calls above can be used with the following String tags:

* **String MSR_DATA_TAG = "com.symbol.datawedge.msr_data"**;
The data from the MSR tracks is concatenated and sent out as a byte array. The Start/end sentinels and track separators are included as configured.

* **String MSR_TRACK1_TAG = "com.symbol.datawedge.msr_track1"**; MSR track 1 data is returned as a byte array.

* **String MSR_TRACK2_TAG = "com.symbol.datawedge.msr_track2"**; MSR track 2 data is returned as a byte array.

* **String MSR_TRACK3_TAG = "com.symbol.datawedge.msr_track3"**; MSR track 3 data is returned as a byte array.

* **String MSR_TRACK1_STATUS_TAG = "com.symbol.datawedge.msr_track1_status"**; MSR track 1 decode status as an Integer where 0 indicates a successful decode.

* **String MSR_TRACK2_STATUS_TAG = "com.symbol.datawedge.msr_track2_status"**; MSR track 2 decode status as an Integer where 0 indicates a successful decode.

* **String MSR_TRACK3_STATUS_TAG = "com.symbol.datawedge.msr_track3_status"**; MSR track 3 decode status as an Integer where 0 indicates a successful decode.

####SimulScan-related Data
The SimulScan-related data added to an Intent bundle can be retrieved using the following calls: 

* `Intent.getStringtExtra()`
* `Intent. getParcelableArrayListExtra()`
* `Bundle.getInt()`
* `Bundle.getString()`
* `Bundle.getByteArray()`
<!-- * `Intent.getSerializableExtra()` -->

The calls above can use the following String tags:

* **String SIMULSCAN_TEMPLATE_NAME_TAG = "com.symbol.datawedge.simulscan_template_name"**; The name of the template which used by SimulScan to capture the form.

* **String SIMULSCAN_REGIONS_BUNDLE_TAG= "com.symbol.datawedge.simulscan_region_data"**; Return an array of Bundles where each bundle contains data and information about a region and the form.

* **String SIMULSCAN_REGION_NAME_TAG = "com.symbol.datawedge.simulscan_region_name"**; Returns the region name of the bundle object for reach region. To get the region name `Bundle.getString()` should be called.

* **String SIMULSCAN_REGION_ID_TAG = "com.symbol.datawedge.simulscan_region_id"**; Returns the region id of the bundle object for reach region. Region id is an integer and can be retrieved by calling `Bundle.getInt ()`.

* **String SIMULSCAN_REGION_STRING_DATA= "com.symbol.datawedge.simulscan_region_string_data"**; Returns the string data of the region. String data comes with barcode, OCR and OMR data.

* **String SIMULSCAN_REGION_BINARY_DATA= "com.symbol.datawedge.simulscan_region_string_data"**;
Returns the data of the region in the form of byte array. Binary data comes only for picture regions and the form image. Both picture and form data can be load in to a bitmap and display in the application.

* **String SIMULSCAN_REGION_TYPE_TAG = "com.symbol.datawedge.simulscan_region_type"**; Returns the region type of the bundle object for reach region. Region type is a string and can be retrieved by calling `Bundle.getString ()`. 

Possible return values for the region type:

* **Barcode -** Region is a barcode.
* **OCR -** Region is an Optical Character Recognition (OCR) region (i.e name or address). 
* **OMR -** Region is an Optical Mark Recognition (OMR) region (i.e checkbox, radio button).
* **Picture -** Region is a picture; data will be in the JPEG format.
* **Form -** Form type to specify that the bundle contains a picture of the captured form. Form image will be in the JPEG format.

**Important**: For some scanning applications, it might be preferable for decoded data to be sent directly to the current activity and not necessarily displayed. For such instances, the activity must be designated  as "singleTop" in its AndroidManifest.xml file. Failure to designate an activity in this way will cause an instance of the activity to be launched on every decode, and the data sent to each newly spawned copy. 

For more information about Android Intents, please refer to the [Android Developer site](https://developer.android.com/guide/components/intents-filters.html).

## IP Output
The IP Output Plug-in enables captured data to be transferred over a network to a computer running IPWedge, a small Windows app made by Zebra. The PC receives the data as keystrokes or in its Clipboard, in essence turning the device into a wireless scanner for the PC. 

To configure a device to use the IP Output Plug-in, it's necessary to know the IP address of the PC as well as the port number to which the PC will be listening. To set up the PC first, see the [IPWedge Guide](../ipwedge) for IPWedge download and set-up instructions. Then resume from here.

#### Set up the IP Output Plug-in: 

**From the Profile in which to activate the IP Output Plug-in**:  

&#49;. Locate the IP Output section of the Profile.  

&#50;. **Check "Enabled" and "Remote Wedge" boxes** to enable IP Output and communication with the IPWedge server component.

<img style="height:350px" src="ip_output.png"/>
_IP Output Plug-in options_. 
<br>

&#51;. **Select the desired Protocol** for data transport (TCP or UDP) or accept the default (TCP).

&#52;. **Enter the IP address** of the server running IPWedge software.

&#53;. **Enter the Port number** if other than the default of 58627. 

### Using IP Output Plug-in without IPWedge
it is possible to use the IP Output Plug-in to send captured data to a remote device without IPWedge. At the data receiving end, the PC or Mobile device should have a client application that listens to TCP or UDP data coming from the configured port and IP address in IP Output Plug-in. To get IP output plug-in configured to send captured data to a remote computer or device, follow these steps.

&#49;. Locate the IP Output section of the Profile.  

&#50;. **Check "Enabled" box** and **_uncheck_ the "Remote Wedge" box**.

&#51;. **Select the desired Protocol** for data transport (TCP or UDP) or accept the default (TCP).

&#52;. **Enter the IP address** of the server running IPWedge software.

&#53;. **Enter the Port number** if other than the default of 58627. 

**Warning: Zebra does not support this usage scenario**.

## Data Capture Plus (DCP)
Data Capture Plus (formerly known as the "Data Capture Panel") enables areas of the device screen to be designated as scan triggers. By tapping on a designated screen area, DataWedge will respond as it would to a scanner button-press or other hardware trigger.

DCP is disabled by default. The DataWedge Profile configuration screen allows an app user to configure the appearance of DCP on the screen once a particular Profile is loaded. If the user checks the option to enable the DCP, the five parameters shown below appear on the preference screen and can be configured as desired.

**Note: The DCP will not appear if the scanner is disabled in the current Profile**.

<img style="height:350px" src="dcp_settings.png"/>
_Data Capture Plus options for setting scan triggers_. 
<br>

Data Capture Plus offers these configurable parameters:

**Dock button on -** Sets the initial docking location of the floating DCP button. Changes by the user at runtime are saved to the active Profile. Docking options:  
* Right side only
* Left side only
* Either side

**Start in -** Sets the mode that DCP will startup with. If configured to launch as a button, the DCP mode can be changed at runtime by dragging, but the launch state will not be changed in the Profile. Start-in options: 
* Button mode (floating button)
* Full-screen mode
* Button-only mode

**Button highest position -** Sets a ceiling for button position expressed as a percent of screen height. For example, on a screen measuring four inches vertically, a setting of 75 (%) would prevent the upper edge of the DCP button from being positioned less than one inch from the top of the screen. 

**Bottom lowest position -** Sets a floor for button position expressed as a percent of screen height. For example, on a screen measuring four inches vertically, a setting of 25 (%) would prevent the lower edge of the DCP button from being positioned less than one inch from the bottom of the screen.

**Drag Detect Time -** The wait time (in ms) that DCP should wait after a screen tap before triggering a scanner action. This can help prevent accidental triggers when dragging the DCP button to a new location.

**Note**: A quick touch and release of the DCP can sometimes start the viewfinder when using camera as a scanner. To exit, press the back button.

<img style="height:350px" src="dcp_minimized.png"/>
_Data Capture Plus shown in minimized mode_. 
<br>

**Note**: If configured to launch as a button, the DCP mode can be changed at runtime by dragging, but the launch state will not be changed in the Profile. However, runtime changes to the vertical position and the docking side of device screen _**will**_ be saved to the active Profile.

<img style="height:350px" src="dcp_maximized.png"/>
_Data Capture Plus shown in maximized mode_. 
<br>

### Scanning with DCP

**To scan a barcode with DCP**: 

&#49;. With DCP enabled, **tap and hold the area of the screen designated for DCP**. The scan beam (or camera viewfinder) will be active while the tap is held. 

&#50;. **Aim the scan beam or camera reticle at the barcode** to be scanned. DCP will use the preferences configured in the Barcode Input Plug-in for the current Profile.

&#51;. * **Release finger to stop scanning** or to close the camera viewfinder.

**Note**: A quick touch and release of the DCP control sometimes will start the viewfinder when using camera as a scanner. To exit, press the BACK button.

------

**Related guides**:

* [Profiles/Plug-ins](../../profiles)
* [DataWedge APIs](../../api) 

