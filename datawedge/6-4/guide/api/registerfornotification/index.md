<h2 id="register_for_notification">REGISTER<em>FOR</em>NOTIFICATION</h2>
<p>Introduced in DataWedge 6.4.</p>
<p>Used to register/unregister an app to receive a notification when the status of a DataWedge parameter changes. </p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Bundle b = new Bundle();
    b.putString("com.symbol.datawedge.api.APPLICATION_NAME","com.example.MyApp");
    b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE","PROFILE_SWITCH");
    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.REGISTER_FOR_NOTIFICATION", b);
    this.sendBroadcast(i);
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.REGISTER</em>FOR_NOTIFICATION"</p>
<p><strong>BUNDLE</strong>: </p>
<ul>
<li><code>APPLICATION_NAME</code> - Package name of the app to register </li>
<li><code>NOTIFICATION_TYPE</code> - Supported types:</li>
<li><code>PROFILE_SWITCH</code>  </li>
<li><code>SCANNER_STATUS</code> </li>
</ul>
<h3 id="returnvalues">Return Values</h3>
<p>Returns a bundle with status of the requested DataWedge <code>NOTIFICATION_TYPE</code></p>
<p><strong>EXTRA NAME</strong>: "com.symbol.datawedge.api.NOTIFICATION"</p>
<p><strong>BUNDLE</strong>:</p>
<ul>
<li><p><code>PROFILE_SWITCH</code>: </p></li>
<li><p>NOTIFICATION<em>TYPE: "PROFILE</em>SWITCH"</p></li>
<li><p>PROFILE_NAME: &lt;name of Profile now in use&gt;</p></li>
<li><p><code>SCANNER_STATUS</code>: </p></li>
<li><p>NOTIFICATION<em>TYPE: "SCANNER</em>STATUS" </p></li>
<li><p>SCANNER_STATUS: WAITING, SCANNING, CONNECTED, DISCONNECTED or DISABLED</p></li>
</ul>
<blockquote>
  <p><strong>Scanner status notifications are sent <u>only if the scanner in the active Profile is enabled</u></strong>. </p>
</blockquote>
<p><strong>WAITING</strong> – Scanner is enabled and ready to scan. When profile is switched and the scanner is enabled and waiting for trigger or soft scan intent.  When this event is received to the application it can broadcast a Soft scan intent to start scanning. </p>
<p><strong>SCANNING</strong> - Scanner has emitted the scan beam and scanning in progress. When application needs to disable other controls in the activity while the scanning in progress it can do the disabling when receiving this event.</p>
<p><strong>CONNECTED</strong> – Bluetooth scanner has connected with the device. This event can be used by applications to enable the Bluetooth scanner when it connected with the device. For that Scanner selection, should be set to Auto in the currently active profile. When this event is received, application can send the Disable scanner intent and the send the Enable scanner intent which will enable the Bluetooth scanner. </p>
<p><strong>DISCONNECTED</strong> – Bluetooth scanner has disconnected with the device. Similar to the Connected state in the event of Bluetooth scanner disconnection application can send Disable scanner intent followed by the Enable scanner intent which will enable the current default scanner. </p>
<p><strong>DISABLED</strong> – Scanner is disabled. This will be broadcast by the ScannerPlugin when profile gets disabled or scanner is disabled with disabled scanner intent.</p>
<p><strong>Note</strong>: The <code>PROFILE_NAME</code> (of the currently active profile) is returned with <code>SCANNER_STATUS</code> to allow the developer to filter scanner events only for the required profile. </p>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters.</p>
<h3 id="examples">Examples</h3>
<pre><code>// TO REGISTER AN APP TO RECIEVE NOTIFICATIONS

// Register for notifications - PROFILE_SWITCH

    Bundle b = new Bundle();
    b.putString("com.symbol.datawedge.api.APPLICATION_NAME","com.example.intenttest");
    b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE","PROFILE_SWITCH");
    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.REGISTER_FOR_NOTIFICATION", b); // (1)
    this.sendBroadcast(i);

// To unregister, change only the iPutExtra command

    Bundle b = new Bundle();
    b.putString("com.symbol.datawedge.api.APPLICATION_NAME","com.example.intenttest");
    b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE","PROFILE_SWITCH");
    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.UNREGISTER_FOR_NOTIFICATION", b);
    this.sendBroadcast(i);


// Register for notifications - SCANNER_STATUS

    Bundle b = new Bundle();
    b.putString("com.symbol.datawedge.api.APPLICATION_NAME","com.example.intenttest");
    b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE", "SCANNER_STATUS");
    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.REGISTER_FOR_NOTIFICATION", b);//(1)
    this.sendBroadcast(i);

// To unregister, change only the iPutExtra command

    Bundle b = new Bundle();
    b.putString("com.symbol.datawedge.api.APPLICATION_NAME","com.example.intenttest");
    b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE", "SCANNER_STATUS");
    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.putExtra("com.symbol.datawedge.api.UNREGISTER_FOR_NOTIFICATION", b);
    this.sendBroadcast(i);


// TO RECIEVE NOTIFICATIONS

    public static final String NOTIFICATION_ACTION  = "com.symbol.datawedge.api.NOTIFICATION_ACTION";
    public static final String NOTIFICATION_TYPE_SCANNER_STATUS = "SCANNER_STATUS";
    public static final String NOTIFICATION_TYPE_PROFILE_SWITCH = "PROFILE_SWITCH";
    public static final String NOTIFICATION_TYPE_CONFIGURATION_UPDATE = "CONFIGURATION_UPDATE";

    private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            String action = intent.getAction();
            Log.d(TAG, "#DataWedge-APP# Action: " + action);

            if(action.equals(NOTIFICATION_ACTION)){

                if(intent.hasExtra("com.symbol.datawedge.api.NOTIFICATION")) {
                    Bundle b = intent.getBundleExtra("com.symbol.datawedge.api.NOTIFICATION");
                    String NOTIFICATION_TYPE  = b.getString("NOTIFICATION_TYPE");
                    if(NOTIFICATION_TYPE!= null) {
                        switch (NOTIFICATION_TYPE) {
                            case NOTIFICATION_TYPE_SCANNER_STATUS:
    Log.d(TAG, "SCANNER_STATUS: status: " + b.getString("STATUS") + ", profileName: " + b.getString("PROFILE_NAME"));
                                break;

                            case NOTIFICATION_TYPE_PROFILE_SWITCH:
    Log.d(TAG, "PROFILE_SWITCH: profileName: " + b.getString("PROFILE_NAME") + ", profileEnabled: " + b.getBoolean("PROFILE_ENABLED"));
                                break;

                            case NOTIFICATION_TYPE_CONFIGURATION_UPDATE:
                                break;
                        }
                    }
                }
            }
        }
    };

    void registerReceivers() {
    //to register the broadcast receiver
        IntentFilter filter = new IntentFilter();
        filter.addAction(NOTIFICATION_ACTION);
        registerReceiver(broadcastReceiver, filter);//Android method
    }
    void unRegisterReceivers() {
    //to unregister the broadcast receiver
        unregisterReceiver(broadcastReceiver); //Android method
    }
</code></pre>
<h3 id="comments">Comments</h3>
<p>(none)</p>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>