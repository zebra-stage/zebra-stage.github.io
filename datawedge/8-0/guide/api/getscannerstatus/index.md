---
title: Get Scanner Status 
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## GET_SCANNER_STATUS

Introduced in DataWedge 6.5.

Returns the status of the scanner currently selected by DataWedge as the default.

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_SCANNER_STATUS", "");


### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.GET_SCANNER_STATUS"

**EXTRA VALUE**: Empty string
 

### Return Values
Returns a String of the name of the active DataWedge Profile

**EXTRA NAME**: "com.symbol.datawedge.api.RESULT_SCANNER_STATUS" 

**EXTRA TYPE** [String]: [ ] **Possible values**:
* **WAITING** - Scanner is ready to be triggered
* **SCANNING** - Scanner is emitting a scanner beam 
* **DISABLED** - Scanner is disabled
* **CONNECTED** - An external (Bluetooth or serial) scanner is connected
* **DISCONNECTED** - The external scanner is disconnected


Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

## Example Code

### Query Scanner Status

    //Sending the intent to query scanner status
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.GET_SCANNER_STATUS","");
		i.putExtra("SEND_RESULT","true");
		i.putExtra("com.symbol.datawedge.api.RESULT_CATEGORY","android.intent.category.DEFAULT");
		this.sendBroadcast(i);

<!-- removed due to redundancy, NOT per eng. 

    // call in onResume()
    private void registerReceivers(){
        IntentFilter filter = new IntentFilter();
        filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
        filter.addCategory(Intent.CATEGORY_DEFAULT);
        registerReceiver(receiver,filter);
    }
     
    //call in onPause()
    private void unRegisterReceivers(){
        unregisterReceiver(receiver);
    }

 -->

### Register to Receive Query Results

    private void registerReceivers(){
        IntentFilter filter = new IntentFilter();
        filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
        filter.addCategory(Intent.CATEGORY_DEFAULT);
        registerReceiver(receiver,filter);
    }

### Receive Query Results

    // Receiving the results 

    ResultIntentReceiver receiver = new ResultIntentReceiver();

    class ResultIntentReceiver extends BroadcastReceiver {
        @Override
        public void onReceive(Context context, Intent intent) {
                if(intent.hasExtra("com.symbol.datawedge.api.RESULT_SCANNER_STATUS")) {
                    String scannerStatus = intent.getStringExtra("com.symbol.datawedge.api.RESULT_SCANNER_STATUS");
                    Log.d(TAG,"Scanner status:"+scannerStatus);
                }
        }
    }


<!-- 6/29/18- replaced existing code (below) with the code above, per eng. 

	// Receiving the results 

		private BroadcastReceiver mBroadcastReceiver = new BroadcastReceiver(){
    	@Override
    	public void onReceive(Context context, Intent intent){

        if (intent != null) {
            String command = intent.getStringExtra("COMMAND");
            String commandidentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
            String result = intent.getStringExtra("RESULT");
            Bundle bundle = new Bundle();
            String resultInfo = "";
            if (intent.hasExtra("RESULT_INFO")) {
                bundle = intent.getBundleExtra("RESULT_INFO");
                Set<String> keys = bundle.keySet();
                for (String key : keys) {
                    resultInfo += key + ": " + bundle.getString(key) + "\n";
                }
            }
            String text = "Command: " + command + "\n" +
                    "Result: " + result + "\n" +
                    "Result Info: \n" + resultInfo + "\n" +
                    "CID:" + commandidentifier;
            
            Log.d("TAG", "#DataWedgeTestApp# \nCommand: " + command + "\nResult: " + result + "\nReason:\n" + resultInfo);
            Toast.makeText(context, text, Toast.LENGTH_LONG).show();
        	}
    	};
	};
 -->

### Unregister (to Release Resources)

    private void unRegisterReceivers(){
        unregisterReceiver(receiver);
    }

------

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
