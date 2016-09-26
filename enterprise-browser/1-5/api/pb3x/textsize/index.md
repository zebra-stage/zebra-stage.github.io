---
title: TextSize Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The TextSize Meta Tag is an action tag used to set the zoom size of the text.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">TextSize (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="TextSize" content="[method&gt;</pre>
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
<td valign="top" class="clsSyntaxCells"><b>Largest</b></td>
<td valign="top" class="clsSyntaxCells">Set to the largest font</td>
<td valign="top" class="clsSyntaxCells">Medium</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Larger</b></td>
<td valign="top" class="clsSyntaxCells">Set to the larger font</td>
<td valign="top" class="clsSyntaxCells">Medium</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Medium</b></td>
<td valign="top" class="clsSyntaxCells">Set to the medium font</td>
<td valign="top" class="clsSyntaxCells">Medium</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Smaller</b></td>
<td valign="top" class="clsSyntaxCells">Set to the smaller font</td>
<td valign="top" class="clsSyntaxCells">Medium</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Smallest</b></td>
<td valign="top" class="clsSyntaxCells">Set to the smallest font</td>
<td valign="top" class="clsSyntaxCells">Medium</td>
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
The TextSize META Tag is an action tag used to set the zoom size of the text.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="TextSize" Content="Largest"&gt; --&gt;      &lt;!-- Set to the largest font --&gt;
&lt;!-- &lt;META HTTP-Equiv="TextSize" Content="Larger"&gt; --&gt;      &lt;!-- Set to the larger font --&gt;
&lt;!-- &lt;META HTTP-Equiv="TextSize" Content="Medium"&gt; --&gt;      &lt;!-- Set to the medium font --&gt;
&lt;!-- &lt;META HTTP-Equiv="TextSize" Content="Smaller"&gt; --&gt;      &lt;!-- Set to the smaller font --&gt;
&lt;!-- &lt;META HTTP-Equiv="TextSize" Content="Smallest"&gt; --&gt;      &lt;!-- Set to the smallest font --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The TextSize META Tag is an action tag used to set the zoom size of the text.
*/

function doTextSizeInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('TextSize', 'Largest');      /* Set to the largest font */
//objGeneric.InvokeMETAFunction('TextSize', 'Larger');      /* Set to the larger font */
//objGeneric.InvokeMETAFunction('TextSize', 'Medium');      /* Set to the medium font */
//objGeneric.InvokeMETAFunction('TextSize', 'Smaller');      /* Set to the smaller font */
//objGeneric.InvokeMETAFunction('TextSize', 'Smallest');      /* Set to the smallest font */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>

<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example uses TextSize to set the text zoom level to the smallest:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="TextSize" Content="Smallest"&gt;
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
The following example uses TextSize to set the text zoom level to the smallest:
--&gt;

&lt;META HTTP-Equiv="TextSize" Content="Smallest"&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Screen Orientation</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">When the screen orientation changes, either using the ScreenOrientation tag or by rotating a device with hardware support, the command areas will automatically move and resize to fit the new layout. However the buttons themselves are not moved and in some cases this may result in them being off the screen or not in the expected position. If so they must be moved manually by detecting the ScreenOrientationEvent.</DIV>
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
</blockquote><br></div>
<div id="DefaultParamsSpan" style="display:none">
<pre><textarea id="DefaultParameters"></textarea></pre>
</div>
