---
title: SetRegistrySetting Method
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The SetRegistrySetting Method of the Generic ActiveX Object Sets the specified registry setting on the device.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">SetRegistrySetting (Method of the Generic ActiveX Object) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">objGeneric.SetRegistrySetting(lHive, lType, strKey, strSetting, strData);</pre>
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
<td valign="top" class="clsSyntaxCells"><b>lHive</b></td>
<td valign="top" class="clsSyntaxCells">Number, See Remarks</td>
<td valign="top" class="clsSyntaxCells">The hive name</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>lType</b></td>
<td valign="top" class="clsSyntaxCells">Number, See Remarks</td>
<td valign="top" class="clsSyntaxCells">The type of registry entry</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>strKey</b></td>
<td valign="top" class="clsSyntaxCells">String</td>
<td valign="top" class="clsSyntaxCells">Name of key to be set</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>strSetting</b></td>
<td valign="top" class="clsSyntaxCells">String</td>
<td valign="top" class="clsSyntaxCells">Name of the key setting to be set</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>strData</b></td>
<td valign="top" class="clsSyntaxCells">String</td>
<td valign="top" class="clsSyntaxCells">The string value to be set</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
</table>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ExamplesSpan', 'imgExamplesToggle')"><img align="absmiddle" id="imgExamplesToggle" alt="Examples Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Examples
</p>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following javascript example sets the HKEY_LOCAL_MACHINE\Software\Symbol\MySettings\Name value to Fred:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;script&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
var REG_SZ = 1;
var HKEY_LOCAL_MACHINE = 2;
var strData = "Fred";

objGeneric.SetRegistrySetting(HKEY_LOCAL_MACHINE, REG_SZ, "Software\\Symbol\\MySettings", "Name", strData);
&lt;script&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E4C');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0E4C">&lt;!-- 
The following javascript example sets the HKEY_LOCAL_MACHINE\Software\Symbol\MySettings\Name value to Fred:
--&gt;

&lt;script&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
var REG_SZ = 1;
var HKEY_LOCAL_MACHINE = 2;
var strData = "Fred";

objGeneric.SetRegistrySetting(HKEY_LOCAL_MACHINE, REG_SZ, "Software\\Symbol\\MySettings", "Name", strData);
&lt;script&gt;
</textarea></div>
</blockquote>
</div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('RemarksSpan', 'imgRemarksToggle')"><img align="absmiddle" id="imgRemarksToggle" alt="Remarks Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Remarks
</p>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Values of lHive</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">HKEY_CLASSES_ROOT = 0, HKEY_CURRENT_USER = 1, HKEY_LOCAL_MACHINE = 2 or HKEY_USERS = 3</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Values of lType</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">REG_SZ = 1, REG_BINARY = 3, REG_DWORD = 4, REG_MULTI_SZ = 7</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Support for data types</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
This method does not consistently support data types other than REG_SZ - for any other type it is recommended to use the Registry module (via InvokeMETAFunction as necessary). 
</DIV>
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
<td>Runs immediately.</td>
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
