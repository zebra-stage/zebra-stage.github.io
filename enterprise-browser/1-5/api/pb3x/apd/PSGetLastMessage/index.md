---
title: PSGetLastMessage Method
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The PSGetLastMessage Method of the NarrowBand ActiveX Object returns the last error message encountered by the Adaptive Printer Driver.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">PSGetLastMessage (Method of the NarrowBand ActiveX Object) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">strData = NarrowBand.PSGetLastMessage();</pre>
</td>
</tr>
</table>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('axReturnsSpan', 'aximgReturnsToggle')"><img align="absmiddle" id="aximgReturnsToggle" alt="axReturns Toggle" onmouseover="this.style.cursor='hand'" src="../../Resources/ToggleCollapse.gif"></span>
Return Values
</p>
<div id="axReturnsSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<col width="20%">
<col width="80%">
<tr>
<th class="clsSyntaxHeadings">Name</th>
<th class="clsSyntaxHeadings">Description</th>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top"><b>StrData</b></td>
<td class="clsSyntaxCells" style="text-align:left;">String representing the last error message encountered by the Adaptive Printer Driver.</td>
</tr>
</table>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ExamplesSpan', 'imgExamplesToggle')"><img align="absmiddle" id="imgExamplesToggle" alt="Examples Toggle" onmouseover="this.style.cursor='hand'" src="../../Resources/ToggleCollapse.gif"></span>
Examples
</p>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following javascript code demonstrates the useage of this method:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;script&gt;
var NarrowBand = new ActiveXObject("PocketBrowser.NarrowBand");
var printerID = '2350C';

NarrowBand.PSExternalEx(261, printerID);

if(NarrowBand.PSExternalEx(257, 'Hello World') &gt; 0)
{
alert(NarrowBand.PSGetLastMessage());
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EDB');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EDB">&lt;!-- 
The following javascript code demonstrates the useage of this method:
--&gt;

&lt;script&gt;
var NarrowBand = new ActiveXObject("PocketBrowser.NarrowBand");
var printerID = '2350C';

NarrowBand.PSExternalEx(261, printerID);

if(NarrowBand.PSExternalEx(257, 'Hello World') &gt; 0)
{
alert(NarrowBand.PSGetLastMessage());
}
&lt;/script&gt;
</textarea></div>
</blockquote>
</div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('InfoSpan', 'imgInfoToggle')"><img align="absmiddle" id="imgInfoToggle" alt="Info Toggle" onmouseover="this.style.cursor='hand'" src="../../Resources/ToggleCollapse.gif"></span>
Additional Information
</p>
<div id="InfoSpan" style="display:block">
<blockquote>
<table>
<tr>
<th>Supported Platforms</th>
<td>Windows CE, Windows Mobile</td>
</tr>
<tr>
<th>Persistence</th>
<td>Executes immediately</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>None</td>
</tr>
</table>
</blockquote><br></div>
<div id="DefaultParamsSpan" style="display:none">
<pre><textarea id="DefaultParameters"></textarea></pre>
</div>
