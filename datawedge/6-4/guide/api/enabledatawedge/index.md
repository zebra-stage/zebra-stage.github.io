<h2 id="enable_datawedge">ENABLE_DATAWEDGE</h2>
<p>Boolean value used to enable (true) or disable (false) DataWedge on the device.</p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>:::java
Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.ENABLE_DATAWEDGE", &lt;value&gt;);
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: <code>com.symbol.datawedge.api.ACTION</code></p>
<p><strong>EXTRA_DATA</strong> [String]: <code>com.symbol.datawedge.api.ENABLE_DATAWEDGE</code></p>
<p><strong>Boolean &lt;value&gt;</strong>: True or False </p>
<h3 id="returnvalues">Return Values</h3>
<p>(None)</p>
<p>Error and debug messages are logged to the Android logging system, which then can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters.</p>
<h3 id="example">Example</h3>
<pre><code>:::java
Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.ENABLE_DATAWEDGE", false);
context.this.sendBroadcast(i);
</code></pre>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>