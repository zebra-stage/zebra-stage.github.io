---
title: Signal Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Signal Meta Tag is an action tag used to set position and display parameters of the wireless signal indicator on the screen.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Signal (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Signal" content="[parameter&gt;</pre>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Signal" content="SignalEvent:url('[jsFunction | url]')"&gt;</p>
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
<td valign="top" class="clsSyntaxCells">Sets whether or not the battery indicator is shown</td>
<td valign="top" class="clsSyntaxCells">Hidden</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Left:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Pixel value</td>
<td valign="top" class="clsSyntaxCells">Sets the horizontal position of the wireless signal indicator in pixels.  If negative the indicator will be off the screen</td>
<td valign="top" class="clsSyntaxCells">Top right of screen</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Top:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Pixel value</td>
<td valign="top" class="clsSyntaxCells">Sets the vertical position of the wireless signal indicator in pixels. If negative then it will be off the screen</td>
<td valign="top" class="clsSyntaxCells">Top right of screen</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>IconPosition:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Left, Right, Top, Bottom</td>
<td valign="top" class="clsSyntaxCells">Sets the position of indicator icon with respect to Graph position.  "Iconposition" and "Graphposition" combination must be valid combination e.g both cannot be left.</td>
<td valign="top" class="clsSyntaxCells">Bottom</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>GraphPosition:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Left, Right, Top, Bottom</td>
<td valign="top" class="clsSyntaxCells">Sets the direction towards which level bars will grow e.g if value is Left then level bars grow from right to left.  "Iconposition" and "Graphposition" combination must be valid combination e.g both cannot be left.</td>
<td valign="top" class="clsSyntaxCells">Right</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Color:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">Hex Values (#000000 - #FFFFFF)</td>
<td valign="top" class="clsSyntaxCells">RGB value that sets the color of the wireless signal indicator using HTML web colors RR-Red, GG-Green and BB-Blue</td>
<td valign="top" class="clsSyntaxCells">#000000</td>
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
The Signal META Tag is an action tag used to set positional and display parameters of the wireless signal indicator on the screen.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Signal" Content="Visibility:[Value]"&gt; --&gt;      &lt;!-- Sets whether or not the battery indicator is shown --&gt;
&lt;!-- &lt;META HTTP-Equiv="Signal" Content="Left:[Value]"&gt; --&gt;      &lt;!-- Sets the horizontal position of the wireless signal indicator in pixels.  If negative the indicator will be off the screen --&gt;
&lt;!-- &lt;META HTTP-Equiv="Signal" Content="Top:[Value]"&gt; --&gt;      &lt;!-- Sets the vertical position of the wireless signal indicator in pixels. If negative then it will be off the screen --&gt;
&lt;!-- &lt;META HTTP-Equiv="Signal" Content="IconPosition:[Value]"&gt; --&gt;      &lt;!-- Sets the position of indicator icon with respect to Graph position.  "Iconposition" and "Graphposition" combination must be valid combination e.g both cannot be left. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Signal" Content="GraphPosition:[Value]"&gt; --&gt;      &lt;!-- Sets the direction towards which level bars will grow e.g if value is Left then level bars grow from right to left.  "Iconposition" and "Graphposition" combination must be valid combination e.g both cannot be left. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Signal" Content="Color:[Value]"&gt; --&gt;      &lt;!-- RGB value that sets the color of the wireless signal indicator using HTML web colors RR-Red, GG-Green and BB-Blue --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The Signal META Tag is an action tag used to set positional and display parameters of the wireless signal indicator on the screen.
*/

function doSignalInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Signal', 'Visibility:[Value]');      /* Sets whether or not the battery indicator is shown */
//objGeneric.InvokeMETAFunction('Signal', 'Left:[Value]');      /* Sets the horizontal position of the wireless signal indicator in pixels.  If negative the indicator will be off the screen */
//objGeneric.InvokeMETAFunction('Signal', 'Top:[Value]');      /* Sets the vertical position of the wireless signal indicator in pixels. If negative then it will be off the screen */
//objGeneric.InvokeMETAFunction('Signal', 'IconPosition:[Value]');      /* Sets the position of indicator icon with respect to Graph position.  "Iconposition" and "Graphposition" combination must be valid combination e.g both cannot be left. */
//objGeneric.InvokeMETAFunction('Signal', 'GraphPosition:[Value]');      /* Sets the direction towards which level bars will grow e.g if value is Left then level bars grow from right to left.  "Iconposition" and "Graphposition" combination must be valid combination e.g both cannot be left. */
//objGeneric.InvokeMETAFunction('Signal', 'Color:[Value]');      /* RGB value that sets the color of the wireless signal indicator using HTML web colors RR-Red, GG-Green and BB-Blue */
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
</p><br><DIV class="clsRef">SignalEvent</DIV>
<DIV>The SignalEvent gives an indication of the signal level and other associated information.  Once registered for you will receive a SignalEvent at regular intervals, as specified by the SignalRefresh configuration setting.</DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
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
<td class="clsSyntaxCells" valign="top"><b>Signal Strength</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Signal strength value as a percentage</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">2</td>
<td class="clsSyntaxCells" valign="top"><b>ESSID</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Current ESSID</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">3</td>
<td class="clsSyntaxCells" valign="top"><b>MAC Address</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Device's MAC address</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">4</td>
<td class="clsSyntaxCells" valign="top"><b>Adapter Name</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Device's adapter name</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">5</td>
<td class="clsSyntaxCells" valign="top"><b>DHCP Server</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Current DHCP servers address</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">6</td>
<td class="clsSyntaxCells" valign="top"><b>DHCP Static</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Whether the unit has a static or DHCP address</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">7</td>
<td class="clsSyntaxCells" valign="top"><b>Gateway</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Current gateway IP address</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">8</td>
<td class="clsSyntaxCells" valign="top"><b>IP Address</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Current IP address</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">9</td>
<td class="clsSyntaxCells" valign="top"><b>RSSI</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Signal strength in RSSI terms</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">10</td>
<td class="clsSyntaxCells" valign="top"><b>Subnet Mask</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Current subnet mask</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">11</td>
<td class="clsSyntaxCells" valign="top"><b>Wins</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Current WINs server IP address</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0EDD">&lt;!-- &lt;META HTTP-Equiv="Signal" Content="SignalEvent:url('JavaScript:fnJSCallbackHandler('%1', '%2', '%3', '%4', '%5', '%6', '%7', '%8', '%9', '%10', '%11');')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0EJD">&lt;script&gt;
/*
function doSignalInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Signal', 'SignalEvent:url('JavaScript:fnJSCallbackHandler('%1', '%2', '%3', '%4', '%5', '%6', '%7', '%8', '%9', '%10', '%11');')');      /* The SignalEvent gives an indication of the signal level and other associated information.  Once registered for you will receive a SignalEvent at regular intervals, as specified by the SignalRefresh configuration setting. */
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EDD');">
			META Tags
		</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EJD');">
			Javascript
		</nobr></td>
<td></td>
</tr>
</table><br><br></blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example shows the wireless signal indicator, sets the position to (50, 50), the color of the indicator beneath the bars growing from right to left:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="Signal" Content="Visibility:Visible"&gt;
&lt;META HTTP-Equiv="Signal" Content="Left:50"&gt;
&lt;META HTTP-Equiv="Signal" Content="Top:50"&gt;
&lt;META HTTP-Equiv="Signal" Content="Iconposition:Bottom; GraphPosition:Right"&gt;
&lt;META HTTP-Equiv="Signal" Content="Color:#FF0000"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E1F');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0E1F">&lt;!-- 
The following example shows the wireless signal indicator, sets the position to (50, 50), the color of the indicator beneath the bars growing from right to left:
--&gt;
&lt;META HTTP-Equiv="Signal" Content="Visibility:Visible"&gt;
&lt;META HTTP-Equiv="Signal" Content="Left:50"&gt;
&lt;META HTTP-Equiv="Signal" Content="Top:50"&gt;
&lt;META HTTP-Equiv="Signal" Content="Iconposition:Bottom; GraphPosition:Right"&gt;
&lt;META HTTP-Equiv="Signal" Content="Color:#FF0000"&gt;
</textarea></div>
<p>Above example can also be written in EMML1.1 as given below</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="Signal" Content="Left:50; Top:50; Color:#FF0000; Visibility:Visible"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EBG');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EBG">&lt;!-- 
Above example can also be written in EMML1.1 as given below
--&gt;
&lt;META HTTP-Equiv="Signal" Content="Left:50; Top:50; Color:#FF0000; Visibility:Visible"&gt;
</textarea></div>
<p>In EMML1.1 it is also possible to concatenate the Parameter with the module name.  The example above can also be written as:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="Signal-Left" Content="50"&gt;
&lt;META HTTP-Equiv="Signal-Top" Content="50"&gt;
&lt;META HTTP-Equiv="Signal-Color" Content="#FF0000"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EIG');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EIG">&lt;!-- 
In EMML1.1 it is also possible to concatenate the Parameter with the module name.  The example above can also be written as:
--&gt;
&lt;META HTTP-Equiv="Signal-Left" Content="50"&gt;
&lt;META HTTP-Equiv="Signal-Top" Content="50"&gt;
&lt;META HTTP-Equiv="Signal-Color" Content="#FF0000"&gt;
</textarea></div>
<p>The following example navigates to a new page with parameters upon a wirelss signal status change:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="Signal" Content="signalevent:url('mypage.asp?Signal percentage=%s&amp;ESSID=%s&amp;MacAdd=%s&amp;Adapter=%s&amp;DHCPServ=%s&amp;Mode=%s&amp;Gateway=%s&amp;IPAddress=%s&amp;RSSI=%s&amp;Subnet=%s&amp;Wins=%s')"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EPG');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EPG">&lt;!-- 
The following example navigates to a new page with parameters upon a wirelss signal status change:
--&gt;

&lt;META HTTP-Equiv="Signal" Content="signalevent:url('mypage.asp?Signal percentage=%s&amp;ESSID=%s&amp;MacAdd=%s&amp;Adapter=%s&amp;DHCPServ=%s&amp;Mode=%s&amp;Gateway=%s&amp;IPAddress=%s&amp;RSSI=%s&amp;Subnet=%s&amp;Wins=%s')"&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Overlapping</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
Do not display the Battery indicator overlapping with the Signal indicator.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Indicator Positions</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
For an illustrative guide to the meaning of IconPosition and GraphPositions see the 'Indicator Positions' section.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
</blockquote><br></div>
<div id="InfoSpan" style="display:block">
<blockquote>
<table>
<tr>
<th>Supported Platforms</th>
<td>Windows CE, Windows Mobile, Windows Mobile SE</td>
</tr>
<tr>
<th>Persistence</th>
<td>With the exception of the return events, this tag is persistent.</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>None.</td>
</tr>
</table>
</blockquote><br>
</div>
