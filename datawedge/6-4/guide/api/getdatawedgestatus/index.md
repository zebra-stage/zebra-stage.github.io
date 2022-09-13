<h2 id="get_datawedge_status">GET<em>DATAWEDGE</em>STATUS</h2>
<p>Introduced in DataWedge 6.4.</p>
<p>Returns the status of DataWedge as "enabled" or "disabled" as a string extra.</p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.GET_DATAWEDGE_STATUS", "");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.GET</em>DATAWEDGE_STATUS"</p>
<p><strong>EXTRA VALUE</strong>: Empty string</p>
<h3 id="returnvalues">Return Values</h3>
<p>Returns the status of DataWedge as "enabled" or "disabled" as a string extra.</p>
<p><strong>EXTRA NAME</strong>: "com.symbol.datawedge.api.RESULT<em>GET</em>DATAWEDGE_STATUS" </p>
<p><strong>EXTRA TYPE</strong>: Bundle</p>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters.</p>
<h3 id="example">Example</h3>
<pre><code>//SENDING THE INTENT
Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.GET_DATAWEDGE_STATUS", "");
context.this.sendBroadcast(i);

//RECEIVING THE RESULT
Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_DATAWEDGE_STATUS");
context.this.sendBroadcast(i);
</code></pre>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>