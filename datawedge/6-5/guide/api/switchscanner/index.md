<h2 id="switch_scanner">SWITCH_SCANNER</h2>
<p>Introduced in DataWedge 6.5. </p>
<p>Used to switch to a specific scanner at runtime, enabling selection of the optimal scanning device for the application, requirement or situation when an app is launched. <strong>Scanner must be available to the device at runtime</strong>. </p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.SWITCH_SCANNER", "&lt;scanner index&gt;");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.SWITCH</em>SCANNER"</p>
<p><strong>EXTRA_DATA</strong> [String]: "&lt;scanner index&gt;" -  index number of the scanner to use in the active Profile</p>
<p><strong>Use <a href="../enumeratescanners">ENUMERATE_SCANNERS</a> to retrieve an index of scanners</strong>. </p>
<h3 id="resultcodes">Result Codes</h3>
<p>DataWedge will return the following error codes if the app includes the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> to enable the app to get results using the DataWedge result intent mechanism. See <a href="#example">Example</a>, below. </p>
<ul>
<li><strong>DATAWEDGE_DISABLED -</strong> DataWedge is disabled</li>
<li><strong>NO<em>ACTIVE</em>PROFILE -</strong> </li>
<li><strong>PARAMETER_INVALID -</strong> Given scanner parameter is invalid</li>
<li><strong>PLUGIN_DISABLED -</strong> Scanner plug-in is disabled</li>
<li><strong>PROFILE_DISABLED -</strong> Profile is disabled</li>
<li><strong>SCANNER<em>ALREADY</em>ENABLED -</strong> Scanner is disabled</li>
<li><strong>SCANNER<em>DISABLE</em>FAILED -</strong> Scanner is disabled</li>
<li><strong>SCANNER<em>NOT</em>CONNECTED -</strong></li>
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
<p>The code below shows how to pass an intent to change to scanner "3" from the current scanner. To verify results of the switch (or if errors are expected), include the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> to get results.</p>
<pre><code>:::javascript
String scannerIndex = “3”;

// create the intent and action
    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.SWITCH_SCANNER", scannerIndex);

// generate result codes
    i.putExtra("RECEIVE_RESULT","true");
    i.putExtra("COMMAND_IDENTIFIER","123456789");

// send the intent
    this.sendBroadcast(i); 
</code></pre>
<h3 id="notes">Notes</h3>
<p>(none)</p>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>