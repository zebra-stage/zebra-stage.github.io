---
title: Register/Unregister for Notification 
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## REGISTER_FOR_NOTIFICATION

Introduced in DataWedge 6.4. 

Enable apps to register or unregister to receive notifications for status changes related to configuration, scanner, and profile switching. These status changes can result from DataWedge API calls (such as [IMPORT_CONFIG](../importconfig), [SWITCH_TO_PROFILE](../switchtoprofile), and [SCANNER_INPUT_PLUGIN](../scannerinputplugin)) or DataWedge profile changes (such as profile [Auto Import](../../settings/#autoimport)).


<!--
Used to register/unregister an app to receive a notification when the status of a DataWedge parameter changes by means of an intent. **This function does not monitor changes made using the device UI**. -->

### Function Prototype

	Bundle b = new Bundle();
		b.putString("com.symbol.datawedge.api.APPLICATION_NAME","com.example.MyApp");
		b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE","PROFILE_SWITCH");
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.REGISTER_FOR_NOTIFICATION", b);
		this.sendBroadcast(i);

### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.REGISTER_FOR_NOTIFICATION"

**BUNDLE**: 

* `APPLICATION_NAME` - Package name of the app to register 
* `NOTIFICATION_TYPE` - Supported types:
 * `CONFIGURATION_UPDATE`
 * `PROFILE_SWITCH` 
 * `SCANNER_STATUS` 

### Return Values
Returns a bundle with status of the requested DataWedge `NOTIFICATION_TYPE`

**EXTRA NAME**: "com.symbol.datawedge.api.NOTIFICATION"

**BUNDLE**:

* `CONFIGURATION_UPDATE` [String]: 
 * "PROFILE_IMPORTED" "FULL_DB_IMPORTED" 
 * "PROFILE_NAME": "&lt;Application package name&gt;"

* `PROFILE_SWITCH`: 
 * "PROFILE_IMPORTED" "FULL_DB_IMPORTED" 
 * "PROFILE_NAME": "&lt;name of Profile now in use&gt;"

* `SCANNER_STATUS`: 
 * **WAITING** – Scanner is enabled and ready to scan using a physical trigger or SOFT_SCAN_TRIGGER intent. 
 * **SCANNING** - Scanner has emitted the scan beam and scanning is in progress. This event does not prevent the application from disabling other controls as necessary. 
 * **CONNECTED** – A Bluetooth scanner has connected with the device and can now be enabled (or disabled) by the application. Scanner selection should be set to Auto in the currently active profile. 
 
 * **DISCONNECTED** – A Bluetooth scanner has disconnected from the device. Sending an intent to enable or disable the scanner in this state will enable/disable the current default scanner. 
 * **IDLE** - Scanner is in one of the following states: enabled but not yet in the waiting state, in the suspended state by an intent (e.g. [SUSPEND_PLUGIN](../scannerinputplugin)) or disabled due to the hardware trigger. 
 * **DISABLED** – Scanner is disabled. This is broadcasted by the scanner plug-in when the active profile becomes disabled manually or the scanner is disabled with an intent (e.g. [DISABLE_PLUGIN](../scannerinputplugin)). 

> **Scanner status notifications are sent <u>only if the scanner in the active Profile is enabled</u>**. 

**Note**: The `PROFILE_NAME` (of the currently active profile) is returned with `SCANNER_STATUS` to allow the developer to filter scanner events for the required Profile only. 

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

## Example Code

	// TO REGISTER AN APP TO RECIEVE NOTIFICATIONS

	// Register for notifications - PROFILE_SWITCH

		Bundle b = new Bundle();
		b.putString("com.symbol.datawedge.api.APPLICATION_NAME","com.example.intenttest");
		b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE","PROFILE_SWITCH");
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.REGISTER_FOR_NOTIFICATION", b); // (1)
		this.sendBroadcast(i);

	// To unregister, change only the iPutExtra command

		Bundle b = new Bundle();
		b.putString("com.symbol.datawedge.api.APPLICATION_NAME","com.example.intenttest");
		b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE","PROFILE_SWITCH");
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.UNREGISTER_FOR_NOTIFICATION", b);
		this.sendBroadcast(i);


	// Register for notifications - SCANNER_STATUS

		Bundle b = new Bundle();
		b.putString("com.symbol.datawedge.api.APPLICATION_NAME","com.example.intenttest");
		b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE", "SCANNER_STATUS");
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.REGISTER_FOR_NOTIFICATION", b);//(1)
		this.sendBroadcast(i);

	// To unregister, change only the iPutExtra command

		Bundle b = new Bundle();
		b.putString("com.symbol.datawedge.api.APPLICATION_NAME","com.example.intenttest");
		b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE", "SCANNER_STATUS");
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.UNREGISTER_FOR_NOTIFICATION", b);
		this.sendBroadcast(i);


	// TO RECIEVE NOTIFICATIONS

		public static final String NOTIFICATION_ACTION  = "com.symbol.datawedge.api.NOTIFICATION_ACTION";
		public static final String NOTIFICATION_TYPE_SCANNER_STATUS = "SCANNER_STATUS";
		public static final String NOTIFICATION_TYPE_PROFILE_SWITCH = "PROFILE_SWITCH";
		public static final String NOTIFICATION_TYPE_CONFIGURATION_UPDATE = "CONFIGURATION_UPDATE";

		private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
		    @Override
		    public void onReceive(Context context, Intent intent) {
		        String action = intent.getAction();
		        Log.d(TAG, "#DataWedge-APP# Action: " + action);

		        if(action.equals(NOTIFICATION_ACTION)){

		            if(intent.hasExtra("com.symbol.datawedge.api.NOTIFICATION")) {
		                Bundle b = intent.getBundleExtra("com.symbol.datawedge.api.NOTIFICATION");
		                String NOTIFICATION_TYPE  = b.getString("NOTIFICATION_TYPE");
		                if(NOTIFICATION_TYPE!= null) {
		                    switch (NOTIFICATION_TYPE) {
		                        case NOTIFICATION_TYPE_SCANNER_STATUS:
		Log.d(TAG, "SCANNER_STATUS: status: " + b.getString("STATUS") + ", profileName: " + b.getString("PROFILE_NAME"));
		                            break;

		                        case NOTIFICATION_TYPE_PROFILE_SWITCH:
		Log.d(TAG, "PROFILE_SWITCH: profileName: " + b.getString("PROFILE_NAME") + ", profileEnabled: " + b.getBoolean("PROFILE_ENABLED"));
		                            break;

		                        case NOTIFICATION_TYPE_CONFIGURATION_UPDATE:
		                            break;
		                    }
		                }
		            }
		        }
		    }
		};

		void registerReceivers() {
		//to register the broadcast receiver
		    IntentFilter filter = new IntentFilter();
		    filter.addAction(NOTIFICATION_ACTION);
		    registerReceiver(broadcastReceiver, filter);//Android method
		}
		void unRegisterReceivers() {
		//to unregister the broadcast receiver
		    unregisterReceiver(broadcastReceiver); //Android method
		}

### Comments
(none)

------

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
