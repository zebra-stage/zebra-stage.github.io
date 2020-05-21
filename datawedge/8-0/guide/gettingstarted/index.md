---
title: Get Started
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## Overview

DataWedge allows any application on Zebra devices to capture data from barcode, MSR, RFID and other input sources, to process the data and to output it as keystrokes, from intents, or over a network connection. DataWedge actions and settings can be controlled using DataWedge profiles from the UI (aka the “zero-code” approach) or controlled programmatically. When an application screen is displayed in the foreground, DataWedge automatically detects which profile the app or activity is associated to and applies the configuration from the profile. There are 3 approaches to capture data:

* **“Zero-code"** - No coding is required. Create [profiles](../profiles) through the DataWedge UI to control scanning behavior. Once an app/activity is associated to the profile and the output is set to Keystroke, data can be captured into any editable text field within the app. Options are available to define how the data is captured (input) and processed. A default profile, Profile0, enables data capture into the text field of any application. 
* **Minimal code** - Basic method to retrieve data from generic Android intents with the use of a broadcast receiver without the need for finer control of scanning activity or data processing. Refer to [basic intent sample app](../samples/basicintent1).
* **[DataWedge APIs](../api)** - Uses intents to control DataWedge settings and specify how the data is captured, processed, and delivered to the app without concern of the underlying hardware. 

DataWedge APIs are often used in preference to Zebra’s EMDK. Developing EMDK apps require a thorough knowledge of scanning APIs - designing and coding EMDK apps can be time consuming due to its higher level of difficulty. DataWedge offers a simpler interface, better API ease-of-use, and flexibility. DataWedge data may be retrieved from any application regardless of the underlying application technology (e.g. Java, Xamarin, Cordova). DataWedge and EMDK provide similar features and control over data capture. See [DataWedge vs EMDK Comparison table](/help/#datawedgevsemdkcomparison) for more information.

Control of barcode scanning hardware is exclusive. When DataWedge is active, Scanner and Barcode APIs of apps, such as an EMDK app, become inoperative. Likewise, when an app controls the scanning hardware, other apps (including DataWedge) are locked out. It is therefore important to understand how to take control of a device's scanner hardware and, if necessary, release it to other apps when scanning is complete. For more information, see the section on disabling DataWedge. 


## DataWedge Features

Each app that uses DataWedge is associated with a [DataWedge profile](../profiles), which contains options that determine how the data is to be acquired (input), processed (data formatting), and delivered to the receiving app (output). These options are referred to as plugins (e.g. barcode input plugin). DataWedge continually monitors the foreground application - when it detects a change to the foreground app, it activates the appropriate profile associated with the app (if one exists). If the app is not associated with any profile, _Profile0_ is the default generic profile that takes effect. A profile can be exported so the same DataWedge configurations can be deployed across multiple devices.  

For example, "App A" might require a TAB to be sent after each dataset is passed from DataWedge, "App B" might require the ENTER key to be pressed instead. Through Profiles, DataWedge can be configured to process the same set of captured data according to the requirements of any number of individual applications. Alternatively, a single Profile can be created and associated with many applications, acquiring and processing data in the same way for all. 

**[DataWedge Plugins](../profiles)** are specified in profiles and determine how the data is captured (input), processed (formatted) and delivered to the app (output). Furthermore, optional profile specific configuration settings are categorized as _Utilities_, which can be associated with apps or controlled at runtime. 

* **Input plugins -** specify how the data is captured:  
 * **[Barcode](../input/barcode) –** specify the device scanning hardware, decoders, decoder parameters, reader parameters, and scan parameters applied on the captured data prior to sending the data for processing. The supported hardware can include the integrated built-in devices (such as 1D scanner, 2D scanner, and camera), or externally connected devices (such as barcode scanner, Bluetooth scanner, and USB SSI Scanner). 
 * **[MSR (magnetic stripe reader)](../input/msr) -** acquire data from an MSR card, such as a credit or debit card, on supported hardware. 
 * **[RFID (radio-frequency identification)](../input/rfid/) -** acquire data from an RFID tag with the integrated RFID reader built-in some Zebra mobile computers. 
 * **[Serial port](../input/serial) -** acquire data from a peripheral device connected via serial port. 
 * **[Voice](../input/voice/ )-** acquire data via speech recognition. Configurations include: define a start/end phrase, send a tab/enter command, limit data to alpha or numeric characters, spoken data validation, and working offline. 

* **Processing plugins -** specify how to format the captured data prior to passing it to the output plugin:
 * **[Basic Data Formatting (BDF)](../process/bdf) -** format data with basic pre-defined options prior to passing it to the output plug-in. Options available: add data prefix, add data suffix, send data to foreground app, send data in hex format, append TAB key, and append ENTER key. This can be useful when scanning data to automatically move to the next text field by appending a TAB key. 
 * **[Advanced Data Formatting (ADF)](../process/adf) -** format data based on custom rules with specific criteria prior to passing it to the output plugin. This can be useful in cases such as triggering an action to pad data with zeros only if the middle 3 digits of an acquired 9 digit Code-128 barcode matches the same 3 digits specified in the rule. 

* **Output plugins –** specify how data is delivered:  
 * **[Keystroke](../output/keystroke) –** acquired data is sent to the associated application as a series of keystrokes into an editable field. It can be used to add scanning capabilities to an app without adding any code, furthermore it is also fully configurable via the DataWedge Intent API.  
 * **[Intent](../output/intent/) –** data acquired is programmatically sent to the associated foreground app/activity using the Android intent mechanism. This is useful when data simply needs to be sent to the app screen without allowing the user to edit it. Register for the DataWedge intent to receive the captured data. 
 * **[Internet Protocol (IP)](../output/ip) –** acquired data is sent through a network to a host via specified IP address and port using TCP or UDP. This can be useful to scan data to a PC such as in healthcare environments. 

* **Utilities -** optional tools to use: 
 * **[Data Capture Plus (DCP)](../input/dcp) –** enables specified areas of the device screen to behave as a virtual scan trigger when tapped, simulating a hardware trigger press. It can be configured in full-screen mode or as a floating scan button placed on the right, left, or both sides of the screen.
     * **[Enterprise Keyboard Designer](/ekd/latest/guide/about) –** enables the use of custom Enterprise Keyboard layouts within an associated app without modifying the app. Uses a desktop tool, Keyboard Designer, to generate the Enterprise Keyboard layout.

**[DataWedge Settings](../settings) -** provide configurations to general, non-profile related DataWedge options. It includes actions such as ignore disabled profiles, disabled app list, import/export profile, and reporting. 

**[Auto Import](../settings/#autoimport) –** provides the ability to automatically load pre-configured profiles or configuration files in DataWedge. This can be used for device remote deployment using tools such as third-party Enterprise Mobility Management (EMM) systems. DataWedge monitors a particular folder for the profile or configuration file. If a profile or configuration file is found, it imports the file to replace any existing configuration or profile.  

**[Mass Deployment](../settings/#massdeployment) -** DataWedge profiles and settings can be deployed to multiple devices either manually or with an EMM (Enterprise Mobility Management) software. The exported config file or profile can be automatically imported when placed in the `/enterprise/device/settings/datawedge/autoimport` directory.  

**[Create a Profile and Associate App with Profile](../createprofile) -** The basic steps for creating a Profile and associating an app with the profile on the device are shown below. For most scenarios, a version of this process must be used for every app that will call on DataWedge for scanning services. To enable DataWedge scanning services for an app:

1. **Install the app** that will use DataWedge for scanning. 
2. **Start DataWedge** app and navigate to the Profiles list (if not shown by default).  
3. Tap on the Profiles screen's "hamburger" menu and select **New profile**. 
4. **Enter a name for the Profile and tap OK**. The new Profile appears in the Profiles list. 
5. Tap on the new profile.
6. Select **Associated Apps** from the Applications section.
7. In the Hamburger menu, select **New app/activity**. A list of installed apps appears. 
8. Select your app's package name (scrolling down, if necessary).
9. Tap the asterisk (*) to associate all of your app's activities with DataWedge. 
10. Tap the device's Back button until the new Profile's Settings screen appears.
11. Confirm that the "Profile enabled" checkbox is checked. 
12. As needed, **confirm that Barcode Input and Keystroke Output are enabled**. <br>

The app now uses DataWedge for barcode data acquisition. Test and adjust input, processing (data formatting) and output parameters as necessary.


## DataWedge API
<!--
DataWedge leverages [Intents](../output/intent), a common application component used in Android programming. The DataWedge service has a broadcast receiver that listens for and responds to broadcast intents to determine what action to take. There are 2 levels for coding: 

* **Minimal coding –** retrieves data from generic Android intents with the use of a broadcast receiver. Requires barcode input and intent output to be enabled in the profile. Refer to [basic intent sample app](../samples/basicintent1).
* **[DataWedge Intent API](../api) -** uses API intents to have finer control over DataWedge settings and how the data is captured, processed, and delivered to the app. Multiple API calls can be sent as extras using a single intent action. Refer to [barcode scanning sample app](../samples/barcode1). 
-->
This section provides guidance on how to use [DataWedge Intent APIs](../api). An application accesses the DataWedge API by sending an intent to query or modify a configuration. Changes can take place at runtime if supported by the API. The action and data of the intent specifies which DataWedge API function to perform. Function prototype: 

	Intent i = new Intent(); 
	i.setAction("com.symbol.datawedge.api.ACTION"); 
	i.putExtra(EXTRA_DATA, "<parameter>"); 

A query is made to the DataWedge API by sending a broadcast intent and a reply is received via broadcast intent.  

Basic Usage Guide: 

* **Create profile / update existing profile / configure multiple plugins with a single intent action:** Customize data capture with a DataWedge profile using [Set Config API](../api/setconfig) to create a profile, update a profile, or configure multiple plugins (input, processing, output, utilities) with a single intent. Sample use cases: 
 * Modify the active profile to only enable certain decoders within particular screens in your application workflow to improve scan performance. 
 * Update a profile based on user preferences when the application is running in the foreground. 
 * Use pre-configured profiles to capture data depending on the app running in the foreground. 
 * Modify scanner parameters to perform certain actions, such as emit a continuous scan beam with a single trigger press.  
* **Enable/Disable data capture:** Enable/disable DataWedge scanner and foreground activity monitoring with [Enable DataWedge API](../api/enabledatawedge). This can be used to allow other application, such as Enterprise Browser, to use the device scanner exclusively.  
* **Support multiple scanner types across different Zebra devices:** To retrieve the available scanner types on the device (such as internal imager, internal camera, connected Bluetooth, etc.), use [Enumerate Scanners API](../api/enumeratescanners). This is useful if the application is used across different Zebra devices that support different types of scanner hardware. 
* **Initiate barcode scanning in the app UI:** Trigger barcode scanning with a button tap in the app by using [Soft Scan Trigger API](../api/softscantrigger). Refer to [barcode sample app](../samples/barcode1). 
* **Check version information to ensure feature support:** Retrieve the DataWedge version on the device with [Get Version Info API](../api/getversioninfo). This can be used to identify whether the device supports a particular feature in use and take action by enabling/disabling the feature based on availability.  
* **Modify barcode scanner parameters at runtime:** When barcode scanner parameters need to be modified dynamically at runtime but not persist within the profile, use [Switch Scanner Params API](../api/switchscannerparams). For example, an application can have a button to allow the user to set the trigger to continuous mode on demand without setting this in the profile as it is not desired to be set as the default behavior. This is a temporary update - once the “switch” happens, the setting is not persisted if the profile changes.  
* **Enable/disable or temporarily suspend/resume barcode scanning during runtime:** Dynamically control the integrated barcode scanner (laser, imager, internal camera) to enable/disable the trigger in certain areas of the application workflow or suspend/resume scanning to temporarily activate/de-activate the scanner using [Scanner Input Plugin](../api/scannerinputplugin). Status change notifications include the active profile name, which permits an app to use the enable/disable scanner calls only when status changes affect a relevant profile. This can be useful to change the scanner state in quick succession, for example when there are multiple text fields and it is desired for scanning to suspend when a particular text field is in focus, use Scanner Input Plugin to suspend the scanner in that particular text field. 
* **Monitor configuration, scanner, and profile switch changes:** Register/unregister to receive notifications for changes related to configuration, scanner and profile switches using [Register for Notification API](../api/registerfornotification). These changes can result from DataWedge API calls (such as Import Config, Switch to Profile, and Scanner Input Plugin) or DataWedge profile changes (such as profile Auto Import).   
* **Import profile or configuration:** After a profile or configuration file, which can contain multiple profiles, has been exported and placed onto a device, the settings can be imported programmatically with [Import Config API](../api/importconfig) or [manually](../settings/#importaprofile).   
* **Remove profile:** When a profile is no longer needed, it can be removed with [Delete Profile API](../api/deleteprofile). This can be useful if there is an app that utilizes a profile for a one-time task or a profile needs to be removed when exiting the app. 
* **Duplicate an existing profile:** Create a copy of an existing profile with [Clone Profile API](../api/cloneprofile). This can be useful if an app requires multiple profiles with common configuration parameters yet each profile may vary with minor differences – after duplication the cloned profile can be passed to Set Config to set the differing configuration. 
* **Retrieve profile list:** Retrieve all the DataWedge profiles using [Get Profiles List API](../api/getprofileslist). This is useful if an app needs to query the profile list to find a particular profile or if it needs to present a list to the user for a profile to be selected. In cases where an app creates a DataWedge profile upon app launch – a check can be included to determine if the profile exists by retrieving the profile list to improve performance and avoid unnecessary file input/output operations. 
* **Use different profiles based on application workflow:** For flexibility in using profiles that are not associated with another application, to switch profiles during runtime, and to overcome the restriction of associating an app activity with only one profile, use [Switch to Profile API](../api/switchtoprofile) to activate profiles that are not already associated with another app. This can be helpful to use different profiles within the same app activity, for example if an area of the activity requires PDF417 barcodes to be scanned and another area of the activity requires MSR card data to be read. When focus is on scanning PDF417 barcodes, use SWITCH_TO_PROFILE to activate the profile with the barcode configurations. Similarly, when focus is on reading the MSR data, use SWITCH_TO_PROFILE to activate the profile with the MSR configurations. Both profiles must not already have an app associated. 

 
## Best Practices 
The following information provides guidance and best practices for DataWedge application development.

###General
* **Scanning performance optimization:** To improve scanning performance, Zebra recommends disabling all Decoders not required by the app(s) associated with a given Profile. 
* **Profile configuration across multiple apps:**  DataWedge is a global service and any application on the device can interact with it to configure any profile.  Therefore, care should be taken if multiple applications are trying to modify the same set of profiles. 

###Data Capture 
* **Temporarily suspend or de-activate scanning in app:** Use Scanner Input Plugin API with SUSPEND_PLUGIN/RESUME_PLUGIN parameters.  
* For situations that require **rapid changes between suspend/resume status,** use Scanner Input Plugin and register for SCANNER_STATUS notifications. When the scanner is activated (for example from a profile configuration or from RESUME_PLUGIN or ENABLE_PLUGIN intent API), SCANNER_STATUS broadcasts the WAITING and SCANNING states, rotating between each depending on whether scanning is taking place. For the app to suspend scanning, act only when in the SCANNING and WAITING states - when these states are broadcasted, use SUSPEND_PLUGIN parameter to remain in the suspended state and keep the scanner unusable. Once scanning is suspended, SCANNER_STATUS broadcasts the IDLE state. Use RESUME_PLUGIN to re-activate the scanner.  
* **Capture data and photos in a single app:** It is possible to take pictures and capture barcode data using the same application if the application was designed with this in mind. 
	1. Add separate Activities in the app: one for barcode scanning and another for picture taking. 
	2. Create a DataWedge Profile with the following settings: 
	3. Associate the Profile with the picture-taking Activity 
	4. Disable scanning in the Profile 
	5. Use the standard Android-SDK APIs to control the camera 
	6. When the app is used for scanning, the default DataWedge profile will come into effect. 
	7. For accessing specific decoders, processing rules or other special scanning needs, a second DataWedge Profile can be created and associated with the barcode scanning activity of the app. 
* **Data dispatched too quickly:** If data is being dispatched too quickly for the application to accept, such as when using terminal emulation apps, this can be addressed by adding a delay between each character sent to the app with the use of `keystroke_character_delay` in [Set Config](../api/setconfig). Refer to Keystroke Output Parameters section and example code provided in section “Configure an inter-character delay”.  This parameter should be used with caution as it can negatively affect application performance. 
* When using [DataWedge intent APIs](../api/overview) to **query DataWedge for information** (such as Get Active Profile), the app must register to receive the result with a filter that identifies the action and category of the result intent. 

###Profiles 
* **Existence of duplicate Associated Apps when importing profiles:** If a duplicate [Associated App](../gettingstarted) exists between a current profile and a profile being imported, the profile being imported will not take into effect. For example, if current profile A is configured with an associated app and that same app is associated with profile B, when importing profile B the import does not take into effect due to the duplication. This similarly applies if an app is listed in the [Disabled App List](../settings) and that same app is an Associated App in a profile being imported - the import does not take into effect and the app remains on the Disabled App List. 
* **Activity/app association with profiles:** A single profile can be associated with one or more activities or apps.  However, an activity or app can be associated with only one profile. If there is a requirement to associate an activity or app to more than one profile, this can be addressed with SWITCH_TO_PROFILE, which does not specify any associated apps. <br>
The following example discusses the use of SWITCH_TO_PROFILE with SCANNER_INPUT_PLUGIN with two activities: Activity A launches and uses Switch to Profile API to switch to ProfileA, which SCANNER_INPUT_PLUGIN is enabled, then at some point it disables the scanner plug-in. Activity B is launched, associated with ProfileB. DataWedge switches to ProfileB. When activity A comes back to the foreground from the onResume method, activity A needs to use Switch to Profile to switch back to ProfileA, then use the same API intent again to disable the scanner plug-in, to return back to the state it was in. Reminder: Use of this API changes only the runtime status of the scanner; it does not make persistent changes to the Profile. The above assumes that ProfileA is not associated with any applications/activities, therefore when focus switches back to activity A, DataWedge will not automatically switch to ProfileA - therefore activity A must switch back to ProfileA in its onResume method. Because DataWedge will automatically switch Profile when an activity is paused, it is recommended that this API function be called from the onResume method of the activity.


## Sample Apps

As of writing, the following [DataWedge sample applications](../samples) are available: 
* [Basic scanning app](../samples/basicintent1) – uses an Android intent without DataWedge intent APIs
* [Scanning app](../samples/barcode1) - includes ability to perform the following using DataWedge intent APIs: 
 * Select decoders 
 * Create a profile 
 * Register for scanner status notifications 
 * Receive barcode data 
 * Use a software scan trigger 
* [Signature capture app](../samples/signaturecapture) – uses [Decoder Signature](../input/barcode/#decodersignature) to capture an area within a document, such as a signature, enclosed by a specific pattern and save this to an image 
 
-------

Related information: 
* [DataWedge Profiles](../profiles) - links and details for all DataWedge Plug-ins
* [DataWedge Profile Architecture](../overview) – explains how DataWedge uses Profiles and Plug-ins
* [Create a DataWedge Profile](../createprofile) 
* [Using DataWedge APIs](../api/overview)
* [Using Intents](../output/intent) - A brief primer on intents and how to configure DataWedge 
* [DataWedge APIs](../api)
