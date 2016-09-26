---
title: Timer Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Timer Meta Tag is an action tag used set a timer and register an action to be performed when the timer expires. Once the timer is started, the interval time cannot be changed without stopping and restarting the timer.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Timer (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Timer" content="[method / parameter&gt;</pre>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
 <pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Timer" content="Timeout:url('[jsFunction | url]')"&gt;</pre>
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
<td valign="top" class="clsSyntaxCells">Starts the timer.  The timer will expire after an interval as specified in the 'Interval' parameter</td>
<td valign="top" class="clsSyntaxCells">Not Started</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Stop</b></td>
<td valign="top" class="clsSyntaxCells">Stops the timer if there is currently one running</td>
<td valign="top" class="clsSyntaxCells">Not Started</td>
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
The Timer META Tag is an action tag used to set a timer and register an action to perform on each interval. Once the timer is started the interval time can not be changed without stopping the timer and restarting it.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Timer" Content="Start"&gt; --&gt;      &lt;!-- Starts the timer.  The timer will expire after an interval as specified in the 'Interval' parameter --&gt;
&lt;!-- &lt;META HTTP-Equiv="Timer" Content="Stop"&gt; --&gt;      &lt;!-- Stops the timer if there is currently one running --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The Timer META Tag is an action tag used to set a timer and register an action to perform on each interval. Once the timer is started the interval time can not be changed without stopping the timer and restarting it.
*/

function doTimerInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Timer', 'Start');      /* Starts the timer.  The timer will expire after an interval as specified in the 'Interval' parameter */
//objGeneric.InvokeMETAFunction('Timer', 'Stop');      /* Stops the timer if there is currently one running */

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
<td valign="top" class="clsSyntaxCells">Values greater than or equal to 500 milliseconds</td>
<td valign="top" class="clsSyntaxCells">The duration the timer should run for, specified in milliseconds.</td>
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
The Timer META Tag is an action tag used to set a timer and register an action to perform on each interval. Once the timer is started the interval time can not be changed without stopping the timer and restarting it.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Timer" Content="Interval:[Value]"&gt; --&gt;      &lt;!-- The duration the timer should run for, specified in milliseconds. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The Timer META Tag is an action tag used to set a timer and register an action to perform on each interval. Once the timer is started the interval time can not be changed without stopping the timer and restarting it.
*/

function doTimerInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Timer', 'Interval:[Value]');      /* The duration the timer should run for, specified in milliseconds. */

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
</p><br><DIV class="clsRef">Timeout</DIV>
<DIV>The Timeout event is triggered when the timer expires and returns the current time.</DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
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
<td class="clsSyntaxCells" valign="top"><b>Time</b></td>
<td class="clsSyntaxCells" style="text-align:left;">The current time from the deivce clock.  Format is DD/MM/YY HH:MM:SS</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0EDC">&lt;!-- &lt;META HTTP-Equiv="Timer" Content="Timeout:url('JavaScript:fnJSCallbackHandler('%1');')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0EJC">&lt;script&gt;
/*
function doTimerInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Timer', 'Timeout:url('JavaScript:fnJSCallbackHandler('%1');')');      /* The Timeout event is triggered when the timer expires and returns the current time. */

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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EDC');">
			META Tags
		</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EJC');">
			Javascript
		</nobr></td>
<td></td>
</tr>
</table><br><br></blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example sets the timerinterval to 5 seconds:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-EQUIV="Timer" CONTENT="Interval:5000; Timeout:url('Javascript:doTimer('%s');'); Start"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EUC');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EUC">&lt;!-- 
The following example sets the timerinterval to 5 seconds:
--&gt;

&lt;META HTTP-EQUIV="Timer" CONTENT="Interval:5000; Timeout:url('Javascript:doTimer('%s');'); Start"&gt;
</textarea></div>
<p>The following example shows a JavaScript alert at 10 second intervals:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;HTML&gt;
&lt;HEAD&gt;
&lt;META HTTP-EQUIV="Timer" CONTENT="Interval:10000; Timeout:url('Javascript:doTimer('%s');'); Start"&gt;
&lt;/HEAD&gt;
&lt;SCRIPT LANGUAGE="javascript"&gt;
function doTimer(time)
{
divTimer.innerHTML = 'Time: ' + time;
}
&lt;/SCRIPT&gt;
&lt;BODY&gt;&lt;DIV ID="divTimer"&gt;&lt;/DIV&gt;&lt;/BODY&gt;
&lt;/HTML&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E2C');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0E2C">&lt;!-- 
The following example shows a JavaScript alert at 10 second intervals:
--&gt;

&lt;HTML&gt;
&lt;HEAD&gt;
&lt;META HTTP-EQUIV="Timer" CONTENT="Interval:10000; Timeout:url('Javascript:doTimer('%s');'); Start"&gt;
&lt;/HEAD&gt;
&lt;SCRIPT LANGUAGE="javascript"&gt;
function doTimer(time)
{
divTimer.innerHTML = 'Time: ' + time;
}
&lt;/SCRIPT&gt;
&lt;BODY&gt;&lt;DIV ID="divTimer"&gt;&lt;/DIV&gt;&lt;/BODY&gt;
&lt;/HTML&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">General</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">Once the timer has started, it will fire repeatedly until either stop is called or a page navigation occurs. 
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
<td>This tag only applies to the current page.</td>
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
