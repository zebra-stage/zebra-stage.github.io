<h2 id="overview">Overview</h2>
<p>The <a href="../../../../../simulscan">Zebra SimulScan</a> app permits simultaneous capture of barcodes, images, text, signatures, phone numbers and other data from a scan target in a single pass. A SimulScan Input option adds this capability to DataWedge. When form data is captured according to a designated SimulScan template, data can be processed or formatted as required using Process Plug-ins. For more information, refer to the <a href="../../../../../simulscan">SimulScan User Guide</a>. </p>
<blockquote>
  <p>This feature can be used only on <a href="../../../../../simulscan">devices that support SimulScan</a>. </p>
</blockquote>
<p><img style="height:350px" src="simulscan_input.png"/>
<em>SimulScan Input options</em>
<br></p>
<p><strong>Device Selection -</strong> permits selection between the device camera and the default scanning device set by the system (recommended).</p>
<p><strong>Template selection -</strong> sets a SimulScan template for the Profile being configured. <strong>Templates included with DataWedge</strong>:</p>
<ul>
<li><strong>BankCheck.xml -</strong> captures the account number and routing number from the machine-readable zone (MRZ) of a check.</li>
<li><strong>Barcode1.xml -</strong> decodes a single barcode of any symbology.</li>
<li><strong>Barcode2.xml -</strong> decodes two barcodes of the same or differing symbologies.</li>
<li><strong>Barcode4.xml -</strong> decodes four barcodes of the same or differing symbologies.</li>
<li><strong>Barcode5.xml -</strong> decodes five barcodes of the same or differing symbologies.</li>
<li><strong>Barcode10.xml -</strong> decodes 10 barcodes of the same or differing symbologies.</li>
<li><strong>BookNumber.xml -</strong> decodes 10- or 13-digit <a href="http://www.isbn.org/faqs_general_questions">ISBN codes</a>.</li>
<li><strong>DocCap+Optional-Barcode.xml -</strong> captures the form as an image and optionally decodes a barcode, if present. <strong>This is the default form if none is selected</strong>.</li>
<li><strong>DocCap+Required-Barcode.xml -</strong> captures the form and decodes any available barcode.</li>
<li><strong>TravelDoc.xml -</strong> captures information from the machine-readable zone (MRZ) of a travel document such as a passport.</li>
<li><strong>Unstructured Multi-Line.xml -</strong> uses OCR to acquire multiple lines of alpha/numeric text.</li>
<li><strong>Unstructured Single Line.xml -</strong> uses OCR to acquire a single line of alpha/numeric text.</li>
</ul>
<p><em>The names of all Templates included with SimulScan are preceded by the word "Default" plus a hyphen</em>.</p>
<p>Custom template XML files copied to the <code>/enterprise/device/settings/datawedge/templates</code> directory are added to the list above and available for selection. </p>
<p><strong>Note: Files and folders in the</strong> <code>/enterprise</code> <strong>directory are <u>invisible</u> to the Android File Browser</strong>; they can be made visible in File Browser by manually inputting the path.</p>
<p>Zebra partners and other authorized users can create custom templates online using Zebra's <a href="../../../../../simulscan/1-1/guide/templatebuilder">SimulScan Template Builder</a>. </p>
<p><strong>Dynamic Template Params –</strong> permits the configuration of parameters when using Dynamic Templates, which offer the flexiblity of accepting input parameters based on varying usage scenarios without requiring a different template for each. If the selected template contains Dynamic-Template parameters, DataWedge prompts the user to configure the parameters. Currently supports Dynamic Quantity, the number of barcodes (from 1-99; default=5) to be decoded on a form. Dynamic Templates are created using <a href="http://simulscan.zebra.com/">Template Builder</a>. </p>
<!-- <img style="height:350px" src="dynamic_template.png"/>
_Dynamic Barcode Quantity_
<br>
 -->
<p><strong>Region separator -</strong> used to configure a separator character for SimulScan text-region data (see Notes, below). When multiple text regions exist, the region separator will be inserted between the data strings from each region on the acquisition form. Region separators can be used with the <a href="../../output/keystroke">Keystroke Output Action key</a> character settings to dispatch SimulScan region data to separate text fields.</p>
<p><strong>Possible values</strong>:</p>
<ul>
<li>None (default)</li>
<li>Tab</li>
<li>Line feed </li>
<li>Carriage return </li>
</ul>
<p><strong>Log directory –</strong> used to change the default folder path (<code>/storage/emulated/0/simulscan/logs</code>) for storing the SimulScan logs on the device. <strong>Note</strong>: SimulScan logging is enabled/disabled by the SimulScan template in use; logging is not controlled by DataWedge. </p>
<p><strong>Timestamp –</strong> Enable/disable automatic insertion of a timestamp (<code>yyyy-MM-dd HH:mm:ss</code>) along with acquired data.</p>
<h3 id="simulscannotes">SimulScan Notes</h3>
<ul>
<li><strong>DataWedge concatenates all text captured through SimulScan</strong> into a single string and performs processing on that string. </li>
<li><strong>Barcode, OCR and OMR regions</strong> are considered text regions. When using keystroke output and/or IP output, only text-region data will be dispatched to the foreground application or to a remote server.</li>
<li><strong>Picture-region data</strong> (images) can be retrieved only through Intent Output.</li>
<li><strong>Text captured through SimulScan</strong> is concatenated into a single string and processing is performed on that string.</li>
<li><strong>If Barcode Input is enabled in a Profile</strong>, enabling SimulScan in that Profile will cause the Barcode Input Plug-in to be disabled. </li>
</ul>
<hr />
<h3 id="simulscanrelateddata">SimulScan-related Data</h3>
<p>The SimulScan-related data added to an Intent bundle can be retrieved using the following calls: </p>
<ul>
<li><code>Intent.getStringtExtra()</code></li>
<li><code>Intent. getParcelableArrayListExtra()</code></li>
<li><code>Bundle.getInt()</code></li>
<li><code>Bundle.getString()</code></li>
<li><code>Bundle.getByteArray()</code></li>
</ul>
<!-- * `Intent.getSerializableExtra()` -->
<p>The calls above can use the following String tags:</p>
<ul>
<li><p><strong>String SIMULSCAN<em>TEMPLATE</em>NAME<em>TAG = "com.symbol.datawedge.simulscan</em>template_name"</strong>; The name of the template which used by SimulScan to capture the form.</p></li>
<li><p><strong>String SIMULSCAN<em>REGIONS</em>BUNDLE<em>TAG= "com.symbol.datawedge.simulscan</em>region_data"</strong>; Return an array of Bundles where each bundle contains data and information about a region and the form.</p></li>
<li><p><strong>String SIMULSCAN<em>REGION</em>NAME<em>TAG = "com.symbol.datawedge.simulscan</em>region_name"</strong>; Returns the region name of the bundle object for reach region. To get the region name <code>Bundle.getString()</code> should be called.</p></li>
<li><p><strong>String SIMULSCAN<em>REGION</em>ID<em>TAG = "com.symbol.datawedge.simulscan</em>region_id"</strong>; Returns the region id of the bundle object for reach region. Region id is an integer and can be retrieved by calling <code>Bundle.getInt ()</code>.</p></li>
<li><p><strong>String SIMULSCAN<em>REGION</em>STRING<em>DATA= "com.symbol.datawedge.simulscan</em>region<em>string</em>data"</strong>; Returns the string data of the region. String data comes with barcode, OCR and OMR data.</p></li>
<li><p><strong>String SIMULSCAN<em>REGION</em>BINARY<em>DATA= "com.symbol.datawedge.simulscan</em>region<em>binary</em>data"</strong>;
Returns the data of the region in the form of byte array. Binary data comes only for picture regions and the form image. Both picture and form data can be load in to a bitmap and display in the application.</p></li>
<li><p><strong>String SIMULSCAN<em>REGION</em>TYPE<em>TAG = "com.symbol.datawedge.simulscan</em>region_type"</strong>; Returns the region type of the bundle object for reach region. Region type is a string and can be retrieved by calling <code>Bundle.getString ()</code>. </p></li>
</ul>
<p>Possible return values for the region type:</p>
<ul>
<li><strong>Barcode -</strong> Region is a barcode.</li>
<li><strong>OCR -</strong> Region is an Optical Character Recognition (OCR) region (i.e name or address). </li>
<li><strong>OMR -</strong> Region is an Optical Mark Recognition (OMR) region (i.e checkbox, radio button).</li>
<li><strong>Picture -</strong> Region is a picture; data will be in the JPEG format.</li>
<li><strong>Form -</strong> Form type to specify that the bundle contains a picture of the captured form. Form image will be in the JPEG format.</li>
</ul>
<p><strong>Important</strong>: For some scanning applications, it might be preferable for decoded data to be sent directly to the current activity and not necessarily displayed. For such instances, the activity must be designated  as "singleTop" in its AndroidManifest.xml file. Failure to designate an activity in this way will cause an instance of the activity to be launched on every decode, and the data sent to each newly spawned copy. </p>
<p>For more information about Android Intents, please refer to the <a href="https://developer.android.com/guide/components/intents-filters.html">Android Developer site</a>.</p>
<hr />
<p><strong>Related guides</strong>:</p>
<ul>
<li><a href="../../../../../simulscan">SimulScan User Guide</a> </li>
<li><a href="../../profiles">DataWedge Profiles</a></li>
<li><a href="../../api">DataWedge APIs</a> </li>
</ul>