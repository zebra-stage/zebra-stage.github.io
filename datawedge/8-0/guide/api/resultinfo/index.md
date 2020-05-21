---
title: Intent Result Codes 
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## Overview

Introduced in DataWedge 6.5.

**Intent result codes deliver status information about DataWedge API commands** to help developers determine the flow of data and the function of their business logic. Result codes are implemented with some of the APIs Introduced in DataWedge 6.5 and have been added to many APIs that existed previously.  

Result codes are accessed using the `RESULT_INFO` intent mechanism, which returns error codes if the app includes the intent extras `SEND_RESULT` and `COMMAND_IDENTIFIER` as shown in the prototype below. See the [Example section](#example) below for code showing how to register the app to receive result codes. 

### Function Prototype

	// send the intent
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.CREATE_PROFILE", "Profile007");

	// request and identify the result code
	i.putExtra("SEND_RESULT","LAST_RESULT"); //Supported values: NONE, LAST_RESULT, COMPLETE_RESULT
	i.putExtra("COMMAND_IDENTIFIER","123456789");
	this.sendBroadcast(i);

### Parameters

**RESULT** [String]: Success/failure of the operation

**COMMAND** [String]: Name of the received intent command

**COMMAND_IDENTIFIER** [String]: Optional parameter for linking results to a specific command

**SEND_RESULT** [String]: Accepts the following values in DataWedge 7.1 or higher. (DataWedge versions lower than 7.1 accept only TRUE and FALSE).
* **NONE**: No result returned to the application. (This is equivalent to FALSE for DataWedge versions lower than 7.1).
* **LAST_RESULT**: Sends the result info for the last executed module. If the user sends multiple plugins, the result info is returned for the last plugin sent. (This is equivalent to TRUE for versions lower than DataWedge 7.1).
E.g.: Send BARCODE, SIMULSCAN and SERIAL plugins in order. The result info received by the application returns results from the SERIAL plugin only.
* **COMPLETE_RESULT**: Returns a list of result info for each and every plugin if multiple plugins are sent.

**RESULT_INFO** [Bundle]: Can contain any of the fields below depending on the API in use: 

* **PREVIOUS_DEFAULT_PROFILE -** Specifies the previous default Profile when setting a new default Profile
* **PREVIOUS_PROFILE -** Specifies the previous Profile in the parameter when switching and renaming a Profile
* **PROFILE_NAME -** Always the current or next Profile name
* **RESULT_CODE -** One of the possible result codes shown in list table
* **SOURCE_PROFILE_NAME -** Specifies the source Profile when cloning a Profile
* **RESULT_CODE -** returned only for FAILURE. Can contain any of the fields below depending on the API in use:

 * **APP_ALREADY_ASSOCIATED -** An attempt was made to associate an app that was already associated with another Profile
 * **BUNDLE_EMPTY -** The bundle contains no data
 * **DATAWEDGE_ALREADY_DISABLED -** An attempt was made to disable DataWedge when it was already disabled
 * **DATAWEDGE_ALREADY_ENABLED -** An attempt was made to enable DataWedge when it was already enabled
 * **DATAWEDGE_DISABLED -** An attempt was made to perform an operation when DataWedge was disabled
 * **INPUT_NOT_ENABLED -** An attempt was made to acquire data when the Barcode or SimulScan plug-in was disabled
 * **OPERATION_NOT_ALLOWED -** An attempt was made to rename or delete a protected Profile or to associate an app with Profile0
 * **PARAMETER_INVALID -** The passed parameters were empty, null or invalid
 * **PLUGIN_NOT_SUPPORTED -** An attempt was made to configure a plug-in that is not supported by DataWedge intent APIs
 * **PLUGIN_BUNDLE_INVALID -** A passed plug-in parameter bundle is empty or contains insufficient information
 * **PROFILE_ALREADY_EXISTS -** An attempt was made to create, clone or rename a Profile with a name that already exists
 * **PROFILE_ALREADY_SET -** An attempt was made to set the default Profile as the default Profile
 * **PROFILE_DISABLED -** An attempt was made to perform an operation on a disabled Profile
 * **PLUGIN_DISABLED_IN_CONFIG -** An attempt was made to enable or disable the scanner when barcode plug-in was disabled manually from the DataWedge UI
 * **PROFILE_HAS_APP_ASSOCIATION -** An attempt was made to switch to or set as the default a Profile that is already associated with another app
 * **PROFILE_NAME_EMPTY -** An attempt was made to configure an empty Profile name
 * **PROFILE_NOT_FOUND -** An attempt was made to perform an operation on a Profile that does not exist
 * **SCANNER_ALREADY_DISABLED -** An attempt was made to disable a scanner that is already disabled
 * **SCANNER_ALREADY_ENABLED -** An attempt was made to enable a scanner that is already enabled
 * **SCANNER_DISABLE_FAILED -** An exception occurred while disabling the scanner
 * **SCANNER_ENABLE_FAILED -** An exception occurred while enabling the scanner
 * **UNKNOWN -** An unidentified error occurred

### Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

## Example Code

	//SENDING THE INTENT
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.RESTORE_CONFIG", "");
	this.sendBroadcast (i);

### Generate and receive result codes

Command and configuration intent parameters determine whether to send result codes (disabled by default). When using `SEND_RESULT`, the `COMMAND_IDENTIFIER` is used to match the result code with the originating intent. Sample usage of these parameters is shown below. 

**Note: Modify this generic code to match the API being used**.  

	// send the intent
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.CREATE_PROFILE", "Profile007");

	// request and identify the result code
	i.putExtra("SEND_RESULT","LAST_RESULT"); //Supported values: NONE, LAST_RESULT, COMPLETE_RESULT
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

### Generate and receive result codes for multiple modules (plugins, APP_LIST, and Data Capture Plus)

	public void setConfig() {

		// SetConfig [Start]
		Bundle bMain = new Bundle();

		Bundle bConfigIntent = new Bundle();
		Bundle bParamsIntent = new Bundle();
		bParamsIntent.putString("intent_output_enabled", "true");
		bParamsIntent.putString("intent_action", "com.symbol.dwudiusertokens.udi");
		bParamsIntent.putString("intent_category", "zebra.intent.dwudiusertokens.UDI");
		bParamsIntent.putInt("intent_delivery", 5); //Use "0" for Start Activity, "1" for Start Service, "2" for Broadcast, "3" for start foreground service
		bConfigIntent.putString("PLUGIN_NAME", "INTENT");
		bConfigIntent.putString("RESET_CONFIG", "false");
		bConfigIntent.putBundle("PARAM_LIST", bParamsIntent);

		Bundle bConfigSimulScan = new Bundle();
		Bundle bParamsSimulScan = new Bundle();
		bParamsSimulScan.putString("simulscan_input_enabled", "true");
		bParamsSimulScan.putString("simulscan_input_source", "Imager"); //Supported values: Camera, Imager, Default
		bParamsSimulScan.putString("simulscan_region_separator", "TAB"); //Supported Values:None, TAB, CR, LF, NONE
		bParamsSimulScan.putString("simulscan_log_dir", "/storage/zebra/intent/");
		bParamsSimulScan.putString("simulscan_enable_timestamp", "true");

		Bundle templateParamsBundle = new Bundle();
		templateParamsBundle.putString("dynamic_quantity", "99");
		bParamsSimulScan.putString("simulscan_template", "UserDefinedQuantity.xml"); // Ex:  UserDefinedQuantity.xml, Default - BankCheck.xml, Default - Barcode 1.xml, Default - Barcode 10.xml, Default - Barcode 2.xml, Default - Barcode 4.xml, Default - Barcode 5.xml, Default - BookNumber.xml, Default - DocCap + Optional Barcode.xml, Default - DocCap + Required Barcode.xml, Default - TravelDoc.xml, Default - Unstructured Multi-Line.xml, Default - Unstructured Single Line.xml
		bParamsSimulScan.putBundle("simulscan_template_params",templateParamsBundle);

		bConfigSimulScan.putString("PLUGIN_NAME", "SIMULSCAN");
		bConfigSimulScan.putString("RESET_CONFIG", "false");
		bConfigSimulScan.putBundle("PARAM_LIST", bParamsSimulScan);

		Bundle bConfigBarcode = new Bundle();
		Bundle bParamsBarcode = new Bundle();
		bParamsBarcode.putString("scanner_selection","auto");
		bParamsBarcode.putString("scanner_input_enabled","true");
		bConfigBarcode.putString("PLUGIN_NAME", "BARCODE");
		bConfigBarcode.putString("RESET_CONFIG", "false");
		bConfigBarcode.putBundle("PARAM_LIST", bParamsBarcode);

		Bundle bConfigMSR = new Bundle();
		Bundle bParamsMSR = new Bundle();
		bParamsMSR.putString("msr_input_enabled", "true");
		bConfigMSR.putString("PLUGIN_NAME", "MSR");
		bConfigMSR.putString("RESET_CONFIG", "false");
		bConfigMSR.putBundle("PARAM_LIST", bParamsMSR);

		Bundle bConfigIPOutput = new Bundle();
		Bundle bParamsIPOutput = new Bundle();
		bParamsIPOutput.putString("ip_output_enabled", "true");
		bParamsIPOutput.putString("ip_output_ip_wedge_enabled", "false");
		bParamsIPOutput.putString("ip_output_protocol", "UDP"); //Supported Values: TCP: UDP
		bParamsIPOutput.putString("ip_output_address", "192.168.0.1"); //Supported Values : IP Address format
		bParamsIPOutput.putString("ip_output_port", "55555"); //Supported Values : 1 - 65535

		bConfigIPOutput.putString("PLUGIN_NAME", "IP");
		bConfigIPOutput.putString("RESET_CONFIG", "false");
		bConfigIPOutput.putBundle("PARAM_LIST", bParamsIPOutput);

		Bundle bConfigToken = new Bundle();
		Bundle bParamsToken = new Bundle();

		bParamsToken.putString("send_tokens_option", "BARCODES_TOKENS"); // Supported Values: DISABLED, TOKENS, BARCODES_TOKENS
		bParamsToken.putString("token_separator", "LF"); //Supported Values:None, TAB, CR, LF, NONE
		bParamsToken.putString("multibarcode_separator", "LF"); //Supported Values:None, TAB, CR, LF, NONE

		Bundle tokenOrder_manufacturing_date_original = new Bundle();
		tokenOrder_manufacturing_date_original.putString("name","manufacturing_date_original");
		tokenOrder_manufacturing_date_original.putString("enabled","true");

		Bundle tokenOrder_expiration_date_original = new Bundle();
		tokenOrder_expiration_date_original.putString("name","expiration_date_original");
		tokenOrder_expiration_date_original.putString("enabled","true");

		Bundle tokenOrder_di = new Bundle();
		tokenOrder_di.putString("name","di");
		tokenOrder_di.putString("enabled","true");

		Bundle tokenOrder_lot_number = new Bundle();
		tokenOrder_lot_number.putString("name","lot_number");
		tokenOrder_lot_number.putString("enabled","true");

		Bundle tokenOrder_serial_number = new Bundle();
		tokenOrder_serial_number.putString("name","serial_number");
		tokenOrder_serial_number.putString("enabled","true");

		Bundle tokenOrder_mpho_lot_number = new Bundle();
		tokenOrder_mpho_lot_number.putString("name","mpho_lot_number");
		tokenOrder_mpho_lot_number.putString("enabled","true");

		Bundle tokenOrder_donation_id = new Bundle();
		tokenOrder_donation_id.putString("name","donation_id");
		tokenOrder_donation_id.putString("enabled","true");

		Bundle tokenOrder_labeler_identification_code = new Bundle();
		tokenOrder_labeler_identification_code.putString("name","labeler_identification_code");
		tokenOrder_labeler_identification_code.putString("enabled","true");

		Bundle tokenOrder_product_or_catalog_number = new Bundle();
		tokenOrder_product_or_catalog_number.putString("name","product_or_catalog_number");
		tokenOrder_product_or_catalog_number.putString("enabled","true");

		Bundle tokenOrder_unit_of_measure_id = new Bundle();
		tokenOrder_unit_of_measure_id.putString("name","unit_of_measure_id");
		tokenOrder_unit_of_measure_id.putString("enabled","true");

		Bundle tokenOrder_quantity = new Bundle();
		tokenOrder_quantity.putString("name","quantity");
		tokenOrder_quantity.putString("enabled","false");

		ArrayList<Bundle> tokenOrderList = new ArrayList<>();
		tokenOrderList.add(tokenOrder_manufacturing_date_original);
		tokenOrderList.add(tokenOrder_expiration_date_original);
		tokenOrderList.add(tokenOrder_lot_number);
		tokenOrderList.add(tokenOrder_di);
		tokenOrderList.add(tokenOrder_serial_number);
		tokenOrderList.add(tokenOrder_mpho_lot_number);
		tokenOrderList.add(tokenOrder_donation_id);
		tokenOrderList.add(tokenOrder_labeler_identification_code);
		tokenOrderList.add(tokenOrder_product_or_catalog_number);
		tokenOrderList.add(tokenOrder_unit_of_measure_id);
		tokenOrderList.add(tokenOrder_quantity);

		bParamsToken.putParcelableArrayList("token_order", tokenOrderList);

		bConfigToken.putString("PLUGIN_NAME", "TOKEN");
		bConfigToken.putString("OUTPUT_PLUGIN_NAME","IP");
		bConfigToken.putString("RESET_CONFIG", "true");
		bConfigToken.putBundle("PARAM_LIST", bParamsToken);

		ArrayList<Bundle> bundlePluginConfig = new ArrayList<>();
		bundlePluginConfig.add(bConfigIntent);
		bundlePluginConfig.add(bConfigBarcode);
		bundlePluginConfig.add(bConfigSimulScan);
		bundlePluginConfig.add(bConfigMSR);
		bundlePluginConfig.add(bConfigIPOutput);
		bundlePluginConfig.add(bConfigToken);

		bMain.putParcelableArrayList("PLUGIN_CONFIG", bundlePluginConfig);

		//AppList[Start]
		Bundle bundleApp1 = new Bundle();
		bundleApp1.putString("PACKAGE_NAME", "com.symbol.emdk.simulscansample1");
		bundleApp1.putStringArray("ACTIVITY_LIST", new String[]{
				"com.symbol.emdk.simulscansample1.DeviceControl",
				"com.symbol.emdk.simulscansample1.MainActivity",
				"com.symbol.emdk.simulscansample1.ResultsActivity",
				"com.symbol.emdk.simulscansample1.ResultsActivity2",
				"com.symbol.emdk.simulscansample1.SettingsFragment1"});

		Bundle bundleApp2 = new Bundle();
		bundleApp2.putString("PACKAGE_NAME", "com.example.intents.datawedgeintent");
		bundleApp2.putStringArray("ACTIVITY_LIST", new String[]{
				"com.example.intents.datawedgeintent.DeviceControl",
				"com.example.intents.datawedgeintent.MainActivity",
				"com.example.intents.datawedgeintent.ResultsActivity",
				"com.example.intents.datawedgeintent.SettingsFragment1"});

		Bundle bundleApp3 = new Bundle();
		bundleApp3.putString("PACKAGE_NAME", "com.symbol.pubudu");
		bundleApp3.putStringArray("ACTIVITY_LIST", new String[]{"*"});

		Bundle bundleApp4 = new Bundle();
		bundleApp4.putString("PACKAGE_NAME", "com.symbol.myzebraapp");
		bundleApp4.putStringArray("ACTIVITY_LIST", new String[]{"*"});

		// ADD APP_LIST BUNDLE(S) INTO THE MAIN BUNDLE
		bMain.putParcelableArray("APP_LIST", new Bundle[]{
				bundleApp1
				, bundleApp2
				, bundleApp3
				, bundleApp4
		});

		//AppList [End]

		Bundle bConfigDCP = new Bundle();
		Bundle bParamsDCP = new Bundle();
		bParamsDCP.putString("dcp_input_enabled", "true");
		bParamsDCP.putString("dcp_dock_button_on", "LEFT"); //Supported values: BOTH - Left or Right, LEFT - Left only, RIGHT - Right only
		bParamsDCP.putString("dcp_start_in", "FULLSCREEN"); //Supported Values: FULLSCREEN, BUTTON, BUTTON_ONLY
		bParamsDCP.putString("dcp_highest_pos", "10"); //Supported Values:  0 - 100
		bParamsDCP.putString("dcp_lowest_pos", "20"); //Supported Values: 0 - 100
		bParamsDCP.putString("dcp_drag_detect_time", "501"); //Supported Values: 0 - 1000
		bConfigDCP.putString("RESET_CONFIG", "true");
		bConfigDCP.putBundle("PARAM_LIST", bParamsDCP);

		bMain.putBundle("DCP", bConfigDCP);

		bMain.putString("PROFILE_NAME", "Profile007");
		bMain.putString("PROFILE_ENABLED", "true");
		bMain.putString("CONFIG_MODE", "CREATE_IF_NOT_EXIST");

		Intent iSetConfig = new Intent();
		iSetConfig.setAction("com.symbol.datawedge.api.ACTION");
		iSetConfig.putExtra("com.symbol.datawedge.api.SET_CONFIG", bMain);
		iSetConfig.putExtra("SEND_RESULT", "COMPLETE_RESULT"); //Supported values: NONE, LAST_RESULT, COMPLETE_RESULT
		iSetConfig.putExtra("COMMAND_IDENTIFIER", "INTENT_API");
		// SetConfig [End]

		this.sendBroadcast(iSetConfig);
	}

	private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
		@Override
		public void onReceive(Context context, Intent intent) {
			String action = intent.getAction();

			String strFinalResult = "";
			String command = intent.getStringExtra("COMMAND");
			String profileName = intent.getStringExtra("PROFILE_NAME");
			String resultInfo = "";

			if (action.equals("com.symbol.datawedge.api.RESULT_ACTION")) {

				if (intent.hasExtra("RESULT_LIST")) { // returns for COMPLETE_RESULT
					resultInfo += "ProfileName: " + profileName + "\n";
					ArrayList<Bundle> result_list = (ArrayList)intent.getSerializableExtra("RESULT_LIST");
					for (Bundle bundleResult : result_list) {

						resultInfo +="\n\n";

						Set<String> keys = bundleResult.keySet();
						for (String key : keys) {
							String val = bundleResult.getString(key);
							if (val == null) {

								if (bundleResult.getStringArray(key) != null) {
									val = "";
									for (String s : bundleResult.getStringArray(key)) {
										val += "" + s + "\n";
									}
								}
							}

							resultInfo += key + ": " + val + "\n";
						}
					}
				}
				else if (intent.hasExtra("RESULT_INFO")) { // returns for LAST_RESULT
					String result = intent.getStringExtra("RESULT");
					Bundle bundle = intent.getBundleExtra("RESULT_INFO");
					resultInfo += "Result: " + result + "\n";
					Set<String> keys = bundle.keySet();
					for (String key : keys) {
						String val = bundle.getString(key);
						if(val == null) {

							if(bundle.getStringArray(key) != null) {
								val="";
								for (String s : bundle.getStringArray(key)) {
									val += "" + s + "\n";
								}
							}
						}

						resultInfo += key + ": " + val + "\n";
					}

				}
				if (command != null) {
					if (command.equalsIgnoreCase("com.symbol.datawedge.api.SET_CONFIG")) {
						Log.d("TAG", "#IntentApp# \n\nSetConfig status received:\nResultInfo: \n" + resultInfo);
					}
				}
			}
		}
	};

### Comments

* The result intent mechanism does not perform parameter-level validation for scanner input parameters and intent output parameters. For example, it would be not be possible for any app to validate every possible parameter for a scanner that is no longer connected. However, if a parameter value in a configuration is not valid when that Profile is loaded, DataWedge uses the default value for that parameter.

* DataWedge executes the SET_CONFIG command in the following order if multiple modules are received.
1.	Plugins
2.	APP_LIST
3.	DCP (Data Capture Plus)

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
