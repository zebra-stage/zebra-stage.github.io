---
title: SimulScan Input
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## Overview
The [Zebra SimulScan](../../../../../simulscan) app permits simultaneous capture of barcodes, images, text, signatures, phone numbers and other data from a scan target in a single pass. A SimulScan Input option adds this capability to DataWedge. When form data is captured according to a designated SimulScan template, data can be processed or formatted as required using Process Plug-ins. For more information, refer to the [SimulScan User Guide](../../../../../simulscan). 

> This feature can be used only on [devices that support SimulScan](../../../../../simulscan). 

<img style="height:350px" src="simulscan_input.png"/>
_SimulScan Input options_
<br>

<img style="height:350px" src="dw68_simulscan_templates.png"/>
_SimulScan standard templates (not all shown)_
<br>

**Hardware Trigger -** enables/disables the use of the device hardware trigger for Simulscan input. The hardware trigger is enabled by default. If disabled, the view finder does not appear when pressing the hardware trigger. However, it can still be activated by using the [Soft Scan Trigger](../../api/softscantrigger) DataWedge API intent. This feature allows application programmers to enforce the use of app-specific features when scanning barcodes and documents within their app.

<img style="height:350px" src="hardware_trigger_simulscan.png"/>
<br>

**Device Selection -** permits selection between the device camera and the default scanning device set by the system (recommended).

**Template selection -** sets a SimulScan template for the Profile being configured. **Templates included with DataWedge**:

 * **Default - BankCheck.xml -** captures the account number and routing number from the machine-readable zone (MRZ) of a check.
 * **Default - Barcode1.xml -** decodes a single barcode of any symbology.
 * **Default - Barcode10.xml -** decodes 10 barcodes of the same or differing symbologies.
 * **Default - Barcode2.xml -** decodes two barcodes of the same or differing symbologies.
 * **Default - Barcode4.xml -** decodes four barcodes of the same or differing symbologies. **This is the default template if none is selected**.
 * **Default - Barcode5.xml -** decodes five barcodes of the same or differing symbologies.
 * **Default - BookNumber.xml -** decodes 10- or 13-digit [ISBN codes](http://www.isbn.org/faqs_general_questions).
 * **Default - DocCap+Optional-Barcode.xml -** captures the form as an image and optionally decodes a barcode, if present.
 * **Default - DocCap+Required-Barcode.xml -** captures the form and decodes any available barcode.
 * **Default - TravelDoc.xml -** captures information from the machine-readable zone (MRZ) of a travel document such as a passport.
 * **Default - Unstructured Multi-Line.xml -** uses OCR to acquire multiple lines of alpha/numeric text.
 * **Default - Unstructured Single Line.xml -** uses OCR to acquire a single line of alpha/numeric text.

_The names of all Templates included with SimulScan are preceded by the word "Default" plus a hyphen_.

**To add custom templates to the list above**, copy the template XML files to the `/enterprise/device/settings/datawedge/templates` directory. 

**Note: Files and folders in the** `/enterprise` **directory are <u>invisible</u> to the Android File Browser**; they can be made visible in File Browser by manually inputting the path.

Zebra partners and other authorized users can create custom templates online using Zebra's [SimulScan Template Builder](../../../../../simulscan/1-1/guide/templatebuilder). 

**Dynamic Template Params –** permits the configuration of parameters when using Dynamic Templates. This offers the flexiblity of accepting input parameters based on varying usage scenarios without requiring a different template for each. If the selected template contains Dynamic-Template parameters, DataWedge prompts the user to configure the parameters. Currently supports Dynamic Quantity, which sets the number of barcodes (from 1-99; default=5) to be decoded on a form. Dynamic Templates are created using [Template Builder](http://simulscan.zebra.com/). 

<!-- <img style="height:350px" src="dynamic_template.png"/>
_Dynamic Barcode Quantity_
<br>
 -->
**Region separator -** used to configure a separator character for SimulScan text-region data (see Notes, below). When multiple text regions exist, the region separator is inserted between the data strings from each region on the acquisition form. Region separators can be used with the [Keystroke Output Action key](../../output/keystroke) character settings to dispatch SimulScan region data to separate text fields.

**Possible values**:
* None (default)
* Tab
* Line feed 
* Carriage return 

**Log directory –** Used to change the default folder path (`/storage/emulated/0/simulscan/logs`) for storing the SimulScan logs on the device. **Note**: SimulScan logging is enabled/disabled by the SimulScan template in use; logging is not controlled by DataWedge. 

**Timestamp –** Enable/disable automatic insertion of a timestamp (`yyyy-MM-dd HH:mm:ss`) along with acquired data.

**Images as Files -** When enabled (disabled by default), all image files are delivered as files. Zebra recommends to enable this option. It addresses "TransactionTooLargeException" with the following message which may occur if the application tries to retrieve large data, such as images, via Intents: “Can't deliver broadcast to [application name], Crashing it.”


### SimulScan Notes 

* **DataWedge concatenates all text captured through SimulScan** into a single string and performs processing on that string. 
* **Barcode, OCR and OMR regions** are considered text regions. When using keystroke output and/or IP output, only text-region data are dispatched to the foreground application or to a remote server.
* **Picture-region data** (images) are retrieved only through Intent Output.
* **Text captured through SimulScan** is concatenated into a single string and processing is performed on that string.
* **If Barcode Input is enabled in a Profile**, enabling SimulScan in that Profile causes the Barcode Input Plug-in to be disabled. 

-----

### Simulscan-related Data
<!--
The SimulScan-related data added to an Intent bundle is retrieved using the following calls: 

* `Intent.getStringtExtra()`
* `Intent. getParcelableArrayListExtra()`
* `Bundle.getInt()`
* `Bundle.getString()`
* `Bundle.getByteArray()`  -->
<!-- * `Intent.getSerializableExtra()` -->
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

<!--
The calls above can use the following String tags:
* **String SIMULSCAN_TEMPLATE_NAME_TAG = "com.symbol.datawedge.simulscan_template_name"**; The name of the template used by SimulScan to capture the form.

* **String SIMULSCAN_REGIONS_BUNDLE_TAG= "com.symbol.datawedge.simulscan_region_data"**; Return an array of Bundles where each bundle contains data and information about a region and the form.

* **String SIMULSCAN_REGION_NAME_TAG = "com.symbol.datawedge.simulscan_region_name"**; Returns the region name of the bundle object for reach region. Call `Bundle.getString()` to get the region name.

* **String SIMULSCAN_REGION_ID_TAG = "com.symbol.datawedge.simulscan_region_id"**; Returns the region ID of the bundle object for reach region. Region ID is an integer and is retrieved by calling `Bundle.getInt ()`.

* **String SIMULSCAN_REGION_STRING_DATA= "com.symbol.datawedge.simulscan_region_string_data"**; Returns the string data of the region. String data comes with barcode, OCR and OMR data.

* **String SIMULSCAN_REGION_BINARY_DATA= "com.symbol.datawedge.simulscan_region_binary_data"**;
Returns the data of the region in the form of byte array. Binary data comes only for picture regions and the form image. Both picture and form data are loaded in to a bitmap and display in the application.

* **String SIMULSCAN_REGION_TYPE_TAG = "com.symbol.datawedge.simulscan_region_type"**; Returns the region type of the bundle object for reach region. Region type is a string and is retrieved by calling `Bundle.getString ()`. 

* **String DATA_FILE_PATHS = "com.symbol.datawedge.simulscan_data_file_paths"**; Returns the file paths of the images if the simulscan_region_type is "picture". If **Images as Files** option is enabled, simulscan_data_file_paths key must be used to get the image data.

**Possible return values for the region type**:

* **Barcode -** Region is a barcode.
* **OCR -** Region is an Optical Character Recognition (OCR) region (i.e name or address). 
* **OMR -** Region is an Optical Mark Recognition (OMR) region (i.e checkbox, radio button).
* **Picture -** Region is a picture; data is in JPEG format.
* **Form -** Form type to specify that the bundle contains a picture of the captured form. Form image is in the JPEG format.
-->
**Important**: For some scanning applications, it might be preferable for decoded data to be sent directly to the current activity and not necessarily displayed. For such instances, **the activity must be designated as "singleTop" in its AndroidManifest.xml file**. Failure to designate an activity in this way will cause an instance of the activity to be launched on every decode, and the data sent to each newly spawned copy. 

For more information about Android Intents, please refer to the [Android Developer site](https://developer.android.com/guide/components/intents-filters.html).

------
## Configuration

Programmatically configure Simulscan and retrieve the configuration:
* [Set Config](../../api/setconfig/#simulscaninputparameters)
* [Get Config](../../api/getconfig/#getsimulscaninputconfiguration)

------

**Related guides**:

* [SimulScan User Guide](../../../../../simulscan) 
* [DataWedge Profiles](../../profiles)
* [DataWedge APIs](../../api) 

