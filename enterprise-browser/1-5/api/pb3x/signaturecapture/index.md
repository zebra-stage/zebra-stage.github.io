---
title: SignatureCapture Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The SignatureCapture Meta Tag presents a rectangular box that captures a signature, hand-written notes or other data entered using the device stylus.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">SignatureCapture (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="SignatureCapture" content="[method / parameter&gt;</pre>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="SignatureCapture" content="SignatureSaveEvent:url('[jsFunction | url]')"&gt;</p>
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
<td valign="top" class="clsSyntaxCells"><b>Clear</b></td>
<td valign="top" class="clsSyntaxCells">Clears the capture area.</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Capture</b></td>
<td valign="top" class="clsSyntaxCells">Saves the signature as a bitmap on the device and attempts to send that bitmap to the location specified in the 'Destination' parameter.</td>
<td valign="top" class="clsSyntaxCells">
				N/A
			</td>
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
The SignatureCapture META Tag creates a rectangular box that the user can draw within using the device's stylus to record handwritten data. Common usages for this tag include the capture of client/customer signatures and the input of handwritten text/notations.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="Clear"&gt; --&gt;      &lt;!-- Clears the capture area. --&gt;
&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="Capture"&gt; --&gt;      &lt;!-- Saves the signature as a bitmap on the device and attempts to send that bitmap to the location specified in the 'Destination' parameter. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The SignatureCapture META Tag creates a rectangular box that the user can draw within using the device's stylus to record handwritten data. Common usages for this tag include the capture of client/customer signatures and the input of handwritten text/notations.
*/

function doSignatureCaptureInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('SignatureCapture', 'Clear');      /* Clears the capture area. */
//objGeneric.InvokeMETAFunction('SignatureCapture', 'Capture');      /* Saves the signature as a bitmap on the device and attempts to send that bitmap to the location specified in the 'Destination' parameter. */

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
<td valign="top" class="clsSyntaxCells"><b>Visibility:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">'Visible' or 'Hidden'</td>
<td valign="top" class="clsSyntaxCells">Shows or hides the rectangular capture area</td>
<td valign="top" class="clsSyntaxCells">By default the capture area is hidden</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Border:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">'Visible' or 'Hidden'</td>
<td valign="top" class="clsSyntaxCells">Shows or hides a border for the rectangular capture area</td>
<td valign="top" class="clsSyntaxCells">By default the border is on</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Width:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Positive number</td>
<td valign="top" class="clsSyntaxCells">Sets the width of the rectangular capture area in pixels</td>
<td valign="top" class="clsSyntaxCells">200</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Height:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Positive number</td>
<td valign="top" class="clsSyntaxCells">Sets the height of the rectangular capture area in pixels</td>
<td valign="top" class="clsSyntaxCells">150</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Left:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Positive number</td>
<td valign="top" class="clsSyntaxCells">Sets the top left horizontal position of the rectangular capture area in pixels</td>
<td valign="top" class="clsSyntaxCells">15</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Top:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Positive number</td>
<td valign="top" class="clsSyntaxCells">Sets the top left vertical position of the rectangular capture area in pixels</td>
<td valign="top" class="clsSyntaxCells">60</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Penwidth:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Positive number but values less than 5 are advised</td>
<td valign="top" class="clsSyntaxCells">Sets the width of the pen line in pixels when using the device's stylus</td>
<td valign="top" class="clsSyntaxCells">1</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Pencolor:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">#000000 to #FFFFFF</td>
<td valign="top" class="clsSyntaxCells">RGB value that sets the color of the stylus pen ink using HTML web colors.</td>
<td valign="top" class="clsSyntaxCells">#000000</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>BGColor:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">#000000 to #FFFFFF</td>
<td valign="top" class="clsSyntaxCells">RGB value that sets the backgound color of the signature capture area</td>
<td valign="top" class="clsSyntaxCells">#FFFFFF</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Destination:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Fully qualified URL or file name.  Supports HTTP, FTP and File protocols.</td>
<td valign="top" class="clsSyntaxCells">Sets the destination path and name for the signature bitmap when the 'capture' method is called.  See Remarks</td>
<td valign="top" class="clsSyntaxCells">
						N/A
					</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Username:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">String</td>
<td valign="top" class="clsSyntaxCells">The username for the HTTP or FTP server if required</td>
<td valign="top" class="clsSyntaxCells">No username</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Password:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">String</td>
<td valign="top" class="clsSyntaxCells">The password for the HTTP or FTP server if required</td>
<td valign="top" class="clsSyntaxCells">No password</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Name:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">String compiant with Windows Naming restrictions</td>
<td valign="top" class="clsSyntaxCells">When the 'Capture' method is invoked the contents of the signature capture area are saved in a bitmap in the root directory of the device.  This parameter is used to specify the filename when storing the bitmap locally.</td>
<td valign="top" class="clsSyntaxCells">Signature</td>
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
The SignatureCapture META Tag creates a rectangular box that the user can draw within using the device's stylus to record handwritten data. Common usages for this tag include the capture of client/customer signatures and the input of handwritten text/notations.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="Visibility:[Value]"&gt; --&gt;      &lt;!-- Shows or hides the rectangular capture area --&gt;
&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="Border:[Value]"&gt; --&gt;      &lt;!-- Shows or hides a border for the rectangular capture area --&gt;
&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="Width:[Value]"&gt; --&gt;      &lt;!-- Sets the width of the rectangular capture area in pixels --&gt;
&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="Height:[Value]"&gt; --&gt;      &lt;!-- Sets the height of the rectangular capture area in pixels --&gt;
&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="Left:[Value]"&gt; --&gt;      &lt;!-- Sets the top left horizontal position of the rectangular capture area in pixels --&gt;
&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="Top:[Value]"&gt; --&gt;      &lt;!-- Sets the top left vertical position of the rectangular capture area in pixels --&gt;
&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="Penwidth:[Value]"&gt; --&gt;      &lt;!-- Sets the width of the pen line in pixels when using the device's stylus --&gt;
&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="Pencolor:[Value]"&gt; --&gt;      &lt;!-- RGB value that sets the color of the stylus pen ink using HTML web colors. --&gt;
&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="BGColor:[Value]"&gt; --&gt;      &lt;!-- RGB value that sets the backgound color of the signature capture area --&gt;
&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="Destination:[Value]"&gt; --&gt;      &lt;!-- Sets the destination path and name for the signature bitmap when the 'capture' method is called.  See Remarks --&gt;
&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="Username:[Value]"&gt; --&gt;      &lt;!-- The username for the HTTP or FTP server if required --&gt;
&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="Password:[Value]"&gt; --&gt;      &lt;!-- The password for the HTTP or FTP server if required --&gt;
&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="Name:[Value]"&gt; --&gt;      &lt;!-- When the 'Capture' method is invoked the contents of the signature capture area are saved in a bitmap in the root directory of the device.  This parameter is used to specify the filename when storing the bitmap locally. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The SignatureCapture META Tag creates a rectangular box that the user can draw within using the device's stylus to record handwritten data. Common usages for this tag include the capture of client/customer signatures and the input of handwritten text/notations.
*/

function doSignatureCaptureInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('SignatureCapture', 'Visibility:[Value]');      /* Shows or hides the rectangular capture area */
//objGeneric.InvokeMETAFunction('SignatureCapture', 'Border:[Value]');      /* Shows or hides a border for the rectangular capture area */
//objGeneric.InvokeMETAFunction('SignatureCapture', 'Width:[Value]');      /* Sets the width of the rectangular capture area in pixels */
//objGeneric.InvokeMETAFunction('SignatureCapture', 'Height:[Value]');      /* Sets the height of the rectangular capture area in pixels */
//objGeneric.InvokeMETAFunction('SignatureCapture', 'Left:[Value]');      /* Sets the top left horizontal position of the rectangular capture area in pixels */
//objGeneric.InvokeMETAFunction('SignatureCapture', 'Top:[Value]');      /* Sets the top left vertical position of the rectangular capture area in pixels */
//objGeneric.InvokeMETAFunction('SignatureCapture', 'Penwidth:[Value]');      /* Sets the width of the pen line in pixels when using the device's stylus */
//objGeneric.InvokeMETAFunction('SignatureCapture', 'Pencolor:[Value]');      /* RGB value that sets the color of the stylus pen ink using HTML web colors. */
//objGeneric.InvokeMETAFunction('SignatureCapture', 'BGColor:[Value]');      /* RGB value that sets the backgound color of the signature capture area */
//objGeneric.InvokeMETAFunction('SignatureCapture', 'Destination:[Value]');      /* Sets the destination path and name for the signature bitmap when the 'capture' method is called.  See Remarks */
//objGeneric.InvokeMETAFunction('SignatureCapture', 'Username:[Value]');      /* The username for the HTTP or FTP server if required */
//objGeneric.InvokeMETAFunction('SignatureCapture', 'Password:[Value]');      /* The password for the HTTP or FTP server if required */
//objGeneric.InvokeMETAFunction('SignatureCapture', 'Name:[Value]');      /* When the 'Capture' method is invoked the contents of the signature capture area are saved in a bitmap in the root directory of the device.  This parameter is used to specify the filename when storing the bitmap locally. */

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
</p><br><DIV class="clsRef">SignatureSaveEvent</DIV>
<DIV>The Signature Save Event is called when the captured signature has been successfully transfered to the specified destination.  When 'Capture' is called with the HTTP protocol, the destination server message is returned. When 'Capture' is called with the FTP protocol, either 'OK: File Sent', 'OK: File Received' or 'ERROR' is returned.  This tag should be used in conjunction with the Capture method.</DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
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
<td class="clsSyntaxCells" valign="top"><b>Transfer (Save) Result</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Success or failure of transfer, see note above.</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0EHG">&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="SignatureSaveEvent:url('JavaScript:fnJSCallbackHandler('%1');')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0ENG">&lt;script&gt;
/*
function doSignatureCaptureInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('SignatureCapture', 'SignatureSaveEvent:url('JavaScript:fnJSCallbackHandler('%1');')');      /* The Signature Save Event is called when the captured signature has been successfully transfered to the specified destination.  When 'Capture' is called with the HTTP protocol, the destination server message is returned. When 'Capture' is called with the FTP protocol, either 'OK: File Sent', 'OK: File Received' or 'ERROR' is returned.  This tag should be used in conjunction with the Capture method. */

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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EHG');">
			META Tags
		</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0ENG');">
			Javascript
		</nobr></td>
<td></td>
</tr>
</table><br><br><DIV class="clsRef">VectorEvent</DIV>
<DIV>Signature data is formatted into a series of vectors and returned to the application via this callback function.  The received data may not represent the entire signature as the vectors will be sent in batches if the signature is large.  A single vector (array entry) contains an X, Y coordinate and the beginning / end of the signature is defined by (0xFFFF, 0xFFFF).  This event is independant of the SignatureSaveEvent or capture method, when specified the event will be called whenever a 'pen up' occurs in the signature box.</DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
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
<td class="clsSyntaxCells" valign="top"><b>Vector Array</b></td>
<td class="clsSyntaxCells" style="text-align:left;">JavaScript array of vectors which represent the signature.</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0EVG">&lt;!-- &lt;META HTTP-Equiv="SignatureCapture" Content="VectorEvent:url('JavaScript:fnJSCallbackHandler(%1);')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0E2G">&lt;script&gt;
/*
function doSignatureCaptureInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('SignatureCapture', 'VectorEvent:url('JavaScript:fnJSCallbackHandler(%1);')');      /* Signature data is formatted into a series of vectors and returned to the application via this callback function.  The received data may not represent the entire signature as the vectors will be sent in batches if the signature is large.  A single vector (array entry) contains an X, Y coordinate and the beginning / end of the signature is defined by (0xFFFF, 0xFFFF).  This event is independant of the SignatureSaveEvent or capture method, when specified the event will be called whenever a 'pen up' occurs in the signature box. */

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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EVG');">
			META Tags
		</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E2G');">
			Javascript
		</nobr></td>
<td></td>
</tr>
</table><br><br></blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following META Tag example sets up a yellow rectangular area that has a border with a pen color of burgundy. When the Capture method is invoked via JavaScript the signature will be transferred to a server via HTTP and an alert will inform the user whether or not the transfer succeeded.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="SignatureCapture" Content="width:200"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="height:100"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="left:20"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="top:60"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="penwidth:2"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="name:Sig"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="pencolor:#AA0000"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="bgcolor:#FFFF00"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="Visibility:Visible"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="Destination:url('HTTP://192.168.1.1:80/SPBlog/upload.aspx')"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="SignatureSaveEvent:url('javascript:alert('%s');')"&gt;
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
The following META Tag example sets up a yellow rectangular area that has a border with a pen color of burgundy. When the Capture method is invoked via JavaScript the signature will be transferred to a server via HTTP and an alert will inform the user whether or not the transfer succeeded.
--&gt;

&lt;META HTTP-Equiv="SignatureCapture" Content="width:200"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="height:100"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="left:20"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="top:60"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="penwidth:2"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="name:Sig"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="pencolor:#AA0000"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="bgcolor:#FFFF00"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="Visibility:Visible"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="Destination:url('HTTP://192.168.1.1:80/SPBlog/upload.aspx')"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="SignatureSaveEvent:url('javascript:alert('%s');')"&gt;
</textarea></div>
<p>The following javascript will show a Signature Capture box with default settings when the JavaScript function onDisplay is called:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;script&gt;
function onDisplay()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

objGeneric.InvokeMETAFunction('SignatureCapture', 'Visibility:Visible');
}
&lt;/script&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EPH');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EPH">&lt;!-- 
The following javascript will show a Signature Capture box with default settings when the JavaScript function onDisplay is called:
--&gt;

&lt;script&gt;
function onDisplay()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

objGeneric.InvokeMETAFunction('SignatureCapture', 'Visibility:Visible');
}
&lt;/script&gt;
</textarea></div>
<p>The following example shows signature vectors being displayed in an HTML table</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="SignatureCapture" Content="Height:200"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="BGColor:#FFFF00"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="Width:400"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="Visibility:Visible"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="PenColor:#FF00FF"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="PenWidth:4"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="VectorEvent:url('Javascript:onVectors(%s);')"&gt;

&lt;script type="text/javascript"&gt;
function onVectors(data)
{
var VectorAsHTML = "&lt;TABLE&gt;&lt;TR&gt;&lt;TH&gt;X&lt;/TH&gt;&lt;TH&gt;Y&lt;/TH&gt;&lt;TH&gt;X&lt;/TH&gt;&lt;TH&gt;Y&lt;/TH&gt;&lt;TH&gt;X&lt;/TH&gt;&lt;TH&gt;Y&lt;/TH&gt;&lt;/TR&gt;";
for (var i=0; i&lt;data.length; i = i + 6)
{
VectorAsHTML = VectorAsHTML + "&lt;TR&gt;"
VectorAsHTML = VectorAsHTML + "&lt;TD&gt;" + data[i] + "&lt;/TD&gt;&lt;TD&gt;" + data[i+1] + "&lt;/TD&gt;";
VectorAsHTML = VectorAsHTML + "&lt;TD&gt;" + data[i+2] + "&lt;/TD&gt;&lt;TD&gt;" + data[i+3] + "&lt;/TD&gt;";
VectorAsHTML = VectorAsHTML + "&lt;TD&gt;" + data[i+4] + "&lt;/TD&gt;&lt;TD&gt;" + data[i+5] + "&lt;/TD&gt;";
VectorAsHTML = VectorAsHTML + "&lt;/TR&gt;"
}
VectorAsHTML + "&lt;/TABLE&gt;"
vectorOut.innerHTML = VectorAsHTML;
}
&lt;/script&gt;

&lt;/HEAD&gt;
&lt;BODY&gt;
&lt;BR&gt;&lt;BR&gt;&lt;BR&gt;&lt;BR&gt;
&lt;BR&gt;&lt;BR&gt;&lt;BR&gt;&lt;BR&gt;&lt;BR&gt;
&lt;DIV id="vectorOut"&gt;Vectors Will Appear Here:&lt;/div&gt;
&lt;/BODY&gt;  
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EWH');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EWH">&lt;!-- 
The following example shows signature vectors being displayed in an HTML table
--&gt;

&lt;META HTTP-Equiv="SignatureCapture" Content="Height:200"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="BGColor:#FFFF00"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="Width:400"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="Visibility:Visible"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="PenColor:#FF00FF"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="PenWidth:4"&gt;
&lt;META HTTP-Equiv="SignatureCapture" Content="VectorEvent:url('Javascript:onVectors(%s);')"&gt;

&lt;script type="text/javascript"&gt;
function onVectors(data)
{
var VectorAsHTML = "&lt;TABLE&gt;&lt;TR&gt;&lt;TH&gt;X&lt;/TH&gt;&lt;TH&gt;Y&lt;/TH&gt;&lt;TH&gt;X&lt;/TH&gt;&lt;TH&gt;Y&lt;/TH&gt;&lt;TH&gt;X&lt;/TH&gt;&lt;TH&gt;Y&lt;/TH&gt;&lt;/TR&gt;";
for (var i=0; i&lt;data.length; i = i + 6)
{
VectorAsHTML = VectorAsHTML + "&lt;TR&gt;"
VectorAsHTML = VectorAsHTML + "&lt;TD&gt;" + data[i] + "&lt;/TD&gt;&lt;TD&gt;" + data[i+1] + "&lt;/TD&gt;";
VectorAsHTML = VectorAsHTML + "&lt;TD&gt;" + data[i+2] + "&lt;/TD&gt;&lt;TD&gt;" + data[i+3] + "&lt;/TD&gt;";
VectorAsHTML = VectorAsHTML + "&lt;TD&gt;" + data[i+4] + "&lt;/TD&gt;&lt;TD&gt;" + data[i+5] + "&lt;/TD&gt;";
VectorAsHTML = VectorAsHTML + "&lt;/TR&gt;"
}
VectorAsHTML + "&lt;/TABLE&gt;"
vectorOut.innerHTML = VectorAsHTML;
}
&lt;/script&gt;

&lt;/HEAD&gt;
&lt;BODY&gt;
&lt;BR&gt;&lt;BR&gt;&lt;BR&gt;&lt;BR&gt;
&lt;BR&gt;&lt;BR&gt;&lt;BR&gt;&lt;BR&gt;&lt;BR&gt;
&lt;DIV id="vectorOut"&gt;Vectors Will Appear Here:&lt;/div&gt;
&lt;/BODY&gt;  
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Scrolling</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The signature capture area is not compatible with scrolling the browser window.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Parameters which clear the Signature</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The signature capture area is designed to be set up prior to capturing the signature, as such the following parameters will clear any current signature: "Width", "Height", "PenColor", "BGColor".</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Common Issues</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The 'Visibility:Visible' parameter must be set in order to display the signature capture area.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Format of the Destination URL</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The protocol, port number, username (optional) and password (optional) are all derived from the URL string and should be specified in the following manner: [protocol]://[username]:[password@]Server[:Port]FileNameAndPath.  FTP Example: ftp://admin:root@192.168.1.1:2500/Folder/Sig.bmp.  HTTP Example: http://admin:root@192.168.1.1:8080/Folder/Upload.aspx.  File Example: file://\path\Sig.bmp</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
</blockquote><br></div>
<div id="InfoSpan" style="display:block">
<blockquote>
<table>
<tr>
<th>Supported Platforms</th>
<td>Windows Mobile, Windows CE</td>
</tr>
<tr>
<th>Persistence</th>
<td>The signature box and Save / Vector events will be cleared during page navigation but other parameters such as position and color will persist across page loads.</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>Touch Screen.</td>
</tr>
</table>
</blockquote><br>
</div>
