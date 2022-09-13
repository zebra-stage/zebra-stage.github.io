<h2 id="overview">Overview</h2>
<p>Intent Output allows data acquired and processed by DataWedge to be sent to the associated foreground application as payload within an Android intent object. This allows acquired data to be passed programmatically to an application, where it can be consumed or further processed. The core components of an application (its activities, services and broadcast receivers) also can be activated by intents, as can many DataWedge features through the <a href="../../api">DataWedge APIs</a>.   </p>
<h3 id="theintentobject">The Intent Object</h3>
<p>An intent object is a bundle of information that describes a desired action. It includes the data to be acted upon, the category of component that should perform the action and other pertinent data and/or instructions. When an intent is initiated, Android locates an appropriate component to respond to the intent, launches a new instance of the component (if needed), and passes the intent object to it.</p>
<p>Components advertise their capabilities (the kinds of intents they can respond to) through intent filters. Since the system must learn which intents a component can handle before it launches the component, intent filters are specified in the app's <code>AndroidManifest.xml</code> file as &lt;intent-filter&gt; elements. A component can have any number of intent filters, each describing a different capability.  </p>
<p>For example, if the manifest contains…</p>
<pre><code>&lt;intent-filter&gt;
...
&lt;action android:name="android.intent.action.DEFAULT" /&gt;
&lt;category android:name="android.intent.category.MAIN" /&gt;
&lt;/intent-filter&gt;
</code></pre>
<p>…the intent action in the Intent Output configuration would be:</p>
<p><code>android.intent.category.DEFAULT</code></p>
<p>and the Intent category would be:</p>
<p><code>android.intent.category.MAIN</code></p>
<hr />
<p><strong>SEE ALSO</strong>:</p>
<ul>
<li><strong><a href="https://developer.zebra.com/community/android/android-forums/android-blogs/blog/2017/06/27/datawedge-apis-benefits-challenges">DataWedge APIs - Benefits & Usage Scenarios</a> -</strong> by Zebra engineer Darryn Campbell </li>
<li><strong><a href="../../api/tutorials">Sample DataWedge app</a> -</strong> Demonstrates how to receive scanned data through an intent</li>
</ul>
<hr />
<h3 id="outputtingrawdata">Outputting Raw Data</h3>
<p>In addition to its normal plain-text and hexadecimal modes, DataWedge can output acquired data in its raw form, before the application of any encoders. This can be useful if custom encoders are needed for acquiring character sets not supported by Zebra.  </p>
<p>Raw data is received as a byte stream using the <code>com.symbol.datawedge.decode_data</code> intent extra. See the <a href="#singledecodemode">Single Decode Mode section</a> below. </p>
<blockquote>
  <p><strong>Raw data cannot be output as keystrokes</strong>. </p>
</blockquote>
<hr />
<h2 id="intentoutputsetup">Intent Output Setup</h2>
<p>DataWedge invokes an intent though an <strong>Intent action</strong> in an <strong>Intent category</strong> as described in its <code>AndroidManifest.xml</code> file. </p>
<p>When combined, these two values are like a "channel" to which an app can listen for intents that use the same combination, filtering out "noise" from other intents that use different value pairs. <strong>Once these values are known, DataWedge Intent Output must be set to match</strong>. </p>
<blockquote>
  <p><strong>Important</strong>: For scanning applications that output directly to an activity, <strong>the activity must be designated as "singleTop"</strong> in the app's <code>AndroidManifest.xml</code> file. Failure to designate an activity in this way will cause an instance of the activity to be launched with every decode, and the acquired data sent to each newly spawned instance. </p>
  <p>The parameters of this feature can be configured through the UI or by using the <a href="../../api/setconfig">Set Config API</a>.</p>
</blockquote>
<hr />
<p><strong>To set a DataWedge Action/Category pair</strong>: </p>
<p><strong>&#49;. Locate the Intent Output section of the Profile</strong> being configured.</p>
<p><strong>&#50;. Check "Enabled" box</strong> to activate Intent Output:<br />
<img style="height:350px" src="../intent_output 2.png"/>
<em>Intent Output options for the "Launcher" Profile</em>
<br></p>
<p><strong>&#51;. Specify action, category and delivery</strong> as described below: </p>
<p><strong>Intent action -</strong> specifies the action to handle the intent </p>
<p><strong>Intent category -</strong> specifies the category of intent to be handled </p>
<p><strong>Intent delivery -</strong> used to select one of three delivery methods for intent-based data:</p>
<ul>
<li><strong>Send via startActivity</strong> </li>
<li><strong>Send via startService</strong> </li>
<li><strong>Broadcast Intent</strong> </li>
</ul>
<p><strong>When Intent delivery is set to Broadcast Intent</strong>, DataWedge sets the <strong>Receiver foreground flag</strong> <code>Intent.FLAG_RECEIVER_FOREGROUND</code> in the broadcast Intent, giving the broadcast recipient permission to run at foreground priority with a shorter timeout interval. <strong>Zebra recommends using this flag <u>only if delays are seen</u> in delivery of intents immediately following device boot-up</strong>.</p>
<hr />
<h2 id="serialoutput">Serial Output</h2>
<p>When acquiring data with a device connected to a serial/USB port, data populates the intent bundle using the bundle extras listed below. <strong>Note</strong>: Some of these extras were introduced with DataWedge 6.5, as indicated. <!-- **See important note that follows**.  --> </p>
<h3 id="parameters">Parameters</h3>
<p><strong>Extra Name</strong>: "com.symbol.datawedge.data_string"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: UTF8-encoded string data<br></p>
<hr />
<p><strong>Extra Name</strong>: "com.symbol.datawedge.source"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Value is always “serial”<br></p>
<hr />
<h4 id="extrasintroducedwithdatawedge65">Extras Introduced with DataWedge 6.5</h4>
<p><strong>Extra Name</strong>: com.symbol.datawedge.device_id<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Device identifier (usually the port name)<br></p>
<hr />
<p><strong>Extra Name</strong>: "com.symbol.datawedge.device_name"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Friendly name of the port<br> 
<strong>Example</strong>: "Serial port 1"<br></p>
<hr />
<p><strong>Extra Name</strong>: "com.symbol.datawedge.data_raw"<br>
<strong>Type</strong>: [Byte Array]<br>
<strong>Contents</strong>: Byte array containing the acquired data in unprocessed form<br></p>
<hr />
<h2 id="singledecodemode">Single Decode Mode</h2>
<p>Single mode reads and decodes a single barcode at a time, and is the most common decoding mode. For decoding multiple barcodes simultaneously, such as with UDI-compliant objects, see <a href="#udimultipledecodemode">UDI/Multiple Decode Mode</a>. </p>
<h3 id="parameters-1">Parameters</h3>
<p><strong>Name</strong>: "com.symbol.datawedge.source"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Source of incoming data<br>
<strong>Possible values</strong>: </p>
<ul>
<li>"msr"</li>
<li>"scanner"</li>
<li>"simulscan"</li>
</ul>
<p><strong>NOTE</strong>: Source of incoming data is "scanner" for camera, imager or scanner. </p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.label_type"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Barcode label type (i.e. "EAN128")<br></p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.data_string"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Acquired barcode characters<br>
<strong>Example</strong>: "abcde12345"<br></p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.decode<em>data"<br>
<strong>Type</strong>: [List &lt;byte [ ]&gt;]<br>
<strong>Contents</strong>: Acquired raw (unmodified) data as an array list of byte arrays<br>
<strong>Example</strong>: List</em>Item<em>1(array</em>1(byte11,byte12,byte13)),List<em>Item</em>2(array_2(byte21,byte22,byte23)) …<br></p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.decoded_mode"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Mode used to decode the incoming data<br>
<strong>Possible values</strong>: </p>
<ul>
<li>"multiple_decode"</li>
<li>"single_decode"</li>
</ul>
<hr />
<h2 id="udimultipledecodemode">UDI/Multiple Decode Mode</h2>
<p>When decoding a UDI-compliant object, data is acquired from multiple barcodes simultaneously and output as a multi-decode bundle, which differs from a single-decode bundle. DataWedge also can acquire multiple non-UDI barcodes in a single scan. This section applies to both modes.</p>
<h3 id="parameters-2">Parameters</h3>
<p><strong>Name</strong>: "com.symbol.datawedge.decode_mode"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Mode used to decode incoming data<br>
<strong>Possible values</strong>: </p>
<ul>
<li>"multiple_decode"</li>
<li>"single_decode"</li>
</ul>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.smart<em>decode</em>type"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Decode type <br>
<strong>Possible values</strong>:</p>
<ul>
<li>“udi”</li>
<li>“multibarcode”</li>
</ul>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.data_string"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Acquired barcode characters <br>
<strong>Example</strong>: "abcde12345"<br></p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.decode<em>data"<br>
<strong>Type</strong>: [List &lt;byte [ ]&gt;]<br>
<strong>Contents</strong>: Acquired raw (unmodified) data as an array list of byte arrays<br>
<strong>Example</strong>: List</em>Item<em>1(array</em>1(byte11,byte12,byte13)), List<em>Item</em>2(array_2(byte21,byte22,byte23)) …</p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.source"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Source of incoming data<br>
<strong>Possible values</strong>:</p>
<ul>
<li>"msr"</li>
<li>"scanner" </li>
<li>"simulscan"</li>
</ul>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.label_id"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: UDI type of incoming data<br>
<strong>Possible values</strong>:</p>
<ul>
<li>“UDI_HIBCC” </li>
<li>“UDI_GS1” </li>
<li>“UDI_ICCBBA” </li>
<li>“UNDEFINED”</li>
</ul>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.barcodes"<br>
<strong>Type</strong>: [List &lt;Bundle&gt;]<br>
<strong>Contents</strong>: See Bundle description (below)<br></p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.tokenized_data"<br>
<strong>Type</strong>: [List &lt;Bundle&gt;]<br>
<strong>Contents</strong>: See Bundle description (below)<br>
<strong>Note</strong>: Source of incoming data is "scanner" for camera, imager or scanner<br></p>
<hr />
<h3 id="barcodebundle">Barcode Bundle</h3>
<h5 id="bundlenamecomsymboldatawedgebarcodes">Bundle name: "com.symbol.datawedge.barcodes"</h5>
<h4 id="parameters-3">Parameters</h4>
<p><strong>Name</strong>: "com.symbol.datawedge.label_type"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Barcode label type, original symbology (i.e. "EAN128")<br></p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.decode_data"<br>
<strong>Type</strong>: [byte [ ] ]<br>
<strong>Contents</strong>: Acquired raw (unmodified) data as a byte array<br></p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.data_string"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Acquired barcode characters <br>
<strong>Example</strong>: "abcde12345"<br></p>
<hr />
<h3 id="tokenizeddatabundle">Tokenized Data Bundle</h3>
<h5 id="bundlenamecomsymboldatawedgetokenized_data">Bundle name: "com.symbol.datawedge.tokenized_data"</h5>
<h4 id="parameters-4">Parameters</h4>
<p><strong>Name</strong>: "token_id"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Data in a UDI-defined tag <br>
<strong>Possible values</strong>: (see token IDs, below)<br></p>
<hr />
<p><strong>Name</strong>: "token<em>data</em>type"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Incoming data type <br>
<strong>Example</strong>: date, long, string <br></p>
<hr />
<p><strong>Name</strong>: "token_format"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Format of incoming string <br>
<strong>Example</strong>: YYYYMMDD<br></p>
<hr />
<p><strong>Name</strong>: "token<em>string</em>data"<br>
<strong>Type</strong>: [String]<br>
<strong>Contents</strong>: Acquired barcode characters <br>
<strong>Example</strong>: "abcde12345"<br></p>
<hr />
<p><strong>Name</strong>: "token<em>binary</em>data"<br>
<strong>Type</strong>: [byte [ ] ]<br>
<strong>Contents</strong>: Acquired barcode data as a byte array<br></p>
<hr />
<h3 id="tokenids">Token IDs</h3>
<p><strong>Token ID</strong>: di<br>
<strong>Display Name</strong>: Device identifier<br></p>
<hr />
<p><strong>Token ID</strong>: manufacturing<em>date</em>original<br>
<strong>Display Name</strong>: Manufacturing date<br></p>
<hr />
<p><strong>Token ID</strong>: expiration<em>date</em>original<br>
<strong>Display Name</strong>: Expiration date<br></p>
<hr />
<p><strong>Token ID</strong>: lot_number<br>
<strong>Display Name</strong>: Lot number<br></p>
<hr />
<p><strong>Token ID</strong>: serial_number<br>
<strong>Display Name</strong>: Serial number<br></p>
<hr />
<p><strong>Token ID</strong>: mpho<em>lot</em>number<br>
<strong>Display Name</strong>: Medical products of human origin (MPHO) lot number <br></p>
<hr />
<p><strong>Token ID</strong>: donation_id<br>
<strong>Display Name</strong>: Donation ID number<br></p>
<hr />
<p><strong>Token ID</strong>: labeler<em>identification</em>code<br>
<strong>Display Name</strong>: Labeler ID code<br></p>
<hr />
<p><strong>Token ID</strong>: product<em>or</em>catalog_number<br>
<strong>Display Name</strong>: Product or catalog number<br></p>
<hr />
<p><strong>Token ID</strong>: unit<em>of</em>measure_id<br>
<strong>Display Name</strong>: Unit of measure ID<br></p>
<hr />
<p><strong>Token ID</strong>: Quantity<br>
<strong>Display Name</strong>: Quantity<br></p>
<hr />
<h2 id="otherdecodetags">Other Decode Tags</h2>
<p>The decode-related data added to an intent bundle can be retrieved using specific string tags. Use the JavaScript call below with the string tags in the section that follows.</p>
<pre><code>:::java
Intent.getStringtExtra()
</code></pre>
<p><strong>Tag</strong>: LABEL<em>TYPE</em>TAG <br>
<strong>Type</strong>: [String]<br>
<strong>Name</strong>: "com.symbol.datawedge.label_type"<br>
<strong>Contents</strong>: Barcode label type <br>
<strong>Example</strong>: "EAN128"<br></p>
<hr />
<p><strong>Tag</strong>: DATA<em>STRING</em>TAG<br>
<strong>Type</strong>: [String]<br>
<strong>Name</strong>: "com.symbol.datawedge.data_string"<br>
<strong>Contents</strong>: Acquired barcode characters <br>
<strong>Example</strong>: "abcde12345"<br></p>
<p><strong>Note</strong>: When multiple barcodes are acquired simultaneously, the decoded data is concatenated and sent out as a single string.</p>
<hr />
<p><strong>Tag</strong>: DECODE<em>DATA</em>TAG<br>
<strong>Type</strong>: [byte [ ] ]<br>
<strong>Name</strong>: "com.symbol.datawedge.decode_data"<br>
<strong>Contents</strong>: Decoded data returned as a list of byte arrays.<br></p>
<p><strong>Note</strong>: In most cases there will be one byte array per decode. <!-- REMOVED 10/5/17 PER ENG. EMAIL 10/4/17 2:06 pm << For barcode symbologies that support concatenation (i.e. Codabar, Code128, MicroPDF, etc.) the decoded data is stored in multiple byte arrays (one byte array per bar code). Data in each byte array can be retrieved by passing an index.
--> </p>
<hr />
<p><strong>SEE ALSO</strong>: </p>
<ul>
<li><strong><a href="https://developer.zebra.com/community/home/blog/2017/06/27/datawedge-apis-benefits-challenges">DataWedge APIs - Benefits & Usage Scenarios</a> -</strong> by Zebra engineer Darryn Campbell </li>
<li><strong><a href="../../api/tutorials">Sample DataWedge app</a> -</strong> Demonstrates how to receive scanned data through an intent</li>
</ul>
<hr />
<p><strong>Other DataWedge Output Options</strong>:</p>
<ul>
<li><strong><a href="../keystroke">Keystroke</a> -</strong> outputs acquired data as if the keyboard was pressed</li>
<li><strong><a href="../ip">Internet Protocol</a> -</strong> outputs data over a network using TCP or UDP</li>
</ul>
<p><strong>Related guides</strong>:</p>
<ul>
<li><a href="../../profiles">Profiles/Plug-ins</a></li>
<li><a href="../../api">DataWedge APIs</a> </li>
</ul>