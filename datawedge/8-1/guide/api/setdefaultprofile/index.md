---
title: Set Default Profile 
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## SET_DEFAULT_PROFILE

Used to set the specified Profile as the default Profile. **Specified Profile must not already be associated with another application**. A Profile can be associated with many applications, but an application cannot be associated with more than one Profile. 

### About Default Profile
**Profile0** is a generic Profile that automatically takes effect for any app that comes to the foreground that has not been associated with DataWedge. 

All parameters of Profile0 can be edited except its association. That is, DataWedge allows manipulation of input, processing and output settings for Profile0, but it does not allow assignment of any one foreground application. This allows DataWedge to direct output to any unassociated app that comes to the foreground.

Profile0 can be disabled to allow DataWedge to send output data only to those applications that are associated in user-defined Profiles. For example, create a Profile associating a specific application, disable Profile0 and then scan. DataWedge only sends data to the application specified in the user-created Profile. This places an additional layer of security on DataWedge, permitting data to be sent only to specified applications. 

### Usage Scenario
If a launcher application has a list of apps that a user can launch and none has been associated with a DataWedge Profile, the `setDefaultProfile` method can be used to associate a Profile to any app selected by the user (otherwise Profile0 are used). When the user-selected app is launched, DataWedge auto-Profile switching will switch to the newly specified Profile. 

If the launched app already has an associated DataWedge Profile, the `setDefaultProfile` method call is ignored and its previously specified Profile is loaded. When control is returned to the Launcher application, `resetDefaultProfile` can be used to reset the default Profile.

### Function Prototype

	:::javascript
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SET_DEFAULT_PROFILE", "<profile name>");


### Parameters
**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.SET_DEFAULT_PROFILE"

**&lt;profile name**&gt;: The Profile name (a case-sensitive string) to set as the default Profile.

### Result Codes

DataWedge returns the following error codes if the app includes the intent extras `SEND_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#example), below. 

* **PROFILE_ALREADY_SET -** FAILURE
* **PROFILE_NOT_FOUND -** FAILURE 
* **PROFILE_HAS_APP_ASSOCIATION -** FAILURE
* **PROFILE_NAME_EMPTY -** FAILURE

Also see the [Result Codes guide](../resultinfo) for more information.  

### Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).

## Example Code

	:::javascript
	// define action and data strings
	String setDefaultProfile = "com.symbol.datawedge.api.ACTION";
	String extraData = "com.symbol.datawedge.api.SET_DEFAULT_PROFILE";

	public void onResume() {
	        // create the intent
	        Intent i = new Intent();

	        // set the action to perform
	        i.setAction(setDefaultProfile);
	        
	        // add additional info (a name)
	        i.putExtra(extraData, "myProfile");
	        
	        // send the intent to DataWedge
	        this.sendBroadcast(i);
	}

### Generate and receive result codes
Command and configuration intent parameters determine whether to send result codes (disabled by default). When using `SEND_RESULT`, the `COMMAND_IDENTIFIER` is used to match the result code with the originating intent. Sample usage of these parameters is shown below. 

**Note: Modify this generic code to match the API being used**.  

	// send the intent
		Intent i = new Intent();
		i.setAction(ACTION);
		i.putExtra("com.symbol.datawedge.api.CREATE_PROFILE", "Profile1");

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
The API command will have no effect if the specified Profile does not exist or if the specified Profile is already associated with an application. DataWedge will automatically switch Profiles when the activity is paused, so it is recommended that this API function be called from the onResume method of the activity.

Zebra recommends that this Profile be created to cater to all applications/activities that would otherwise default to Profile0. This will ensure that these applications/activities will not inadvertently switch scanner-device configurations. For example, let’s say that Profile0 is the default Profile, and it is configured to use the camera as the barcode scanner. If only the Browser application is used to scan barcodes with the camera, DataWedge always scans with the camera and enters the acquired data into the Browser as expected. But if an application is later launched that changes to a Profile using the blockbuster as the barcode scanner, the Browser application--which is set to use the default Profile--are unexpectedly reconfigured to use the blockbuster for scanning the next time it's used. **To ensure that the Browser continues to use the camera as the barcode scanner in this scenario, simply create a Profile that specifies the camera as the barcode scanner and associate it with the Browser**.

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
