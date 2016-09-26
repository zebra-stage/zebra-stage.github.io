---
title: SIP Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The SIP Meta Tag is used to control attributes of the soft input panel (SIP), also known as the software keyboard. Settings apply to text boxes on the current page as well as the address bar. 

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">SIP (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="SIP" content="[method / parameter&gt;</pre>
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
<td valign="top" class="clsSyntaxCells"><b>Manual</b></td>
<td valign="top" class="clsSyntaxCells">When shown by the SIP Button, will show and hide when text boxes have focus (See Remarks)</td>
<td valign="top" class="clsSyntaxCells">Device Specific</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Automatic</b></td>
<td valign="top" class="clsSyntaxCells">Shows and hides when text boxes have focus (See Remarks).  Applying SIP control Automatic will prevent SIP control Manual being applied in the same application.  To return to Manual SIP control you can press a hardware key.</td>
<td valign="top" class="clsSyntaxCells">Device Specific</td>
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
The SIP META Tag is used to control attributes of the soft input panel. Note that these settings apply to both text boxes on the current page as well as the address bar
--&gt;

&lt;!-- &lt;META HTTP-Equiv="SIP" Content="Manual"&gt; --&gt;      &lt;!-- When shown by the SIP Button, will show and hide when text boxes have focus (See Remarks) --&gt;
&lt;!-- &lt;META HTTP-Equiv="SIP" Content="Automatic"&gt; --&gt;      &lt;!-- Shows and hides when text boxes have focus (See Remarks).  Applying SIP control Automatic will prevent SIP control Manual being applied in the same application.  To return to Manual SIP control you can press a hardware key. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The SIP META Tag is used to control attributes of the soft input panel. Note that these settings apply to both text boxes on the current page as well as the address bar
*/

function doSIPInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('SIP', 'Manual');      /* When shown by the SIP Button, will show and hide when text boxes have focus (See Remarks) */
//objGeneric.InvokeMETAFunction('SIP', 'Automatic');      /* Shows and hides when text boxes have focus (See Remarks).  Applying SIP control Automatic will prevent SIP control Manual being applied in the same application.  To return to Manual SIP control you can press a hardware key. */

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
<td valign="top" class="clsSyntaxCells"><b>Left:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Horizontal position, in pixels</td>
<td valign="top" class="clsSyntaxCells">Sets the horizontal position of the SIP in pixels</td>
<td valign="top" class="clsSyntaxCells">Center of the screen</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Top:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Vertical position, in pixels</td>
<td valign="top" class="clsSyntaxCells">Sets the vertical position of the SIP in pixels</td>
<td valign="top" class="clsSyntaxCells">Bottom of the screen</td>
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
The SIP META Tag is used to control attributes of the soft input panel. Note that these settings apply to both text boxes on the current page as well as the address bar
--&gt;

&lt;!-- &lt;META HTTP-Equiv="SIP" Content="Left:[Value]"&gt; --&gt;      &lt;!-- Sets the horizontal position of the SIP in pixels --&gt;
&lt;!-- &lt;META HTTP-Equiv="SIP" Content="Top:[Value]"&gt; --&gt;      &lt;!-- Sets the vertical position of the SIP in pixels --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The SIP META Tag is used to control attributes of the soft input panel. Note that these settings apply to both text boxes on the current page as well as the address bar
*/

function doSIPInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('SIP', 'Left:[Value]');      /* Sets the horizontal position of the SIP in pixels */
//objGeneric.InvokeMETAFunction('SIP', 'Top:[Value]');      /* Sets the vertical position of the SIP in pixels */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>

<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example moves the SIP to sit at the bottom of a 1/4 VGA screen:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="SIP" Content="Left:0;Top:240"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EJC');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EJC">&lt;!-- 
The following example moves the SIP to sit at the bottom of a 1/4 VGA screen:
--&gt;

&lt;META HTTP-Equiv="SIP" Content="Left:0;Top:240"&gt;
</textarea></div>
<p>To completely disable the use fo the SIP it can be positioned off the visible area of the screen.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="SIP" Content="Left:640;Top:0"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EQC');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EQC">&lt;!-- 
To completely disable the use fo the SIP it can be positioned off the visible area of the screen.
--&gt;

&lt;META HTTP-Equiv="SIP" Content="Left:640;Top:0"&gt;
</textarea></div>
<p>The following example sets the SIP to manual:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="SIP" Content="Manual"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EXC');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EXC">&lt;!-- 
The following example sets the SIP to manual:
--&gt;

&lt;META HTTP-Equiv="SIP" Content="Manual"&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Applicable Platforms</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">Manual and Automatic methods apply only to Windows Mobile.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Disabling the SIP</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
If you want to completely disable to the use of the SIP, set it to appear off the visible area of the screen (see example above).
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Interaction with Hardware Keyboard</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The SIP used is the standard keyboard input panel supplied with Windows.  Certain incompatibilities exist when using the software keyboard on a device which also has a hardware keyboard though this will have no impact on the average user.  For example moving the SIP will reset the alpha or function key (orange or blue key) lock and using the orange or blue keys may reset the position of the SIP on certain devices.  Also note that if you press a hardware key the SIP will disappear and you will need to press the SIP button again to get it to appear (or invoke the SIP control Automatic state again)</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
</blockquote><br></div>
<div id="InfoSpan" style="display:block">
<blockquote>
<table>
<tr>
<th>Supported Platforms</th>
<td>Windows CE, Windows Mobile.  Manual and Automatic do not apply for Windows CE</td>
</tr>
<tr>
<th>Persistence</th>
<td>This tag is persistent.  Moving the SIP may also persist after PocketBrowser has been shut down, depedant on Operating System.</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>None.</td>
</tr>
</table>
</blockquote><br>
</div>
