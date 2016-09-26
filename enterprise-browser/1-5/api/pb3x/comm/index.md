---
title: Comm Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Comm Meta Tag is an action tag used to control the functionality of the serial port on the device, including all serial communications initiated by PocketBrowser apps and any collected or transmitted data.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Comm (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Comm" content="[parameter&gt;</pre>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Comm" content="CommEvent:url('[jsFunction | url]')"&gt;</p>
</td>
</tr>
</table>
</blockquote><br></div>
<div id="ParametersWOSpan" style="display:block">
<blockquote>
Items listed in this section indicate methods or, in some cases, indicate parameters which will be retrieved.
<BR><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<col width="10%">
<col width="68%">
<col width="22%">
<tr>
<th class="clsSyntaxHeadings">Name</th>
<th class="clsSyntaxHeadings">Description</th>
<th class="clsSyntaxHeadings">
<table cellspacing="0" cellpadding="0">
  <tr>
    <td width="85%" class="clsSyntaxHeadings" style="border-bottom-style: none;">Default Value</td>
  </tr>
</table>
</th>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Open</b></td>
<td valign="top" class="clsSyntaxCells">Opens the COM port using applied settings.
</td>
<td valign="top" class="clsSyntaxCells">Closed</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Close</b></td>
<td valign="top" class="clsSyntaxCells">Closes the currently open COM port, if any.</td>
<td valign="top" class="clsSyntaxCells">Closed</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="78%">
<col width="8%">
<col width="1%">
<col width="5%">
<col width="1%">
<col width="5%">
<col width="2%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><b>Copy methods template to clipboard:</b></nobr></td>
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy META Tag template to clipboard" onclick="CopyTemplate('txtMETATemplateWO')" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif">
		META Tags
	</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onclick="CopyTemplate('txtJavascriptTemplateWO')" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif">
		Javascript
	</nobr></td>
<td></td>
</tr>
</table>
<div style="display:none"><textarea id="txtMETATemplateWO">&lt;!-- 
The Comm META Tag is an action tag used to control the functionality of the devices communication (serial) port; the way PocketBrowser interacts with that port and the data it provides.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Comm" Content="Open"&gt; --&gt;      &lt;!-- Opens the COM port using applied settings.
--&gt;
&lt;!-- &lt;META HTTP-Equiv="Comm" Content="Close"&gt; --&gt;      &lt;!-- Closes the currently open COM port, if any. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The Comm META Tag is an action tag used to control the functionality of the devices communication (serial) port; the way PocketBrowser interacts with that port and the data it provides.
*/

function doCommInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Comm', 'Open');      /* Opens the COM port using applied settings.
*/
//objGeneric.InvokeMETAFunction('Comm', 'Close');      /* Closes the currently open COM port, if any. */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>
<div id="ParametersWSpan" style="display:block">
<blockquote>
Items listed in this section indicate parameters, or attributes which can be set.
<BR><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<col width="20%">
<col width="20%">
<col width="38%">
<col width="22%">
<tr>
<th class="clsSyntaxHeadings">Name</th>
<th class="clsSyntaxHeadings">Possible Values</th>
<th class="clsSyntaxHeadings">Description</th>
<th class="clsSyntaxHeadings">
<table cellspacing="0" cellpadding="0">
  <tr>
    <td width="85%" class="clsSyntaxHeadings" style="border-bottom-style: none;">Default Value</td>
  </tr>
</table>
</th>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>BaudRate:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">110, 300, 600, 1200, 2400, 4800, 9600, 14400, 19200, 38400, 56000, 57600, 115200, 128000, 256000</td>
<td valign="top" class="clsSyntaxCells">Sets the baud rate of the serial port. (not all values are supported on all devices)</td>
<td valign="top" class="clsSyntaxCells">9600</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>DataBits:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">Integers between 5 and 9 inclusive.</td>
<td valign="top" class="clsSyntaxCells">Sets the number of data bits per word on the device serial port (not all values are supported on all devices).</td>
<td valign="top" class="clsSyntaxCells">8</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>StopBits:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">'1', '1.5', '2'.</td>
<td valign="top" class="clsSyntaxCells">Sets the number of stop bits per word on the device serial port (not all values are supported on all devices).</td>
<td valign="top" class="clsSyntaxCells">1</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Parity:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">'Even', 'Odd', 'Mark', 'Space', 'No Parity'</td>
<td valign="top" class="clsSyntaxCells">Sets the parity check type for the device serial port. (not all values are supported on all devices)</td>
<td valign="top" class="clsSyntaxCells">'No Parity'</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Handshake:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">'HW' - Hardware Handshake, 'SW' - Software Handshake, 'None' - No handshake</td>
<td valign="top" class="clsSyntaxCells">Sets the handshaking for the device serial port. (not all values are supported on all devices)</td>
<td valign="top" class="clsSyntaxCells">'None'</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Port:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">The device comm port, in the format COMn</td>
<td valign="top" class="clsSyntaxCells">Sets the device serial port. (only certain port designations are valid on any given device)</td>
<td valign="top" class="clsSyntaxCells">'COM1'</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Chars:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">Positive number.</td>
<td valign="top" class="clsSyntaxCells">Data will be received by PocketBrowser after the specified number of characters have been received over the COM port.  PocketBrowser will receive the data in either a CommEvent or as keystrokes.  'Chars', 'EndChar' and 'Time' are mutually exclusive, see remarks.</td>
<td valign="top" class="clsSyntaxCells">'EndChar:CRLF'</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>EndChar:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">Character code expressed as a decimal or 'CRLF' to specify Carriage return + Line Feed</td>
<td valign="top" class="clsSyntaxCells">Data will be received by PocketBrowser after the specified character (or Carriage return + Line Feed) has been received over the COM port.  PocketBrowser will receive the data, minus the final CRLF, in either a CommEvent or as keystrokes.  'Chars', 'EndChar' and 'Time' are mutually exclusive, see remarks.</td>
<td valign="top" class="clsSyntaxCells">'EndChar:CRLF'</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Time:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">Milliseconds</td>
<td valign="top" class="clsSyntaxCells">Data will be received by PocketBrowser after the specified period of COM port inactivity has elapsed.  PocketBrowser will receive the data in either a CommEvent or as keystrokes.  'Chars', 'EndChar' and 'Time' are mutually exclusive, see remarks.</td>
<td valign="top" class="clsSyntaxCells">'EndChar:CRLF'</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>WriteBytes:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">A string of bytes, each byte represented as '%hh' where 'h' is a hexidecimal digit.  A delimiter is optional and may be any character</td>
<td valign="top" class="clsSyntaxCells">Value is converted to an array of bytes and written to the COM port.</td>
<td valign="top" class="clsSyntaxCells">
					N/A
				</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>WriteString:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">String</td>
<td valign="top" class="clsSyntaxCells">Writes the specified string to the COM port.</td>
<td valign="top" class="clsSyntaxCells">
					N/A
				</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>WriteFile:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">Filename and Path</td>
<td valign="top" class="clsSyntaxCells">The specified file is opened and its contents is written to the COM port.</td>
<td valign="top" class="clsSyntaxCells">
					N/A
				</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>AutoEnter:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">Enabled or Disabled</td>
<td valign="top" class="clsSyntaxCells">Provided no CommEvent is defined and the received data is being received as keystrokes each block received will have a CR (Carriage Return) character appended to it.</td>
<td valign="top" class="clsSyntaxCells">Disabled</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>AutoTab:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">Enabled or Disabled</td>
<td valign="top" class="clsSyntaxCells">Provided no CommEvent is defined and the received data is being received as keystrokes each block received will have a tab character appended to it.</td>
<td valign="top" class="clsSyntaxCells">Disabled</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="78%">
<col width="8%">
<col width="1%">
<col width="5%">
<col width="1%">
<col width="5%">
<col width="2%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><b>Copy parameters template to clipboard:</b></nobr></td>
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsW" alt="Copy META Tag template to clipboard" onclick="CopyTemplate('txtMETATemplateW')" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif">
		META Tags
	</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsW" alt="Copy Javascript template to clipboard" onclick="CopyTemplate('txtJavascriptTemplateW')" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif">
		Javascript
	</nobr></td>
<td></td>
</tr>
</table>
<div style="display:none"><textarea id="txtMETATemplateW">&lt;!-- 
The Comm META Tag is an action tag used to control the functionality of the devices communication (serial) port; the way PocketBrowser interacts with that port and the data it provides.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Comm" Content="BaudRate:[Value]"&gt; --&gt;      &lt;!-- Sets the baud rate of the serial port. (not all values are supported on all devices) --&gt;
&lt;!-- &lt;META HTTP-Equiv="Comm" Content="DataBits:[Value]"&gt; --&gt;      &lt;!-- Sets the number of data bits per word on the device serial port (not all values are supported on all devices). --&gt;
&lt;!-- &lt;META HTTP-Equiv="Comm" Content="StopBits:[Value]"&gt; --&gt;      &lt;!-- Sets the number of stop bits per word on the device serial port (not all values are supported on all devices). --&gt;
&lt;!-- &lt;META HTTP-Equiv="Comm" Content="Parity:[Value]"&gt; --&gt;      &lt;!-- Sets the parity check type for the device serial port. (not all values are supported on all devices) --&gt;
&lt;!-- &lt;META HTTP-Equiv="Comm" Content="Handshake:[Value]"&gt; --&gt;      &lt;!-- Sets the handshaking for the device serial port. (not all values are supported on all devices) --&gt;
&lt;!-- &lt;META HTTP-Equiv="Comm" Content="Port:[Value]"&gt; --&gt;      &lt;!-- Sets the device serial port. (only certain port designations are valid on any given device) --&gt;
&lt;!-- &lt;META HTTP-Equiv="Comm" Content="Chars:[Value]"&gt; --&gt;      &lt;!-- Data will be received by PocketBrowser after the specified number of characters have been received over the COM port.  PocketBrowser will receive the data in either a CommEvent or as keystrokes.  'Chars', 'EndChar' and 'Time' are mutually exclusive, see remarks. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Comm" Content="EndChar:[Value]"&gt; --&gt;      &lt;!-- Data will be received by PocketBrowser after the specified character (or Carriage return + Line Feed) has been received over the COM port.  PocketBrowser will receive the data, minus the final CRLF, in either a CommEvent or as keystrokes.  'Chars', 'EndChar' and 'Time' are mutually exclusive, see remarks. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Comm" Content="Time:[Value]"&gt; --&gt;      &lt;!-- Data will be received by PocketBrowser after the specified period of COM port inactivity has elapsed.  PocketBrowser will receive the data in either a CommEvent or as keystrokes.  'Chars', 'EndChar' and 'Time' are mutually exclusive, see remarks. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Comm" Content="WriteBytes:[Value]"&gt; --&gt;      &lt;!-- Value is converted to an array of bytes and written to the COM port. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Comm" Content="WriteString:[Value]"&gt; --&gt;      &lt;!-- Writes the specified string to the COM port. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Comm" Content="WriteFile:[Value]"&gt; --&gt;      &lt;!-- The specified file is opened and its contents is written to the COM port. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Comm" Content="AutoEnter:[Value]"&gt; --&gt;      &lt;!-- Provided no CommEvent is defined and the received data is being received as keystrokes each block received will have a CR (Carriage Return) character appended to it. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Comm" Content="AutoTab:[Value]"&gt; --&gt;      &lt;!-- Provided no CommEvent is defined and the received data is being received as keystrokes each block received will have a tab character appended to it. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The Comm META Tag is an action tag used to control the functionality of the devices communication (serial) port; the way PocketBrowser interacts with that port and the data it provides.
*/

function doCommInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Comm', 'BaudRate:[Value]');      /* Sets the baud rate of the serial port. (not all values are supported on all devices) */
//objGeneric.InvokeMETAFunction('Comm', 'DataBits:[Value]');      /* Sets the number of data bits per word on the device serial port (not all values are supported on all devices). */
//objGeneric.InvokeMETAFunction('Comm', 'StopBits:[Value]');      /* Sets the number of stop bits per word on the device serial port (not all values are supported on all devices). */
//objGeneric.InvokeMETAFunction('Comm', 'Parity:[Value]');      /* Sets the parity check type for the device serial port. (not all values are supported on all devices) */
//objGeneric.InvokeMETAFunction('Comm', 'Handshake:[Value]');      /* Sets the handshaking for the device serial port. (not all values are supported on all devices) */
//objGeneric.InvokeMETAFunction('Comm', 'Port:[Value]');      /* Sets the device serial port. (only certain port designations are valid on any given device) */
//objGeneric.InvokeMETAFunction('Comm', 'Chars:[Value]');      /* Data will be received by PocketBrowser after the specified number of characters have been received over the COM port.  PocketBrowser will receive the data in either a CommEvent or as keystrokes.  'Chars', 'EndChar' and 'Time' are mutually exclusive, see remarks. */
//objGeneric.InvokeMETAFunction('Comm', 'EndChar:[Value]');      /* Data will be received by PocketBrowser after the specified character (or Carriage return + Line Feed) has been received over the COM port.  PocketBrowser will receive the data, minus the final CRLF, in either a CommEvent or as keystrokes.  'Chars', 'EndChar' and 'Time' are mutually exclusive, see remarks. */
//objGeneric.InvokeMETAFunction('Comm', 'Time:[Value]');      /* Data will be received by PocketBrowser after the specified period of COM port inactivity has elapsed.  PocketBrowser will receive the data in either a CommEvent or as keystrokes.  'Chars', 'EndChar' and 'Time' are mutually exclusive, see remarks. */
//objGeneric.InvokeMETAFunction('Comm', 'WriteBytes:[Value]');      /* Value is converted to an array of bytes and written to the COM port. */
//objGeneric.InvokeMETAFunction('Comm', 'WriteString:[Value]');      /* Writes the specified string to the COM port. */
//objGeneric.InvokeMETAFunction('Comm', 'WriteFile:[Value]');      /* The specified file is opened and its contents is written to the COM port. */
//objGeneric.InvokeMETAFunction('Comm', 'AutoEnter:[Value]');      /* Provided no CommEvent is defined and the received data is being received as keystrokes each block received will have a CR (Carriage Return) character appended to it. */
//objGeneric.InvokeMETAFunction('Comm', 'AutoTab:[Value]');      /* Provided no CommEvent is defined and the received data is being received as keystrokes each block received will have a tab character appended to it. */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>
<div id="ReturnsSpan" style="display:block">
<blockquote>
<p>
Modules return information back to their web pages via retrieval tags, for example the scanner has a retrieval tag called 'DecodeEvent' which is called whenever it decodes a barcode.  To register to receive a retrieval tag call the module as follows:
<blockquote>
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="[Module]" content="[RetrievalTag]:url('[URI]')"&gt;</pre>
So to register to retrieve the Scanner's DecodeEvent the following syntax would be used:
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Scanner" content="DecodeEvent:url('Javascript:doScan('%6', '%s', %3, '%2');')"&gt;</pre>
</blockquote><BR><P>
Retrieval tags return information by replacing the text in place holders, defined as '%s' or '%&lt;number&gt;'.  Each place holder represents 1 return value with '%s' being populated sequentially or '%&lt;number&gt;' providing direct acces to the desired value.
</P>
<blockquote>
<p>
	If the content for the Scanner's DecodeEvent is:<BR><pre class="clsSyntaxCells">"url('Javascript:doScan('%6', '%s', %3, '%2');')"</pre><BR>
	The function would be called as follows:<BR><pre class="clsSyntaxCells">"Javascript:doScan('Decode', '5449000053879', 0x35, 'SCN:EAN13');"</pre><BR></p>
</blockquote>
</p><br><DIV class="clsRef">CommEvent</DIV>
<DIV>This event is used to read data from the COM port and is triggered in response to a port event.  Port events can be  one of 'Chars', 'EndChar' or 'Time' as described in the Parameters section.  If no CommEvent is defined the associated data is output as keystrokes.
  </DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<col width="3%">
<col width="20%">
<col width="77%">
<tr>
<th class="clsSyntaxHeadings">ID</th>
<th class="clsSyntaxHeadings">Name</th>
<th class="clsSyntaxHeadings">Description</th>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">1</td>
<td class="clsSyntaxCells" valign="top"><b>Data</b></td>
<td class="clsSyntaxCells" style="text-align:left;">The data that has been accumulated from the open communications port since the last time data was returned.</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0EQG">&lt;!-- &lt;META HTTP-Equiv="Comm" Content="CommEvent:url('JavaScript:fnJSCallbackHandler('%1');')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0EWG">&lt;script&gt;
/*
function doCommInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Comm', 'CommEvent:url('JavaScript:fnJSCallbackHandler('%1');')');      /* This event is used to read data from the COM port and is triggered in response to a port event.  Port events can be  one of 'Chars', 'EndChar' or 'Time' as described in the Parameters section.  If no CommEvent is defined the associated data is output as keystrokes.
   */

}
&lt;/script&gt;</textarea></div>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="78%">
<col width="8%">
<col width="1%">
<col width="5%">
<col width="1%">
<col width="5%">
<col width="2%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><b>Copy this return value template to clipboard:</b></nobr></td>
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EQG');">
		META Tags
	</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EWG');">
		Javascript
	</nobr></td>
<td></td>
</tr>
</table><br><br></blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example opens up the COM1 port using META tags, and instructs the Comm module to call the 'ProcessData' JavaScript function after 250 ms of port inactivity, passing the received data to the function.  The port will be closed when PocketBrowser navigates to a new page.
</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;HTML&gt;
&lt;HEAD&gt;
&lt;!-- Setup the port --&gt;
&lt;META HTTP-Equiv="Comm" Content="Port:COM1"&gt;
&lt;META HTTP-Equiv="Comm" Content="BaudRate:9600"&gt;
&lt;META HTTP-Equiv="Comm" Content="DataBits:8"&gt;
&lt;META HTTP-Equiv="Comm" Content="StopBits:1"&gt;
&lt;META HTTP-Equiv="Comm" Content="Parity:'No Parity'"&gt;
&lt;META HTTP-Equiv="Comm" Content="HandShake:None"&gt;
&lt;META HTTP-Equiv="Comm" Content="Time:250"&gt;
&lt;META HTTP-Equiv="Comm" Content="CommEvent:url('JavaScript:ProcessData('%s');')"&gt;
&lt;META HTTP-Equiv="Comm" Content="Open"&gt;

&lt;!-- Function called when data received from the port --&gt;
&lt;SCRIPT TYPE="text/javascript"&gt;
function ProcessData(data)
{
alert(data);
}
&lt;/SCRIPT&gt;
&lt;/HEAD&gt;

&lt;BODY&gt;
&lt;!-- Your page goes here --&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EBH');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EBH">&lt;!-- 
The following example opens up the COM1 port using META tags, and instructs the Comm module to call the 'ProcessData' JavaScript function after 250 ms of port inactivity, passing the received data to the function.  The port will be closed when PocketBrowser navigates to a new page.

--&gt;

&lt;HTML&gt;
&lt;HEAD&gt;
&lt;!-- Setup the port --&gt;
&lt;META HTTP-Equiv="Comm" Content="Port:COM1"&gt;
&lt;META HTTP-Equiv="Comm" Content="BaudRate:9600"&gt;
&lt;META HTTP-Equiv="Comm" Content="DataBits:8"&gt;
&lt;META HTTP-Equiv="Comm" Content="StopBits:1"&gt;
&lt;META HTTP-Equiv="Comm" Content="Parity:'No Parity'"&gt;
&lt;META HTTP-Equiv="Comm" Content="HandShake:None"&gt;
&lt;META HTTP-Equiv="Comm" Content="Time:250"&gt;
&lt;META HTTP-Equiv="Comm" Content="CommEvent:url('JavaScript:ProcessData('%s');')"&gt;
&lt;META HTTP-Equiv="Comm" Content="Open"&gt;

&lt;!-- Function called when data received from the port --&gt;
&lt;SCRIPT TYPE="text/javascript"&gt;
function ProcessData(data)
{
alert(data);
}
&lt;/SCRIPT&gt;
&lt;/HEAD&gt;

&lt;BODY&gt;
&lt;!-- Your page goes here --&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;

</textarea></div>
<p>The following example sets up the communications port and opens it using JavaScript and the generic ActiveX object.  This example	sets the event trigger to be the receipt of the '#' character (char code = 35).  The default port parameters are used.  JavaScript routines for writing to the port and closing it are also included.
</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;HTML&gt;
&lt;HEAD&gt;
&lt;!-- Script that will get called on page load --&gt;
&lt;SCRIPT TYPE="text/javascript"&gt;
var objGeneric;

function DisplayData(data)
{
alert("Received the following data on the Comm port: " + data);
}

function CommSetup()
{
objGeneric = new ActiveXObject("PocketBrowser.Generic");
objGeneric.InvokeMETAFunction("Comm", "EndChar:35");
objGeneric.InvokeMETAFunction("Comm", "CommEvent:url('JavaScript:DisplayData('%s');'");
objGeneric.InvokeMETAFunction("Comm", "Open");
}

function CommWrite()
{
//  Write a string to the COM port
objGeneric.InvokeMETAFunction("Comm", "WriteString:StringToWrite");
//  Write bytes to the COM port
objGeneric.InvokeMETAFunction("Comm", "WriteBytes:%62 %79 %74 %65 %20 %6d %65 %0a");
//  Write a file to the COM port
objGeneric.InvokeMETAFunction("Comm", "WriteFile:\\File Path\\FileToWrite.txt");
}

function CommClose()
{
objGeneric.InvokeMETAFunction("Comm", "Close");
}
&lt;/SCRIPT&gt;
&lt;/HEAD&gt;

&lt;BODY onload="CommSetup()"&gt;
&lt;!-- Your page goes here --&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EIH');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EIH">&lt;!-- 
The following example sets up the communications port and opens it using JavaScript and the generic ActiveX object.  This example	sets the event trigger to be the receipt of the '#' character (char code = 35).  The default port parameters are used.  JavaScript routines for writing to the port and closing it are also included.

--&gt;

&lt;HTML&gt;
&lt;HEAD&gt;
&lt;!-- Script that will get called on page load --&gt;
&lt;SCRIPT TYPE="text/javascript"&gt;

var objGeneric;

function DisplayData(data)
{
alert("Received the following data on the Comm port: " + data);
}

function CommSetup()
{
objGeneric = new ActiveXObject("PocketBrowser.Generic");
objGeneric.InvokeMETAFunction("Comm", "EndChar:35");
objGeneric.InvokeMETAFunction("Comm", "CommEvent:url('JavaScript:DisplayData('%s');'");
objGeneric.InvokeMETAFunction("Comm", "Open");
}

function CommWrite()
{
//  Write a string to the COM port
objGeneric.InvokeMETAFunction("Comm", "WriteString:StringToWrite");
//  Write bytes to the COM port
objGeneric.InvokeMETAFunction("Comm", "WriteBytes:%62 %79 %74 %65 %20 %6d %65 %0a");
//  Write a file to the COM port
objGeneric.InvokeMETAFunction("Comm", "WriteFile:\\File Path\\FileToWrite.txt");
}

function CommClose()
{
objGeneric.InvokeMETAFunction("Comm", "Close");
}
&lt;/SCRIPT&gt;
&lt;/HEAD&gt;

&lt;BODY onload="CommSetup()"&gt;
&lt;!-- Your page goes here --&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">General</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">If any of the parameters (e.g. BaudRate) are set whilst the COM port is open they will not take effect until the port is closed and reopened again. The parameters 'Chars', 'EndChar' and 'Time' are mutually exclusive and the last one set will take priority when the COM port is next opened.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">AutoEnter and AccelerateKey</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
The AccelerateKey Meta tag controls the behaviour of Accelerate keys on Windows CE, if the ENTER key is configured to be non-functional, then AutoEnter also will appear not to function. 
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
</blockquote><br></div>
<div id="InfoSpan" style="display:block">
<blockquote>
<table>
<tr>
<th>Supported Platforms</th>
<td>Windows CE, Windows Mobile</td>
</tr>
<tr>
<th>Persistence</th>
<td>This tag is mostly page persistent. However, when navigating to a new page, the port will be closed and the CommEvent cleared. RTo continue serial port communications, re-register the CommEvent and re-open the port on the new page.
</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>COM Interface</td>
</tr>
</table>
</blockquote><br></div>
<div id="DefaultParamsSpan" style="display:none">
<pre><textarea id="DefaultParameters"></textarea></pre>
</div>
