---
title: Alarm Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Alarm Meta Tag is an action tag used to set an alarm and register an action to perform when that alarm fires.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Alarm (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Alarm" content="[method / parameter]"&gt;</pre>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Alarm" content="AlarmTriggered:url('[jsFunction | url]')"&gt;</pre>
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
<td valign="top" class="clsSyntaxCells"><b>Clear</b></td>
<td valign="top" class="clsSyntaxCells">Clears the currently set alarm</td>
<td valign="top" class="clsSyntaxCells">
		N/A
	</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Set</b></td>
<td valign="top" class="clsSyntaxCells">Sets the alarm.  The alarm will fire after the specified interval or at the specified time (see the parameters section).  You can only have one active alarm at a time.</td>
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
The Alarm META Tag is an action tag used to set an alarm and register an action to perform when that alarm fires.
--&gt;
&lt;!-- &lt;META HTTP-Equiv="Alarm" Content="Clear"&gt; --&gt;      &lt;!-- Clears the currently set alarm --&gt;
&lt;!-- &lt;META HTTP-Equiv="Alarm" Content="Set"&gt; --&gt;      &lt;!-- Sets the alarm.  The alarm will fire after the specified interval or at the specified time (see the parameters section).  You can only have one active alarm at a time. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The Alarm META Tag is an action tag used to set an alarm and register an action to perform when that alarm fires.
*/
function doAlarmInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
//objGeneric.InvokeMETAFunction('Alarm', 'Clear');      /* Clears the currently set alarm */
//objGeneric.InvokeMETAFunction('Alarm', 'Set');      /* Sets the alarm.  The alarm will fire after the specified interval or at the specified time (see the parameters section).  You can only have one active alarm at a time. */
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
<td valign="top" class="clsSyntaxCells"><b>Interval:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Alarm Interval in the format HH-MM-SS</td>
<td valign="top" class="clsSyntaxCells">Sets a time after which the Alarm will fire.  The delay cannot be set to less that 30 seconds, if a value of less than 30 seconds is supplied, the delay will be defaulted to 30 seconds.</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Repeat:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">'True' or 'False'</td>
<td valign="top" class="clsSyntaxCells">Provided the alarm has been set using the Interval paramter the alarm will be reset once fired.  If the alarm is set using the 'Time' parameter then this value is ignored.</td>
<td valign="top" class="clsSyntaxCells">False</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Time:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Time in the format "YYYY-MM-DDtHH-MM-SStzd" (e.g. "2009-11-19t11-56-00+01-00"), See Remarks</td>
<td valign="top" class="clsSyntaxCells">Sets the alarm to trigger at the specified time.</td>
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
The Alarm META Tag is an action tag used to set an alarm and register an action to perform when that alarm fires.
--&gt;
&lt;!-- &lt;META HTTP-Equiv="Alarm" Content="Interval:[Value]"&gt; --&gt;      &lt;!-- Sets a time after which the Alarm will fire.  The delay cannot be set to less that 30 seconds, if a value of less than 30 seconds is supplied, the delay will be defaulted to 30 seconds. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Alarm" Content="Repeat:[Value]"&gt; --&gt;      &lt;!-- Provided the alarm has been set using the Interval paramter the alarm will be reset once fired.  If the alarm is set using the 'Time' parameter then this value is ignored. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Alarm" Content="Time:[Value]"&gt; --&gt;      &lt;!-- Sets the alarm to trigger at the specified time. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The Alarm META Tag is an action tag used to set an alarm and register an action to perform when that alarm fires.
*/
function doAlarmInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
//objGeneric.InvokeMETAFunction('Alarm', 'Interval:[Value]');      /* Sets a time after which the Alarm will fire.  The delay cannot be set to less that 30 seconds, if a value of less than 30 seconds is supplied, the delay will be defaulted to 30 seconds. */
//objGeneric.InvokeMETAFunction('Alarm', 'Repeat:[Value]');      /* Provided the alarm has been set using the Interval paramter the alarm will be reset once fired.  If the alarm is set using the 'Time' parameter then this value is ignored. */
//objGeneric.InvokeMETAFunction('Alarm', 'Time:[Value]');      /* Sets the alarm to trigger at the specified time. */
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
</p><br><DIV class="clsRef">AlarmTriggered</DIV>
<DIV>The alarm triggered event will be fired when either the alarm time reaches that specified in the 'Time' parameter or the period specified in 'Interval' expires.  There is no data associated with the AlarmTriggered event.</DIV><br><br></blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example sets the alarm to display an alert box at a repeated interval of 1 hour:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="Alarm-Set" Content="Interval:01-00-00; Repeat:True; AlarmTriggered:url('javascript:alert('Alarm Fired');')"&gt;
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
The following example sets the alarm to display an alert box at a repeated interval of 1 hour:
--&gt;
&lt;META HTTP-Equiv="Alarm-Set" Content="Interval:01-00-00; Repeat:True; AlarmTriggered:url('javascript:alert('Alarm Fired');')"&gt;
</textarea></div>
<p>The following example sets the alarm to display an alert box at 8am GMT on 27th July 2012:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="Alarm-Set" Content="Time:2012-07-27t08-00-00+00-00; Repeat:True; AlarmTriggered:url('javascript:alert('London Olympics Start Today');')"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EMD');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EMD">&lt;!-- 
The following example sets the alarm to display an alert box at 8am GMT on 27th July 2012:
--&gt;

&lt;META HTTP-Equiv="Alarm-Set" Content="Time:2012-07-27t08-00-00+00-00; Repeat:True; AlarmTriggered:url('javascript:alert('London Olympics Start Today');')"&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Validity of registered action on Alarm Triggered</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">Uniquely for a PocketBrowser event the registered action for the AlarmTriggered event does not get cleared when you navigate away from the current page.  If using a javascript function, you must ensure the script is still valid when the alarm fires or alternatively you can clear the alarm.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Minimum Time Interval</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The Alarm is not designed to be triggered for intervals less than 30 seconds, if you require a shorter delay then consider using the JavaScript function 'SetTimeout'.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Explanation of Time Format</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">You must specify the time in GMT and then the device's timezone offset from that.  E.g. a time expressed as 2012-07-27t08-30-00-05-00 breaks down as follows:</DIV>
<pre style="font-family:courier;font-size:small;">
//  Assuming a device with timezone offset -5 hours
//  This alarm will fire at 8:30am (local time) on 27th July 2012
Year: 2012
Month: July
Day: 27th
Time: 13:30 exactly (GMT)
Timezone: -5 (Eastern Time, 8:30am local time)
</pre>
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
<td>This tag is persistent until cleared.</td>
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
