---
title: Switch Scanner Params
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## SWITCH_SCANNER_PARAMS

Introduced in DataWedge 6.5. 

Used to pass one or more [barcode, scanner and/or reader parameters](../../input/barcode/#decoderselection) as intent extras, **<u>temporarily</u>** updating the settings of the active Profile. This API can be used to change scanner settings in response to changing conditions at any time. For example, a developer might wish to enable scanner illumination whenever a low-light condition is detected. 

> **Note**: Settings configured by this API are discarded with the next Profile switch.

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SWITCH_SCANNER_PARAMS", <bundle>);

### Parameters
**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.SWITCH_SCANNER_PARAMS"

**EXTRA_DATA** [bundle]: "&lt;name, value&gt;" - Accepts scanner parameters as name-value pairs

### Result Codes

DataWedge returns the following error codes if the app includes the intent extras `SEND_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#example), below. 

* **DATAWEDGE_DISABLED -** DataWedge is disabled
* **PROFILE_DISABLED -** Profile is disabled
* **PLUGIN_DISABLED -** Scanner plug-in is disabled
* **SCANNER_DISABLED -** Scanner is disabled
* **PARAMETER_INVALID -** Given scanner parameter is invalid
* **PARAMETER_NOT_SUPPORTED -** Given scanner parameter is not supported
* **VALUE_INVALID -** Given value for a scanner parameter is invalid
* **VALUE_NOT_SUPPORTED -** Given value for a scanner parameter is not supported

Also see the [Result Codes guide](../resultinfo) for more information.  

### Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, missing parameters or other failures.

-----

## Example Code

The code below passes an intent that switches a scanner parameter for the active scanner in the active profile. To verify results of the switch (or if errors are expected), include the intent extras `SEND_RESULT` and `COMMAND_IDENTIFIER` to get results (also shown).

		:::javascript
	// create the intent and action
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");

		Bundle bScannerParams = new Bundle();
		bScannerParams.putString("illumination_mode", "off");
		bScannerParams.putString("decode_audio_feedback_uri", "Pollux");

		i.putExtra("com.symbol.datawedge.api.SWITCH_SCANNER_PARAMS", bScannerParams);

	// generate result codes
		i.putExtra(“SEND_RESULT”,"true");
		i.putExtra("COMMAND_IDENTIFIER", "123456789"); //returned as it is with the result

	// send the intent
		this.sendBroadcast(i);

	// register the broadcast receiver (for result codes)
		:::javascript
		String command = intent.getStringExtra("COMMAND");
		String commandidentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
		String result = intent.getStringExtra("RESULT");

		Bundle bundle = new Bundle();
		String resultInfo = "";

		if (intent.hasExtra("RESULT_INFO")) {
			bundle = intent.getBundleExtra("RESULT_INFO");
			Set<String> keys = bundle.keySet();
			    for (String key : keys) {
			        if(key.equalsIgnoreCase("RESULT_CODE")){
			            resultInfo += key + ": " + Arrays.toString(bundle.getStringArray(key));
			        }else {
			            resultInfo += key + ": " + bundle.getString(key) + "\n";
		        }
		    }
		}

### Notes

**Pre-conditions and assumptions**:

* DataWedge and the respective Profile must be enabled
* Barcode scanning should be enabled in the active Profile
* If Intent contains an invalid or unsupported scanner parameter or value, result code(s) will be sent

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
