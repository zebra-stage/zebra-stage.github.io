---
title: Device Tracking
layout: guide.html
product: Device Tracker
productversion: '2.3'
---

## Overview
Monitoring device presence and prevention of misplaced devices is important for smooth operational productivity. This section covers the procedures to organize, track, locate, and prevent misplaced devices.

**Version History**
* **Device Tracking 2.3 -** New BLE (Bluetooth Low Energy) feature for device proximity tracking.

## Locating Devices
The facility administrator monitors devices from the [admin dashboard](../admin) and can mark a device "To be found" if it is misplaced or at risk, e.g. needs to be charged due to low battery. The administrator assigns an associate to search the target device by using their Zebra device to locate the general area the target device resides based on the Access Point (AP) where it last connected. The BLE proximity indicator can be used to identify how close or far the target device is in relation to the associate. To further pinpoint device location, a sound can be played by tapping the **Play Sound** button on the associate's device to locate the target device by audio sound. The volume level and sound duration are adjustable in the server [Settings](../config).

**Important**:
* WiFi must be enabled on both devices.
* For BLE proximity tracking, Bluetooth must be enabled on both devices.
* When **Play Sound** is tapped repeatedly on the client during network congestion, the congestion may cause a delay in the playback. Once the congestion disappears, the audio plays back once based on the last tap to play audio.
* During network congestion, client requests over WiFi frequency band 2.4 GHz may not reach the server. For example, requests to **Play Sound** may not reach the intended device. In this situation, Zebra recommends to move to a 5 GHz frequency band or move to another network without congestion.
<!--
* During network congestion, the user may need to wait for 10 seconds before being able to exit the Play Sound screen by tapping the device back button. // Remove per SOLA-4230, issue no longer reproduceable-->

<!--
1. **Animated BLE proximity indicator** – Shows the proximity range of the target device in relation to the searching device. The animation and color changes reflect the proximity as the user moves closer or further away from the device being searched.
Within proximity of about 1 meter, distance estimation ranges between 0.5 to 2 meters. Further distances will encounter more variation - at 20 meters or more the estimate may vary between 10 to 40 meters. --> 



###Procedure to find a device
The procedure to locate a device follows (based on user role):
1. **Administrator marks the target device "To be found".** <br>
<font color="orange">[Admin]</font> From the [dashboard](../admin) in the web portal, the administrator selects the device to find within the table and sets it to the “To be found” state: <br>
       A. Tick the checkbox for the device row. <br>
       B. Click on the Action menu and select “Set device: ‘To be found’”.  <br>
       C. Click “OK” on the confirmation message. The device status changes from "Active" to "To be found". <br>
The next time the target device reports to the server, it identifies it is marked "To be found" with a notification message. The length of time this takes is based on the [Reporting Frequency](../config/#applicationconfiguration). <!--and the elapsed time since the last report was received (seen in the **Updated** column on the [admin dashboard](../admin)) <sup>[1]</sup>. -->
2. **An associate is tasked to find the device.** <br>
<font color="orange">[Admin]</font> The administrator assigns an associate to find the device, using the client app on their device as a locationing tool.
3. **Start device search based on connected AP.** <br>
<font color="blue">[Associate]</font> Open Device Tracker client on the associate's device. In the list of "Devices to be found", tap on the target device to find. The **Device Details** screen appears providing information on the device including “Last Connected AP”, which identifies the last known AP zone where the device is located. Walk to the AP zone and tap **Go** to begin the device search. The target device displays a notification indicating the device is marked "To be found." <br>
<font color="orange">[Admin]</font> On the admin dashboard, the device automatically changes state from "To be Found" to "Being Found". 
4. **Walk towards the target device based on the BLE proximity meter, if [BLE is enabled,](../config).**<br>
The Bluetooth Low Energy proximity meter identifies the _overall trend_ on how far or how close the user is located to the target device. The closer the user is, the further the blue indicator bar expands to the right and the lower the numerical value on the meter as the indicator reaches “Close” or “0” value. _Proximity is determined based on the strength of the Bluetooth signal received from the target device. The accuracy of proximity may vary depending on multiple contributing factors, such as noise on the signal measurement, signal reflections and interference._ In the Proximity screen, the BLE signal detection status is displayed next to the Bluetooth icon with one of the following values:
       <ul>
       <li><b>Signal good –</b> Bluetooth beacons are detected and read from the target device; the estimated proximity is reflected in the meter indicator.</li>
       <li><b>Finding Signal –</b> Bluetooth beacons are no longer detected from the target device after initial detection. The Bluetooth signal could be blocked or out of range.</li>
       <li><b>No Signal –</b> Bluetooth beacons are not detected. Possible causes include problems with the Bluetooth radio on either device, the Bluetooth signal is blocked, or the device is out of Bluetooth range.</li>
       </ul>
 <img style="height:350px" src="find_device_ble.png" />
 _Figure 1. Device Tracker client with BLE enabled_ 
5. **Play sound to identify specific device location.** <br>
<font color="blue">[Associate]</font> Once in the AP zone, tap **Play Sound** on the associate's device to play audio on the target device. Walk towards the chirping sound heard to locate the target device. To return back to the main screen, tap the device back button. <br>
**Important:** The time specified in the [Reporting Frequency](../config/#applicationconfiguration) needs to elapse before the sound can be played. For example, if the Reporting Frequency is set to 5 minutes, the associate must wait for 5 minutes before tapping **Play Sound**. Once the target device reports to the server and receives the flag that it is in the "To be found" state, it automatically changes the reporting frequency to 3 seconds for more frequent updates to the server until the device has been found. 
 <img style="height:350px" src="find_device_no_ble.png" />
 _Figure 2. Device Tracker client with BLE disabled_ 
6. **Device found.** <br>
<font color="blue">[Associate]</font> Once the device is found, tap **Device found** at the bottom of the screen. Some devices may require the user to scroll down the screen for the button to be visible. Tap “Yes” to the confirmation message to designate the device as found. <br>
<font color="orange">[Admin]</font> On the dashboard, the device status changes from “Being found” to “Device has been found”. The admin can take action to set the device back to the “Active” state, placing it back into the active device pool: <br>
       A. Select the device in the dashboard.<br>
       B. In the Action menu, select "Set device to: Active". <br>
       C. The device is moved out of the "Found" state into the "Active" state.

<!--
Perform device search with BLE and audio.
<font color="blue">[Associate]</font> Once in the AP zone, walk towards a direction and stop every so often, 10 to 15 meters, pausing for about 30 seconds. The 3 circles with colored rings in the BLE indicator show the proximity between the device conducting the search and the target device:
   * Red - outer ring indicating the user is "far" away from the target device
   * Orange - middle ring indicating the user is "near" the target device
   * Green - inner ring indicating the user is "close" in proximity to the target device <br><br>

 "Out of Bluetooth range" message appears if the user walks beyond the distance which the Bluetooth signal can be received from the target device. As the associate physically approaches near the target device, the color-coded visual indicator can change in color from red to orange to green. As the associate moves further away from the target device, the visual indicator can change in color from green to orange to red. Repeat this step and change direction when necessary to move closer to the device. 
 
 At any time during the search, tap **Play Sound** to play audio on the target device, further isolating the device location. Walk towards the sound to locate the device. This is particularly helpful when in the orange (near) and green (close) zones. 

    ![img](finding_device.jpg)
  _Figure 1. Device Tracker client screens while locating a device_ <br>

 > For optimal results, Zebra recommends to hold the device used for searching in the same position throughout the search activity. The device screen should be placed facing the user with no obstruction in the rear of the device. Changing device orientation during the search may negatively interfere with proximity perception. Moving at a slow pace during the search and standing still (at every 10 to 15 meters) every so often stabilizes the signals received, improving proximity measurements.

 <sup>[1]</sup> **Important Note**: Depending on when the device being searched last reported to the server, the specified [Reporting Frequency](../config/#applicationconfiguration) time needs to elapse before the sound can be played from the target device. Once the target device reports to the server and receives the flag that it is in the "To be found" state, it automatically changes the reporting frequency to 3 seconds for more frequent updates to the server until the device has been found. _For example, if the admin marks Device A “To be found” and the following conditions exist:_ 
* _Reporting Frequency is set to 5 minutes in the Settings tab_
* _Device A reported to the server a few seconds ago (as seen in the **Updated** column on the admin dashboard)_<br>

_In this scenario, approximately 5 minutes need to elapse (the next time the target device reports to the server) before the Device A identifies that it is marked as "To be found" and the associate can take action to find Device A. In this same scenario, if Device A reported to the server 4 minutes ago as seen from the dashboard, then 1 minute must elapse (time left to reach the 5 minute Reporting Frequency interval) before Device A identifies that it is marked "To be found" and the associate can take action to find Device A._
-->

###Cannot find device

If the device cannot be located, in step 4 above tap on "Cannot find" and proceed to tap "Yes" to the confirmation message. On the admin dashboard, the device status is changed from "Being found" to "Cannot find". 

<!--
##Track Device Presence
The admin dashboard on the web portal monitors device tracking by providing information on: misplaced devices, devices that are being searched for, devices that have been found, and devices that cannot be found. For each device, the “Connected AP” friendly name provides a general location of where the device resides based on the AP the device is connected to. The connected AP is displayed both on the admin dashboard and Device Tracker client. 
-->
##Prevent Misplaced Devices
Prevent devices from being misplaced by monitoring the low battery state so action can be taken by the administrator to charge the device prior to battery loss. Configure the “Low Power Alert Threshold %” in the [Settings screen](../config) from the web portal to set the threshold value. When a device battery drops below this defined threshold, the device is listed in the Low Battery section in the admin dashboard. The admin can then initiate the device to be located by [marking the device "To be found"](./#locatingdevices).

<!--
##Device Tagging
Tag devices for easier organization and tracking. Refer to [Organize Devices](../admin/#organizedevices) in the Admin View.

##Friendly Names
Use of friendly names for devices allows for easier device identification. The same holds true for access point friendly names to quickly identify the device location based on the access point it is connected to. See [Device & Access Point Management](../config/#device&accesspointmanagement) in the Configuration section.
-->
<br>

-----

## See Also

* [About Device Tracker](../about)
* [Install & Setup](../setup)
* [Admin View](../admin)
* [Configuration](../config)
* [Troubleshooting & FAQ](../troubleshooting)