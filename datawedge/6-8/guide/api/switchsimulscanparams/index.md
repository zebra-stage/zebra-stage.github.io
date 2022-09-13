<h2 id="switch_simulscan_params">SWITCH<em>SIMULSCAN</em>PARAMS</h2>
<p>Introduced in DataWedge 6.8. </p>
<p>Used to pass one or more <a href="../../input/simulscan">SimulScan parameters</a> as a bundle, <strong><u>temporarily</u></strong> updating the settings of the active Profile. This API can be used to change SimulScan settings in response to changing conditions at any time. For example, a developer might wish to enable an app to programmatically change input templates or region separators at various times of the day or in response to varying conditions. </p>
<blockquote>
  <p><strong>Note</strong>: Settings configured by this API are discarded with the next Profile switch.</p>
</blockquote>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.SWITCH_SIMULSCAN_PARAMS", [bundle]);
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.SWITCH</em>SIMULSCAN_PARAMS"</p>
<p><strong>EXTRA_DATA</strong> [bundle]: "&lt;name, value&gt;" - Accepts the following SimulScan parameters as name-value pairs:</p>
<ul>
<li><code>simulscan_input_source</code>    [string] - The input device for data capture. Possible values: <ul>
<li>"Default" - accepts the default scanning device selected by the system</li>
<li>"Camera" - selects the main device camera</li>
<li>"Imager" - selects the internal imager on the device</li></ul></li>
<li><code>simulscan_template</code> [string] - File name of the XML template to use (i.e. "BankCheck.xml"). File must reside in <code>/enterprise/device/settings/datawedge/templates</code> folder on device. </li>
<li><code>simulscan_region_separator</code>    [string] - The character to be inserted as a separator between data regions. Possible values: <ul>
<li>"NONE" (default)</li>
<li>"TAB" - Tab character</li>
<li>"LF" - Line feed</li>
<li>"CR" = Carriage return</li></ul></li>
<li><code>simulscan_log_dir</code> [string] - Change the default folder path (<code>/storage/emulated/0/simulscan/logs</code>) for storing the SimulScan logs on the device. <strong>Note</strong>: SimulScan logging is enabled/disabled by the SimulScan template in use; logging is not controlled by DataWedge.</li>
<li><code>simulscan_enable_timestamp</code> [string] - Enable/disable automatic insertion of a timestamp <code>yyyy-mm-dd hh:mm:ss</code> along with acquired data. Possible values: <ul>
<li>true</li>
<li>false (default)</li></ul></li>
<li><code>simulscan_template_params</code> [bundle] - User-defined bundle of custom parameters based on the selected template. Possible values: <ul>
<li><code>dymanic_quantity</code> - Number of barcodes to decode in a single scan (from 1-99; default=5)</li></ul></li>
</ul>
<p>Learn more <a href="../../input/simulscan">about SimulScan parameters</a>. </p>
<h3 id="resultcodes">Result Codes</h3>
<p>DataWedge returns the following error codes if the app includes the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> to enable the app to get results using the DataWedge result intent mechanism. See <a href="#example">Example</a>, below. </p>
<ul>
<li><strong>VALUE<em>ALREADY</em>SET -</strong> No parameters set; equal values previously exist</li>
<li><strong>PARAMETER_INVALID -</strong> Given SimulScan parameter is invalid or not recognized</li>
<li><strong>VALUE_INVALID -</strong> Given value for a SimulScan parameter is invalid</li>
</ul>
<p>See the <a href="../resultinfo">Result Codes guide</a> for more information.  </p>
<h3 id="returnvalues">Return Values</h3>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions, missing parameters or other failures.</p>
<hr />
<h2 id="examplecode">Example Code</h2>
<p>The code below shows how to pass an intent that switches SimulScan parameters for the current scanner in the active Profile. To verify results of the switch (or if errors are expected), include the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> to get results (also shown).</p>
<pre><code>//Create param bundle
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
</code></pre>
<h3 id="receivetheresult">Receive the result</h3>
<pre><code>//get the results
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
        Set&lt;String&gt; keys = bundle.keySet();
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
</code></pre>
<h3 id="notes">Notes</h3>
<p><strong>Pre-conditions and assumptions</strong>:</p>
<ul>
<li>DataWedge and the respective Profile must be enabled</li>
<li>SimulScan input should be enabled in the active Profile</li>
<li>If Intent contains an invalid or unsupported scanner parameter or value, result code(s) will be sent</li>
</ul>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="../../input/simulscan">SimulScan parameters</a> | Guide to SimulScan Input Parameters for DataWedge</p>
<p><a href="/simulscan">SimulScan User Guide</a> | Complete SimulScan documentation and user guide</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>