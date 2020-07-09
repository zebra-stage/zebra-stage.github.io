---
title: Set Disabled App List
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## SET_DISABLED_APP_LIST

Introduced in DataWedge 6.5. 

Used to add, remove or update an item on the Disabled App List, the list of apps and activities that are blocked from using DataWedge. Contains [nested bundles](../overview/#nestedbundles). This API also can be used by an app to prevent the app itself from using DataWedge. 

If an app is listed in the Disabled App List and that same app is an [Associated App](../gettingstarted) in a profile being imported - the import does not take into effect and the app remains on the Disabled App List.

### Function Prototype

	:::javascript
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SET_DISABLED_APP_LIST", "<bundle>");

### Parameters
**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [Bundle]: "com.symbol.datawedge.api.SET_DISABLED_APP_LIST"

#### MAIN BUNDLE

The main bundle `DISABLED_APP_LIST` contains the following properties:

**CONFIG_MODE** [String]:
* **UPDATE**: Adds the specified packages and/or activities to the existing list 
* **REMOVE**: Removes the specified packages and/or activities from existing list
* **OVERWRITE**: Replaces the existing list with the specified list. **Erases existing list if no apps are specified**.

**APP_LIST** [Bundle array]: 
* **APP_LIST [0]**:
 * **PACKAGE_NAME** [String]: Package name of the app. Required field; wildcard ("&#42;") not supported. 
 * **ACTIVITY_LIST** [Array of strings]: Leave blank or use wildcard ("&#42;") to indicate whole package.  

-----

## Main Bundle

**APP_LIST [0]**:
* **PACKAGE_NAME** ["com.symbol.emdk.notificationsample1"]
* **ACTIVITY_LIST** [“com.symbol.emdk.barcodesample1.MainActivity” ,”com.symbol.emdk.barcodesample1.ResultsActivity”] 

For the scenario above...

* **In UPDATE mode**, if the specified package name already exists in the Disabled Apps List, DataWedge adds the specified activities to those previously specified for the package. If not, it adds the package and the specified activities.

* **In REMOVE mode**, if the specified package name exists in the Disabled Apps List, DataWedge removes it. It otherwise returns an `INVALID_PARAMETER` error.

-----

**APP_LIST [1]**:
* **PACKAGE_NAME** [String]: "com.symbol.emdk.notificationsample1"
* **ACTIVITY_LIST** [“*”]

For the scenario above...

* **In UPDATE mode**, DataWedge is disabled for all activities of the specified package.
* **In REMOVE mode**, DataWedge removes the specified package from the disabled list and ignores the wildcard character, which is not considered as a substring of the package name or activity name. To remove one or more individual activities, specify the whole package name and the activities for removal.

-----

**APP_LIST [2]**:
* **PACKAGE_NAME**: "com.symbol.emdk.notificationsample1"

For the scenario above...

* **In UPDATE mode**, DataWedge is disabled for all the activities of the specified package.
* **In REMOVE mode**, DataWedge removes the specified package from the disabled list (enabling the app to use DataWedge). 

**Important**: The APP_LIST bundle extra is **required** only when using UPDATE and REMOVE configuration modes. <u>If APP_LIST is left blank when using OVERWRITE mode, the existing Disabled App List is deleted</u>.

-----

### Result Codes

DataWedge returns the following error codes if the app includes the intent extras `SEND_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#example), below. 

* **PARAMETER_INVALID -** CONFIG_MODE not defined or has invalid string value. Also returned 
if mode is set to UPDATE or REMOVE and APP_LIST is not provided.
* **INVALID PACKAGE OR ACTIVITY -** Package or activity name contains invalid characters
* **APP_ALREADY_IN_DISABLED_LIST -** package or activity already in Disabled App List
* **APP_ALREADY_ASSOCIATED -** Activity is associated with an app
* **APP_NOT_IN_DISABLED_LIST -** Package or activity not in disabled app list

Also see the [Result Codes guide](../resultinfo) for more information.  

### Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).

-----

### Example

The code below sends an intent to add apps to the Disabled Apps List in DataWedge. To verify results of the switch (or if errors are expected), include the intent extras `SEND_RESULT` and `COMMAND_IDENTIFIER` to get results (also shown).

	:::javascript
	Bundle bMain = new Bundle();

	bMain.putString("CONFIG_MODE ","UPDATE");

	Bundle bundleApp1 = new Bundle();
	bundleApp1.putString("PACKAGE_NAME","com.android.calculator2");
	bundleApp1.putStringArray("ACTIVITY_LIST", new String[]{
	        "com.android.calculator2.Calculator",
	        "com.android.calculator2.Licenses"});

	Bundle bundleApp2 = new Bundle();
	bundleApp2.putString("PACKAGE_NAME","com.android.phone");
	bundleApp2.putStringArray("ACTIVITY_LIST", new String[]{
	        "com.android.phone.EmargencyDialer",
	        "com.android.phone.ADNList",

	        "com.android.phone.Settings"});

	Bundle bundleApp3 = new Bundle();
	bundleApp3.putString("PACKAGE_NAME","com.android.email");
	bundleApp3.putStringArray("ACTIVITY_LIST", new String[]{"*"});

	Bundle bundleApp4 = new Bundle();
	bundleApp4.putString("PACKAGE_NAME","com.symbol.myzebraapp");


	bMain.putParcelableArray("APP_LIST", new Bundle[]{
	        bundleApp1
	        ,bundleApp2
	        ,bundleApp3
	        ,bundleApp4
	});

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SET_DISABLED_APP_LIST", bMain);
	this.sendBroadcast(i);

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

### Notes
(none)

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
