---
title: Soft Scan Trigger 
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## SOFT_SCAN_TRIGGER 

Used to start, stop or toggle a software scanning trigger. 

> **Functional only when Barcode Input is enabled in the active Profile**.

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SOFT_SCAN_TRIGGER", "<parameter>");


### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.SOFT_SCAN_TRIGGER"

**&lt;parameter&gt;**: The parameter as a string, using any of the following: 

* `START_SCANNING` - starts scanning when triggered

* `STOP_SCANNING` - stops or interrupts scanning when triggered

* `TOGGLE_SCANNING` - toggles between `START_SCANNING` and `STOP_SCANNING` when triggered

### Result Codes

DataWedge returns the following error codes if the app includes the intent extras `SEND_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#example), below. 

* **DATAWEDGE_DISABLED -** FAILURE
* **INPUT_NOT_ENABLED -** FAILURE
* **PARAMETER_INVALID -** FAILURE
* **PROFILE_DISABLED -** FAILURE 

Also see the [Result Codes guide](../resultinfo) for more information.  

### Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

## Example Code

	// define action and data strings
	String softScanTrigger = "com.symbol.datawedge.api.ACTION";
	String extraData = "com.symbol.datawedge.api.SOFT_SCAN_TRIGGER";
	
	// create the intent
	Intent i = new Intent();

	// set the action to perform
	i.setAction(softScanTrigger);
	
	// add additional info
	i.putExtra(extraData, "START_SCANNING");
	
	// send the intent to DataWedge
	this.sendBroadcast(i);

### Sample 'SCANNER_STATUS' Notification
Soft scan trigger commands might be ignored if the scanner is busy at the time a command is executed. **Zebra recommends using the** `SCANNER_STATUS` **parameter of the [NOTIFICATION API](../registerfornotification) to signal that the scanner is ready**. Use the sample code below:

	@Override
	protected void onCreate(Bundle savedInstanceState) {
	    super.onCreate(savedInstanceState);
	    setContentView(R.layout.activity_main);
	    registerReceivers();
	}

	@Override
	protected void onResume(){
	    super.onResume();
	    switchToProfile();
	}

	public static final String ACTION = "com.symbol.datawedge.api.ACTION";
	public static final String NOTIFICATION_ACTION = "com.symbol.datawedge.api.NOTIFICATION_ACTION";
	public static final String NOTIFICATION_TYPE_SCANNER_STATUS = "SCANNER_STATUS";
	public static final String SCAN_STATUS_WAITING = "WAITING";
	public static final String NOTIFICATION_TYPE_PROFILE_SWITCH = "PROFILE_SWITCH";

	public static final String ACTION_EXTRA_REGISTER_FOR_NOTIFICATION = "com.symbol.datawedge.api.REGISTER_FOR_NOTIFICATION";
	public static final String ACTION_EXTRA_UNREGISTER_FOR_NOTIFICATION = "com.symbol.datawedge.api.UNREGISTER_FOR_NOTIFICATION";

	private void registerReceivers() {
	    IntentFilter filter = new IntentFilter();
	    filter.addAction(NOTIFICATION_ACTION);
	    registerReceiver(broadcastReceiver, filter);
	    registerForScannerStatus();
	}

	@Override
	protected void onDestroy() {
	    super.onDestroy();
	    unregisterReceiver(broadcastReceiver);
	    unRegisterForScannerStatus();
	}

	private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
	    @Override
	    public void onReceive(Context context, Intent intent) {
	        String action = intent.getAction();
	        Log.d(TAG, "#DataWedge-APP# Action: " + action);
	        if(action.equals(NOTIFICATION_ACTION)){
	            // handle notification
	            if(intent.hasExtra("com.symbol.datawedge.api.NOTIFICATION")) {
	                Bundle b = intent.getBundleExtra("com.symbol.datawedge.api.NOTIFICATION");
	                String NOTIFICATION_TYPE  = b.getString("NOTIFICATION_TYPE");
	                if(NOTIFICATION_TYPE!= null) {
	                    switch (NOTIFICATION_TYPE) {
	                        case NOTIFICATION_TYPE_SCANNER_STATUS:
	                            Log.d(TAG, "SCANNER_STATUS: status: " + b.getString("STATUS") + ", profileName: " + b.getString("PROFILE_NAME"));
	                            String status = b.getString("STATUS");
	                            if(status!=null && status.equals(SCAN_STATUS_WAITING)){
	                                //toggle scanner when scanner is ready
	                                scanToggle();
	                                unRegisterForScannerStatus();
	                            }
	                            break;
	                        case NOTIFICATION_TYPE_PROFILE_SWITCH:
	                            Log.d(TAG, "PROFILE_SWITCH: profileName: " + b.getString("PROFILE_NAME") + ", profileEnabled: " + b.getBoolean("PROFILE_ENABLED"));
	                            break;
	                    }
	                }
	            }
	        }
	    }
	};


	public void registerForScannerStatus() {
	    Bundle b = new Bundle();
	    b.putString("com.symbol.datawedge.api.APPLICATION_NAME", "com.dwapi.dwnotifiation");
	    b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE", NOTIFICATION_TYPE_SCANNER_STATUS);
	    Intent i = new Intent();
	    i.setAction(ACTION);
	    i.putExtra(ACTION_EXTRA_REGISTER_FOR_NOTIFICATION, b);
	    this.sendBroadcast(i);
	}

	public void unRegisterForScannerStatus() {
	    Bundle b = new Bundle();
	    b.putString("com.symbol.datawedge.api.APPLICATION_NAME", "com.dwapi.dwnotifiation");
	    b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE", NOTIFICATION_TYPE_SCANNER_STATUS);
	    Intent i = new Intent();
	    i.setAction(ACTION);
	    i.putExtra(ACTION_EXTRA_UNREGISTER_FOR_NOTIFICATION, b);
	    this.sendBroadcast(i);
	}

	public void switchToProfile(){
	    Intent i = new Intent();
	    i.setAction(ACTION);
	    i.putExtra("com.symbol.datawedge.api.SWITCH_TO_PROFILE","Launcher");
	    this.sendBroadcast(i);
	}

	public void scanToggle(){
	    Intent i = new Intent();
	    i.setAction(ACTION);
	    i.putExtra("com.symbol.datawedge.api.SOFT_SCAN_TRIGGER","TOGGLE_SCANNING");
	    this.sendBroadcast(i);
	}


### Delay code 
Execution of the soft scan trigger command should be sufficiently delayed to enable the scanner to complete existing tasks before being asked to perform another. As an alternative to scanner status notification (explained above), delay code similar to that shown below could be used:

	// SAMPLE DELAY CODE
	int triggerDelay = 250; // delay in milliseconds

	Handler handler = new Handler();
	handler.postDelayed(new Runnable() {
	        public void run() {
	                // for clarity, assume the following method contains the code in the example above
	                startSoftScan();
	        }
	}, triggerDelay);

**Note**: While generally effective for this purpose, delay code can work inconsistently across devices. 

### Generate and receive results
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

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
