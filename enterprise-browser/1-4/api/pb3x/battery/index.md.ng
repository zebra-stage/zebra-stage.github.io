---
title: Battery Meta Tag
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x APIs
---

The Battery Meta Tag is used to set the attributes of the battery indicator and retrieve battery status.

<html>
  <head>
    <META http-equiv="Content-Type" content="text/html; charset=utf-8">
    <style>
					body
					{
					font-family:verdana,arial,helvetica;
					font-size:x-small;
					margin:20;
					}
					h1
					{
					font-family:verdana,arial,helvetica;
					font-size:medium;
					font-weight:bold;
					}
					th
					{
					font-family:verdana,arial,helvetica;
					font-size:x-small;
					font-weight:bold;
					text-align:left;
					background-color:#CCCCCC;
					}
					td
					{
					font-family:verdana,arial,helvetica;
					font-size:x-small;
					text-align:left;
					}
					.clsRef
					{
					font-family:verdana,arial,helvetica;
					font-size:small;
					color:#003399;
					font-weight:bold;
					text-align:left;
					}
					.clsSyntax
					{
					font-family:courier;
					font-size:x-small;
					text-align:left;
					background-color:#ffffff;
					}
					.clsSyntaxHeadings
					{
					font-family:verdana,arial,helvetica;
					font-size:x-small;
					font-weight:bold;
					text-align:left;
					color:#000066;
					background-color:#efeff7;
					border-bottom: #c8cdde 1px solid;
					}
					.clsSyntaxCells
					{
					font-family:verdana,arial,helvetica;
					font-size:x-small;
					text-align:left;
					background-color:#f7f7ff;
					border-bottom: #d5d5d3 1px solid;
					}
				</style>
    <title>Battery</title><script type="text/javascript" language="Javascript">
					
					function ToggleSpan(SpanId, ImgID)
					{
						var path = '../Resources/'
					//Toggle the span view on or off
					var Rollup = document.all.item(SpanId);
					var RollupImg = document.all.item(ImgID);
					var ToggleExpand = path + 'ToggleExpand.gif';
					var ToggleCollapse = path + 'ToggleCollapse.gif';
					Rollup.style.display = (Rollup.style.display=='none' ? 'block' : 'none');
					RollupImg.src = (Rollup.style.display=='none' ? ToggleExpand : ToggleCollapse);
					}

					function CopyTemplate(sControl)
					{
					//Copy the template values held in the appropriate textarea to clipboard
					if (window.clipboardData)
					{
					window.clipboardData.setData("Text", document.all.item(sControl).value);
					}
					return false;
					}
					
				</script></head>
  <body topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" bgcolor="#ffffff" text="#000000">
    <hr size="1">
    <div id="SyntaxSpan" style="display:block">
      <blockquote>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <th class="clsSyntaxHeadings">Battery (META Tag) Syntax
						</th>
          </tr>
          <tr>
            <td class="clsSyntaxCells">
              <p>&lt;META HTTP-Equiv="Battery" content="[parameter]"&gt;</p>
            </td>
          </tr>
          <tr>
            <td class="clsSyntaxCells">
              <p>&lt;META HTTP-Equiv="Battery" content="BatteryEvent:url('[jsFunction | url]')"&gt;</p>
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
            <td valign="top" class="clsSyntaxCells"><b>GetSmartBatteryStatus</b></td>
            <td valign="top" class="clsSyntaxCells">Triggers a SmartBatteryEvent.  This returns attributes about the battery such as number of charge cycles and date of manufacture.</td>
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
The Battery META Tag is a tag used to set the attributes of the battery indicator and retrieve the status of the battery.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Battery" Content="GetSmartBatteryStatus"&gt; --&gt;      &lt;!-- Triggers a SmartBatteryEvent.  This returns attributes about the battery such as number of charge cycles and date of manufacture. --&gt;</textarea></div>
        <div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
   /*
   The Battery META Tag is a tag used to set the attributes of the battery indicator and retrieve the status of the battery.
   */

   function doBatteryInit()
   {
      var objGeneric = new ActiveXObject("PocketBrowser.Generic");

      //objGeneric.InvokeMETAFunction('Battery', 'GetSmartBatteryStatus');      /* Triggers a SmartBatteryEvent.  This returns attributes about the battery such as number of charge cycles and date of manufacture. */

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
            <td valign="top" class="clsSyntaxCells">Sets the horizontal position of the battery indicator in pixels.  If it is negative the then indicator will be moved off screen</td>
            <td valign="top" class="clsSyntaxCells">Top left of screen</td>
          </tr>
          <tr>
            <td valign="top" class="clsSyntaxCells"><b>Top:[Value]
													</b></td>
            <td valign="top" class="clsSyntaxCells">Pixel value</td>
            <td valign="top" class="clsSyntaxCells">Sets the vertical position of the battery indicator in pixels. if value is negative then indicator will be moved off screen</td>
            <td valign="top" class="clsSyntaxCells">Top left of screen</td>
          </tr>
          <tr>
            <td valign="top" class="clsSyntaxCells"><b>IconPosition:[Value]
													</b></td>
            <td valign="top" class="clsSyntaxCells">Left, Right, Top, Bottom</td>
            <td valign="top" class="clsSyntaxCells">Sets the position of indicator icon with respect to Graph position.  "Iconposition" and "Graphposition" combination must be a valid combination e.g both cannot be left.</td>
            <td valign="top" class="clsSyntaxCells">Bottom</td>
          </tr>
          <tr>
            <td valign="top" class="clsSyntaxCells"><b>GraphPosition:[Value]
													</b></td>
            <td valign="top" class="clsSyntaxCells">Left,Right,Top,Bottom</td>
            <td valign="top" class="clsSyntaxCells">Sets the direction towards which level bars will grow e.g if value is Left then level bars grow from right to left.  "Iconposition" and "Graphposition" combination must be a valid combination e.g both cannot be left.</td>
            <td valign="top" class="clsSyntaxCells">Right</td>
          </tr>
          <tr>
            <td valign="top" class="clsSyntaxCells"><b>Color:[Value]
													</b></td>
            <td valign="top" class="clsSyntaxCells">Hex Values (#000000 - #FFFFFF)</td>
            <td valign="top" class="clsSyntaxCells">RGB value that sets the color of the battery indicator using HTML web colors</td>
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
The Battery META Tag is a tag used to set the attributes of the battery indicator and retrieve the status of the battery.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Battery" Content="Visibility:[Value]"&gt; --&gt;      &lt;!-- Sets whether or not the battery indicator is shown --&gt;
&lt;!-- &lt;META HTTP-Equiv="Battery" Content="Left:[Value]"&gt; --&gt;      &lt;!-- Sets the horizontal position of the battery indicator in pixels.  If it is negative the then indicator will be moved off screen --&gt;
&lt;!-- &lt;META HTTP-Equiv="Battery" Content="Top:[Value]"&gt; --&gt;      &lt;!-- Sets the vertical position of the battery indicator in pixels. if value is negative then indicator will be moved off screen --&gt;
&lt;!-- &lt;META HTTP-Equiv="Battery" Content="IconPosition:[Value]"&gt; --&gt;      &lt;!-- Sets the position of indicator icon with respect to Graph position.  "Iconposition" and "Graphposition" combination must be a valid combination e.g both cannot be left. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Battery" Content="GraphPosition:[Value]"&gt; --&gt;      &lt;!-- Sets the direction towards which level bars will grow e.g if value is Left then level bars grow from right to left.  "Iconposition" and "Graphposition" combination must be a valid combination e.g both cannot be left. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Battery" Content="Color:[Value]"&gt; --&gt;      &lt;!-- RGB value that sets the color of the battery indicator using HTML web colors --&gt;</textarea></div>
        <div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
   /*
   The Battery META Tag is a tag used to set the attributes of the battery indicator and retrieve the status of the battery.
   */

   function doBatteryInit()
   {
      var objGeneric = new ActiveXObject("PocketBrowser.Generic");

      //objGeneric.InvokeMETAFunction('Battery', 'Visibility:[Value]');      /* Sets whether or not the battery indicator is shown */
      //objGeneric.InvokeMETAFunction('Battery', 'Left:[Value]');      /* Sets the horizontal position of the battery indicator in pixels.  If it is negative the then indicator will be moved off screen */
      //objGeneric.InvokeMETAFunction('Battery', 'Top:[Value]');      /* Sets the vertical position of the battery indicator in pixels. if value is negative then indicator will be moved off screen */
      //objGeneric.InvokeMETAFunction('Battery', 'IconPosition:[Value]');      /* Sets the position of indicator icon with respect to Graph position.  "Iconposition" and "Graphposition" combination must be a valid combination e.g both cannot be left. */
      //objGeneric.InvokeMETAFunction('Battery', 'GraphPosition:[Value]');      /* Sets the direction towards which level bars will grow e.g if value is Left then level bars grow from right to left.  "Iconposition" and "Graphposition" combination must be a valid combination e.g both cannot be left. */
      //objGeneric.InvokeMETAFunction('Battery', 'Color:[Value]');      /* RGB value that sets the color of the battery indicator using HTML web colors */

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
        </p><br><DIV class="clsRef">BatteryEvent</DIV>
        <DIV>The BatteryEvent gives an indication of the remaining battery level.  Once registered for you will receive a BatteryEvent at regular intervals, as specified by the BatteryRefresh configuration setting.</DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
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
            <td class="clsSyntaxCells" valign="top"><b>AC Line Status</b></td>
            <td class="clsSyntaxCells" style="text-align:left;">The AC line status (whether or not on external power).</td>
          </tr>
          <tr>
            <td class="clsSyntaxCells" valign="top">2</td>
            <td class="clsSyntaxCells" valign="top"><b>Battery Life Percent</b></td>
            <td class="clsSyntaxCells" style="text-align:left;">Remaining battery power as a percentage.</td>
          </tr>
          <tr>
            <td class="clsSyntaxCells" valign="top">3</td>
            <td class="clsSyntaxCells" valign="top"><b>Backup Battery Life Percent</b></td>
            <td class="clsSyntaxCells" style="text-align:left;">Remaining backup battery power as a percentage.</td>
          </tr>
        </table>
        <div style="display:none"><textarea id="ID0EPD">&lt;!-- &lt;META HTTP-Equiv="Battery" Content="BatteryEvent:url('JavaScript:fnJSCallbackHandler('%1', '%2', '%3');')"&gt; --&gt;</textarea></div>
        <div style="display:none"><textarea rows="20" cols="200" id="ID0EVD">&lt;script&gt;
   /*
   function doBatteryInit()
   {
      var objGeneric = new ActiveXObject("PocketBrowser.Generic");

      //objGeneric.InvokeMETAFunction('Battery', 'BatteryEvent:url('JavaScript:fnJSCallbackHandler('%1', '%2', '%3');')');      /* The BatteryEvent gives an indication of the remaining battery level.  Once registered for you will receive a BatteryEvent at regular intervals, as specified by the BatteryRefresh configuration setting. */

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
            <td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EPD');">
									META Tags
								</nobr></td>
            <td></td>
            <td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EVD');">
									Javascript
								</nobr></td>
            <td></td>
          </tr>
        </table><br><br><DIV class="clsRef">SmartBatteryEvent</DIV>
        <DIV>Returns various parameters relating to battery charge and battery hardware.  Not all return values may be supported by all batteries.</DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
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
            <td class="clsSyntaxCells" valign="top"><b>Serial Number</b></td>
            <td class="clsSyntaxCells" style="text-align:left;">The serial number of the battery</td>
          </tr>
          <tr>
            <td class="clsSyntaxCells" valign="top">2</td>
            <td class="clsSyntaxCells" valign="top"><b>Part Number</b></td>
            <td class="clsSyntaxCells" style="text-align:left;">The part number of the battery, e.g. 21-65587 Rev. A</td>
          </tr>
          <tr>
            <td class="clsSyntaxCells" valign="top">3</td>
            <td class="clsSyntaxCells" valign="top"><b>Battery Charge Cycles</b></td>
            <td class="clsSyntaxCells" style="text-align:left;">The number of times the battery has been charged.  Partial charges are aggregated, therefore each charge cycle count represents one full charge / discharge cycle.  The battery charge cycle count gets updated when the battery charging state changes from charging to not charging.  Cycle count may not accuratley predict the life of a battery.</td>
          </tr>
          <tr>
            <td class="clsSyntaxCells" valign="top">4</td>
            <td class="clsSyntaxCells" valign="top"><b>Rated Capacity</b></td>
            <td class="clsSyntaxCells" style="text-align:left;">Rated capacity of the battery in mAh</td>
          </tr>
          <tr>
            <td class="clsSyntaxCells" valign="top">5</td>
            <td class="clsSyntaxCells" valign="top"><b>Manufacture Date</b></td>
            <td class="clsSyntaxCells" style="text-align:left;">Date the battery was manufactured expressed as MM/DD/YYYY.</td>
          </tr>
          <tr>
            <td class="clsSyntaxCells" valign="top">6</td>
            <td class="clsSyntaxCells" valign="top"><b>State Of Health</b></td>
            <td class="clsSyntaxCells" style="text-align:left;">"Healthy", "Unhealthy" or "Unknown"</td>
          </tr>
        </table>
        <div style="display:none"><textarea id="ID0ELE">&lt;!-- &lt;META HTTP-Equiv="Battery" Content="SmartBatteryEvent:url('JavaScript:fnJSCallbackHandler('%1', '%2', '%3', '%4', '%5', '%6');')"&gt; --&gt;</textarea></div>
        <div style="display:none"><textarea rows="20" cols="200" id="ID0ERE">&lt;script&gt;
   /*
   function doBatteryInit()
   {
      var objGeneric = new ActiveXObject("PocketBrowser.Generic");

      //objGeneric.InvokeMETAFunction('Battery', 'SmartBatteryEvent:url('JavaScript:fnJSCallbackHandler('%1', '%2', '%3', '%4', '%5', '%6');')');      /* Returns various parameters relating to battery charge and battery hardware.  Not all return values may be supported by all batteries. */

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
            <td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0ELE');">
									META Tags
								</nobr></td>
            <td></td>
            <td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0ERE');">
									Javascript
								</nobr></td>
            <td></td>
          </tr>
        </table><br><br></blockquote><br></div>
    <div id="ExamplesSpan" style="display:block">
      <blockquote>
        <p>The following example shows the battery indicator, sets the x and y co-ordinates to 50, the color of the indicator to red and positions the indicator at the bottom of the screen growing from right to left:</p>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <td>
              <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="battery" Content="visibility:visible"&gt;
&lt;META HTTP-Equiv="battery" Content="Left:50"&gt;
&lt;META HTTP-Equiv="battery" Content="Top:50"&gt;
&lt;META HTTP-Equiv="battery" Content="IconPosition:Bottom;Iconposition:right"&gt;
&lt;META HTTP-Equiv="battery" Content="Color:#FF0000"&gt;   
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
The following example shows the battery indicator, sets the x and y co-ordinates to 50, the color of the indicator to red and positions the indicator at the bottom of the screen growing from right to left:
--&gt;

&lt;META HTTP-Equiv="battery" Content="visibility:visible"&gt;
&lt;META HTTP-Equiv="battery" Content="Left:50"&gt;
&lt;META HTTP-Equiv="battery" Content="Top:50"&gt;
&lt;META HTTP-Equiv="battery" Content="IconPosition:Bottom;Iconposition:right"&gt;
&lt;META HTTP-Equiv="battery" Content="Color:#FF0000"&gt;   
</textarea></div>
        <p>Example shown above can also be written as shown below </p>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <td>
              <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="Battery" Content="Left:50;Top:50;IconPosition:Bottom;Iconposition:right;color:#FF0000;visibility:visible"&gt;
</pre>
            </td>
          </tr>
        </table>
        <table cellspacing="1" cellpadding="3" width="95%">
          <col width="85%">
          <col width="15%">
          <tr align="right">
            <td></td>
            <td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EGG');">
									Copy example to clipboard
								</nobr></td>
          </tr>
        </table>
        <div id="Examples" style="display:none"><textarea id="ID0EGG">&lt;!-- 
Example shown above can also be written as shown below 
--&gt;

&lt;META HTTP-Equiv="Battery" Content="Left:50;Top:50;IconPosition:Bottom;Iconposition:right;color:#FF0000;visibility:visible"&gt;
</textarea></div>
        <p>Parameters can also be concatenated as shown below</p>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <td>
              <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="Battery-Left" Content="Left:50"&gt;
&lt;META HTTP-Equiv="Battery-Top" Content="Top:50"&gt;
&lt;META HTTP-Equiv="Battery-Color" Content="Color:#FF0000"&gt;
</pre>
            </td>
          </tr>
        </table>
        <table cellspacing="1" cellpadding="3" width="95%">
          <col width="85%">
          <col width="15%">
          <tr align="right">
            <td></td>
            <td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0ENG');">
									Copy example to clipboard
								</nobr></td>
          </tr>
        </table>
        <div id="Examples" style="display:none"><textarea id="ID0ENG">&lt;!-- 
Parameters can also be concatenated as shown below
--&gt;

&lt;META HTTP-Equiv="Battery-Left" Content="Left:50"&gt;
&lt;META HTTP-Equiv="Battery-Top" Content="Top:50"&gt;
&lt;META HTTP-Equiv="Battery-Color" Content="Color:#FF0000"&gt;
</textarea></div>
        <p>The following example navigates to a new page with parameters upon a battery status change.</p>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <td>
              <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="Battery" Content="BatteryEvent:url('mypage.asp?Data=%s&amp;Source=%s&amp;Type=%s&amp;Time=%s&amp;Length=%s')"&gt;
</pre>
            </td>
          </tr>
        </table>
        <table cellspacing="1" cellpadding="3" width="95%">
          <col width="85%">
          <col width="15%">
          <tr align="right">
            <td></td>
            <td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EUG');">
									Copy example to clipboard
								</nobr></td>
          </tr>
        </table>
        <div id="Examples" style="display:none"><textarea id="ID0EUG">&lt;!-- 
The following example navigates to a new page with parameters upon a battery status change.
--&gt;

&lt;META HTTP-Equiv="Battery" Content="BatteryEvent:url('mypage.asp?Data=%s&amp;Source=%s&amp;Type=%s&amp;Time=%s&amp;Length=%s')"&gt;
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
      </blockquote><br></div>
    <div id="DefaultParamsSpan" style="display:none">
      <pre><textarea id="DefaultParameters"></textarea></pre>
    </div>
    <div id="AlsoSpan" style="display:block">
      <BLOCKQUOTE><a href="./Signal.html&#xA;						">Signal</a> <a href="../Getting%20Started/IndicatorPositions.html&#xA;						">IndicatorPositions</a>  </BLOCKQUOTE><br></div>
    <hr size="1">
    <div align="right">© 2016 Symbol Technologies, Inc. All rights reserved.</div>
  </body>
</html>
