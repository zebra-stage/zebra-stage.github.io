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
<h2 id="resultcodes">Result Codes</h2>
<p>DataWedge returns the following error codes if the app includes the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> to enable the app to get results using the DataWedge result intent mechanism. See <a href="#example">Example</a>, below. </p>
<ul>
<li><strong>PROFILE<em>NOT</em>FOUND -</strong> FAILURE </li>
<li><strong>OPERATION<em>NOT</em>ALLOWED -</strong> FAILURE</li>
</ul>
<p>Also see the <a href="../resultinfo">Result Codes guide</a> for more information.  </p>
<h3 id="returnvalues">Return Values</h3>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters</p>
<h2 id="examplecode">Example Code</h2>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
String[] values = {"My profile"};
i.putExtra("com.symbol.datawedge.api.DELETE_PROFILE", values);
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
<h3 id="setgetresultcodes">Set/Get Result Codes</h3>
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
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>