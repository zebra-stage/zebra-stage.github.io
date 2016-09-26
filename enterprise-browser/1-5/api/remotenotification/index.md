---
title: RemoteNotification
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
---

## Overview
Remote Notification APIs enable Enterprise Browser applications to control device annunciators such as the beeper, vibrator and multi-color LEDs to notify the user of custom events in their workflow. 

>**This API is supported only on Android devices**.

## Enabling the API

There are two methods of enabling the RemoteNotification API:

* Include all 'ebapi' modules
* Include only the required API modules

Both methods are explained below. 

Either way, the included files will be found in: 
`/Enterprise Browser/JavaScript Files/Enterprise Browser`,
a directory on the computer that contains the Enterprise Browser installation.

### Include all API modules
To include all JavaScript APIs, copy the `ebapi-modules.js` file to a location accessible by the app's files and include the JavaScript modules file in the app. For instance, to include the modules file in the `index.html` file, copy the file to the same directory as the index.html and add the following line to the HEAD section of the index.html:

	    :::html
	    <script type="text/javascript" charset="utf-8" src="ebapi-modules.js"></script>

> The code above defines the EB class within the page. **Note that the path for this file is relative to the current page** (index.html). Any page on which the modules are required must include a reference to the required .js file(s) in this fashion.

### Include only the required modules
To include individual APIs, first include the `ebapi.js` in the HTML, and then the additional required API file(s). For instance, to use the Remote Notification API, add the following code to the HTML file(s). Again, this assumes that relevant API files have been copied to the same directory as the HTML.

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi.js"></script>
    <script type="text/javascript" charset="utf-8" src="eb.remotenotification.js"></script>

> In the lines above, notice that `ebapi.js` is included first, followed by `eb.remotenotification.js`, which is the Remote Notification API for Enterprise Browser. **This coding is required on each HTML page whenever an individual API will be called from that page**.

##Methods

### clearproperties()

					Clears all properties related to led,vibrator and beeper settings.
					m_rnobject.clearproperties();
				

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.clearproperties()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Remotenotification.clearproperties()</code> 


### disable()

					Disables the remote notification device.
					m_rnobject.disable();
				

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.disable()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Remotenotification.disable()</code> 


### enable()

					Enables the remote notification device.
					rnArray = EB.Remotenotification.enumerate();
					m_rnobject = rnArray[0];
					m_rnobject.enable();
				

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.enable()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Remotenotification.enable()</code> 


### enumerate()


####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>ARRAY</span></p><ul><ul><li><i>Object</i> : <span class='text-info'>SELF_INSTANCE: EB.Remotenotification</span><p> </p></li></ul></ul>

####Returns
Synchronous Return:

* ARRAY : Array of Remotenotification objects.
					   var rnArray;
					   rnArray = EB.Remotenotification.enumerate();
					<ul><li><i>Object</i> : <span class='text-info'>SELF_INSTANCE: EB.Remotenotification</span><p> </p></li></ul>

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Remotenotification.enumerate()</code> 


### getDefault()
This method will return an object that represents the default instance of the API Class. For example Camera.getDefault will return a Camera object that represents the default camera.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>SELF_INSTANCE</span></p><ul></ul>

####Returns
Synchronous Return:

* SELF_INSTANCE : Default object of Module.

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Remotenotification.getDefault()</code> 


### notify(<span class="text-info">HASH</span> notifyinfo)
Notify method sends the notification information to the device.

####Parameters
<ul><li>notifyinfo : <span class='text-info'>HASH</span> <span class='label label-info'>Optional</span><p>The properties associated with the notifyinfo. Not providing properties to this function will use the notification device's default properties, or those previously set on the remote notification instance.</p></li><ul><li>beepPattern : <span class='text-info'>Array</span><span class='label '> Default: </span><p>
									An array of Beep that specifies the durations for which to turn on the beep in milliseconds and the frequency in Hz. Default value assigned is null. Maximum allowed are 8 beep pattern pairs. If more than 8 pattern pairs are provided, only the first 8 pattern pairs will be considered.
									{ beepPattern:[
									{beeptime:500,beepfrequency:3000},
									{beeptime:500,beepfrequency:0},
									{beeptime:500,beepfrequency:3000},
									{beeptime:500,beepfrequency:0},
									{beeptime:500,beepfrequency:3000},
									{beeptime:500,beepfrequency:0}
									]
									 </p></li><li>vibratorPattern : <span class='text-info'>Array</span><span class='label '> Default: </span><p>
									
										Vibrate with a given pattern. Pass in an array of integers that are the durations for which to turn on or off the vibrator in milliseconds. The supported values are 0ms to 2550ms. Behavior is undefined for any other value. The first value indicates the number of milliseconds to wait before turning the vibrator on. The next value indicates the number of milliseconds for which to keep the vibrator on before turning it off. Subsequent values alternate between durations in milliseconds to turn the vibrator off or to turn the vibrator on. Maximum 8 vibrating pattern pairs are supported. If more than 8 pattern pairs are provided, only the first 8 pattern pairs will be considered. Default value assigned is null.
									vibratorPattern:[
									{vibratortime:500},
									{vibratortime:500},
									{vibratortime:500},
									{vibratortime:500},
									{vibratortime:500},
									{vibratortime:500}
									]
									 </p></li><li>ledonTime : <span class='text-info'>INTEGER</span><span class='label '> Default: </span><p>the number of milliseconds for the LED to be ON while it's flashing. Default value assigned is 0. The supported values are 0ms to 2550ms. Behavior is undefined for any other value.. </p></li><li>ledoffTime : <span class='text-info'>INTEGER</span><span class='label '> Default: </span><p>The number of milliseconds for the LED to be OFF while it's flashing. Default value assigned is 0. The supported values are 0ms to 2550ms. Behavior is undefined for any other value. </p></li><li>ledrepeatCount : <span class='text-info'>INTEGER</span><span class='label '> Default: </span><p>The LED blinking repeat count. Default value assigned is 0. The supported values are 0 to 127 for RS6000. Setting -1 or above 127 will flash the LED infinitely for RS6000. Note: The repeatCount is used for additional LED blinks. Example: Setting repeatCount = 0 will blink the LED once, setting repeatCount = 1 will blink the LED twice, etc. </p></li><li>ledcolor : <span class='text-info'>STRING</span><span class='label '> Default: </span><p>The color for blinking LED on the notification device using RGB format. Ex: #FF0000 for Red.The Default value of ledcolor is set to black(#000000).So led will not glow if the ledcolor is balck. So it is recommended to specify the ledcolor value(other than black) before calling notify.  </p></li><li>vibrationDuration : <span class='text-info'>INTEGER</span><span class='label '> Default: </span><p>The vibration time in milliseconds. Default value is assigned to 0. If the pattern array is null, this time will be used otherwise pattern takes precedence. The supported values are 0ms to 2550ms. Behavior is undefined for any other value. </p></li></ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.notify(<span class="text-info">HASH</span> notifyinfo)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Remotenotification.notify(<span class="text-info">HASH</span> notifyinfo)</code> 


### setDefault(<span class="text-info">SELF_INSTANCE: EB.Remotenotification</span> defaultInstance)
This method allows you to set the attributes of the default object instance by passing in an object of the same class.

####Parameters
<ul><li>defaultInstance : <span class='text-info'>SELF_INSTANCE: EB.Remotenotification</span><p>An instance object that is of the same class. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Remotenotification.setDefault(<span class="text-info">SELF_INSTANCE: EB.Remotenotification</span> defaultInstance)</code> 


##Properties



###connectionType

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Returns the notification device connection type to mobile computer.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Remotenotification.BLUETOOTH_SSI - String: BLUETOOTH_SSI Bluetooth SSI Scanner
* Constant: EB.Remotenotification.PLUGGABLE - String: PLUGGABLE Pluggable scanner
* Constant: EB.Remotenotification.UNDEFINED - String: UNDEFINED Undefined connection type
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.connectionType</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Remotenotification.connectionType</code> 



####Platforms

* Android

###deviceType

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Returns the notification device type.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Remotenotification.IMAGER - String: IMAGER IMAGER device
* Constant: EB.Remotenotification.UNDEFINED - String: UNDEFINED Undefined device type
* Constant: EB.Remotenotification.VIBRATOR - String: VIBRATOR Not supported yet
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.deviceType</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Remotenotification.deviceType</code> 



####Platforms

* Android

###friendlyName

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Returns the friendly name of the notification device.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.friendlyName</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Remotenotification.friendlyName</code> 



####Platforms

* Android

###isConnected

####Type
<span class='text-info'>BOOLEAN</span> <span class='label label-warning'>Read Only</span>
####Description
Returns whether the notification device is connected to the Mobile device or not.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.isConnected</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Remotenotification.isConnected</code> 



####Platforms

* Android

###isDefaultDevice

####Type
<span class='text-info'>BOOLEAN</span> <span class='label label-warning'>Read Only</span>
####Description
Returns true if it is a default notification device else false.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.isDefaultDevice</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Remotenotification.isDefaultDevice</code> 



####Platforms

* Android

###isEnabled

####Type
<span class='text-info'>BOOLEAN</span> <span class='label label-warning'>Read Only</span>
####Description
Returns whether the notification device is enabled or not.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.isEnabled</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Remotenotification.isEnabled</code> 



####Platforms

* Android

###ledcolor

####Type
<span class='text-info'>STRING</span> 
####Description
The color for blinking LED on the notification device using RGB format. Ex: #FF0000 for Red.The Default value of ledcolor is set to black(#000000).So led will not glow if the ledcolor is balck. So it is recommended to specify the ledcolor value(other than black) before calling notify. 
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.ledcolor</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Remotenotification.ledcolor</code> 



####Platforms

* Android

###ledoffTime

####Type
<span class='text-info'>INTEGER</span> 
####Description
The number of milliseconds for the LED to be OFF while it's flashing. Default value assigned is 0. The supported values are 0ms to 2550ms. Behavior is undefined for any other value.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.ledoffTime</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Remotenotification.ledoffTime</code> 



####Platforms

* Android

###ledonTime

####Type
<span class='text-info'>INTEGER</span> 
####Description
The number of milliseconds for the LED to be ON while it's flashing. Default value assigned is 0. The supported values are 0ms to 2550ms. Behavior is undefined for any other value.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.ledonTime</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Remotenotification.ledonTime</code> 



####Platforms

* Android

###ledrepeatCount

####Type
<span class='text-info'>INTEGER</span> 
####Description
The LED blinking repeat count. Default value assigned is 0. The supported values are 0 to 127 for RS6000. Setting -1 or above 127 will flash the LED infinitely for RS6000. Note: The repeatCount is used for additional LED blinks. Example: Setting repeatCount = 0 will blink the LED once, setting repeatCount = 1 will blink the LED twice, etc.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.ledrepeatCount</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Remotenotification.ledrepeatCount</code> 



####Platforms

* Android

###modelNumber

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Returns the notification device model number.For Future Use only.Currently Not supported.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.modelNumber</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Remotenotification.modelNumber</code> 



####Platforms

* Android

###vibrationDuration

####Type
<span class='text-info'>INTEGER</span> 
####Description
The vibration time in milliseconds. Default value is assigned to 0. If the pattern array is null, this time will be used otherwise pattern takes precedence. The supported values are 0ms to 2550ms. Behavior is undefined for any other value.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.vibrationDuration</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Remotenotification.vibrationDuration</code> 



####Platforms

* Android