<h2 id="overview">Overview</h2>
<p>Intent Output sends the processed data to the associated foreground application as payload within an Android intent. This allows acquired data to be passed programmatically to an application, where it can be consumed or further processed. The core components of an application (its activities, services and broadcast receivers) also can be activated by intents. </p>
<p>An intent object is a bundle of information that describes a desired action. It includes the data to be acted upon, the category of component that should perform the action and other pertinent data and/or instructions. When an intent is initiated, Android locates an appropriate component to respond to the intent, launches a new instance of the component (if needed), and passes the intent object to it.</p>
<p>Components advertise the kinds of intents they can handle through intent filters, which are specified in the <code>AndroidManifest.xml</code> file as &lt;intent-filter&gt; elements. A component may have any number of intent filters, each describing a different capability. </p>
<hr />
<h2 id="intentoutputsetup">Intent Output Setup</h2>
<p>DataWedge invokes an intent though an <strong>Intent action</strong> in an <strong>Intent category</strong> as described in its <code>AndroidManifest.xml</code> file. For example, if the DataWedge manifest contains the lines…</p>
<pre><code>&lt;intent-filter&gt;
    ...
    &lt;action android:name="com.myapp.action" /&gt;
    &lt;category android:name="android.intent.category.DEFAULT" /&gt;
    ...
&lt;/intent-filter&gt;
</code></pre>
<p>…the <strong>Intent action</strong> is <code>com.myapp.action</code> and the <strong>Intent category</strong> is <code>android.intent.category.DEFAULT</code>.</p>
<p>When combined, these two values are like a "channel" to which an app can listen for intents that use the same combination, and filtering out the "noise" from other intents that use different value pairs. <strong>Once these values are known, DataWedge Intent Output must be set to match</strong>. </p>
<p><strong>To set a DataWedge Action and Category pair</strong>: </p>
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
<h2 id="singlenormaldecodemode">Single (normal) Decode Mode</h2>
<h3 id="parameters">Parameters</h3>
<p><strong>Name</strong>: "com.symbol.datawedge.source"</p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Contents</strong>: Source of incoming data</p>
<p><strong>Possible values</strong>: </p>
<ul>
<li>"msr"</li>
<li>"scanner"</li>
<li>"simulscan"</li>
</ul>
<p><strong>NOTE</strong>: Source of incoming data is "scanner" for camera, imager or scanner. </p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.label_type"</p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Contents</strong>: Barcode label type (i.e. "EAN128")</p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.data_string"</p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Contents</strong>: Acquired barcode characters</p>
<p><strong>Example</strong>: "abcde12345"</p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.decode_data"</p>
<p><strong>Type</strong>: [List &lt;byte [ ]&gt;]</p>
<p><strong>Contents</strong>: Acquired raw (unmodified) data as an array list of byte arrays</p>
<p><strong>Example</strong>: List<em>Item</em>1(array<em>1(byte11,byte12,byte13)),List</em>Item<em>2(array</em>2(byte21,byte22,byte23)) …</p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.decoded_mode"</p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Contents</strong>: Mode used to decode the incoming data</p>
<p><strong>Possible values</strong>: </p>
<ul>
<li>"multiple_decode"</li>
<li>"single_decode"</li>
</ul>
<hr />
<h2 id="udimultipledecodemode">UDI/Multiple Decode Mode</h2>
<p>When decoding a UDI-compliant object, data is acquired from multiple barcodes simultaneously and output as a multi-decode bundle, which differs from a single-decode bundle. DataWedge also can acquire multiple non-UDI barcodes in a single scan. This section applies to both modes.</p>
<h3 id="parameters-1">Parameters</h3>
<p><strong>Name</strong>: "com.symbol.datawedge.decode_mode"</p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Contents</strong>: Mode used to decode incoming data</p>
<p><strong>Possible values</strong>: </p>
<ul>
<li>"multiple_decode"</li>
<li>"single_decode"</li>
</ul>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.smart<em>decode</em>type"</p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Contents</strong>: Decode type </p>
<p><strong>Possible values</strong>:</p>
<ul>
<li>“udi”</li>
<li>“multibarcode”</li>
</ul>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.data_string"</p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Contents</strong>: Acquired barcode characters </p>
<p><strong>Example</strong>: "abcde12345"</p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.decode_data"</p>
<p><strong>Type</strong>: [List &lt;byte [ ]&gt;]</p>
<p><strong>Contents</strong>: Acquired raw (unmodified) data as an array list of byte arrays</p>
<p><strong>Example</strong>: List<em>Item</em>1(array<em>1(byte11,byte12,byte13)), List</em>Item<em>2(array</em>2(byte21,byte22,byte23)) …</p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.source"</p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Contents</strong>: Source of incoming data. </p>
<p><strong>Possible values</strong>:</p>
<ul>
<li>"msr"</li>
<li>"scanner" </li>
<li>"simulscan"</li>
</ul>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.label_id"</p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Contents</strong>: UDI type of incoming data</p>
<p><strong>Possible values</strong>:</p>
<ul>
<li>“UDI_HIBCC” </li>
<li>“UDI_GS1” </li>
<li>“UDI_ICCBBA” </li>
<li>“UNDEFINED”</li>
</ul>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.barcodes"</p>
<p><strong>Type</strong>: [List &lt;Bundle&gt;]</p>
<p><strong>Contents</strong>: See Bundle description (below)</p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.tokenized_data"</p>
<p><strong>Type</strong>: [List &lt;Bundle&gt;]</p>
<p><strong>Contents</strong>: See Bundle description (below)</p>
<p><strong>Note</strong>: Source of incoming data is "scanner" for camera, imager or scanner. </p>
<hr />
<h3 id="barcodebundle">Barcode Bundle</h3>
<h5 id="bundlenamecomsymboldatawedgebarcodes">Bundle name: "com.symbol.datawedge.barcodes"</h5>
<h4 id="parameters-2">Parameters</h4>
<p><strong>Name</strong>: "com.symbol.datawedge.label_type"</p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Contents</strong>: Barcode label type, original symbology (i.e. "EAN128")</p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.decode_data"</p>
<p><strong>Type</strong>: [byte [ ] ]</p>
<p><strong>Contents</strong>: Acquired raw (unmodified) data as a byte array</p>
<hr />
<p><strong>Name</strong>: "com.symbol.datawedge.data_string"</p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Contents</strong>: Acquired barcode characters </p>
<p><strong>Example</strong>: "abcde12345"</p>
<hr />
<h3 id="tokenizeddatabundle">Tokenized Data Bundle</h3>
<h5 id="bundlenamecomsymboldatawedgetokenized_data">Bundle name: "com.symbol.datawedge.tokenized_data"</h5>
<h4 id="parameters-3">Parameters</h4>
<p><strong>Name</strong>: "token_id"</p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Contents</strong>: Data in a UDI-defined tag. </p>
<p><strong>Possible values</strong>: (see table below)</p>
<hr />
<p><strong>Name</strong>: "token<em>data</em>type"</p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Contents</strong>: Incoming data type </p>
<p><strong>Example</strong>: date, long, string </p>
<hr />
<p><strong>Name</strong>: "token_format"</p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Contents</strong>: Format of incoming string </p>
<p><strong>Example</strong>: YYYYMMDD</p>
<hr />
<p><strong>Name</strong>: "token<em>string</em>data"</p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Contents</strong>: Acquired barcode characters </p>
<p><strong>Example</strong>: "abcde12345"</p>
<hr />
<p><strong>Name</strong>: "token<em>binary</em>data"</p>
<p><strong>Type</strong>: [byte [ ] ]</p>
<p><strong>Contents</strong>: Acquired barcode data as a byte array</p>
<hr />
<h3 id="tokenids">Token IDs</h3>
<p><strong>Token ID</strong>: di</p>
<p><strong>Display Name</strong>: Device identifier</p>
<hr />
<p><strong>Token ID</strong>: manufacturing<em>date</em>original</p>
<p><strong>Display Name</strong>: Manufacturing date</p>
<hr />
<p><strong>Token ID</strong>: expiration<em>date</em>original</p>
<p><strong>Display Name</strong>: Expiration date</p>
<hr />
<p><strong>Token ID</strong>: lot_number</p>
<p><strong>Display Name</strong>: Lot number</p>
<hr />
<p><strong>Token ID</strong>: serial_number</p>
<p><strong>Display Name</strong>: Serial number</p>
<hr />
<p><strong>Token ID</strong>: mpho<em>lot</em>number</p>
<p><strong>Display Name</strong>: Medical products of human origin (MPHO) lot number </p>
<hr />
<p><strong>Token ID</strong>: donation_id</p>
<p><strong>Display Name</strong>: Donation ID number</p>
<hr />
<p><strong>Token ID</strong>: labeler<em>identification</em>code</p>
<p><strong>Display Name</strong>: Labeler ID code</p>
<hr />
<p><strong>Token ID</strong>: product<em>or</em>catalog_number</p>
<p><strong>Display Name</strong>: Product or catalog number</p>
<hr />
<p><strong>Token ID</strong>: unit<em>of</em>measure_id</p>
<p><strong>Display Name</strong>: Unit of measure ID</p>
<hr />
<p><strong>Token ID</strong>: Quantity</p>
<p><strong>Display Name</strong>: Quantity</p>
<hr />
<h2 id="otherdecodetags">Other Decode Tags</h2>
<p>The decode-related data added to an intent bundle can be retrieved using specific string tags. Use the JavaScript call below with the string tags in the section that follows.</p>
<pre><code>:::java
Intent.getStringtExtra()
</code></pre>
<p><strong>Tag</strong>: LABEL<em>TYPE</em>TAG </p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Name</strong>: "com.symbol.datawedge.label_type"</p>
<p><strong>Contents</strong>: Barcode label type </p>
<p><strong>Example</strong>: "EAN128"</p>
<hr />
<p><strong>Tag</strong>: DATA<em>STRING</em>TAG</p>
<p><strong>Type</strong>: [String]</p>
<p><strong>Name</strong>: "com.symbol.datawedge.data_string"</p>
<p><strong>Contents</strong>: Acquired barcode characters </p>
<p><strong>Example</strong>: "abcde12345"</p>
<p><strong>Note</strong>: When multiple barcodes are acquired simultaneously, the decoded data is concatenated and sent out as a single string.</p>
<hr />
<p><strong>Tag</strong>: DECODE<em>DATA</em>TAG</p>
<p><strong>Type</strong>: [byte [ ] ]</p>
<!-- or list of byte arrays? -> [List <byte [ ]>] -->
<p><strong>Name</strong>: "com.symbol.datawedge.decode_data"</p>
<p><strong>Contents</strong>: Decoded data returned as a list of byte arrays. </p>
<p><strong>Note</strong>: In most cases there will be one byte array per decode. <!-- REMOVED 10/5/17 PER ENG. EMAIL 10/4/17 2:06 pm << For barcode symbologies that support concatenation (i.e. Codabar, Code128, MicroPDF, etc.) the decoded data is stored in multiple byte arrays (one byte array per bar code). Data in each byte array can be retrieved by passing an index.
--> </p>
<hr />
<p><strong>Other DataWedge Output Options</strong>:</p>
<ul>
<li><strong><a href="../ip">Internet Protocol</a> -</strong> network output via TCP or UDP </li>
<li><strong><a href="../keystroke">Keystroke</a> -</strong> keyboard emulation</li>
</ul>
<p><strong>Related guides</strong>:</p>
<ul>
<li><a href="../../profiles">Profiles/Plug-ins</a></li>
<li><a href="../../api">DataWedge APIs</a> </li>
</ul>