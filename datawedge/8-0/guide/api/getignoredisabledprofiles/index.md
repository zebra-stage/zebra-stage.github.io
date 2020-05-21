---
title: Get Ignore Disabled Profiles 
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## GET_IGNORE_DISABLED_PROFILES 

Introduced in DataWedge 6.8. 

Returns the status of the "Ignore Disabled Profiles" parameter of DataWedge. If set to true, DataWedge is prevented from switching to any Profile that is not enabled, including Profile0. 

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_IGNORE_DISABLED_PROFILES", "");


### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**INTENT_EXTRA** [String]: "com.symbol.datawedge.api.GET_IGNORE_DISABLED_PROFILES"


### Return Values
Returns a String indicating whether DataWedge ignores disabled Profiles

**EXTRA NAME**: "com.symbol.datawedge.api.GET_IGNORE_DISABLED_PROFILES" 

**POSSIBLE VALUES**: [String]: ["true" , "false" ]

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

## Example Code

		//Sample code for sending the intent to GET the setting
			Intent i = new Intent();
			i.setAction("com.symbol.datawedge.api.ACTION");
			i.putExtra("com.symbol.datawedge.api.GET_IGNORE_DISABLED_PROFILES","");

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

### Receiving the results of GET/SET
 
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
