<h2 id="scanner_input_plugin">SCANNER<em>INPUT</em>PLUGIN</h2>
<p>Used to enable/disable the scanner Plug-in being used by the currently active Profile. Disabling the scanner Plug-in effectively disables scanning in that Profile, regardless of whether the Profile is associated with an app. <strong>This API changes only the runtime status of the scanner; it does not make persistent changes to the Profile</strong>. </p>
<blockquote>
  <p><strong>Functional only when Barcode Input is enabled in the active Profile</strong>. </p>
</blockquote>
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
<h3 id="returnvalues">Return Values</h3>
<p>(None)</p>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters. </p>
<h3 id="example">Example</h3>
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
        context.this.sendBroadcast(i);
}
</code></pre>
<h3 id="comments">Comments</h3>
<p>This intent enables or disables the scanner plug-in for the currently enabled Profile. For example, let's say that activity A launches and uses the Data Capture API intent to switch to ProfileA in which the scanner plug-in is enabled, then at some point it uses the Data Capture API to disable the scanner plug-in. Activity B is launched. In DataWedge, ProfileB is associated with activity B. DataWedge switches to ProfileB. When activity A comes back to the foreground, in the <code>onResume</code> method, activity A must use the Data Capture API intent to switch back to ProfileA, then use the Data Capture API intent again to disable the scanner plug-in, to return back to the state it was in.</p>
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