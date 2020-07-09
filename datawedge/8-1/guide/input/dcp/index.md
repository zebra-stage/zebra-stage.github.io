---
title: DCP Input
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## Overview
Data Capture Plus (formerly known as the "Data Capture Panel") enables areas of the device screen to be designated as scan triggers. By tapping on such a screen area, DataWedge will respond as it would to a scanner button-press or other hardware trigger. DCP is disabled by default. 

The DataWedge profile configuration screen allows an app user to configure the appearance of DCP on the screen after a particular Profile is loaded. If the user checks the option to enable the DCP, the five parameters shown below appear on the preference screen and can be configured as desired. [Barcode Input](../input/barcode) must be enabled.

**Note: The DCP will not appear if the scanner is disabled in the active Profile**.

<img style="height:350px" src="../dcp_settings.png"/>
_Data Capture Plus options for setting scan triggers_ 
<br>

-----

### Dock button on
Sets the initial docking location of the floating DCP button. Changes by the user at runtime are saved to the active Profile. 

**Docking options**:

* Right side only
* Left side only
* Either side


<img style="height:350px" src="../dcp_minimized.png"/>
_Data Capture Plus shown in minimized mode_ 
<br>

### Start in
Sets the mode that DCP will startup with. **Button mode** is the only option that can interchange between button and full screen modes. It initiates as a floating button and can change to full screen by dragging the button to the bottom of the screen. Once in full screen, it can interchange back to a floating button by swiping down. The launch state is not changed in the Profile. In either **Button mode** or **Button-only** mode, the floating button can be dragged and placed anywhere on the side based on the **Docking option** selected. 

**Start-in options**: 

* Button mode
* Full-screen mode
* Button-only mode

<img style="height:350px" src="../dcp_maximized.png"/>
_Data Capture Plus shown in full-screen mode_ 
<br>

### Button highest position 
Sets a ceiling for button position expressed as a percentage of total screen height. For example, on a screen measuring four inches vertically, a setting of 75 (%) would prevent the upper edge of the DCP button from being positioned less than one inch from the top of the screen. 

### Button lowest position
Sets a floor for button position expressed as a percentage of total screen height. For example, on a screen measuring four inches vertically, a setting of 25 (%) would prevent the lower edge of the DCP button from being positioned less than one inch from the bottom of the screen.

### Drag Detect Time
The wait time (in ms) that DCP should wait after a screen tap before triggering a scanner action. This can help prevent accidental triggers when dragging the DCP button to a new location.

**Note**: A quick touch and release of the DCP can sometimes start the viewfinder when using camera as a scanner. To exit, press the back button.


**Note**: If configured to launch as a button, the DCP mode can be changed at runtime by dragging, but the launch state will not be changed in the Profile. However, runtime changes to the vertical position and the docking side of device screen _**will**_ be saved to the active Profile.

-----

## Scanning with DCP

**To scan a barcode with DCP**: 

&#49;. With DCP enabled, **tap and hold the area of the screen designated for DCP**. The scan beam (or camera viewfinder) will be active while the tap is held. 

&#50;. **Aim the scan beam or camera reticle at the barcode** to be scanned. DCP will use the preferences configured in the Barcode Input Plug-in for the current Profile.

&#51;. **Release finger to stop scanning** or to close the camera viewfinder.

**Note**: A quick touch and release of the DCP control sometimes will start the viewfinder when using camera as a scanner. To exit, press the BACK button.

------

## Configuration

Programmatically configure DCP and retrieve the configuration:

* [Set Config](../../api/setconfig/#datacaptureplusdcpinputparameters)
* [Get Config](../../api/getconfig/#getdcpinputconfiguration)

------

**Related guides**:

* [Profiles/Plug-ins](../../profiles)
* [Input Parameters](../barcode/#decoderselection)
* [DataWedge APIs](../../api) 

