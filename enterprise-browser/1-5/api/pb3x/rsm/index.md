---
title: RSM Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The RSM Meta Tag is used to configure and retrieve attribute settings of a remote scanner connected to the device via cable or Bluetooth. When used for retrieval, navigation to a URL and/or calls to JavaScript functions are executed immediately. See the Remarks section below for a list of readable/configurable scanner attributes. 


<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">RSM (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="RSM" content="[parameter&gt;</pre>
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
<td valign="top" class="clsSyntaxCells"><b>[Attribute]</b></td>
<td valign="top" class="clsSyntaxCells">	Marks the specified attribute to be returned when RSMGetEvent is next called.
Applicable attributes are all those in the table in the remarks section listed as 
readable.</td>
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
The RSM META Tag is a tag used to configure or to retrieve attributes relating to a remote scanner either tethered to the device or connected via Bluetooth. The properties of the scanner which can be configured are detailed in the 'Remarks' section. When used for retrieval navigation to URL or call to javascript function happens immediately.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="RSM" Content="[Attribute]"&gt; --&gt;      &lt;!-- 	Marks the specified attribute to be returned when RSMGetEvent is next called.
Applicable attributes are all those in the table in the remarks section listed as 
readable. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The RSM META Tag is a tag used to configure or to retrieve attributes relating to a remote scanner either tethered to the device or connected via Bluetooth. The properties of the scanner which can be configured are detailed in the 'Remarks' section. When used for retrieval navigation to URL or call to javascript function happens immediately.
*/
function doRSMInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('RSM', '[Attribute]');      /* 	Marks the specified attribute to be returned when RSMGetEvent is next called.
Applicable attributes are all those in the table in the remarks section listed as 
readable. */
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
<td valign="top" class="clsSyntaxCells"><b>[Attribute]:[Value]
							</b></td>
<td valign="top" class="clsSyntaxCells">ID of Scanner, obtained via EnumScanner</td>
<td valign="top" class="clsSyntaxCells">	Causes the specified attribute of the remote scanner to be configured with the stated value.  
The table in the remarks section lists those writeable attributes which can be configured 
along with their range of possible values.</td>
<td valign="top" class="clsSyntaxCells">Device Dependant</td>
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
The RSM META Tag is a tag used to configure or to retrieve attributes relating to a remote scanner either tethered to the device or connected via Bluetooth. The properties of the scanner which can be configured are detailed in the 'Remarks' section. When used for retrieval navigation to URL or call to javascript function happens immediately.
--&gt;
&lt;!-- &lt;META HTTP-Equiv="RSM" Content="[Attribute]:[Value]"&gt; --&gt;      &lt;!-- 	Causes the specified attribute of the remote scanner to be configured with the stated value.  
The table in the remarks section lists those writeable attributes which can be configured 
along with their range of possible values. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The RSM META Tag is a tag used to configure or to retrieve attributes relating to a remote scanner either tethered to the device or connected via Bluetooth. The properties of the scanner which can be configured are detailed in the 'Remarks' section. When used for retrieval navigation to URL or call to javascript function happens immediately.
*/

function doRSMInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('RSM', '[Attribute]:[Value]');      /* 	Causes the specified attribute of the remote scanner to be configured with the stated value.  
The table in the remarks section lists those writeable attributes which can be configured 
along with their range of possible values. */

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
</p><br><DIV class="clsRef">RsmGetEvent</DIV>
<DIV></DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
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
<td class="clsSyntaxCells" valign="top"><b>AttributeArray</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Array of attribute values.  The attributes returned in this array are those
registered for by calls to RSM prior to calling RSMGetEvent.  
The table in the remarks section gives the possible values associated with 
each attribute, if an attribute is not supported then 'Unsupported Attribute' 
will be returned in that attribute's array position.</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0ETB">&lt;!-- &lt;META HTTP-Equiv="RSM" Content="RsmGetEvent:url('JavaScript:fnJSCallbackHandler(%1);')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0EXB">&lt;script&gt;
/*
function doRSMInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('RSM', 'RsmGetEvent:url('JavaScript:fnJSCallbackHandler(%1);')');      /*  */
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0ETB');">
			META Tags
		</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EXB');">
			Javascript
		</nobr></td>
<td></td>
</tr>
</table><br><br></blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example configures some parameters associated with the remote Bluetooth scanner:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="Scanner" Content="Enabled"&gt;
&lt;META HTTP-Equiv="RSM" Content="BluetoothAuthentication:True"&gt;
&lt;META HTTP-Equiv="RSM" Content="BluetoothPincode:5678"&gt;
&lt;META HTTP-Equiv="RSM" Content="BluetoothReconnectAttempts:6"&gt;
&lt;META HTTP-Equiv="RSM" Content="BluetoothBeepOnReconnectAttempt:True"&gt;
&lt;META HTTP-Equiv="RSM" Content="BluetoothPINCodeType:UseStored"&gt;
&lt;META HTTP-Equiv="RSM" Content="BluetoothAutoReconnect:OnPowerOutOfRange"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EBC');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EBC">&lt;!-- 
The following example configures some parameters associated with the remote Bluetooth scanner:
--&gt;
&lt;META HTTP-Equiv="Scanner" Content="Enabled"&gt;
&lt;META HTTP-Equiv="RSM" Content="BluetoothAuthentication:True"&gt;
&lt;META HTTP-Equiv="RSM" Content="BluetoothPincode:5678"&gt;
&lt;META HTTP-Equiv="RSM" Content="BluetoothReconnectAttempts:6"&gt;
&lt;META HTTP-Equiv="RSM" Content="BluetoothBeepOnReconnectAttempt:True"&gt;
&lt;META HTTP-Equiv="RSM" Content="BluetoothPINCodeType:UseStored"&gt;
&lt;META HTTP-Equiv="RSM" Content="BluetoothAutoReconnect:OnPowerOutOfRange"&gt;
</textarea></div>
<p>The following example retrieves some attributes of the Bluetooth Scanner:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;SCRIPT TYPE="TEXT/JAVASCRIPT"&gt;
function RSMNav(attributeArray)
{
//  Receive array of attribute values in the order they were registered and populate SPAN tags.
var spanID;
var spanElement;
for(i=0; i &lt; attributeArray.length; i++)
{
spanID = "Span" + (i+1);
spanElement = document.getElementById(spanID);
spanElement.innerText = attributeArray[i];
}
}
function onTest()
{
var Generic = new ActiveXObject("PocketBrowser.Generic");
//Invoke some attributes to be returned 
Generic.InvokeMETAFunction('RSM', 'ModelNumber'); //  Array Index 0
Generic.InvokeMETAFunction('RSM', 'SerialNumber');			
Generic.InvokeMETAFunction('RSM', 'BluetoothAddress');		
Generic.InvokeMETAFunction('RSM', 'BluetoothPINcode');
Generic.InvokeMETAFunction('RSM', 'BluetoothFriendlyName');
Generic.InvokeMETAFunction('RSM', 'ProximityEnable'); //  Array Index 5
//  Finally Invoke the Navigation, this will call RSMNav with the array of parameters we have registered for above.
Generic.InvokeMETAFunction('RSM', "RsmGetEvent:url('JavaScript:RSMNav(%s);')");
}
&lt;/SCRIPT&gt;
&lt;HTML&gt;
&lt;HEAD&gt;
&lt;META HTTP-Equiv="reloadbutton" content="show"&gt;
&lt;!-- Scanner must be enabled to use RSM functionality --&gt;
&lt;META HTTP-Equiv="Scanner" Content="Enabled:SCN2"&gt;
&lt;/HEAD&gt;
&lt;BODY&gt;
&lt;a href="javascript:onTest()"&gt;Get Values&lt;/a&gt;&lt;br&gt;
Model Number: &lt;span id=Span1&gt;&lt;/span&gt;&lt;br&gt;
Serial Number: &lt;span id=Span2&gt;&lt;/span&gt;&lt;br&gt;
BT Address: &lt;span id=Span3&gt;&lt;/span&gt;&lt;br&gt;
BT PINcode: &lt;span id=Span4&gt;&lt;/span&gt;&lt;br&gt;
BT Friendly Name: &lt;span id=Span5&gt;&lt;/span&gt;&lt;br&gt;
Proximity Enable: &lt;span id=Span6&gt;&lt;/span&gt;&lt;br&gt;
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EIC');">
			Copy example to clipboard
		</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EIC">&lt;!-- 
The following example retrieves some attributes of the Bluetooth Scanner:
--&gt;
&lt;SCRIPT TYPE="TEXT/JAVASCRIPT"&gt;
function RSMNav(attributeArray)
{
//  Receive array of attribute values in the order they were registered and populate SPAN tags.
var spanID;
var spanElement;
for(i=0; i &lt; attributeArray.length; i++)
{
spanID = "Span" + (i+1);
spanElement = document.getElementById(spanID);
spanElement.innerText = attributeArray[i];
}
}
function onTest()
{
var Generic = new ActiveXObject("PocketBrowser.Generic");
//Invoke some attributes to be returned 
Generic.InvokeMETAFunction('RSM', 'ModelNumber'); //  Array Index 0
Generic.InvokeMETAFunction('RSM', 'SerialNumber');			
Generic.InvokeMETAFunction('RSM', 'BluetoothAddress');		
Generic.InvokeMETAFunction('RSM', 'BluetoothPINcode');
Generic.InvokeMETAFunction('RSM', 'BluetoothFriendlyName');
Generic.InvokeMETAFunction('RSM', 'ProximityEnable'); //  Array Index 5
//  Finally Invoke the Navigation, this will call RSMNav with the array of parameters we have registered for above.
Generic.InvokeMETAFunction('RSM', "RsmGetEvent:url('JavaScript:RSMNav(%s);')");
}
&lt;/SCRIPT&gt;
&lt;HTML&gt;
&lt;HEAD&gt;
&lt;META HTTP-Equiv="reloadbutton" content="show"&gt;
&lt;!-- Scanner must be enabled to use RSM functionality --&gt;
&lt;META HTTP-Equiv="Scanner" Content="Enabled:SCN2"&gt;
&lt;/HEAD&gt;
&lt;BODY&gt;
&lt;a href="javascript:onTest()"&gt;Get Values&lt;/a&gt;&lt;br&gt;
Model Number: &lt;span id=Span1&gt;&lt;/span&gt;&lt;br&gt;
Serial Number: &lt;span id=Span2&gt;&lt;/span&gt;&lt;br&gt;
BT Address: &lt;span id=Span3&gt;&lt;/span&gt;&lt;br&gt;
BT PINcode: &lt;span id=Span4&gt;&lt;/span&gt;&lt;br&gt;
BT Friendly Name: &lt;span id=Span5&gt;&lt;/span&gt;&lt;br&gt;
Proximity Enable: &lt;span id=Span6&gt;&lt;/span&gt;&lt;br&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef"></DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The following is a mapping between Attributes, their possible values and whether they are read / write:</DIV>
<pre style="font-family:courier;font-size:small;">
Attribute                      Access  Associated Value
ScanLineWidth                    RW    The laser scan line width, 'Wide' or 'Narrow'.
DecodeFeedback                   RW    The remote scanner beeps and illuminates its green LED on a 
                           successful decode.  'Enabled' or 'Disabled'.
ModelNumber                      R     The model number    
SerialNumber                     R     The serial number    
DateOfManufacture                R     Date of manufacture as DDMMYY    
DateOfService                    R     Date of service as DDMMYY    
BluetoothAddress                 R     Bluetooth address as FF:FF:FF:FF:FF:FF where FF is a hex number.    
BluetoothAuthentication          RW    'True' if authentication is required, else 'False'    
BluetoothEncryption              RW    True' if encryption is required, else 'False'    
BluetoothPINcode                 RW    Up to 5 character PIN code used for Bluetooth authentication    
BluetoothReconnectAttempts       RW    How long the scanner tries to re-establish connection if it goes 
                           out of range, in seconds.  This value must be a multiple of 5
                           and in the range 30 to 60 seconds.
BluetoothBeepOnReconnectAttempt  RW    When 'True' scanner will emit 5 beeps every 5 seconds whilst 
                           re-connection in progress, else 'False'    
BluetoothHIDAutoReconnect        RW    'NeverReconnect', 'ReconnectOnData' or 'ReconnectImmediately'    
BluetoothFriendlyName            RW    Friendly Bluetooth name, e.g. 'MyBTScanner'    
BluetoothPINCodeType             RW    'PromptUser' to prompt the user for the PIN code or 'UseStored' to 
                           use the code stored in memory.    
BluetoothInquiryMode             RW    'General' to use a general inquiry mode, else 'Limited'    
IgnoreCode128USPS                RW    Feature for ignoring Code 128 barcodes beginning with 420 and 421,
                           'Enabled' or 'Disabled' 
Mems                             RW    Mems scanner 'Enabled' or 'Disabled'    
ProximityEnable                  RW    Proximity feature 'Enabled' or 'Disabled'    
ProximityDistance                RW    Specify the distance for the proximity feature as 'Short', 'Medium' 
                           or 'Long'    
PagingEnable                     RW    Specify whether paging the device is 'Enabled' or 'Disabled'    
PagingBeepSequence               RW    Range '0' to '15' to specify the pattern for the paging beep 
                           sequence.    
LowBatteryIndication             RW    Low battery indication 'Enabled' or 'Disabled'    
ScanTriggerWakeup                RW    Scanner trigger will wakeup the device from a low power state, 
                           'Enabled' or 'Disabled'    
BluetoothAutoReconnect           RW    Bluetooth reconnection scheme: 
                             'None' - No scheme
                             'OnPower' - when powered on
                             'OnOutofRange' - when device goes out of range
                             'OnPowerOutofRange' - when powered on or when device goes out
                             of range.    
LowBatteryIndicationCycle        RW    Low battery indication cycle time, in seconds 
                           ('10', '20', '30', '40' or '50').   
ProximityContinuous              RW    Proximity continuous mode 'Enabled' or 'Disabled'
GoodScansDelay                   RW    Delay between good scans in proximity continuous mode, measured in miliseconds.
                           Range 0 to 15000.  This value must be a multiple of 100.										 
PagingActivate                   W     'Start' or 'Stop' paging to the scanner.
BTDisconnect                     W     Command scanner to disconnect from its connected device.
BTUnpair                         W     Command scanner to unpair from its paired device.  Allows scanner to associate
                           with a different device.
FirmwareVersion                  R     Scanner's operating system version.    
DeviceClass                      R     The device class of the system    
BatteryStatus                    R     Indicates the status us the scanner's battery, 'Unknown', 'Full', 
                           'Medium', 'Empty', 'Charging-FullRate', 'Charging-HalfRate', 
                           'Charging-Trickle' or 'Discharging'    
BatteryCapacity                  R     Remaining capacity of the battery, integer in the range '0' to 
                           '100'.  'Unknown' if unable to determine, e.g. if no battery in the scanner.    
BatteryID                        R     'Simple', 'Double', 'Cabled', 'Unknown'    
</pre>
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
<td>This tag is persistent.</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>This tag requires appropriate hardware to run, i.e. a remote scanner and a device which supports it.</td>
</tr>
</table>
</blockquote><br>
</div>
