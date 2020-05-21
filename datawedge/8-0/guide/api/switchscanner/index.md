---
title: Switch Scanner 
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## SWITCH_SCANNER

Introduced in DataWedge 6.5. 

Used to switch to a specific scanner at runtime, enabling selection of the optimal scanning device for the application, requirement or situation when an app is launched. **Scanner must be available to the device at runtime**. 

The `SWITCH_SCANNER_EX` extra (added in DataWedge 6.6) allow scanners to be selected by a friendly name as defined in the [scanner identifier table](#scanneridentifiers).  

### Function Prototypes

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SWITCH_SCANNER", "<scanner index>");


	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SWITCH_SCANNER_EX","<SCANNER_IDENTIFIER>");
	this.sendBroadcast(i);

### Parameters
**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.SWITCH_SCANNER"

**EXTRA_DATA** [String]: "&lt;scanner index&gt;" -  index number of the scanner to use in the active Profile

**Use [ENUMERATE_SCANNERS](../enumeratescanners) to retrieve an index of scanners**. 

### Scanner Identifiers
The scanner identifier permits scanners to be identified by a friendly name rather than an index number. 

**SCANNER_IDENTIFIER** [String]: in each scanner info bundle for each scanner supported in the device. Both parameters are supported in DataWedge 6.5 and higher; the scanner identifier value takes precedence if an index also is referenced in the code.  

**Possible values**:

* **AUTO** - Automatic scanner selection
* **INTERNAL_IMAGER** - Built-in imager scanner
* **INTERNAL_LASER** - Built-in laser scanner
* **INTERNAL_CAMERA** - Built-in camera scanner
* **SERIAL_SSI** - Pluggable Z-back scanner for ET50/ET55 
* **BLUETOOTH_SSI** - RS507 Bluetooth scanner
* **BLUETOOTH_RS6000** - RS6000 Bluetooth scanner
* **BLUETOOTH_DS3678** - DS3678 Bluetooth scanner
* **PLUGABLE_SSI** - Serial SSI scanner RS429 (for use with WT6000)
* **PLUGABLE_SSI_RS5000** - Serial SSI scanner RS5000 (for use with WT6000)
* **USB_SSI_DS3608** - DS3608 pluggable USB scanner


### Result Codes

DataWedge returns the following error codes if the app includes the intent extras `SEND_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#examplecode), below. 

* **DATAWEDGE_DISABLED -** DataWedge is disabled
* **NO_ACTIVE_PROFILE -** No Profile is active
* **PARAMETER_INVALID -** Given scanner parameter is invalid
* **PLUGIN_DISABLED -** Scanner plug-in is disabled
* **PROFILE_DISABLED -** Profile is disabled
* **SCANNER_ALREADY_ENABLED -** Scanner is disabled
* **SCANNER_DISABLE_FAILED -** Scanner is disabled
* **SCANNER_NOT_CONNECTED -** Scanner is not connected

Also see the [Result Codes guide](../resultinfo) for more information.  

### Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, missing parameters or other failures.

-----

## Example Code
The code below shows how to pass an intent to change to scanner "3" from the current scanner. To verify results of the switch (or if errors are expected), include the intent extras `SEND_RESULT` and `COMMAND_IDENTIFIER` to get results.

	:::javascript
	String scannerIndex = “3”;

	// create the intent and action
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.SWITCH_SCANNER", scannerIndex);

	// generate result codes
		i.putExtra("SEND_RESULT","true");
		i.putExtra("COMMAND_IDENTIFIER","123456789");
		     
	// send the intent
		this.sendBroadcast(i); 

### Notes
(none)

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
