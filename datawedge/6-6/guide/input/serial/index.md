<h2 id="overview">Overview</h2>
<p>Serial Input options are used to specify communications parameters for a scanner or other device connected to a serial port that will be used to acquire data. In the DataWedge UI, the number of serial ports availabile for selection varies according to the number of serial ports on the host device. </p>
<!-- 2/28/18- Removed per eng. 
**Note: DataWedge provides audio and other feedback to alert the user of scanning results and barcode type. See the [Scanner Parameters](#scanparams) section for more information**. 
 -->
<hr />
<h3 id="serialportconfiguration">Serial Port Configuration</h3>
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
<!-- 
DW_serial_04.png (baud rate)
DW_serial_05.png (data bits)
DW_serial_06.png (parity) 
DW_serial_07.png (stop bits)
 -->
<p>For more information about required serial communication settings, please refer to documentation that accompanied the peripheral being connected.</p>
<hr />
<h3 id="outputusingintents">Output Using Intents</h3>
<p>For some scanning applications, it might be preferable not to display decoded data but to output directly to an application activity. This is done using Android Intents. For more information and important warnings, please see the <a href="../../output/intent">Intent Output guide</a>.  </p>
<p>For general information about Android Intents, please refer to the <a href="https://developer.android.com/guide/components/intents-filters.html">Android Developer site</a>.</p>
<hr />
<p><strong>Related guides</strong>:</p>
<ul>
<li><a href="../../api">DataWedge Intent APIs</a> </li>
<li><a href="../../profiles">DataWedge Profiles</a></li>
</ul>