---
title: CardReader Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The CardReader Meta Tag is a retrieval tag that either navigates to a URL or calls a JavaScript function when an attached card reader decodes some data.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">CardReader (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="cardreader" content="parameter:value"&gt;</pre>
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
<td valign="top" class="clsSyntaxCells">Opens the card reader. Resets the ReadEvent to "".</td>
<td valign="top" class="clsSyntaxCells">Closed</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Close</b></td>
<td valign="top" class="clsSyntaxCells">Closes the card reader</td>
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
The CardReader META Tag is a retrieval tag that either navigates to a URL or calls a javascript function when an attached card reader decodes some data.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="CardReader" Content="Open"&gt; --&gt;      &lt;!-- Opens the card reader. Resets the ReadEvent to "". --&gt;
&lt;!-- &lt;META HTTP-Equiv="CardReader" Content="Close"&gt; --&gt;      &lt;!-- Closes the card reader --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The CardReader META Tag is a retrieval tag that either navigates to a URL or calls a javascript function when an attached card reader decodes some data.
*/

function doCardReaderInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('CardReader', 'Open');      /* Opens the card reader. Resets the ReadEvent to "". */
//objGeneric.InvokeMETAFunction('CardReader', 'Close');      /* Closes the card reader */

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
<td valign="top" class="clsSyntaxCells"><b>PINTimeout:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">0 - 65535</td>
<td valign="top" class="clsSyntaxCells">PIN entry timeout in milliseconds. A value of 65535 sets the timeout to infinite.</td>
<td valign="top" class="clsSyntaxCells">30000-&gt;30s timeout</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>PINEntry:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">On, Off</td>
<td valign="top" class="clsSyntaxCells">Turns the PIN entry on or off.</td>
<td valign="top" class="clsSyntaxCells">OFF</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>PANData:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Any 16 digit string</td>
<td valign="top" class="clsSyntaxCells">Sets the card data without the need of a swipe. Invoked only.</td>
<td valign="top" class="clsSyntaxCells">Empty String</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>AutoTab:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Enabled, Disabled</td>
<td valign="top" class="clsSyntaxCells">When enabled, appends a tab to any data returned as keystrokes by the cardreader. </td>
<td valign="top" class="clsSyntaxCells">"disabled"</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>AutoEnter:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Enabled, Disabled</td>
<td valign="top" class="clsSyntaxCells">When enabled, appends a carriage return to any data returned as keystrokes by the cardreader.</td>
<td valign="top" class="clsSyntaxCells">"disabled"</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>ModuleName:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">MSR9000, MSR9001, MSR9500, MSRCAMEO, MSR7000, DCR7000, MSR55, MSR3000</td>
<td valign="top" class="clsSyntaxCells">If the device has multiple card reader drivers installed this parameter is used to select which driver to use.  The drivers present are output in the log file when the card reader is initialised.  This parameter is also used to distinguish between an MSR and a DCR, e.g. if you attach a DCR7000 to your device you can specify that only the MSR functionality is used by specifying this parameter as 'MSR7000'</td>
<td valign="top" class="clsSyntaxCells">None</td>
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
The CardReader META Tag is a retrieval tag that either navigates to a URL or calls a javascript function when an attached card reader decodes some data.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="CardReader" Content="PINTimeout:[Value]"&gt; --&gt;      &lt;!-- PIN entry timeout in milliseconds. A value of 65535 sets the timeout to infinite. --&gt;
&lt;!-- &lt;META HTTP-Equiv="CardReader" Content="PINEntry:[Value]"&gt; --&gt;      &lt;!-- Turns the PIN entry on or off. --&gt;
&lt;!-- &lt;META HTTP-Equiv="CardReader" Content="PANData:[Value]"&gt; --&gt;      &lt;!-- Sets the card data without the need of a swipe. Invoked only. --&gt;
&lt;!-- &lt;META HTTP-Equiv="CardReader" Content="AutoTab:[Value]"&gt; --&gt;      &lt;!-- When enabled, appends a tab to any data returned as keystrokes by the cardreader.  --&gt;
&lt;!-- &lt;META HTTP-Equiv="CardReader" Content="AutoEnter:[Value]"&gt; --&gt;      &lt;!-- When enabled, appends a carriage return to any data returned as keystrokes by the cardreader. --&gt;
&lt;!-- &lt;META HTTP-Equiv="CardReader" Content="ModuleName:[Value]"&gt; --&gt;      &lt;!-- If the device has multiple card reader drivers installed this parameter is used to select which driver to use.  The drivers present are output in the log file when the card reader is initialised.  This parameter is also used to distinguish between an MSR and a DCR, e.g. if you attach a DCR7000 to your device you can specify that only the MSR functionality is used by specifying this parameter as 'MSR7000' --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The CardReader META Tag is a retrieval tag that either navigates to a URL or calls a javascript function when an attached card reader decodes some data.
*/

function doCardReaderInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('CardReader', 'PINTimeout:[Value]');      /* PIN entry timeout in milliseconds. A value of 65535 sets the timeout to infinite. */
//objGeneric.InvokeMETAFunction('CardReader', 'PINEntry:[Value]');      /* Turns the PIN entry on or off. */
//objGeneric.InvokeMETAFunction('CardReader', 'PANData:[Value]');      /* Sets the card data without the need of a swipe. Invoked only. */
//objGeneric.InvokeMETAFunction('CardReader', 'AutoTab:[Value]');      /* When enabled, appends a tab to any data returned as keystrokes by the cardreader.  */
//objGeneric.InvokeMETAFunction('CardReader', 'AutoEnter:[Value]');      /* When enabled, appends a carriage return to any data returned as keystrokes by the cardreader. */
//objGeneric.InvokeMETAFunction('CardReader', 'ModuleName:[Value]');      /* If the device has multiple card reader drivers installed this parameter is used to select which driver to use.  The drivers present are output in the log file when the card reader is initialised.  This parameter is also used to distinguish between an MSR and a DCR, e.g. if you attach a DCR7000 to your device you can specify that only the MSR functionality is used by specifying this parameter as 'MSR7000' */
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
</p><br><DIV class="clsRef">ReadEvent</DIV>
<DIV>
ReadEvent:URL('URI')
URI is either a URL or a javascript function. If a URL, the browser navigates to the URL when the attached card reader decodes some data. If a javascript function, the function is treated as a callback which is invoked when the card reader decodes data. Issuing this tag, automatically opens the card reader, if it has not been opened already.
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
<td class="clsSyntaxCells" style="text-align:left;">Data read by the card reader. This may be card data, the PAN data extracted from the card data, encrypted PIN block data, or a message.</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">2</td>
<td class="clsSyntaxCells" valign="top"><b>Mode</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Describes the data. This will be either: 'CR','ENCDATA','PAN', or 'MESSAGE'.  This equates to card data, encrypted PIN block data, PAN data, or a message, respectively.</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0ETD">&lt;!-- &lt;META HTTP-Equiv="CardReader" Content="ReadEvent:url('JavaScript:fnJSCallbackHandler('%1', '%2');')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0EAE">&lt;script&gt;
/*
function doCardReaderInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('CardReader', 'ReadEvent:url('JavaScript:fnJSCallbackHandler('%1', '%2');')');      /* 
ReadEvent:URL('URI')
URI is either a URL or a javascript function. If a URL, the browser navigates to the URL when the attached card reader decodes some data. If a javascript function, the function is treated as a callback which is invoked when the card reader decodes data. Issuing this tag, automatically opens the card reader, if it has not been opened already.


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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0ETD');">
			META Tags
		</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EAE');">
			Javascript
		</nobr></td>
<td></td>
</tr>
</table><br><br></blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example sets up the card reader to submit the scanned data to an asp page upon successful decoding</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="cardreader" Content="readevent:url('http://mypage.asp?Data=%s;Mode=%s')"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0ESE');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0ESE">&lt;!-- 
The following example sets up the card reader to submit the scanned data to an asp page upon successful decoding
--&gt;

&lt;META HTTP-Equiv="cardreader" Content="readevent:url('http://mypage.asp?Data=%s;Mode=%s')"&gt;
</textarea></div>
<p>The following example sets up the card reader to call a javascript function upon successful decoding. The javascript
function will be called 3 times, once with the raw card data, once with just the pan data extracted
from the raw card data, and once with the encrypted pan data if the pin has been supplied by the
user within 10s.:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;html&gt;&lt;head&gt;
&lt;meta http-equiv="content-type" content="text/html; charset=UTF-8"&gt;
&lt;title&gt;PB 3.0 CardReader Test&lt;/title&gt;
&lt;META HTTP-Equiv="CardReader" Content="PINEntry:ON"&gt;
&lt;META HTTP-Equiv="CardReader" Content="PINTimeout:0x2710"&gt;
&lt;META HTTP-Equiv="CardReader" Content="ReadEvent:url('javascript:doTransaction('%s', '%s');')"&gt;

&lt;script language="javascript" type="text/javascript"&gt;
var Generic = new ActiveXObject("PocketBrowser.Generic");
function doTransaction(data, mode)
{
switch(mode) {
case 'CR':
alert('Card: '+data);
break;
case 'ENCDATA':
alert('Encoded data: '+data);
break;
case 'MESSAGE':
alert('Error: '+data);
break;
case 'PAN':
alert('PAN data: '+data);
alert('Please turn the unit over and enter the PIN');
break;
}
}
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EZE');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EZE">&lt;!-- 
The following example sets up the card reader to call a javascript function upon successful decoding. The javascript
function will be called 3 times, once with the raw card data, once with just the pan data extracted
from the raw card data, and once with the encrypted pan data if the pin has been supplied by the
user within 10s.:
--&gt;

&lt;html&gt;&lt;head&gt;
&lt;meta http-equiv="content-type" content="text/html; charset=UTF-8"&gt;
&lt;title&gt;PB 3.0 CardReader Test&lt;/title&gt;
&lt;META HTTP-Equiv="CardReader" Content="PINEntry:ON"&gt;
&lt;META HTTP-Equiv="CardReader" Content="PINTimeout:0x2710"&gt;
&lt;META HTTP-Equiv="CardReader" Content="ReadEvent:url('javascript:doTransaction('%s', '%s');')"&gt;

&lt;script language="javascript" type="text/javascript"&gt;
var Generic = new ActiveXObject("PocketBrowser.Generic");
function doTransaction(data, mode)
{
switch(mode) {
case 'CR':
alert('Card: '+data);
break;
case 'ENCDATA':
alert('Encoded data: '+data);
break;
case 'MESSAGE':
alert('Error: '+data);
break;
case 'PAN':
alert('PAN data: '+data);
alert('Please turn the unit over and enter the PIN');
break;
}
}
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;
</textarea></div>
<p>The following example closes the card reader</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="CardReader" Content="Close"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EAF');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EAF">&lt;!-- 
The following example closes the card reader
--&gt;

&lt;META HTTP-Equiv="CardReader" Content="Close"&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">General</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">If the CardReader return URI is "", the cardreader data will be returned as keystrokes.  
The readevent parameter must be set at least once before the pandata parameter is set.
If both the autotab and autoenter parameters are set to "enabled", autoenter will take precedence.
An opened card reader must be closed before the attached card reader device and associated
modulename parameter are changed.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">AutoEnter and AccelerateKey</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
The AccelerateKey Meta tag controls the behaviour of Accelerate keys on Windows CE, if the Enter key is configured to be non functional then AutoEnter will also appear to not function either
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Operational Modes</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">For the DCR7000 the ModuleName parameter must be set at least once before the readevent parameter is set.  If the card reader is an MSR, when a card is swiped it returns the data read from the card. Setting ModuleName to a DCR will cause the card data to be returned followed by the PAN Data before waiting for a PIN to be entered on the keypad.  Once entered the PIN will be encrypted and returned by a third ReadEvent.  The card must be a validly formatted IATA or ABA card.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Event URI and Parameter Persistence</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
The ReadEvent URI, the PINTimeout, PINEntry, AutoEnter / AutoTab parameters are page-specific values.  When PocketBrowser performs a page navigate (not a JavaScript callback), the URI is invalidated, the parameters set to their default values and the cardreader is closed.  While the cardreader is open, the URI value may be changed via passing a new readevent parameter/value pair.  In the case that the CardReader is already open, the readevent parameter will simply update the URI and do nothing to the state	of the port.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Invalid parameter values</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
Any attempt to set a parameter to an invalid value, will result in no effect on the parameter's current value.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Closing the reader while PIN entry pending</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
There is no way to abort a pending PIN entry (other than the customer pressing the Cancel button), for security reasons. Therefore if the reader is closed or PocketBrowser is quit during that time it will become unresponsive until a PIN is entered or the PIN timeout occurs. 
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Blank card data</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
In certain circumstances it is possible that the card reader may return empty card data. The Javascript event function should be able to handle this correctly. 
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Detaching / Reattaching the Card Reader</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
Applications running in PocketBrowser should be resiliant against the card reader being detached and subsequently reattached.  Card data parsing code should be robust against unexpected characters in the first read after reattachment.  
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
</blockquote><br></div>
<div id="InfoSpan" style="display:block">
<blockquote>
<table>
<tr>
<th>Supported Platforms</th>
<td>Windows CE, Windows Mobile, Windows Mobile SE</td>
</tr>
<tr>
<th>Persistence</th>
<td>See Comment Above</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>You must have the appropriate drivers installed on your device to use the CardReader.  You will see which drivers are installed in the PocketBrowser log file after you attempt to use any of the card reader functions in PocketBrowser.  If you wish to install drivers they can be downloaded from http://support.symbol.com, an example search would be MSR3000 or DCR7x00.  Take note that different drivers are required for the DCR7000-100 and DCR7000-200. </td>
</tr>
</table>
</blockquote><br></div>
<div id="DefaultParamsSpan" style="display:none">
<pre><textarea id="DefaultParameters"></textarea></pre>
</div>
