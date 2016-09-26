---
title: SNTP Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The SNTP Meta Tag is an action tag used to synchronize the device clock with an SNTP network server.</p>

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">SNTP (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="SNTP" content="[parameter&gt;</pre>
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
<td valign="top" class="clsSyntaxCells"><b>ServerIP:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Valid IP Address</td>
<td valign="top" class="clsSyntaxCells">The IP address of the SNTP time server</td>
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
The SNTP META Tag is an action tag used to synchronize the device clock with a network SNTP server.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="SNTP" Content="ServerIP:[Value]"&gt; --&gt;      &lt;!-- The IP address of the SNTP time server --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The SNTP META Tag is an action tag used to synchronize the device clock with a network SNTP server.
*/

function doSNTPInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('SNTP', 'ServerIP:[Value]');      /* The IP address of the SNTP time server */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example sets the device time from a network time server:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="SNTP" Content="ServerIP:132.163.4.102"&gt;
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
The following example sets the device time from a network time server:
--&gt;

&lt;META HTTP-Equiv="SNTP" Content="ServerIP:132.163.4.102"&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Latency</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">Once this tag is parsed PocketBrowser will request the time from the SNTP server immediately, however the clock will not be updated until a response is received.  Network latency and connectivity issues can all affect the speed and success with which this tag is actioned.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Proxy Settings</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">Windows Mobile 5.0 will not allow you to obtain SNTP time when requesting via a proxy server, it is recommended the proxy is bypassed for this to work.</DIV>
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
</blockquote><br>
</div>
