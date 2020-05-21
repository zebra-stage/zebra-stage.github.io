---
title: Get Active Profile 
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## GET_ACTIVE_PROFILE 

Gets the name of the Profile currently in use by DataWedge.

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_ACTIVE_PROFILE", "");


### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.GET_ACTIVE_PROFILE"

**EXTRA VALUE**: Empty string
 

### Return Values
Returns a String of the name of the active DataWedge Profile

**EXTRA NAME**: "com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE" 

**EXTRA TYPE** [String]: [ ]

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

## Example Code

	//Sending the intent
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.GET_ACTIVE_PROFILE", "");
		this.sendBroadcast(i);

	//Receiving the result
		private BroadcastReceiver myBroadcastReceiver = new BroadcastReceiver() {

			@Override
			public void onReceive(Context context, Intent intent) {

				Bundle extras = getIntent().getExtras();
				if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE")) {
					String activeProfile = extras.getString("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE");
				}
			}
		}


	// Register/unregister broadcast receiver and filter results

		void registerReceivers() {
		    IntentFilter filter = new IntentFilter();
		    filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
		    filter.addCategory("android.intent.category.DEFAULT");
		    registerReceiver(mybroadcastReceiver, filter);
		}

		void unRegisterReceivers(){
		    unregisterReceiver(mybroadcastReceiver);
		}		

------

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
