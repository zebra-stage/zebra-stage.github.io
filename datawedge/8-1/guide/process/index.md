---
title: Advanced Data Formatting
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## Overview
The **Advanced Data Formatting (ADF) Plug-in** allows acquired data to be customized to suit any requirement based on a set of complex rules containing individual or multiple criteria and actions. 

Process Plug-ins manipulate the acquired data in a specified way before sending it to the associated application or server via the Output Plug-in. Process Plug-ins are grouped with each Output Plug-in, and appear as "Basic Data Formatting" and "Advanced Data Formatting." They are explained below. 



**Process Plug-ins specify**: 
* Basic data formatting (append with keystrokes, prefix, suffix, etc.)
* Advanced data formatting (rules-based data manipulation)


**The Basic Format Process Plug-in** allows DataWedge to add a prefix and/or a suffix to captured data before passing it to an Output Plug-in. It also permits the insertion of TAB and ENTER keystrokes as well as conversion of data to hex. For example, if the acquired barcode data is 012345, this option would cause the hex equivalent data of 30**31**32**33**34**35** to be sent. 


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

-----

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
DataWedge permits data acquired from barcode scanning, magstripe reading or other methods to be manipulated based on its contents. The Advanced Data Formatting (ADF) Process Plug-in can be configured to determine whether and how the data should be altered according to rules. These rules can be used to trigger (or prevent) actions based on specific criteria relating to the data. For example, a rule might be created to trigger an action only if the first four digits of an acquired 16-digit number determine that it's a credit card number affiliated with a specific bank. Any number of rules and interdependencies can be created, giving DataWedge the ability to suit virtually any data processing requirement.   

**ADF Components**:

**Rules -** The containers for one or more processing Actions and the user-definable criteria that trigger Action(s). All DataWedge Output Plug-ins can contain one or more ADF rules for the processing of acquired data.

**Criteria -** The triggers for taking a processing Action. Criteria can be set according to input type (i.e. only data from a barcode scanner), Symbology (i.e. only Code39 data), and a specified string within the data (at a specified position in the data string and/or of a specified length). Acquired data not matching all defined criteria will not trigger Action(s). Any or all of the [supported barcode types](../decoders) can be selected or excluded. 

**Actions -** A set of procedures for analyzing, identifying and processing acquired data. 

**The four Action types**: 
* **Cursor movement** (i.e. skip the first 10 characters)
* **Data modification** (i.e remove all spaces; pad the left side with four zeros)
* **Data sending** (i.e. output the last four digits)
* **Pause** (i.e. pause 50 ms before executing the next action)

### Creating ADF Rules
Setting up Advanced Data Formatting is done in three basic steps: 

1. Create a Rule
2. Define Criteria to activate the Rule
3. Define the Action(s) to be executed by the Rule

These steps are all carried out within the Advanced Data Formatting Process Plug-in, which is part of every DataWedge Output Plug-in. For further details, see [DataWedge Profiles](../profiles). 

**To Create an ADF Rule**: 

&#49;. In the Profile that requires ADF, **tap on Advanced data formatting** as highlighted below. A screen appears similar to the image in Step 2.
<img style="height:350px" src="adf_intent_output.png"/>
<br>

&#50;. **Tap the "hamburger" menu, select New rule** and enter a name for the rule. The new Rule appears with other Rules in the Output Plug-in screen similar to the image in Step 3, below.   
<img style="height:350px" src="Figure_14_Adv_DataFormattingScreen.png"/>
<br>

&#51;. **Tap the new Rule** to access its settings. A screen appears similar to the image in Step 4.  
<img style="height:350px" src="adf_15_rules_list.png"/>
<br>

&#52;. **Tap Criteria** as highlighted below to enter the criteria that will activate the Rule.  
<img style="height:350px" src="Criteria-MyAppRule01.png"/>
<br>

&#53;. From the Criteria screen, **enter the criteria that will activate the Rule** based on the options below.  
<img style="height:350px" src="adf_23_source_criteria.png"/>
<br>

**Action Criteria**:

* **String to check for -** Allows a string to be specified that if present in the acquired data will initiate the action(s) (i.e. output the acquired string). If the specified string is not present at the "Starting position" (see below), the action(s) will not be executed. DataWedge can check for the presence of alphanumeric or control characters. For example:
	* **x -** checks for the character "x"
	* **\xhh -** checks for the character with a hexadecimal value of 0xhh
	* **\uhhhh -** checks for the Unicode character with a value of 0xhhhh

* **String position -** The starting position (starting at 0) at which to check for the string specified in the "String to check for" parameter. For example, the target string "AB" with a string position of 3 would invoke action(s) if the string "123ABC123" is acquired, but would not invoke action if the "AB" was located anywhere else in the string (or was not present). Notice that the "AB" portion of the example string begins at the fourth character from the left, which is position 3 when starting the count from 0.

* **String length -**  An optional parameter that allows a specific length (in characters) to be present before action(s) will be invoked. For example, if scanning U.S. Social Security numbers, a String length of nine (9) might be used as a means of initial validation. 

* **Source criteria -** An optional parameter that can invoke action(s) only when data is acquired by means of a barcode scanner (through which [specific decoders](../decoders) can be further selected or excluded), or through SimulScan. 
<br>

&#54;. **Tap the BACK button** to save and return to the Rule screen.
<img style="height:350px" src="adf_17_criteria_list.png"/>
<br>

**To Add an Action**:

&#55;. From the Rule screen, **tap "Actions"** as highlighted below. Then **select New action from the menu on the next screen**. A scrollable list of Actions appears, similar to the image in Step 8.
<img style="height:450px" src="Criteria-MyAppRule01_copy.png"/>
<br>

&#56;. **Tap the desired Action in the Actions list**, scrolling as necessary. After tapping an Action, the Rule screen reappears with that Action added to the bottom of the Actions list. For a description of each Action, see the table below. 
<img style="height:350px" src="adf_19_actions1.png"/>
<br>

### Supported ADF Actions
<table rules="all"
width="100%"
frame="border"
cellspacing="0" cellpadding="4">
<caption class="title"></caption>
<col width="22%" />
<col width="22%" />
<col width="55%" />
<thead>
<tr>
<th align="left" valign="top">Type</th>
<th align="left" valign="top">Actions</th>
<th align="left" valign="top">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="5" align="left" valign="top"><p class="table">Cursor Movement</p></td>
<td align="left" valign="top"><p class="table">Skip ahead</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Skip back</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor back by the specified number of characters.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Skip to start</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor to the beginning of the data.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Move to</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward until the string specified in the data field is found.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Move past</p></td>
<td align="left" valign="top"><div><div class="paragraph"><p>Moves the cursor forward past the string specified in the data field.</p></div></div></td>
</tr>
<tr>
<td rowspan="12" align="left" valign="top"><p class="table">Data Modification</p></td>
<td align="left" valign="top"><p class="table">Crunch spaces</p></td>
<td align="left" valign="top"><p class="table">Reduce spaces between words to one and remove all spaces at the beginning and end of the data.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Stop space crunch</p></td>
<td align="left" valign="top"><p class="table">Disables the last <strong>Crunch spaces</strong> action.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Remove all spaces</p></td>
<td align="left" valign="top"><p class="table">Remove all spaces in the data.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Stop space removal</p></td>
<td align="left" valign="top"><p class="table">Disables the last <strong>Remove all spaces</strong> action.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Remove leading zeros</p></td>
<td align="left" valign="top"><p class="table">Remove all zeros at the beginning of data.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Stop zero removal</p></td>
<td align="left" valign="top"><p class="table">Disables the previous <strong>Remove leading zeros</strong> action.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Pad with zeros</p></td>
<td align="left" valign="top"><p class="table">Left-pad data with the specified number of zeros.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Stop pad zeros</p></td>
<td align="left" valign="top"><p class="table">Disables the previous <strong>Pad with zeros</strong> action.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Replace string</p></td>
<td align="left" valign="top"><p class="table">Replaces a specified string with a new specified string. Both must be specified.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Stop all replace string</p></td>
<td align="left" valign="top"><p class="table">Stop all <strong>Replace string</strong> actions.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Remove characters</p></td>
<td align="left" valign="top"><p class="table">Remove the number of characters specified in given positions when send actions are executed.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Stop remove characters</p></td>
<td align="left" valign="top"><p class="table">Stops removing characters from subsequent send actions.</p></td>
</tr>
<tr>
<td rowspan="6" align="left" valign="top"><p class="table">Data Sending</p></td>
<td align="left" valign="top"><p class="table">Send next</p></td>
<td align="left" valign="top"><p class="table">Sends the specified number of characters from the current cursor position.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Send remaining</p></td>
<td align="left" valign="top"><p class="table">Sends all data that remains from the current cursor position.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Send up to</p></td>
<td align="left" valign="top"><p class="table">Sends all data up to the specified string.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Send pause</p></td>
<td align="left" valign="top"><p class="table">Pauses the specified number of milliseconds (default = 0; max. = 1000) before executing the next action. <strong>Zebra recommends pausing 50 ms after sending any ENTER, LINE FEED or TAB character</strong>.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Send string</p></td>
<td align="left" valign="top"><p class="table">Sends the specified string.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Send char</p></td>
<td align="left" valign="top"><p class="table">Sends the specified ASCII/ Unicode character. The maximum Unicode character value can be entered is U-10FFFF (= 1114111 in decimal).</p></td>
</tr>
</tbody>
</table>
</div>
_**Note: To help minimize data loss, Zebra recommends sending a Pause Action of 50 ms after sending any ENTER, LINE FEED or TAB character**._

&#57;. **Repeat Step 8 until all required Actions appear in an Actions list** similar to the image below. Actions execute from top to bottom. To re-order an Action, drag by its "hamburger" icon. **See additional notes and the example, below**.  
<img style="height:350px" src="The-ADF-Rule screen.png"/>
_The ADF Rule screen from DataWedge 6.2 (with several configured actions)._
<br>
<br>

<img style="height:350px" src="rules_screen_AndroidL.png"/>
_The ADF Rule screen from DataWedge 6.2 (with no configured actions)._
<br>

<!--
Rule0-Actions.png
-->

**Action Notes**: 
* Actions are processed from the top of the list downward to the bottom. 
* To reposition an Action, drag the Action by its handle (to the right of its name). 
* To delete an Action, long-press the Action name. 
* A Pause Action of 50 ms after sending ENTER, LINE FEED or TAB Actions can help minimize data loss.

**Rules Notes**: 
* Once a Rule is enabled (with a check mark in its Rule screen), a Rule will apply whenever its parent Profile is used. 
* All data acquired through the Profile will be processed according to the Actions defined in the Rule before being transferred to the selected Output Plug-in. 
* If no ADF rule is enabled or defined, DataWedge passes decoded data to the Output Plug-in without processing.

### Non-printable Characters
When setting up an ADF data processing rule to find or replace control characters, extended ASCII characters or other non-printable characters, DataWedge supports the use of the **\xNN notation** to specify hex value of the character and **\uNNNN notation** for Unicode values. 

For example, if the captured data contains the Group separator (GS) character (\x1D) and data on either side of the separator must be acquired, the following ADF actions can be added to the ADF rule: 

**To capture the data**: 8100712345(GS)2112345678

**Execute the following Actions**:

* **Send data up to (\x1D)**
* **Skip ahead (1)**
* **Send remaining data**

-----

## ADF Rule Example
The following is an example of the creation process for an Advanced Data Formatting Rule that might be typical for data processing scenarios. 

**Barcode scanning criteria**:
* Barcode: Code39
* Decoded Length: 12 characters
* Starting Position contents: "129" 

**How DataWedge should format the data**:
* Pad all sends with zeros to a length of 8
* Send all data up to character X
* Send a space character

**To create an ADF rule for this example**:
1. Tap **HOME -> DataWedge -> Profile0**.
1. Tap **Advanced data formatting**.
1. Tap **Enable**.
1. Tap **Rule0**.
1. Tap **Criteria**.
1. Tap **String to check for**. In the text box, **enter "129"** and **Tap OK**.
1. Tap **String position**. Change value to 0 and **Tap OK**.
1. Tap **String length**. Change value to 12 and **Tap OK**.
1. Tap **Source criteria**.
1. Tap **Barcode input**.
1. Tap **All decoders enabled** to uncheck and disable all decoders.
1. Tap **Code39** to enable the Code39 decoder only. 
1. Tap **BACK** three times.
1. Under Actions, **tap and hold Send remaining** until a menu appears.
1. Tap **Delete action**.
1. Tap **Menu -> New action**. Select **Pad with zeros**. The Pad with zeros Action appears in the Actions list.
1. Tap the **Pad with zeros** Action.
1. Tap **How many**. Change value to 8 and **Tap OK**.
1. Tap **BACK**.
1. Tap **Menu -> New action**. Select **Send up to**. The Send up to Action appears in the Action list.
1. Tap the **Send up to** Action.
1. Tap **String**. In the text box, **enter "X"** and **Tap OK**.
1. Tap **BACK**.
1. Tap **Menu -> New action**. Select **Send char**. The Send char Action appears in the Action list.
1. Tap the **Send char** Action.
1. Tap **Character code**. In the text box, **enter 32** and **Tap OK**.
1. Tap **BACK**.

The Rule0 screen should appear similar to the image below. 
<img style="height:350px" src="Figure_18_ADF_SampleScreen.png"/>
<br>

-----

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
SimulScan-related data added to an Intent bundle is retrieved using the following intent keys:

* **"com.symbol.datawedge.simulscan_template_name" -** Returns the name of the template used by SimulScan to capture the form.

* **"com.symbol.datawedge.simulscan_region_data" -** Returns an array of Bundles where each bundle contains data and information about a region and the form. This bundle may contain the following intent keys based on the use case:

    * **"com.symbol.datawedge.simulscan_region_name" -** Returns the region name of the bundle object for reach region. Call `Bundle.getString()` to get the region name.
    * **"com.symbol.datawedge.simulscan_region_id" -** Returns the region ID of the bundle object for each region. Region ID is an integer and is retrieved by calling `Bundle.getInt()`.
    * **"com.symbol.datawedge.simulscan_region_string_data" -** Returns the string data of the region. String data comes with barcode, OCR and OMR data.
    * **"com.symbol.datawedge.simulscan_region_binary_data" -** Returns the data of the region in the form of a byte array. Binary data is returned for picture regions and the form image. Both picture and form data are loaded in to a bitmap and displayed in the application.
    * **"com.symbol.datawedge.simulscan_data_file_paths" -** Returns the file paths of the images if the simulscan_region_type is "picture". If **Images as Files** option is enabled, simulscan_data_file_paths key must be used to get the image data.
    * **"com.symbol.datawedge.simulscan_region_type" -** Returns the region type of the bundle object for each region. Region type is a string and is retrieved by calling `Bundle.getString()`. Possible return values for the region type:
        * **Barcode -** Region is a barcode.
        * **OCR -** Region is an Optical Character Recognition (OCR) region (i.e name or address). 
        * **OMR -** Region is an Optical Mark Recognition (OMR) region (i.e checkbox, radio button).
        * **Picture -** Region is a picture; data is in JPEG format.
        * **Form -** Form type to specify that the bundle contains a picture of the captured form. Form image is in the JPEG format.

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

