---
title: Import Config 
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## IMPORT_CONFIG

Introduced in DataWedge 6.7.

Used to import a DataWedge Profile and/or Config settings files. **A Profile is a single group of settings** that control how DataWedge will behave with one or more specific applications and devices. **A Config file can contain numerous Profiles**, and stores all other DataWedge settings, including its status (enabled/disabled), logging and other configurable parameters.

> **Importing a Config file** (`database.db`) **<u>overwrites all DataWedge settings</u> and Profiles previously stored on the device**. 

### Intent Behavior

* This API is designed for use **_after_** a new settings file (Config or Profile) has been pushed to the device.  
* When the `IMPORT_CONFIG` intent is called, it checks the folder specified with the `FOLDER_PATH` attribute for the presence of DataWedge settings files. 
* If a Config file (always called "`datawedge.db`") is found, DataWedge restarts and immediately applies the settings in that file, permanentely erasing all previous DataWedge settings. 
* All imported Profile configuration files (always called "`dwprofile_<profilename>.db`") are added to the list of available Profiles on the device. 
* If a Profile exists on the device with the same name as one being imported, **the existing Profile will be modified by the imported one**.
* If the specified folder contains a Profile with the same name as the currently active Profile, the new Profile is imported and its settings are applied immediately.
* While the `IMPORT_CONFIG` intent is running, the [Auto Import](../../settings/#autoimport) function is disabled. 
* If a duplicate [Associated App](../gettingstarted) exists between a current profile and a profile being imported, the profile being imported will not take into effect. For example, if current profile A is configured with an associated app and that same app is associated with profile B, when importing profile B the import does not take into effect due to the duplication. This similarly applies if an app is listed in the [Disabled App List](../settings) and that same app is an Associated App in a profile being imported - the import does not take into effect and the app remains on the Disabled App List.

**See also**: 

* [Importing DataWedge Config files](../../settings/#importaconfig)
* [Importing DataWedge profiles](../../settings/#importaprofile)

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.IMPORT_CONFIG", <mainbundle>);

### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.IMPORT_CONFIG"

**BUNDLE**: &lt;mainbundle&gt; (see parameters below)

#### Main Bundle

The main `IMPORT_CONFIG` bundle includes the following properties:

**FOLDER_PATH** [String]: **Required** folder path and name for configuration files to import. 

**FILE_LIST** [ArrayList&lt;String&gt;]: **Optional** list of one or more required database (`.db`) files in the folder specified in `FOLDER_PATH` parameter. If not specified, DataWedge imports all files with a `.db` extension in the folder specified in `FOLDER_PATH` parameter. 

**Zebra recommends using the `getExternalFilesDirs` API call** to identify accessible external storage locations in the device before sending the `IMPORT_CONFIG` intent. For example: 

	File[] fileDirs = getExternalFilesDirs(null);

	Example return:
	/storage/34E4-1117/Android/data/<PackageName>/files
	/storage/sdcard2/0/Android/data/<PackageName>/files
	/storage/emulated/0/Android/data/<PackageName>/files
	
**Note**: The "34E4-1117" shown above is a symbolic link to an external SDcard. 

### Result Bundle
After an `IMPORT_CONFIG` intent is sent, DataWedge broadcasts a result intent with the  status (success or failure) of the import. Result info is returned as an ArrayList of bundles containing `RESULT_CODE` and `RESULT_CODE_INFO` sections to describe the additional information.

**RESULT** [String]: "SUCCESS" or "FAILURE"

**RESULT_INFO** [ArrayList&lt;bundles&gt;]: 

**RESULT_CODE**: The following result codes are returned with the specified folder/file name or the `RESULT_CODE_INFO` as indicated:

* **EMPTY_FOLDER_PATH –** `FOLDER_PATH` is empty or not specified
* **INVALID_FOLDER_PATH –** Specified `FOLDER_PATH` is invalid
 * **RESULT_CODE_INFO -** “&lt;folder path&gt;”
* **INVALID_CONFIG_FILE –** Corrupted database files present in specified folder
* **CONFIG_FILE_NOT_EXIST -** No valid DataWedge database files in specified folder
 * **RESULT_CODE_INFO -** “dwprofile_&lt;profilename&gt;.txt" , “dwA_&lt;profilename&gt;.db”
* **INVALID_FILE_NAME –** Folder contains valid and invalid DataWedge .db file names
 * **RESULT_CODE_INFO -** "&lt;invalid file name&gt;"
* **CANNOT_READ_FILE –** DataWedge was unable to read the specified database file

[More about Result Codes](../resultinfo)  

### Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters

## Example Code

### Import files using the path: "/sdcard/configFolder"

		private void importConfig() { 

	    	//MAIN BUNDLE PROPERTIES
		Bundle bMain = new Bundle();
		bMain.putString("FOLDER_PATH", "/sdcard/configFolder");
	 
		ArrayList<String> fileNames = new ArrayList<>();
		fileNames.add("datawedge.db");
		fileNames.add("dwprofile_profileA.db");
		fileNames.add("dwprofile_profileB.db");
	 
		bMain.putStringArrayList("FILE_LIST", fileNames);

		// send the intent
		Intent i = new Intent();
		i.setAction(ACTION);
		i.putExtra("com.symbol.datawedge.api.IMPORT_CONFIG", bMain);

		// request and identify the result code
		i.putExtra("SEND_RESULT","true");
		i.putExtra("COMMAND_IDENTIFIER","123456789");
		this.sendBroadcast(i);
		}

### Receive results of the import

	 // register to receive the result
	public void onReceive(Context context, Intent intent){
	  String command = intent.getStringExtra("COMMAND");
	  String commandidentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
	  String result = intent.getStringExtra("RESULT");
	  Bundle bundle = new Bundle();
	  String resultInfo = "";
	  if (intent.hasExtra("RESULT_INFO")) {
	  ArrayList<Bundle> bundleList = intent.getParcelableArrayListExtra("RESULT_INFO");                    
	      if(bundleList!= null && !bundleList.isEmpty()){
	        for(Bundle resultBundle : bundleList){
	            Set<String> keys = resultBundle.keySet();
	            for (String key : keys) {
	                if(key.equalsIgnoreCase("RESULT_CODE")){
	                    resultInfo += key + ": " + resultBundle.getString(key);
	                }else {
	                    resultInfo += key + ": " + resultBundle.getString(key) + "\n";
	                }
	            }
	        }
	      }
	  } 
	}


-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
