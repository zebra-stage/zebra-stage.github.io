---
title: InvokeMetaFunction Method
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The InvokeMETAFunction Method of the Generic ActiveX Object invokes the specified meta function immediately.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">InvokeMETAFunction (Method of the Generic ActiveX Object) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">var bRetVal = objGeneric.InvokeMETAFunction(strHTTPEquiv, strContents);</pre>
</td>
</tr>
</table>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ParametersWSpan', 'imgParametersWToggle')"><img align="absmiddle" id="imgParametersWToggle" alt="ParametersW Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif&#xA;					"></span>
Parameters
</p>
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
<td valign="top" class="clsSyntaxCells"><b>strHTTPEquiv</b></td>
<td valign="top" class="clsSyntaxCells">Module Name</td>
<td valign="top" class="clsSyntaxCells">Module on which to perform the method or apply the property.  This would be placed in the 'HTTP-Equiv' part of the META tag if it was being parsed on a page.</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>strContents</b></td>
<td valign="top" class="clsSyntaxCells">Method or Property</td>
<td valign="top" class="clsSyntaxCells">The Method or Property to be applied to the module.</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
</table>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ExamplesSpan', 'imgExamplesToggle')"><img align="absmiddle" id="imgExamplesToggle" alt="Examples Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Examples
</p>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example enables the scanner:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;script&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
objGeneric.InvokeMETAFunction('Scanner', 'Enabled');
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EWB');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EWB">&lt;!-- 
The following example enables the scanner:
--&gt;

&lt;script&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
objGeneric.InvokeMETAFunction('Scanner', 'Enabled');
&lt;/script&gt;
</textarea></div>
<p>The following example enables the scanner with only the EAN8 decoder:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;script&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
objGeneric.InvokeMETAFunction('Scanner', 'all_decoders:disabled; ean8:enabled; Enabled');
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E4B');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0E4B">&lt;!-- 
The following example enables the scanner with only the EAN8 decoder:
--&gt;

&lt;script&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
objGeneric.InvokeMETAFunction('Scanner', 'all_decoders:disabled; ean8:enabled; Enabled');
&lt;/script&gt;
</textarea></div>
<p>The following example displays a signature capture window:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;script&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
objGeneric.InvokeMETAFunction('Signature', 'Visibility:Visible');
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EEC');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EEC">&lt;!-- 
The following example displays a signature capture window:
--&gt;

&lt;script&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
objGeneric.InvokeMETAFunction('Signature', 'Visibility:Visible');
&lt;/script&gt;
</textarea></div>
<p>The following example displays the battery indicator with specific styling:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;script&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
objGeneric.InvokeMETAFunction('Battery', 'Left:50; Top:50; IconPosition:Bottom; color:#FF0000; visibility:visible');
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0ELC');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0ELC">&lt;!-- 
The following example displays the battery indicator with specific styling:
--&gt;

&lt;script&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
objGeneric.InvokeMETAFunction('Battery', 'Left:50; Top:50; IconPosition:Bottom; color:#FF0000; visibility:visible');
&lt;/script&gt;
</textarea></div>
</blockquote>
</div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('RemarksSpan', 'imgRemarksToggle')"><img align="absmiddle" id="imgRemarksToggle" alt="Remarks Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Remarks
</p>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Format of Parameters</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">All parameters must comply with EMML, the Enterprise Mobility Markup Language.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('InfoSpan', 'imgInfoToggle')"><img align="absmiddle" id="imgInfoToggle" alt="Info Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
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
<td>Executes instantaneously</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>None</td>
</tr>
</table>
</blockquote><br>
</div>
