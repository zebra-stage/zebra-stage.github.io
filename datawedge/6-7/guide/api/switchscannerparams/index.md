<h2 id="switch_scanner_params">SWITCH<em>SCANNER</em>PARAMS</h2>
<p>Introduced in DataWedge 6.5. </p>
<p>Used to pass one or more <a href="../../input/barcode/#decoderselection">barcode, scanner and/or reader parameters</a> as intent extras, <strong><u>temporarily</u></strong> updating the settings of the active Profile. This API can be used to change scanner settings in response to changing conditions at any time. For example, a developer might wish to enable scanner illumination whenever a low-light condition is detected. </p>
<blockquote>
  <p><strong>Note</strong>: Settings configured by this API are discarded with the next Profile switch.</p>
</blockquote>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.SWITCH_SCANNER_PARAMS", "param_name", "value");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.SWITCH</em>SCANNER_PARAMS"</p>
<p><strong>EXTRA_DATA</strong> [bundle]: "&lt;name, value&gt;" - Accepts scanner parameters asname-value pairs</p>
<h3 id="resultcodes">Result Codes</h3>
<p>DataWedge returns the following error codes if the app includes the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> to enable the app to get results using the DataWedge result intent mechanism. See <a href="#example">Example</a>, below. </p>
<ul>
<li><strong>DATAWEDGE_DISABLED -</strong> DataWedge is disabled</li>
<li><strong>PROFILE_DISABLED -</strong> Profile is disabled</li>
<li><strong>PLUGIN_DISABLED -</strong> Scanner plug-in is disabled</li>
<li><strong>SCANNER_DISABLED -</strong> Scanner is disabled</li>
<li><strong>PARAMETER_INVALID -</strong> Given scanner parameter is invalid</li>
<li><strong>PARAMETER<em>NOT</em>SUPPORTED -</strong> Given scanner parameter is not supported</li>
<li><strong>VALUE_INVALID -</strong> Given value for a scanner parameter is invalid</li>
<li><strong>VALUE<em>NOT</em>SUPPORTED -</strong> Given value for a scanner parameter is not supported</li>
</ul>
<p>Also see the <a href="../resultinfo">Result Codes guide</a> for more information.  </p>
<h3 id="returnvalues">Return Values</h3>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions, missing parameters or other failures.</p>
<hr />
<h2 id="examplecode">Example Code</h2>
<p>The code below passes an intent that switches a scanner parameter for the active scanner in the active profile. To verify results of the switch (or if errors are expected), include the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> to get results (also shown).</p>
<pre><code>    :::javascript
// create the intent and action
    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");

    Bundle bScannerParams = new Bundle();
    bScannerParams.putString("illumination_mode", "off");
    bScannerParams.putString("decode_audio_feedback_uri", "Pollux");

    i.putExtra("com.symbol.datawedge.api.SWITCH_SCANNER_PARAMS", bScannerParams);

// generate result codes
    i.putExtra(“RECEIVE_RESULT”,"true");
    i.putExtra("COMMAND_IDENTIFIER", "123456789"); //returned as it is with the result

// send the intent
    this.sendBroadcast(i);

// register the broadcast receiver (for result codes)
    :::javascript
    String command = intent.getStringExtra("COMMAND");
    String commandidentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
    String result = intent.getStringExtra("RESULT");

    Bundle bundle = new Bundle();
    String resultInfo = "";

    if (intent.hasExtra("RESULT_INFO")) {
        bundle = intent.getBundleExtra("RESULT_INFO");
        Set&lt;String&gt; keys = bundle.keySet();
            for (String key : keys) {
                if(key.equalsIgnoreCase("RESULT_CODE")){
                    resultInfo += key + ": " + Arrays.toString(bundle.getStringArray(key));
                }else {
                    resultInfo += key + ": " + bundle.getString(key) + "\n";
            }
        }
    }
</code></pre>
<h3 id="notes">Notes</h3>
<p><strong>Pre-conditions and assumptions</strong>:</p>
<ul>
<li>DataWedge and the respective Profile must be enabled</li>
<li>Barcode scanning should be enabled in the active Profile</li>
<li>If Intent contains an invalid or unsupported scanner parameter or value, result code(s) will be sent</li>
</ul>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>