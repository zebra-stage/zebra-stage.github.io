---
publish: true
title: DWDemo
description: Built-in demonstration app that shows how data is acquired by using the DataWedge intent output. 
devices:
  - All supported Zebra Android devices
image: dwdemo_main.jpg
screenshots:
  - dwdemo_main.jpg
  - dwdemo_scanner_selection.jpg
  - dwdemo_sample_scan.jpg
  - dwdemo_options.jpg
layout: sample.html
product: DataWedge
productversion: '8.1'
nodownload: 'true'
date: 2018-11-10
---

##Overview 
DWDemo provides barcode scanning capabilities, demonstrating how data is acquired by an application using the DataWedge intent output. It is provided by default on all Zebra Android devices.

<img style="height:350px" src="dwdemo_launcher.jpg"/>
<i>Figure 1: DWDemo in Apps screen</i>

##How It Works
A DataWedge Profile called "DWDemo" is pre-configured in DataWedge and associated with the demo app. The DWDemo Profile must be enabled and can be modified as needed for testing or demo purposes. Once the demo Profile is enabled, tap the app's yellow Scan button or press the device hardware trigger to initiate a barcode scan.  Decoded data is displayed on the app screen. 

The DWDemo app supports scanning with the imager, camera, Bluetooth device or a magstripe reader (MSR), if one is connected.

Available actions in this demo app: 
* Capture barcode data and display decoded data
* Select input device for barcode scan, e.g. camera, scanner, Bluetooth device
* Toggle camera input type between image and barcode
* Toggle camera flash for camera barcode scan
* Access DWDemo profile

##DWDemo Settings
<img style="height:350px" src="dwdemo_main.jpg"/>
<i>Figure 2: DWDemo menu</i>

DWDemo menu settings (from left to right):
* **Lightning Bolt -** toggle the Camera Flash on or off (active when Camera is selected); control illumination mode for other devices. 
* **Input Device -** permit selection of input devices such as Camera, Scanner or Bluetooth device (if no Bluetooth device is connected, it attempts to pair to a Bluetooth device). 

<img style="height:350px" src="dwdemo_scanner_selection.jpg"/>
<i>Figure 3: DWDemo menu</i>

* **Camera input type -** toggle between image and barcode data capture (active when Camera is selected; varies by device).
* **DWDemo options menu -** access "About" screen and "Settings", which invokes the DWDemo Profile screen in DataWedge.

<img style="height:350px" src="dwdemo_options.jpg"/>
<i>Figure 4: DWDemo options menu</i>

DataWedge settings and preferences can be configured in the DWDemo Profile, shown below. 

##Using DWDemo
This guide requires a working knowledge of [DataWedge Profiles](../../profiles). 

<b>To activate scanning in the DWDemo app, the "Profile enabled" checkbox must be checked</b> (as shown) in the associated DWDemo Profile. Additional settings can be changed as required. 
<img style="height:350px" src="dwdemo_profile.jpg"/>
<i>Figure 5: Profile settings</i>

**To perform a test scan, tap the yellow Scan button** or **press the device Scan trigger** while pointing at an object to be scanned. 

Acquired data appears in the window, as below.
<img style="height:350px" src="dwdemo_sample_scan.jpg"/>
<i>Figure 6: Data captured with DWDemo</i>

By making changes in the DWDemo Profile, the associated DWDemo app can be used to test different decoders, rules for processing acquired data and other DataWedge configuration variations. For information about changing Profile settings, see [Managing Profiles](../../createprofile).  
  





-----

**Related guides**:

* [DataWedge Getting Started](../../profiles) for information on getting started
* [DataWedge Profiles](../../profiles) for information on DataWedge profiles 
* [Managing Profiles](../../createprofile) to change profile settings




