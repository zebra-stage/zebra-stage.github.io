<h2 id="soft_scan_trigger">SOFT<em>SCAN</em>TRIGGER</h2>
<p>Used to start, stop or toggle a software scanning trigger. </p>
<blockquote>
  <p><strong>Functional only when Barcode Input is enabled in the active Profile</strong>.</p>
</blockquote>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.SOFT_SCAN_TRIGGER", "&lt;parameter&gt;");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.SOFT</em>SCAN_TRIGGER"</p>
<p><strong>&lt;parameter&gt;</strong>: The parameter as a string, using any of the following: </p>
<ul>
<li><p><code>START_SCANNING</code> - starts scanning when triggered</p></li>
<li><p><code>STOP_SCANNING</code> - stops or interrupts scanning when triggered</p></li>
<li><p><code>TOGGLE_SCANNING</code> - toggles between <code>START_SCANNING</code> and <code>STOP_SCANNING</code> when triggered</p></li>
</ul>
<h3 id="resultcodes">Result Codes</h3>
<p>DataWedge returns the following error codes if the app includes the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> to enable the app to get results using the DataWedge result intent mechanism. See <a href="#example">Example</a>, below. </p>
<ul>
<li><strong>DATAWEDGE_DISABLED -</strong> FAILURE</li>
<li><strong>INPUT<em>NOT</em>ENABLED -</strong> FAILURE</li>
<li><strong>PARAMETER_INVALID -</strong> FAILURE</li>
<li><strong>PROFILE_DISABLED -</strong> FAILURE </li>
</ul>
<p>Also see the <a href="../resultinfo">Result Codes guide</a> for more information.  </p>
<h3 id="returnvalues">Return Values</h3>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters.</p>
<h2 id="examplecode">Example Code</h2>
<pre><code>// define action and data strings
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
</code></pre>
<h3 id="samplescanner_statusnotification">Sample 'SCANNER_STATUS' Notification</h3>
<p>Soft scan trigger commands might be ignored if the scanner is busy at the time a command is executed. <strong>Zebra recommends using the</strong> <code>SCANNER_STATUS</code> <strong>parameter of the <a href="../registerfornotification">NOTIFICATION API</a> to signal that the scanner is ready</strong>. Use the sample code below:</p>
<pre><code>@Override
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
                            if(status!=null &amp;&amp; status.equals(SCAN_STATUS_WAITING)){
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
</code></pre>
<h3 id="delaycode">Delay code</h3>
<p>Execution of the soft scan trigger command should be sufficiently delayed to enable the scanner to complete existing tasks before being asked to perform another. As an alternative to scanner status notification (explained above), delay code similar to that shown below could be used:</p>
<pre><code>// SAMPLE DELAY CODE
int triggerDelay = 250; // delay in milliseconds

Handler handler = new Handler();
handler.postDelayed(new Runnable() {
        public void run() {
                // for clarity, assume the following method contains the code in the example above
                startSoftScan();
        }
}, triggerDelay);
</code></pre>
<p><strong>Note</strong>: While generally effective for this purpose, delay code can work inconsistently across devices. </p>
<h3 id="generateandreceiveresults">Generate and receive results</h3>
<p>Command and configuration intent parameters determine whether to send result codes (disabled by default). When using <code>SEND_RESULT</code>, the <code>COMMAND_IDENTIFIER</code> is used to match the result code with the originating intent. Sample usage of these parameters is shown below. </p>
<p><strong>Note: Modify this generic code to match the API being used</strong>.  </p>
<pre><code>// send the intent
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
            Set&lt;String&gt; keys = bundle.keySet();
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
</code></pre>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>