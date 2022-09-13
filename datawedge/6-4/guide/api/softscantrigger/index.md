<h2 id="soft_scan_trigger">SOFT<em>SCAN</em>TRIGGER</h2>
<p>Used to start, stop or toggle a software scanning trigger. </p>
<blockquote>
  <p><strong>Functional only when Barcode Input is enabled in the active Profile</strong>.</p>
</blockquote>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.SOFT_SCAN_TRIGGER", "&lt;parameter&gt;");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.SOFT</em>SCAN_TRIGGER"</p>
<p><strong>&lt;parameter&gt;</strong>: The parameter as a string, using any of the following: </p>
<ul>
<li><p><code>START_SCANNING</code> - starts scanning when triggered</p></li>
<li><p><code>STOP_SCANNING</code> - stops or interrupts scanning when triggered</p></li>
<li><p><code>TOGGLE_SCANNING</code> - toggles between <code>START_SCANNING</code> and <code>STOP_SCANNING</code> when triggered</p></li>
</ul>
<h3 id="returnvalues">Return Values</h3>
<p>(None)</p>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters.</p>
<h3 id="example">Example</h3>
<pre><code>// define action and data strings
String softScanTrigger = "com.symbol.datawedge.api.ACTION";
String extraData = "com.symbol.datawedge.api.SOFT_SCAN_TRIGGER";

// create the intent
Intent i = new Intent();

// set the action to perform
i.setAction(softScanTrigger);

// add additional info
i.putExtra(extraData, "START_SCANNING");

// send the intent to DataWedge
context.this.sendBroadcast(i);
</code></pre>
<h3 id="comments">Comments</h3>
<p>The soft scan trigger command should be delayed sufficiently to enable the scanner to complete the task. Delay code similar to that shown below could be used:</p>
<pre><code>// SAMPLE DELAY CODE
int triggerDelay = 250; // delay in milliseconds

Handler handler = new Handler();
handler.postDelayed(new Runnable() {
        public void run() {
                // for clarity, assume the following method contains the code in the example above
                startSoftScan();
        }
}, triggerDelay);
</code></pre>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>