<h2 id="set_reporting_options">SET<em>REPORTING</em>OPTIONS</h2>
<p>Introduced in DataWedge 6.6.</p>
<p>Used to configure reporting options, which are optionally generated after importing databases and Profiles. More <a href="../../settings/#reporting">about import Reporting</a>.</p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>:::java
Intent i = new Intent();
i.setAction(ACTION);
i.putExtra("com.symbol.datawedge.api.SET_REPORTING_OPTIONS", bReporting);
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: <code>com.symbol.datawedge.api.ACTION</code></p>
<p><strong>EXTRA_DATA</strong> [bundle]: <code>com.symbol.datawedge.api.SET_REPORTING_OPTIONS</code></p>
<p><strong>Reporting Options Bundle</strong>:</p>
<ul>
<li><strong>reporting_enabled -</strong> controls whether to enable reports, generated following import operations. </li>
<li>true</li>
<li>false (default)</li>
<li><strong>reporting<em>generate</em>option -</strong> controls whether reporting is generated for manual imports, auto imports, or both.</li>
<li>manual</li>
<li>auto</li>
<li>both (default)</li>
<li><strong>reporting<em>show</em>for<em>manual</em>import -</strong> controls whether to displays a generated report (for manual imports only) using the default browser on the device. </li>
<li>true</li>
<li>false (default)</li>
</ul>
<h3 id="returnvalues">Return Values</h3>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters.</p>
<h3 id="resultcodes">Result Codes</h3>
<p>DataWedge returns the following error codes if the app includes the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> to enable the app to get results using the DataWedge result intent mechanism. See <a href="#example">Example Code</a>, below.</p>
<ul>
<li><strong>BUNDLE_EMPTY -</strong> FAILURE</li>
<li><strong>FAILURE –</strong> FAILURE</li>
<li><strong>SUCCESS -</strong> SUCCESS</li>
</ul>
<p>Also see the <a href="../resultinfo">Result Codes guide</a> for more information. </p>
<h2 id="examplecode">Example Code</h2>
<h3 id="enablereporting">Enable Reporting</h3>
<p>The code below enables reporting on the device, enables reports for manual and automatic imports, and enables manual-import reports to be displayed: </p>
<pre><code>:::java
private BroadcastReceiver resultsReceiver = new BroadcastReceiver() {
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
        Log.d("TAG",text);
    }
};

public void setReportingOptions() {
    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    Bundle bReporting = new Bundle();
    bReporting.putString("reporting_enabled", "true"); //true, false
    bReporting.putString("reporting_generate_option", "manual"); //manual, auto, both
    bReporting.putString("reporting_show_for_manual_import", "false"); //true, false

    i.putExtra("com.symbol.datawedge.api.SET_REPORTING_OPTIONS", bReporting);
    i.putExtra("SEND_RESULT","true");
    i.putExtra("COMMAND_IDENTIFIER", "123456789");
    this.sendBroadcast(i);
}

private void registerReceivers() {
    IntentFilter filter = new IntentFilter();
    filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
    filter.addCategory("android.intent.category.DEFAULT");
    registerReceiver(resultsReceiver, filter);
}
</code></pre>
<!-- PRIOR EXAMPLE GIVEN BY ENGINEERING (replaced by above 12/15/17)
    :::java
    Intent i = new Intent();
    i.setAction(ACTION);

    Bundle bReporting = new Bundle();
    bReporting.putString("reporting_enabled", "false"); //true, false
    bReporting.putString("reporting_generate_option", "both"); //manual, auto, both
    bReporting.putString("reporting_show_for_manual_import", "true"); //true, false

    i.putExtra("com.symbol.datawedge.api.SET_REPORTING_OPTIONS", bReporting);
    i.putExtra(ACTION_EXTRA_SEND_RESULT,"true");
    i.putExtra("COMMAND_IDENTIFIER", "123456789");
    this.sendBroadcast(i);

 -->
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>