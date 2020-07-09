---
publish: true
title: DataWedge API Exerciser
description: Shows how to exercise the various DataWedge Intent APIs.
downloads:
  - title: Sample Projects
    url: 'https://github.com/Zebra/samples-datawedge/archive/master.zip'
sources:
  - title: Github Repo
    url: 'https://github.com/Zebra/samples-datawedge'
devices:
  - All supported Zebra Android devices
image: dwapi-1.png
screenshots:
  - dwapi-1.png
  - dwapi-2.png
  - dwapi-3.png
  - dwapi-4.png
  - dwapi-5.png
  - dwapi-6.png
  - dwapi-7.png
  - dwapi-8.png
layout: sample.html
product: DataWedge
productversion: '8.1'
date: 2018-17-07
---

##Overview 
The DataWedge API Sample App demonstrates the functionality for all major DataWedge Intent APIs up to version 6.8, the latest version at the time of creation. To utilize this sample application, a basic understanding of DataWedge is assumed.  For further information on DataWedge APIs as well as insight into this sample app, refer to [DataWedge APIs – Benefits & Usage Scenarios](https://developer.zebra.com/community/home/blog/2017/06/27/datawedge-apis-benefits-challenges) article by Zebra's engineer Darryn Campbell, from which this DataWedge API Sample originated from. 

>**Note**: This application is intended for demonstration purposes only. It is provided as-is without guarantee or warranty and may be modified to suit individual needs. The appearance of sample app screens can vary by sample app version, Android version, and screen size.

##APIs Used
###APIs (6.x)
* [SoftScanTrigger](../../api/softscantrigger/)- used to start, stop or toggle a software scan trigger
* [ScannerInputPlugin](../../api/scannerinputplugin/) - enable/disable the scanner Plug-in used by the active Profile
* [enumerateScanners](../../api/enumeratescanners/) - return a list of scanners available on the device
* [setDefaultProfile](../../api/setdefaultprofile/) - set the specified Profile as the default Profile
* [resetDefaultProfile](../../api/resetdefaultprofile/) - reset the default Profile to Profile0
* [switchToProfile](../../api/switchtoprofile/) - switch to the specified Profile

###APIs (6.2):
* [Delete Profile](../../api/deleteprofile/)
* [Clone Profile](../../api/cloneprofile/)
* [Rename Profile](../../api/renameprofile/)
* [Get Active Profile](../../api/getactiveprofile/)
* [List Profiles](../../api/getprofileslist/)
* [Enable / Disable Datawedge](../../api/enabledatawedge/)

###APIs (6.3):
* [Get Version Info](../../api/getversioninfo/)
* [Register / Unregister for Scanner Notifications](../../api/registerfornotification/)
* [Create Profile](../../api/createprofile/)
* [Set Config](../../api/setconfig/)
* [Restore Configuration](../../api/restoreconfig/)
* Version 6.3 variants of the APIs first defined for 6.x e.g. SoftScanTrigger, ScannerInputPlugin, etc.

###APIs (6.4):
* [Set Config](../../api/setconfig/) (using the 'auto' scanner)
* [Get Datawedge status](../..//api/getdatawedgestatus/)

###APIs (6.5):
* [Result codes](../../api/resultinfo/) are given for supported APIs (mostly the Set... APIs)
* [Get Config](../..//api/getconfig/)
* [Get Disabled App List](../../api/getdisabledapplist/)
* [Set Disabled App List](../../api/setdisabledapplist/)
* [Switch Scanner](../../api/switchscanner/)
* [Switch Scanner Params](../../api/switchscannerparams/)

###APIs (6.6):
* [Set Reporting Options](../../api/setreportingoptions/)
* [Switch Scanner by Friendly Name](../../api/switchscanner/) 

###APIs (6.7)
* [Set Import Config](../../api/importconfig/)

###APIs (6.8)
* [Ignore Disabled Profiles](../../api/setignoredisabledprofiles/)
* [Get Ignore Disabled Profiles Status](../../api/getignoredisabledprofiles/)
* [Switch Simulscan Params](../../api/switchsimulscanparams/) 

##Requirements
* This sample was created to support DataWedge APIs up to version 6.8 (version that existed at the time of creation). Check [DataWedge API](../../about) documentation for any future version changes that may affect functionality.
* DataWedge (built-in all Zebra devices) is running on the device.

##Setup

Set up a Datawedge profile associated to this application:
1. Under the section "DataWedge 6.3 APIs", in "Create Profile" tap on the Send command.  
2. Check that a new profile named "DW API Exerciser Profile" is created in DataWedge with the following settings:
   * Profile: Enabled
   * Barcode input: Enabled
   * Intent output: Enabled
   * Intent action: com.zebra.dwapiexerciser.ACTION
   * Intent category: [leave blank]
  
   ![img](dwapi_profile-1.png) 
  _Figure 1: Profile settings, screen 1_

   ![img](dwapi_profile-2.png) 
  _Figure 2: Profile settings, screen 2_

## Usage

Install and launch the sample app. The API features are categorized by DataWedge API version. To quickly get up and running, in  "DataWedge 6.3 APIs" section under the "Create Profile” option, tap **Send**. This creates the “DW API Exerciser Profile” in DataWedge and associates this app to that profile.  It registers for the intent broadcast to receive the scanned data from DataWedge. 

  ![img](dwapi-3_mini.png) 
  _Figure 3: Create Profile_

Tap the **Send** button to take action on any command. After sending a command, a toast messages appears indicating the status of the command sent.  Once a barcode is scanned, the data is populated at the top along with the scan source and decoder information.  










-----

## Related Guides

* [About DataWedge](../../about)
* [The original tutorial](https://developer.zebra.com/community/home/blog/2017/06/27/datawedge-apis-benefits-challenges) by Zebra engineer Darryn Campbell
* [DataWedge APIs](../../api) 






