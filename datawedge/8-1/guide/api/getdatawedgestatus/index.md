---
title: Get DataWedge Status 
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## GET_DATAWEDGE_STATUS 

Introduced in DataWedge 6.4.

Returns the status of DataWedge as "enabled" or "disabled" as a string extra.

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_DATAWEDGE_STATUS", "");

### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.GET_DATAWEDGE_STATUS"

**EXTRA VALUE**: Empty string
 

### Return Values
Returns the status of DataWedge as "enabled" or "disabled" as a string extra.

**EXTRA NAME**: "com.symbol.datawedge.api.RESULT_GET_DATAWEDGE_STATUS" 

**EXTRA TYPE**: Bundle

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

## Example Code

	//SENDING THE INTENT
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_DATAWEDGE_STATUS", "");
	this.sendBroadcast(i);

	//RECEIVING THE RESULT
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	intent.getStringExtra("com.symbol.datawedge.api.RESULT_GET_DATAWEDGE_STATUS");
	this.sendBroadcast(i);

<!--  suggested by Darryn instead of recieving section above. 
String EXTRA_RESULT_GET_DATAWEDGE_STATUS = "com.symbol.datawedge.api.RESULT_GET_DATAWEDGE_STATUS"; 
String datawedgeStatus = intent.getStringExtra(EXTRA_RESULT_GET_DATAWEDGE_STATUS);
-->

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
