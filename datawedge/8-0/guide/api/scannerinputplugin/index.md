---
title: Scanner Input Plug-in 
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## SCANNER_INPUT_PLUGIN

Used to enable/disable the scanner Plug-in being used by the currently active Profile. Disabling the scanner Plug-in effectively disables scanning in that Profile, regardless of whether the Profile is associated with an app. **This API changes only the runtime status of the scanner; it does not make persistent changes to the Profile**. 

> **Functional only when Barcode Input is enabled in the active Profile**. 

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SCANNER_INPUT_PLUGIN", "<parameter>");


### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.SCANNER_INPUT_PLUGIN"

**&lt;parameter**&gt;: The parameter as a string, using either of the following:

* `SUSPEND_PLUGIN` - suspends the scanner so it is temporarily inactive when switching from the WAITING or SCANNING state. [SCANNER_STATUS](../registerfornotification/#parameters) notification broadcasts IDLE state.
* `RESUME_PLUGIN` - resumes the scanner when changing from the SUSPEND_PLUGIN suspended state. [SCANNER_STATUS](../registerfornotification/#parameters) notification broadcasts WAITING and SCANNING states, rotating between each depending on whether scanning is taking place. In the WAITING state it is expecting an action from the user such as a trigger press. In the SCANNING state it is actively performing a scan resulting from an action such as a trigger press.
* `ENABLE_PLUGIN` - enables the plug-in; scanner becomes active. [SCANNER_STATUS](../registerfornotification/#parameters) notification broadcasts WAITING and SCANNING states, rotating between each depending on whether scanning is taking place.
* `DISABLE_PLUGIN` - disables the plug-in; scanner becomes inactive. [SCANNER_STATUS](../registerfornotification/#parameters) notification broadcasts DISABLED state.

**Using SUSPEND_PLUGIN/RESUME_PLUGIN:** This is useful when an app requires the scanner to be suspended or temporarily de-activated. When the scanner is activated (for example from a profile configuration or from RESUME_PLUGIN or ENABLE_PLUGIN intent API), [SCANNER_STATUS](../registerfornotification/#parameters) notification broadcasts the WAITING and SCANNING states, rotating between each depending on whether scanning is taking place. For the app to suspend scanning, act only when in the SCANNING and WAITING states - when these states are broadcasted, use SUSPEND_PLUGIN parameter to remain in the suspended state and keep the scanner unusable. Once scanning is suspended, SCANNER_STATUS broadcasts the IDLE state. Use RESUME_PLUGIN to re-activate the scanner.

**<u>Important</u>**: To avoid the unnecessary use of enable/disable scanner API calls, Zebra recommends that apps register to be notified of changes in scanner status using [GET_SCANNER_STATUS API](../getscannerstatus) or [SCANNER_STATUS](../registerfornotification/#parameters) from REGISTER_FOR_NOTIFICATION API. This enables apps to receive scanner status change notifications immediately rather than having to query and wait for the result - therefore the app is aware of the current status prior to making any status change. Status change notifications include the active Profile name, which permits an app to use the enable/disable scanner API calls only when status changes affect a relevant profile.  

### Result Codes

DataWedge returns the following error codes if the app includes the intent extras `SEND_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#example), below. 

* **SCANNER_ALREADY_SUSPENDED -** An intent was received to suspend the scanner which is already suspended.
* **PLUGIN_DISABLED -** The scanner plugin is disabled so the suspend/resume action cannot be executed.
* **SCANNER_ALREADY_RESUMED -** A resume intent is received but the scanner is not in a suspended state.
* **SCANNER_RESUME_FAILED -** The scanner resume is unsuccessful.
* **SCANNER_ALREADY_DISABLED -** The scanner is in a disabled state, preventing any further action.
* **DATAWEDGE_DISABLED -** The action to disable DataWedge is unsuccessful.
* **PARAMETER_INVALID -** An invalid parameter is received.
* **PROFILE_DISABLED -** The action to to disable profile is unsuccessful.
* **SCANNER_ALREADY_DISABLED -** An intent was received to disable the scanner which is already disabled.
* **SCANNER_ALREADY_ENABLED -** An intent was received to enable the scanner which is already enabled.
* **SCANNER_DISABLE_FAILED -** The scanner disable is unsuccessful.
* **SCANNER_ENABLE_FAILED -** The action to enable the scanner is unsuccessful.

Also see the [Result Codes guide](../resultinfo) for more information.  

### Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters. 


## Example Code

Send suspend and resume intents:

	private void suspendScanner() {
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.SCANNER_INPUT_PLUGIN", "SUSPEND_PLUGIN");
		i.putExtra("SEND_RESULT", "true");
		i.putExtra("COMMAND_IDENTIFIER", "MY_SUSPEND_SCANNER");  //Unique identifier
		this.sendBroadcast(i);
	}

	private void resumeScanner() {
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.SCANNER_INPUT_PLUGIN", "RESUME_PLUGIN");
		i.putExtra("SEND_RESULT", "true");
		i.putExtra("COMMAND_IDENTIFIER", "MY_RESUME_SCANNER");  //Unique identifier
		this.sendBroadcast(i);
	}


Enable/Disable Scanner Input Plugin:

	private void enableScanner() {
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.SCANNER_INPUT_PLUGIN", "ENABLE_PLUGIN");
		i.putExtra("SEND_RESULT", "true");
		i.putExtra("COMMAND_IDENTIFIER", "MY_ENABLE_SCANNER");  //Unique identifier
		this.sendBroadcast(i);
	}

	private void disableScanner() {
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.SCANNER_INPUT_PLUGIN", "DISABLE_PLUGIN");
		i.putExtra("SEND_RESULT", "true");
		i.putExtra("COMMAND_IDENTIFIER", "MY_DISABLE_SCANNER");  //Unique identifier
		this.sendBroadcast(i);
	}

### Generate and receive result codes
Command and configuration intent parameters determine whether to send result codes (disabled by default). When using `SEND_RESULT`, the `COMMAND_IDENTIFIER` is used to match the result code with the originating intent. Sample usage of these parameters is shown below. 

**Note: Modify this generic code to match the API being used**.  

Receive the suspend/resume command result:

	//call in onResume() method
	private void registerReceivers() {
		IntentFilter filter = new IntentFilter();
		filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
		filter.addCategory(Intent.CATEGORY_DEFAULT);
		registerReceiver(receiver, filter);
	}

	//call in onPause() method
	private void unRegisterReceivers() {
		unregisterReceiver(receiver);
	}

	BroadcastReceiver receiver = new BroadcastReceiver() {
		@Override
		public void onReceive(Context context, Intent intent) {
			//Get result of the suspend/resume API call
			String action = intent.getAction();
			if (action != null && action.equals("com.symbol.datawedge.api.RESULT_ACTION")) {
				Bundle extras = intent.getExtras();
				if (extras != null) {
					//user specified ID
					String cmdID = extras.getString("COMMAND_IDENTIFIER");
					if ("MY_RESUME_SCANNER".equals(cmdID) || "MY_SUSPEND_SCANNER".equals(cmdID)) {
						//success or failure
						String result = extras.getString("RESULT");
						//Original command
						String command = extras.getString("COMMAND");
						if ("FAILURE".equals(result)) {
							Bundle info = extras.getBundle("RESULT_INFO");
							String errorCode = "";
							
							if (info != null) {
								errorCode = info.getString("RESULT_CODE");
							}
							Log.d(TAG, " Command:" + command + ":" + cmdID + ":" + result + ",Code:" + errorCode);
						} 
						else {
							Log.d(TAG, " Command:" + command + ":" + cmdID + ":" + result);
						}
					}
				}
			}
		}
	};

Receive the Enable/Disable Plugin result:

	// send the intent
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	// Use "ENABLE_PLUGIN" or "DISABLE_PLUGIN"
	i.putExtra("com.symbol.datawedge.api.SCANNER_INPUT_PLUGIN", "ENABLE_PLUGIN");

	// request and identify the result code
	i.putExtra("SEND_RESULT","true");
	i.putExtra("COMMAND_IDENTIFIER","123456789");
	this.sendBroadcast(i);

	// register to receive the result
	public void onReceive(Context context, Intent intent){

		String command = intent.getStringExtra("COMMAND");
		String commandidentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
		String result = intent.getStringExtra("RESULT");

		Bundle bundle = new Bundle();
		String resultInfo = "";
		if(intent.hasExtra("RESULT_INFO")){
		    bundle = intent.getBundleExtra("RESULT_INFO");
		    Set<String> keys = bundle.keySet();
		    for (String key: keys) {
		        resultInfo += key + ": "+bundle.getString(key) + "\n";
		    }
		}

		String text = "Command: "+command+"\n" +
		                  "Result: " +result+"\n" +
		                  "Result Info: " +resultInfo + "\n" +
		                  "CID:"+commandidentifier;
		    
		Toast.makeText(context, text, Toast.LENGTH_LONG).show();

	};

-----

### Comments
This intent enables/disables the scanner plug-in for the currently enabled Profile. For example, let's say that activity A launches and uses the Data Capture API intent to switch to ProfileA in which the scanner plug-in is enabled, then at some point it uses the Data Capture API to disable the scanner plug-in. Activity B is launched. In DataWedge, ProfileB is associated with activity B. DataWedge switches to ProfileB. When activity A comes back to the foreground, in the `onResume` method, activity A must use the Data Capture API intent to switch back to ProfileA, then use the Data Capture API intent again to disable the scanner plug-in, to return back to the state it was in.

### Notes
* The scenario above assumes that ProfileA is not associated with any applications/activities, therefore when focus switches back to activity A, DataWedge will not automatically switch to ProfileA, and therefore activity A must switch back to ProfileA in its `onResume` method. Because DataWedge will automatically switch Profiles when an activity is paused, it is recommended that this API function be called from the `onResume` method of the activity.

* Zebra recommends using SUSPEND_PLUGIN and RESUME_PLUGIN in apps that require faster response to disable and enable barcode scanning across activities within the same app.

**This API changes only the runtime status of the scanner; it does not make persistent changes to the Profile**. 

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
