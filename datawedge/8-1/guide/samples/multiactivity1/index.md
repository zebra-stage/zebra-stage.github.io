---
publish: true
title: MultiActivity
description: Demonstrates how to scan across multiple activities using different profiles based on the app activity in the foreground.
downloads:
  - title: Sample Projects
    url: 'https://github.com/Zebra/samples-datawedge/archive/master.zip'
sources:
  - title: Github Repo
    url: 'https://github.com/Zebra/samples-datawedge'
devices:
  - All supported Zebra Android Marshmallow (v6.0) or above devices
image: multiactivity-1.png
screenshots:
  - multiactivity-1.png
  - multiactivity-2.png
  - multiactivity-3.png
  - multiactivity-4.png
layout: sample.html
product: DataWedge
productversion: '8.1'
date: 2018-18-30
---

##Overview
This sample app demonstrates how to scan across multiple activities using different profiles based on the app activity in the foreground. The app contains 2 activities and creates a separate DataWedge profile for each. Each profile is associated to its respective activity. Profile1 is associated with MainActivity - it enables Code128 and disables EAN13. Profile2 is associated with SecondActivity - it disables Code128 and enables EAN13. Once an activity is in the foreground, the corresponding DataWedge profile is loaded and the respective barcode can be scanned. Tap on the button to navigate between both activities. Each activity displays the active profile name. When a barcode is scanned, the scan data and barcode symbology is displayed.

Common use cases:

* Scanning different barcodes based on the foreground activity of a multi-activity application.
* Specifying different scanner configurations, including data manipulation, based on the activity in the foreground.

This sample app is based on a previous blog post  <a href="https://developer.zebra.com/blog/using-datawedge-multiple-android-activities">Using DataWedge with Multiple Android Activities</a> 

>**Note**: This application is intended for demonstration purposes only. It is provided as-is without guarantee or warranty and may be modified to suit individual needs. The appearance of sample app screens can vary by sample app version, Android version, and screen size.

##APIs Used

<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>DataWedge API</th>
    <th>App Functionality</th>
  </tr>
  
  <tr>
    <td><a href="../../api/setconfig/">SetConfig</a></td>
    <td>Check for existing profile, create it if it does not exist and configure the settings. For profile <i>MultiActivity_Profile1</i>, associate it with MainActivity, enable Code128 and disable EAN13. For profile <i>MultiActivity_Profile2</i>, associate it with SecondActivity, disable Code128 and enable EAN13. </td>
  </tr>

  <tr>
    <td><a href="../../api/getactiveprofile/">Get Active Profile</a></td>
    <td>Retrieve the name of the profile currently in use.</td>
  </tr>

</table>

##Requirements
* This sample was created based on DataWedge version 7.6 (version that existed at the time of creation). Check [DataWedge API](../../about/) documentation for any future version changes that may affect functionality. It should also work on older DataWedge versions provided the APIs are supported.
* Android API 23 (Marshmallow) or higher
* DataWedge (built-in all Zebra devices)

##Using This Sample
1. [Download](https://github.com/Zebra/samples-datawedge), build, and launch the sample app. A toast message appears indicating the profiles are created.
<img style="height:350px" src="multiactivity-1.png"/>
  
2. Open DataWedge to verify the 2 profiles are created: <i>MultiActivity_Profile1</i> and <i>MultiActivity_Profile2</i>.
<img style="height:350px" src="multiactivity-dw.png"/>

3. Open the sample app again. The main activity is displayed showing active profile <i>MultiActivity_Profile1</i>. In the main activity, scan an EAN13 barcode. The barcode cannot be scanned since it is not enabled in the profile.
<img style="height:350px" src="multiactivity-1a.png"/>

3. In the main activity, scan a Code128 barcode. The scan data and decoder is displayed.
<img style="height:350px" src="multiactivity-2.png"/>

4. Tap **Go To Second Activity**. The second activity is displayed showing active profile <i>MultiActivity_Profile2</i>.
<img style="height:350px" src="multiactivity-3.png"/>

5. In the second activity, scan a Code128 barcode. The barcode cannot be scanned since it is not enabled in the profile.
<img style="height:350px" src="multiactivity-3.png"/>

6. In the second activity, scan an EAN13 barcode. The scan data and decoder is displayed.
<img style="height:350px" src="multiactivity-4.png"/>



  
-----

**Related guides**:

* [DataWedge Intent APIs](../../api) 










