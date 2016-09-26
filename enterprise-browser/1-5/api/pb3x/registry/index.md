---
title: Registry Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Registry Meta Tag is used to write and delete registry settings, and to create corresponding merge files.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Registry (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="registry" content="[parameter&gt;</pre>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="registry" content="[parameter:attribute&gt;</pre>
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
<td valign="top" class="clsSyntaxCells"><b>delete</b></td>
<td valign="top" class="clsSyntaxCells">Deletes the setting.</td>
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
The Registry META Tag is used to write and delete registry settings, and create corresponding merge files.
--&gt;
&lt;!-- &lt;META HTTP-Equiv="Registry" Content="delete"&gt; --&gt;      &lt;!-- Deletes the setting. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The Registry META Tag is used to write and delete registry settings, and create corresponding merge files.
*/

function doRegistryInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Registry', 'delete');      /* Deletes the setting. */

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
<td valign="top" class="clsSyntaxCells"><b>hive:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">HKLM, HKCU, HKCR or HKU</td>
<td valign="top" class="clsSyntaxCells">Name of the root hive.</td>
<td valign="top" class="clsSyntaxCells">None</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>key:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Any string</td>
<td valign="top" class="clsSyntaxCells">Full path of the key, including '\' separators as required.  Remember to use '\\' in Javascript to specify backslash whereas just a single '\' should be used in META tags.</td>
<td valign="top" class="clsSyntaxCells">None</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>setting:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Any string</td>
<td valign="top" class="clsSyntaxCells">Name of the setting.</td>
<td valign="top" class="clsSyntaxCells">None</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>type:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">DWORD, STRING, BINARY or MULTISZ</td>
<td valign="top" class="clsSyntaxCells">Data type of the setting.</td>
<td valign="top" class="clsSyntaxCells">None</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>persistent:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">TRUE or FALSE</td>
<td valign="top" class="clsSyntaxCells">Whether to create the corresponding merge file.</td>
<td valign="top" class="clsSyntaxCells">FALSE</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>value:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Valid string for the setting type specified - see remarks</td>
<td valign="top" class="clsSyntaxCells">Value for the setting.</td>
<td valign="top" class="clsSyntaxCells">None</td>
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
The Registry META Tag is used to write and delete registry settings, and create corresponding merge files.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Registry" Content="hive:[Value]"&gt; --&gt;      &lt;!-- Name of the root hive. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Registry" Content="key:[Value]"&gt; --&gt;      &lt;!-- Full path of the key, including '\' separators as required.  Remember to use '\\' in Javascript to specify backslash whereas just a single '\' should be used in META tags. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Registry" Content="setting:[Value]"&gt; --&gt;      &lt;!-- Name of the setting. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Registry" Content="type:[Value]"&gt; --&gt;      &lt;!-- Data type of the setting. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Registry" Content="persistent:[Value]"&gt; --&gt;      &lt;!-- Whether to create the corresponding merge file. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Registry" Content="value:[Value]"&gt; --&gt;      &lt;!-- Value for the setting. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The Registry META Tag is used to write and delete registry settings, and create corresponding merge files.
*/
function doRegistryInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Registry', 'hive:[Value]');      /* Name of the root hive. */
//objGeneric.InvokeMETAFunction('Registry', 'key:[Value]');      /* Full path of the key, including '\' separators as required.  Remember to use '\\' in Javascript to specify backslash whereas just a single '\' should be used in META tags. */
//objGeneric.InvokeMETAFunction('Registry', 'setting:[Value]');      /* Name of the setting. */
//objGeneric.InvokeMETAFunction('Registry', 'type:[Value]');      /* Data type of the setting. */
//objGeneric.InvokeMETAFunction('Registry', 'persistent:[Value]');      /* Whether to create the corresponding merge file. */
//objGeneric.InvokeMETAFunction('Registry', 'value:[Value]');      /* Value for the setting. */
}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>
The tags below add a registry setting called 'PocketBrowser' in the 'Software' key of the
HKEY_LOCAL_MACHINE hive.
The setting is of type 'multisz' and has the values 'hello' and 'world'. The corresponding
.reg merge file will be created in the \Application folder.
</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="registry" Content="hive:hklm"&gt;
&lt;META HTTP-Equiv="registry" Content="key:Software"&gt;
&lt;META HTTP-Equiv="registry" Content="setting:PocketBrowser"&gt;
&lt;META HTTP-Equiv="registry" Content="type:multisz"&gt;
&lt;META HTTP-Equiv="registry" Content="persistent:true"&gt;
&lt;META HTTP-Equiv="registry" Content="value:hello\nworld"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EJE');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EJE">&lt;!-- 
The tags below add a registry setting called 'PocketBrowser' in the 'Software' key of the
HKEY_LOCAL_MACHINE hive.
The setting is of type 'multisz' and has the values 'hello' and 'world'. The corresponding
.reg merge file will be created in the \Application folder.
--&gt;
&lt;META HTTP-Equiv="registry" Content="hive:hklm"&gt;
&lt;META HTTP-Equiv="registry" Content="key:Software"&gt;
&lt;META HTTP-Equiv="registry" Content="setting:PocketBrowser"&gt;
&lt;META HTTP-Equiv="registry" Content="type:multisz"&gt;
&lt;META HTTP-Equiv="registry" Content="persistent:true"&gt;
&lt;META HTTP-Equiv="registry" Content="value:hello\nworld"&gt;
</textarea></div>
<p>
The tags below delete the above setting.
</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="registry" Content="hive:hklm"&gt;
&lt;META HTTP-Equiv="registry" Content="key:Software"&gt;
&lt;META HTTP-Equiv="registry" Content="setting:PocketBrowser"&gt;
&lt;META HTTP-Equiv="registry" Content="delete"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EQE');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EQE">&lt;!-- 
The tags below delete the above setting.
--&gt;
&lt;META HTTP-Equiv="registry" Content="hive:hklm"&gt;
&lt;META HTTP-Equiv="registry" Content="key:Software"&gt;
&lt;META HTTP-Equiv="registry" Content="setting:PocketBrowser"&gt;
&lt;META HTTP-Equiv="registry" Content="delete"&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Hive values</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
The values HKLM, HKCU, HKCR and HKU correspond to HKEY_LOCAL_MACHINE, HKEY_CURRENT_USER,
HKEY_CLASSES_ROOT and HKEY_USERS.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Data types</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
The value is formatted for each data type as follows.
</DIV>
<pre style="font-family:courier;font-size:small;">
DATA TYPE    VALUE FORMAT
dword        A decimal number.
string       Any string of characters.
binary       A string of hexadecimal digits (0-9, A-F).
There must be an even number of digits.
multisz      Multiple strings of characters, separated by \n.
To include a backslash (\) in a string write a double backslash (\\).
</pre>
<DIV class="clsRef">Merge files</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
When the persistent tag is given the module will write a .reg file to the \Application folder on the device, which will add the setting to the registry when merged by Windows CE/WM, e.g. during a cold boot. When the persistent tag is given when deleting a setting, the module deletes any existing .reg file created above, and creates a new .reg file which will delete the setting when merged - this is in addition to deleting the registry setting itself.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
</blockquote><br>
</div>
