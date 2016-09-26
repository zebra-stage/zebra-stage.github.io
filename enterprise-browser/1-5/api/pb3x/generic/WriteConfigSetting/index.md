---
title: WriteConfigSetting Method
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The WriteConfigSetting Method of the Generic ActiveX Object writes a setting to the configuration file.

﻿    <div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">WriteConfigSetting (Method of the Generic ActiveX Object) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">bRetVal = objGeneric.WriteConfigSetting(strSetting,strValue,strAppName);</pre>
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
<td valign="top" class="clsSyntaxCells"><b>strSetting</b></td>
<td valign="top" class="clsSyntaxCells">See: Configuration Settings</td>
<td valign="top" class="clsSyntaxCells">A setting identifier</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>strValue</b></td>
<td valign="top" class="clsSyntaxCells">String</td>
<td valign="top" class="clsSyntaxCells">Value to set. </td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>strAppName</b></td>
<td valign="top" class="clsSyntaxCells">String</td>
<td valign="top" class="clsSyntaxCells">The name of a PocketBrowser application as specified in Config.XML. When writing to a global setting this should be omitted or 'GLOBAL' used.</td>
<td valign="top" class="clsSyntaxCells">"GLOBAL"</td>
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
<td class="clsSyntaxCells" valign="top"><b>bRetVal</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Returns a boolean value to indicate whether or not the write was successful.</td>
</tr>
</table>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ExamplesSpan', 'imgExamplesToggle')"><img align="absmiddle" id="imgExamplesToggle" alt="Examples Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Examples
</p>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following javascript sets fullscreen off in the configuration file.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;script&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
var Ret = objGeneric.WriteConfigSetting("FULLSCREEN","0");
if(Ret=='true'){
alert("Setting saved and will take place on the next PocketBrowser re-start");
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E6C');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0E6C">&lt;!-- 
The following javascript sets fullscreen off in the configuration file.
--&gt;

&lt;script&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
var Ret = objGeneric.WriteConfigSetting("FULLSCREEN","0");
if(Ret=='true'){
alert("Setting saved and will take place on the next PocketBrowser re-start");
}

&lt;/script&gt;
</textarea></div>
<p>The following javascript example turns the scrollbars setting off for the application named "Menu".</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;script&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
var Ret = objGeneric.WriteConfigSetting("SCROLLBARSENABLED","0","Menu");

if(Ret=='true'){
alert("Setting saved and will take place on the next PocketBrowser re-start");
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EGD');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EGD">&lt;!-- 
The following javascript example turns the scrollbars setting off for the application named "Menu".
--&gt;

&lt;script&gt;
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
var Ret = objGeneric.WriteConfigSetting("SCROLLBARSENABLED","0","Menu");

if(Ret=='true'){
alert("Setting saved and will take place on the next PocketBrowser re-start");
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
<DIV class="clsRef"></DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
The data is written directly to the configuration file. Configuration changes take effect only after PocketBrowser is re-started.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef"></DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
The configuration settings are accessed using symbolic names written in uppercase. These can be found in Configuration Settings under Getting Started, or just click the link below. 
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef"></DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
Global settings are placed outside of the &lt;Application&gt; tags.
Application settings are placed within the &lt;Application&gt; tags.  
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
