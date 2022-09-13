<h2 id="switch_scanner">SWITCH_SCANNER</h2>
<p>Introduced in DataWedge 6.5. </p>
<p>Used to switch to a specific scanner at runtime, enabling selection of the optimal scanning device for the application, requirement or situation when an app is launched. <strong>Scanner must be available to the device at runtime</strong>. </p>
<p>The <code>SWITCH_SCANNER_EX</code> extra (added in DataWedge 6.6) allow scanners to be selected by a friendly name as defined in the <a href="#scanneridentifiers">scanner identifier table</a>.  </p>
<h3 id="functionprototypes">Function Prototypes</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.SWITCH_SCANNER", "&lt;scanner index&gt;");


Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.SWITCH_SCANNER_EX","&lt;SCANNER_IDENTIFIER&gt;");
this.sendBroadcast(i);
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.SWITCH</em>SCANNER"</p>
<p><strong>EXTRA_DATA</strong> [String]: "&lt;scanner index&gt;" -  index number of the scanner to use in the active Profile</p>
<p><strong>Use <a href="../enumeratescanners">ENUMERATE_SCANNERS</a> to retrieve an index of scanners</strong>. </p>
<h3 id="scanneridentifiers">Scanner Identifiers</h3>
<p>The scanner identifier permits scanners to be identified by a friendly name rather than an index number. </p>
<p><strong>SCANNER_IDENTIFIER</strong> [String]: in each scanner info bundle for each scanner supported in the device. Both parameters are supported in DataWedge and higher; the scanner identifier value takes precedence if an index also is referenced in the code.  </p>
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
<h3 id="resultcodes">Result Codes</h3>
<p>DataWedge returns the following error codes if the app includes the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> to enable the app to get results using the DataWedge result intent mechanism. See <a href="#examplecode">Example</a>, below. </p>
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