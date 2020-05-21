---
title: Set Reporting Options 
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## SET_REPORTING_OPTIONS

Introduced in DataWedge 6.6.

Used to configure reporting options, which are optionally generated after importing databases and Profiles. More [about import Reporting](../../settings/#reporting).

### Function Prototype

	:::java
	Intent i = new Intent();
	i.setAction(ACTION);
	i.putExtra("com.symbol.datawedge.api.SET_REPORTING_OPTIONS", bReporting);

### Parameters

**ACTION** [String]: `com.symbol.datawedge.api.ACTION`

**EXTRA_DATA** [bundle]: `com.symbol.datawedge.api.SET_REPORTING_OPTIONS`

**Reporting Options Bundle**:
* **reporting_enabled -** controls whether to enable reports, generated following import operations. 
 * true
 * false (default)
* **reporting_generate_option -** controls whether reporting is generated for manual imports, auto imports, or both.
 * manual
 * auto
 * both (default)
* **reporting_show_for_manual_import -** controls whether to displays a generated report (for manual imports only) using the default browser on the device. 
 * true
 * false (default)

### Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

### Result Codes
 
DataWedge returns the following error codes if the app includes the intent extras `SEND_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example Code](#example), below.

* **BUNDLE_EMPTY -** FAILURE
* **FAILURE –** FAILURE
* **SUCCESS -** SUCCESS

Also see the [Result Codes guide](../resultinfo) for more information. 

## Example Code

### Enable Reporting

The code below enables reporting on the device, enables reports for manual and automatic imports, and enables manual-import reports to be displayed: 

	:::java
	private BroadcastReceiver resultsReceiver = new BroadcastReceiver() {
	    @Override
	    public void onReceive(Context context, Intent intent) {
	        String command = intent.getStringExtra("COMMAND").equals("") ? "EMPTY" : intent.getStringExtra("COMMAND");
	        String commandIdentifier = intent.getStringExtra("COMMAND_IDENTIFIER").equals("") ? "EMPTY" : intent.getStringExtra("COMMAND_IDENTIFIER");
	        String result = intent.getStringExtra("RESULT").equals("") ? "EMPTY" : intent.getStringExtra("RESULT");

	        Bundle bundle;
	        String resultInfo = "";
	        if (intent.hasExtra("RESULT_INFO")) {
	            bundle = intent.getBundleExtra("RESULT_INFO");
	            Set<String> keys = bundle.keySet();
	            for (String key : keys) {
	                resultInfo += key + ": " + bundle.getString(key) + "\n";
	            }
	        }
	        String text ="\n" + "Command:      " + command + "\n" +
	                "Result:       " + result + "\n" +
	                "Result Info:  " + resultInfo + "\n" +
	                "CID:          " + commandIdentifier;
	        Log.d("TAG",text);
	    }
	};

	public void setReportingOptions() {
	    Intent i = new Intent();
	    i.setAction("com.symbol.datawedge.api.ACTION");
	    Bundle bReporting = new Bundle();
	    bReporting.putString("reporting_enabled", "true"); //true, false
	    bReporting.putString("reporting_generate_option", "manual"); //manual, auto, both
	    bReporting.putString("reporting_show_for_manual_import", "false"); //true, false

	    i.putExtra("com.symbol.datawedge.api.SET_REPORTING_OPTIONS", bReporting);
	    i.putExtra("SEND_RESULT","true");
	    i.putExtra("COMMAND_IDENTIFIER", "123456789");
	    this.sendBroadcast(i);
	}
	 
	private void registerReceivers() {
	    IntentFilter filter = new IntentFilter();
	    filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
	    filter.addCategory("android.intent.category.DEFAULT");
	    registerReceiver(resultsReceiver, filter);
	}


<!-- PRIOR EXAMPLE GIVEN BY ENGINEERING (replaced by above 12/15/17)
	:::java
	Intent i = new Intent();
	i.setAction(ACTION);

	Bundle bReporting = new Bundle();
	bReporting.putString("reporting_enabled", "false"); //true, false
	bReporting.putString("reporting_generate_option", "both"); //manual, auto, both
	bReporting.putString("reporting_show_for_manual_import", "true"); //true, false

	i.putExtra("com.symbol.datawedge.api.SET_REPORTING_OPTIONS", bReporting);
	i.putExtra(ACTION_EXTRA_SEND_RESULT,"true");
	i.putExtra("COMMAND_IDENTIFIER", "123456789");
	this.sendBroadcast(i);

 -->



-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
