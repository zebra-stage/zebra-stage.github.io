---
title: FileTransfer Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The FileTransfer Meta Tag is an action tag used to send or receive files between the device filestore and an FTP or HTTP site.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">FileTransfer (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="FileTransfer" content="[Method | Parameter&gt;</pre>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="FileTransfer" content="TransferEvent:url('[jsFunction | url]')"&gt;</p>
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
<td valign="top" class="clsSyntaxCells"><b>Transfer</b></td>
<td valign="top" class="clsSyntaxCells">Sends or receives the file according to the configured properties.</td>
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
The FileTransfer META Tag is an action tag used to send or receive files between the local filestore and either an FTP or HTTP site.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="FileTransfer" Content="Transfer"&gt; --&gt;      &lt;!-- Sends or receives the file according to the configured properties. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The FileTransfer META Tag is an action tag used to send or receive files between the local filestore and either an FTP or HTTP site.
*/

function doFileTransferInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('FileTransfer', 'Transfer');      /* Sends or receives the file according to the configured properties. */

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
<td valign="top" class="clsSyntaxCells"><b>Destination:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">URL or a path</td>
<td valign="top" class="clsSyntaxCells">Sets the destination path and name of the file to be transferred.  If specifying a URL this should be fully qualified with protocol, port and optionally username and password.</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Source:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">URL or a path</td>
<td valign="top" class="clsSyntaxCells">Sets the source path and name of the file to be transferred.  If specifying a URL this should be fully qualified with protocol, port and optionally username and password.</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Username:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">String</td>
<td valign="top" class="clsSyntaxCells">The username for the HTTP or FTP server if required</td>
<td valign="top" class="clsSyntaxCells">No username</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Password:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">String</td>
<td valign="top" class="clsSyntaxCells">The password for the HTTP or FTP server if required</td>
<td valign="top" class="clsSyntaxCells">No password</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>CreateFolders:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">'True' or 'False'</td>
<td valign="top" class="clsSyntaxCells">On a filetransfer that results in local file storage, createFolders can automatically create the directory path.</td>
<td valign="top" class="clsSyntaxCells">False</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>OverWrite:[Value]
				</b></td>
<td valign="top" class="clsSyntaxCells">'True' or 'False'</td>
<td valign="top" class="clsSyntaxCells">On a filetransfer that results in local file storage, OverWrite will overwrite the destination file if it already exists.</td>
<td valign="top" class="clsSyntaxCells">False</td>
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
The FileTransfer META Tag is an action tag used to send or receive files between the local filestore and either an FTP or HTTP site.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="FileTransfer" Content="Destination:[Value]"&gt; --&gt;      &lt;!-- Sets the destination path and name of the file to be transferred.  If specifying a URL this should be fully qualified with protocol, port and optionally username and password. --&gt;
&lt;!-- &lt;META HTTP-Equiv="FileTransfer" Content="Source:[Value]"&gt; --&gt;      &lt;!-- Sets the source path and name of the file to be transferred.  If specifying a URL this should be fully qualified with protocol, port and optionally username and password. --&gt;
&lt;!-- &lt;META HTTP-Equiv="FileTransfer" Content="Username:[Value]"&gt; --&gt;      &lt;!-- The username for the HTTP or FTP server if required --&gt;
&lt;!-- &lt;META HTTP-Equiv="FileTransfer" Content="Password:[Value]"&gt; --&gt;      &lt;!-- The password for the HTTP or FTP server if required --&gt;
&lt;!-- &lt;META HTTP-Equiv="FileTransfer" Content="CreateFolders:[Value]"&gt; --&gt;      &lt;!-- On a filetransfer that results in local file storage, createFolders can automatically create the directory path. --&gt;
&lt;!-- &lt;META HTTP-Equiv="FileTransfer" Content="OverWrite:[Value]"&gt; --&gt;      &lt;!-- On a filetransfer that results in local file storage, OverWrite will overwrite the destination file if it already exists. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The FileTransfer META Tag is an action tag used to send or receive files between the local filestore and either an FTP or HTTP site.
*/

function doFileTransferInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('FileTransfer', 'Destination:[Value]');      /* Sets the destination path and name of the file to be transferred.  If specifying a URL this should be fully qualified with protocol, port and optionally username and password. */
//objGeneric.InvokeMETAFunction('FileTransfer', 'Source:[Value]');      /* Sets the source path and name of the file to be transferred.  If specifying a URL this should be fully qualified with protocol, port and optionally username and password. */
//objGeneric.InvokeMETAFunction('FileTransfer', 'Username:[Value]');      /* The username for the HTTP or FTP server if required */
//objGeneric.InvokeMETAFunction('FileTransfer', 'Password:[Value]');      /* The password for the HTTP or FTP server if required */
//objGeneric.InvokeMETAFunction('FileTransfer', 'CreateFolders:[Value]');      /* On a filetransfer that results in local file storage, createFolders can automatically create the directory path. */
//objGeneric.InvokeMETAFunction('FileTransfer', 'OverWrite:[Value]');      /* On a filetransfer that results in local file storage, OverWrite will overwrite the destination file if it already exists. */

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
</p><br><DIV class="clsRef">TransferEvent</DIV>
<DIV>The TransferEvent is called when the file has been successfully transfered to the specified destination.  When the transfer is via the HTTP protocol 'OK: File Received' is returned followed by the size of the file; for HTTP uploads the destination server message is returned.  When the transfer is via FTP either 'OK: File Sent', 'OK: File Received'.  If there is an error during the transfer 'Error:' will be returned and may be followed by the relevent Windows error code; see the log file for more information on the error.  Note when downloading from an HTTP server if the requested file does not exist you may receive 'OK: File received' and the server 404 string placed in your destination file.</DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
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
<td class="clsSyntaxCells" valign="top"><b>Transfer Result</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Success or failure of the transfer, see note above.</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0EPD">&lt;!-- &lt;META HTTP-Equiv="FileTransfer" Content="TransferEvent:url('JavaScript:fnJSCallbackHandler('%1');')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0EVD">&lt;script&gt;
/*
function doFileTransferInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('FileTransfer', 'TransferEvent:url('JavaScript:fnJSCallbackHandler('%1');')');      /* The TransferEvent is called when the file has been successfully transfered to the specified destination.  When the transfer is via the HTTP protocol 'OK: File Received' is returned followed by the size of the file; for HTTP uploads the destination server message is returned.  When the transfer is via FTP either 'OK: File Sent', 'OK: File Received'.  If there is an error during the transfer 'Error:' will be returned and may be followed by the relevent Windows error code; see the log file for more information on the error.  Note when downloading from an HTTP server if the requested file does not exist you may receive 'OK: File received' and the server 404 string placed in your destination file. */

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
</table><br><br></blockquote><br></div>

<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example shows how to move the file 'myfile.txt' from the device's root to a folder off the root:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="FileTransfer" Content="Source:url('file://\myfile.txt')"&gt;
&lt;META HTTP-Equiv="FileTransfer" Content="Destination:url('file://\MyFolder\myfile.txt')"&gt;
&lt;META HTTP-Equiv="FileTransfer" Content="Overwrite:True"&gt;
&lt;META HTTP-Equiv="FileTransfer" Content="CreateFolders:True"&gt;
&lt;META HTTP-Equiv="FileTransfer" Content="Transfer"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EAE');">
Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EAE">&lt;!-- 
The following example shows how to move the file 'myfile.txt' from the device's root to a folder off the root:
--&gt;

&lt;META HTTP-Equiv="FileTransfer" Content="Source:url('file://\myfile.txt')"&gt;
&lt;META HTTP-Equiv="FileTransfer" Content="Destination:url('file://\MyFolder\myfile.txt')"&gt;
&lt;META HTTP-Equiv="FileTransfer" Content="Overwrite:True"&gt;
&lt;META HTTP-Equiv="FileTransfer" Content="CreateFolders:True"&gt;
&lt;META HTTP-Equiv="FileTransfer" Content="Transfer"&gt;
</textarea></div>
<p>The following example sets up a protocol, destination and source file and sends the file via HTTP. Upon a successful transfer, the server message (if any) is sent to 'mypage.asp.':</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="FileTransfer" Content="TransferEvent:url('mypage.asp?Data=%s')"&gt;
&lt;META HTTP-Equiv="FileTransfer" Content="Destination:url('HTTP://192.168.1.1/accounts/upload.aspx')"&gt;
&lt;META HTTP-Equiv="FileTransfer" Content="Source:url('file://\temp/accounts.xls')"&gt;
&lt;META HTTP-Equiv="FileTransfer" Content="Transfer"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EHE');">
Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EHE">&lt;!-- 
The following example sets up a protocol, destination and source file and sends the file via HTTP. Upon a successful transfer, the server message (if any) is sent to 'mypage.asp.':
--&gt;

&lt;META HTTP-Equiv="FileTransfer" Content="TransferEvent:url('mypage.asp?Data=%s')"&gt;
&lt;META HTTP-Equiv="FileTransfer" Content="Destination:url('HTTP://192.168.1.1/accounts/upload.aspx')"&gt;
&lt;META HTTP-Equiv="FileTransfer" Content="Source:url('file://\temp/accounts.xls')"&gt;
&lt;META HTTP-Equiv="FileTransfer" Content="Transfer"&gt;
</textarea></div>
<p>The following example shows how to download a file from an HTTP server.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="FileTransfer" Content="TransferEvent:url('Javascript:alert('%s')'); Transfer"&gt;

&lt;script type="text/javascript"&gt;
var gen = new ActiveXObject("PocketBrowser.Generic");

//  HTTP Functions

//  Download from an HTTP site
function downloadFromHTTP()
{
gen.InvokeMETAFunction("FileTransfer", "Source:url('http://myserver/myfile.txt'); destination:url('file://\\myfile.txt'); Transfer");     
}

//  Download from an HTTP site requiring login credentials
function downloadFromHTTPAuth()
{
gen.InvokeMETAFunction("FileTransfer", "Source:url('http://httpAdmin:httpPassword@myserver/myfile.txt'); destination:url('file://\\myfile.txt'); Transfer");     
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EOE');">
Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EOE">&lt;!-- 
The following example shows how to download a file from an HTTP server.
--&gt;

&lt;META HTTP-Equiv="FileTransfer" Content="TransferEvent:url('Javascript:alert('%s')'); Transfer"&gt;

&lt;script type="text/javascript"&gt;
var gen = new ActiveXObject("PocketBrowser.Generic");

//  HTTP Functions

//  Download from an HTTP site
function downloadFromHTTP()
{
gen.InvokeMETAFunction("FileTransfer", "Source:url('http://myserver/myfile.txt'); destination:url('file://\\myfile.txt'); Transfer");     
}

//  Download from an HTTP site requiring login credentials
function downloadFromHTTPAuth()
{
gen.InvokeMETAFunction("FileTransfer", "Source:url('http://httpAdmin:httpPassword@myserver/myfile.txt'); destination:url('file://\\myfile.txt'); Transfer");     
}
&lt;/script&gt;
</textarea></div>
<p>The following example shows to transfer a file via FTP.  After each transfer the result (OK or Error) is given in an alert box.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="FileTransfer" Content="TransferEvent:url('Javascript:alert('%s')'); Transfer"&gt;

&lt;script type="text/javascript"&gt;
var gen = new ActiveXObject("PocketBrowser.Generic");

//  FTP Functions

//  Upload to an FTP server
function uploadToFTP()
{
gen.InvokeMETAFunction("FileTransfer", "Source:url('file://\\Program Files\\PocketBrowser\\file.txt'); destination:url('ftp://192.168.4.110/file.txt'); Transfer");     
}

//  Upload to an FTP server on port 2500 using username 'ftpadmin' and password 'ftpadminpw'
function uploadToFTPWithAuthentication()
{
gen.InvokeMETAFunction("FileTransfer", "Source:url('file://\\Program Files\\PocketBrowser\\file.txt'); destination:url('ftp://ftpadmin:ftpadminpw@192.168.4.110:2500/Folder/file.txt'); Transfer");     
}

//  Download from an FTP Server using username 'ftpadmin' and password 'ftpadminpw'   
function downloadFromFTP()
{
gen.InvokeMETAFunction("FileTransfer", "Source:url('ftp://ftpadmin:ftpadminpw@192.168.4.110/NewFolder/file.txt'); Destination:url('file://\\sigReceived.bmp'); Transfer");     
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EVE');">
Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EVE">&lt;!-- 
The following example shows to transfer a file via FTP.  After each transfer the result (OK or Error) is given in an alert box.
--&gt;

&lt;META HTTP-Equiv="FileTransfer" Content="TransferEvent:url('Javascript:alert('%s')'); Transfer"&gt;

&lt;script type="text/javascript"&gt;
var gen = new ActiveXObject("PocketBrowser.Generic");

//  FTP Functions

//  Upload to an FTP server
function uploadToFTP()
{
gen.InvokeMETAFunction("FileTransfer", "Source:url('file://\\Program Files\\PocketBrowser\\file.txt'); destination:url('ftp://192.168.4.110/file.txt'); Transfer");     
}

//  Upload to an FTP server on port 2500 using username 'ftpadmin' and password 'ftpadminpw'
function uploadToFTPWithAuthentication()
{
gen.InvokeMETAFunction("FileTransfer", "Source:url('file://\\Program Files\\PocketBrowser\\file.txt'); destination:url('ftp://ftpadmin:ftpadminpw@192.168.4.110:2500/Folder/file.txt'); Transfer");     
}

//  Download from an FTP Server using username 'ftpadmin' and password 'ftpadminpw'   
function downloadFromFTP()
{
gen.InvokeMETAFunction("FileTransfer", "Source:url('ftp://ftpadmin:ftpadminpw@192.168.4.110/NewFolder/file.txt'); Destination:url('file://\\sigReceived.bmp'); Transfer");     
}
&lt;/script&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Default Ports</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The default port settings are 80 for HTTP and 21 for FTP.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Common mistakes</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">Remember that in Javascript the '\' character is the escape character so to use a backslash in the URL use '\\'.  This is not the case when specifying the URL via a meta tag where a single '\' will suffice. See the examples above.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Creating a fully qualified URL</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The protocol, port number, username (optional) and password (optional) are all derived from the URL string and should be specified in the following manner: [protocol]://[username]:[password@]Server[:Port]FileNameAndPath. FTP Example: ftp://admin:root@192.168.1.1:2500/Folder/file.txt.  HTTP Example: http://admin:root@192.168.1.1:8080/Folder/upload.aspx</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Relative URLs</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The FileTransfer meta tag also supports relative URLs, for example if the current page's path is 'http://192.168.0.1/myPBapp/index.html and you specify &lt;META HTTP-Equiv="FileTransfer" Content="Source:url('../file.xls')"&gt; then the source file will be 'http://192.168.0.1/file.xls'. This notation can also be used for FTP and file URLs. Note that the relative URL must start with a '.' so to specify a file in the same directory as your application page use Source:url('./file.xls')</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Maximum File Size</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The maximum file size to transfer should be 4MB.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">FTP Return Value</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">FTP does not supply a return code to indicate success, so PocketBrowser may report a successful transfer even though the file may not arrive or be sent</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
</blockquote><br></div>
<div id="InfoSpan" style="display:block">
<blockquote>
<table>
<tr>
<th>Supported Platforms</th>
<td>Windows Mobile, Windows CE</td>
</tr>
<tr>
<th>Persistence</th>
<td>Tag is page-specific</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>None</td>
</tr>
</table>
</blockquote><br>
</div>
