<h2 id="set_disabled_app_list">SET<em>DISABLED</em>APP_LIST</h2>
<p>Introduced in DataWedge 6.5. </p>
<p>Used to add, remove or update an item on the Disabled App List, the list of apps and activities that are blocked from using DataWedge. Contains <a href="../overview/#nestedbundles">nested bundles</a>. This API also can be used by an app to prevent the app itself from using DataWedge. </p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>:::javascript
Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.SET_DISABLED_APP_LIST", "&lt;bundle&gt;");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [Bundle]: "com.symbol.datawedge.api.SET</em>DISABLED<em>APP</em>LIST"</p>
<h4 id="mainbundle">MAIN BUNDLE</h4>
<p>The main bundle <code>DISABLED_APP_LIST</code> contains the following properties:</p>
<p><strong>CONFIG_MODE</strong> [String]:</p>
<ul>
<li><strong>UPDATE</strong>: Adds the specified packages and/or activities to the existing list </li>
<li><strong>REMOVE</strong>: Removes the specified packages and/or activities from existing list</li>
<li><strong>OVERWRITE</strong>: Replaces the existing list with the specified list. <strong>Erases existing list if no apps are specified</strong>.</li>
</ul>
<p><strong>APP_LIST</strong> [Bundle array]: </p>
<ul>
<li><strong>APP_LIST [0]</strong>:</li>
<li><strong>PACKAGE_NAME</strong> [String]: Package name of the app. Required field; wildcard ("&#42;") not supported. </li>
<li><strong>ACTIVITY_LIST</strong> [Array of strings]: Leave blank or use wildcard ("&#42;") to indicate whole package.  </li>
</ul>
<hr />
<h2 id="mainbundle-1">Main Bundle</h2>
<p><strong>APP_LIST [0]</strong>:</p>
<ul>
<li><strong>PACKAGE_NAME</strong> ["com.symbol.emdk.notificationsample1"]</li>
<li><strong>ACTIVITY_LIST</strong> [“com.symbol.emdk.barcodesample1.MainActivity” ,”com.symbol.emdk.barcodesample1.ResultsActivity”] </li>
</ul>
<p>For the scenario above…</p>
<ul>
<li><p><strong>In UPDATE mode</strong>, if the specified package name already exists in the Disabled Apps List, DataWedge adds the specified activities to those previously specified for the package. If not, it adds the package and the specified activities.</p></li>
<li><p><strong>In REMOVE mode</strong>, if the specified package name exists in the Disabled Apps List, DataWedge removes it. It otherwise returns an <code>INVALID_PARAMETER</code> error.</p></li>
</ul>
<hr />
<p><strong>APP_LIST [1]</strong>:</p>
<ul>
<li><strong>PACKAGE_NAME</strong> [String]: "com.symbol.emdk.notificationsample1"</li>
<li><strong>ACTIVITY_LIST</strong> [“*”]</li>
</ul>
<p>For the scenario above…</p>
<ul>
<li><strong>In UPDATE mode</strong>, DataWedge is disabled for all activities of the specified package.</li>
<li><strong>In REMOVE mode</strong>, DataWedge removes the specified package from the disabled list and ignores the wildcard character, which is not considered as a substring of the package name or activity name. To remove one or more individual activities, specify the whole package name and the activities for removal.</li>
</ul>
<hr />
<p><strong>APP_LIST [2]</strong>:</p>
<ul>
<li><strong>PACKAGE_NAME</strong>: "com.symbol.emdk.notificationsample1"</li>
</ul>
<p>For the scenario above…</p>
<ul>
<li><strong>In UPDATE mode</strong>, DataWedge is disabled for all the activities of the specified package.</li>
<li><strong>In REMOVE mode</strong>, DataWedge removes the specified package from the disabled list (enabling the app to use DataWedge). </li>
</ul>
<p><strong>Important</strong>: The APP<em>LIST bundle extra is <strong>required</strong> only when using UPDATE and REMOVE configuration modes. <u>If APP</em>LIST is left blank when using OVERWRITE mode, the existing Disabled App List is deleted</u>.</p>
<hr />
<h3 id="resultcodes">Result Codes</h3>
<p>DataWedge returns the following error codes if the app includes the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> to enable the app to get results using the DataWedge result intent mechanism. See <a href="#example">Example</a>, below. </p>
<ul>
<li><strong>PARAMETER<em>INVALID -</strong> CONFIG</em>MODE not defined or has invalid string value. Also returned 
if mode is set to UPDATE or REMOVE and APP_LIST is not provided.</li>
<li><strong>INVALID PACKAGE OR ACTIVITY -</strong> Package or activity name contains invalid characters</li>
<li><strong>APP<em>ALREADY</em>IN<em>DISABLED</em>LIST -</strong> package or activity already in Disabled App List</li>
<li><strong>APP<em>ALREADY</em>ASSOCIATED -</strong> Activity is associated with an app</li>
<li><strong>APP<em>NOT</em>IN<em>DISABLED</em>LIST -</strong> Package or activity not in disabled app list</li>
</ul>
<p>Also see the <a href="../resultinfo">Result Codes guide</a> for more information.  </p>
<h3 id="returnvalues">Return Values</h3>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).</p>
<hr />
<h3 id="example">Example</h3>
<p>The code below sends an intent to add apps to the Disabled Apps List in DataWedge. To verify results of the switch (or if errors are expected), include the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> to get results (also shown).</p>
<pre><code>:::javascript
Bundle bMain = new Bundle();

bMain.putString("CONFIG_MODE ","UPDATE");

Bundle bundleApp1 = new Bundle();
bundleApp1.putString("PACKAGE_NAME","com.android.calculator2");
bundleApp1.putStringArray("ACTIVITY_LIST", new String[]{
        "com.android.calculator2.Calculator",
        "com.android.calculator2.Licenses"});

Bundle bundleApp2 = new Bundle();
bundleApp2.putString("PACKAGE_NAME","com.android.phone");
bundleApp2.putStringArray("ACTIVITY_LIST", new String[]{
        "com.android.phone.EmargencyDialer",
        "com.android.phone.ADNList",

        "com.android.phone.Settings"});

Bundle bundleApp3 = new Bundle();
bundleApp3.putString("PACKAGE_NAME","com.android.email");
bundleApp3.putStringArray("ACTIVITY_LIST", new String[]{"*"});

Bundle bundleApp4 = new Bundle();
bundleApp4.putString("PACKAGE_NAME","com.symbol.myzebraapp");


bMain.putParcelableArray("APP_LIST", new Bundle[]{
        bundleApp1
        ,bundleApp2
        ,bundleApp3
        ,bundleApp4
});

Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.SET_DISABLED_APP_LIST", bMain);
this.sendBroadcast(i);
</code></pre>
<h4 id="generateandreceiveresultcodes">Generate and receive result codes</h4>
<p>Command and configuration intent parameters determine whether to send result codes (disabled by default). When using <code>SEND_RESULT</code>, the <code>COMMAND_IDENTIFIER</code> is used to match the result code with the originating intent. Sample usage of these parameters is shown below. </p>
<p><strong>Note: Modify this generic code to match the API being used</strong>.  </p>
<pre><code>// send the intent
    Intent i = new Intent();
    i.setAction(ACTION);
    i.putExtra("com.symbol.datawedge.api.CREATE_PROFILE", "Profile1");

// request and identify the result code
    i.putExtra("SEND_RESULT","true");
    i.putExtra("COMMAND_IDENTIFIER","123456789");
    this.sendBroadcast(i);

// register to receive the result
    public void onReceive(Context context, Intent intent){

        String command = intent.getStringExtra("COMMAND");
        String commandidentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
        String result = intent.getStringExtra("RESULT");

        Bundle bundle = new Bundle();
        String resultInfo = "";
        if(intent.hasExtra("RESULT_INFO")){
            bundle = intent.getBundleExtra("RESULT_INFO");
            Set&lt;String&gt; keys = bundle.keySet();
            for (String key: keys) {
                resultInfo += key + ": "+bundle.getString(key) + "\n";
            }
        }

        String text = "Command: "+command+"\n" +
                      "Result: " +result+"\n" +
                      "Result Info: " +resultInfo + "\n" +
                      "CID:"+commandidentifier;

        Toast.makeText(context, text, Toast.LENGTH_LONG).show();

    };
</code></pre>
<hr />
<h3 id="notes">Notes</h3>
<p>(none)</p>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>