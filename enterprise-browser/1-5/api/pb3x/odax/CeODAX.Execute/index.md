---
title: CeODAX.Execute Method
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Execute Method of the ODAX ActiveX Object performs INSERT, UPDATE and DELETE statements on the specified .XML or .CSV file. 

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Execute (Method of the ODAX ActiveX Object) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">var count = object.Execute(sql_statement, format, delimiter, firstrow)</pre>
</td>
</tr>
</table>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ParametersWSpan', 'imgParametersWToggle')"><img align="absmiddle" id="imgParametersWToggle" alt="ParametersW Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif&#xA;					"></span>
Parameters
</p>
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
<td valign="top" class="clsSyntaxCells"><b>Sql_statement </b></td>
<td valign="top" class="clsSyntaxCells">String</td>
<td valign="top" class="clsSyntaxCells">String representing the INSERT, UPDATE and DELETE SQL statement to be executed</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Format </b></td>
<td valign="top" class="clsSyntaxCells">0 or 1</td>
<td valign="top" class="clsSyntaxCells">If no extension is supplied the format parameter is used to determine file format (0 = XML, 1 = CSV)</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Delimiter </b></td>
<td valign="top" class="clsSyntaxCells">String</td>
<td valign="top" class="clsSyntaxCells">Delimiter which is used in CSV files as a column separator. Even though there is no special use for this in XML files you cannot leave this blank, hence you need to provide a valid value</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>FirstRow</b></td>
<td valign="top" class="clsSyntaxCells">True or False</td>
<td valign="top" class="clsSyntaxCells">This denotes that the first row of a CSV file contain the Column Names. If set to false in CSV mode it will retrieve columns as column1, column2 etc</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
</table>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('axReturnsSpan', 'aximgReturnsToggle')"><img align="absmiddle" id="aximgReturnsToggle" alt="axReturns Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Return Values
</p>
<div id="axReturnsSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<col width="20%">
<col width="80%">
<tr>
<th class="clsSyntaxHeadings">Name</th>
<th class="clsSyntaxHeadings">Description</th>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top"><b>Count</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Returns 0 if no record were updated/deleted/inserted or returns the number of record affected by the operation. (Please Refer Error Codes for More Detail)</td>
</tr>
</table>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ExamplesSpan', 'imgExamplesToggle')"><img align="absmiddle" id="imgExamplesToggle" alt="Examples Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Examples
</p>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example inserts records to a XML file: </p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;script&gt;
var ax = new ActiveXObject("CeODAX.ODAX");

var FieldValue1 = 'Red';
var FieldValue2 =  Green';
var FieldValue3 = 'Blue';

var QueryString = 'INSERT INTO \'\\application\\test.xml\' (field1,field2,field3) VALUES (';
QueryString += '\''+FieldValue1+'\',';
QueryString += '\''+FieldValue2+'\',';
QueryString += '\''+FieldValue3+'\');';
var count = ax.Execute(QueryString,0,',',false);
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E1C');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0E1C">&lt;!-- 
The following example inserts records to a XML file: 
--&gt;

&lt;script&gt;
var ax = new ActiveXObject("CeODAX.ODAX");

var FieldValue1 = 'Red';
var FieldValue2 =  Green';
var FieldValue3 = 'Blue';

var QueryString = 'INSERT INTO \'\\application\\test.xml\' (field1,field2,field3) VALUES (';
QueryString += '\''+FieldValue1+'\',';
QueryString += '\''+FieldValue2+'\',';
QueryString += '\''+FieldValue3+'\');';
var count = ax.Execute(QueryString,0,',',false);
&lt;/script&gt;
</textarea></div>
<p>The following example inserts records to a CSV file: </p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;script&gt;
var ax = new ActiveXObject("CeODAX.ODAX");

var QueryString = 'INSERT INTO \'\\application\\test.csv\' (field1,field2,field3) VALUES (';
QueryString += '\''+FieldValue1+'\',';
QueryString += '\''+FieldValue2+'\',';
QueryString += '\''+FieldValue3+'\');';
var count = ax.Execute(QueryString,1,',',true);
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EBD');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EBD">&lt;!-- 
The following example inserts records to a CSV file: 
--&gt;

&lt;script&gt;
var ax = new ActiveXObject("CeODAX.ODAX");

var QueryString = 'INSERT INTO \'\\application\\test.csv\' (field1,field2,field3) VALUES (';
QueryString += '\''+FieldValue1+'\',';
QueryString += '\''+FieldValue2+'\',';
QueryString += '\''+FieldValue3+'\');';
var count = ax.Execute(QueryString,1,',',true);
&lt;/script&gt;
</textarea></div>
<p>The following example updates records in a XML file</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;script&gt;
var ax = new ActiveXObject("CeODAX.ODAX");
var fieldValue = 'Orange';
var conditionField = 'Red';

var QueryString = 'UPDATE \'\\application\\test.xml\' SET field1=';
QueryString += '\''+ fieldValue +'\'';
QueryString += ' WHERE field1=\'';
QueryString += conditionField +"\';"
var count = ax.Execute(QueryString,0,',',false);
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EID');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EID">&lt;!-- 
The following example updates records in a XML file
--&gt;

&lt;script&gt;
var ax = new ActiveXObject("CeODAX.ODAX");
var fieldValue = 'Orange';
var conditionField = 'Red';

var QueryString = 'UPDATE \'\\application\\test.xml\' SET field1=';
QueryString += '\''+ fieldValue +'\'';
QueryString += ' WHERE field1=\'';
QueryString += conditionField +"\';"
var count = ax.Execute(QueryString,0,',',false);
&lt;/script&gt;
</textarea></div>
<p>The following example deletes records in a XML file</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;script&gt;
var ax = new ActiveXObject("CeODAX.ODAX");
var conditionField = 'Red';

var QueryString = 'DELETE FROM \'\\application\\test.xml\' WHERE field1=';
QueryString += '\''+ conditionField +'\';';
var count = ax.Execute(QueryString,0,',',false);
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EPD');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EPD">&lt;!-- 
The following example deletes records in a XML file
--&gt;

&lt;script&gt;
var ax = new ActiveXObject("CeODAX.ODAX");
var conditionField = 'Red';

var QueryString = 'DELETE FROM \'\\application\\test.xml\' WHERE field1=';
QueryString += '\''+ conditionField +'\';';
var count = ax.Execute(QueryString,0,',',false);
&lt;/script&gt;
</textarea></div>
</blockquote>
</div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('RemarksSpan', 'imgRemarksToggle')"><img align="absmiddle" id="imgRemarksToggle" alt="Remarks Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Remarks
</p>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">General</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The delimiter and firstrow are a Select.  If firstrow is set to true when creating a table with INSERT, then the field names are written to the first row as column names.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Query needed after Execute</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
The current result set becomes invalid after any Execute (INSERT, UPDATE, DELETE) and arbitrary values will be returned by MoveFirst etc. A new SELECT query must be performed to get valid results.  
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('InfoSpan', 'imgInfoToggle')"><img align="absmiddle" id="imgInfoToggle" alt="Info Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Additional Information
</p>
<div id="InfoSpan" style="display:block">
<blockquote>
<table>
<tr>
<th>Supported Platforms</th>
<td>Windows Mobile, Windows CE</td>
</tr>
<tr>
<th>Persistence</th>
<td>Runs immediately.</td>
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
