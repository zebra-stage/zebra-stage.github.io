<h2 id="create_profile">CREATE_PROFILE</h2>
<p>Used to create a new DataWedge Profile on the device. If a Profile of the same name already exists on the device, the intent will fail. To create a Profile and configure its settings parameters, see <a href="../setconfig">SET_CONFIG</a>. </p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>:::java
Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION"); 
i.putExtra("com.symbol.datawedge.api.CREATE_PROFILE", "");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: <code>com.symbol.datawedge.api.ACTION</code></p>
<p><strong>EXTRA_DATA</strong> [String]: <code>com.symbol.datawedge.api.CREATE_PROFILE</code></p>
<p><strong>String &lt;value&gt;</strong>: Name of Profile to be created</p>
<h3 id="returnvalues">Return Values</h3>
<p>(None)</p>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters.</p>
<h3 id="example">Example</h3>
<pre><code>    :::java
    private void createProfile() { 
    Intent i = new Intent(); 
    i.setAction("com.symbol.datawedge.api.ACTION"); 
    i.putExtra("com.symbol.datawedge.api.CREATE_PROFILE", profileName); 
    this.sendBroadcast(i); 
}
</code></pre>
<!--
6/27/17- per eng. TUT-14724:
- data type set to "string" (not an array, as "String[ ]")
- In sample code, blank profile name changed to profileName 
-->
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>