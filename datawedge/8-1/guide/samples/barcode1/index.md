---
publish: true
title: Data Capture
description: Shows how to receive scanned barcode data, configure DataWedge, register for scanner status notifications, and use the software scan trigger via DataWedge Intent APIs.
downloads:
  - title: Sample Projects
    url: 'https://github.com/Zebra/samples-datawedge/archive/master.zip'
sources:
  - title: Github Repo
    url: 'https://github.com/Zebra/samples-datawedge'
devices:
  - All supported Zebra Android Marshmallow (v6.0) or above devices
image: datacapture1-0.png
screenshots:
  - datacapture1-0.png
  - datacapture1-1.png
  - datacapture1-2.png
  - datacapture1-3.png
  - datacapture1-4.png
  - datacapture1-5.png
  - datacapture1-6.png
layout: sample.html
product: DataWedge
productversion: '8.1'
date: 2018-19-08
---

##Overview 
This sample app demonstrates how to receive scanned barcode data through an Android intent, configure DataWedge, register for scanner status notifications, and use the software scan trigger via [DataWedge Intent APIs](../../api). 

Available actions in this sample: 
* Display the DataWedge version
* Create a profile if it does not exist   
* Select/deselect certain decoders for scanning
* Toggle software scan trigger
* Register for scanner status notifications, such as waiting, scanning, etc.  
* Display the following for each decoded barcode:  
  * scan data 
  * decoder type 

>**Note**: This application is intended for demonstration purposes only. It is provided as-is without guarantee or warranty and may be modified to suit individual needs. The appearance of sample app screens can vary by sample app version, Android version, and screen size.

##APIs Used

<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>DataWedge API</th>
    <th>App Functionality</th>
  </tr>
  
  <tr>
	  <td><a href="http://techdocs.zebra.com/datawedge/latest/guide/api/getversioninfo/">Get Version Info</a></td>
	  <td>Get DataWedge version installed on device</td>
  </tr>

  <tr>
    <td><a href="http://techdocs.zebra.com/datawedge/latest/guide/api/createprofile/">Create Profile</a></td>
    <td>Check for existing profile, create if it does not exist</td>
  </tr>

  <tr>
    <td><a href="http://techdocs.zebra.com/datawedge/latest/guide/api/setconfig/">Set Config</a></td>
    <td>Set selected/deselected decoders</td>
  </tr>

  <tr>
    <td><a href="http://techdocs.zebra.com/datawedge/latest/guide/api/registerfornotification/">Register for status notifications</a></td>
    <td>Register to receive notifications via intent for scanner status changes</td>
  </tr>

  <tr>
    <td><a href="http://techdocs.zebra.com/datawedge/latest/guide/api/softscantrigger/">Soft Scan Trigger</a></td>
    <td>Control scanning via Soft Scan Trigger button</td>
  </tr>
</table>

##Requirements
* This sample was created based on DataWedge version 7.0 (version that existed at the time of creation). Check [DataWedge API](http://techdocs.zebra.com/datawedge/latest/guide/about/) documentation for any future version changes that may affect functionality.
* Android API 23 (Marshmallow) or higher.
* DataWedge (built-in all Zebra devices) is running on the device.

##Using This Sample
1. [Download](https://github.com/Zebra/samples-datawedge), build, and launch the sample app.
  ![img](datacapture1-0-mini.png) 
  
2. View the DataWedge version installed on the device. 
  ![img](datacapture1-1-mini.png)  

3. Tap Create. “DWDataCapture1” profile is created if it does not exist and associates it with this application. 
  ![img](datacapture1-2-mini.png)  

4. Select/deselect decoders. All other decoders not specified are set to defaults. Tap Set to save.
  ![img](datacapture1-4-mini.png)   

5. Press the hard trigger button or toggle the soft scan trigger button to scan. 
  ![img](datacapture1-5-mini.png)  

6. View the displayed information: 
   * Scanner status
   * Scan decoder
   * Scan data 
![img](datacapture1-6-mini.png)  
 
  
-----

**Related guides**:

* [DataWedge Intent APIs](../../api) 










