---
title: Set Ignore Disabled Profiles 
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## SET_IGNORE_DISABLED_PROFILES 

Introduced in DataWedge 6.8. 

Prevents DataWedge from switching to a Profile that is disabled; including Profile0. Applies to Profile switches initiated manually through the DataWedge settings panel and programmatically using the [SWITCH_TO_PROFILE API](../switchtoprofile). 

The settings controlled by this API can help address timing issues that sometimes arise in Android devices when intents are used to switch Profiles. 

<!-- 
For example, if an application sends a "SWITCH_TO_PROFILE" intent early in an app's activity life cycle but DataWedge detects the activity change later and cause another Profile switch which could load a different Profile to what application already switched. 

Enabling this setting and disabling the Profile which would load when the application comes to foreground in regular Profile switch, would help to avoid such situations. Alternative solutions to alleviate such timing issues are one of the following: 1. Check if the activity is in the foreground prior to switching Profiles, 2. Register for notifications to determine whether the appropriate Profile switch took place.


This API prevents that switch and continues to use the current Profile.
-->
### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SET_IGNORE_DISABLED_PROFILES", "true");


### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.SET_IGNORE_DISABLED_PROFILES"

**POSSIBLE VALUES**: [String]: ["true" , "false" ]
 

### Return Values
Returns a String of the name of the active DataWedge Profile

**EXTRA NAME**: "com.symbol.datawedge.api.SET_IGNORE_DISABLED_PROFILES" 

**EXTRA TYPE** [String]: [ ]

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

## Example Code

	//Sample code for sending the intent to SET the setting
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.SET_IGNORE_DISABLED_PROFILES","true");

	// request and identify the result code
		i.putExtra("SEND_RESULT","true");
		i.putExtra("COMMAND_IDENTIFIER","123456789");//user specified unique id

		this.sendBroadcast(i);

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
			//receiving the results
				BroadcastReceiver mybroadcastReceiver = new BroadcastReceiver() {
				    @Override
			    	public void onReceive(Context context, Intent intent) {
			        	String command = intent.getStringExtra("COMMAND");
			        	String commandIdentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
			        	String result = intent.getStringExtra("RESULT");

	        Bundle bundle;
	        String resultInfo = "";
	        if(intent.hasExtra("RESULT_INFO")){
	            bundle = intent.getBundleExtra("RESULT_INFO");
	            Set<String> keys = bundle.keySet();
	            for (String key: keys) {
	                Object object = bundle.get(key);
	                if(object instanceof String){
	                    resultInfo += key + ": "+object+ "\n";
	                }
	                else if(object instanceof String[]){
	                    String[] codes = (String[])object;
	                    for(String code : codes){
	                        resultInfo += key + ": "+code+ "\n";
                    	}
                	}
            	}
        	}

        	String text = "Command: "+command+"\n" +
                "Result: " +result+"\n" +
                "Result Info: " +resultInfo + "\n" +
                "CID:"+commandIdentifier;

       		Log.d(TAG,text);

    	}
	};


------

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
