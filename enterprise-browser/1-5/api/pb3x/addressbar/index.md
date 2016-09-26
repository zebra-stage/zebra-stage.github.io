---
title: AddressBar Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The AddressBar Meta Tag is an action tag used to set the parameters of the address bar, which allows navigation to a page for display. The AddressBar displays a history of visited URLs for selection, or will navigate to a typed-in URL when pressing the "Go" button.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">AddressBar (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="AddressBar" content="[parameter]"&gt;</pre>
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
<td valign="top" class="clsSyntaxCells"><b>Left:[Value]
</b></td>
<td valign="top" class="clsSyntaxCells">Positive number, representing pixels</td>
<td valign="top" class="clsSyntaxCells">Sets the X position of the address bar.</td>
<td valign="top" class="clsSyntaxCells">0</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Top:[Value]
</b></td>
<td valign="top" class="clsSyntaxCells">Positive number, representing pixels</td>
<td valign="top" class="clsSyntaxCells">Sets the Y position of the address bar.</td>
<td valign="top" class="clsSyntaxCells">0</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Width:[Value]
</b></td>
<td valign="top" class="clsSyntaxCells">Positive number, representing pixels</td>
<td valign="top" class="clsSyntaxCells">Sets the width of the address bar.</td>
<td valign="top" class="clsSyntaxCells">Most of the screen width</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Visibility:[Value]
</b></td>
<td valign="top" class="clsSyntaxCells">Visible, Hidden</td>
<td valign="top" class="clsSyntaxCells">Sets the visibility of the address bar</td>
<td valign="top" class="clsSyntaxCells">Hidden</td>
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
The AddressBar META Tag is an action tag used to set the parameters of the address bar. The address bar is similar to the address bar provided by Internet Explorer and stores a history of visited URLs. Press the 'Go' button or enter key to navigate to the typed URI.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="AddressBar" Content="Left:[Value]"&gt; --&gt;      &lt;!-- Sets the X position of the address bar. --&gt;
&lt;!-- &lt;META HTTP-Equiv="AddressBar" Content="Top:[Value]"&gt; --&gt;      &lt;!-- Sets the Y position of the address bar. --&gt;
&lt;!-- &lt;META HTTP-Equiv="AddressBar" Content="Width:[Value]"&gt; --&gt;      &lt;!-- Sets the width of the address bar. --&gt;
&lt;!-- &lt;META HTTP-Equiv="AddressBar" Content="Visibility:[Value]"&gt; --&gt;      &lt;!-- Sets the visibility of the address bar --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The AddressBar META Tag is an action tag used to set the parameters of the address bar. The address bar is similar to the address bar provided by Internet Explorer and stores a history of visited URLs. Press the 'Go' button or enter key to navigate to the typed URI.
*/

function doAddressBarInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('AddressBar', 'Left:[Value]');      /* Sets the X position of the address bar. */
//objGeneric.InvokeMETAFunction('AddressBar', 'Top:[Value]');      /* Sets the Y position of the address bar. */
//objGeneric.InvokeMETAFunction('AddressBar', 'Width:[Value]');      /* Sets the width of the address bar. */
//objGeneric.InvokeMETAFunction('AddressBar', 'Visibility:[Value]');      /* Sets the visibility of the address bar */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ExamplesSpan', 'imgExamplesToggle')"><img align="absmiddle" id="imgExamplesToggle" alt="Examples Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Examples
</p>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example shows the address bar, sets the left and top coordinates to 50, and the width to 100.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="AddressBar" Content="visibility:visible"&gt;
&lt;META HTTP-Equiv="AddressBar" Content="left:50"&gt;
&lt;META HTTP-Equiv="AddressBar" Content="top:50"&gt;
&lt;META HTTP-Equiv="AddressBar" Content="width:100"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EIC');">
Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EIC">&lt;!-- 
The following example shows the address bar, sets the left and top coordinates to 50, and the width to 100.
--&gt;

&lt;META HTTP-Equiv="AddressBar" Content="visibility:visible"&gt;
&lt;META HTTP-Equiv="AddressBar" Content="left:50"&gt;
&lt;META HTTP-Equiv="AddressBar" Content="top:50"&gt;
&lt;META HTTP-Equiv="AddressBar" Content="width:100"&gt;
</textarea></div>
<p>The following example shows the address bar, sets the left and top coordinates to 0, and the width to 50.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="AddressBar" Content="left:0; top:0; width:50"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EPC');">
Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EPC">&lt;!-- 
The following example shows the address bar, sets the left and top coordinates to 0, and the width to 50.
--&gt;

&lt;META HTTP-Equiv="AddressBar" Content="left:0; top:0; width:50"&gt;
</textarea></div>
</blockquote>
</div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('RemarksSpan', 'imgRemarksToggle')"><img align="absmiddle" id="imgRemarksToggle" alt="Remarks Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Remarks
</p>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Default Positions</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">By default this control will be placed a the top of the screen.  On Windows Mobile if the 'FullScreen' configuration setting is disabled the control will need to be moved, otherwise it will appear beneath the task bar.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Switching to Other Applications</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">All controls are designed to be shown on top of PocketBrowser.  If you require to switch to an application other than PocketBrowser you should minimize PB to ensure the buttons do not remain shown.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Screen Orientation</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">When the screen orientation changes, either using the ScreenOrientation tag or by rotating a device with hardware support, the command areas will automatically move and resize to fit the new layout. However the buttons themselves are not moved and in some cases this may result in them being off the screen or not in the expected position. If so they must be moved manually by detecting the ScreenOrientationEvent.</DIV>
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
<td>This tag is persistent.</td>
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
