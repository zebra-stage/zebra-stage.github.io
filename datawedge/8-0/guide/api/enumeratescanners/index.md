---
title: Enumerate Scanners 
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## ENUMERATE_SCANNERS

Introduced in DataWedge 6.3. 

Generates a numbered list (index) of scanners available on the device. 

**IMPORTANT**: The scanner index is not fixed for all devices. It varies depending on the number of supported internal and/or external scanners installed and/or connected to the device at the time the index is generated. 

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.ENUMERATE_SCANNERS", "");

### Parameters
**ACTION** [String]: "com.symbol.datawedge.api.ENUMERATE_SCANNERS"

### Return Values
The enumerated list of scanners is returned via the broadcast intent `com.symbol.datawedge.api.ACTION_ENUMERATEDSCANNERLIST`. The list of scanners is returned as a string array (see below).

### Bundle Extras

**SCANNER_NAME** [String]: 

**SCANNER_INDEX** [String]:  

**SCANNER_CONNECTION_STATE** [String]: 

**SCANNER_IDENTIFIER** [String]: in each scanner info bundle for each scanner supported in the device (introduced in DataWedge 6.5). Both parameters are supported in DataWedge 6.6 and higher; the scanner identifier value takes precedence if an index also is referenced in the code.  

**Possible values**:

* **AUTO** - Automatic scanner selection
* **INTERNAL_IMAGER** - Built-in imager scanner
* **INTERNAL_LASER** - Built-in laser scanner
* **INTERNAL_CAMERA** - Built-in camera scanner
* **SERIAL_SSI** - Pluggable Z-back scanner for ET50/ET55 
* **BLUETOOTH_SSI** - RS507 Bluetooth scanner
* **BLUETOOTH_RS6000** - RS6000 Bluetooth scanner
* **BLUETOOTH_DS3678** - DS3678 Bluetooth scanner
* **PLUGABLE_SSI** - Serial SSI scanner RS429 (for use with WT6000)
* **PLUGABLE_SSI_RS5000** - Serial SSI scanner RS5000 (for use with WT6000)
* **USB_SSI_DS3608** - DS3608 pluggable USB scanner


Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters. 

## Example Code

### Enumerate scanners

	//
	//  Call before sending the enumeration query
	//
	public void registerReciever(){
	    IntentFilter filter = new IntentFilter();
	    filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");//RESULT_ACTION
	    filter.addCategory(Intent.CATEGORY_DEFAULT);
	    registerReceiver(enumeratingBroadcastReceiver, filter);
	}
	//
	// Send the enumeration command to DataWedge
	//
	public void enumerateScanners(){
	    Intent i = new Intent();
	    i.setAction("com.symbol.datawedge.api.ACTION");
	    i.putExtra("com.symbol.datawedge.api.ENUMERATE_SCANNERS", "");
	    this.sendBroadcast(i);
	}

	public void unRegisterReciever(){
	    unregisterReceiver(enumeratingBroadcastReceiver);
	}

	//
	// Create broadcast receiver to receive the enumeration result
	//
	private BroadcastReceiver enumeratingBroadcastReceiver = new BroadcastReceiver() {
	    @Override
	    public void onReceive(Context context, Intent intent) {
	        String action = intent.getAction();
	        Log.d(TAG, "Action: " + action);
	        if(action.equals("com.symbol.datawedge.api.RESULT_ACTION")){
	            //
	            // enumerate scanners
	            //
	            if(intent.hasExtra("com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS")) {
                ArrayList<Bundle> scannerList = (ArrayList<Bundle>) intent.getSerializableExtra("com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS");
                if((scannerList != null) && (scannerList.size() > 0)) {
                    for (Bundle bunb : scannerList){
                        String[] entry = new String[4];
                        entry[0] = bunb.getString("SCANNER_NAME");
                        entry[1] = bunb.getBoolean("SCANNER_CONNECTION_STATE")+"";
                        entry[2] = bunb.getInt("SCANNER_INDEX")+"";

                        entry[3] = bunb.getString("SCANNER_IDENTIFIER");

                        Log.d(TAG, "Scanner:" + entry[0]  + " Connection:" + entry[1] + " Index:" + entry[2] + " ID:" + entry[3]);
	                    }
	                }
	            }
	        }
	    }
	};


### Get scanner details

	// RESULT_ACTION_EXTRA_ENUMERATE_SCANNERS

	if(intent.hasExtra("com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS")) {
	    Log.d(TAG, ">>> RESULT_ACTION_EXTRA_ENUMERATE_SCANNERS <<<");
	    ArrayList<Bundle> scannerList = (ArrayList<Bundle>) intent.getSerializableExtra("com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS");
	    if((scannerList != null) && (scannerList.size() > 0)) {
	        for ( Bundle bunb: scannerList) {
	          
	            String ScannerName = bunb.getString("SCANNER_NAME");
	            int ScannerIndex = bunb.getInt("SCANNER_INDEX"));
	            Boolean ScannerConnectionState = bunb.getBoolean("SCANNER_CONNECTION_STATE");
	            String ScannerId = bunb.getString("SCANNER_IDENTIFIER");

	        }
	    }
	}


<!-- 11/14/17- COMMENTED AND REPLACED WITH SAMPLE ABOVE, PER ENG. 

	// First send the intents to enumerate the available scanners on the device:
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.ENUMERATE_SCANNERS", "");
	this.sendBroadcast(i);
	
	// define action string:
	String enumerateScanners = "com.symbol.datawedge.api.ACTION";

	// create the intent:
	Intent i = new Intent();
	
	// set the action to perform:
	i.setAction(enumerateScanners);
	
	// send the intent to DataWedge:
	this.sendBroadcast(i);

	// enable the app to receive the enumerated list of available scanners:
	String enumeratedList = "com.symbol.datawedge.api.ACTION";

	// create a filter for the broadcast intent
	IntentFilter filter = new IntentFilter();
	 	filter.addAction(enumeratedList);
	  	filter.addCategory(Intent.CATEGORY_DEFAULT);  // NOTE: REQUIRED for DW6.2 and higher
	  	registerReceiver(myBroadcastReceiver, filter);

	// create a broadcast receiver
	private BroadcastReceiver myBroadcastReceiver = new BroadcastReceiver() {
	   @Override
	   public void onReceive(Context context, Intent intent) {
	        String action = intent.getAction();
	        Log.d(TAG, "Action: " + action); 
	                
         	if(action.equals("com.symbol.datawedge.api.RESULT_ACTION")){
            	Bundle b = intent.getExtras();

    // enumerate scanners
    if(intent.hasExtra("com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS")) {
        ArrayList<Bundle> scannerList = (ArrayList<Bundle>) intent.getSerializableExtra("com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS");
    if((scannerList != null) && (scannerList.size() > 0)) {
        for ( Bundle bunb: scannerList)
            Log.d(TAG,"Scanner:"+bunb.getString("SCANNER_NAME")+" Connection:"+bunb.getBoolean("SCANNER_CONNECTION_STATE")+" Index:"+bunb.getInt("SCANNER_INDEX"));
                    }
                }
			}
        }
    };
 -->
<!--  	// The following code provided by engineering on 6/26/17 [TUT-14724]
 		// Integrated with main code sample as indicated below: 

	//Enumerate Scanners (send request)
        Intent i = new Intent();
        i.setAction("com.symbol.datawedge.api.ACTION");
        i.putExtra("com.symbol.datawedge.api.ENUMERATE_SCANNERS", "");
        this.sendBroadcast(i); //this line added; those above were already present in sample
       
    
	//Enumerate Scanners (receive results)
    private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            String action = intent.getAction();
            Log.d(TAG, "Action: " + action); //THIS LINE ADDED TO SAMPLE

            //THE REMAINING CODE (BELOW) REPLACED THE 
            // "REMAINDER OF THE ORIGINAL SAMPLE" (FARTHER BELOW) 

            if(action.equals("com.symbol.datawedge.api.RESULT_ACTION")){
                Bundle b = intent.getExtras();

                // enumerate scanners
                if(intent.hasExtra("com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS")) {
                    ArrayList<Bundle> scannerList = (ArrayList<Bundle>) intent.getSerializableExtra("com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS");
                    if((scannerList != null) && (scannerList.size() > 0)) {
                        for ( Bundle bunb: scannerList)
                            Log.d(TAG,"Scanner:"+bunb.getString("SCANNER_NAME")+" Connection:"+bunb.getBoolean("SCANNER_CONNECTION_STATE")+" Index:"+bunb.getInt("SCANNER_INDEX"));
                    }
                }
			}
        }
    };

    //"REMAINDER"
    	                if (action.equals(enumeratedList)) {
	                        Bundle b = intent.getExtras();
	                        String[] scanner_list = b.getStringArray(KEY_ENUMERATEDSCANNERLIST);
	                }
	        }
	};
-->

### Comments
The scanner and its parameters are set based on the currently active Profile.

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
