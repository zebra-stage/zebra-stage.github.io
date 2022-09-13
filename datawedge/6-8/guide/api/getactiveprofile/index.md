<h2 id="get_active_profile">GET<em>ACTIVE</em>PROFILE</h2>
<p>Gets the name of the Profile currently in use by DataWedge.</p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.GET_ACTIVE_PROFILE", "");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.GET</em>ACTIVE_PROFILE"</p>
<p><strong>EXTRA VALUE</strong>: Empty string</p>
<h3 id="returnvalues">Return Values</h3>
<p>Returns a String of the name of the active DataWedge Profile</p>
<p><strong>EXTRA NAME</strong>: "com.symbol.datawedge.api.RESULT<em>GET</em>ACTIVE_PROFILE" </p>
<p><strong>EXTRA TYPE</strong> [String]: [ ]</p>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters.</p>
<h2 id="examplecode">Example Code</h2>
<pre><code>//Sending the intent
    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.GET_ACTIVE_PROFILE", "");
    this.sendBroadcast(i);

//Receiving the result
    private BroadcastReceiver myBroadcastReceiver = new BroadcastReceiver(){

        @Override
        public void onReceive(Context context, Intent intent){

            Bundle extras = getIntent().getExtras();
            if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE")){
                String activeProfile = extras.getString("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE");


// Register/unregister broadcast receiver and filter results

    void registerReceivers() {
        IntentFilter filter = new IntentFilter();
        filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
        filter.addCategory("android.intent.category.DEFAULT");
        registerReceiver(mybroadcastReceiver, filter);
    }

    void unRegisterReceivers(){
        unregisterReceiver(mybroadcastReceiver);
    }       
</code></pre>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>