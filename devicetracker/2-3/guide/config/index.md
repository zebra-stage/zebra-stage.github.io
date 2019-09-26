---
title: Configuration
layout: guide.html
product: Device Tracker
productversion: '2.3'
---

##Overview
This section discusses configuration settings for Device Tracker on the server and client.

##Server Configuration
In the [Admin View](../admin) dashboard, click on the **Settings** tab to display the Application Configuration and Device & Access Point Management screen. 

###Application Configuration
* **Server URL** - Server URL address used by the device to communicate with the server. This is entered into the Device Tracker client Settings screen.
* **Low Power Alert Threshold %** - Defines the battery % threshold value. Devices below this threshold value are categorized in Low Battery state as seen in the dashboard. Minimum value: 10, maximum value: 95.
* **Reporting Frequency** - Defines the frequency in minutes for the Device Tracker client to report to the server. When a device is marked to “To Be Found”, the Reporting Frequency time needs to elapse (eg. minimum of 5 minutes) before starting the device search with the Device Tracker client. If the device does not respond within the defined time frame, it is considered to be in the disconnected state. <!-- This value should be set lower than the **Disconnect Threshold Time**. -->Minimum value: 5, maximum value: 60.

* **Chirping**:
 * **Volume Level** - Specifies the loudness level of the chirping sound to be heard from the device being located. Minimum value: 15, maximum value: 100.
     * **Duration** - Amount of time in seconds for the chirping to sound on the device being located. Minimum value: 1, maximum value: 30.

* **Bluetooth LE-** Enable/disable Bluetooth LE (Low Energy) for proximity tracking. If enabled, displays a BLE proximity indicator in the client app identifying how close or far the tracking device is in reference to the target device being tracked. Proximity is based on Bluetooth beacons detected from the tracking device received from the misplaced device. If disabled, no BLE proximity indicator is displayed on the client device; therefore, the user must rely on audio for device tracking. If a device is in the process of being tracked and BLE is toggled, a notification message appears on the tracking device displaying the BLE status change and the screen refreshes accordingly in displaying the proximity indicator.

<!--
 * **Disconnect Threshold Time** - Defines the amount of time (hours and minutes) to elapse for a device to be considered in the disconnected state due to lack of response from the device within this time frame. Minimum value: 7 min, maximum value: 12 hours. -->

###Device & Access Point Management
* **Data Imports** - Import pre-defined Access Point (AP) and device friendly names to aid in locating and identifying devices using .CSV files. It is particularly important for the AP friendly name to be easily understood for users to determine the location within the facility, for example by department name: clothing, produce, household, etc. Importing data either modifies or adds entries to the existing database. Steps for data import for both access points and devices:
    1.	Download the supplied template by clicking on “Download Sample” next to the appropriate category.
    2.	Open the .csv file. Fill in the necessary information and save changes.  
    3.	Tap on “Upload CSV File” next to the appropriate category. Browse and select the updated file. 
    4.	Check the status in Data Upload History. If successful, the data is uploaded. 
Make sure to have write permissions to the ZDVC folder and subfolders.
<br>
<br>
  **Important**: 
     * Some applications, such as Microsoft Excel, may automatically modify the data format unexpectedly. Ensure the fields are formatted appropriately, such as the serial number in "number" format (with no decimal places). Otherwise Zebra recommends using a text editor to edit the .csv file. 
     * When uploading a .csv file using Microsoft Internet Explorer, a "Wrong File Format" error message may appear indicating that only .csv files are accepted. Continue with selecting the file to successfully upload the Device or AP information.

* **Data Upload History** - Displays the status of the last 10 records of the Access Point and device upload history. The data is created in the database if it does not previously exist. If the data previously exists, it is updated in the database. For the device .csv, the device model and serial number combined provide the device uniqueness.

##Client Configuration
From the Device Tracker client, in the main screen tap on the hamburger menu at the top right and select **Settings**.  Enter in the information:

* **Server URL** - URL address of server to communicate with and send data
* **Server Auth UserName** - Designated authorized user name specified during server install.   
* **Server Auth Password** - Designated authorized password specified during server install.


<br>
-----

## See Also

* [About Device Tracker](../about)
* [Install & Setup](../setup)
* [Admin View](../admin)
* [Device Tracking](../mgmt)
* [Troubleshooting & FAQ](../troubleshooting)