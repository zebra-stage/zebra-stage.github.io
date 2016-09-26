---
title: Volume Module
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

## Overview
The Volume Module controls the audio output volume of wave files being played on the device. This does not set the volume of the device beeper.

##Syntax

<table class="re-table">
<tr>
<th class="tableHeading">volume (Module) &lt;META&gt; Syntax</th>
</tr>
<tr>
<td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="Volume" content="[parameter]"&gt;</p>
</td>
</tr>
</table>

<table class="re-table"><tr><th class="tableHeading">Volume JavaScript Object Syntax:</th></tr>
<tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'volume'</b> will exist on the current page and can be used to interact directly with the volume.
</td>
</tr>
<tr><td class="clsSyntaxCells clsEvenRow">
To Set volume parameters via JavaScript use the following syntax: volume.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>volume</b>.setVolume = 'value';
</td>
</tr>
<tr><td class="clsSyntaxCells clsOddRow">							
To set multiple <a href="/rhoelements/EMMLOverview">EMML</a> parameters / events on a single line use the following syntax: volume.setEMML("[Your EMML Tags]");
<P />
e.g. <b>volume</b>.setEMML("setVolume:<i>value</i>");							
</td>
</tr>
</table>

##Parameters

Items listed in this section indicate parameters, or attributes which can be set.

<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr>
<tr>
<td class="clsSyntaxCells clsOddRow"><b>setVolume:[Value]
</b></td>
<td class="clsSyntaxCells clsOddRow">Volume in the format 0xnnnn</td>
<td class="clsSyntaxCells clsOddRow">Specifies a new volume setting. The low-order word contains the left-channel volume setting, and the high-order word contains the right-channel setting. A value of 0xFFFF represents full volume, and a value of 0x0000 is silence. If a device does not support both left and right volume control, the low-order word specifies the volume level and the high-order word is ignored</td>
<td class="clsSyntaxCells clsOddRow">Device Dependant</td>
</tr>
</table>

<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" />
</table>

##Multi Instance
When multiple RhoElememts applications are running the following considerations should be made: The volume settings are application specific. Switching to another application which uses the volume module will cause the device volume to change to that specified by the application with focus. Only the application with Focus will have the ability to change the volume settings.

##Requirements

<table class="re-table"><tr>
<th class="tableHeading">RhoElements Version</th>
<td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td>
</tr>
<tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr>
<tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">The device must have a speaker.</td>
</tr>
<tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Persistent - Changes to this module will persist when navigating to a new page.</td>
</tr>
</table>


##HTML/JavaScript Examples

The following example sets the device volume to its maximum for all devices

		:::html
		<meta http-equiv="Volume" content="SetVolume:0xFFFF">
		
The following example sets the device volume to its maximum for devices with a single wave output channel.
		
		:::html
		<meta http-equiv="Volume" content="SetVolume:0x00FF">
		
