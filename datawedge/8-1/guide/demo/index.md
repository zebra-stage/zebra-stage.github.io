---
title: DataWedge Demo App
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## DataWedge Demo Apps

DataWedge features can be demonstrated and tested using: 

* **DWDemo -** included with all Zebra devices, documented below
* **[DataWedge API Sample app](./DW_API_sample) -** downloadable app shows how to use DataWedge APIs.
* **[Kitchen Sink app](https://developer.zebra.com/community/home/blog/2017/07/14/kitchen-sink-sample-v10-for-zebra-android-enterprise-mobile-features) -** downloadable, customizable app documented on download page 
* **[Sample Intent app](../api/tutorials) -** downloadable app shows how to receive scanned barcode data via an intent.

DWDemo shows how data is acquired by an application using the DataWedge service. A DataWedge Profile called "DWDemo" is installed along with DataWedge and associated with the demo app. Disabled by default, the Profile can be modified as needed for testing and demo purposes. Once the demo Profile is enabled (see below), pressing the app's Scan button or a device trigger initiates a barcode scan and decoded data is displayed on the screen. The DWDemo app supports scanning with the imager, camera, Bluetooth device or a magstripe reader (MSR), if one is connected. 

This guide requires a working knowledge of [DataWedge Profiles](../profiles). 

<img style="height:350px" src="DWDemo-icon-in-launcher.png"/>
_The DWDemo app as it appears in the Android App Drawer_. 
<br>

------

####Device Selector
The DWDemo app provides a menu of available scanning input devices, making it easy to switch from one to another for testing purposes. This and other DataWedge settings and preferences also can be configured in the DWDemo Profile, shown below. For information about Profile settings, see the [Manage Profiles](../createprofile) section.  

<img style="height:350px" src="02_dwdemo_device_selector.png"/>
<br>
**Device controls** (from left to right):
* **Lightning Bolt -** toggles the Camera Flash on and off (active when Camera is selected); controls illumination mode for other devices. 
* **Input Device -** permits selection of Camera, Scanner or Bluetooth device (if no Bluetooth device is connected, selecting Bluetooth will attempt to pair). 
* **Camera input type -** toggles between image and barcode data capture (active when Camera is selected; varies by device).
* **DWDemo "hamburger" menu -** invokes "About" panel and DWDemo Profile (see below).

------

####DWDemo Settings

<img style="height:350px" src="03_dwdemo_settings_menu.png"/>
<br>
DWDemo's "hamburger" menu (above) provides access to "Settings," which invoke the DWDemo Profile screen (below). 

**To activate scanning in the DWDemo app, the "Profile enabled" checkbox must be checked** (as shown). Additional settings can be changed as required. 

<img style="height:350px" src="04_dwdemo_profile.png"/>
<br>

**To perform a test scan, tap the orange Scan button** or **press the device Scan trigger** while pointing at an object to be scanned. 

Acquired data appears in the window, as below.

<img style="height:350px" src="05_demo_screen.png"/>
_The DWDemo app showing two acquired values_. 
<br>

By making changes in the DWdemo Profile, the DWDemo app can be used to test different decoders, rules for processing acquired data and other DataWedge configuration variations. For information about changing Profile settings, see [Managing Profiles](../createprofile).  


