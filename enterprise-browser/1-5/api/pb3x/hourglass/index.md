---
title: Hourglass Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Hourglass Meta Tag is an action tag used to control the display and position of the hourglass icon, which appears to indicate that a page is loading.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Hourglass (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Hourglass" content="[parameter&gt;</pre>
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
<td valign="top" class="clsSyntaxCells"><b>Visibility:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Visible or Hidden</td>
<td valign="top" class="clsSyntaxCells">Shows or hides the hourglass</td>
<td valign="top" class="clsSyntaxCells">Hidden</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Left:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Horizontal position, in pixels</td>
<td valign="top" class="clsSyntaxCells">Sets the horizontal position of the hourglass</td>
<td valign="top" class="clsSyntaxCells">Center of the screen</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Top:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Vertical position, in pixels</td>
<td valign="top" class="clsSyntaxCells">Sets the vertical position of the hourglass</td>
<td valign="top" class="clsSyntaxCells">Center of the screen</td>
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
The Hourglass META Tag is an action tag used to show or hide the hourglass (wait cursor) as well as adjust its position.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Hourglass" Content="Visibility:[Value]"&gt; --&gt;      &lt;!-- Shows or hides the hourglass --&gt;
&lt;!-- &lt;META HTTP-Equiv="Hourglass" Content="Left:[Value]"&gt; --&gt;      &lt;!-- Sets the horizontal position of the hourglass --&gt;
&lt;!-- &lt;META HTTP-Equiv="Hourglass" Content="Top:[Value]"&gt; --&gt;      &lt;!-- Sets the vertical position of the hourglass --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The Hourglass META Tag is an action tag used to show or hide the hourglass (wait cursor) as well as adjust its position.
*/

function doHourglassInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Hourglass', 'Visibility:[Value]');      /* Shows or hides the hourglass */
//objGeneric.InvokeMETAFunction('Hourglass', 'Left:[Value]');      /* Sets the horizontal position of the hourglass */
//objGeneric.InvokeMETAFunction('Hourglass', 'Top:[Value]');      /* Sets the vertical position of the hourglass */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example sets the Hourglass position to (50, 50).</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="Hourglass" Content="left:50; top:50"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E6B');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0E6B">&lt;!-- 
The following example sets the Hourglass position to (50, 50).
--&gt;

&lt;META HTTP-Equiv="Hourglass" Content="left:50; top:50"&gt;
</textarea></div>
<p>The following example shows and hides the Hourglass.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;SCRIPT LANGAUGE="JavaScript"&gt;
var Generic = new ActiveXObject("PocketBrowser.Generic");

function showHourglass()
{
Generic.InvokeMetaFunction('hourglass', 'visibility:visible');
}

function hideHourglass()
{
Generic.InvokeMetaFunction('hourglass', 'visibility:hidden');
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EGC');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EGC">&lt;!-- 
The following example shows and hides the Hourglass.
--&gt;

&lt;SCRIPT LANGAUGE="JavaScript"&gt;
var Generic = new ActiveXObject("PocketBrowser.Generic");

function showHourglass()
{
Generic.InvokeMetaFunction('hourglass', 'visibility:visible');
}

function hideHourglass()
{
Generic.InvokeMetaFunction('hourglass', 'visibility:hidden');
}
&lt;/SCRIPT&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Navigation</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">When navigating between pages, the hourglass will be shown and hidden automatically and will override the current visibility settings. The position the hourglass is shown at during page loads will be as set using the Left / Top properties.  Because the Hourglass is shown and hidden automatically during page loads it is not recommended to use static meta tags to show or hide it, in preference use InvokeMetaTag from JavaScript.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Scrolling</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The hourglass is not compatible with scrolling the browser window.  The spinning cursor will move with the HTML page.</DIV>
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
<td>The hourglass position persists across page-loads, and is hidden once the new page is loaded.</td>
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
