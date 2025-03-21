<h2 id="enumerate_scanners">ENUMERATE_SCANNERS</h2>
<p>Introduced in DataWedge 6.3. </p>
<p>Generates a numbered list (index) of scanners available on the device. </p>
<p><strong>IMPORTANT</strong>: The scanner index is not fixed for all devices. It varies depending on the number of supported internal and/or external scanners installed and/or connected to the device at the time the index is generated. </p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.ENUMERATE_SCANNERS", "");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ENUMERATE_SCANNERS"</p>
<h3 id="returnvalues">Return Values</h3>
<p>The enumerated list of scanners is returned via the broadcast intent <code>com.symbol.datawedge.api.ACTION_ENUMERATEDSCANNERLIST</code>. The list of scanners is returned as a string array (see example below).</p>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters. </p>
<h3 id="example">Example</h3>
<pre><code>// First send the intents to enumerate the available scanners on the device:
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
context.this.sendBroadcast(i);

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
    ArrayList&lt;Bundle&gt; scannerList = (ArrayList&lt;Bundle&gt;) intent.getSerializableExtra("com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS");
if((scannerList != null) &amp;&amp; (scannerList.size() &gt; 0)) {
    for ( Bundle bunb: scannerList)
        Log.d(TAG,"Scanner:"+bunb.getString("SCANNER_NAME")+" Connection:"+bunb.getBoolean("SCANNER_CONNECTION_STATE")+" Index:"+bunb.getInt("SCANNER_INDEX"));
                }
            }
        }
    }
};
</code></pre>
<!--      // The following code provided by engineering on 6/26/17 [TUT-14724]
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
<h3 id="comments">Comments</h3>
<p>The scanner and its parameters are set based on the currently active Profile.</p>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>