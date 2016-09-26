---
title: DataWedge Usage
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
---
##Overview 

The DataWedge app is included on every Zebra device and makes it possible to fetch barcode data from within an Enterprise Browser application without using the Enterprise Browser APIs. This guide explains how to configure an EB application to scan and acquire barcode data using DataWedge, which then enters the captured data as keystrokes into any EB input field. 

**Important: Control of barcode scanning hardware is exclusive**. When DataWedge is active, the Enterprise Browser Barcode APIs will be inoperable. Likewise, an Enterprise Browser app that uses Barcode APIs will prevent other apps (including DataWedge) from accessing the scanner. This guide explains how to take control of a device's scanner hardware and how to subsequently release it to other apps. 

**See also: [DataWedge User Guide](http://techdocs.zebra.com/datawedge/5-0/guide/about/)** 

###Use DataWedge for Scanning
Enabling DataWedge for use by an Enterprise Browser app requires two DataWedge profiles that were released with EB 1.4 to be downloaded and activated separately using the steps in the section below. Instructions shown are for Android, and will vary slightly for Windows devices. 

**To use DataWedge from within Enterprise Browser apps**: 

1. Go to the [Enterprise Browser 1.4 download page](https://portal.motorolasolutions.com/Support/US-EN/Resolution?solutionId=101080&redirectForm=search&searchQuery=%3FsearchType%3Dsimple%26searchTerm%3Denterprise%20browser%201.4) and get the following two DataWedge (`.DB`) profiles: 
	* **dwprofile_EnterpriseBrowser.db**
	* **dwprofile_RhoElements.db**
2. Copy the profiles to the `Android\data\com.symbol.datawedge\files` directory on the device, replacing existing files, if any. 
3. On the device, **install the Enterprise Browser app that will be using DataWedge** (if not already installed). 
4. **Start DataWedge** on the device. 
5. In DataWedge, select **Menu->Settings->Import Profile**. A list of available profiles appears ([as on this example screen](http://techdocs.zebra.com/datawedge/5-0/guide/advanced#importaprofile)).
6. From the list, **tap on one of the profiles** copied in Step 2. Focus returns to the previous screen and a confirmation message appears. 
7. **Repeat Steps 5 and 6** to import the other profile. 
8. **Tap the BACK button** to return to the DataWedge Profiles list. The "EnterpriseBrowser" profile is shown and enabled by default (the other is hidden). 

**For scanning to be enabled, the following additional conditions must also BOTH be TRUE**:

* **The &lt;usedwforscanning&gt; tag in the EB app's `config.xml` file must contain a value of "1"** 
* **DataWedge and the EnterpriseBrowser profile must be enabled** whenever using DataWedge from EB

To view and/or edit the `Config.xml`, see the [Config Editor Guide](../ConfigEditor). 

All Enterprise Browser apps configured in this way will use DataWedge for scanning. 

###Enable APIs for Scanning
Apps configured to use DataWedge for scanning as above will not be able to scan using the Enterprise Browser APIs. If API-based scanning from EB is required after setting up the device to use DataWedge, follow the steps below to disable the EnterpriseBrowser profile on the device. 

**To enable API-based scanning for an EB app on the device**: 

1. On the device, **start DataWedge**. 
2. From the DataWedge Profiles list, **tap the "EnterpriseBrowser" profile**. 
3. **Uncheck the "Profile enabled" checkbox**.   
4. **Set the value in the EB app's &lt;usedwforscanning&gt; tag to "0"**
5. Restart the EB app. 

Also see the Potential Conflicts section below for additional information. 

###Disable DataWedge
Since control of barcode scanning hardware is exclusive, it is possible that some apps will be prevented from using scanner hardware if DataWedge is enabled on the device, even if the EnerpriseBrowser profile is disabled. Use the following steps to disable DataWedge on the device. 

**To Disable DataWedge**:

1. Start the DataWedge app.
2. Select **Menu->Settings**.
3. Uncheck "DataWedge Enabled" checkbox.

This also will disable the EnterpriseBrowser profile. 

<!--
###Potential Conflicts
There are two scenarios that could disable scanning with the DataWedge application when Enterprise Browser is running. **This applies to Zebra Android devices only**. They are explained as follows:

1. DataWedge contains a hidden RhoElements profile associated with Enterprise Browser that disables scanner input on some newer Android devices. As a result, the scanner remains disabled when Enterprise Browser comes into the foreground.
2. While initializing Enterprise Browser, a newly created EMDK Barcode Manager instance sends a message that disables DataWedge scanner input.

The following settings correct both of these issues, and will prevent these known scenarios from disabling DataWedge scanning when Enterprise Browser is present on the device. 

####Setting 1: DataWedge Profile

1. **Export the DataWedge Profile0** from the device **(DW Profiles->Settings->Export Profile)**.
2. Move the exported (.db) file to a PC and open in an editor.
3. Make the RhoElements profile visible and **remove the Enterprise Browser association** from Associated/apps section.
4. **Save and move the new profile** to the device. 
5. In DataWedge, **import the new DataWedge profile (DW Profiles->Settings->Import)**.
5. In DataWedge, **create a new Enterprise Browser profile**.
6. **Enable Barcode Input and Keystroke Output** in the new profile.

> **NOTE**: When the profiles above are enabled in DataWedge, Enterprise Browser Barcode 4.x and Scanner 2.x APIs will not function because the scanning hardware will be exclusively controlled by DataWedge. To return scanner control to EB APIs, disable the DataWedge and Enterprise Browser profiles in the DataWedge app, set the usedwforscanning tag value to 0 (see below) and restart the EB app. 

####Setting 2: DataWedge Tag
Enterprise Browser 1.4 and higher addresses the EMDK issue with a new tag in the `Config.xml` file called `usedwforscanning`. **A tag value of 1 forces scanning through DataWedge**; a value of 0 (the default) will disable DataWedge scanning and revert to Enterprise Browser APIs on devices with EMDK installed. For more information, please refer to the [DataWedge tag section](../guide/configreference?usedwforscanning) of the Config.xml Reference. 

**Note**: An Enterprise Browser app that uses Barcode APIs will prevent DataWedge and other apps from accessing the scanner. To release scanner control, simply quit the EB app.
-->

##Barcode Scanning Options

###Barcode API
The [Barcode API](../../api/barcode) is the recommended means of performing barcode scans with Enterprise Browser apps. Enterprise Browser also provides the Scanner API, which provides backward compatibility with PocketBrowser and RhoElements apps. Please refer to those products for more information about the Scanner API. 

* API: Barcode

####Example 

    :::javascript
    EB.Barcode.enable();

###Meta Tags
This API provides backward compatibility for PocketBrowser and RhoElements applications.

* API: Scanner

####Example 

    :::html
    <META HTTP-Equiv="scanner" Content="enabled">

###ActiveXObject
This API provides backward compatibility for PocketBrowser and RhoElements applications.

* API: Scanner

####Example 

    :::javascript
    var scannerObj = new ActiveXObject("PocketBrowser.Generic"); 
    scannerObj.InvokeMETAFunction('Scanner', 'enabled');

###JavaScript Object
This API provides backward compatibility for PocketBrowser and RhoElements applications.

* API: Scanner

####Example 

    :::javascript
    scanner.enable();

**See also: [DataWedge User Guide](/datawedge/5-0/guide/about/)** 
