<h2 id="get_version_info">GET<em>VERSION</em>INFO</h2>
<p>Introduced in DataWedge 6.4.</p>
<p>Gets the version numbers of DataWedge, SimulScan, the Scanner Framework/Decoder Library currently installed on the device. </p>
<h3 id="functionprototype">Function Prototype</h3>
<pre><code>Intent i = new Intent();
i.setAction("com.symbol.datawedge.api.ACTION");
i.putExtra("com.symbol.datawedge.api.GET_VERSION_INFO", "");
</code></pre>
<h3 id="parameters">Parameters</h3>
<p><strong>ACTION</strong> [String]: "com.symbol.datawedge.api.ACTION"</p>
<p><strong>EXTRA<em>DATA</strong> [String]: "com.symbol.datawedge.api.GET</em>VERSION_INFO"</p>
<p><strong>EXTRA VALUE</strong>: Empty string</p>
<h3 id="returnvalues">Return Values</h3>
<p>Returns a bundle with the version numbers of DataWedge, SimulScan, the Scanner Framework/Decoder Library currently installed on the device. </p>
<p><strong>EXTRA NAME</strong>: "com.symbol.datawedge.api.GET<em>VERSION</em>INFO_RESULT"</p>
<p><strong>EXTRA TYPE</strong>: [Bundle] </p>
<p><strong>BUNDLE</strong>:</p>
<ul>
<li>DATAWEDGE, 6.3.1</li>
<li>BARCODE_SCANNING, 16.0.56.1  </li>
<li>DECODER<em>LIBRARY, IMGKIT</em>XXXXX</li>
<li>SIMULSCAN, 1.6.13</li>
</ul>
<p>Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:</p>
<pre><code>:::term
$ adb logcat -s DWAPI
</code></pre>
<p>Error messages are logged for invalid actions and parameters.</p>
<h2 id="examplecode">Example Code</h2>
<pre><code>    :::java
    //Retrieving version information
    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();
        if(action.equals("com.symbol.datawedge.api.RESULT_ACTION")){
            Bundle b = intent.getExtras();

    if(intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_VERSION_INFO")){
                String SimulScanVersion  = "Not supported";
                String[] ScannerFirmware = {""};
                Bundle res = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_VERSION_INFO");
                String DWVersion = res.getString("DATAWEDGE");
                String BarcodeVersion = res.getString("BARCODE_SCANNING");
                String DecoderVersion = res.getString("DECODER_LIBRARY");
                if(res.containsKey("SCANNER_FIRMWARE")){
                    ScannerFirmware = res.getStringArray("SCANNER_FIRMWARE");
                }
                if(res.containsKey("SIMULSCAN")) {
                    SimulScanVersion = res.getString("SIMULSCAN");
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