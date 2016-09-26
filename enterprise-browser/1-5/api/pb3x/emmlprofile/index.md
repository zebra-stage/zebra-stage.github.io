---
title: EMMLProfile Meta Tag
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The EMMLProfile Meta Tag is an action tag used to manage EMML profile pages.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">EMMLProfile (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="EMMLProfile" content="parameter:value"&gt;</p>
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
<td valign="top" class="clsSyntaxCells"><b>name:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">[optional name] (see remarks below)</td>
<td valign="top" class="clsSyntaxCells">Imports the EMML profile page stored at the local specified by "import". Nb. This parameter should come before the related import method.</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>import:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">url('URI')</td>
<td valign="top" class="clsSyntaxCells">http or file location of the .emmp file containing the EMML profiles to be imported.</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>clear:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">[optional name] (see remarks below)</td>
<td valign="top" class="clsSyntaxCells">Clears the currently loaded EMML profiles.</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>apply:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">[profile class name]</td>
<td valign="top" class="clsSyntaxCells">Applies the EMML profile with the class name specified. </td>
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
The EMMLProfile META Tag is an action tag used to manage EMML profile pages.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="EMMLProfile" Content="name:[Value]"&gt; --&gt;      &lt;!-- Imports the EMML profile page stored at the local specified by "import". Nb. This parameter should come before the related import method. --&gt;
&lt;!-- &lt;META HTTP-Equiv="EMMLProfile" Content="import:[Value]"&gt; --&gt;      &lt;!-- http or file location of the .emmp file containing the EMML profiles to be imported. --&gt;
&lt;!-- &lt;META HTTP-Equiv="EMMLProfile" Content="clear:[Value]"&gt; --&gt;      &lt;!-- Clears the currently loaded EMML profiles. --&gt;
&lt;!-- &lt;META HTTP-Equiv="EMMLProfile" Content="apply:[Value]"&gt; --&gt;      &lt;!-- Applies the EMML profile with the class name specified.  --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The EMMLProfile META Tag is an action tag used to manage EMML profile pages.
*/

function doEMMLProfileInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('EMMLProfile', 'name:[Value]');      /* Imports the EMML profile page stored at the local specified by "import". Nb. This parameter should come before the related import method. */
//objGeneric.InvokeMETAFunction('EMMLProfile', 'import:[Value]');      /* http or file location of the .emmp file containing the EMML profiles to be imported. */
//objGeneric.InvokeMETAFunction('EMMLProfile', 'clear:[Value]');      /* Clears the currently loaded EMML profiles. */
//objGeneric.InvokeMETAFunction('EMMLProfile', 'apply:[Value]');      /* Applies the EMML profile with the class name specified.  */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>

<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example imports an EMML profile page into the temporary, unnamed space.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="EMMLProfile" Content="import:url('http://myserver/scannerparams.emmp');"&gt;
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
The following example imports an EMML profile page into the temporary, unnamed space.
--&gt;

&lt;META HTTP-Equiv="EMMLProfile" Content="import:url('http://myserver/scannerparams.emmp');"&gt;
</textarea></div>
<p>The following example imports an EMML profile page into a page persistent, named space.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="EMMLProfile" Content="name:scanner_params;import:url('http://myserver/scannerparams.emmp');"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EPC');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EPC">&lt;!-- 
The following example imports an EMML profile page into a page persistent, named space.
--&gt;

&lt;META HTTP-Equiv="EMMLProfile" Content="name:scanner_params;import:url('http://myserver/scannerparams.emmp');"&gt;
</textarea></div>
<p>The following example applies two profile classes from the temporary, unnamed space.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="EMMLProfile" Content="apply:default_decorders;"&gt;
&lt;META HTTP-Equiv="EMMLProfile" Content="apply:inventory_decorders;"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EWC');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EWC">&lt;!-- 
The following example applies two profile classes from the temporary, unnamed space.
--&gt;

&lt;META HTTP-Equiv="EMMLProfile" Content="apply:default_decorders;"&gt;
&lt;META HTTP-Equiv="EMMLProfile" Content="apply:inventory_decorders;"&gt;
</textarea></div>
<p>The following example applies two profile classes from page persistent, named space.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="EMMLProfile" Content="apply:scanner_params.default_decorders;"&gt;
&lt;META HTTP-Equiv="EMMLProfile" Content="apply:scanner_params.inventory_decorders;"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E4C');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0E4C">&lt;!-- 
The following example applies two profile classes from page persistent, named space.
--&gt;

&lt;META HTTP-Equiv="EMMLProfile" Content="apply:scanner_params.default_decorders;"&gt;
&lt;META HTTP-Equiv="EMMLProfile" Content="apply:scanner_params.inventory_decorders;"&gt;
</textarea></div>
<p>The following is an example of an EMML Profile page.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
.default_decoders
{
scanner-alldecoders: disabled;
scanner-code128other128: false;
scanner-code128maxlength: 10;
scanner-code128minlength: 1; 
scanner-code128: enabled;
}

.inventory_decoders
{
scanner-ean13converttocode128: true;
scanner-ean13: enabled;
scanner-ean8: enabled;
scanner-i2of5: enabled; 
scanner-code128: enabled;
}
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EED');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EED">&lt;!-- 
The following is an example of an EMML Profile page.
--&gt;

.default_decoders
{
scanner-alldecoders: disabled;
scanner-code128other128: false;
scanner-code128maxlength: 10;
scanner-code128minlength: 1; 
scanner-code128: enabled;
}

.inventory_decoders
{
scanner-ean13converttocode128: true;
scanner-ean13: enabled;
scanner-ean8: enabled;
scanner-i2of5: enabled; 
scanner-code128: enabled;
}
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Named Profile Pages</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">Normally, when importing a profile page, the imported profiles will be cleared from memory when the page is navigated away from. If you provide a name when importing a profile page, the imported profiles will not be cleared on page navigation and you will be able to reference them until you manually clear the profiles.  To reference a named imported profile, prefix the profile class name with the name you supplied when importing the profile page (see example above).
Naming profile pages can improve performance.  If you include many profiles for your application within the profile page, it will only have to be downloaded, parsed and imported the once.  It is often also preferable to maintain a central location for all your EMML.  
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Importing Local Profiles</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">Importing profiles from a file:// location will cause the profile to be moved from its previous location, not copied.  
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
<td>Tag is page specific except where a named EMML profile set is imported</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>None</td>
</tr>
</table>
</blockquote><br>
</div>
