<h2 id="overview">Overview</h2>
<p>Introduced in DataWedge 6.5.</p>
<p><strong>Intent result codes deliver status information about DataWedge API commands</strong> to help developers determine the flow of data and the function of their business logic. Result codes are implemented with some of the APIs Introduced in DataWedge 6.5 and have been added to many APIs that existed previously.  </p>
<p>Result codes are accessed using the <code>RESULT_INFO</code> intent mechanism, which returns error codes if the app includes the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> as shown in the prototype below. See the <a href="#example">Example section</a> below for code showing how to register the app to receive result codes. </p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>// send the intent
    Intent i = new Intent();
    i.setAction(ACTION);
    i.putExtra("com.symbol.datawedge.api.CREATE_PROFILE", "Profile1");

// request and identify the result code
    i.putExtra("SEND_RESULT","true");
    i.putExtra("COMMAND_IDENTIFIER","123456789");
    this.sendBroadcast(i);
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>RESULT</strong> [String]: Success/failure of the operation</p>
<p><strong>COMMAND</strong> [String]: Name of the received intent command</p>
<p><strong>COMMAND_IDENTIFIER</strong> [String]: Optional parameter for linking results to a specific command</p>
<p><strong>RESULT_INFO</strong> [Bundle]: Can contain any of the fields below depending on the API in use: </p>
<ul>
<li><p><strong>PREVIOUS<em>DEFAULT</em>PROFILE -</strong> Specifies the previous default Profile when setting a new default Profile</p></li>
<li><p><strong>PREVIOUS_PROFILE -</strong> Specifies the previous Profile in the parameter when switching and renaming a Profile</p></li>
<li><p><strong>PROFILE_NAME -</strong> Always the current or next Profile name</p></li>
<li><p><strong>RESULT_CODE -</strong> One of the possible result codes shown in list table</p></li>
<li><p><strong>SOURCE<em>PROFILE</em>NAME -</strong> Specifies the source Profile when cloning a Profile</p></li>
<li><p><strong>RESULT_CODE -</strong> returned only for FAILURE. Can contain any of the fields below depending on the API in use:</p></li>
<li><p><strong>APP<em>ALREADY</em>ASSOCIATED -</strong> An attempt was made to associate an app that was already associated with another Profile</p></li>
<li><p><strong>BUNDLE_EMPTY -</strong> The bundle contains no data</p></li>
<li><p><strong>DATAWEDGE<em>ALREADY</em>DISABLED -</strong> An attempt was made to disable DataWedge when it was already disabled</p></li>
<li><p><strong>DATAWEDGE<em>ALREADY</em>ENABLED -</strong> An attempt was made to enable DataWedge when it was already enabled</p></li>
<li><p><strong>DATAWEDGE_DISABLED -</strong> An attempt was made to perform an operation when DataWedge was disabled</p></li>
<li><p><strong>INPUT<em>NOT</em>ENABLED -</strong> An attempt was made to acquire data when the Barcode or SimulScan plug-in was disabled</p></li>
<li><p><strong>OPERATION<em>NOT</em>ALLOWED -</strong> An attempt was made to rename or delete a protected Profile or to associate an app with Profile0</p></li>
<li><p><strong>PARAMETER_INVALID -</strong> The passed parameters were empty, null or invalid</p></li>
<li><p><strong>PLUGIN<em>NOT</em>SUPPORTED -</strong> An attempt was made to configure a plug-in that is not supported by DataWedge intent APIs</p></li>
<li><p><strong>PLUGIN<em>BUNDLE</em>INVALID -</strong> A passed plug-in parameter bundle is empty or contains insufficient information</p></li>
<li><p><strong>PROFILE<em>ALREADY</em>EXISTS -</strong> An attempt was made to create, clone or rename a Profile with a name that already exists</p></li>
<li><p><strong>PROFILE<em>ALREADY</em>SET -</strong> An attempt was made to set the default Profile as the default Profile</p></li>
<li><p><strong>PROFILE_DISABLED -</strong> An attempt was made to perform an operation on a disabled Profile</p></li>
<li><p><strong>PLUGIN<em>DISABLED</em>IN_CONFIG -</strong> An attempt was made to enable or disable the scanner when barcode plug-in was disabled manually from the DataWedge UI</p></li>
<li><p><strong>PROFILE<em>HAS</em>APP_ASSOCIATION -</strong> An attempt was made to switch to or set as the default a Profile that is already associated with another app</p></li>
<li><p><strong>PROFILE<em>NAME</em>EMPTY -</strong> An attempt was made to configure an empty Profile name</p></li>
<li><p><strong>PROFILE<em>NOT</em>FOUND -</strong> An attempt was made to perform an operation on a Profile that does not exist</p></li>
<li><p><strong>SCANNER<em>ALREADY</em>DISABLED -</strong> An attempt was made to disable a scanner that is already disabled</p></li>
<li><p><strong>SCANNER<em>ALREADY</em>ENABLED -</strong> An attempt was made to enable a scanner that is already enabled</p></li>
<li><p><strong>SCANNER<em>DISABLE</em>FAILED -</strong> An exception occurred while disabling the scanner</p></li>
<li><p><strong>SCANNER<em>ENABLE</em>FAILED -</strong> An exception occurred while enabling the scanner</p></li>
<li><p><strong>UNKNOWN -</strong> An unidentified error occurred</p></li>
</ul>
<h3 id="returnvalues">Return Values</h3>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters.</p>
<h2 id="examplecode">Example Code</h2>
<pre><code>//SENDING THE INTENT
Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.RESTORE_CONFIG", "");
this.sendBroadcast (i);
</code></pre>
<h3 id="generateandreceiveresultcodes">Generate and receive result codes</h3>
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
<h3 id="comments">Comments</h3>
<p>The result intent mechanism does not perform parameter-level validation. It would be impossible, for example, for any app to validate every possible parameter for a scanner that's no longer connected. However, if a parameter value in a configuration is not valid when that Profile is loaded, DataWedege will use the default value for that parameter.  </p>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>