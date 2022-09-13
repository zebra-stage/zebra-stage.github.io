<h2 id="overview">Overview</h2>
<p>Keystroke Output collects the processed data and sends it to the associated application as a series of keystrokes, emulating the actions of a user pressing keys on the device. DataWedge supports TAB, ENTER and other special characters that might be required by an application to submit acquired data for further processing, to advance the cursor to another input field or for other reasons. Special characters are added to acquired data by using the Action key character (shown below) and in the <a href="../../process/bdf">Basic Data Formatting</a> or <a href="../../process/bdf">Advanced Data Formatting</a> Process functions. </p>
<hr />
<h2 id="keystrokeoutputsetup">Keystroke Output Setup</h2>
<p>To enable Keystroke output for a Profile, place a check in the checkbox:
<img style="height:350px" src="../keystroke-output.png"/>
<em>Keystroke Output options</em>
<br></p>
<p><strong>Action key character -</strong> enables injection of a special character embedded within barcode or MSR data. Possible values:</p>
<ul>
<li><strong>None -</strong> inject no action key</li>
<li><strong>Tab -</strong> inject action key in place of a ASCII Tab (0x09) character</li>
<li><strong>Line feed -</strong> inject action key in place of ASCII LF (0x0A) character</li>
<li><strong>Carriage return -</strong> inject action key in place of ASCII CR (0x0D) character</li>
</ul>
<p><strong>Multi byte character delay -</strong> used to set an inter-character delay (in ms) for sending multi-byte characters. This parameter can help avoid problems that arise when sending Unicode and multi-byte characters to the Android browser. Value is set to zero by default. If experiencing errors in the delivery of keystrokes, increase the delay value in increments of 100 ms.</p>
<p><strong>Key event delay -</strong> used to set a delay (in ms) for dispatching control characters as keystrokes to the foreground application.</p>
<hr />
<h3 id="udidataoutput">UDI Data Output</h3>
<p>This setting applies when the Scanning mode in <a href="../../input/barcode/#readerparams">Barcode Reader Params</a> is set to UDI, which acquires multiple data points (tokens) as specified in the Universal Device Identifier parameter(s) selected in the above-referenced section. </p>
<p><img style="height:350px" src="../token_selection_highlighted.png"/></p>
<p><strong>Token selection -</strong> allows the output order of acquired UDI data to be adjusted and the optional insertion of a Tab, Line Feed or Carriage Return character between tokens, if required.</p>
<p><strong>To adjust UDI Token settings</strong>: </p>
<p><strong>&#49;. Tap "Send tokens" to select the desired output</strong> for acquired UDI data. 
<img style="height:350px" src="../token_selector.png"/></p>
<p><strong>Tokens only -</strong> DataWedge parses the UDI data into separate Tokens for output (separated by a separator character, if selected).</p>
<p><strong>Barcodes and tokens -</strong> DataWedge sends the barcode string appended by the tokenized data. If no separator character is selected (see Step 2), DataWedge sends two instances of the same data.</p>
<p><strong>&#50;. Tap "Token separator" to select a separator character</strong> to insert between Tokens, if desired. If Barcode and token mode is selected, this character is also inserted between the two. 
<img style="height:350px" src="../separator.png"/>
<em>This setting is not available if "Send tokens" is disabled</em>.
<br></p>
<p><strong>&#51;. Tap "Token order" to include/exclude Tokens</strong> from the output and adjust their output order. 
<img style="height:350px" src="../token_order.png"/>
<br></p>
<!-- 
Send data - Set to transfer the captured data to the foreground application. Disabling this option prevents the actual data from being transmitted. However, the prefix and suffix strings, if present, are still transmitted even when this option is disabled (default - enabled).
-->
<hr />
<p><strong>Other DataWedge Output Options</strong>:</p>
<ul>
<li><strong><a href="../intent">Intent</a> -</strong> programmatic data hand-off</li>
<li><strong><a href="../ip">Internet Protocol</a> -</strong> network output via TCP or UDP</li>
</ul>
<p><strong>Related guides</strong>:</p>
<ul>
<li><a href="../../profiles">DataWedge Profiles</a></li>
<li><a href="../../api">DataWedge APIs</a> </li>
</ul>