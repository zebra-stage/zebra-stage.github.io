---
title: KeyState Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The KeyState Meta Tag is an action tag used to set the parameters of the KeyState indicators, which display icons for Shift, Alt, Control, Function, Caps, Num lock, and the state of the Orange keys on some devices. Icons are placed beginning at the leftmost screen position in a row that extends toward the right, as necessary.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">KeyState (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="KeyState" content="[parameter&gt;</pre>
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
<td valign="top" class="clsSyntaxCells"><b>Right:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Positive number, representing pixels</td>
<td valign="top" class="clsSyntaxCells">Sets the X position of the right-hand edge of the KeyState indicators.</td>
<td valign="top" class="clsSyntaxCells">Indicators start at the bottom right of the screen.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Left:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Positive number, representing pixels</td>
<td valign="top" class="clsSyntaxCells">The same as Right, included for backward compatibility.</td>
<td valign="top" class="clsSyntaxCells">Indicators start at the bottom right of the screen.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Top:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Positive number, representing pixels</td>
<td valign="top" class="clsSyntaxCells">Sets the Y position of the KeyState indicators.</td>
<td valign="top" class="clsSyntaxCells">Indicators start at the bottom right of the screen.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Height:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Positive number, representing pixels</td>
<td valign="top" class="clsSyntaxCells">Sets the height of the KeyState Indicators.</td>
<td valign="top" class="clsSyntaxCells">Dependant on screen resolution</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Width:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Positive number, representing pixels</td>
<td valign="top" class="clsSyntaxCells">Sets the width of each KeyState indicator.</td>
<td valign="top" class="clsSyntaxCells">Dependant on screen resolution</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Visibility:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Visible, Hidden</td>
<td valign="top" class="clsSyntaxCells">Sets the visibility of the keystate indicators.</td>
<td valign="top" class="clsSyntaxCells">Hidden.</td>
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
The KeyState META Tag is an action tag used to set the parameters of the KeyState indicator. The KeyState indicator will display icons for Shift, Alt, Control, Function, Caps, Num lock and Orange key states. It grows from the right as necessary if more than one key state is set at once.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="KeyState" Content="Right:[Value]"&gt; --&gt;      &lt;!-- Sets the X position of the right-hand edge of the KeyState indicators. --&gt;
&lt;!-- &lt;META HTTP-Equiv="KeyState" Content="Left:[Value]"&gt; --&gt;      &lt;!-- The same as Right, included for backward compatibility. --&gt;
&lt;!-- &lt;META HTTP-Equiv="KeyState" Content="Top:[Value]"&gt; --&gt;      &lt;!-- Sets the Y position of the KeyState indicators. --&gt;
&lt;!-- &lt;META HTTP-Equiv="KeyState" Content="Height:[Value]"&gt; --&gt;      &lt;!-- Sets the height of the KeyState Indicators. --&gt;
&lt;!-- &lt;META HTTP-Equiv="KeyState" Content="Width:[Value]"&gt; --&gt;      &lt;!-- Sets the width of each KeyState indicator. --&gt;
&lt;!-- &lt;META HTTP-Equiv="KeyState" Content="Visibility:[Value]"&gt; --&gt;      &lt;!-- Sets the visibility of the keystate indicators. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The KeyState META Tag is an action tag used to set the parameters of the KeyState indicator. The KeyState indicator will display icons for Shift, Alt, Control, Function, Caps, Num lock and Orange key states. It grows from the right as necessary if more than one key state is set at once.
*/

function doKeyStateInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('KeyState', 'Right:[Value]');      /* Sets the X position of the right-hand edge of the KeyState indicators. */
//objGeneric.InvokeMETAFunction('KeyState', 'Left:[Value]');      /* The same as Right, included for backward compatibility. */
//objGeneric.InvokeMETAFunction('KeyState', 'Top:[Value]');      /* Sets the Y position of the KeyState indicators. */
//objGeneric.InvokeMETAFunction('KeyState', 'Height:[Value]');      /* Sets the height of the KeyState Indicators. */
//objGeneric.InvokeMETAFunction('KeyState', 'Width:[Value]');      /* Sets the width of each KeyState indicator. */
//objGeneric.InvokeMETAFunction('KeyState', 'Visibility:[Value]');      /* Sets the visibility of the keystate indicators. */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>

<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example shows the KeyState indicators and sets the right and top coordinates to 50.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="KeyState" Content="Visibility:Visible"&gt;
&lt;META HTTP-Equiv="KeyState" Content="Right:50"&gt;
&lt;META HTTP-Equiv="KeyState" Content="Top:50"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E5C');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0E5C">&lt;!-- 
The following example shows the KeyState indicators and sets the right and top coordinates to 50.
--&gt;

&lt;META HTTP-Equiv="KeyState" Content="Visibility:Visible"&gt;
&lt;META HTTP-Equiv="KeyState" Content="Right:50"&gt;
&lt;META HTTP-Equiv="KeyState" Content="Top:50"&gt;
</textarea></div>
<p>The following example shows the KeyState and sets the right and top coordinates to 20.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="KeyState" Content="Visibility:Visible; Right:20; Top:20"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EFD');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EFD">&lt;!-- 
The following example shows the KeyState and sets the right and top coordinates to 20.
--&gt;

&lt;META HTTP-Equiv="KeyState" Content="Visibility:Visible; Right:20; Top:20"&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Switching to Other Applications</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">All controls are designed to be shown on top of PocketBrowser.  If you require to switch to an application other than PocketBrowser you should minimize PB to ensure the buttons do not remain shown.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
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
<td>Tag is persistent</td>
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
