<h2 id="import_config">IMPORT_CONFIG</h2>
<p>Introduced in DataWedge 6.7.</p>
<p>Used to import a DataWedge Profile and/or Config settings files. <strong>A Profile is a single group of settings</strong> that control how DataWedge will behave with one or more specific applications and devices. <strong>A Config file can contain numerous Profiles</strong>, and stores all other DataWedge settings, including its status (enabled/disabled), logging and other configurable parameters.</p>
<blockquote>
  <p><strong>Importing a Config file</strong> (<code>database.db</code>) <strong><u>overwrites all DataWedge settings</u> and Profiles previously stored on the device</strong>. </p>
</blockquote>
<h3 id="intentbehavior">Intent Behavior</h3>
<ul>
<li>This API is designed for use <strong><em>after</em></strong> a new settings file (Config or Profile) has been pushed to the device.  </li>
<li>When the <code>IMPORT_CONFIG</code> intent is called, it checks the folder specified with the <code>FOLDER_PATH</code> attribute for the presence of DataWedge settings files. </li>
<li>If a Config file (always called "<code>datawedge.db</code>") is found, DataWedge restarts and immediately applies the settings in that file, permanentely erasing all previous DataWedge settings. </li>
<li>All imported Profile configuration files (always called "<code>dwprofile_&lt;profilename&gt;.db</code>") are added to the list of available Profiles on the device. </li>
<li>If a Profile exists on the device with the same name as one being imported, <strong>the existing Profile will be modified by the imported one</strong>.</li>
<li>If the specified folder contains a Profile with the same name as the currently active Profile, the new Profile is imported and its settings are applied immediately.</li>
<li>While the <code>IMPORT_CONFIG</code> intent is running, the <a href="../settings/#autoimport">Auto Import</a> function is disabled. </li>
</ul>
<p><strong>See also</strong>: </p>
<ul>
<li><a href="../../settings/#importaconfig">Importing DataWedge Config files</a></li>
<li><a href="../../settings/#importaprofile">Importing DataWedge profiles</a></li>
</ul>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.IMPORT_CONFIG", &lt;mainbundle&gt;);
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.IMPORT</em>CONFIG"</p>
<p><strong>BUNDLE</strong>: &lt;mainbundle&gt; (see parameters below)</p>
<h4 id="mainbundle">Main Bundle</h4>
<p>The main <code>IMPORT_CONFIG</code> bundle includes the following properties:</p>
<p><strong>FOLDER_PATH</strong> [String]: <strong>Required</strong> folder path and name for configuration files to import. </p>
<p><strong>FILE_LIST</strong> [ArrayList&lt;String&gt;]: <strong>Optional</strong> list of one or more required database (<code>.db</code>) files in the folder specified in <code>FOLDER_PATH</code> parameter. If not specified, DataWedge imports all files with a <code>.db</code> extension in the folder specified in <code>FOLDER_PATH</code> parameter. </p>
<p><strong>Zebra recommends using the <code>getExternalFilesDirs</code> API call</strong> to identify accessible external storage locations in the device before sending the <code>IMPORT_CONFIG</code> intent. For example: </p>
<pre><code>File[] fileDirs = getExternalFilesDirs(null);

Example return:
/storage/34E4-1117/Android/data/&lt;PackageName&gt;/files
/storage/sdcard2/0/Android/data/&lt;PackageName&gt;/files
/storage/emulated/0/Android/data/&lt;PackageName&gt;/files
</code></pre>
<p><strong>Note</strong>: The "34E4-1117" shown above is a symbolic link to an external SDcard. </p>
<h3 id="resultbundle">Result Bundle</h3>
<p>After an <code>IMPORT_CONFIG</code> intent is sent, DataWedge broadcasts a result intent with the  status (success or failure) of the import. Result info is returned as an ArrayList of bundles containing <code>RESULT_CODE</code> and <code>RESULT_CODE_INFO</code> sections to describe the additional information.</p>
<p><strong>RESULT</strong> [String]: "SUCCESS" or "FAILURE"</p>
<p><strong>RESULT_INFO</strong> [ArrayList&lt;bundles&gt;]: </p>
<p><strong>RESULT_CODE</strong>: The following result codes are returned with the specified folder/file name or the <code>RESULT_CODE_INFO</code> as indicated:</p>
<ul>
<li><strong>EMPTY<em>FOLDER</em>PATH –</strong> <code>FOLDER_PATH</code> is empty or not specified</li>
<li><strong>INVALID<em>FOLDER</em>PATH –</strong> Specified <code>FOLDER_PATH</code> is invalid</li>
<li><strong>RESULT<em>CODE</em>INFO -</strong> “&lt;folder path&gt;”</li>
<li><strong>INVALID<em>CONFIG</em>FILE –</strong> Corrupted database files present in specified folder</li>
<li><strong>CONFIG<em>FILE</em>NOT_EXIST -</strong> No valid DataWedge database files in specified folder</li>
<li><strong>RESULT<em>CODE</em>INFO -</strong> “dwprofile<em>&lt;profilename&gt;.txt" , “dwA</em>&lt;profilename&gt;.db”</li>
<li><strong>INVALID<em>FILE</em>NAME –</strong> Folder contains valid and invalid DataWedge .db file names</li>
<li><strong>RESULT<em>CODE</em>INFO -</strong> "&lt;invalid file name&gt;"</li>
<li><strong>CANNOT<em>READ</em>FILE –</strong> DataWedge was unable to read the specified database file</li>
</ul>
<p><a href="../resultinfo">More about Result Codes</a>  </p>
<h3 id="returnvalues">Return Values</h3>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters</p>
<h2 id="examplecode">Example Code</h2>
<h3 id="importfilesusingthepathsdcardconfigfolder">Import files using the path: "/sdcard/configFolder"</h3>
<pre><code>    private void importConfig() { 

        //MAIN BUNDLE PROPERTIES
    Bundle bMain = new Bundle();
    bMain.putString("FOLDER_PATH", "/sdcard/configFolder");

    ArrayList&lt;String&gt; fileNames = new ArrayList&lt;&gt;();
    fileNames.add("datawedge.db");
    fileNames.add("dwprofile_profileA.db");
    fileNames.add("dwprofile_profileB.db");

    bMain.putStringArrayList("FILE_LIST", fileNames);

    // send the intent
    Intent i = new Intent();
    i.setAction(ACTION);
    i.putExtra("com.symbol.datawedge.api.IMPORT_CONFIG", bMain);

    // request and identify the result code
    i.putExtra("SEND_RESULT","true");
    i.putExtra("COMMAND_IDENTIFIER","123456789");
    this.sendBroadcast(i);
    }
</code></pre>
<h3 id="receiveresultsoftheimport">Receive results of the import</h3>
<pre><code> // register to receive the result
public void onReceive(Context context, Intent intent){
  String command = intent.getStringExtra("COMMAND");
  String commandidentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
  String result = intent.getStringExtra("RESULT");
  Bundle bundle = new Bundle();
  String resultInfo = "";
  if (intent.hasExtra("RESULT_INFO")) {
  ArrayList&lt;Bundle&gt; bundleList = intent.getParcelableArrayListExtra("RESULT_INFO");                    
      if(bundleList!= null &amp;&amp; !bundleList.isEmpty()){
        for(Bundle resultBundle : bundleList){
            Set&lt;String&gt; keys = resultBundle.keySet();
            for (String key : keys) {
                if(key.equalsIgnoreCase("RESULT_CODE")){
                    resultInfo += key + ": " + resultBundle.getString(key);
                }else {
                    resultInfo += key + ": " + resultBundle.getString(key) + "\n";
                }
            }
        }
      }
  } 
}
</code></pre>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<p><a href="https://www.zebra.com/us/en/support-downloads.html">Zebra Support Central</a> | Integrator Guides, Product Manuals, Software Downloads and Support</p>
<p><a href="https://developer.zebra.com/welcome">LaunchPad</a> | Zebra Developer Community</p>
<p><a href="https://developer.android.com/reference/android/content/Intent.html">Intent</a> | Android Developers</p>
<p><a href="http://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> | Android Developers</p>
<p><a href="http://www.vogella.com/tutorials/AndroidIntent/article.html">Android Intents</a> | Tutorial</p>