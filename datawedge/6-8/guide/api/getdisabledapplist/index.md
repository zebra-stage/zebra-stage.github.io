<h2 id="get_disabled_app_list">GET<em>DISABLED</em>APP_LIST</h2>
<p>Introduced in DataWedge 6.5. </p>
<p>Returns the Disabled Apps List, a list of apps and activities that are blocked from using DataWedge.</p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.GET_DISABLED_APP_LIST", "");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.GET</em>DISABLED<em>APP</em>LIST"</p>
<h3 id="returnvalues">Return Values</h3>
<p><strong>APP_LIST [ ]</strong>:</p>
<ul>
<li><p><strong>APP_LIST [0]</strong>:</p></li>
<li><p><strong>PACKAGE_NAME [String]</strong>: "com.symbol.emdk.barcodesample1"</p></li>
<li><p><strong>ACTIVITY_LIST [String array]</strong>: [“com.symbol.emdk.barcodesample1.MainActivity” ,”com.symbol.emdk.barcodesample1.ResultsActivity”]</p></li>
<li><p><strong>APP_LIST [1]</strong>:</p></li>
<li><p><strong>PACKAGE_NAME</strong> [String]: "com.symbol.emdk.notificationsample1"</p></li>
<li><p><strong>ACTIVITY_LIST [String array]</strong>: [“*”]</p></li>
</ul>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).</p>
<hr />
<h2 id="examplecode">Example Code</h2>
<p>The code below sends an intent to request the current Disabled App List: </p>
<pre><code>:::javascript
// create the intent and action
    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.GET_DISABLED_APP_LIST","");

// send the intent
    this.sendBroadcast(i);

// process the results inside onReceive callback
    ArrayList&lt;Bundle&gt; disabledAppList  = new ArrayList&lt;&gt;();
    if(intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_DISABLED_APP_LIST"))
        disabledAppList = intent.getParcelableArrayListExtra("com.symbol.datawedge.api.RESULT_GET_DISABLED_APP_LIST");

    if(disabledAppList!= null &amp;&amp; disabledAppList.size() &gt; 0){
        for (Bundle bundle:disabledAppList) {
            String packageName = bundle.getString("PACKAGE_NAME");

            ArrayList&lt;String&gt; activityList = new ArrayList&lt;&gt;();
            activityList =bundle.getStringArrayList("ACTIVITY_LIST");

            Log.d("TAG","PackageName: " + packageName);
            for(String activityName : activityList){
                Log.d("TAG","\t\t\tActivity: " + activityName);
            }
        }
    }
    else{
        Log.d("TAG","Disabled app list is empty");
        }
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