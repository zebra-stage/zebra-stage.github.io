---
title: KeyCapture Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The KeyCapture Meta Tag is an action tag is used to intercept or override hardware keys, and is typically used to assign certain application functions to physical keys or other hardware buttons.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">KeyCapture (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="KeyCapture" content="[parameter&gt;</pre>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="KeyCapture" content="KeyEvent:url('[jsFunction | url]')"&gt;</p>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="KeyCapture" content="TriggerEvent:url('[jsFunction | url]')"&gt;</p>
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
<td valign="top" class="clsSyntaxCells"><b>Dispatch:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">'True' or 'False'</td>
<td valign="top" class="clsSyntaxCells">After a key has been intercepted this parameter will determine whether or not it will still be received by the visual components.  For example if you have focus in a text box and are intercepting keys set this to 'False' to avoid having the keys appear in the box.</td>
<td valign="top" class="clsSyntaxCells">False</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>KeyValue:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">Hex virtual key value, or 'All'</td>
<td valign="top" class="clsSyntaxCells">Specifies the key to be captured, e.g. 0x09 is Tab, 0x0D is return.  Set this parameter to 'All' to capture all keys.  The value of the received key is passed as a return value to the KeyEvent, this can be used to find the value of a specific key.  See the remarks section for a list of keys which can not be captured.</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Remap:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">Hex virtual key value</td>
<td valign="top" class="clsSyntaxCells">After a key has been captured it will be remapped and the new key and sent to PocketBrowser.  This parameter must be set after the KeyValue parameter specifiying which key is being remapped.  Note this parameter is incompatible with KeyValue:all or Dispatch:True, otherwise this would result in two keys being recevied.  Also note thie parameter is incompatible with the KeyEvent as the two are mutually exclusive.</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>AccelerateKey:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">'None', 'All' and 'Norm'</td>
<td valign="top" class="clsSyntaxCells">'All' enables all accelerator keys for the browser to handle.  'None' disables all the accelerator keys and 'Norm' uses the default PocketBrowser settings for Accelerator Keys.  See Remarks</td>
<td valign="top" class="clsSyntaxCells">Norm</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>HomeKeyValue:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">Hex virtual key value, or 'Disabled'</td>
<td valign="top" class="clsSyntaxCells">Specifies a key which, when pressed, will navigate to the start page as defined in the PocketBrowser configuration.  Set to 'Disabled' to prevent this behaviour.</td>
<td valign="top" class="clsSyntaxCells">Disabled</td>
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
The KeyCapture META Tag is an action tag used to intercept or override keyboard input.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="KeyCapture" Content="Dispatch:[Value]"&gt; --&gt;      &lt;!-- After a key has been intercepted this parameter will determine whether or not it will still be received by the visual components.  For example if you have focus in a text box and are intercepting keys set this to 'False' to avoid having the keys appear in the box. --&gt;
&lt;!-- &lt;META HTTP-Equiv="KeyCapture" Content="KeyValue:[Value]"&gt; --&gt;      &lt;!-- Specifies the key to be captured, e.g. 0x09 is Tab, 0x0D is return.  Set this parameter to 'All' to capture all keys.  The value of the received key is passed as a return value to the KeyEvent, this can be used to find the value of a specific key.  See the remarks section for a list of keys which can not be captured. --&gt;
&lt;!-- &lt;META HTTP-Equiv="KeyCapture" Content="Remap:[Value]"&gt; --&gt;      &lt;!-- After a key has been captured it will be remapped and the new key and sent to PocketBrowser.  This parameter must be set after the KeyValue parameter specifiying which key is being remapped.  Note this parameter is incompatible with KeyValue:all or Dispatch:True, otherwise this would result in two keys being recevied.  Also note thie parameter is incompatible with the KeyEvent as the two are mutually exclusive. --&gt;
&lt;!-- &lt;META HTTP-Equiv="KeyCapture" Content="AccelerateKey:[Value]"&gt; --&gt;      &lt;!-- 'All' enables all accelerator keys for the browser to handle.  'None' disables all the accelerator keys and 'Norm' uses the default PocketBrowser settings for Accelerator Keys.  See Remarks --&gt;
&lt;!-- &lt;META HTTP-Equiv="KeyCapture" Content="HomeKeyValue:[Value]"&gt; --&gt;      &lt;!-- Specifies a key which, when pressed, will navigate to the start page as defined in the PocketBrowser configuration.  Set to 'Disabled' to prevent this behaviour. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The KeyCapture META Tag is an action tag used to intercept or override keyboard input.
*/

function doKeyCaptureInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('KeyCapture', 'Dispatch:[Value]');      /* After a key has been intercepted this parameter will determine whether or not it will still be received by the visual components.  For example if you have focus in a text box and are intercepting keys set this to 'False' to avoid having the keys appear in the box. */
//objGeneric.InvokeMETAFunction('KeyCapture', 'KeyValue:[Value]');      /* Specifies the key to be captured, e.g. 0x09 is Tab, 0x0D is return.  Set this parameter to 'All' to capture all keys.  The value of the received key is passed as a return value to the KeyEvent, this can be used to find the value of a specific key.  See the remarks section for a list of keys which can not be captured. */
//objGeneric.InvokeMETAFunction('KeyCapture', 'Remap:[Value]');      /* After a key has been captured it will be remapped and the new key and sent to PocketBrowser.  This parameter must be set after the KeyValue parameter specifiying which key is being remapped.  Note this parameter is incompatible with KeyValue:all or Dispatch:True, otherwise this would result in two keys being recevied.  Also note thie parameter is incompatible with the KeyEvent as the two are mutually exclusive. */
//objGeneric.InvokeMETAFunction('KeyCapture', 'AccelerateKey:[Value]');      /* 'All' enables all accelerator keys for the browser to handle.  'None' disables all the accelerator keys and 'Norm' uses the default PocketBrowser settings for Accelerator Keys.  See Remarks */
//objGeneric.InvokeMETAFunction('KeyCapture', 'HomeKeyValue:[Value]');      /* Specifies a key which, when pressed, will navigate to the start page as defined in the PocketBrowser configuration.  Set to 'Disabled' to prevent this behaviour. */

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
</p><br><DIV class="clsRef">KeyEvent</DIV>
<DIV>After a KeyValue parameter has been used to specify which key to capture and whether or not to dispatch it, setting a KeyEvent will associate that key with the event to call when that key is pressed.  The KeyEvent must be set after the KeyValue parameter and optionally the Dispatch parameter and to capture multiple keys you should repeat this process.  The same event handler can be used to process multiple keys.  Note that this event is not compatible with the Remap parameter as the two are mutually exclusive.  To unregister for key events use the syntax url(''), an example is provided below.</DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
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
<td class="clsSyntaxCells" valign="top"><b>Key Value</b></td>
<td class="clsSyntaxCells" style="text-align:left;">The internal representation of the key expressed in decimal, e.g. 13 is the return key</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0E6C">&lt;!-- &lt;META HTTP-Equiv="KeyCapture" Content="KeyEvent:url('JavaScript:fnJSCallbackHandler('%1');')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0EFD">&lt;script&gt;
/*
function doKeyCaptureInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('KeyCapture', 'KeyEvent:url('JavaScript:fnJSCallbackHandler('%1');')');      /* After a KeyValue parameter has been used to specify which key to capture and whether or not to dispatch it, setting a KeyEvent will associate that key with the event to call when that key is pressed.  The KeyEvent must be set after the KeyValue parameter and optionally the Dispatch parameter and to capture multiple keys you should repeat this process.  The same event handler can be used to process multiple keys.  Note that this event is not compatible with the Remap parameter as the two are mutually exclusive.  To unregister for key events use the syntax url(''), an example is provided below. */

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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E6C');">
		META Tags
	</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EFD');">
		Javascript
	</nobr></td>
<td></td>
</tr>
</table><br><br><DIV class="clsRef">TriggerEvent</DIV>
<DIV>The TriggerEvent is invoked whenever a device hardware trigger is pressed or released.  Note the registration for TriggerEvent will fail if the trigger is currently in use.</DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
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
<td class="clsSyntaxCells" valign="top"><b>Trigger Flag</b></td>
<td class="clsSyntaxCells" style="text-align:left;">The combination of the triggers pressed and the state of the triggers	</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0END">&lt;!-- &lt;META HTTP-Equiv="KeyCapture" Content="TriggerEvent:url('JavaScript:fnJSCallbackHandler('%1');')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0ETD">&lt;script&gt;
/*
function doKeyCaptureInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('KeyCapture', 'TriggerEvent:url('JavaScript:fnJSCallbackHandler('%1');')');      /* The TriggerEvent is invoked whenever a device hardware trigger is pressed or released.  Note the registration for TriggerEvent will fail if the trigger is currently in use. */

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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0END');">
		META Tags
	</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0ETD');">
		Javascript
	</nobr></td>
<td></td>
</tr>
</table><br><br></blockquote><br></div>

<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example displays an alert when any key is pressed:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="KeyCapture" Content="KeyValue:All; Dispatch:False; KeyEvent:url('JavaScript:alert('Key Pressed: %s');')"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E5D');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0E5D">&lt;!-- 
The following example displays an alert when any key is pressed:
--&gt;

&lt;META HTTP-Equiv="KeyCapture" Content="KeyValue:All; Dispatch:False; KeyEvent:url('JavaScript:alert('Key Pressed: %s');')"&gt;
</textarea></div>
<p>The following example intercepts the return key and displays an alert:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="KeyCapture" Content="KeyValue:0x0D; Dispatch:False; KeyEvent:url('JavaScript:alert('Return Key Pressed');')"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EFE');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EFE">&lt;!-- 
The following example intercepts the return key and displays an alert:
--&gt;

&lt;META HTTP-Equiv="KeyCapture" Content="KeyValue:0x0D; Dispatch:False; KeyEvent:url('JavaScript:alert('Return Key Pressed');')"&gt;
</textarea></div>
<p>The following example intercepts the tab key and replaces it by the return key:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="KeyCapture" Content="KeyValue:0x09; Remap:0x0D"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EME');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EME">&lt;!-- 
The following example intercepts the tab key and replaces it by the return key:
--&gt;

&lt;META HTTP-Equiv="KeyCapture" Content="KeyValue:0x09; Remap:0x0D"&gt;
</textarea></div>
<p>The following example displays an alert when any key is pressed but still allows that key to received by the browser component:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="KeyCapture" Content="KeyValue:All; Dispatch:True; KeyEvent:url('JavaScript:alert('Key Pressed: %s');')"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0ETE');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0ETE">&lt;!-- 
The following example displays an alert when any key is pressed but still allows that key to received by the browser component:
--&gt;

&lt;META HTTP-Equiv="KeyCapture" Content="KeyValue:All; Dispatch:True; KeyEvent:url('JavaScript:alert('Key Pressed: %s');')"&gt;
</textarea></div>
<p>The following example will not allow the return key to reach the browser but any other key will do so and display an alert:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="KeyCapture" Content="KeyValue:0x0D; Dispatch:False; KeyEvent:url('JavaScript://ignore this');')"&gt;
&lt;META HTTP-Equiv="KeyCapture" Content="KeyValue:All; Dispatch:True; KeyEvent:url('JavaScript:alert('Key Pressed: %s, key will be received by Browser.');')"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E1E');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0E1E">&lt;!-- 
The following example will not allow the return key to reach the browser but any other key will do so and display an alert:
--&gt;

&lt;META HTTP-Equiv="KeyCapture" Content="KeyValue:0x0D; Dispatch:False; KeyEvent:url('JavaScript://ignore this');')"&gt;
&lt;META HTTP-Equiv="KeyCapture" Content="KeyValue:All; Dispatch:True; KeyEvent:url('JavaScript:alert('Key Pressed: %s, key will be received by Browser.');')"&gt;
</textarea></div>
<p>The following example shows how a previously mapped key (in this case the return key) can be unmapped using Javascript.  Note that specifying KeyValue:All and later unmapping a specific key will not unmap the key, follow the example above to achieve that effect:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="KeyCapture" Content="KeyValue:0x0D; Dispatch:False; KeyEvent:url('JavaScript:alert('return pressed');')"&gt;
&lt;script language=javascript&gt;
function fnUnregisterReturnKey()
{
//  Call this function to unmap the return key and allow it to reach the browser.
var Generic = new ActiveXObject("PocketBrowser.Generic");
Generic.InvokeMetaFunction("KeyCapture", "KeyValue:0x0D; KeyEvent:url('')");
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EBF');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EBF">&lt;!-- 
The following example shows how a previously mapped key (in this case the return key) can be unmapped using Javascript.  Note that specifying KeyValue:All and later unmapping a specific key will not unmap the key, follow the example above to achieve that effect:
--&gt;

&lt;META HTTP-Equiv="KeyCapture" Content="KeyValue:0x0D; Dispatch:False; KeyEvent:url('JavaScript:alert('return pressed');')"&gt;
&lt;script language=javascript&gt;
function fnUnregisterReturnKey()
{
//  Call this function to unmap the return key and allow it to reach the browser.
var Generic = new ActiveXObject("PocketBrowser.Generic");
Generic.InvokeMetaFunction("KeyCapture", "KeyValue:0x0D; KeyEvent:url('')");
}
&lt;/script&gt;
</textarea></div>
<p>The following example disables all Accelerator Keys:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="KeyCapture" Content="AccelerateKey:None"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EIF');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EIF">&lt;!-- 
The following example disables all Accelerator Keys:
--&gt;

&lt;META HTTP-Equiv="KeyCapture" Content="AccelerateKey:None"&gt;
</textarea></div>
<p>The following example will navigate to the PocketBrowser start page when return is pressed:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="KeyCapture" Content="HomeKeyValue:0x0D"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EPF');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EPF">&lt;!-- 
The following example will navigate to the PocketBrowser start page when return is pressed:
--&gt;

&lt;META HTTP-Equiv="KeyCapture" Content="HomeKeyValue:0x0D"&gt;
</textarea></div>
<p>The following example will call a JavaScript function when the trigger is pressed or released:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="KeyCapture" Content="TriggerEvent:url('JavaScript:alert('Trigger Event: %s');')"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EWF');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EWF">&lt;!-- 
The following example will call a JavaScript function when the trigger is pressed or released:
--&gt;

&lt;META HTTP-Equiv="KeyCapture" Content="TriggerEvent:url('JavaScript:alert('Trigger Event: %s');')"&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Keys which can not be captured</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">It is not possible to capture the following types of keys, although on some device configurations pressing the SHIFT key twice generates CAPS LOCK which can be captured with a key value of 16:</DIV>
<pre style="font-family:courier;font-size:small;">
*  Keyboard modifiers such as SHIFT, ALT, ORANGE button, BLUE button etc.
*  Device Keys such as the screen backlight or keyboard backlight
*  Hot keys such as phone keys or 'soft' buttons, those whose 
function changes based on the running application.
</pre>
<DIV class="clsRef">Capturing Function Keys</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">Function keys can only be captured if they are enabled in the Configuration Settings and if they are not intercepted by the operating system prior to reaching PocketBrowser.  One such example of OS interception is the F6 and F7 keys on the MC75 (non QWERTY) which are interpreted as volume up &amp; volume down.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">F5 Key</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">In Internet Explorer the F5 key is used to refresh the current page.  It is not recommended to rely on this functionality on Windows Mobile and it is not supported</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Accelerator Keys</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The following keys will be affected by the 'AccelerateKeys' tag, see the Key Capture Overview for a more detailed explanation of Accelerator Keys.  Accelerator Keys are not applicable to Windows Mobile.</DIV>
<pre style="font-family:courier;font-size:small;">
Key           Code    Usual Behaviour               Special behaviour in Internet Explorer

Left Arrow    0x25    Cursor left                   Scroll window left
Right Arrow   0x27    Cursor right                  Scroll window right
Up Arrow      0x26    Cursor up                     Scroll window up
Down Arrow    0x28    Cursor down                   Scroll window down
Backspace     0x08    Delete previous character.    Navigate to previous page
Enter         0x0D    Cursor line feed              Submit form
Tab           0x09    Advance to next control       Advance to next control				
</pre>
<DIV class="clsRef">Remapping a key to itself</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
If a key is remapped to itself then PocketBrowser will appear to hang because if that key is pressed it will generate another press of the same key, and so on forever. The same will happen if for instance key 1 is remapped to key 2, which in turn is remapped to key 1.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Device Specific Exceptions</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">Certain devices may map their function keys to apparently normal keys, for example the VC6090 maps the '{' key to F12 and the '}' key to 14.  In order to capture those two keys it is necessary to enable F12 and F14 in the Configuration Settings.</DIV>
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
<td>AccelerateKey and HomeKeyValue are persistent, all other parameters only persist on the current page.</td>
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
