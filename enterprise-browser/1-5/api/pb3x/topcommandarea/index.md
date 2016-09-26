---
title: TopCommandArea Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The TopCommandArea Meta Tag is an action tag used to set the parameters of the Top Command Area, a region at the top of the screen designed to separate PocketBrowser controls such as the address bar or Go button from other parts of an application.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">TopCommandArea (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="TopCommandArea" content="[parameter&gt;</pre>
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
<td valign="top" class="clsSyntaxCells">Visible, Hidden</td>
<td valign="top" class="clsSyntaxCells">Sets the visibility of the top command area.</td>
<td valign="top" class="clsSyntaxCells">Hidden.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Height:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Positive number, representing pixels</td>
<td valign="top" class="clsSyntaxCells">Sets the height of the top command area</td>
<td valign="top" class="clsSyntaxCells">Slightly greater than the height of a buttons default height, which depends on the screen resolution.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Color:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Color in the #RRGGBB format</td>
<td valign="top" class="clsSyntaxCells">The color to set the top command area to.</td>
<td valign="top" class="clsSyntaxCells">None. The default image is displayed by default.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Image:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">URL</td>
<td valign="top" class="clsSyntaxCells">Sets the image to be displayed on the top command area.  See Remarks.</td>
<td valign="top" class="clsSyntaxCells">Default image</td>
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
The TopCommandArea META Tag is an action tag used to set the parameters of the Top Command Area. The top command area is a region at the top of the screen designed to hold PocketBrowser controls such as the address bar or Go button to separate them from the rest of the user application.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="TopCommandArea" Content="Visibility:[Value]"&gt; --&gt;      &lt;!-- Sets the visibility of the top command area. --&gt;
&lt;!-- &lt;META HTTP-Equiv="TopCommandArea" Content="Height:[Value]"&gt; --&gt;      &lt;!-- Sets the height of the top command area --&gt;
&lt;!-- &lt;META HTTP-Equiv="TopCommandArea" Content="Color:[Value]"&gt; --&gt;      &lt;!-- The color to set the top command area to. --&gt;
&lt;!-- &lt;META HTTP-Equiv="TopCommandArea" Content="Image:[Value]"&gt; --&gt;      &lt;!-- Sets the image to be displayed on the top command area.  See Remarks. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The TopCommandArea META Tag is an action tag used to set the parameters of the Top Command Area. The top command area is a region at the top of the screen designed to hold PocketBrowser controls such as the address bar or Go button to separate them from the rest of the user application.
*/

function doTopCommandAreaInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('TopCommandArea', 'Visibility:[Value]');      /* Sets the visibility of the top command area. */
//objGeneric.InvokeMETAFunction('TopCommandArea', 'Height:[Value]');      /* Sets the height of the top command area */
//objGeneric.InvokeMETAFunction('TopCommandArea', 'Color:[Value]');      /* The color to set the top command area to. */
//objGeneric.InvokeMETAFunction('TopCommandArea', 'Image:[Value]');      /* Sets the image to be displayed on the top command area.  See Remarks. */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>

<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example shows the Top Command Area, sets the Height to 100 and background color to red</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="TopCommandArea" Content="Visibility:Visible"&gt;
&lt;META HTTP-Equiv="TopCommandArea" Content="Height:100"&gt;
&lt;META HTTP-Equiv="TopCommandArea" Content="Color:#FF0000"&gt;
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
The following example shows the Top Command Area, sets the Height to 100 and background color to red
--&gt;

&lt;META HTTP-Equiv="TopCommandArea" Content="Visibility:Visible"&gt;
&lt;META HTTP-Equiv="TopCommandArea" Content="Height:100"&gt;
&lt;META HTTP-Equiv="TopCommandArea" Content="Color:#FF0000"&gt;
</textarea></div>
<p>The following example shows the Top Command Area, sets the height to 100 and displays image tca.gif on it (resizing the image if necessary)</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="TopCommandArea" Content="Height:100; Visibility:Visible; Image:url('http://myaddress/tca.gif')"&gt;
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
The following example shows the Top Command Area, sets the height to 100 and displays image tca.gif on it (resizing the image if necessary)
--&gt;

&lt;META HTTP-Equiv="TopCommandArea" Content="Height:100; Visibility:Visible; Image:url('http://myaddress/tca.gif')"&gt;
</textarea></div>
</blockquote>
</div>
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
<td>None</td>
</tr>
</table>
</blockquote><br></div>
<div id="DefaultParamsSpan" style="display:none">
<pre><textarea id="DefaultParameters"></textarea></pre>
</div>
