<h2 id="get_config">GET_CONFIG</h2>
<p>Introduced in DataWedge 6.5. </p>
<p>Gets the <code>PARAM_LIST</code> settings in the specified Profile, returned as a set of value pairs. </p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.GET_CONFIG", "&lt;profile name&gt;");
</code></pre>
<h2 id="parameters">Parameters</h2>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.GET</em>CONFIG"</p>
<p><strong>EXTRA VALUE</strong> [Bundle]: "&lt;Profile name&gt;", "&lt;Plug-in&gt;"</p>
<p><strong>SCANNER_IDENTIFIER</strong> [String]: in each scanner info bundle for each scanner supported in the device. Both parameters are supported in DataWedge 6.6 and higher; the scanner identifier value takes precedence if an index also is referenced in the code.  </p>
<p><code>scanner_selection_by_identifier</code> [string]- takes a value from the list of Scanner Identifiers below:</p>
<p><strong>Possible values</strong>:</p>
<ul>
<li><strong>AUTO</strong> - Automatic scanner selection</li>
<li><strong>INTERNAL_IMAGER</strong> - Built-in imager scanner</li>
<li><strong>INTERNAL_LASER</strong> - Built-in laser scanner</li>
<li><strong>INTERNAL_CAMERA</strong> - Built-in camera scanner</li>
<li><strong>SERIAL_SSI</strong> - Pluggable Z-back scanner for ET50/ET55 </li>
<li><strong>BLUETOOTH_SSI</strong> - RS507 Bluetooth scanner</li>
<li><strong>BLUETOOTH_RS6000</strong> - RS6000 Bluetooth scanner</li>
<li><strong>BLUETOOTH_DS3678</strong> - DS3678 Bluetooth scanner</li>
<li><strong>PLUGABLE_SSI</strong> - Serial SSI scanner RS429 (for use with WT6000)</li>
<li><strong>PLUGABLE<em>SSI</em>RS5000</strong> - Serial SSI scanner RS5000 (for use with WT6000)</li>
<li><strong>USB<em>SSI</em>DS3608</strong> - DS3608 pluggable USB scanner</li>
</ul>
<h2 id="returnvalues">Return Values</h2>
<p>Returns a nested bundle with the Profile name, status and a Profile config bundle containing the param list as a bundle.  </p>
<p><strong>EXTRA NAME</strong>: "com.symbol.datawedge.api.GET<em>CONFIG</em>RESULT" </p>
<p><strong>BUNDLE</strong>: &lt;mainbundle&gt; (see parameters below)</p>
<h3 id="mainbundle">Main Bundle</h3>
<p>The main Get<em>Result</em>Config bundle contains the following properties:</p>
<p><strong>PROFILE_NAME</strong> [String]: Name of the Profile being queried</p>
<p><strong>PROFILE_ENABLED</strong> [String]: True/False</p>
<p><strong>PLUGIN_CONFIG</strong> [bundle]: Nested bundle with the following properties:</p>
<ul>
<li><strong>PLUGIN_NAME</strong> [String]: Name of the Plug-in being reported (i.e. Barcode)  </li>
<li><strong>PARAM_LIST</strong> [Bundle]: Nested List of name-value pairs:</li>
<li>current-device-index, 0</li>
<li>Aztec, True</li>
<li>Canadian_Postal, False</li>
<li>Code11, Null (resets to default)</li>
<li>Picklist, HARDWARE</li>
<li>AimType, PRESS<em>AND</em>RELEASE</li>
<li>… (etc.)</li>
</ul>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters.</p>
<h2 id="examplecode">Example Code</h2>
<pre><code>// SENDING THE INTENT
    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.GET_CONFIG", "");
    this.sendBroadcast(i);

// RECEIVING THE RESULT
    private BroadcastReceiver myBroadcastReceiver = new BroadcastReceiver(){

        @Override
        public void onReceive(Context context, Intent intent){

            Bundle extras = getIntent().getExtras();
            if (intent.hasExtra("com.symbol.datawedge.api.GET_CONFIG")){
                String[] profilesList = intent.getStringArrayExtra("com.symbol.datawedge.api.GET_CONFIG_RESULT")
</code></pre>
<h3 id="getplugins">Get Plug-ins</h3>
<pre><code>// SENDING THE INTENT
    Bundle bMain = new Bundle();
    bMain.putString("PROFILE_NAME", "Profile0 (default)");
    Bundle bConfig = new Bundle();
    ArrayList&lt;String&gt; pluginName = new ArrayList&lt;&gt;();
    pluginName.add("BARCODE");

// pluginName.add("INTENT"); to add more plugins

    bConfig.putStringArrayList("PLUGIN_NAME", pluginName);
    bMain.putBundle("PLUGIN_CONFIG", bConfig);

    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bMain);
    this.sendBroadcast(i);

// RECEIVING THE RESULT
    private BroadcastReceiver mBroadcastReceiver = new BroadcastReceiver() {
    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")) {
        Bundle result = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG");
        Set&lt;String&gt; keys = result.keySet();
        for (String key : keys) {
            if (!key.equalsIgnoreCase("PLUGIN_CONFIG")) {
                Log.d("DWScannerConfig", "DWGetConfig::level-1: " + key + " : " + result.getString(key));
            } else {
                ArrayList&lt;Bundle&gt; bundleArrayList  = result.getParcelableArrayList("PLUGIN_CONFIG");
                for(Bundle configBundle:bundleArrayList){
                    Set&lt;String&gt; keys2 = configBundle.keySet();
                    for (String key2 : keys2) {
                        if (!key2.equalsIgnoreCase("PARAM_LIST")) {
                        } else {
                            Bundle params = configBundle.getBundle("PARAM_LIST");
                            Set&lt;String&gt; keys3 = params.keySet();
                            for (String key3 : keys3) {
                            //TODO consume the params
                            }
                        }
                    }
                }
            }
        }
    }
}
};
</code></pre>
<h3 id="getappassociations">Get app associations</h3>
<pre><code>// SENDING THE INTENT
    selectedProfileName = "DWDemo";
    Bundle bConfig = new Bundle();
    bConfig.putString("PROFILE_NAME", selectedProfileName);
    bConfig.putString("APP_LIST", "");//empty

    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bConfig);
    this.sendBroadcast(i);

// RECEIVING THE RESULT
    private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            String action = intent.getAction();
            Log.d(TAG, "Action: " + action);

            if(action.equals("com.symbol.datawedge.api.RESULT_ACTION")){

                Bundle b = intent.getExtras();

                // getConfig result
                if(intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")) {

                    Bundle res = b.getBundle("com.symbol.datawedge.api.RESULT_GET_CONFIG");
                    if(!res.isEmpty()) {
                        String profileName = res.getString("PROFILE_NAME");
                        Log.d(TAG, "GET_CONFIG profileName: " + profileName);
                        ArrayList&lt;Bundle&gt; appList = res.getParcelableArrayList("APP_LIST");
                        if(appList == null){
                            Log.d(TAG,"Profile information is not found for "+profileName);
                        }else if(appList.size() == 0){
                            Log.d(TAG,"Profile "+profileName+" has no associated information");
                        }else {
                            for(Bundle b1 :appList ){
                                Log.d(TAG,b1.getString("PACKAGE_NAME")+":"+b1.getStringArrayList("ACTIVITY_LIST"));
                            }
                        }
                    }
                }
            }
        }
    };
</code></pre>
<h3 id="getscannerstatus">Get scanner status</h3>
<pre><code>// SENDING THE INTENT
    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.GET_SCANNER_STATUS","STANDARD");
    i.putExtra("SEND_RESULT","true");
    i.putExtra("com.symbol.datawedge.api.RESULT_CATEGORY","android.intent.category.DEFAULT");
    this.sendBroadcast(i);

// RECEIVING THE RESULT
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
                    Set&lt;String&gt; keys = bundle.keySet();
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
</code></pre>
<h3 id="getscannerdetails">Get scanner details</h3>
<pre><code>//Bundle extras = intent.getExtras();

if (intent.hasExtra(RESULT_ACTION_EXTRA_GET_CONFIG)) {
    Bundle results = intent.getBundleExtra(RESULT_ACTION_EXTRA_GET_CONFIG);
    if(results!=null){
        if(results.containsKey(BUNDLE_EXTRA_PLUGIN_CONFIG)){
            ArrayList&lt;Bundle&gt; list = (ArrayList&lt;Bundle&gt;)results.get(BUNDLE_EXTRA_PLUGIN_CONFIG);
            Bundle x = new Bundle();

            if(list!=null){
                for(Bundle it : list){
                    if(it.containsKey(BUNDLE_EXTRA_PARAM_LIST)){
                        Bundle b =(Bundle)it.get(BUNDLE_EXTRA_PARAM_LIST);
                        String sEnabled = b.getString("scanner_input_enabled");
                        String sSelection = b.getString("scanner_selection");
                        String sSelectionId = b.getString("scanner_selection_by_identifier");
                        String sType = b.getString("scanner_type");

                        Log.d(TAG,"scanner_selection : "+sSelection);
                        Log.d(TAG,"scanner_selection_by_identifier  : "+sSelectionId);
                    }
                }
            }
        }
    }
}
</code></pre>
<h3 id="getintercharactersettings">Get inter-character settings</h3>
<pre><code>private Integer ctrlCharacterDelayValue;
private Integer genericCharacterDelayValue;
private Boolean flagExtendedASCIIOnly;

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    registerReceivers();
    ctrlCharacterDelayValue = null;
    genericCharacterDelayValue = null;
    flagExtendedASCIIOnly = null;
}

private void registerReceivers() {
    IntentFilter filter = new IntentFilter();
    filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
    filter.addCategory(Intent.CATEGORY_DEFAULT);
    registerReceiver(broadcastReceiver, filter);
}

@Override
protected void onDestroy() {
    super.onDestroy();
    unregisterReceiver(broadcastReceiver);
}

//Get configuration 
public void getKeyStrokeConfiguration(View arg){
    Bundle bMain = new Bundle();
    bMain.putString("PROFILE_NAME","Profile0 (default)");

    Bundle bConfig = new Bundle();
    bConfig.putString("PLUGIN_NAME","KEYSTROKE");

    bMain.putBundle("PLUGIN_CONFIG", bConfig);
    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bMain);
    this.sendBroadcast(i);
}

//broadcast receiver
private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();
        Log.d(TAG, "#DataWedge-APP# Action: " + action);


    //result of get config
            if(intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")){
                Bundle bundle = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG");
                if(bundle != null &amp;&amp; !bundle.isEmpty()){
                    String profileName = bundle.getString("PROFILE_NAME");
                    String profileEnabled = bundle.getString("PROFILE_ENABLED");
                    ArrayList&lt;Bundle&gt; configBundleList = bundle.getParcelableArrayList("PLUGIN_CONFIG");
                    if(configBundleList!=null) {
                        for (Bundle configBundle : configBundleList) {
                            if (configBundle.getString("PLUGIN_NAME").equalsIgnoreCase("KEYSTROKE")) {
                                Bundle paramBundle = configBundle.getBundle("PARAM_LIST");
                                String keyStrokePluginEnabled = paramBundle.getString("keystroke_output_enabled");
                                String mExtendedAsciiDelay = paramBundle.getString("keystroke_delay_extended_ascii");
                                String mCtrlDelay = paramBundle.getString("keystroke_delay_control_chars");
                                String actionKeyChar = paramBundle.getString("keystroke_action_char");

                                Log.d(TAG, " ProfileName :" + profileName);
                                Log.d(TAG, " Profile enabled :" + profileEnabled);
                                Log.d(TAG, " Plugin enabled :" + keyStrokePluginEnabled);
                                Log.d(TAG, " Ctrl Char Delay :" + mCtrlDelay);
                                Log.d(TAG, " Character Delay :" + mExtendedAsciiDelay);
                                Log.d(TAG, " ActionKey Char :" + actionKeyChar);
                            }
                        }
                    }
                }
            }//end get config

    }//end onRecieve
};
</code></pre>
<h3 id="getserialinputconfig">Get SERIAL input config</h3>
<pre><code>final String RESULT_ACTION = "com.symbol.datawedge.api.RESULT_ACTION";
final static String DEFAULT_CATEGORY = "android.intent.category.DEFAULT";

TextView status;

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    IntentFilter filter = new IntentFilter();
    filter.addAction(RESULT_ACTION);
    filter.addCategory(DEFAULT_CATEGORY);
    registerReceiver(dwResultReciever, filter);
}

public void btnGetOnClick(View view) {
    status.setText("");

    //MAIN BUNDLE PROPERTIES
    Bundle bMain = new Bundle();
    bMain.putString("PROFILE_NAME", "Profile0 (default)");
    //bMain.putString("PROFILE_NAME", "DWDemo");

    //PLUGIN_CONFIG BUNDLE PROPERTIES
    Bundle bConfig = new Bundle();

    ArrayList&lt;String&gt; pluginName = new ArrayList&lt;&gt;();
    pluginName.add("SERIAL");

    bConfig.putStringArrayList("PLUGIN_NAME", pluginName);
    bMain.putBundle("PLUGIN_CONFIG", bConfig);

    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("SEND_RESULT", "true");
    i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bMain);
    this.sendBroadcast(i);
}

private BroadcastReceiver dwResultReciever = new BroadcastReceiver() {
    @Override
    public void onReceive(Context context, Intent intent) {
        String text = "";
        if (intent.getAction().equalsIgnoreCase("com.symbol.datawedge.api.RESULT_ACTION")) {
            if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")) {
                Bundle bundle = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG");
                if (bundle != null &amp;&amp; !bundle.isEmpty()) {
                    String profileName = bundle.getString("PROFILE_NAME");
                    String profileEnabled = bundle.getString("PROFILE_ENABLED");
                    ArrayList&lt;Bundle&gt; configBundleList = bundle.getParcelableArrayList("PLUGIN_CONFIG");
                    if (configBundleList != null) {
                        for (Bundle configBundle : configBundleList) {
                            if (configBundle.getString("PLUGIN_NAME").equalsIgnoreCase("SERIAL")) {
                                Parcelable[] deviceBundleList = configBundle.getParcelableArray("DEVICE_LIST");

                                for (Parcelable parcelableDevice : deviceBundleList) {
                                    Bundle device = (Bundle) parcelableDevice;

                                    Log.d("TAG", "#Serial# " + device.getString("serial_port_id"));
                                    Log.d("TAG", "#Serial# " + device.getString("serial_input_enabled"));
                                    Log.d("TAG", "#Serial# " + device.getString("serial_baudrate"));
                                    Log.d("TAG", "#Serial# " + device.getString("serial_databits"));
                                    Log.d("TAG", "#Serial# " + device.getString("serial_parity"));
                                    Log.d("TAG", "#Serial# " + device.getString("serial_stopbits"));
                                    Log.d("TAG", "#Serial# " + device.getString("serial_flow"));
                                }
                            }
                        }
                    }
                }
            }
            status.setText("Status:\n" + text);
        }
    }
};
</code></pre>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>
<hr />