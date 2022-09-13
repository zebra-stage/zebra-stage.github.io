<h2 id="get_ignore_disabled_profiles">GET<em>IGNORE</em>DISABLED_PROFILES</h2>
<p>Introduced in DataWedge 6.8. </p>
<p>Returns the status of the "Ignore Disabled Profiles" parameter of DataWedge. If set to true, DataWedge is prevented from switching to any Profile that is not enabled, including Profile0. </p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.GET_IGNORE_DISABLED_PROFILES", "");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>INTENT<em>EXTRA</strong> [String]: "com.symbol.datawedge.api.GET</em>IGNORE<em>DISABLED</em>PROFILES"</p>
<h3 id="returnvalues">Return Values</h3>
<p>Returns a String indicating whether DataWedge ignores disabled Profiles</p>
<p><strong>EXTRA NAME</strong>: "com.symbol.datawedge.api.GET<em>IGNORE</em>DISABLED_PROFILES" </p>
<p><strong>POSSIBLE VALUES</strong>: [String]: ["true" , "false" ]</p>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters.</p>
<h2 id="examplecode">Example Code</h2>
<pre><code>    //Sample code for sending the intent to GET the setting
        Intent i = new Intent();
        i.setAction("com.symbol.datawedge.api.ACTION");
        i.putExtra("com.symbol.datawedge.api.GET_IGNORE_DISABLED_PROFILES","");

    // request and identify the result code
        i.putExtra("SEND_RESULT","true");
        i.putExtra("COMMAND_IDENTIFIER","123456789");//user specified unique id

        this.sendBroadcast(i);

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
<h3 id="receivingtheresultsofgetset">Receiving the results of GET/SET</h3>
<pre><code>// Register/unregister broadcast receiver and filter results

    void registerReceivers() {
            IntentFilter filter = new IntentFilter();
            filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
            filter.addCategory("android.intent.category.DEFAULT");
            registerReceiver(mybroadcastReceiver, filter);
    }

    void unRegisterReceivers(){
            unregisterReceiver(mybroadcastReceiver);
    }
        //receiving the results
            BroadcastReceiver resultReceiver =  new BroadcastReceiver() {
                @Override
                public void onReceive(Context context, Intent intent) {
                    String command = intent.getStringExtra("COMMAND");
                    String commandIdentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
                    String result = intent.getStringExtra("RESULT");

        Bundle bundle;
        String resultInfo = "";
        if(intent.hasExtra("RESULT_INFO")){
            bundle = intent.getBundleExtra("RESULT_INFO");
            Set&lt;String&gt; keys = bundle.keySet();
            for (String key: keys) {
                Object object = bundle.get(key);
                if(object instanceof String){
                    resultInfo += key + ": "+object+ "\n";
                }
                else if(object instanceof String[]){
                    String[] codes = (String[])object;
                    for(String code : codes){
                        resultInfo += key + ": "+code+ "\n";
                    }
                }
            }
        }

        String text = "Command: "+command+"\n" +
                "Result: " +result+"\n" +
                "Result Info: " +resultInfo + "\n" +
                "CID:"+commandIdentifier;

        Log.d(TAG,text);

    }
};
</code></pre>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>