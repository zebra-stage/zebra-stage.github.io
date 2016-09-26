---
title: Stylus Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Stylus Meta Tag is an action tag used to enable and disable the touch screen.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Stylus (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-EQUIV="Stylus" content="[method&gt;</pre>
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
<td valign="top" class="clsSyntaxCells">Enables the touch screen</td>
<td valign="top" class="clsSyntaxCells">Device Dependant</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Disabled</b></td>
<td valign="top" class="clsSyntaxCells">Disables the touch screen</td>
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
The Stylus META Tag is an action tag used to enable or disable the touch screen.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Stylus" Content="Enabled"&gt; --&gt;      &lt;!-- Enables the touch screen --&gt;
&lt;!-- &lt;META HTTP-Equiv="Stylus" Content="Disabled"&gt; --&gt;      &lt;!-- Disables the touch screen --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The Stylus META Tag is an action tag used to enable or disable the touch screen.
*/

function doStylusInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Stylus', 'Enabled');      /* Enables the touch screen */
//objGeneric.InvokeMETAFunction('Stylus', 'Disabled');      /* Disables the touch screen */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>

<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example disables the touch screen until the Enter key is pressed:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-EQUIV="Stylus" content="Disabled"&gt;
&lt;META HTTP-EQUIV="OnKey0x0d" content="javascript:doTest();"&gt;

&lt;SCRIPT&gt;
function doTest()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
objGeneric.InvokeMETAFunction('Stylus', 'Enabled');
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EQB');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EQB">&lt;!-- 
The following example disables the touch screen until the Enter key is pressed:
--&gt;

&lt;META HTTP-EQUIV="Stylus" content="Disabled"&gt;
&lt;META HTTP-EQUIV="OnKey0x0d" content="javascript:doTest();"&gt;

&lt;SCRIPT&gt;
function doTest()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
objGeneric.InvokeMETAFunction('Stylus', 'Enabled');
}
&lt;/SCRIPT&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Remote Display</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">This tag does not affect the behaviour of remote display applications for controlling the device</DIV>
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
<td>This tag is persistent.</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>None.</td>
</tr>
</table>
</blockquote><br></div>
<div id="DefaultParamsSpan" style="display:none">
<pre><textarea id="DefaultParameters"></textarea></pre>
</div>
