<h2 id="overview">Overview</h2>
<p>Intent Output sends the processed data to the associated foreground application as payload within an Android intent. This allows acquired data to be passed programmatically to an application, where it can be consumed or processed further. The core components of an application (its activities, services, and broadcast receivers) also can be activated by intents. </p>
<p>An intent object is a bundle of information that describes a desired action. It includes the data to be acted upon, the category of component that should perform the action and other pertinent instructions. When an intent is initiated, Android locates an appropriate component to respond to the intent, launches a new instance of the component (if needed), and passes the intent object to it.</p>
<p>Components advertise the kinds of intents they can handle through intent filters, which are specified in the <code>AndroidManifest.xml</code> file as &lt;intent-filter&gt; elements. A component may have any number of intent filters, each describing a different capability. </p>
<hr />
<h3 id="intentoutputsetup">Intent Output Setup</h3>
<p>DataWedge invokes an intent though an <strong>Intent action</strong> in an <strong>Intent category</strong> as described in its <code>AndroidManifest.xml</code> file. For example, if the DataWedge manifest contains the lines…</p>
<pre><code>&lt;intent-filter&gt;
    ...
    &lt;action android:name="com.myapp.action" /&gt;
    &lt;category android:name="android.intent.category.DEFAULT" /&gt;
    ...
&lt;/intent-filter&gt;
</code></pre>
<p>…the <strong>Intent action</strong> in the Intent is <code>com.myapp.action</code> and the <strong>Intent category</strong> is <code>android.intent.category.DEFAULT</code>.</p>
<p>When combined, these two values can be like a "channel" to which an app can listen for intents that use the same combination, filtering out the "noise" from other intents that use different value pairs. </p>
<p><strong>Once these values are known, set DataWedge intent output to match</strong>: </p>
<p>&#49;. Locate the Intent Output section of the Profile being configured.</p>
<p>&#50;. <strong>Check "Enabled" box</strong> to activate intent output:<br />
<img style="height:350px" src="../intent_output 2.png"/>
<em>Intent Output options</em>
<br></p>
<p>&#51;. <strong>Specify action, category and delivery</strong> as described below: </p>
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
<h2 id="decoderelateddata">Decode-related data</h2>
<p>The decode-related data added to an intent bundle can be retrieved using the following call: </p>
<pre><code>:::java
Intent.getStringtExtra()
</code></pre>
<p>This call can be used with the following String tags:</p>
<ul>
<li><p><strong>String LABEL<em>TYPE</em>TAG = "com.symbol.datawedge.label_type"</strong>; String contains the barcode label type</p></li>
<li><p><strong>String DATA<em>STRING</em>TAG = "com.symbol.datawedge.data_string"</strong>; String contains the output data as a String. In the case of concatenated barcodes, the decode data is concatenated and sent out as a single string.</p></li>
<li><p><strong>String DECODE<em>DATA</em>TAG = "com.symbol.datawedge.decode_data"</strong>; Decode data is returned as a list of byte arrays. In most cases there will be one byte array per decode. For barcode symbologies that support concatenation (i.e. Codabar, Code128, MicroPDF, etc.) the decoded data is stored in multiple byte arrays (one byte array per bar code). Clients can get data in each byte array by passing an index.</p></li>
</ul>
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