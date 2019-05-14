---
title: About Device Tracker
layout: guide.html
product: Device Tracker
productversion: '2.1'
---

## Overview

Device Tracker is a centralized solution that tracks and finds misplaced devices within a facility. As part of Zebra DNA Visibility Console, it leverages existing WiFi network infrastructure to locate devices, preventing device inventory shrinkage. When locating a device, Device Tracker identifies the general area where the device is located based on the Access Point (AP) the device is connected to within the facility. <!-- The Device Tracker client uses BLE (Bluetooth Low Energy) beacons transmitted from the misplaced device for proximity sensing based on its relative position to the device conducting the search. --> Audio can be played on the misplaced device to determine its location. Device Tracker centralized management system continuously monitors device presence, tracking status, connection state, and battery charge to ensure visibility of devices prior to reaching a disconnected or loss of battery state.

## New in Device Tracker 2.1
* **Disconnect Threshold Time** removed from [Application Configuration](../config/#applicationconfiguration) screen. 

##Main Features
Device Tracker main features:
*	General location information for all supported WiFi devices based on connected AP
*	Misplaced device prevention by monitoring low power and disconnection state
*	Centralized dashboard to easily view device information: WiFi connectivity (connection status, connected AP), tracking status (To Be Found, Being Found, Found, Cannot Find), battery information (percent battery remaining, charging status), and other information from deployed Zebra mobile computers. 
 * Filter and sort data
 * Search by status, AP name, device name, device model, device serial number, battery state, and tags
 * Device tagging for easier organization, identification, and tracking
 * Admin action to mark device "To be found", which adds the device to the search list on the associate's client app
*	Find and retrieve misplaced devices with client app using audio sound
*	Secure communications between the Device Tracker Client application and server
*	Friendly name assignment for APs and devices for ease of identification and tracking
*	Report generation to export data 
* Capability for device staging with the use of an EMM such as Zebra's [StageNow](/stagenow/latest/about) with [Battery Manager CSP](/mx/batterymgr).
 <!-- * Visually with BLE based animated and color-coded proximity indicator  -->

##How it works
Device Tracker consists of the following components:
*	Client – Device app collects and sends device data to server.
*	Server – Part of Zebra DNA Visibility Console, which also includes PowerPrecision Console. It collects and processes device data. 
*	Web portal - Part of Zebra DNA Visibility Console, which provides a centralized dashboard for monitoring device presence, tracking, and battery status. 

The Device Tracker client software registers the device with the server and reports device information based on the defined reporting frequency from the server settings. The Admin uploads a list of friendly names of Access Points within the facility, which identifies the general area or zone where the device is located when connected to the AP. From the web portal, the Admin marks the misplaced device "To be found".<!-- and the associate tasked to search for the missing device uses their own device as a proximity indicator to locate the misplaced device.--> On the associate’s device, the Device Tracker client provides a list of devices to be found. The associate selects the target device to find from the list and uses the AP friendly name (if configured) to identify the general area where the device is last seen. <!--To further pinpoint the device location, an animated BLE-based (Bluetooth Low Energy) proximity indicator displays a graphic showing how close the user is to the misplaced device. The indicator displays in red when "far" away from the device, orange when "near" the device, and green when "close" in proximity to the device. "Out of Bluetooth range" message appears if the user walks beyond the distance which the Bluetooth signal can be received from the target device. -->Audio can be played on the target device to locate it by sound. <!--, particularly if hidden from view. -->

The web portal provides a dashboard for administrators to monitor the status of all tracked devices, identifying any misplaced devices. The last known status is provided from devices so action can be taken to prevent lost or misplaced devices.

##Supported Devices
See supported [Zebra devices](../setup/#devicerequirements).
  
<br>
<br>
-----

## See Also

* [Install & Setup](../setup)
* [Admin View](../admin)
* [Device Tracking](../mgmt)
* [Configuration](../config)

