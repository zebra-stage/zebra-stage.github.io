---
title: Push Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Push Meta Tag is used to receive data over an HTTP connection.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Push (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Push" content="[Parameter&gt;</pre>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Push" content="[Parameter:Attribute&gt;</pre>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Push" contents="Detected:url('[jsFunction | url]')"&gt;</p>
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
<td valign="top" class="clsSyntaxCells"><b>Start</b></td>
<td valign="top" class="clsSyntaxCells">Starts the server. Must be after the &lt;port&gt; tag.</td>
<td valign="top" class="clsSyntaxCells">
		N/A
	</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Stop</b></td>
<td valign="top" class="clsSyntaxCells">Stops the server.</td>
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
The Push META Tag is used to receive data over an HTTP connection.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Push" Content="Start"&gt; --&gt;      &lt;!-- Starts the server. Must be after the &lt;port&gt; tag. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Push" Content="Stop"&gt; --&gt;      &lt;!-- Stops the server. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The Push META Tag is used to receive data over an HTTP connection.
*/

function doPushInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Push', 'Start');      /* Starts the server. Must be after the &lt;port&gt; tag. */
//objGeneric.InvokeMETAFunction('Push', 'Stop');      /* Stops the server. */

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
<td valign="top" class="clsSyntaxCells"><b>Port:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">0 - 65535</td>
<td valign="top" class="clsSyntaxCells">Port number to listen on.</td>
<td valign="top" class="clsSyntaxCells">80</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Passkey:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Any string</td>
<td valign="top" class="clsSyntaxCells">If specified then the client must include passkey=value in the passed parameters. Case sensitive.</td>
<td valign="top" class="clsSyntaxCells">Empty (no passkey required)</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Response:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Filename</td>
<td valign="top" class="clsSyntaxCells">Name of the HTML file to return to the client after a successful request.</td>
<td valign="top" class="clsSyntaxCells">Empty (a short default HTML response is sent)</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Path:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Virtual path</td>
<td valign="top" class="clsSyntaxCells">The client must include this in the HTTP request (after the address and before the parameters).  The forward slash '/' should be used as the directory delimiter.</td>
<td valign="top" class="clsSyntaxCells">Empty (any path is accepted)</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Unattended:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">ENABLED or DISABLED</td>
<td valign="top" class="clsSyntaxCells">Enables or disables unattended mode - see Remarks for details.</td>
<td valign="top" class="clsSyntaxCells">DISABLED</td>
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
The Push META Tag is used to receive data over an HTTP connection.
--&gt;
&lt;!-- &lt;META HTTP-Equiv="Push" Content="Port:[Value]"&gt; --&gt;      &lt;!-- Port number to listen on. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Push" Content="Passkey:[Value]"&gt; --&gt;      &lt;!-- If specified then the client must include passkey=value in the passed parameters. Case sensitive. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Push" Content="Response:[Value]"&gt; --&gt;      &lt;!-- Name of the HTML file to return to the client after a successful request. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Push" Content="Path:[Value]"&gt; --&gt;      &lt;!-- The client must include this in the HTTP request (after the address and before the parameters).  The forward slash '/' should be used as the directory delimiter. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Push" Content="Unattended:[Value]"&gt; --&gt;      &lt;!-- Enables or disables unattended mode - see Remarks for details. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The Push META Tag is used to receive data over an HTTP connection.
*/

function doPushInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Push', 'Port:[Value]');      /* Port number to listen on. */
//objGeneric.InvokeMETAFunction('Push', 'Passkey:[Value]');      /* If specified then the client must include passkey=value in the passed parameters. Case sensitive. */
//objGeneric.InvokeMETAFunction('Push', 'Response:[Value]');      /* Name of the HTML file to return to the client after a successful request. */
//objGeneric.InvokeMETAFunction('Push', 'Path:[Value]');      /* The client must include this in the HTTP request (after the address and before the parameters).  The forward slash '/' should be used as the directory delimiter. */
//objGeneric.InvokeMETAFunction('Push', 'Unattended:[Value]');      /* Enables or disables unattended mode - see Remarks for details. */

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
</p><br><DIV class="clsRef">Detected</DIV>
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
<td class="clsSyntaxCells" valign="top"><b>value</b></td>
<td class="clsSyntaxCells" style="text-align:left;">One value is returned for each name=value pair in the HTTP request.</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0ESD">&lt;!-- &lt;META HTTP-Equiv="Push" Content="Detected:url('JavaScript:fnJSCallbackHandler('%1');')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0EWD">&lt;script&gt;
/*
function doPushInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Push', 'Detected:url('JavaScript:fnJSCallbackHandler('%1');')');      /*  */

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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0ESD');">
	META Tags
</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EWD');">
	Javascript
</nobr></td>
<td></td>
</tr>
</table><br><br></blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>
The code below configures the server to listen on port 8080, to accept only requests to the virtual path \push and to require a passkey of 'secret'. Assuming the device has IP address 1.2.3.4 then browsing to the following URL will cause the Javascript function onPush() to be called with the parameters 'hello' and 'world': http://1.2.3.4:8080/push?name1=hello&amp;name2=world&amp;passkey=secret. The browser will receive the contents of the file \ok.hmtl as response.
</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="Push" Content="Port:8080"&gt;
&lt;META HTTP-Equiv="Push" Content="Passkey:secret"&gt;
&lt;META HTTP-Equiv="Push" Content="Path:/push"&gt;
&lt;META HTTP-Equiv="Push" Content="Response:/ok.hmtl"&gt;
&lt;META HTTP-Equiv="Push-Detected" Content="url('Javascript:onPush('%s','%s');')"&gt;
&lt;META HTTP-Equiv="Push" Content="Start"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EAF');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EAF">&lt;!--The code below configures the server to listen on port 8080, to accept only requests to the virtual path \push and to require a passkey of 'secret'. Assuming the device has IP address 1.2.3.4 then browsing to the following URL will cause the Javascript function onPush() to be called with the parameters 'hello' and 'world': http://1.2.3.4:8080/push?name1=hello&amp;name2=world&amp;passkey=secret. The browser will receive the contents of the file \ok.hmtl as response.--&gt;
&lt;META HTTP-Equiv="Push" Content="Port:8080"&gt;
&lt;META HTTP-Equiv="Push" Content="Passkey:secret"&gt;
&lt;META HTTP-Equiv="Push" Content="Path:/push"&gt;
&lt;META HTTP-Equiv="Push" Content="Response:/ok.hmtl"&gt;
&lt;META HTTP-Equiv="Push-Detected" Content="url('Javascript:onPush('%s','%s');')"&gt;
&lt;META HTTP-Equiv="Push" Content="Start"&gt;
</textarea></div>
<p>
To enable unattended mode:
</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="push" Content="unattended:enabled"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EHF');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EHF">&lt;!-- 
To enable unattended mode:
--&gt;
&lt;META HTTP-Equiv="push" Content="unattended:enabled"&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">HTTP request format</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
The push server accepts both GET and POST requests. For GET requests the parameters and values are specified in the URL, while for POST requests the request body should hold the parameters and values in url encoded form. The virtual path in the URL must be as specified by the &lt;path&gt; tag, or can be anything if the tag isn't present. The parameters must include 'passkey' with the correct value if the &lt;passkey&gt; tag is present. 
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Returned values</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
When a valid request is received the specified destination URL is called with one '%s' per parameter/value pair in the request. Only the values are returned; the parameter names are discarded. The 'passkey' parameter and value are ignored if present.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Allowed characters</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
Only alphanumeric characters and the characters $-_.+!*'(), are allowed in a URL (see RFC 1738). Any other characters will cause undefined behaviour. Ensure that the passkey uses only valid characters.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Unattended mode</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
Normally when a device enters suspend mode, either because it has been idle for a certain time or because the power key was pressed, all the device subsystems are switched off, including the wireless network. When unattended mode is enabled however the device keeps enough subsystems powered that applications continue to run, and it can still respond to Push requests. Note that unattended mode 
uses significantly more battery power.
</DIV>
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
<td>Network Stack.</td>
</tr>
</table>
</blockquote><br></div>
<div id="DefaultParamsSpan" style="display:none">
<pre><textarea id="DefaultParameters"></textarea></pre>
</div>
