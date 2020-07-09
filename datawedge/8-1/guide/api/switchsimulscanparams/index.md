---
title: Switch SimulScan Params
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## SWITCH_SIMULSCAN_PARAMS

Introduced in DataWedge 6.8. 

Used to pass one or more [SimulScan parameters](../../input/simulscan) as a bundle, **<u>temporarily</u>** updating the settings of the active Profile. This API can be used to change SimulScan settings in response to changing conditions at any time. For example, a developer might wish to enable an app to programmatically change input templates or region separators at various times of the day or in response to varying conditions. 

> **Note**: Settings configured by this API are discarded with the next Profile switch.

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SWITCH_SIMULSCAN_PARAMS", [bundle]);

### Parameters
**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.SWITCH_SIMULSCAN_PARAMS"

**EXTRA_DATA** [bundle]: "&lt;name, value&gt;" - Accepts the following SimulScan parameters as name-value pairs:
* `simulscan_input_source`	[string] - The input device for data capture. Possible values: 
 	* "Default" - accepts the default scanning device selected by the system
 	* "Camera" - selects the main device camera
 	* "Imager" - selects the internal imager on the device
* `simulscan_trigger_mode` [string] - Enable/disable the hardware trigger for Simulscan. Possible values:
	* "0" - disables the hardware trigger
	* "1" - enables the hardware trigger (default)
* `simulscan_template` [string] - File name of the XML template to use (i.e. "BankCheck.xml"). File must reside in `/enterprise/device/settings/datawedge/templates` folder on device. 
* `simulscan_region_separator`	[string] - The character to be inserted as a separator between data regions. Possible values: 
	* "NONE" (default)
	* "TAB" - Tab character
	* "LF" - Line feed
	* "CR" = Carriage return
* `simulscan_log_dir` [string] - Change the default folder path (`/storage/emulated/0/simulscan/logs`) for storing the SimulScan logs on the device. **Note**: SimulScan logging is enabled/disabled by the SimulScan template in use; logging is not controlled by DataWedge.
* `simulscan_enable_timestamp` [string] - Enable/disable automatic insertion of a timestamp `yyyy-mm-dd hh:mm:ss` along with acquired data. Possible values: 
	* true
	* false (default)
* `simulscan_template_params` [bundle] - User-defined bundle of custom parameters based on the selected template. Possible values: 
	* `dymanic_quantity` - Number of barcodes to decode in a single scan (from 1-99; default=5)

Learn more [about SimulScan parameters](../../input/simulscan). 

### Result Codes

DataWedge returns the following error codes if the app includes the intent extras `SEND_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#example), below. 

* **VALUE_ALREADY_SET -** No parameters set; equal values previously exist
* **PARAMETER_INVALID -** Given SimulScan parameter is invalid or not recognized
* **VALUE_INVALID -** Given value for a SimulScan parameter is invalid

See the [Result Codes guide](../resultinfo) for more information.  

### Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, missing parameters or other failures.

-----

## Example Code

The code below shows how to pass an intent that switches SimulScan parameters for the current scanner in the active Profile. To verify results of the switch (or if errors are expected), include the intent extras `SEND_RESULT` and `COMMAND_IDENTIFIER` to get results (also shown).

	//Create param bundle
	Bundle paramBundle = new Bundle();
	paramBundle.putString("simulscan_input_source", ”Camera”);
	paramBundle.putString("simulscan_template", ”BankCheck.xml”);

	//add dynamic parameters bundle
	Bundle templateParamsBundle = new Bundle();
	templateParamsBundle.putString("dynamic_quantity",”3”);
	paramBundle.putBundle("simulscan_template_params",templateParamsBundle);
	paramBundle.putString("simulscan_region_separator", “TAB”);
	paramBundle.putString("simulscan_log_dir",”/storage/emulated/0/simulscan/logs”);
	paramBundle.putString("simulscan_enable_timestamp", “true”);

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SWITCH_SIMULSCAN_PARAMS", paramBundle);

	//request and identify the result code
	i.putExtra("SEND_RESULT","true");
	i.putExtra("COMMAND_IDENTIFIER","123456789");//user specified unique id
	this.sendBroadcast(i);

### Receive the result

	//get the results
	BroadcastReceiver resultReceiver =  new BroadcastReceiver() {
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

        	Log.d("TAG",text);

    	}
	};

### Notes

**Pre-conditions and assumptions**:

* DataWedge and the respective Profile must be enabled
* SimulScan input should be enabled in the active Profile
* If Intent contains an invalid or unsupported scanner parameter or value, result code(s) will be sent

-----

**SEE ALSO**:

[SimulScan parameters](../../input/simulscan) | Guide to SimulScan Input Parameters for DataWedge

[SimulScan User Guide](/simulscan) | Complete SimulScan documentation and user guide

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
