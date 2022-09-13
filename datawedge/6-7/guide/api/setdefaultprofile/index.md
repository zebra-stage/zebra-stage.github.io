<h2 id="set_default_profile">SET<em>DEFAULT</em>PROFILE</h2>
<p>Used to set the specified Profile as the default Profile. <strong>Specified Profile must not already be associated with another application</strong>. A Profile can be associated with many applications, but an application cannot be associated with more than one Profile. </p>
<h3 id="aboutdefaultprofile">About Default Profile</h3>
<p><strong>Profile0</strong> is a generic Profile that automatically takes effect for any app that comes to the foreground that has not been associated with DataWedge. </p>
<p>All parameters of Profile0 can be edited except its association. That is, DataWedge allows manipulation of input, processing and output settings for Profile0, but it does not allow assignment of any one foreground application. This allows DataWedge to direct output to any unassociated app that comes to the foreground.</p>
<p>Profile0 can be disabled to allow DataWedge to send output data only to those applications that are associated in user-defined Profiles. For example, create a Profile associating a specific application, disable Profile0 and then scan. DataWedge only sends data to the application specified in the user-created Profile. This places an additional layer of security on DataWedge, permitting data to be sent only to specified applications. </p>
<h3 id="usagescenario">Usage Scenario</h3>
<p>If a launcher application has a list of apps that a user can launch and none has been associated with a DataWedge Profile, the <code>setDefaultProfile</code> method can be used to associate a Profile to any app selected by the user (otherwise Profile0 are used). When the user-selected app is launched, DataWedge auto-Profile switching will switch to the newly specified Profile. </p>
<p>If the launched app already has an associated DataWedge Profile, the <code>setDefaultProfile</code> method call is ignored and its previously specified Profile is loaded. When control is returned to the Launcher application, <code>resetDefaultProfile</code> can be used to reset the default Profile.</p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>:::javascript
Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.SET_DEFAULT_PROFILE", "&lt;profile name&gt;");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.SET</em>DEFAULT_PROFILE"</p>
<p><strong>&lt;profile name</strong>&gt;: The Profile name (a case-sensitive string) to set as the default Profile.</p>
<h3 id="resultcodes">Result Codes</h3>
<p>DataWedge returns the following error codes if the app includes the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> to enable the app to get results using the DataWedge result intent mechanism. See <a href="#example">Example</a>, below. </p>
<ul>
<li><strong>PROFILE<em>ALREADY</em>SET -</strong> FAILURE</li>
<li><strong>PROFILE<em>NOT</em>FOUND -</strong> FAILURE </li>
<li><strong>PROFILE<em>HAS</em>APP_ASSOCIATION -</strong> FAILURE</li>
<li><strong>PROFILE<em>NAME</em>EMPTY -</strong> FAILURE</li>
</ul>
<p>Also see the <a href="../resultinfo">Result Codes guide</a> for more information.  </p>
<h3 id="returnvalues">Return Values</h3>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).</p>
<h2 id="examplecode">Example Code</h2>
<pre><code>:::javascript
// define action and data strings
String setDefaultProfile = "com.symbol.datawedge.api.ACTION";
String extraData = "com.symbol.datawedge.api.SET_DEFAULT_PROFILE";

public void onResume() {
        // create the intent
        Intent i = new Intent();

        // set the action to perform
        i.setAction(setDefaultProfile);

        // add additional info (a name)
        i.putExtra(extraData, "myProfile");

        // send the intent to DataWedge
        this.sendBroadcast(i);
}
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
<hr />
<h3 id="comments">Comments</h3>
<p>The API command will have no effect if the specified Profile does not exist or if the specified Profile is already associated with an application. DataWedge will automatically switch Profiles when the activity is paused, so it is recommended that this API function be called from the onResume method of the activity.</p>
<p>Zebra recommends that this Profile be created to cater to all applications/activities that would otherwise default to Profile0. This will ensure that these applications/activities will not inadvertently switch scanner-device configurations. For example, let’s say that Profile0 is the default Profile, and it is configured to use the camera as the barcode scanner. If only the Browser application is used to scan barcodes with the camera, DataWedge always scans with the camera and enters the acquired data into the Browser as expected. But if an application is later launched that changes to a Profile using the blockbuster as the barcode scanner, the Browser application--which is set to use the default Profile--are unexpectedly reconfigured to use the blockbuster for scanning the next time it's used. <strong>To ensure that the Browser continues to use the camera as the barcode scanner in this scenario, simply create a Profile that specifies the camera as the barcode scanner and associate it with the Browser</strong>.</p>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>