<h2 id="overview">Overview</h2>
<p>DataWedge APIs operate primarily through Android intents--specific commands that can be used by other applications to control data capture without the need to directly access the underlying hardware APIs. This guide describes the functionality of the intents supported by DataWedge and their effects on data capture and DataWedge Profiles and settings. </p>
<p>In DataWedge versions prior to 6.2, applications access DataWedge APIs by broadcasting an intent, and use the primary pieces of information in the intent (action and data) to specify which API function to perform. DataWedge 6.2 and later implement intents as extras of an action intent, permitting multiple API calls to be sent as extras using a single intent action. </p>
<p><strong>SEE ALSO</strong>:</p>
<ul>
<li><strong><a href="../../output/intent">Using Intents</a> -</strong> A brief primer on intents and how to configure DataWedge to use them</li>
<li><strong><a href="https://developer.zebra.com/community/home/blog/2017/06/27/datawedge-apis-benefits-challenges">DataWedge APIs - Benefits & Usage Scenarios</a> -</strong> by Zebra engineer Darryn Campbell </li>
<li><strong><a href="../tutorials">Sample DataWedge app</a> -</strong> Demonstrates how to receive scanned data through an intent</li>
</ul>
<hr />
<h3 id="requirements">Requirements</h3>
<p>The use of DataWedge APIs requires experience with Java programming and familiarity with <a href="https://developer.android.com/reference/android/content/Intent.html">Android Intents</a>. It also requires knowledge of DataWedge usage, features and terminology. For more information about DataWedge, see the DataWedge <a href="../../setup">Setup Guide</a> and the <a href="../../overview">Architecture Overview</a>. It also might be helpful to read the DataWedge section of the Integrator Guide included with Zebra devices.</p>
<h3 id="sendingintents">Sending Intents</h3>
<p>The new syntax defined in DataWedge 6.2 permits multiple DataWedge API calls as extras on a single intent action. The syntax is as follows:</p>
<pre><code>:::java
// Send multiple intents as extras

    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    String[] profiles = {"MainInventory"};
    i.putExtra("com.symbol.datawedge.api.DELETE_PROFILE", profiles);
    i.putExtra("com.symbol.datawedge.api.GET_VERSION_INFO", "");
</code></pre>
<h3 id="receivingresults">Receiving Results</h3>
<p>For intents that query DataWedge for information (such as in "GET<em>ACTIVE</em>PROFILE"), the app must register to receive the result with a filter that identifies the action and category of the result intent. The code below shows how to register the broadcast receiver to receive the results:</p>
<pre><code>:::java
// Register broadcast receiver and filter results

    void registerReceivers() {
        IntentFilter filter = new IntentFilter();
        filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
        filter.addCategory("android.intent.category.DEFAULT");
        registerReceiver(mybroadcastReceiver, filter);
    }

//Receiving the result

    private BroadcastReceiver myBroadcastReceiver = new BroadcastReceiver(){

    @Override
        public void onReceive(Context context, Intent intent){

            Bundle extras = getIntent().getExtras();
            if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE")){
                String activeProfile = extras.getString("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE");
</code></pre>
<!--
### APIs Implemented Through Extras

The following APIs can be invoked as extras from a single intent action:

* **[CLONE_PROFILE](../cloneprofile) -** creates a copy of an existing DataWedge Profile wuth settings.
* **[DELETE_PROFILE](../deleteprofile) -** deletes Profile(s) from the device. 
* **[ENABLE_DATAWEDGE](../enabledatawedge) -** switches DataWedge on or off. 
* **[GET_ACTIVE_PROFILE](../getactiveprofile) -** retrieves the name of the Profile currently in use. 
* **[GET_DATAWEDGE_STATUS](../getdatawedgestatus) -** returns the DataWedge state (enabled/disabled). 
* **[GET_PROFILES_LIST](../getprofileslist) -** retrieves a list of DataWedge Profiles on the device.
* **[GET_VERSION_INFO](../getversioninfo) -** gets version numbers of DataWedge and of scanner and SimulScan frameworks on the device. 
* **[RESTORE_CONFIG](../restoreconfig) -** restores a DataWedge configuration to its default settings.
* **[REGISTER_FOR_NOTIFICATION](../registerfornotification) -** tells DataWedge to inform specified app or activity of updates to scanner and/or Profile status. 
* **[RENAME_PROFILE](../renameprofile) -** changes the name of an existing Profile. 
* **[SET_CONFIG](../setconfig) -** create new, or overwrite or update an existing Profile 
* **[UNREGISTER_FOR_NOTIFICATION](../registerfornotification) -** cancels request for app notification.

### APIs Implemented as Actions

The following API calls require a distinct intent action for each: 

* [SoftScanTrigger](../softscantrigger)
* [ScannerInputPlugin](../scannerinputplugin)
* [EnumerateScanners](../enumeratescanners) 
* [SetDefaultProfile](../setdefaultprofile)
* [ResetDefaultProfile](../resetdefaultprofile)
* [SwitchToProfile](../switchtoprofile)

> **DataWedge 6.3 supports current and legacy API syntaxes**. 

-->
<p><strong>Important: DataWedge API commands are not queued, <u>and might be ignored</u></strong> if sent while DataWedge is busy processing an earlier intent. When an API command is sent, DataWedge executes the command only if it is not busy doing something else. Exceptions: </p>
<ul>
<li><code>STOP_SCANNING</code> - immediately interrupts a scan operation</li>
<li><code>DISABLE_PLUGIN</code> - immediately disables the current scanner input plug-in</li>
</ul>
<p>To help ensure proper execution, Zebra recommends inserting delay code prior to critical commands. See the <a href="../softscantrigger">SoftScanTrigger</a> API for an example.  </p>
<h3 id="nestedbundles">Nested Bundles</h3>
<p>DataWedge 6.3 implements the concept of nested bundles, which allows a "bundle" of values to be included as one value in another bundle. Bundles also can be multiple layers deep. For example, the image below illustrates a <code>PARAM_LIST</code> bundle nested within the <code>PLUGIN_CONFIG[0]</code> bundle nested within the API call <code>SET_CONFIG</code>. Nesting is required to configure with intents the many parameters contained in a Profile.</p>
<p>The image further illustrates that the <code>SET_CONFIG</code> API call can implement a second nested bundle, <code>PLUGIN_CONFIG[n]</code>, which can contain its own <code>PARAM_LIST</code>. </p>
<p><img style="height:450px" src="dw_nested_bundles.png"/>
<br></p>
<h3 id="example">Example</h3>
<p>The Java code below implements a nested bundle. </p>
<pre><code>//Using the SET_CONFIG API and a nested bundle.

:::java
Bundle bMain = new Bundle();
bMain.putString("PROFILE_NAME","Profile2");
bMain.putString("PROFILE_ENABLED", "true");
bMain.putString("CONFIG_MODE","CREATE_IF_NOT_EXIST");
bMain.putString("RESET_CONFIG", "true");


Bundle bundleApp1 = new Bundle();
bundleApp1.putString("PACKAGE_NAME","com.symbol.emdk.simulscansample1");
bundleApp1.putStringArray("ACTIVITY_LIST", new String[]{
        "com.symbol.emdk.simulscansample1.DeviceControl",
        "com.symbol.emdk.simulscansample1.MainActivity",
        "com.symbol.emdk.simulscansample1.ResultsActivity.*",
        "com.symbol.emdk.simulscansample1.ResultsActivity2",
        "com.symbol.emdk.simulscansample1.SettingsFragment1"});


Bundle bundleApp2 = new Bundle();
bundleApp2.putString("PACKAGE_NAME","com.example.intents.datawedgeintent");
bundleApp2.putStringArray("ACTIVITY_LIST", new String[]{
        "com.example.intents.datawedgeintent.DeviceControl",
        "com.example.intents.datawedgeintent.MainActivity",
        "com.example.intents.datawedgeintent.ResultsActivity",
        "com.example.intents.datawedgeintent.SettingsFragment1"});

Bundle bundleApp3 = new Bundle();
bundleApp3.putString("PACKAGE_NAME","*");
bundleApp3.putStringArray("ACTIVITY_LIST", new String[]{"*"});


Bundle bundleApp4 = new Bundle();
bundleApp4.putString("PACKAGE_NAME","com.symbol.myzebraapp");
bundleApp4.putStringArray("ACTIVITY_LIST", new String[]{"*"});

bMain.putParcelableArray("APP_LIST", new Bundle[]{
        bundleApp1
        ,bundleApp2
        ,bundleApp3
        ,bundleApp4
});

Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.SET_CONFIG", bMain);
this.sendBroadcast(i);
</code></pre>
<hr />
<p><strong>Related Guides</strong>:</p>
<ul>
<li><a href="../">DataWedge APIs</a></li>
<li><a href="../../demo">DataWedge Demo App</a></li>
</ul>
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>