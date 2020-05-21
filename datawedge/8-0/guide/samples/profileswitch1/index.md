---
publish: true
title: Profile Switch
description: Demonstrates how to switch profiles based on the text field in focus.
downloads:
  - title: Sample Projects
    url: 'https://github.com/Zebra/samples-datawedge/archive/master.zip'
sources:
  - title: Github Repo
    url: 'https://github.com/Zebra/samples-datawedge'
devices:
  - All supported Zebra Android Marshmallow (v6.0) or above devices
image: profileswitch1-1.png
screenshots:
  - profileswitch1-1.png
  - profileswitch1-2.png
  - profileswitch1-3.png
layout: sample.html
product: DataWedge
productversion: '8.0'
date: 2018-08-08
---

##Overview
This sample app demonstrates how to switch profiles dynamically based on the text field selected using [DataWedge Intent APIs](../../api).  The application registers a focus change listener for each of the text fields and sends a SWITCH_TO_PROFILE intent to DataWedge.  The UI is updated with the current profile in response to a successful result returned from SWITCH_TO_PROFILE. Dummy profiles are created as part of the onCreate() call using DataWedge API CREATE_PROFILE.

Use Cases:

* Selecting different symbologies or scanner settings (e.g. picklist mode) in specific fields
* Disabling the scanner in certain fields
* Porting an application from WM/CE, retaining the existing logic but just rewriting the application code.

This Java sample app is based on a Kotlin sample app from a previous blog post <a href="https://developer.zebra.com/blog/mimicking-field-level-profiles-datawedge-api">Mimicking Field-Level Profiles with the DataWedge API</a> 

>**Note**: This application is intended for demonstration purposes only. It is provided as-is without guarantee or warranty and may be modified to suit individual needs. The appearance of sample app screens can vary by sample app version, Android version, and screen size.

##APIs Used

<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>DataWedge API</th>
    <th>App Functionality</th>
  </tr>
  
  <tr>
    <td><a href="../../api/createprofile/">Create Profile</a></td>
    <td>Check for existing profile, create if it does not exist</td>
  </tr>

  <tr>
    <td><a href="../../api/switchtoprofile/">Switch to Profile</a></td>
    <td>Switch to the specific profile; associate the app to the specific profile</td>
  </tr>

</table>

##Requirements
* This sample was created based on DataWedge version 7.6 (version that existed at the time of creation). Check [DataWedge API](../../about/) documentation for any future version changes that may affect functionality. It should also work on older DataWedge versions provided the APIs are supported.
* Android API 23 (Marshmallow) or higher
* DataWedge (built-in all Zebra devices)

##Using This Sample
1. [Download](https://github.com/Zebra/samples-datawedge), build, and launch the sample app.
<img style="height:350px" src="profileswitch1-1.png"/>
  
2. Tap a text field, for example "Field 2." The **Active Profile** field displays _switch_profile2_, indicating the profile has been switched to profile2. 
<img style="height:350px" src="profileswitch1-2.png"/>


  
-----

**Related guides**:

* [DataWedge Intent APIs](../../api) 










