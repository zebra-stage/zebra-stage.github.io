---
title: Get Disabled App List
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## GET_DISABLED_APP_LIST

Introduced in DataWedge 6.5. 

Returns the Disabled Apps List, a list of apps and activities that are blocked from using DataWedge.

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_DISABLED_APP_LIST", "");

### Parameters
**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.GET_DISABLED_APP_LIST"

###Return Values

**APP_LIST [ ]**:

* **APP_LIST [0]**:
 * **PACKAGE_NAME [String]**: "com.symbol.emdk.barcodesample1"
 * **ACTIVITY_LIST [String array]**: [“com.symbol.emdk.barcodesample1.MainActivity” ,”com.symbol.emdk.barcodesample1.ResultsActivity”]

* **APP_LIST [1]**:
 * **PACKAGE_NAME** [String]: "com.symbol.emdk.notificationsample1"
 * **ACTIVITY_LIST [String array]**: [“*”]

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).

-----

## Example Code

The code below sends an intent to request the current Disabled App List: 

	:::javascript
	// create the intent and action
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.GET_DISABLED_APP_LIST","");

	// send the intent
		this.sendBroadcast(i);

	// process the results inside onReceive callback
		ArrayList<Bundle> disabledAppList  = new ArrayList<>();
		if(intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_DISABLED_APP_LIST"))
		    disabledAppList = intent.getParcelableArrayListExtra("com.symbol.datawedge.api.RESULT_GET_DISABLED_APP_LIST");

		if(disabledAppList!= null && disabledAppList.size() > 0){
		    for (Bundle bundle:disabledAppList) {
		        String packageName = bundle.getString("PACKAGE_NAME");

		        ArrayList<String> activityList = new ArrayList<>();
		        activityList =bundle.getStringArrayList("ACTIVITY_LIST");

		        Log.d("TAG","PackageName: " + packageName);
		        for(String activityName : activityList){
		            Log.d("TAG","\t\t\tActivity: " + activityName);
		        }
		    }
		}
		else{
		    Log.d("TAG","Disabled app list is empty");
			}


### Notes
(none)

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
