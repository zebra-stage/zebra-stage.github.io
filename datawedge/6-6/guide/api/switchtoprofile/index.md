<h2 id="switch_to_profile">SWITCH<em>TO</em>PROFILE</h2>
<p>Used to switch the application's association to the specified Profile. <strong>Specified Profile must not already be associated with another application</strong>; an application cannot be associated with more than one Profile. </p>
<h3 id="profilesrecap">Profiles Recap</h3>
<p>DataWedge is based on Profiles and Plug-ins. A Profile contains information about how DataWedge will behave with a given application.</p>
<p>Profile information consists of:</p>
<ul>
<li>Associated application</li>
<li>Input plug-in configurations</li>
<li>Output plug-in configurations</li>
<li>Process plug-in configurations</li>
</ul>
<p>DataWedge includes a default Profile, Profile0, which is created automatically the first time DataWedge runs.</p>
<p>Using Profiles, each application can have a specific DataWedge configuration. For example, each user application can have a Profile that outputs scanned data in the required format when that application comes to the foreground. DataWedge can be configured to process the same set of captured data differently based on the requirements of each application.</p>
<h3 id="note">Note</h3>
<p>A single Profile can be associated with one or more activities or apps. However, an activity can be associated with no more than one Profile. </p>
<h3 id="usagescenario">Usage Scenario</h3>
<p>Let’s say an application has two activities. ActivityA only requires EAN13 barcodes to be scanned. ActivityB only requires MSR card data. ProfileB is configured to only scan EAN13 barcodes and is left unassociated. ProfileM is configured to only accept MSR input and is left unassociated. When ActivityA launches it uses <code>SWITCH_TO_PROFILE</code> to activate ProfileB. Similarly, when ActivityB launches it uses <code>SWITCH_TO_PROFILE</code> to activate ProfileM.</p>
<p>If another activity/app comes to the foreground, DataWedge automatic Profile switching will set the DataWedge Profile accordingly, either to the default Profile or to an associated Profile.</p>
<p>When ActivityA (or ActivityB) returns to the foreground, it will use <code>SWITCH_TO_PROFILE</code> to return the Profile to ProfileB (or ProfileM).</p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.SWITCH_TO_PROFILE", "&lt;profile name&gt;");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.SWITCH</em>TO_PROFILE"</p>
<p><strong>&lt;profile name</strong>&gt;: The Profile name (a case-sensitive string) to set as the active Profile.</p>
<h3 id="resultcodes">Result Codes</h3>
<p>DataWedge returns the following error codes if the app includes the intent extras <code>RECEIVE_RESULT</code> and <code>COMMAND_IDENTIFIER</code> to enable the app to get results using the DataWedge result intent mechanism. See <a href="#example">Example</a>, below. </p>
<ul>
<li><strong>PROFILE<em>HAS</em>APP_ASSOCIATION -</strong> FAILURE</li>
<li><strong>PROFILE<em>NOT</em>FOUND -</strong> FAILURE </li>
<li><strong>PROFILE<em>ALREADY</em>SET -</strong> FAILURE</li>
<li><strong>PROFILE<em>NAME</em>EMPTY -</strong> FAILURE</li>
<li><strong>DATAWEDGE_DISABLED -</strong> FAILURE</li>
</ul>
<p>Also see the <a href="../resultinfo">Result Codes guide</a> for more information.  </p>
<h3 id="returnvalues">Return Values</h3>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).</p>
<h2 id="examplecode">Example Code</h2>
<pre><code>// define action and data strings
String switchToProfile = "com.symbol.datawedge.api.ACTION";
String extraData = "com.symbol.datawedge.api.SWITCH_TO_PROFILE";

public void onResume() {
        super.onResume();

        // create the intent
        Intent i = new Intent();

        // set the action to perform
        i.setAction(switchToProfile);

        // add additional info
        i.putExtra(extraData, "myProfile");

        // send the intent to DataWedge
        this.sendBroadcast(i);
}
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
<h3 id="comments">Comments</h3>
<p>This API function will have no effect if the specified Profile does not exist or is already associated with an application.</p>
<p>DataWedge has a one-to-one relationship between Profiles and activities; a Profile can be associated only with a single activity. When a Profile is first created, it's not associated with any application, and will not be activated until associated. This makes it possible to create multiple unassociated Profiles.</p>
<p>This API function activates such Profiles.</p>
<p>For example, let's say that ProfileA is unassociated and ProfileB is associated with activity B. If activity A is launched and uses the <code>SWITCH_TO_PROFILE</code> function to switch to ProfileA, then ProfileA will be active whenever activity A is in the foreground. When activity B comes to the foreground, DataWedge will automatically switch to ProfileB. </p>
<p>When activity A returns to the foreground, the app must use <code>SWITCH_TO_PROFILE</code> again to switch back to ProfileA. This would be done in the <code>onResume</code> method of activity A.</p>
<h3 id="notes">Notes</h3>
<ul>
<li>Because DataWedge will automatically switch Profile when the activity is paused, Zebra recommends that this API function be called from the onResume method of the activity.</li>
<li>After switching to a Profile, this unassociated Profile does not get assigned to the application/activity and is available to be used in the future with a different app/activity.</li>
<li>For backward compatibility, DataWedge’s automatic Profile switching is not affected by the above API commands. This why the commands work only with unassociated Profiles and apps.</li>
</ul>
<p>DataWedge auto Profile switching works as follows: </p>
<p><strong>Every second…</strong></p>
<ul>
<li>Sets <strong>newProfileId</strong> to the associated Profile ID of the current foreground activity. </li>
<li>If no associated Profile is found, sets <strong>newProfileId</strong> to the associated Profile ID of the current foreground app. </li>
<li>If no associated Profile is found, sets <strong>newProfileId</strong> to the current default Profile (which  MAY NOT be Profile0). </li>
<li>Checks the <strong>newProfileId</strong> against the <strong>currentProfileId</strong>. If they are different: <ul>
<li>deactivates current Profile</li>
<li>activates new Profile (<strong>newProfileId</strong>)</li>
<li>sets <strong>currentProfileId</strong> = <strong>newProfileId</strong></li></ul></li>
</ul>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>