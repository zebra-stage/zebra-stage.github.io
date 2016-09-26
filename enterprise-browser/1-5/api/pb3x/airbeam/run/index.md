---
title: Run Method
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Run Method of the AirBEAMSmart ActiveX Object instructs the AirBEAM Smart client to run the client and perform the current configuration. **Note**: the client is run as the foreground application. 

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Run (Method of the AirBEAMSmart ActiveX Object) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">var bRetVal = object.Run( );</pre>
</td>
</tr>
</table>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('axReturnsSpan', 'aximgReturnsToggle')"><img align="absmiddle" id="aximgReturnsToggle" alt="axReturns Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
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
<td class="clsSyntaxCells" valign="top"><b>Success</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Returns the exit code of the AirBeam Smart client.</td>
</tr>
</table>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ExamplesSpan', 'imgExamplesToggle')"><img align="absmiddle" id="imgExamplesToggle" alt="Examples Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Examples
</p>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following javascript demonstrates the Run method:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;script&gt;
var ab = new ActiveXObject("PocketBrowser.AirBEAMSmart");

function doSync()
{

setTimeout('ab.Run()', 100);

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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EDB');">
Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EDB">&lt;!-- 
The following javascript demonstrates the Run method:
--&gt;

&lt;script&gt;
var ab = new ActiveXObject("PocketBrowser.AirBEAMSmart");

function doSync()
{

setTimeout('ab.Run()', 100);

}
&lt;/script&gt;
</textarea></div>
</blockquote>
</div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('RemarksSpan', 'imgRemarksToggle')"><img align="absmiddle" id="imgRemarksToggle" alt="Remarks Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Remarks
</p>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Access to Operating System</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">In order to use the AirBeam application in Windows Mobile the user may require use of the task bar, something disabled by default in PocketBrowser.  It is recommended to use Minimize and Restore (part of the application meta tag) to enable and disable use of the task bar whilst the user is interacting with the AirBeam client.</DIV>
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
<td>Persists in the AirBEAMSmart Object.</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>AirBEAM Client.</td>
</tr>
</table>
</blockquote><br></div>
<div id="DefaultParamsSpan" style="display:none">
<pre><textarea id="DefaultParameters"></textarea></pre>
</div>

