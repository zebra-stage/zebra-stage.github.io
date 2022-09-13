<h2 id="overview">Overview</h2>
<p>Keystroke Output collects the processed data and sends it to the associated application as a series of keystrokes, emulating the actions of a user pressing keys on the device. DataWedge supports TAB, ENTER and other special characters that might be required by an application to submit acquired data for further processing, to advance the cursor to another input field or for other reasons. Special characters are added to acquired data by using the Action key character (shown below) and in the <a href="../../process/bdf">Basic Data Formatting</a> or <a href="../../process/bdf">Advanced Data Formatting</a> Process functions. </p>
<blockquote>
  <p>The parameters of this feature can be configured using the <a href="../../api/setconfig">Set Config API</a>.</p>
</blockquote>
<hr />
<h3 id="outputtingrawdata">Outputting Raw Data</h3>
<p>In addition to its normal plain-text and hexadecimal modes, DataWedge can output acquired data in its raw form, before the application of any encoders. This can be useful if custom encoders are needed for acquiring character sets not supported by Zebra.  </p>
<p>Raw data is received as a byte stream using the <code>com.symbol.datawedge.decode_data</code> intent extra. For more information, see the <a href="../intent">Intent Output guide</a>. </p>
<blockquote>
  <p><strong>Raw data cannot be output as keystrokes</strong>. </p>
</blockquote>
<hr />
<h2 id="keystrokeoutputsetup">Keystroke Output Setup</h2>
<p>To enable Keystroke output for a Profile, place a check in the checkbox:
<img style="height:350px" src="../keystroke-output_6.7.png"/>
<em>Keystroke Output options</em>
<br></p>
<p><strong>Action key character -</strong> enables injection of a special character embedded within barcode or MSR data. Possible values:</p>
<ul>
<li><strong>None -</strong> inject no action key</li>
<li><strong>Tab -</strong> inject action key in place of a ASCII Tab (0x09) character</li>
<li><strong>Line feed -</strong> inject action key in place of ASCII LF (0x0A) character</li>
<li><strong>Carriage return -</strong> inject action key in place of ASCII CR (0x0D) character</li>
</ul>
<p><strong>Inter-character delay –</strong> used to set a delay (in ms) following the delivery of each character to the application. This parameter is intended to help avoid issues that arise when data is dispatched too quickly for an application to accept. <strong>Default=0</strong>. If experiencing errors in keystroke delivery, increase this value in increments of 100 (to a max. of 1000) until errors cease. <strong>Note: This parameter can negatively effect application performance</strong>. </p>
<p><strong>Multi-byte character delay -</strong> applies the Inter-character delay (described above) to multi-byte characters only. This parameter is intended to help avoid problems that arise when sending Unicode and multi-byte characters to the Android browser. Available only when Inter-character delay is enabled. <strong>Disabled by default</strong>. </p>
<p><strong>Key event delay -</strong> used to set a delay (in ms) for dispatching control characters as keystrokes to the foreground application.</p>
<hr />
<h3 id="profileimportbehavior">Profile Import Behavior</h3>
<ul>
<li><p><strong>For Profiles imported <u>into DataWedge 6.7</u> from prior versions</strong>, the value specified for the "Multi byte character delay" is applied to the Inter-character delay and the “Delay Multi-byte characters only” parameter is enabled. </p></li>
<li><p><strong>For Profiles created with DataWedge 6.7 and <u>imported into a prior version</u></strong>, the specified delay, if any, is applied only to multi-byte characters. </p></li>
</ul>
<hr />
<h3 id="udidataoutput">UDI Data Output</h3>
<p>This setting applies when the Scanning mode in <a href="../../input/barcode/#readerparams">Barcode Reader Params</a> is set to UDI, which acquires multiple data points (tokens) as specified in the Universal Device Identifier parameter(s) selected in the above-referenced section. </p>
<!-- 2/8/18- removed pre-DW 6.7 panel 
<img style="height:350px" src="../token_selection_highlighted.png"/>
 -->
<p><img style="height:350px" src="../dw_6.7_data_formatting_and_ordering.png"/></p>
<p><strong>Token selection -</strong> allows the output order of acquired UDI data to be adjusted and the optional insertion of a Tab, Line Feed or Carriage Return character between tokens, if required.</p>
<p><strong>To adjust UDI Token settings</strong>: </p>
<p><strong>&#49;. Tap "Send tokens" to select the desired output</strong> for acquired UDI data. 
<img style="height:350px" src="../token_selector.png"/></p>
<p><strong>Tokens only -</strong> DataWedge parses the UDI data into separate Tokens for output (separated by a separator character, if selected).</p>
<p><strong>Barcodes and tokens -</strong> DataWedge sends the barcode string appended by the tokenized data. If no separator character is selected (see Step 2), DataWedge sends two instances of the same data.</p>
<p><strong>&#50;. Tap "Token separator" in the Token selection screen to specify a separator character</strong> to be inserted between Tokens, if desired. If "Barcode and tokens" mode is selected, the selected character also is inserted between the two. 
<img style="height:350px" src="../separator.png"/>
<em>This setting is not available if "Send tokens" is disabled</em>.
<br></p>
<p><strong>&#51;. Tap "Token order" to include/exclude Tokens</strong> from the output and adjust their output order. 
<img style="height:350px" src="../token_order.png"/>
<em>Drag tokens to adjust output order</em>.
<br></p>
<hr />
<h3 id="multibarcodedataoutput">MultiBarcode Data Output</h3>
<p>This setting applies when the Scanning mode in <a href="../../input/barcode/#readerparams">Barcode Reader Params</a> is set to MultiBarcode, which simultaneously acquires the number of barcodes (from 2-10) specified in the corresponding reader parameter. </p>
<p><strong>Note: Supported with internal imager on TC20/TC25 devices only</strong>. </p>
<p><strong>To configure MultiBarcode output</strong>: </p>
<p><strong>&#49;. Tap "Data formatting and ordering" to specify a separator character</strong> to be inserted between the data from each barcode. 
<img style="height:350px" src="../dw_6.7_data_formatting_and_ordering.png"/>
<br>
<strong>&#50;. Tap "Barcode separator" to specify the desired insertion character</strong> (CR, LF or TAB).<br>Data from each barcode is otherwise concatenated and delivered as a single string of keystrokes.
<img style="height:350px" src="../dw_6.7_data_separating.png"/></p>
<!-- 
Send data - Set to transfer the captured data to the foreground application. Disabling this option prevents the actual data from being transmitted. However, the prefix and suffix strings, if present, are still transmitted even when this option is disabled (default - enabled).
-->
<hr />
<h3 id="hexadecimaldataoutput">Hexadecimal Data Output</h3>
<p>Hex data is based on the encoded data received from the scanner framework after it's converted from its raw form to the selected character set. When the hex-output option is selected, the plain-text string is converted to the corresponding hex digits and output as a string. That hex data can be acquired programmatically. </p>
<p>The Java command below returns the hex data stored in the keystroke or intent output string:</p>
<pre><code>:::java
String hex = Hex.encodeHex(data.getString(DATA_STRING_TAG).toCharArray(), false);
</code></pre>
<p><strong>For more information and to enable hex output using the DataWedge UI, see <a href="../../process/bdf">Basic Data Formatting (BDF)</a></strong>. </p>
<hr />
<p><strong>Other DataWedge Output Options</strong>:</p>
<ul>
<li><strong><a href="../ip">Internet Protocol</a> -</strong> outputs data over a network using TCP or UDP</li>
<li><strong><a href="../intent">Intent</a> -</strong> delivers data to the app as an intent extra</li>
</ul>
<p><strong>Related guides</strong>:</p>
<ul>
<li><a href="../../profiles">DataWedge Profiles</a></li>
<li><a href="../../api">DataWedge APIs</a> </li>
</ul>