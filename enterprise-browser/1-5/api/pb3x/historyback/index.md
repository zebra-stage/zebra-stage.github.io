---
title: HistoryBack Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The HistoryBack Navigation instructs PocketBrowser to navigate to the previous address in the browser history, if any.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">History:Back (Navigation) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;a href="history:back"&gt;</pre>
</td>
</tr>
</table>
</blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example shows how to navigate to the previous address using an anchor tag:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;a href="history:back"&gt;Back to Previous Page&lt;/a&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EZ');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EZ">&lt;!-- 
The following example shows how to navigate to the previous address using an anchor tag:
--&gt;

&lt;a href="history:back"&gt;Back to Previous Page&lt;/a&gt;
</textarea></div>
<p>The following example shows how to navigate to the previous address using JavaScript:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;script&gt;
function goBack()
{
document.location = 'history:back';
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EAB');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EAB">&lt;!-- 
The following example shows how to navigate to the previous address using JavaScript:
--&gt;

&lt;script&gt;
function goBack()
{
document.location = 'history:back';
}
&lt;/script&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Interaction with Browser's History Stack</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The browser component on Windows Mobile has no history stack other than that provided by PocketBrowser, so this History:Back tag is the only way to navigate to a previous page (as well as the Back Button).  Windows CE's browser component has its own history stack accessed via Javascript's history.go(n), this is not compatible with PocketBrowser's history and the History:Back tag should be used in preference.</DIV>
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
<td>This navigation instruction is actioned once</td>
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
