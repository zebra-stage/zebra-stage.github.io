<h2 id="reset_default_profile">RESET<em>DEFAULT</em>PROFILE</h2>
<p>Used to reset the default Profile to Profile0.</p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>:::javascript
Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.RESET_DEFAULT_PROFILE", "");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.RESET</em>DEFAULT_PROFILE"</p>
<h3 id="returnvalues">Return Values</h3>
<p>(None)</p>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).</p>
<h3 id="example">Example</h3>
<pre><code>::javascript
// define action string
String action = "com.symbol.datawedge.api.ACTION";
String extraData = "com.symbol.datawedge.api.RESET_DEFAULT_PROFILE";

public void onResume() {
    // create the intent
    Intent i = new Intent();

    // set the action to perform
    i.setAction(action);
    i.putExtra(extraData, ""); // empty since a name is not required
    this.sendBroadcast;
}
</code></pre>
<!--
6/27/17- per eng. TUT-14724:
- added an empty string to extra data (in prototype and sample)
-->
<h3 id="comments">Comments</h3>
<p>(None)</p>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>