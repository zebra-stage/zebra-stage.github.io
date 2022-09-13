<h2 id="get_scanner_status">GET<em>SCANNER</em>STATUS</h2>
<p>Introduced in DataWedge 6.5.</p>
<p>Returns the status of the scanner currently selected by DataWedge as the default.</p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.GET_SCANNER_STATUS", "");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.GET</em>SCANNER_STATUS"</p>
<p><strong>EXTRA VALUE</strong>: Empty string</p>
<h3 id="returnvalues">Return Values</h3>
<p>Returns a String of the name of the active DataWedge Profile</p>
<p><strong>EXTRA NAME</strong>: "com.symbol.datawedge.api.RESULT<em>SCANNER</em>STATUS" </p>
<p><strong>EXTRA TYPE</strong> [String]: [ ] <strong>Possible values</strong>:</p>
<ul>
<li><strong>WAITING</strong> - Scanner is ready to be triggered</li>
<li><strong>SCANNING</strong> - Scanner is emitting a scanner beam </li>
<li><strong>DISABLED</strong> - Scanner is disabled</li>
<li><strong>CONNECTED</strong> - An external (Bluetooth or serial) scanner is connected</li>
<li><strong>DISCONNECTED</strong> - The external scanner is disconnected</li>
</ul>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters.</p>
<h2 id="examplecode">Example Code</h2>
<h3 id="queryscannerstatus">Query Scanner Status</h3>
<pre><code>//Sending the intent to query scanner status
    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.GET_SCANNER_STATUS","");
    i.putExtra("SEND_RESULT","true");
    i.putExtra("com.symbol.datawedge.api.RESULT_CATEGORY","android.intent.category.DEFAULT");
    this.sendBroadcast(i);

// call in onResume()
private void registerReceivers(){
    IntentFilter filter = new IntentFilter();
    filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
    filter.addCategory(Intent.CATEGORY_DEFAULT);
    registerReceiver(receiver,filter);
}

//call in onPause()
private void unRegisterReceivers(){
    unregisterReceiver(receiver);
}
</code></pre>
<h3 id="receivequeryresults">Receive Query Results</h3>
<!-- added 6/27 per Dasun. why a class? Insert or replace? 
 -->
<pre><code>// Receiving the results 
class ResultIntentReceiver extends BroadcastReceiver {
@Override
public void onReceive(Context context, Intent intent) {
        if(intent.hasExtra("com.symbol.datawedge.api.RESULT_SCANNER_STATUS")) {
            String scannerStatus = intent.getStringExtra("com.symbol.datawedge.api.RESULT_SCANNER_STATUS");
            Log.d(TAG,"Scanner status:"+scannerStatus);
        }
    };
}

    private BroadcastReceiver mBroadcastReceiver = new BroadcastReceiver(){
    @Override
    public void onReceive(Context context, Intent intent){

    if (intent != null) {
        String command = intent.getStringExtra("COMMAND");
        String commandidentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
        String result = intent.getStringExtra("RESULT");
        Bundle bundle = new Bundle();
        String resultInfo = "";
        if (intent.hasExtra("RESULT_INFO")) {
            bundle = intent.getBundleExtra("RESULT_INFO");
            Set&lt;String&gt; keys = bundle.keySet();
            for (String key : keys) {
                resultInfo += key + ": " + bundle.getString(key) + "\n";
            }
        }
        String text = "Command: " + command + "\n" +
                "Result: " + result + "\n" +
                "Result Info: \n" + resultInfo + "\n" +
                "CID:" + commandidentifier;

        Log.d("TAG", "#DataWedgeTestApp# \nCommand: " + command + "\nResult: " + result + "\nReason:\n" + resultInfo);
        Toast.makeText(context, text, Toast.LENGTH_LONG).show();
        }
    };
};
</code></pre>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>