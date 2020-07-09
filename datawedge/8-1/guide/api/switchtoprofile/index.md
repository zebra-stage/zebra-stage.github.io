---
title: Switch to Profile 
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## SWITCH_TO_PROFILE

Used to switch the application's association to the specified Profile. **Specified Profile must not already be associated with another application**; an application cannot be associated with more than one Profile. 

**CAUTION**: Switching to a disabled Profile is prevented if the [GET_IGNORE_DISABLED_PROFILES API](../getignoredisabledprofiles) returns a value of "true."    

### Profiles Recap
DataWedge is based on Profiles and Plug-ins. A Profile contains information about how DataWedge will behave with a given application.

Profile information consists of:

* Associated application
* Input plug-in configurations
* Output plug-in configurations
* Process plug-in configurations

DataWedge includes a default Profile, Profile0, which is created automatically the first time DataWedge runs.

Using Profiles, each application can have a specific DataWedge configuration. For example, each user application can have a Profile that outputs scanned data in the required format when that application comes to the foreground. DataWedge can be configured to process the same set of captured data differently based on the requirements of each application.

### Note
A single Profile can be associated with one or more activities or apps. However, an activity can be associated with no more than one Profile. 

### Usage Scenario
Let’s say an application has two activities. ActivityA only requires EAN13 barcodes to be scanned. ActivityB only requires MSR card data. ProfileB is configured to only scan EAN13 barcodes and is left unassociated. ProfileM is configured to only accept MSR input and is left unassociated. When ActivityA launches it uses `SWITCH_TO_PROFILE` to activate ProfileB. Similarly, when ActivityB launches it uses `SWITCH_TO_PROFILE` to activate ProfileM.

If another activity/app comes to the foreground, DataWedge automatic Profile switching will set the DataWedge Profile accordingly, either to the default Profile or to an associated Profile.

When ActivityA (or ActivityB) returns to the foreground, it will use `SWITCH_TO_PROFILE` to return the Profile to ProfileB (or ProfileM).

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SWITCH_TO_PROFILE", "<profile name>");

### Parameters
**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.SWITCH_TO_PROFILE"

**&lt;profile name**&gt;: The Profile name (a case-sensitive string) to set as the active Profile.

### Result Codes

DataWedge returns the following error codes if the app includes the intent extras `SEND_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#example), below. 

* **PROFILE_HAS_APP_ASSOCIATION -** FAILURE
* **PROFILE_NOT_FOUND -** FAILURE 
* **PROFILE_ALREADY_SET -** FAILURE
* **PROFILE_NAME_EMPTY -** FAILURE
* **DATAWEDGE_DISABLED -** FAILURE

Also see the [Result Codes guide](../resultinfo) for more information.  

###Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).

## Example Code
	// define action and data strings
	String switchToProfile = "com.symbol.datawedge.api.ACTION";
	String extraData = "com.symbol.datawedge.api.SWITCH_TO_PROFILE";

	public void onResume() {
	        super.onResume();
	      
	        // create the intent
	        Intent i = new Intent();
	      
	        // set the action to perform
	        i.setAction(switchToProfile);
	      
	        // add additional info
	        i.putExtra(extraData, "myProfile");
	      
	        // send the intent to DataWedge
	        this.sendBroadcast(i);
	}

#### Generate and receive result codes
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
This API function will have no effect if the specified Profile does not exist or is already associated with an application.

DataWedge has a one-to-one relationship between Profiles and activities; a Profile can be associated only with a single activity. When a Profile is first created, it's not associated with any application, and will not be activated until associated. This makes it possible to create multiple unassociated Profiles.

This API function activates such Profiles.

For example, let's say that ProfileA is unassociated and ProfileB is associated with activity B. If activity A is launched and uses the `SWITCH_TO_PROFILE` function to switch to ProfileA, then ProfileA will be active whenever activity A is in the foreground. When activity B comes to the foreground, DataWedge will automatically switch to ProfileB. 

When activity A returns to the foreground, the app must use `SWITCH_TO_PROFILE` again to switch back to ProfileA. This would be done in the `onResume` method of activity A.

### Notes
* Because DataWedge will automatically switch Profile when the activity is paused, Zebra recommends that this API function be called from the onResume method of the activity.
* After switching to a Profile, this unassociated Profile does not get assigned to the application/activity and is available to be used in the future with a different app/activity.
* For backward compatibility, DataWedge’s automatic Profile switching is not affected by the above API commands. This is why the commands work only with unassociated Profiles and apps.

DataWedge auto Profile switching works as follows: 

**Every second…**
* Sets **newProfileId** to the associated Profile ID of the current foreground activity. 
* If no associated Profile is found, sets **newProfileId** to the associated Profile ID of the current foreground app. 
* If no associated Profile is found, sets **newProfileId** to the current default Profile (which  MAY NOT be Profile0). 
* Checks the **newProfileId** against the **currentProfileId**. If they are different: 
	* deactivates current Profile
	* activates new Profile (**newProfileId**)
	* sets **currentProfileId** = **newProfileId**

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
