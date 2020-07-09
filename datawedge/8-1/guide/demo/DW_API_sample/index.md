---
title: DataWedge API Sample
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## Overview
The DataWedge API Sample App demonstrates the functionality for all major DataWedge APIs up to version 6.8, the latest version at the time of this writing. To utilize this sample application, a basic understanding of DataWedge is assumed.  For further information on DataWedge APIs as well as insight into this sample app, refer to [DataWedge APIs – Benefits & Usage Scenarios](https://developer.zebra.com/community/home/blog/2017/06/27/datawedge-apis-benefits-challenges) article by Zebra's engineer Darryn Campbell, from which this DataWedge API Sample originated from. 

*Note: This application is intended for demonstration purposes only.  It is provided as-is and may be modified to suit individual needs.*

### What's New
The new features in the sample application include:
* A new [SET_REPORTING_OPTIONS](http://techdocs.zebra.com/datawedge/latest/guide/api/setreportingoptions/) API provides control of Reporting features with intents (introduced in DW v6.6).
* The [SWITCH_SCANNER](http://techdocs.zebra.com/datawedge/latest/guide/api/switchscanner/) API now supports friendly device names with a new extra (introduced in DW v6.6).
* A new [IMPORT_CONFIG API](http://techdocs.zebra.com/datawedge/latest/guide/api/importconfig/) allows Config and Profile settings files to be imported using an intent (introduced in DW v6.7).
* New [SET_IGNORE_DISABLED_PROFILES](http://techdocs.zebra.com/datawedge/latest/guide/api/setignoredisabledprofiles/) API configures DataWedge to avoid switching to Profiles are are not enabled (introduced in DW v6.8).
* New [GET_IGNORE_DISABLED_PROFILES](http://techdocs.zebra.com/datawedge/latest/guide/api/getignoredisabledprofiles/) API returns the status of the IGNORE_DISABLED_PROFILES flag (introduced in DW v6.8).
* New [SWITCH_SIMULSCAN_PARAMS](http://techdocs.zebra.com/datawedge/latest/guide/api/switchsimulscanparams/) API enables runtime changes to SimulScan parameters (introduced in DW v6.8).

## Usage

After installing the APK you will notice the API features categorized by DataWedge API version. To quickly get up and running, launch the DataWedge API sample app. In the DataWedge 6.3 APIs section under the "Create Profile” option, tap **Send**. This creates the “DW API Exerciser Profile” in DataWedge and associates this app to that profile.  It registers for the intent broadcast to receive the scanned data from DataWedge. 

Tap the **Send** button to take action on any command. After sending a command, a toast messages appears indicating the status of the command sent.  Once a barcode is scanned, the data is populated at the top along with the scan source and decoder information.  

## Downloads

[DataWedge API Exerciser App](https://github.com/Zebra/samples-datawedge)

-----

## Related Guides

* [About DataWedge](http://techdocs.zebra.com/datawedge/latest/guide/about/)
* [The original tutorial](https://developer.zebra.com/community/home/blog/2017/06/27/datawedge-apis-benefits-challenges) | by Zebra engineer Darryn Campbell
* [DataWedge APIs](../) | for intent-based functions


