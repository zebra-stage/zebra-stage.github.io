<h2 id="delete_profile">DELETE_PROFILE</h2>
<p>Used to delete an existing <em><strong>deletable</strong></em> Profile, <strong>including the "Launcher" Profile</strong>.  </p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.DELETE_PROFILE", &lt;values&gt;);
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.DELETE</em>PROFILE"</p>
<p><strong>String[ ] &lt;values&gt;</strong>: List of Profiles to be deleted. </p>
<p><strong>WARNING: Supports use of the wildcard character (“*”), which deletes all deletable Profiles from the configuration, including the "Launcher" Profile</strong>.</p>
<h3 id="returnvalues">Return Values</h3>
<p>(None)</p>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters</p>
<h3 id="example">Example</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
String[] values = {"My profile"};
i.putExtra("com.symbol.datawedge.api.DELETE_PROFILE", values);
context.this.sendBroadcast(i);
</code></pre>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>