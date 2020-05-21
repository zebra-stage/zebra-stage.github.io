---
title: Frequently Asked Questions
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## Q: Should I use DataWedge or EMDK for my app?
A: For apps that require barcode scanning, Zebra strongly recommends DataWedge, particularly since it is a simpler approach to app development. DataWedge provides a quick and easy way to add data capture capabilities to an existing app and comes preinstalled on all Zebra devices. DataWedge can be used by configuring the UI without any coding required. Alternatively, all functions can be controlled programmatically through Android intents. See the [DataWedge vs. EMDK feature comparison chart](/help/#datawedgevsemdkcomparison) and the [Get Started](../gettingstarted) guide for more information. 

## Q: How do I configure DataWedge to capture data in an app without any coding?
A: DataWedge can be configured through the UI to capture data, process data based on specific requirements, and output data into any associated app or activity with the use of profiles. When DataWedge is invoked to scan and acquire data, the profile which the app is associated to formats or appends the data as specified, and then passes the data to the associated foreground app. Follow the procedure to [create a new profile](../createprofile#createanewprofile). For more information, refer to the [Profiles](../profiles) section and [Get Started](../gettingstarted) guide.

## Q: How do I integrate scanning within my app?
A: There are two intent-based interfaces into the scanner:
1. **Using a generic Android intent to acquire scanned data** - This eliminates the need to use DataWedge APIs to capture data. Refer to the [tutorial](../samples/tutorial-ReceiveScannedData) which walks through how to receive scanned barcode data into an app.
2. **Using [DataWedge APIs](../api) to control the scanner** - Provides the ability to programmatically control, modify and query the DataWedge configuration settings and operations through Android intents. This allows new or existing Android apps to be easily modified to acquire data using Zebra devices without concern of the underlying hardware. Refer to [Get Started](../gettingstarted) guide and [sample demo apps](../samples).

See our blog post on [how to interface the scanner through DataWedge](https://developer.zebra.com/blog/interface-device-scanner-android-devices-through-datawedge).

## Q: Scanning works in DWDemo but not in my own app. What am I doing wrong?
A: By default, the DWDemo profile is built-in to send scanned data via intent to the DWDemo app. A profile would need to be configured for your app to receive the scanned data. Make sure the profile is configured with the appropriate input (e.g. Barcode input) and output (e.g. Intent or Keystroke output). See [Managing Profiles](../createprofile/) on how to accomplish this.

## Q: I can scan barcodes but they are not sent to my app.  What am I doing wrong?
A: It is likely either a profile is not associated with your app or the profile input/output is not configured properly. DataWedge is using the default profile (Profile0) to perform the scan, which allows the scan beam to appear. However, if improperly configured, it does not know how to output the data captured. Either [create a profile](../createprofile/) and associate it with your app with the appropriate configurations or configure the default profile (Profile0) with the proper input/output to capture the scanned data.

## Q: How do I temporarily suspend scanning in my DataWedge app? 
A: There are two methods to temporarily disable the barcode scanner in an app using the Scanner Input Plugin:
1. **Enable / Disable** - can be called at any time
2. **Suspend / Resume** - much quicker but can be called only when the scanner is in the `SCANNING` or `WAITING` state. The scanner state can be retrieved using [Get Scanner Status](../api/getscannerstatus) or [Register for Notification](../api/registerfornotification).  

For more information and sample code, visit our blog on <a href="https://developer.zebra.com/blog/quickly-suspend-scanning-your-app-datawedge">how to quickly suspend scanning in your app with DataWedge.</a>

## Q: How do I mass deploy my DataWedge settings and configurations? 
A: Once DataWedge is set up and configured as desired on a device, settings can be saved to a file and distributed to other devices either manually or using a Mobile Device Management (MDM) system. There are two files that can be exported:
1. **Config** – contains DataWedge settings, including all profiles and related configurations, and saves them to ‘datawedge.db’.
2. **Profile** – contains individual profile settings, including how to capture, process, and output data acquired, and sames them to ‘dwprofile_[profileName].db’, where [profileName] is the name of the profile.
See [Mass Deployment](../settings#massdeployment) for more information.

## Q: How can I determine which features are supported with the specific DataWedge version on my device?
A: Once a version is selected from the version selector dropdown in the DataWedge tile from the main TechDocs page, subsequent navigation to related DataWedge pages displays information specific to that version. 
<img style="height:200px" src="version_selector.png"/>
<i>DataWedge version selector</i>
<br> 
The selected version is also reflected in the URL. See [Which Version is Installed](../about#whichversionisinstalled) to check for the DataWedge version running on the device.

## Q: Does DW support NFC?
A: No, NFC is supported with [EMDK for Android](/emdk-for-android/latest/guide/samapiusage) with Secure NFC or Android’s NFC API.

## Q: Can I test my scanning app on an emulator?
A: Zebra recommends testing apps on the actual hardware. When this is not possible, adb shell commands can be used to simulate data captured by DataWedge that is sent to the device when scanning barcodes. Refer to this related [blog post](https://developer.zebra.com/blog/test-your-zebra-scanning-application-emulator) for more details. 

## Q: Can DataWedge APIs control data capture in real-time?
A: Yes, [DataWedge APIs](../api) provide dynamic control over data capture whether via scanner, magnetic stripe reader, RFID, serial/USB port, SimulScan, or voice. 


-----

Related Guides: 

* [DataWedge Get Started guide](../gettingstarted)
* [Profile Overview](../overview) 
* [Profiles/Plug-Ins](../profiles)
* [DataWedge sample apps](../samples)
