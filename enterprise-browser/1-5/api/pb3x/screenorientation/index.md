---
title: ScreenOrientation Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The ScreenOrientation Meta Tag is used to control the screen orientation and layout, and can register to receive an event when it changes. A new orientation will persist if PocketBrowser is closed or the device is warm-booted.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">ScreenOrientation (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="ScreenOrientation" content="[orientation&gt;</pre>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="ScreenOrientation" content="ScreenOrientationEvent:url('[jsFunction | url]')"&gt;</p>
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
<td valign="top" class="clsSyntaxCells"><b>Normal</b></td>
<td valign="top" class="clsSyntaxCells">Sets the screen orientation to portrait</td>
<td valign="top" class="clsSyntaxCells">Device Dependant</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>RightHanded</b></td>
<td valign="top" class="clsSyntaxCells">Sets the screen orientation to righthanded (landscape).  Note the webpage will not reformat in line with the new screen size automatically.</td>
<td valign="top" class="clsSyntaxCells">Device Dependant</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>LeftHanded</b></td>
<td valign="top" class="clsSyntaxCells">Sets the screen orientation to lefthanded (landscape).  Note the webpage will not reformat in line with the new screen size automatically.</td>
<td valign="top" class="clsSyntaxCells">Device Dependant</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>UpsideDown</b></td>
<td valign="top" class="clsSyntaxCells">Sets the screen orientation to upside down, useful if presenting the device to a customer to obtain a signature.</td>
<td valign="top" class="clsSyntaxCells">Device Dependant</td>
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
The ScreenOrientation META Tag is used to control the screen orientation/layout and register to receive an event when it changes. The new orientation will persist if PocketBrowser is closed or the device is warm booted.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="ScreenOrientation" Content="Normal"&gt; --&gt;      &lt;!-- Sets the screen orientation to portrait --&gt;
&lt;!-- &lt;META HTTP-Equiv="ScreenOrientation" Content="RightHanded"&gt; --&gt;      &lt;!-- Sets the screen orientation to righthanded (landscape).  Note the webpage will not reformat in line with the new screen size automatically. --&gt;
&lt;!-- &lt;META HTTP-Equiv="ScreenOrientation" Content="LeftHanded"&gt; --&gt;      &lt;!-- Sets the screen orientation to lefthanded (landscape).  Note the webpage will not reformat in line with the new screen size automatically. --&gt;
&lt;!-- &lt;META HTTP-Equiv="ScreenOrientation" Content="UpsideDown"&gt; --&gt;      &lt;!-- Sets the screen orientation to upside down, useful if presenting the device to a customer to obtain a signature. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The ScreenOrientation META Tag is used to control the screen orientation/layout and register to receive an event when it changes. The new orientation will persist if PocketBrowser is closed or the device is warm booted.
*/

function doScreenOrientationInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('ScreenOrientation', 'Normal');      /* Sets the screen orientation to portrait */
//objGeneric.InvokeMETAFunction('ScreenOrientation', 'RightHanded');      /* Sets the screen orientation to righthanded (landscape).  Note the webpage will not reformat in line with the new screen size automatically. */
//objGeneric.InvokeMETAFunction('ScreenOrientation', 'LeftHanded');      /* Sets the screen orientation to lefthanded (landscape).  Note the webpage will not reformat in line with the new screen size automatically. */
//objGeneric.InvokeMETAFunction('ScreenOrientation', 'UpsideDown');      /* Sets the screen orientation to upside down, useful if presenting the device to a customer to obtain a signature. */

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
</p><br><DIV class="clsRef">ScreenOrientationEvent</DIV>
<DIV>The screen orientation event is sent when the current PocketBrowser application changes the orientation of the screen.  For devices with an inbuilt accelerometer this event will also be sent when the user physically rotates the device to a new orientation.</DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
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
<td class="clsSyntaxCells" valign="top"><b>Orientation</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Either 'Normal', 'RightHanded', 'LeftHanded' or 'UpsideDown'</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0EHC">&lt;!-- &lt;META HTTP-Equiv="ScreenOrientation" Content="ScreenOrientationEvent:url('JavaScript:fnJSCallbackHandler('%1');')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0ENC">&lt;script&gt;
/*
function doScreenOrientationInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('ScreenOrientation', 'ScreenOrientationEvent:url('JavaScript:fnJSCallbackHandler('%1');')');      /* The screen orientation event is sent when the current PocketBrowser application changes the orientation of the screen.  For devices with an inbuilt accelerometer this event will also be sent when the user physically rotates the device to a new orientation. */

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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EHC');">
			META Tags
		</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0ENC');">
			Javascript
		</nobr></td>
<td></td>
</tr>
</table><br><br></blockquote><br></div>

<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example orientates the screen to righthanded in landscape mode:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="ScreenOrientation" Content="RightHanded"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EYC');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EYC">&lt;!-- 
The following example orientates the screen to righthanded in landscape mode:
--&gt;

&lt;META HTTP-Equiv="ScreenOrientation" Content="RightHanded"&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Effect on Command Areas and Contol Buttons</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">When the screen orientation changes, either using the ScreenOrientation tag or by rotating a device with hardware support, the command areas will automatically move and resize to fit the new layout. However the buttons themselves are not moved and in some cases this may result in them being off the screen or not in the expected position. If so they must be moved manually by detecting the ScreenOrientationEvent.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
</blockquote><br></div>
<div id="InfoSpan" style="display:block">
<blockquote>
<table>
<tr>
<th>Supported Platforms</th>
<td>Windows Mobile</td>
</tr>
<tr>
<th>Persistence</th>
<td>ScreenOrientationEvent is page specific.  Setting the screen orientation will persist across pages and will also be remembered if PocketBrowser is quit.</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>A device with a screen</td>
</tr>
</table>
</blockquote><br>
</div>
