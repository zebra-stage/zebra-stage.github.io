<h2 id="overview">Overview</h2>
<p>Serial Input options are used to specify communications parameters for a scanner or other device connected to a serial port that will be used to acquire data. In the DataWedge UI, the number of serial ports availabile for selection varies according to the number of serial ports on the host device.</p>
<!-- 2/28/18- Removed per eng. 
**Note: DataWedge provides audio and other feedback to alert the user of scanning results and barcode type. See the [Scanner Parameters](#scanparams) section for more information**. 
 -->
<hr />
<h3 id="serialportconfiguration">Serial Port Configuration</h3>
<p><strong><em>Applies only to devices running Android N and higher</em></strong>. <em>Pre-N versions offer Enable/Disable function only</em>.</p>
<p><img style="height:450px" src="DW_serial_02.png"/>
<em>Input enabled on Serial port 1 of a Zebra VC80x; second serial port (disabled) also shown.</em>
<br></p>
<p><strong>Baud rate -</strong> specifies the modulation rate of the connected serial device. </p>
<p><strong>Data bits -</strong> specifies the number of data bits in a serial frame (data bits per byte). </p>
<p><strong>Parity -</strong> specifies the parity bits using one of the following values: </p>
<ul>
<li>None: No parity check</li>
<li>Odd: Sets the parity bit so the count of bits set is an odd number</li>
<li>Even: Sets the parity bit so the count of bits set is an even number</li>
<li>Mark: Leaves the parity bit set to 1</li>
<li>Space: Leaves the parity bit set to 0</li>
</ul>
<p><strong>Stop bits -</strong> specifies the number of stop bits to use.  </p>
<p><img style="height:450px" src="DW_serial_04.png"/>
<em>Tapping on a setting displays a dialog box for changing its value.</em>
<br></p>
<p><strong>Notes</strong>: </p>
<ul>
<li><strong><u>Serial port configuration is available only on devices running Android N and higher</u></strong>. For prior versions, only the Enable/Disable options are available for serial ports.</li>
<li><strong>For more information about required serial communication settings</strong> of a specific device, please refer to documentation that accompanied the peripheral being connected. </li>
<li><strong>Serial-port settings also can be configured programmatically. See the <a href="#outputusingintents">Output Using Intents</a> section below</strong>. </li>
</ul>
<hr />
<h3 id="outputusingintents">Output Using Intents</h3>
<p>For some scanning applications, it might be preferable to output acquired data directly to an app or app activity rather than displaying decoded data on the screen. <strong>This is done using Android intents</strong>:</p>
<ul>
<li><strong><a href="../../api/setconfig">SET_CONFIG API</a></strong> and <strong><a href="../../api/setconfig/#setserialinputconfiguration">sample code</a></strong> for setting serial parameters</li>
<li><strong><a href="../../api/getconfig">GET_CONFIG API</a></strong> and <strong><a href="../../api/getconfig/#getserialinputconfig">sample code</a></strong> for getting serial parameter settings</li>
</ul>
<hr />
<p><strong>Relates Gudies</strong>:</p>
<ul>
<li><strong><a href="../../output/intent">Intent Output guide</a></strong> | Information and important warnings about intent usage</li>
<li><strong><a href="../../api">DataWedge APIs</a></strong> | List of all DataWedge intent APIs</li>
<li><strong><a href="../../profiles">DataWedge Profiles</a></strong> | List of dataWedge Plug-ins for input, output and data processing</li>
<li><strong><a href="https://developer.android.com/guide/components/intents-filters.html">Android Developer site</a></strong> | General information about Android intents </li>
</ul>