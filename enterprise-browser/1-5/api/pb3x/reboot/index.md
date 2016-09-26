---
title: Reboot Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Reboot Meta Tag is an action tag used to immediately reboot the device.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Reboot (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Reboot" content="[parameter&gt;</pre>
</td>
</tr>
</table>
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
<td valign="top" class="clsSyntaxCells"><b>BootType:[Value]
	</b></td>
<td valign="top" class="clsSyntaxCells">"Warm", "Cold" or "ColdCAD"</td>
<td valign="top" class="clsSyntaxCells">Reboots the terminal using either a Warm or Cold software boot (as specified).  Note on CE6 devices a 'ColdCAD' boot is required to replicate the Coldboot key sequence, e.g. 1+9+Power on an MC3000.</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
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
The Reboot META Tag is an action tag used to reboot the terminal immediately.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Reboot" Content="BootType:[Value]"&gt; --&gt;      &lt;!-- Reboots the terminal using either a Warm or Cold software boot (as specified).  Note on CE6 devices a 'ColdCAD' boot is required to replicate the Coldboot key sequence, e.g. 1+9+Power on an MC3000. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The Reboot META Tag is an action tag used to reboot the terminal immediately.
*/

function doRebootInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Reboot', 'BootType:[Value]');      /* Reboots the terminal using either a Warm or Cold software boot (as specified).  Note on CE6 devices a 'ColdCAD' boot is required to replicate the Coldboot key sequence, e.g. 1+9+Power on an MC3000. */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>

<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example Warm boots the terminal:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="Reboot" Content="BootType:Warm"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EHB');">
Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EHB">&lt;!-- 
The following example Warm boots the terminal:
--&gt;

&lt;META HTTP-Equiv="Reboot" Content="BootType:Warm"&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Suggested Use</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
The Reboot tag can be used to apply new settings after downloading files (eg. .REG) or applications from a server.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Windows Mobile</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
Note that in WM5.0 and up there is no software difference between a warm and a cold boot as the device uses persistent storage; both the file and registry will remain the same after boot.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
</blockquote><br></div>
<div id="InfoSpan" style="display:block">
<blockquote>
<table>
<tr>
<th>Supported Platforms</th>
<td>Windows CE, Windows Mobile (See Above comment for behaviour on Windows Mobile)</td>
</tr>
<tr>
<th>Persistence</th>
<td>This tag is acted on immediately.</td>
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
