---
title: Device
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
---


## Overview
The Device API provides access to some device-level functionality such as suspend, calibrate, powerOff, wake, reboot etc. and available only on Zebra devices.

## Enabling the API
There are two methods of enabling the Device API: 

* Include all ebapi modules 
* Include only the required API modules 

For either of these methods, files must be copied to the device from the `/Enterprise Browser/JavaScript Files/Enterprise Browser` directory on the computer that contains the Enterprise Browser installation and referenced from within the application's HTML.

### Include all API modules
To include all JavaScript APIs, copy the `ebapi-modules.js` file to a location accessible by the app's files and include the JavaScript modules file in the app. For instance, to include the modules file in the `index.html` file, copy the file to the same directory as the index.html and add the following line to the HEAD section of the index.html:

	    :::html
	    <script type="text/javascript" charset="utf-8" src="ebapi-modules.js"></script>

> The code above defines the EB class within the page. **Note that the path for this file is relative to the current page** (index.html). Any page on which the modules are required must include a reference to the required .js file(s) in this fashion.

### Include only the required modules
To include individual APIs, first include the `ebapi.js` in the HTML, and then the additional required API file(s). For instance, to use the Device API, add the following code to the HTML file(s). Again, this assumes that relevant API files have been copied to the same directory as the HTML.

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi.js"></script>
    <script type="text/javascript" charset="utf-8" src="eb.device.js"></script>

> In the lines above, notice that `ebapi.js` is included first, followed by `eb.device.js`, which is the Device API for Enterprise Browser. **This coding is required on each HTML page whenever an individual API will be called from that page**.

##Methods

### acquirePartialWakeLock()
This API is used for acquiring partial wake lock in Android device. It ensures that the CPU is running; the screen and keyboard backlight will be allowed to go off, if the user presses the power button. Note: On calling this method, the wakelocktype config tags will be affected.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Device.acquirePartialWakeLock()</code> 


### calibrate()
Carries out the screen calibration routine.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>Whether or not the calibration was successfully done, status will be 'success' or 'failed'. </p></li><li>message : <span class='text-info'>STRING</span><p>If 'status' == 'success', the message will contain 'Calibration was done succesfully.' and if 'status' == 'failed', the message will contain 'Calibration was failed.'. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Windows Mobile
* Windows CE

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Device.calibrate()</code> 


### idle()
Puts the device into idle mode. In this mode, the screen display is turned off. Callback is triggered only for 'failed' status.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>If the mode of the device was not changed to idle mode, status will be 'failed'. In all other cases, it will remain empty. </p></li><li>message : <span class='text-info'>STRING</span><p>If 'status' == 'failed', the message will contain an error message. In all other cases, it will remain empty. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Windows Mobile
* Windows CE

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Device.idle()</code> 


### powerOff()
Puts the device into power off mode. In this mode the device will draw no power. Only supported on SB1. Callback is triggered only for 'failed' status.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>If the powerOff was unsuccessful, status will be 'failed'. In all other cases, it will remain empty. </p></li><li>message : <span class='text-info'>STRING</span><p>If 'status' == 'failed', the message will contain an error message. In all other cases, it will remain empty. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Windows Mobile
* Windows CE

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Device.powerOff()</code> 


### reboot(<span class="text-info">STRING</span> bootType)
It reboots the terminal using either a Warm or Cold software boot (as specified). Note on CE6 devices a "ColdCAD" boot is required to replicate the Coldboot key sequence, e.g. 1+9+Power on an MC3000. Callback is triggered only for 'failed' status.

####Parameters
<ul><li>bootType : <span class='text-info'>STRING</span><p> </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>If the reboot was unsuccessful, status will be 'failed'. In all other cases, it will remain empty. </p></li><li>message : <span class='text-info'>STRING</span><p>If 'status' == 'failed', the message will contain an error message. In all other cases, it will remain empty. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Windows Mobile
* Windows CE

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Device.reboot(<span class="text-info">STRING</span> bootType)</code> 


### releasePartialWakeLock()
This API is used for releasing the acquired partial wake lock in Android device. Note: On calling this method, the wakelocktype config tags will be affected.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Device.releasePartialWakeLock()</code> 


### suspend()
Puts the device into suspend mode. On suspend, the device goes to hibernation mode. Callback is triggered only for 'failed' status. In some devices, the suspend doesnot happen instead it puts the device into an idle state.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>If the suspend was unsuccessful, status will be 'failed'. In all other cases, it will remain empty. </p></li><li>message : <span class='text-info'>STRING</span><p>If 'status' == 'failed', the message will contain an error message. In all other cases, it will remain empty. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Windows Mobile
* Windows CE

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Device.suspend()</code> 


### wake()
In WM/CE, wakes the device from idle state to active state. Callback is triggered only for 'failed' status. In Android, it will turn on the display, if it was off. The callback parameter is ignored in Android platform.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>In WM/CE, if the wake was unsuccessful, status will be 'failed'. In all other cases, it will remain empty. </p></li><li>message : <span class='text-info'>STRING</span><p>In WM/CE, if 'status' == 'failed', the message will contain an error message. In all other cases, it will remain empty. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Device.wake()</code> 


##Remarks



###General

                    
Note that some devices may not support all the API's or there is a possiblities of discrepancy across BSP's & platforms.
                    
                

###Power Off

                    
Note that some devices may not support power off feature. Those devices may either throw an error message or it may enter into Sleep mode.
                    
                

###Reboot

					
Note that in WM5.0 and above, there is no software difference between a warm and a cold boot as the device uses persistent storage; both the file and registry will remain the same after boot. In WM/CE, not all device support Cold or ColdCAD feature. Device may warm boot even though any of these option has been selected.
					
				

###Interaction with Unattended Method of the Push Module

					
The suspend functionality is incompatible with the unattended functionality of the push module and they should not be used together.
					
				

###wake Method

					
The wake functionality can be used along with Push module. For eg: in the push detected event the user can call the wake method to wake the device.
					

