---
title: Gesture Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Gesture Meta Tag is used to define and capture gestures drawn on a touch-sensitive screen. Multiple gestures can be defined for capture on a single page. Zebra recommends defining no more than five gestures per page to avoid performance issues. **Note**: Not supported on Windows CE if debug buttons are enabled in the `Config.xml` file of an Enterprise Browser app.

There are three types of screen gestures:

**Linear –** straight-line movements on the screen
**Circle –** full or partially circular movements on the screen
**Hold –** when the screen is touched and held


<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Gesture (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Gesture" content="[method / parameter&gt;</pre>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Gesture" contents="Detected:url('[jsFunction | url]')"&gt;</p>
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
<td valign="top" class="clsSyntaxCells"><b>Create</b></td>
<td valign="top" class="clsSyntaxCells">Creates the previously defined gesture. Must be the last tag when creating a gesture.</td>
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
The Gesture META Tag is used to define touch screen.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Create"&gt; --&gt;      &lt;!-- Creates the previously defined gesture. Must be the last tag when creating a gesture. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The Gesture META Tag is used to define touch screen.
*/

function doGestureInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Gesture', 'Create');      /* Creates the previously defined gesture. Must be the last tag when creating a gesture. */

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
<td valign="top" class="clsSyntaxCells"><b>Type:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">Linear, Circle, Hold</td>
<td valign="top" class="clsSyntaxCells">Specifies the type of gesture being created. Must be the first tag when creating a gesture.</td>
<td valign="top" class="clsSyntaxCells">None</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>ID:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">Any string</td>
<td valign="top" class="clsSyntaxCells">ID used to identify gesture when detected.</td>
<td valign="top" class="clsSyntaxCells">Depends on gesture type and preset used, if any. See remarks.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Preset:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">Depends on gesture type. See remarks.</td>
<td valign="top" class="clsSyntaxCells">Name of predefined set of parameter values.</td>
<td valign="top" class="clsSyntaxCells">Depends on gesture type. See remarks.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Diagnostics:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">TRUE, FALSE</td>
<td valign="top" class="clsSyntaxCells">Enables drawing of diagnostic information to provide guidance showing whether or not the gesture will be detected.  Note that by their very nature Diagnostics are not designed to be seen by the user.</td>
<td valign="top" class="clsSyntaxCells">FALSE</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>LINEAR GESTURE PARAMETERS</b></td>
<td valign="top" class="clsSyntaxCells"></td>
<td valign="top" class="clsSyntaxCells"></td>
<td valign="top" class="clsSyntaxCells"></td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Start-X, Start-Y:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">0 to 10000</td>
<td valign="top" class="clsSyntaxCells">Starting point of gesture.</td>
<td valign="top" class="clsSyntaxCells">10% of screen width, 50% of screen height.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>End-X, End-Y:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">0 to 10000</td>
<td valign="top" class="clsSyntaxCells">End point of gesture.</td>
<td valign="top" class="clsSyntaxCells">90% of screen width, 50% of screen height.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Tolerance:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">0 to 10000</td>
<td valign="top" class="clsSyntaxCells">How far (in pixels) the mouse track can vary from the gesture path.</td>
<td valign="top" class="clsSyntaxCells">25% of screen height.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Sensitivity:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">0 to 100</td>
<td valign="top" class="clsSyntaxCells">Percentage of gesture path which mouse track must cover. Rounds down if this results in a non-whole number of regions.</td>
<td valign="top" class="clsSyntaxCells">50</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Skew:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">0 to 90</td>
<td valign="top" class="clsSyntaxCells">Maximum angle which straight line through mouse track can make to the gesture path.</td>
<td valign="top" class="clsSyntaxCells">20</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Deviation:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">0 to 100</td>
<td valign="top" class="clsSyntaxCells">Maximum deviation of mouse track from a straight line.</td>
<td valign="top" class="clsSyntaxCells">20</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Region-Width:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">0 to 10000</td>
<td valign="top" class="clsSyntaxCells">Width of regions into which gesture path is divided. Setting very small (e.g. 1) or large (e.g. equal to the gesture line length) values is allowed but may lead to unexpected results.</td>
<td valign="top" class="clsSyntaxCells">10% of screen width.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>CIRCLE GESTURE PARAMETERS</b></td>
<td valign="top" class="clsSyntaxCells"></td>
<td valign="top" class="clsSyntaxCells"></td>
<td valign="top" class="clsSyntaxCells"></td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Center-X, Center-Y:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">-10000 to 10000</td>
<td valign="top" class="clsSyntaxCells">Center of gesture.</td>
<td valign="top" class="clsSyntaxCells">Center of screen.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Radius:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">1 to 10000</td>
<td valign="top" class="clsSyntaxCells">Radius (in pixels) of gesture.</td>
<td valign="top" class="clsSyntaxCells">33% of screen width or height, whichever is smaller.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Start:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">0 to 10000</td>
<td valign="top" class="clsSyntaxCells">Starting angle of gesture in degrees. Angles are measured clockwise from 3 o'clock position.</td>
<td valign="top" class="clsSyntaxCells">0</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>End:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">0 to 10000</td>
<td valign="top" class="clsSyntaxCells">Ending angle of gesture in degrees. Angles are measured clockwise from 3 o'clock position.</td>
<td valign="top" class="clsSyntaxCells">180</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Tolerance:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">0 to 10000</td>
<td valign="top" class="clsSyntaxCells">How far (in pixels) the mouse track can vary from the gesture path.</td>
<td valign="top" class="clsSyntaxCells">16% of screen width.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Sensitivity:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">0 to 100</td>
<td valign="top" class="clsSyntaxCells">Percentage of gesture path which mouse track must cover. Rounds down if this results in a non-whole number of regions.</td>
<td valign="top" class="clsSyntaxCells">50</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>HOLD GESTURE PARAMETERS</b></td>
<td valign="top" class="clsSyntaxCells"></td>
<td valign="top" class="clsSyntaxCells"></td>
<td valign="top" class="clsSyntaxCells"></td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Center-X, Center-Y:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">-10000 to 10000</td>
<td valign="top" class="clsSyntaxCells">Center of gesture.</td>
<td valign="top" class="clsSyntaxCells">Center of screen.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Radius:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">1 to 10000</td>
<td valign="top" class="clsSyntaxCells">Radius (in pixels) of gesture.</td>
<td valign="top" class="clsSyntaxCells">25% of screen width or height, whichever is smaller.</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Delay:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">&gt;=0</td>
<td valign="top" class="clsSyntaxCells">Time (in milliseconds) that screen must be touched within gesture before first detected.</td>
<td valign="top" class="clsSyntaxCells">1000</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Interval:[Value]
		</b></td>
<td valign="top" class="clsSyntaxCells">&gt;=0</td>
<td valign="top" class="clsSyntaxCells">Time (in milliseconds) between subsequent detections while screen continues to be touched. Zero means no further detections.  This parameter is ignored if the detection event is not set to a Javascript function.</td>
<td valign="top" class="clsSyntaxCells">0</td>
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
The Gesture META Tag is used to define touch screen.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Type:[Value]"&gt; --&gt;      &lt;!-- Specifies the type of gesture being created. Must be the first tag when creating a gesture. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="ID:[Value]"&gt; --&gt;      &lt;!-- ID used to identify gesture when detected. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Preset:[Value]"&gt; --&gt;      &lt;!-- Name of predefined set of parameter values. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Diagnostics:[Value]"&gt; --&gt;      &lt;!-- Enables drawing of diagnostic information to provide guidance showing whether or not the gesture will be detected.  Note that by their very nature Diagnostics are not designed to be seen by the user. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="LINEAR GESTURE PARAMETERS:[Value]"&gt; --&gt;      &lt;!--  --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Start-X, Start-Y:[Value]"&gt; --&gt;      &lt;!-- Starting point of gesture. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="End-X, End-Y:[Value]"&gt; --&gt;      &lt;!-- End point of gesture. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Tolerance:[Value]"&gt; --&gt;      &lt;!-- How far (in pixels) the mouse track can vary from the gesture path. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Sensitivity:[Value]"&gt; --&gt;      &lt;!-- Percentage of gesture path which mouse track must cover. Rounds down if this results in a non-whole number of regions. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Skew:[Value]"&gt; --&gt;      &lt;!-- Maximum angle which straight line through mouse track can make to the gesture path. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Deviation:[Value]"&gt; --&gt;      &lt;!-- Maximum deviation of mouse track from a straight line. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Region-Width:[Value]"&gt; --&gt;      &lt;!-- Width of regions into which gesture path is divided. Setting very small (e.g. 1) or large (e.g. equal to the gesture line length) values is allowed but may lead to unexpected results. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="CIRCLE GESTURE PARAMETERS:[Value]"&gt; --&gt;      &lt;!--  --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Center-X, Center-Y:[Value]"&gt; --&gt;      &lt;!-- Center of gesture. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Radius:[Value]"&gt; --&gt;      &lt;!-- Radius (in pixels) of gesture. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Start:[Value]"&gt; --&gt;      &lt;!-- Starting angle of gesture in degrees. Angles are measured clockwise from 3 o'clock position. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="End:[Value]"&gt; --&gt;      &lt;!-- Ending angle of gesture in degrees. Angles are measured clockwise from 3 o'clock position. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Tolerance:[Value]"&gt; --&gt;      &lt;!-- How far (in pixels) the mouse track can vary from the gesture path. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Sensitivity:[Value]"&gt; --&gt;      &lt;!-- Percentage of gesture path which mouse track must cover. Rounds down if this results in a non-whole number of regions. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="HOLD GESTURE PARAMETERS:[Value]"&gt; --&gt;      &lt;!--  --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Center-X, Center-Y:[Value]"&gt; --&gt;      &lt;!-- Center of gesture. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Radius:[Value]"&gt; --&gt;      &lt;!-- Radius (in pixels) of gesture. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Delay:[Value]"&gt; --&gt;      &lt;!-- Time (in milliseconds) that screen must be touched within gesture before first detected. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Interval:[Value]"&gt; --&gt;      &lt;!-- Time (in milliseconds) between subsequent detections while screen continues to be touched. Zero means no further detections.  This parameter is ignored if the detection event is not set to a Javascript function. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The Gesture META Tag is used to define touch screen.
*/

function doGestureInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Gesture', 'Type:[Value]');      /* Specifies the type of gesture being created. Must be the first tag when creating a gesture. */
//objGeneric.InvokeMETAFunction('Gesture', 'ID:[Value]');      /* ID used to identify gesture when detected. */
//objGeneric.InvokeMETAFunction('Gesture', 'Preset:[Value]');      /* Name of predefined set of parameter values. */
//objGeneric.InvokeMETAFunction('Gesture', 'Diagnostics:[Value]');      /* Enables drawing of diagnostic information to provide guidance showing whether or not the gesture will be detected.  Note that by their very nature Diagnostics are not designed to be seen by the user. */
//objGeneric.InvokeMETAFunction('Gesture', 'LINEAR GESTURE PARAMETERS:[Value]');      /*  */
//objGeneric.InvokeMETAFunction('Gesture', 'Start-X, Start-Y:[Value]');      /* Starting point of gesture. */
//objGeneric.InvokeMETAFunction('Gesture', 'End-X, End-Y:[Value]');      /* End point of gesture. */
//objGeneric.InvokeMETAFunction('Gesture', 'Tolerance:[Value]');      /* How far (in pixels) the mouse track can vary from the gesture path. */
//objGeneric.InvokeMETAFunction('Gesture', 'Sensitivity:[Value]');      /* Percentage of gesture path which mouse track must cover. Rounds down if this results in a non-whole number of regions. */
//objGeneric.InvokeMETAFunction('Gesture', 'Skew:[Value]');      /* Maximum angle which straight line through mouse track can make to the gesture path. */
//objGeneric.InvokeMETAFunction('Gesture', 'Deviation:[Value]');      /* Maximum deviation of mouse track from a straight line. */
//objGeneric.InvokeMETAFunction('Gesture', 'Region-Width:[Value]');      /* Width of regions into which gesture path is divided. Setting very small (e.g. 1) or large (e.g. equal to the gesture line length) values is allowed but may lead to unexpected results. */
//objGeneric.InvokeMETAFunction('Gesture', 'CIRCLE GESTURE PARAMETERS:[Value]');      /*  */
//objGeneric.InvokeMETAFunction('Gesture', 'Center-X, Center-Y:[Value]');      /* Center of gesture. */
//objGeneric.InvokeMETAFunction('Gesture', 'Radius:[Value]');      /* Radius (in pixels) of gesture. */
//objGeneric.InvokeMETAFunction('Gesture', 'Start:[Value]');      /* Starting angle of gesture in degrees. Angles are measured clockwise from 3 o'clock position. */
//objGeneric.InvokeMETAFunction('Gesture', 'End:[Value]');      /* Ending angle of gesture in degrees. Angles are measured clockwise from 3 o'clock position. */
//objGeneric.InvokeMETAFunction('Gesture', 'Tolerance:[Value]');      /* How far (in pixels) the mouse track can vary from the gesture path. */
//objGeneric.InvokeMETAFunction('Gesture', 'Sensitivity:[Value]');      /* Percentage of gesture path which mouse track must cover. Rounds down if this results in a non-whole number of regions. */
//objGeneric.InvokeMETAFunction('Gesture', 'HOLD GESTURE PARAMETERS:[Value]');      /*  */
//objGeneric.InvokeMETAFunction('Gesture', 'Center-X, Center-Y:[Value]');      /* Center of gesture. */
//objGeneric.InvokeMETAFunction('Gesture', 'Radius:[Value]');      /* Radius (in pixels) of gesture. */
//objGeneric.InvokeMETAFunction('Gesture', 'Delay:[Value]');      /* Time (in milliseconds) that screen must be touched within gesture before first detected. */
//objGeneric.InvokeMETAFunction('Gesture', 'Interval:[Value]');      /* Time (in milliseconds) between subsequent detections while screen continues to be touched. Zero means no further detections.  This parameter is ignored if the detection event is not set to a Javascript function. */

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
</p><br><DIV class="clsRef">Detected</DIV>
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
<td class="clsSyntaxCells" valign="top"><b>ID</b></td>
<td class="clsSyntaxCells" style="text-align:left;">The ID string of the detected gesture.</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">2</td>
<td class="clsSyntaxCells" valign="top"><b>Count</b></td>
<td class="clsSyntaxCells" style="text-align:left;">The number of times a hold gesture has been detected for a single press of the screen. Returns zero when the screen touch stops. Only applies to hold gestures.</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0EYBAC">&lt;!-- &lt;META HTTP-Equiv="Gesture" Content="Detected:url('JavaScript:fnJSCallbackHandler('%1', '%2');')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0E3BAC">&lt;script&gt;
/*
function doGestureInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Gesture', 'Detected:url('JavaScript:fnJSCallbackHandler('%1', '%2');')');      /*  */

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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EYBAC');">
META Tags
</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E3BAC');">
Javascript
</nobr></td>
<td></td>
</tr>
</table><br><br></blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>
Create two gestures: a default left to right gesture with ID 'swipe', and a hold gesture at the top left
of the screen which will fire one time after 500 milliseconds with ID 'press'. The Javascript function onGesture()
is called when either gesture is detected.
</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="gesture" Content="type:linear"&gt;
&lt;META HTTP-Equiv="gesture" Content="id:swipe"&gt;
&lt;META HTTP-Equiv="gesture" Content="create"&gt;
&lt;META HTTP-Equiv="gesture" Content="type:hold"&gt;
&lt;META HTTP-Equiv="gesture" Content="center-x:60"&gt;
&lt;META HTTP-Equiv="gesture" Content="center-y:60"&gt;
&lt;META HTTP-Equiv="gesture" Content="radius:60"&gt;
&lt;META HTTP-Equiv="gesture" Content="delay:500"&gt;
&lt;META HTTP-Equiv="gesture" Content="interval:0"&gt;
&lt;META HTTP-Equiv="gesture" Content="id:press"&gt;
&lt;META HTTP-Equiv="gesture" Content="create"&gt;
&lt;META HTTP-Equiv="gesture-detected" Content="url('Javascript:onGesture('%s','%s');')"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E4DAC');">
Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0E4DAC">&lt;!-- 

Create two gestures: a default left to right gesture with ID 'swipe', and a hold gesture at the top left
of the screen which will fire one time after 500 milliseconds with ID 'press'. The Javascript function onGesture()
is called when either gesture is detected.
--&gt;
&lt;META HTTP-Equiv="gesture" Content="type:linear"&gt;
&lt;META HTTP-Equiv="gesture" Content="id:swipe"&gt;
&lt;META HTTP-Equiv="gesture" Content="create"&gt;
&lt;META HTTP-Equiv="gesture" Content="type:hold"&gt;
&lt;META HTTP-Equiv="gesture" Content="center-x:60"&gt;
&lt;META HTTP-Equiv="gesture" Content="center-y:60"&gt;
&lt;META HTTP-Equiv="gesture" Content="radius:60"&gt;
&lt;META HTTP-Equiv="gesture" Content="delay:500"&gt;
&lt;META HTTP-Equiv="gesture" Content="interval:0"&gt;
&lt;META HTTP-Equiv="gesture" Content="id:press"&gt;
&lt;META HTTP-Equiv="gesture" Content="create"&gt;
&lt;META HTTP-Equiv="gesture-detected" Content="url('Javascript:onGesture('%s','%s');')"&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Presets and IDs</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
The 'preset' tag is used to specify one of the preset values below. When a gesture definition is started
using the 'type' tag its parameters are initially set to the preset shown as default.
When a preset is specified for a gesture, including when it is first created, its ID is set to [gesture name]-[default preset name].
E.g. a new linear gesture will have the ID 'linear-left-right'. This can be replaced (as can any preset value) by a subsequent parameter tag.
</DIV>
<pre style="font-family:courier;font-size:small;">
GESTURE          POSSIBLE VALUES                                         DEFAULT
Linear           left-right, right-left, top-bottom, bottom-top          left-right
Circle           happy*, sad*                                            happy
Hold             center                                                  center
</pre>
<DIV class="clsRef">* Meanings of Presets</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
"Happy" means a 180 degree semi-circle, clockwise from the 3 o'clock position. "Sad" means a 180 degree semi-circle, clockwise from the 9 o'clock position.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Maximum Gesture Size</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
There is no formal maximum size for a gesture, for example a circle gesture could require the user to move several times round the circle. However if the user draws such a gesture very slowly it's possible that too many stylus move points could be generated, and the gesture wouldn't be detected. The plugin has been tested with a circle gesture from 0 to 720 degrees and taking approximately 6 seconds to draw without problem.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Common Pitfalls</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
Do not use alert boxes within the Gesture-Detected Callback, doing so will steal focus from the gesture region.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Out-of-range Values</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
Any parameter values out of the allowed range will be limited to the nearest allowed value. E.g. giving a sensitivy greater than 100 will use 100. Numeric parameters given as text will be treated as zero.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Diagnostics</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
Note that diagnostics exist only for the purpose of understanding and evaluating the various parameters. They should not be enabled in the release version of the code. They may also not display correctly in every circumstance, e.g. when scrolling, or for certain sets of parameters, e.g. for nearly vertical linear gestures.
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
<td>This tag will only persist on the current page.</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>Linear, Circle and Hold gestures require a touch screen.</td>
</tr>
</table>
</blockquote><br></div>
<div id="DefaultParamsSpan" style="display:none">
<pre><textarea id="DefaultParameters"></textarea></pre>
</div>
