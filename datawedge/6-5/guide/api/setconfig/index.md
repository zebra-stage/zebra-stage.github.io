<h2 id="set_config">SET_CONFIG</h2>
<p>Introduced in DataWedge 6.4.</p>
<p>Used to create, update or replace a DataWedge Profile and its settings. This API contains <a href="../overview/#nestedbundles">nested bundles</a>. To create a Profile without configuring its settings parameters, see <a href="../createprofile">CREATE_PROFILE</a>.</p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.SET_CONFIG", &lt;mainbundle&gt;);
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.SET</em>CONFIG"</p>
<p><strong>BUNDLE</strong>: &lt;mainbundle&gt; (see parameters below)</p>
<h4 id="mainbundle">MAIN BUNDLE</h4>
<p>The main SetConfig bundle includes the following properties:</p>
<ul>
<li><strong>PROFILE_NAME</strong> [String]: The name of the Profile on which to perform action(s)</li>
<li><strong>CONFIG_MODE</strong> [String]: (Default=OVERWRITE)</li>
<li><strong>CREATE<em>IF</em>NOT<em>EXIST</strong>: Creates the Profile if string in PROFILE</em>NAME is not present on device </li>
<li><strong>OVERWRITE</strong>: If Profile exists, resets all options to default, then configures specified settings</li>
<li><strong>UPDATE</strong>: Updates only specified settings</li>
<li><strong>PROFILE_ENABLED</strong> [String]: Optional; Controls whether to enable (true) or disable (false) a Profile (default=true). If not specified, no change is made to the Profile state.</li>
<li><strong>PLUGIN_CONFIG</strong> [Bundle]: A bundle (nested within the main bundle) that contains settings of a specific Plug-in</li>
<li><strong>APP_LIST</strong> [Array]: List of applications and/or activities to associate with the Profile</li>
</ul>
<h4 id="plugin_configbundle">PLUGIN_CONFIG BUNDLE</h4>
<p>The PLUGIN_CONFIG bundle is configured using the following properties:</p>
<p><strong>RESET_CONFIG</strong> [String]: Optional</p>
<ul>
<li>True (Default) – Clear any existing configuration and create a new configuration with the specified parameter values  </li>
<li>False – Update the existing values and add values not already in the configuration</li>
</ul>
<p><strong>PLUGIN_NAME</strong> [String]: Name of the Plug-in to configure. See tables below for <code>PARAM_LIST</code> values. </p>
<ul>
<li><strong>BARCODE</strong> input</li>
<li><strong>INTENT</strong> output</li>
<li><strong>KEYSTROKE</strong> output</li>
<li><strong>BDF</strong> (basic data formatting) processing</li>
</ul>
<p>To be implemented in the future: </p>
<ul>
<li>ADF (advanced data formatting) processing </li>
<li>DCP input</li>
<li>IP output</li>
<li>MSR input</li>
<li>SIMULSCAN input </li>
</ul>
<p><strong>Notes</strong>: </p>
<ul>
<li>Plug-in names are case sensitive.</li>
<li>Each intent involving a Plug-in requires a separate intent Action.   </li>
</ul>
<p><strong>PARAM_LIST</strong> [Bundle]: A parameter list bundle nested within the <code>PLUGIN_CONFIG</code> bundle. Includes the list of parameters that should be updated under the specified Plug-in. Setting an empty string in any parameter value resets that parameter to its default setting. </p>
<h4 id="param_listbundle">PARAM_LIST BUNDLE</h4>
<p>The <code>PARAM_LIST</code> bundle is configured by specifying the parameter name and value from the table below. Applies to parameters matching the <code>PLUGIN_NAME</code> specified in <code>PLUGIN_CONFIG</code> bundle. </p>
<ul>
<li><p><strong>BARCODE –</strong> Use values from the <a href="#scannerinputparameters">Scanner Input Parameters</a> table below; specify decoder and other input settings as <code>EXTRA_DATA</code> in the <code>PARAM_LIST</code> nested bundle</p></li>
<li><p><strong>BDF -</strong> Applies Basic Data Formatting rules to the acquired data. </p>
<p><code>bdf_enabled</code> [string]- true/false</p>
<p><code>bdf_prefix</code> [string]- Prefix to acquired data</p>
<p><code>bdf_suffix</code> [string]- Suffix to acquired data</p>
<p><code>bdf_send_data</code> [string]- true/false</p>
<p><code>bdf_send_hex</code> [string]- true/false</p>
<p><code>bdf_send_tab</code> [string]- true/false</p>
<p><code>bdf_send_enter</code> [string]- true/false</p></li>
<li><p><strong>INTENT -</strong> Use values as indicated below: </p>
<p><code>intent_output_enabled</code> [string]- true/false</p>
<p><code>intent_action</code> [string]</p>
<p><code>intent_category</code> [string] </p>
<p><code>intent_delivery</code> [string]- Use "0" for Start Activity, "1" for Start Service, "2" for Broadcast</p></li>
</ul>
<!-- `intent_flag_receiver_foreground` [string] &lt;true/false&gt; -->
<ul>
<li><strong>KEYSTROKE -</strong> Use values from the <a href="#keystrokeoutputparameters">Keystroke Output Parameters</a> table below; specify output settings as <code>EXTRA_DATA</code> in the <code>PARAM_LIST</code> nested bundle</li>
</ul>
<h4 id="app_list">APP_LIST</h4>
<p>An array of bundles that contains a set of <code>PACKAGE_NAMES</code> and an <code>ACTIVITY_LIST</code> to be associated with the Profile. </p>
<h5 id="app_listbundle">APP_LIST BUNDLE</h5>
<p>Contains the following properties:</p>
<p><strong>PACKAGE_NAME</strong> [String]: ex: "com.symbol.emdk.barcodesample1" or a wildcard (&#42;) character </p>
<p><strong>ACTIVITY_LIST</strong> [List]: A list of activities for the <code>PACKAGE_NAME</code>. Wildcard (&#42;) character also supported.</p>
<h3 id="resultcodes">Result Codes</h3>
<p>DataWedge will return the following error codes if the app includes the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> to enable the app to get results using the DataWedge result intent mechanism. See <a href="#example">Example</a>, below. </p>
<ul>
<li><strong>PLUGIN<em>NOT</em>SUPPORTED -</strong> FAILURE</li>
<li><strong>BUNDLE_EMPTY -</strong> FAILURE </li>
<li><strong>PROFILE<em>NAME</em>EMPTY -</strong> FAILURE</li>
<li><strong>PROFILE<em>NOT</em>FOUND -</strong> FAILURE</li>
<li><strong>PLUGIN<em>BUNDLE</em>INVALID -</strong> FAILURE</li>
<li><strong>PARAMETER_INVALID -</strong> FAILURE </li>
<li><strong>APP<em>ALREADY</em>ASSOCIATED -</strong> FAILURE</li>
<li><strong>OPERATION<em>NOT</em>ALLOWED -</strong> FAILURE</li>
</ul>
<p>Also see the <a href="../resultinfo">Result Codes guide</a> for more information.  </p>
<h3 id="returnvalues">Return Values</h3>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters</p>
<h2 id="examplecode">Example Code</h2>
<h3 id="nestedbundles">Nested bundles</h3>
<pre><code>// MAIN BUNDLE PROPERTIES
    Bundle bMain = new Bundle();
    bMain.putString("PROFILE_NAME","Profile12");            // &lt;- "Profile12" is a bundle
    bMain.putString("PROFILE_ENABLED","true");              // &lt;- that will be enabled
    bMain.putString("CONFIG_MODE","CREATE_IF_NOT_EXIST");   // &lt;- or created if necessary.

// PLUGIN_CONFIG BUNDLE PROPERTIES
    Bundle bConfig = new Bundle();
    bConfig.putString("PLUGIN_NAME","BARCODE");
    bConfig.putString("RESET_CONFIG","true"); 


// PARAM_LIST BUNDLE PROPERTIES
    Bundle bParams = new Bundle();
    bParams.putString("scanner_selection","auto");
    bParams.putString("scanner_input_enabled","true");
// 
// NOTE: The "scanner_selection" parameter (above) supports "auto" selection
// --OR-- the assignment of a scanner device index, which is obtained by 
// using the ENUMERATE_SCANNERS API.  
//
//      Syntax for scanner index:
//
//              Bundle bParams = new Bundle();
//      diff--&gt; bParams.putString("current-device-id","0");
//              bParams.putString("scanner_input_enabled","true");
//
// 
// NEST THE BUNDLE "bParams" WITHIN THE BUNDLE "bConfig"
    bConfig.putBundle("PARAM_LIST", bParams);

// THEN NEST THE "bConfig" BUNDLE WITHIN THE MAIN BUNDLE "bMain"
    bMain.putBundle("PLUGIN_CONFIG", bConfig);

// CREATE APP_LIST BUNDLES (apps and/or activities to be associated with the Profile)
    Bundle bundleApp1 = new Bundle();
    bundleApp1.putString("PACKAGE_NAME","com.symbol.emdk.simulscansample1");
    bundleApp1.putStringArray("ACTIVITY_LIST", new String[]{
            "com.symbol.emdk.simulscansample1.DeviceControl",
            "com.symbol.emdk.simulscansample1.MainActivity",
            "com.symbol.emdk.simulscansample1.ResultsActivity.*",
            "com.symbol.emdk.simulscansample1.ResultsActivity2",
            "com.symbol.emdk.simulscansample1.SettingsFragment1"});

    Bundle bundleApp2 = new Bundle();
    bundleApp2.putString("PACKAGE_NAME","com.example.intents.datawedgeintent");
    bundleApp2.putStringArray("ACTIVITY_LIST", new String[]{
            "com.example.intents.datawedgeintent.DeviceControl",
            "com.example.intents.datawedgeintent.MainActivity",
            "com.example.intents.datawedgeintent.ResultsActivity",
            "com.example.intents.datawedgeintent.SettingsFragment1"});

    Bundle bundleApp3 = new Bundle();
    bundleApp3.putString("PACKAGE_NAME","*");
    bundleApp3.putStringArray("ACTIVITY_LIST", new String[]{"*"});

    Bundle bundleApp4 = new Bundle();
    bundleApp4.putString("PACKAGE_NAME","com.symbol.myzebraapp");
    bundleApp4.putStringArray("ACTIVITY_LIST", new String[]{"*"});

// NEXT APP_LIST BUNDLE(S) INTO THE MAIN BUNDLE
    bMain.putParcelableArray("APP_LIST", new Bundle[]{
            bundleApp1
            ,bundleApp2
            ,bundleApp3
            ,bundleApp4
    });

    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.SET_CONFIG", bMain);

    this.sendBroadcast(i);
</code></pre>
<h3 id="setkeystrokeoutput">Set KEYSTROKE Output</h3>
<pre><code>@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    registerReceivers();
}

@Override
protected void onResume() {
    super.onResume();
    setKeystrokeOutputPluginConfiguration();
}

private void registerReceivers() {
    IntentFilter filter = new IntentFilter();
    filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
    filter.addCategory("android.intent.category.DEFAULT");
    registerReceiver(datawedgeKeystrokeNIntentStatusBR, filter);
}

private BroadcastReceiver datawedgeKeystrokeNIntentStatusBR = new BroadcastReceiver() {
    @Override
    public void onReceive(Context context, Intent intent) {
        String command = intent.getStringExtra("COMMAND").equals("") ? "EMPTY" : intent.getStringExtra("COMMAND");
        String commandIdentifier = intent.getStringExtra("COMMAND_IDENTIFIER").equals("") ? "EMPTY" : intent.getStringExtra("COMMAND_IDENTIFIER");
        String result = intent.getStringExtra("RESULT").equals("") ? "EMPTY" : intent.getStringExtra("RESULT");

        Bundle bundle;
        String resultInfo = "";
        if (intent.hasExtra("RESULT_INFO")) {
            bundle = intent.getBundleExtra("RESULT_INFO");
            Set&lt;String&gt; keys = bundle.keySet();
            for (String key : keys) {
                resultInfo += key + ": " + bundle.getString(key) + "\n";
            }
        }

         String text="\n"+"Command:      " + command + "\n" +
                          "Result:       " + result + "\n" +
                          "Result Info:  " + resultInfo + "\n" +
                          "CID:          " + commandIdentifier;

        Log.d("TAG”,text);
    }
};

public void setKeystrokeOutputPluginConfiguration() {

    Bundle configBundle = new Bundle();
    configBundle.putString("PROFILE_NAME","UserProfile");
    configBundle.putString("PROFILE_ENABLED","true");
    configBundle.putString("CONFIG_MODE","CREATE_IF_NOT_EXIST");

    Bundle bConfig = new Bundle();

    bConfig.putString("PLUGIN_NAME", "KEYSTROKE");
    Bundle bParams = new Bundle();
    bParams.putString("keystroke_output_enabled","true");
    bParams.putString("keystroke_action_char","9"); // 0, 9 , 10, 13
    bParams.putString("keystroke_delay_extended_ascii","500");
    bParams.putString("keystroke_delay_control_chars","800");
    bConfig.putBundle("PARAM_LIST", bParams);

    configBundle.putBundle("PLUGIN_CONFIG", bConfig);

    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.SET_CONFIG", configBundle);
    i.putExtra("SEND_RESULT", "true");
    i.putExtra("COMMAND_IDENTIFIER", "KEYSTROKE_API");
    this.sendBroadcast(i);
}

@Override
protected void onDestroy() {
    super.onDestroy();
    unregisterReceiver(datawedgeKeystrokeNIntentStatusBR);
}
</code></pre>
<h3 id="setintentoutput">Set INTENT Output</h3>
<pre><code>@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    registerReceivers();
}

@Override
protected void onResume() {
    super.onResume();
    setIntentOutputPluginConfiguration();
}

private void registerReceivers() {
    IntentFilter filter = new IntentFilter();
    filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
    filter.addCategory("android.intent.category.DEFAULT");
    registerReceiver(datawedgeKeystrokeNIntentStatusBR, filter);
}

private BroadcastReceiver datawedgeKeystrokeNIntentStatusBR = new BroadcastReceiver() {
    @Override
    public void onReceive(Context context, Intent intent) {
        String command = intent.getStringExtra("COMMAND").equals("") ? "EMPTY" : intent.getStringExtra("COMMAND");
        String commandIdentifier = intent.getStringExtra("COMMAND_IDENTIFIER").equals("") ? "EMPTY" : intent.getStringExtra("COMMAND_IDENTIFIER");
        String result = intent.getStringExtra("RESULT").equals("") ? "EMPTY" : intent.getStringExtra("RESULT");

        Bundle bundle;
        String resultInfo = "";
        if (intent.hasExtra("RESULT_INFO")) {
            bundle = intent.getBundleExtra("RESULT_INFO");
            Set&lt;String&gt; keys = bundle.keySet();
            for (String key : keys) {
                resultInfo += key + ": " + bundle.getString(key) + "\n";
            }
        }
        String text ="\n" + "Command:      " + command + "\n" +
                            "Result:       " + result + "\n" +
                            "Result Info:  " + resultInfo + "\n" +
                            "CID:          " + commandIdentifier;
        Log.d("TAG”,text);
    }
};

public void setIntentOutputPluginConfiguration() {

    Bundle bMain = new Bundle();
    Bundle bConfig = new Bundle();
    Bundle bParams = new Bundle();

    bParams.putString("intent_output_enabled","true");
    bParams.putString("intent_action","com.symbol.dwudiusertokens.udi");
    bParams.putString("intent_category","zebra.intent.dwudiusertokens.UDI");
    bParams.putInt("intent_delivery",2); //Use "0" for Start Activity, "1" for Start Service, "2" for Broadcast

    bConfig.putString("PLUGIN_NAME", "INTENT");
    bConfig.putString("RESET_CONFIG","false");
    bConfig.putBundle("PARAM_LIST", bParams);

    bMain.putBundle("PLUGIN_CONFIG", bConfig);
    bMain.putString("PROFILE_NAME","UserProfile");
    bMain.putString("PROFILE_ENABLED","true");
    bMain.putString("CONFIG_MODE","CREATE_IF_NOT_EXIST");

    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.SET_CONFIG",bMain);
    i.putExtra("SEND_RESULT", "true");
    i.putExtra("COMMAND_IDENTIFIER", "INTENT_API");
    this.sendBroadcast(i);
}

@Override
protected void onDestroy() {
    super.onDestroy();
    unregisterReceiver(datawedgeKeystrokeNIntentStatusBR);
}
</code></pre>
<h3 id="setbdfprocessing">Set BDF processing</h3>
<p>Process Plug-ins manipulate the acquired data in a specified way before sending it to the associated app via the Output Plug-in. <a href="../../process/bdf">About BDF</a>. <a href="../../process/adf">About ADF</a>. </p>
<pre><code>// Main bundle properties
    Bundle bMain = new Bundle();
    bMain.putString("PROFILE_NAME","Profile12");
    bMain.putString("PROFILE_ENABLED","true");
    bMain.putString("CONFIG_MODE","CREATE_IF_NOT_EXIST");

// plugin_config bundle properties
    Bundle bConfig = new Bundle();
    bConfig.putString("PLUGIN_NAME","BDF");
    bConfig.putString("RESET_CONFIG","true");
    bConfig.putString("OUTPUT_PLUGIN_NAME","KEYSTROKE");

// param_list bundle properties
    Bundle bParams = new Bundle();
    bParams.putString("bdf_enabled","true");
    bParams.putString("bdf_prefix","AAA");
    bParams.putString("bdf_send_enter","true");

    bConfig.putBundle("PARAM_LIST", bParams);

    bMain.putBundle("PLUGIN_CONFIG", bConfig);

    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.SET_CONFIG", bMain);
    this.sendBroadcast(i);
</code></pre>
<h3 id="setgetresultcodes">Set/Get Result Codes</h3>
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
<h2 id="scannerinputparameters">Scanner Input Parameters</h2>
<p><strong>Important</strong>: Support for decode parameters can vary depending on the selected scanning device. For device-specific support notes, please refer to the <a href="https://www.zebra.com/us/en/sitesearch.html?q=integrator">Integrator Guide</a> that accompanied the unit. </p>
<blockquote>
  <p>All parameters are case sensitive.</p>
</blockquote>
<table class="c19">
<tbody>
<tr class="c6" bgcolor="#e0e0eb">
<td class="c20" colspan="1" rowspan="1">
<p class="c1">
<span class="c9">
<strong>Param name</strong>
</span>
</p>
</td>
<td class="c14" colspan="1" rowspan="1">
<p class="c1"> <span class="c9"><strong>Param values</strong></span></p>
</td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">scanner_input_enabled</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">trigger-wakeup</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">scanner_selection</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">auto</span></p><p class="c1"><span class="c0">0&ndash;n (valid scanner index from <a href="../enumeratescanners">ENUMERATE_SCANNERS API</a>)</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upca</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce0</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_ean13</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_ean8</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_gs1_databar</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_gs1_databar_lim</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_gs1_databar_exp</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_datamatrix</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_qrcode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_pdf417</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_composite_ab</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_composite_c</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_microqr</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_aztec</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_maxicode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_micropdf</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_uspostnet</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_usplanet</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_uk_postal</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_japanese_postal</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_australian_postal</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_canadian_postal</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_dutch_postal</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_us4state</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_us4state_fics</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code93</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_trioptic39</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_d2of5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_chinese_2of5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>

<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_korean_3of5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_tlc39</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_mailmark</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_hanxin</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_signature</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_webcode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upca_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upca_preamble</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Preamble None</span></p><p class="c1"><span class="c0">1 - Preamble Sys Char</span></p><p class="c1"><span class="c0">2 - Preamble Country and Sys Char</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce0_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce0_preamble</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Preamble None</span></p><p class="c1"><span class="c0">1 - Preamble Sys Char</span></p><p class="c1"><span class="c0">2 - Preamble Country and Sys Char</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce0_convert_to_upca</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_ean8_convert_to_ean13</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_enable_plain</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_enable_ean128</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_enable_isbt128</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_isbt128_concat_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Concat Mode Never</span></p><p class="c1"><span class="c0">1 - Concat Mode Always</span></p><p class="c1"><span class="c0">2 - Concat Mode Auto</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_check_isbt_table</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c10"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Security Level 0</span></p><p class="c1"><span class="c0">1 - Security Level 1</span></p><p class="c1"><span class="c0">2 - Security Level 2</span></p><p class="c1"><span class="c0">3 - Security Level 3</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">code128_enable_marginless_decode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">code128_ignore_fnc4</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_verify_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_full_ascii</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_convert_to_code32</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_report_code32_prefix</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Security Level 0</span></p><p class="c1"><span class="c0">1 - Security Level 1</span></p><p class="c1"><span class="c0">2 - Security Level 2</span></p><p class="c1"><span class="c0">3 - Security Level 3</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">code39_enable_marginless_decode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - No Check Digit</span></p><p class="c1"><span class="c0">1 - USS Check Digit</span></p><p class="c1"><span class="c0">2 - OPCC Check Digit</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_itf14_convert_to_ean13</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Security Level 0</span></p><p class="c1"><span class="c0">1 - Security Level 1</span></p><p class="c1"><span class="c0">2 - Security Level 2</span></p><p class="c1"><span class="c0">3 - Security Level 3</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">i20f5_enable_marginless_decode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_gs1_lim_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">1 - Security Level 1</span></p><p class="c1"><span class="c0">2 - Security Level 2</span></p><p class="c1"><span class="c0">3 - Security Level 3</span></p><p class="c1"><span class="c0">4 - Security Level 4</span></p></td></tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_composite_ab_ucc_link_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Link Flag Ignored</span></p><p class="c1"><span class="c0">1 - Always Linked</span></p><p class="c1"><span class="c0">2 - Auto Discriminate</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_uk_postal_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar_clsi_editing</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar_notis_editing</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - One Check Digit</span></p><p class="c1"><span class="c0">1 - Two Check Digit</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_check_digit_scheme</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Mod-11-10</span></p><p class="c1"><span class="c0">1 - Mod-10-10</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code93_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code93_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code93_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_trioptic39_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_d2of5_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_d2of5_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_d2of5_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11_verify_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - No Check Digit</span></p><p class="c1"><span class="c0">1 - 1 Check Digit</span></p><p class="c1"><span class="c0">2 - 2 Check Digits</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_hanxin_inverse</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Disable</span></p><p class="c1"><span class="c0">1 - Enable</span></p><p class="c1"><span class="c0">2 - Auto</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5_verify_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce1_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce1_preamble</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Preamble None</span></p><p class="c1"><span class="c0">1 - Preamble Sys Char</span></p><p class="c1"><span class="c0">2 - Preamble Country and Sys Char</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce1_convert_to_upca</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c10"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Level 0</span></p><p class="c1"><span class="c0">1 - Level 1</span></p><p class="c1"><span class="c0">2 - Level 2</span></p><p class="c1"><span class="c0">3 - Level 3</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_supplemental2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_supplemental5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c11" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_supplemental_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - No Supplementals</span></p><p class="c1"><span class="c0">1 - Supplemental Always</span></p><p class="c1"><span class="c0">2 - Supplemental Auto</span></p><p class="c1"><span class="c0">3 - Supplemental Smart</span></p><p class="c1"><span class="c0">4 - Supplemental 378-379</span></p><p class="c1"><span class="c0">5 - Supplemental 978-979</span></p><p class="c1"><span class="c0">6 - Supplemental 414-419-434-439</span></p><p class="c1"><span class="c0">7 - Supplemental 977</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_retry_count</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 2 to 20</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_random_weight_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_linear_decode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_bookland</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_coupon</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_coupon_report</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Old Coupon Report Mode</span></p><p class="c1"><span class="c0">1 - New Coupon Report Mode</span></p><p class="c1"><span class="c0">2 - Both Coupon Report Modes</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_ean_zero_extend</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_bookland_format</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Format ISBN-10</span></p><p class="c1"><span class="c0">1 - Format ISBN-13</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">databar_to_upc_ean</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upc_enable_marginless_decode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">aim_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">on - On</span></p><p class="c1"><span class="c0">off - Off</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">beam_timer</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;60000</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">Adaptive_Scanning</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">1 - Disable</span></p><p class="c1"><span class="c0">0 - Enable</span></p></td></tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">Beam_Width</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Narrow</span></p><p class="c1"><span class="c0">1 - Normal</span></p><p class="c1"><span class="c0">2 - Wide</span></p></td></tr>
<tr class="c10"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">power_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Low Power Mode</span></p><p class="c1"><span class="c0">1 - Optimized Power Mode</span></p><p class="c1"><span class="c0">2 - High Power Mode</span></p><p class="c1"><span class="c0">3 - Always On</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">mpd_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Disable Mobile Phone Display Mode</span></p><p class="c1"><span class="c0">3 - Enable Mobile Phone Display Mode</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">reader_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">7 - Presentation Mode</span></p><p class="c1"><span class="c0">0 - Triggered Mode</span></p></td></tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">linear_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">1 - Security Short Or Codabar</span></p><p class="c1"><span class="c0">2 - Security All Twice</span></p><p class="c1"><span class="c0">3 - Security Long And Short</span></p><p class="c1"><span class="c0">4 - Security All Thrice</span></p></td></tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">picklist</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Disabled</span></p><p class="c1"><span class="c0">1 &ndash; Enabled/HW picklist</span></p><p class="c1"><span class="c0">2 &ndash; Software Picklist</span></p></td></tr>
<tr class="c18" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">aim_type</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Trigger</span></p><p class="c1"><span class="c0">1 - Timed Hold</span></p><p class="c1"><span class="c0">2 - Timed Release</span></p><p class="c1"><span class="c0">3 - Press And Release</span></p><p class="c1"><span class="c0">5 - Continuous Read</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">aim_timer</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;60000</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">same_barcode_timeout</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;5000</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">different_barcode_timeout</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;5000</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">illumination_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">off - Off</span></p><p class="c1"><span class="c0">torch - On</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">lcd_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Disabled</span></p><p class="c1"><span class="c0">3 - Enabled</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">low_power_timeout</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;1000</span></p></td></tr>
<tr class="c10"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">delay_to_low_power_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">16 - 1 Second</span></p><p class="c1"><span class="c0">29 - 30 Seconds</span></p><p class="c1"><span class="c0">32 - 1 Minute</span></p><p class="c1"><span class="c0">37 - 5 Minutes</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">illumination_brightness</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;10</span></p></td></tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">inverse_1d_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Disable</span></p><p class="c1"><span class="c0">1 - Enable</span></p><p class="c1"><span class="c0">2 - Auto</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">viewfinder_size</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;100</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">viewfinder_posx</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;100</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">viewfinder_posy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;100</span></p></td></tr>
<tr class="c10"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">1d_marginless_decode_effort_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Level 0</span></p><p class="c1"><span class="c0">1 - Level 1</span></p><p class="c1"><span class="c0">2 - Level 2</span></p><p class="c1"><span class="c0">3 - Level 3</span></p></td></tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">poor_quality_bcdecode_effort_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Level 0</span></p><p class="c1"><span class="c0">1 - Level 1</span></p><p class="c1"><span class="c0">2 - Level 2</span></p><p class="c1"><span class="c0">3 - Level 3</span></p></td></tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">charset_name</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">ISO-8859-1 - ISO-8859-1</span></p><p class="c1"><span class="c0">Shift_JIS - Shift_JIS</span></p><p class="c1"><span class="c0">UTF-8 - UTF-8</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">viewfinder_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">1 - Viewfinder Enabled</span></p><p class="c1"><span class="c0">2 - Static Reticle</span></p></td></tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">code_id_type</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Code Id Type None</span></p><p class="c1"><span class="c0">1 - Code Id Type Aim</span></p><p class="c1"><span class="c0">2 - Code Id Type Symbol</span></p></td></tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">volume_slider_type</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Ringer</span></p><p class="c1"><span class="c0">1 - Music and Media</span></p><p class="c1"><span class="c0">2 - Alarms</span></p><p class="c1"><span class="c0">3 - Notification</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decode_audio_feedback_uri</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">URI &ndash; Can be a query of the available URIs from RingToneManager</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decode_haptic_feedback</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">bt_disconnect_on_exit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">connection_idle_time</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;1800</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">establish_connection_time</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 30&ndash;60</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">remote_scanner_audio_feedback_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;3</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">remote_scanner_led_feedback_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;3</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">display_bt_address_barcode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">good_decode_led_timer</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;1000</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoding_led_feedback</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c17"><td class="c4" colspan="1" rowspan="1"><p class="c8"><span class="c0">decoder_usplanet_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c8"><span class="c0">false</span></p><p class="c8"><span class="c0">true</span></p><p class="c1 c7"><span class="c0"></span></p></td></tr>
</tbody>
</table>
<p><strong>Important</strong>: Support for decode parameters can vary depending on the scanning device selected. For device-specific support notes, please refer to the <a href="https://www.zebra.com/us/en/sitesearch.html?q=integrator">Integrator Guide</a> that accompanied the unit. </p>
<hr />
<h2 id="keystrokeoutputparameters">Keystroke Output Parameters</h2>
<blockquote>
  <p>All parameters are case sensitive.</p>
</blockquote>
<table class="c19">
<tbody>
<tr class="c6" bgcolor="#e0e0eb">
<td class="c20" colspan="1" rowspan="1">
<p class="c1">
<span class="c9">
<strong>Param name</strong>
</span>
</p>
</td>
<td class="c14" colspan="1" rowspan="1">
<p class="c1"> <span class="c9"><strong>Param values</strong></span></p>
</td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">keystroke_output_enabled</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">keystroke_action_character</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">NONE - ASCII_NO_VALUE</span></p><p class="c1"><span class="c0">TAB - ASCII_TAB_VALUE</span></p><p class="c1"><span class="c0">LF - ASCII_LF_VALUE</span></p><p class="c1"><span class="c0">CR - ASCII_CR_VALUE</span></p></td></tr>
<tr class="c13"><td class="c4" colspan="1" rowspan="1"><p class="c1">
<span class="c0">keystroke_delay_extended_ascii</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;1000</span></p></td></tr>
<tr class="c13" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1">
<span class="c0">keystroke_delay_control_characters</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;1000</span></p></td></tr>
</tbody>
</table>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>