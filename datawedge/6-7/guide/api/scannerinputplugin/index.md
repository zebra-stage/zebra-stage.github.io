<h2 id="scanner_input_plugin">SCANNER<em>INPUT</em>PLUGIN</h2>
<p>Used to enable/disable the scanner Plug-in being used by the currently active Profile. Disabling the scanner Plug-in effectively disables scanning in that Profile, regardless of whether the Profile is associated with an app. <strong>This API changes only the runtime status of the scanner; it does not make persistent changes to the Profile</strong>. </p>
<blockquote>
  <p><strong>Functional only when Barcode Input is enabled in the active Profile</strong>. </p>
</blockquote>
<p><strong><u>Important</u></strong>: To avoid the unnecessary use of enable/disable scanner API calls, Zebra recommends that apps register to be notified of changes in scanner status (using the <a href="../registerfornotification/#parameters">SCANNER<em>STATUS parameter</a> of the REGISTER</em>FOR_NOTIFICATION API). This enables apps to receive scanner status changes immediately rather than having to query and wait for the result. Status-change notifications include the active Profile name, which permits an app to use the enable/disable scanner API calls only when status changes effect a relevant Profile.</p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.SCANNER_INPUT_PLUGIN", "&lt;parameter&gt;");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.SCANNER</em>INPUT_PLUGIN"</p>
<p><strong>&lt;parameter</strong>&gt;: The parameter as a string, using either of the following:</p>
<ul>
<li><code>ENABLE_PLUGIN</code> - enables the plug-in</li>
<li><code>DISABLE_PLUGIN</code> - disables the plug-in</li>
</ul>
<h3 id="resultcodes">Result Codes</h3>
<p>DataWedge returns the following error codes if the app includes the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> to enable the app to get results using the DataWedge result intent mechanism. See <a href="#example">Example</a>, below. </p>
<ul>
<li><strong>DATAWEDGE_DISABLED -</strong> FAILURE</li>
<li><strong>PARAMETER_INVALID -</strong> FAILURE</li>
<li><strong>PROFILE_DISABLED -</strong> FAILURE</li>
<li><strong>SCANNER<em>ALREADY</em>DISABLED -</strong> FAILURE</li>
<li><strong>SCANNER<em>ALREADY</em>ENABLED -</strong> FAILURE</li>
<li><strong>SCANNER<em>DISABLE</em>FAILED -</strong> FAILURE</li>
<li><strong>SCANNER<em>ENABLE</em>FAILED -</strong> FAILURE</li>
</ul>
<p>Also see the <a href="../resultinfo">Result Codes guide</a> for more information.  </p>
<h3 id="returnvalues">Return Values</h3>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters. </p>
<h2 id="examplecode">Example Code</h2>
<pre><code>// define action and data strings
    String scannerInputPlugin = "com.symbol.datawedge.api.ACTION";
    String extraData = "com.symbol.datawedge.api.SCANNER_INPUT_PLUGIN";

    public void onResume() {

        // create the intent
            Intent i = new Intent();

        // set the action to perform
            i.setAction(scannerInputPlugin);

        // add additional info
            i.putExtra(extraData, "DISABLE_PLUGIN");

        // send the intent to DataWedge
            this.sendBroadcast(i);
}
</code></pre>
<h3 id="generateandreceiveresultcodes">Generate and receive result codes</h3>
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
<h3 id="comments">Comments</h3>
<p>This intent enables/disables the scanner plug-in for the currently enabled Profile. For example, let's say that activity A launches and uses the Data Capture API intent to switch to ProfileA in which the scanner plug-in is enabled, then at some point it uses the Data Capture API to disable the scanner plug-in. Activity B is launched. In DataWedge, ProfileB is associated with activity B. DataWedge switches to ProfileB. When activity A comes back to the foreground, in the <code>onResume</code> method, activity A must use the Data Capture API intent to switch back to ProfileA, then use the Data Capture API intent again to disable the scanner plug-in, to return back to the state it was in.</p>
<h3 id="notes">Notes</h3>
<p>The scenario above assumes that ProfileA is not associated with any applications/activities, therefore when focus switches back to activity A, DataWedge will not automatically switch to ProfileA, and therefore activity A must switch back to ProfileA in its <code>onResume</code> method.</p>
<p>Because DataWedge will automatically switch Profile when an activity is paused, it is recommended that this API function be called from the <code>onResume</code> method of the activity.</p>
<p><strong>This API changes only the runtime status of the scanner; it does not make persistent changes to the Profile</strong>. </p>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>