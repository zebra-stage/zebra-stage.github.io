---
title: Soft RFID Trigger 
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## SOFT_RFID_TRIGGER 

Used to start, stop or toggle a software RFID trigger. 

> **Functional only when RFID Input is enabled in the active Profile**.

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SOFT_RFID_TRIGGER", "<parameter>");


### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.SOFT_RFID_TRIGGER"

**&lt;parameter&gt;**: The parameter as a string, using any of the following: 

* `START_SCANNING` - starts scanning when triggered
* `STOP_SCANNING` - stops or interrupts scanning when triggered
* `TOGGLE_SCANNING` - toggles between `START_SCANNING` and `STOP_SCANNING` when triggered

### Result Codes

DataWedge returns the following error codes if the app includes the intent extras `SEND_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#example), below. 

* **DATAWEDGE_DISABLED -** FAILURE
* **INPUT_NOT_ENABLED -** FAILURE
* **PARAMETER_INVALID -** FAILURE
* **PROFILE_DISABLED -** FAILURE 

Also see the [Result Codes guide](../resultinfo) for more information.  

## Example Code

	// define action and data strings 
	String softRfidTrigger = "com.symbol.datawedge.api.ACTION"; 
	String extraData = "com.symbol.datawedge.api.SOFT_RFID_TRIGGER"; 

	// create the intent 
	Intent i = new Intent(); 

	// set the action to perform 
	i.setAction(softRfidTrigger); 

	// add additional info 
	i.putExtra(extraData, "START_SCANNING"); 

	// send the intent to DataWedge 
	this.sendBroadcast(i); 


-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
