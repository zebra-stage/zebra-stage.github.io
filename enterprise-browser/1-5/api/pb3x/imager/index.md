---
title: Imager Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Imager Meta Tag is an action tag which controls the imager functions and navigates to a URL or calls a JavaScript function in reponse to an HTTP image transfer executed by the tag.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Imager (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="imager" content="[parameter&gt;</pre>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="imager" content="ImagerEvent:url('jsFunction or url')"&gt;</p>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="imager" content="ImagerEnumEvent:url('jsFunction or url')"&gt;</p>
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
<td valign="top" class="clsSyntaxCells"><b>Enabled</b></td>
<td valign="top" class="clsSyntaxCells">enables the imager device and shows the viewer window</td>
<td valign="top" class="clsSyntaxCells">
	N/A
</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Disabled</b></td>
<td valign="top" class="clsSyntaxCells">disables the imager device and hides the viewer window</td>
<td valign="top" class="clsSyntaxCells">
	N/A
</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Capture</b></td>
<td valign="top" class="clsSyntaxCells">captures the current image and sends the file</td>
<td valign="top" class="clsSyntaxCells">
	N/A
</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Enumerate</b></td>
<td valign="top" class="clsSyntaxCells">Return a list of imagers available on the device using ImagerEnumEvent. This tag will be actioned immediately</td>
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
The Imager META Tag is an action tag which controls the imager functions and navigates to a URL or calls a javascript function in reponse to an HTTP image transfer carried out by the imager meta tag.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Imager" Content="Enabled"&gt; --&gt;      &lt;!-- enables the imager device and shows the viewer window --&gt;
&lt;!-- &lt;META HTTP-Equiv="Imager" Content="Disabled"&gt; --&gt;      &lt;!-- disables the imager device and hides the viewer window --&gt;
&lt;!-- &lt;META HTTP-Equiv="Imager" Content="Capture"&gt; --&gt;      &lt;!-- captures the current image and sends the file --&gt;
&lt;!-- &lt;META HTTP-Equiv="Imager" Content="Enumerate"&gt; --&gt;      &lt;!-- Return a list of imagers available on the device using ImagerEnumEvent. This tag will be actioned immediately --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The Imager META Tag is an action tag which controls the imager functions and navigates to a URL or calls a javascript function in reponse to an HTTP image transfer carried out by the imager meta tag.
*/

function doImagerInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Imager', 'Enabled');      /* enables the imager device and shows the viewer window */
//objGeneric.InvokeMETAFunction('Imager', 'Disabled');      /* disables the imager device and hides the viewer window */
//objGeneric.InvokeMETAFunction('Imager', 'Capture');      /* captures the current image and sends the file */
//objGeneric.InvokeMETAFunction('Imager', 'Enumerate');      /* Return a list of imagers available on the device using ImagerEnumEvent. This tag will be actioned immediately */

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
<td valign="top" class="clsSyntaxCells"><b>Enabled:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">enables referenced Imager. Imager IDs can be obtained via ImagerEnumEvent</td>
<td valign="top" class="clsSyntaxCells">enables the referenced imager device and shows the viewer window</td>
<td valign="top" class="clsSyntaxCells">
			N/A
		</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Left:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">numeric Value (0-ScreenWidth)</td>
<td valign="top" class="clsSyntaxCells">Sets the top left horizontal position of the viewer window in pixels</td>
<td valign="top" class="clsSyntaxCells">0</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Top:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">Numeric values (0-ScreenHeight)</td>
<td valign="top" class="clsSyntaxCells">Sets the top left vertical position of the viewer window in pixels</td>
<td valign="top" class="clsSyntaxCells">0</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Width:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">Numeric values (0-ScreenWidth)</td>
<td valign="top" class="clsSyntaxCells">Sets the width of the viewer window in pixels</td>
<td valign="top" class="clsSyntaxCells">ScreenWidth</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Height:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">Numeric values (0-ScreenHeight)</td>
<td valign="top" class="clsSyntaxCells">Sets the height of the viewer window in pixels</td>
<td valign="top" class="clsSyntaxCells">0</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Lamp:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">ON/OFF</td>
<td valign="top" class="clsSyntaxCells">switches the lamp ON or OFF</td>
<td valign="top" class="clsSyntaxCells">OFF</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Aim:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">ON/OFF</td>
<td valign="top" class="clsSyntaxCells">switches the imager's aim ON or OFF</td>
<td valign="top" class="clsSyntaxCells">OFF</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Username:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">http or ftp server user name</td>
<td valign="top" class="clsSyntaxCells">username for the http or ftp server if required</td>
<td valign="top" class="clsSyntaxCells">
			N/A
		</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Password:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">http or ftp server password</td>
<td valign="top" class="clsSyntaxCells">password for the http or ftp server if required</td>
<td valign="top" class="clsSyntaxCells">
			N/A
		</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Sound:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">wav file name</td>
<td valign="top" class="clsSyntaxCells">specifies the wave file to play when capturing an image</td>
<td valign="top" class="clsSyntaxCells">
			N/A
		</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Destination:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">http,ftp or file path </td>
<td valign="top" class="clsSyntaxCells">the path of the destination</td>
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
The Imager META Tag is an action tag which controls the imager functions and navigates to a URL or calls a javascript function in reponse to an HTTP image transfer carried out by the imager meta tag.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Imager" Content="Enabled:[Value]"&gt; --&gt;      &lt;!-- enables the referenced imager device and shows the viewer window --&gt;
&lt;!-- &lt;META HTTP-Equiv="Imager" Content="Left:[Value]"&gt; --&gt;      &lt;!-- Sets the top left horizontal position of the viewer window in pixels --&gt;
&lt;!-- &lt;META HTTP-Equiv="Imager" Content="Top:[Value]"&gt; --&gt;      &lt;!-- Sets the top left vertical position of the viewer window in pixels --&gt;
&lt;!-- &lt;META HTTP-Equiv="Imager" Content="Width:[Value]"&gt; --&gt;      &lt;!-- Sets the width of the viewer window in pixels --&gt;
&lt;!-- &lt;META HTTP-Equiv="Imager" Content="Height:[Value]"&gt; --&gt;      &lt;!-- Sets the height of the viewer window in pixels --&gt;
&lt;!-- &lt;META HTTP-Equiv="Imager" Content="Lamp:[Value]"&gt; --&gt;      &lt;!-- switches the lamp ON or OFF --&gt;
&lt;!-- &lt;META HTTP-Equiv="Imager" Content="Aim:[Value]"&gt; --&gt;      &lt;!-- switches the imager's aim ON or OFF --&gt;
&lt;!-- &lt;META HTTP-Equiv="Imager" Content="Username:[Value]"&gt; --&gt;      &lt;!-- username for the http or ftp server if required --&gt;
&lt;!-- &lt;META HTTP-Equiv="Imager" Content="Password:[Value]"&gt; --&gt;      &lt;!-- password for the http or ftp server if required --&gt;
&lt;!-- &lt;META HTTP-Equiv="Imager" Content="Sound:[Value]"&gt; --&gt;      &lt;!-- specifies the wave file to play when capturing an image --&gt;
&lt;!-- &lt;META HTTP-Equiv="Imager" Content="Destination:[Value]"&gt; --&gt;      &lt;!-- the path of the destination --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The Imager META Tag is an action tag which controls the imager functions and navigates to a URL or calls a javascript function in reponse to an HTTP image transfer carried out by the imager meta tag.
*/

function doImagerInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Imager', 'Enabled:[Value]');      /* enables the referenced imager device and shows the viewer window */
//objGeneric.InvokeMETAFunction('Imager', 'Left:[Value]');      /* Sets the top left horizontal position of the viewer window in pixels */
//objGeneric.InvokeMETAFunction('Imager', 'Top:[Value]');      /* Sets the top left vertical position of the viewer window in pixels */
//objGeneric.InvokeMETAFunction('Imager', 'Width:[Value]');      /* Sets the width of the viewer window in pixels */
//objGeneric.InvokeMETAFunction('Imager', 'Height:[Value]');      /* Sets the height of the viewer window in pixels */
//objGeneric.InvokeMETAFunction('Imager', 'Lamp:[Value]');      /* switches the lamp ON or OFF */
//objGeneric.InvokeMETAFunction('Imager', 'Aim:[Value]');      /* switches the imager's aim ON or OFF */
//objGeneric.InvokeMETAFunction('Imager', 'Username:[Value]');      /* username for the http or ftp server if required */
//objGeneric.InvokeMETAFunction('Imager', 'Password:[Value]');      /* password for the http or ftp server if required */
//objGeneric.InvokeMETAFunction('Imager', 'Sound:[Value]');      /* specifies the wave file to play when capturing an image */
//objGeneric.InvokeMETAFunction('Imager', 'Destination:[Value]');      /* the path of the destination */

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
</p><br><DIV class="clsRef">Imagerevent</DIV>
<DIV></DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
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
<td class="clsSyntaxCells" valign="top"><b>Response</b></td>
<td class="clsSyntaxCells" style="text-align:left;">In response to an upload to an HTTP site, the reply from the web server will be returned.</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0ETG">&lt;!-- &lt;META HTTP-Equiv="Imager" Content="Imagerevent:url('JavaScript:fnJSCallbackHandler('%1');')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0EXG">&lt;script&gt;
/*
function doImagerInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Imager', 'Imagerevent:url('JavaScript:fnJSCallbackHandler('%1');')');      /*  */

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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0ETG');">
META Tags
</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EXG');">
Javascript
</nobr></td>
<td></td>
</tr>
</table><br><br><DIV class="clsRef">imagerEnumevent</DIV>
<DIV></DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
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
<td class="clsSyntaxCells" valign="top"><b>ImagerArray</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Two dimensional array of imagers present on the device</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0E3G">&lt;!-- &lt;META HTTP-Equiv="Imager" Content="imagerEnumevent:url('JavaScript:fnJSCallbackHandler(%1);')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0EAH">&lt;script&gt;
/*
function doImagerInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Imager', 'imagerEnumevent:url('JavaScript:fnJSCallbackHandler(%1);')');      /*  */

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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E3G');">
META Tags
</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EAH');">
Javascript
</nobr></td>
<td></td>
</tr>
</table><br><br></blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example sets up the imager to capture an image and transfer it to an ftp site:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;meta http-equiv="Imager" content="width:100"&gt;
&lt;meta http-equiv="Imager" content="height:100"&gt;
&lt;meta http-equiv="Imager" content="left:120"&gt;
&lt;meta http-equiv="Imager" content="Destination:software.zebra.com"&gt;
&lt;meta http-equiv="Imager" content="username:pbtest"&gt;
&lt;meta http-equiv="Imager" content="password:pb30"&gt;
&lt;meta http-equiv="Imager" content="sound:\windows\alarm2.wav"&gt;
&lt;meta http-equiv="Imager" content="aim:on"&gt;
&lt;meta http-equiv="Imager" content="lamp:off"&gt;
&lt;meta http-equiv="Imager" content="FTP"&gt;
&lt;meta http-equiv="Imager" content="imagerevent:url('javascript:alert('%s');')"&gt;
&lt;meta http-equiv="Imager" content="enabled"&gt;
&lt;meta http-equiv="onkey0x0d" content="KeyEvent:url('javascript:doCapture(0);')"&gt;

&lt;SCRIPT&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

function doCapture()
{
objGeneric.InvokeMETAFunction('imager', 'capture');
}
&lt;/SCRIPT&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EKH');">
Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EKH">&lt;!-- 
The following example sets up the imager to capture an image and transfer it to an ftp site:
--&gt;
&lt;meta http-equiv="Imager" content="width:100"&gt;
&lt;meta http-equiv="Imager" content="height:100"&gt;
&lt;meta http-equiv="Imager" content="left:120"&gt;
&lt;meta http-equiv="Imager" content="Destination:software.zebra.com"&gt;
&lt;meta http-equiv="Imager" content="username:pbtest"&gt;
&lt;meta http-equiv="Imager" content="password:pb30"&gt;
&lt;meta http-equiv="Imager" content="sound:\windows\alarm2.wav"&gt;
&lt;meta http-equiv="Imager" content="aim:on"&gt;
&lt;meta http-equiv="Imager" content="lamp:off"&gt;
&lt;meta http-equiv="Imager" content="FTP"&gt;
&lt;meta http-equiv="Imager" content="imagerevent:url('javascript:alert('%s');')"&gt;
&lt;meta http-equiv="Imager" content="enabled"&gt;
&lt;meta http-equiv="onkey0x0d" content="KeyEvent:url('javascript:doCapture(0);')"&gt;

&lt;SCRIPT&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

function doCapture()
{
objGeneric.InvokeMETAFunction('imager', 'capture');
}
&lt;/SCRIPT&gt;
</textarea></div>
<p>The following example sets up the imager to capture an image when the Javascript function 'doCapture' is called:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">

&lt;meta HTTP-Equiv="Imager" Content="enabled;left:30;top:50;width:160;height:100;aim:off;lamp:off"&gt;
&lt;meta HTTP-Equiv="Imager" Content="destination:url('http://ds-laptop/PHTest/Received/HTTP/Upload.aspx')"&gt;
&lt;meta http-equiv="Imager" content="sound:\windows\alarm2.wav"&gt;
&lt;meta http-equiv="Imager" content="imagerevent:url('javascript:alert('%s');')"&gt;

&lt;script&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

function doCapture()
{
objGeneric.InvokeMETAFunction('imager', 'capture');
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0ERH');">
Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0ERH">&lt;!-- 
The following example sets up the imager to capture an image when the Javascript function 'doCapture' is called:
--&gt;
&lt;meta HTTP-Equiv="Imager" Content="enabled;left:30;top:50;width:160;height:100;aim:off;lamp:off"&gt;
&lt;meta HTTP-Equiv="Imager" Content="destination:url('http://ds-laptop/PHTest/Received/HTTP/Upload.aspx')"&gt;
&lt;meta http-equiv="Imager" content="sound:\windows\alarm2.wav"&gt;
&lt;meta http-equiv="Imager" content="imagerevent:url('javascript:alert('%s');')"&gt;
&lt;script&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

function doCapture()
{
objGeneric.InvokeMETAFunction('imager', 'capture');
}
&lt;/script&gt;
</textarea></div>
<p>The following ASP.NET example recieves a file from the imager and saves it in a new filename:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;%@ Import namespace="System.Web.UI.HtmlControls" %&gt;
&lt;%@ Import namespace="System.IO" %&gt;
&lt;script runat="server" language="C#"&gt;
//called when the file is submitted	
protected void Page_Load(object o, EventArgs e) 
{
//check we have submitted a file
if( spbImagerFile.PostedFile != null )
{
// Get a reference to PostedFile object
HttpPostedFile myFile = spbImagerFile.PostedFile;

// Get size of uploaded file
int nFileLen = myFile.ContentLength; 

// make sure the size of the file is &gt; 0
if(nFileLen &gt; 0 )
{
//Allocate a buffer for reading of the file
byte[] myData = new byte[nFileLen];

// Read uploaded file from the Stream
myFile.InputStream.Read(myData, 0, nFileLen);

// Create a name for the file to store
string strFilename = Path.GetFileName(myFile.FileName);

// Write data into a file
WriteToFile(Server.MapPath(strFilename), ref myData);

// Write a response back to sender
Response.Write("File Received");
}
}
}

// Writes file to current folder
private void WriteToFile(string strPath, ref byte[] Buffer)
{
// Create a file
FileStream newFile = new FileStream(strPath, FileMode.Create);

// Write data to the file
newFile.Write(Buffer, 0, Buffer.Length);

// Close file
newFile.Close();
}
&lt;/script&gt;
&lt;form name="spbImagerForm" method="post" action="upload.aspx" id="spbImagerForm" enctype="multipart/form-data"&gt;
&lt;input id="spbImagerFile" type="file" runat="server" Visible="false"&gt;
&lt;/form&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EYH');">
Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EYH">&lt;!-- 
The following ASP.NET example recieves a file from the imager and saves it in a new filename:
--&gt;

&lt;%@ Import namespace="System.Web.UI.HtmlControls" %&gt;
&lt;%@ Import namespace="System.IO" %&gt;

&lt;script runat="server" language="C#"&gt;
//called when the file is submitted	
protected void Page_Load(object o, EventArgs e) 
{
//check we have submitted a file
if( spbImagerFile.PostedFile != null )
{
// Get a reference to PostedFile object
HttpPostedFile myFile = spbImagerFile.PostedFile;

// Get size of uploaded file
int nFileLen = myFile.ContentLength; 

// make sure the size of the file is &gt; 0
if(nFileLen &gt; 0 )
{
//Allocate a buffer for reading of the file
byte[] myData = new byte[nFileLen];

// Read uploaded file from the Stream
myFile.InputStream.Read(myData, 0, nFileLen);

// Create a name for the file to store
string strFilename = Path.GetFileName(myFile.FileName);

// Write data into a file
WriteToFile(Server.MapPath(strFilename), ref myData);

// Write a response back to sender
Response.Write("File Received");
}
}
}
// Writes file to current folder
private void WriteToFile(string strPath, ref byte[] Buffer)
{
// Create a file
FileStream newFile = new FileStream(strPath, FileMode.Create);

// Write data to the file
newFile.Write(Buffer, 0, Buffer.Length);

// Close file
newFile.Close();
}
&lt;/script&gt;
&lt;form name="spbImagerForm" method="post" action="upload.aspx" id="spbImagerForm" enctype="multipart/form-data"&gt;
&lt;input id="spbImagerFile" type="file" runat="server" Visible="false"&gt;
&lt;/form&gt;
</textarea></div>
<p>The following is a useful desktop html file for testing the example above:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;form name="spbImagerForm" method="post" action="upload.aspx" id="spbImagerForm" enctype="multipart/form-data"&gt;
&lt;input name="spbImagerFile" id="spbImagerFile" type="file" /&gt;
&lt;input type="submit" value="submit"&gt;
&lt;/form&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EAAAC');">
Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EAAAC">&lt;!-- 
The following is a useful desktop html file for testing the example above:
--&gt;

&lt;form name="spbImagerForm" method="post" action="upload.aspx" id="spbImagerForm" enctype="multipart/form-data"&gt;
&lt;input name="spbImagerFile" id="spbImagerFile" type="file" /&gt;
&lt;input type="submit" value="submit"&gt;
&lt;/form&gt;
</textarea></div>
<p>The following example displays the available imagers on screen </p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;html&gt;
&lt;head&gt;
&lt;meta HTTP-Equiv="imager" Content="imagerEnumEvent:url('Javascript:Enumimagers(%s);')"&gt;
&lt;meta HTTP-Equiv="quitbutton" Content="left:200;top:0;visibility:visible"&gt;
&lt;/head&gt;

&lt;body BGCOLOR="#FFFFEA" TEXT="#0000A0" LINK="#FF0000" VLINK="#808080" ALINK="#008040" onLoad="setImagerEnumTimer();"&gt;
&lt;a HREF="./Index.html"&gt;Back&lt;/a&gt;&lt;br&gt;
&lt;div ID="message"&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
&lt;SCRIPT LANGUAGE="JavaScript"&gt;
function Enumimagers(imagerArray)
{
//alert(imagerArray);
var imagerInfo = "Imagers On Device: " + imagerArray.length + "&lt;BR&gt;ID  --  Name&lt;BR&gt;" 
//alert(imagerInfo);
for (i=0; i &lt; imagerArray.length; i++)
{
imagerInfo = imagerInfo + imagerArray[i][0] + ' -- ' + imagerArray[i][1] + '&lt;BR&gt;';	
}
message.innerHTML = imagerInfo;   
}
//  We can not call Scanner:Enumerate during page load on WM so give the page 3 seconds to finish loading
function setImagerEnumTimer()
{
//alert('setImagerEnumTimer');
message.innerHTML = "getting data...";
setTimeout("onImagerEnable()", 3000);
}
function onImagerEnable()
{

var Generic = new ActiveXObject("PocketBrowser.Generic");
Generic.InvokeMETAFunction('imager', 'Enumerate');
//alert('onImagerEnable');
}
&lt;/SCRIPT&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EHAAC');">
Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EHAAC">&lt;!-- 
The following example displays the available imagers on screen 
--&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta HTTP-Equiv="imager" Content="imagerEnumEvent:url('Javascript:Enumimagers(%s);')"&gt;
&lt;meta HTTP-Equiv="quitbutton" Content="left:200;top:0;visibility:visible"&gt;
&lt;/head&gt;
&lt;body BGCOLOR="#FFFFEA" TEXT="#0000A0" LINK="#FF0000" VLINK="#808080" ALINK="#008040" onLoad="setImagerEnumTimer();"&gt;
&lt;a HREF="./Index.html"&gt;Back&lt;/a&gt;&lt;br&gt;
&lt;div ID="message"&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
&lt;SCRIPT LANGUAGE="JavaScript"&gt;
function Enumimagers(imagerArray)
{
//alert(imagerArray);

var imagerInfo = "Imagers On Device: " + imagerArray.length + "&lt;BR&gt;ID  --  Name&lt;BR&gt;" 
//alert(imagerInfo);

for (i=0; i &lt; imagerArray.length; i++)
{
imagerInfo = imagerInfo + imagerArray[i][0] + ' -- ' + imagerArray[i][1] + '&lt;BR&gt;';

}
message.innerHTML = imagerInfo;

}

//  We can not call Scanner:Enumerate during page load on WM so give the page 3 seconds to finish loading
function setImagerEnumTimer()
{
//alert('setImagerEnumTimer');
message.innerHTML = "getting data...";
setTimeout("onImagerEnable()", 3000);
}
function onImagerEnable()
{

var Generic = new ActiveXObject("PocketBrowser.Generic");
Generic.InvokeMETAFunction('imager', 'Enumerate');
//alert('onImagerEnable');
}
&lt;/SCRIPT&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">ImagerArray attribute</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
The ImagerArray attribute returned from ImagerEnumevent retrieval tag will enumerate each imager present 
on the device in a 2D array, associating each Imager's device name with a user friendly name.  
The device ID can be passed as a parameter to "Imager" "Enabled:&lt;deviceID&gt;", the friendly
name is a user readable description of the Imager, e.g:
"IMG1", "Imager"
"IMG2", "color Camera".
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Scanning and Image Capture</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
Image capture tags cannot be used on the same page as scanner tags due to Hardware Limitations.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Creating a fully qualified URL</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The protocol, port number, username (optional) and password (optional) are all derived from the URL string and should be specified in the following manner: [protocol]://[username]:[password@]Server[:Port]FileNameAndPath.  FTP Example: ftp://admin:root@192.168.1.1:2500/Folder/file.txt.  HTTP Example: http://admin:root@192.168.1.1:8080/Folder/upload.aspx</DIV>
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
<td>The viewer is page specific but the settings are persistent.</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>The device must have an Imager device or Color Camera. To use color Camera you must have installed Cab package to update Imaging driver available with latest version of EMDK.</td>
</tr>
</table>
</blockquote><br></div>
<div id="DefaultParamsSpan" style="display:none">
<pre><textarea id="DefaultParameters"></textarea></pre>
</div>
