---
title: Notification Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Notification Meta Tag is an action tag used to control the notification objects such as the LEDs, beeper and pager on the device. While some devices are equipped more than one of a given object type, most have multiple LEDs, a single beeper and a single pager. 

To control notification objects, it is first necessary to query the device to discover which objects are available. This is done using the Enumerate method and `EnumNotificationsEvent`, which returns a unique identifier for each available notification to be used to set the notification state. Notifications can be set as "on," "off" or "cycling." with the behaviour of 'on' or 'off' notification objects self explanatory; when set to cyclic LEDs will flash for the specified number of times whereas the beeper and pager will only activate once for the specified duration.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Notification (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Notification" content="[method / parameter&gt;</pre>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Notification" content="EnumNotificationsEvent:url('[jsFunction | url]')"&gt;</p>
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
<td valign="top" class="clsSyntaxCells"><b>Enumerate</b></td>
<td valign="top" class="clsSyntaxCells">Immediately triggers an EnumNotificationsEvent containing the notification objects available on the current device</td>
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
The Notification META Tag is an action tag used to control the notification objects on the device. There are three types of notification object (LEDs, Beeper and Pager) and a device may have more than one of any object type, though in practise devices will have multiple LEDs and a maximum of one beeper and pager. In order to control the notification objects it is first necessary to query the device to discover which objects are available, this is done through the Enumerate method and EnumNotificationsEvent. The EnumNotificationsEvent will return a unique identifier for each available notification and this will be used to set the notification state. Notifications can be set to either on, off or cycling with the behaviour of 'on' or 'off' notification objects self explanatory; when set to cyclic LEDs will flash for the specified number of times whereas the beeper and pager will only activate once for the specified duration.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Notification" Content="Enumerate"&gt; --&gt;      &lt;!-- Immediately triggers an EnumNotificationsEvent containing the notification objects available on the current device --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The Notification META Tag is an action tag used to control the notification objects on the device. There are three types of notification object (LEDs, Beeper and Pager) and a device may have more than one of any object type, though in practise devices will have multiple LEDs and a maximum of one beeper and pager. In order to control the notification objects it is first necessary to query the device to discover which objects are available, this is done through the Enumerate method and EnumNotificationsEvent. The EnumNotificationsEvent will return a unique identifier for each available notification and this will be used to set the notification state. Notifications can be set to either on, off or cycling with the behaviour of 'on' or 'off' notification objects self explanatory; when set to cyclic LEDs will flash for the specified number of times whereas the beeper and pager will only activate once for the specified duration.
*/

function doNotificationInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Notification', 'Enumerate');      /* Immediately triggers an EnumNotificationsEvent containing the notification objects available on the current device */

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
<td valign="top" class="clsSyntaxCells"><b>SetLEDOnDuration:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Milliseconds</td>
<td valign="top" class="clsSyntaxCells">Subsequent calls to cycle LED notifications will cause them to remain on for the specified number of milliseconds per cycle.  This parameter has no effect if the LED State is set to 'On' or 'Off'</td>
<td valign="top" class="clsSyntaxCells">1000</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>SetLEDOffDuration:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Milliseconds</td>
<td valign="top" class="clsSyntaxCells">Subsequent calls to cycle LED notifications will cause them to remain off for the specified number of milliseconds per cycle.  This parameter has no effect if the LED State is set to 'On' or 'Off'</td>
<td valign="top" class="clsSyntaxCells">1000</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>SetLEDNumberOfCycles:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Positive Number</td>
<td valign="top" class="clsSyntaxCells">Subsequent calls to cycle LED notifications will cause them to switch between on and off the specified number of times.</td>
<td valign="top" class="clsSyntaxCells">1</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>SetBeeperFrequency:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Frequency in Hertz</td>
<td valign="top" class="clsSyntaxCells">When the beeper next sounds it will do so at the specified number of Hertz, provided this is supported by the hardware.  This parameter has an effect for both StateOn and StateCycle.</td>
<td valign="top" class="clsSyntaxCells">2000</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>SetBeeperVolume:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Number between 0 and 3</td>
<td valign="top" class="clsSyntaxCells">When the beeper next sounds it will do so at the specified volume.  0 represents minimum volume and 3 is maximum volume, the decibels each volume level represents is device dependant</td>
<td valign="top" class="clsSyntaxCells">0</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>SetBeeperDuration:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Milliseconds</td>
<td valign="top" class="clsSyntaxCells">When the beeper is next instructed to cycle it will sound for the specified number of milliseconds</td>
<td valign="top" class="clsSyntaxCells">1000</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>SetVibrateDuration:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Milliseconds</td>
<td valign="top" class="clsSyntaxCells">When the pager is next instructed to cycle it will vibrate the device for the specified number of milliseconds</td>
<td valign="top" class="clsSyntaxCells">1000</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>StateOn:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">The index of the notification, obtained via the EnumNotificationsEvent</td>
<td valign="top" class="clsSyntaxCells">Turns the specified notification object on.  This will either light an LED, sound the beeper or vibrate the device depending on the type of the notification</td>
<td valign="top" class="clsSyntaxCells">Device Specific</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>StateOff:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">The index of the notification, obtained via the EnumNotificationsEvent</td>
<td valign="top" class="clsSyntaxCells">Turns the specified notification object off.  This will either extinguish an LED, silence the beeper or stop the device from vibrating</td>
<td valign="top" class="clsSyntaxCells">Device Specific</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>StateCycle:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">The index of the notification, obtained via the EnumNotificationsEvent</td>
<td valign="top" class="clsSyntaxCells">Cycles the specified notification object.  LEDs will alternate between on and off for the specified number of cycles.  The beeper and pager will be invoked once for the specified number of milliseconds.</td>
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
The Notification META Tag is an action tag used to control the notification objects on the device. There are three types of notification object (LEDs, Beeper and Pager) and a device may have more than one of any object type, though in practise devices will have multiple LEDs and a maximum of one beeper and pager. In order to control the notification objects it is first necessary to query the device to discover which objects are available, this is done through the Enumerate method and EnumNotificationsEvent. The EnumNotificationsEvent will return a unique identifier for each available notification and this will be used to set the notification state. Notifications can be set to either on, off or cycling with the behaviour of 'on' or 'off' notification objects self explanatory; when set to cyclic LEDs will flash for the specified number of times whereas the beeper and pager will only activate once for the specified duration.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Notification" Content="SetLEDOnDuration:[Value]"&gt; --&gt;      &lt;!-- Subsequent calls to cycle LED notifications will cause them to remain on for the specified number of milliseconds per cycle.  This parameter has no effect if the LED State is set to 'On' or 'Off' --&gt;
&lt;!-- &lt;META HTTP-Equiv="Notification" Content="SetLEDOffDuration:[Value]"&gt; --&gt;      &lt;!-- Subsequent calls to cycle LED notifications will cause them to remain off for the specified number of milliseconds per cycle.  This parameter has no effect if the LED State is set to 'On' or 'Off' --&gt;
&lt;!-- &lt;META HTTP-Equiv="Notification" Content="SetLEDNumberOfCycles:[Value]"&gt; --&gt;      &lt;!-- Subsequent calls to cycle LED notifications will cause them to switch between on and off the specified number of times. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Notification" Content="SetBeeperFrequency:[Value]"&gt; --&gt;      &lt;!-- When the beeper next sounds it will do so at the specified number of Hertz, provided this is supported by the hardware.  This parameter has an effect for both StateOn and StateCycle. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Notification" Content="SetBeeperVolume:[Value]"&gt; --&gt;      &lt;!-- When the beeper next sounds it will do so at the specified volume.  0 represents minimum volume and 3 is maximum volume, the decibels each volume level represents is device dependant --&gt;
&lt;!-- &lt;META HTTP-Equiv="Notification" Content="SetBeeperDuration:[Value]"&gt; --&gt;      &lt;!-- When the beeper is next instructed to cycle it will sound for the specified number of milliseconds --&gt;
&lt;!-- &lt;META HTTP-Equiv="Notification" Content="SetVibrateDuration:[Value]"&gt; --&gt;      &lt;!-- When the pager is next instructed to cycle it will vibrate the device for the specified number of milliseconds --&gt;
&lt;!-- &lt;META HTTP-Equiv="Notification" Content="StateOn:[Value]"&gt; --&gt;      &lt;!-- Turns the specified notification object on.  This will either light an LED, sound the beeper or vibrate the device depending on the type of the notification --&gt;
&lt;!-- &lt;META HTTP-Equiv="Notification" Content="StateOff:[Value]"&gt; --&gt;      &lt;!-- Turns the specified notification object off.  This will either extinguish an LED, silence the beeper or stop the device from vibrating --&gt;
&lt;!-- &lt;META HTTP-Equiv="Notification" Content="StateCycle:[Value]"&gt; --&gt;      &lt;!-- Cycles the specified notification object.  LEDs will alternate between on and off for the specified number of cycles.  The beeper and pager will be invoked once for the specified number of milliseconds. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The Notification META Tag is an action tag used to control the notification objects on the device. There are three types of notification object (LEDs, Beeper and Pager) and a device may have more than one of any object type, though in practise devices will have multiple LEDs and a maximum of one beeper and pager. In order to control the notification objects it is first necessary to query the device to discover which objects are available, this is done through the Enumerate method and EnumNotificationsEvent. The EnumNotificationsEvent will return a unique identifier for each available notification and this will be used to set the notification state. Notifications can be set to either on, off or cycling with the behaviour of 'on' or 'off' notification objects self explanatory; when set to cyclic LEDs will flash for the specified number of times whereas the beeper and pager will only activate once for the specified duration.
*/

function doNotificationInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Notification', 'SetLEDOnDuration:[Value]');      /* Subsequent calls to cycle LED notifications will cause them to remain on for the specified number of milliseconds per cycle.  This parameter has no effect if the LED State is set to 'On' or 'Off' */
//objGeneric.InvokeMETAFunction('Notification', 'SetLEDOffDuration:[Value]');      /* Subsequent calls to cycle LED notifications will cause them to remain off for the specified number of milliseconds per cycle.  This parameter has no effect if the LED State is set to 'On' or 'Off' */
//objGeneric.InvokeMETAFunction('Notification', 'SetLEDNumberOfCycles:[Value]');      /* Subsequent calls to cycle LED notifications will cause them to switch between on and off the specified number of times. */
//objGeneric.InvokeMETAFunction('Notification', 'SetBeeperFrequency:[Value]');      /* When the beeper next sounds it will do so at the specified number of Hertz, provided this is supported by the hardware.  This parameter has an effect for both StateOn and StateCycle. */
//objGeneric.InvokeMETAFunction('Notification', 'SetBeeperVolume:[Value]');      /* When the beeper next sounds it will do so at the specified volume.  0 represents minimum volume and 3 is maximum volume, the decibels each volume level represents is device dependant */
//objGeneric.InvokeMETAFunction('Notification', 'SetBeeperDuration:[Value]');      /* When the beeper is next instructed to cycle it will sound for the specified number of milliseconds */
//objGeneric.InvokeMETAFunction('Notification', 'SetVibrateDuration:[Value]');      /* When the pager is next instructed to cycle it will vibrate the device for the specified number of milliseconds */
//objGeneric.InvokeMETAFunction('Notification', 'StateOn:[Value]');      /* Turns the specified notification object on.  This will either light an LED, sound the beeper or vibrate the device depending on the type of the notification */
//objGeneric.InvokeMETAFunction('Notification', 'StateOff:[Value]');      /* Turns the specified notification object off.  This will either extinguish an LED, silence the beeper or stop the device from vibrating */
//objGeneric.InvokeMETAFunction('Notification', 'StateCycle:[Value]');      /* Cycles the specified notification object.  LEDs will alternate between on and off for the specified number of cycles.  The beeper and pager will be invoked once for the specified number of milliseconds. */

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
</p><br><DIV class="clsRef">EnumNotificationsEvent</DIV>
<DIV>The EnumNotificationsEvent is triggered in response to calling the 'Enumerate' method and is used to obtain the notifications available on the device and their associated identifiers.  There is a single return value for this event which is a two dimensional array, with one dimension listing the available notifications and the other dimension listing the attributes for each notification object</DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
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
<td class="clsSyntaxCells" valign="top"><b>Notifications Array</b></td>
<td class="clsSyntaxCells" style="text-align:left;">2 Dimensional array of notifications, see remarks</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0E4E">&lt;!-- &lt;META HTTP-Equiv="Notification" Content="EnumNotificationsEvent:url('JavaScript:fnJSCallbackHandler(%1);')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0EDF">&lt;script&gt;
/*
function doNotificationInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Notification', 'EnumNotificationsEvent:url('JavaScript:fnJSCallbackHandler(%1);')');      /* The EnumNotificationsEvent is triggered in response to calling the 'Enumerate' method and is used to obtain the notifications available on the device and their associated identifiers.  There is a single return value for this event which is a two dimensional array, with one dimension listing the available notifications and the other dimension listing the attributes for each notification object */

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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E4E');">
	META Tags
</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EDF');">
	Javascript
</nobr></td>
<td></td>
</tr>
</table><br><br></blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example stores the available notifications in a javascript array and displays them to the user in an HTML table.  Note that a 2 dimensional array is returned in the EnumNotificationsEvent.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;HTML&gt;
&lt;HEAD&gt;
&lt;META HTTP-Equiv="Notification" content="EnumNotificationsEvent:url('javascript:setupNtfyArr(%s)');"&gt;
&lt;/HEAD&gt;
&lt;script&gt;
var ntfyArr = new Array();
var notType = new Array('LED', 'BEEPER', 'PAGER');
var NTFY_INDEX = 0;
var NTFY_TYPE = 1;
var NTFY_NAME = 2;

function setupNtfyArr(notArr)
{
ntfyArr = notArr;
var html = "";

for(i=0; i&lt;ntfyArr.length; i++)	
{
html += '' + ntfyArr[i][NTFY_INDEX] + ', ' 
+ notType[ntfyArr[i][NTFY_TYPE]] + '' 
+ ntfyArr[i][NTFY_NAME] + '';
}

html += "";
htmDiv.innerHTML = html;
}

function onListNotifications()
{
var Generic = new ActiveXObject("PocketBrowser.Generic");
Generic.InvokeMetaFunction("Notification", "Enumerate");
}
&lt;/script&gt;
&lt;BODY&gt;
&lt;div id="htmDiv"&gt;
&lt;INPUT TYPE="button" VALUE="List Notification Objects" ONCLICK="onListNotifications();"&gt;
&lt;/div&gt;
&lt;/BODY&gt;
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EQF');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EQF">&lt;!-- 
The following example stores the available notifications in a javascript array and displays them to the user in an HTML table.  Note that a 2 dimensional array is returned in the EnumNotificationsEvent.
--&gt;

&lt;HTML&gt;
&lt;HEAD&gt;
&lt;META HTTP-Equiv="Notification" content="EnumNotificationsEvent:url('javascript:setupNtfyArr(%s)');"&gt;
&lt;/HEAD&gt;
&lt;script&gt;
var ntfyArr = new Array();
var notType = new Array('LED', 'BEEPER', 'PAGER');
var NTFY_INDEX = 0;
var NTFY_TYPE = 1;
var NTFY_NAME = 2;

function setupNtfyArr(notArr)
{
ntfyArr = notArr;
var html = "";

for(i=0; i&lt;ntfyArr.length; i++)	
{
html += '' + ntfyArr[i][NTFY_INDEX] + ', ' 
+ notType[ntfyArr[i][NTFY_TYPE]] + '' 
+ ntfyArr[i][NTFY_NAME] + '';
}

html += "";
htmDiv.innerHTML = html;
}

function onListNotifications()
{
var Generic = new ActiveXObject("PocketBrowser.Generic");
Generic.InvokeMetaFunction("Notification", "Enumerate");
}
&lt;/script&gt;
&lt;BODY&gt;
&lt;div id="htmDiv"&gt;
&lt;INPUT TYPE="button" VALUE="List Notification Objects" ONCLICK="onListNotifications();"&gt;
&lt;/div&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;

</textarea></div>
<p>The following function takes a notification index and a notification type.  Depending on the type of notification it invokes it appropriately.  The index and type of each notification can be obtained via the EnumNotificationsEvent as demonstrated in the previous example</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;script&gt;
var Generic = new ActiveXObject("PocketBrowser.Generic");
function annoyUser(index, type)
{
if (type == 0)
{
//  If the Type of Notification is an LED flash it 10 times, on for 1 second off for 1 second.
Generic.InvokeMetaFunction("Notification", "SetLEDOnDuration:1000");
Generic.InvokeMetaFunction("Notification", "SetLEDOffDuration:1000");
Generic.InvokeMetaFunction("Notification", "SetLEDNumberOfCycles:10");
//  Flash the LED
Generic.InvokeMetaFunction("Notification", "StateCycle:" + index);
}
else if (type == 1)
{
//  If the Type of the Notification is a Beeper emit a continuous high pitch tone at maximum volume
Generic.InvokeMetaFunction("Notification", "SetBeeperFrequency:8000");
Generic.InvokeMetaFunction("Notification", "SetBeeperVolume:3");
//  Start the Beeper
Generic.InvokeMetaFunction("Notification", "SetOn:" + index);
}
else if (type == 2)
{
//  If the type of the notification is a Pager then vibrate the device for 15 seconds
Generic.InvokeMetaFunction("Notification", "SetVibrateDuration");
Generic.InvokeMetaFunction("Notification", "StateCycle:" + index);
}
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E6F');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0E6F">&lt;!-- 
The following function takes a notification index and a notification type.  Depending on the type of notification it invokes it appropriately.  The index and type of each notification can be obtained via the EnumNotificationsEvent as demonstrated in the previous example
--&gt;

&lt;script&gt;
var Generic = new ActiveXObject("PocketBrowser.Generic");
function annoyUser(index, type)
{
if (type == 0)
{
//  If the Type of Notification is an LED flash it 10 times, on for 1 second off for 1 second.
Generic.InvokeMetaFunction("Notification", "SetLEDOnDuration:1000");
Generic.InvokeMetaFunction("Notification", "SetLEDOffDuration:1000");
Generic.InvokeMetaFunction("Notification", "SetLEDNumberOfCycles:10");
//  Flash the LED
Generic.InvokeMetaFunction("Notification", "StateCycle:" + index);
}
else if (type == 1)
{
//  If the Type of the Notification is a Beeper emit a continuous high pitch tone at maximum volume
Generic.InvokeMetaFunction("Notification", "SetBeeperFrequency:8000");
Generic.InvokeMetaFunction("Notification", "SetBeeperVolume:3");
//  Start the Beeper
Generic.InvokeMetaFunction("Notification", "SetOn:" + index);
}
else if (type == 2)
{
//  If the type of the notification is a Pager then vibrate the device for 15 seconds
Generic.InvokeMetaFunction("Notification", "SetVibrateDuration");
Generic.InvokeMetaFunction("Notification", "StateCycle:" + index);
}
}
&lt;/script&gt;
</textarea></div>
</blockquote>
</div>  
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">No Notification Objects</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">If the device has no notification objects the array returned by EnumNotificationsEvent will be empty</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Notification State</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">If PocketBrowser is exited after applying notifications, the settings will not revert.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">EnumNotificationsEvent Array Format</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">Thre is a single return value for this event which is a two dimensional array with the format below:</DIV>
<pre style="font-family:courier;font-size:small;">
(
(                      //  Array for Notification 1
NotificationIndex,  //  Unique Identifier for each notification.
NotificationType,   //  Type of the notification.  '0' Indicates an LED; '1' indicates a Beeper and '2' indicates a pager
NotificationName    //  Human readable name of the notification, e.g. "Green LED"
)
(                      //  Array for Notification 2
NotificationIndex,
NotificationType,
NotificationName
)
)
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
<td>This tag is persistent except for the EnumNotificationsEvent which is page specific.</td>
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
