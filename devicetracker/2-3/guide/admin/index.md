---
title: Admin View
layout: guide.html
product: Device Tracker
productversion: '2.3'
---

## Overview
This section discusses the operations available for an administrator, providing a centralized view for device tracking when locating misplaced devices. 

As part of Zebra’s DNA Visibility Console, the server consists of multiple solution offerings. At the login screen, select “Device Tracker”, then sign in. To navigate to other solutions, click on the app menu icon at the top to the right of the "Device Tracker" title and select the desired app solution.

## Using the Web Console

Device Tracker provides a centralized dashboard displaying an inventory of deployed Zebra devices, along with information on tracking status, connection state, connected AP friendly name, device friendly name, charging status, remaining battery percentage, and more.

Below the tab bar, the top dashboard is lined with tiles that provide the total number of devices for each respective category and filter the devices based on that category with a click on the tile. The columns on the dashboard can be sorted by clicking on the double triangle to the right of the column name. Subsequent clicks sort the column in ascending order (triangle points upward) or descending order (triangle points downward). A tabbed menu is displayed at the top of the dashboard above the tiles providing access to different views: Active, Out of Service, and Settings. 

![img](DTRK_dashboard.jpg)
_Figure 1. Admin Dashboard_

Device Tracker tiles: 

* **Total Tracked** - Displays total number of devices registered with Device Tracker server.  

* Tracking status tiles:
 * **To Be Found** – Filters devices set with "To be found" status in the admin dashboard, in which action has not been taken yet to initiate the search for the target device. Designated by magnifying glass icon.
 * **Being Found** – Filters devices that are actively being searched. Triggered when user initiates a device search with Device Tracker client. Designated by footprint icon.
 * **Found** – Filters devices that have been successfully found after a search. Triggered when user indicates device is found with Device Tracker client. Designated by icon with green circle and a check mark in the middle.
 * **Cannot Find** – Filters devices that could not be found after a search was conducted. Designated by icon with red circle and an "x" in the middle.

* Connection state tiles:
 * **Connected** – Filters devices connected to the network.
 * **Not Connected** – Filters devices that have not reported to the server within the [Reporting Frequency](../config) time specified in the **Settings** tab, designating those devices as disconnected from the network and therefore cannot be found. 

* Battery status tiles:
 * **Low Battery** – Filters devices that have surpassed the [Low Power Alert Threshold](../config) value defined in the **Settings** tab and are therefore in low battery state. Low Battery devices require attention to be charged before the battery becomes depleted, preventing loss of device tracking.
     * **On Charge** – Filters devices that are powered and in the charge state. 

A search can be conducted based on device information from the table columns: Status, Connection State, AP Name, Battery State, Device Name, Device Model, Device Serial #, and Tags. In the Active tab, click the magnifying glass to produce a dropdown menu and select the data to search. Depending on the data being searched, additional options may be available for selection to refine the search. If required, enter in the text to search when prompted. When done with the search, select "Clear Search" from the dropdown menu.

Notes: 
* If no icon is displayed in the battery status column, it indicates that the device battery is not being charged and there is sufficient device battery charge.
* When the checkbox in the table header is ticked on the dashboard, it selects all devices listed in the page. 
* At the bottom left of the dashboard, select the "rows per page" drop-down and choose the value to increase the number of devices displayed in the dashboard.
* If a device is in the "Never Connected" state, no action can be taken upon it since it has not registered with the server.
* If searching for devices based on "Connection State" then filtering by "Connected - Known AP", the .csv file includes both "Connected - Known AP" and "Connected - Unknown AP" data when exporting the results. The data can be further filtered within the .csv file.

##Device Action
Action can be taken on any selected device(s) in the Active tab.  Once the device is selected from the dashboard, the Action menu is accessible with the following options:
* **Set device: To be found** – Marks the target device to be found.  This initiates the tracking process. The next time the target device reports to the server, it identifies it is marked "To be found" - the length of time this takes is based on both the defined [Reporting Frequency](../config/#applicationconfiguration) and the elapsed time since the last report was received (seen in the Updated column on the admin dashboard). 
Once the Device Tracker client detects this status change, it displays the marked device in the “Devices to be found” screen. A user can tap on the device listed then tap “Go” to begin searching for the marked device. 
* **Set device to: Out of service** – Removes the device from the active device pool and places it into the **Out of Service** tab. This can be used when a device is undergoing repair or is deprecated and no longer in use so must be removed from the device pool. Note: This does not apply to devices that never connected to the server.
* **Set device to: Active** - Changes the device back to the Active state. This option is available if a device is Found, Cannot be Found, or Out of Service.
* **Manage Tags** – Refer to [Organize Devices](./#organizedevices) section below.  
* **Clear Selections** – Unselects any selected devices in the dashboard.

##Organize Devices
Device tags provide the capability to identify and group devices for organizational purposes based on a common tag name. This name can be any desired form of identification such as location, department or job function. A tag name can be up to 65 characters in length. Device tagging is performed in the Active tab.

**Add Tag** – add or append a tag to any pre-existing list of tags for each device
1. Select the device to tag. Tick the checkbox for the device row.
2. In the **Action** menu at the top left of the table, select **Manage Tags**.
3. Enter a tag name in the text field. Press Enter key.
4. Click **Save** next to the entry field.
5. Click **Add** in the pop-up message.
6. Click **OK** in the confirmation message. The selected device is now tagged with the designated text and the tag name is displayed in the **Tags** column on the dashboard.

**Override Tag** - remove any pre-existing tag(s) and replace with the new tag
1. Select the device with an existing tag. Tick the checkbox for the device row.
2. In the Action menu at the top left of the table, select **Manage Tags**.
3. Enter a tag name in the text field. Press Enter key.
4. Click **Save** next to the entry field.
5. Click **Override** in the pop-up message.
6. Click **OK** in the confirmation message. 
The selected device is now tagged only with the designated tag, replacing the original tag string. The tag name is displayed in the **Tags** column on the dashboard.

**Delete Tag** - delete the specified tag 
1. Select the device(s) with an existing tag. Tick the checkbox for the device row.
2. In the **Action** menu at the top left of the table, select **Manage Tags**. 
3. Enter in the tag name to delete. Press Enter key.
4. Click **Save** next to the entry field.
5. A message appears asking which action to take. Click **Delete**.
6. Click **OK** in the confirmation message. 
The tag is removed from the selected device and the tag name is no longer displayed in the **Tags** column on the dashboard.

**Search Tag** - search for devices with the specified tag name
1. Click on the magnifying glass at the top left above the table. Select Tags.
2. Enter the tag to search in the field and click the **Search** button. While typing, auto-suggestions from existing tags appear – the desired tag can be selected. The web page may need to be refreshed for the auto-suggestion to appear.

##Export Data
A device report can be generated for inventory and tracking. In the **Active** tab, tap on the Export Data icon at the top right of the table and click on CSV to export the device information in .csv file format.

##Manage Users
Create additional users to access the server. After logging in as the administrator, click on the admin name at the top right of the Admin View and select **Manage Users**.

To add a user:

1. Click on the **Action** button.
2. Select **Add User**.
3. Enter in the required fields. Select the Access Type based on role:
     * **Admin** - administrative privileges with ability to create user accounts, perform actions, and view data
     * **Manager** - ability to perform actions, but cannot create users nor perform any user management
     * **User** - ability to view data
4. Click **Save**.
5. Click **OK** when the confirmation message appears.

<br>
<br>

-----

## See Also

* [About Device Tracker](../about)
* [Install & Setup](../setup)
* [Device Tracking](../mgmt)
* [Configuration](../config)
* [Troubleshooting & FAQ](../troubleshooting)