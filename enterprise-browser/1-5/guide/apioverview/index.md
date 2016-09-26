---
title: Enterprise Browser APIs
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
---

##Overview

Enterprise Browser contains a runtime environment inside which a company's new or legacy HTML and JavaScript application pages and logic can be executed, controlled, and given interfaces to device hardware (i.e. scanners, card readers, etc.) through Enterprise Browser APIs. This guide provides an overview and basic guidance for using the APIs. The capabilities of individual APIs are detailed in the [Enterprise Browser API Guide](../../api/). 

See the [Migration Guides](../) for information about accessing PocketBrowser, RhoElements and other legacy APIs. 

See the [Compatibility Matrix](../compatibility/) for API support information relating to specific operating systems and webkits. 

## Using JavaScript APIs
Enterprise Browser APIs are enabled differently the app is running from HTML stored on the device or on a remote server. Either way, the relevant JavaScript files must be referenced in the appropriate location in the HTML. 

### JavaScript API Files
The Enterprise Browser installation by default adds a `C:/EnterpriseBrowser/JavaScriptFiles/` directory, inside of which are two additional directories:

* `/EnterpriseBrowser/` - contains the Enterprise Browser JavaScript API files:
	* **ebapi-modules.js** - includes all `EB.module` APIs 
	* **individual JS modules** - for [optimizing footprint](../optimization) by including only required modules
* `/BackwardCompatibility/` - contains legacy PocketBrowser and RhoElements 2.x APIs:
	* **rhoapi-modules.js** - for supporting RhoMobile applications
	* **elements.js** - for supporting RhoElements 2.x and PocketBrowser 2.x/3.x applications 

-----

**Related Guides**: 
* **[PocketBrowser 2.x Migration Guide](../pb2/)** 
* **[PocketBrowser 3.x Migration Guide](../pb3/)**
* **[RhoElements Migration Guide](../elements)**
* **[RhoMobile Migration guide](../rhomobile)**
* **[Optimization Guide](../optimization) -** for help minimizing device memory footprint

####Access from web pages
When running web pages from a server, Enterprise Browser is essentially acting as a simple browser, loading the pages and executing any JavaScript within. To use the Enterprise Browser APIs from within an HTML app, the `ebapi-modules.js` must be stored on the web server in a location accessible to all of the app's pages. Typically this will be the same `/js` folder in which other JavaScript libraries are stored. 

####Access from local pages
To use the APIs on a device that's displaying locally-stored web pages, the API files must be stored on the device as well, and be in a location accessible by all of the app's pages. For example, if the HTML and API files are stored in `<device-root>\myApp`, then the HTML files would link to the `ebapi-modules.js` using the following relative path:

	:::html
	<script src="ebapi-modules.js" type="text/javascript"></script>

## Using Instance Objects
Some API classes support instance objects, allowing the developer to maintain their own objects and assign different properties to them. The following example shows how to save a reference to the device's front-facing camera to manipulate that camera's properties separately from the rear-facing camera:

	:::javascript
	var laserScanner;
	EB.Barcode.enumerate(function (e){
		if (e.scannerType == 'Laser'){
			laserScanner = e;
		}
	};);

Next is to reference instance methods on that object:

	:::javascript
	var laserScannerProperties = {beamWidth:EB.Barcode.BEAM_NARROW, decodeVolume:5};

	laserScanner.enable(laserScannerProperties, function(e){
			barcodeData = e.data;
		});

## Setting Properties
There are a few ways to set properties. 

### Using the Default Instance
One way is to set properties is use the default instance of the API class. This will change the property of the object in a global sense until it is changed again (or the application is exited):

	:::javascript
	EB.Class.Property = value;

For example, the following snippet will turn off the `illuminationMode` for the default Barcode instance:

	:::javascript
	EB.Barcode.illuminationMode='alwaysOff';

### Using Special Class Methods
Properties also can be set using special class methods, as long as the class exposes such a method:

	:::javascript
	EB.Barcode.setProperty('illuminationMode', 'alwaysOff');

A special class method can be used to set multiple properties in one line of code (again, if the class exposes such a method):

	:::javascript
	// An object of propertyName:value is passed into the setProperties method
	EB.Barcode.setProperties({illuminationMode:'alwaysOff', code128:'enabled'});

### Using Another Method
Some methods support passing in a `propertyMap` as a parameter to a method. As with the `setProperties` method, this allows an object of multiple `propertyName:propertyValue` to be passed in:  

	:::javascript
	// Enable the default instance of Barcode with code128 enabled and illuminationMode off
	// the first parameter of this method is a propertyMap
	EB.Barcode.enable({illuminationMode:'alwaysOff', code128:'enabled'}, callbackHandler());

> Note: When a parameter is of type propertyMap in the API reference, all possible values might not be shown in the documentation. However, any non-read only property listed can be used for that object class unless otherwise specified.

## Getting Properties
There are a few ways to get an object's property values. 

### Reading Values Synchronously
The following examples use a synchronous method that will be blocking. The following example uses the `getProperty` class method. This method may not be available on all APIs.

	:::javascript
	var illumMode = EB.Barcode.getProperty('illuminationMode');

Use the `getProperties` method for a list of properties to expose. An array of property names to be retrieved is passed into this method, and a hash is returned containing the values of the properties: 

	:::javascript
	// An object is returned by the getProperties method
	var settingsObj = EB.Barcode.getProperties(['illuminationMode', 'code128']);

	// The object properties will be the list of properties used
	if (settingsObj.illuminationMode == 'alwaysOff')...

Use the `getAllProperties` method to get all properties of an object:	

	:::javascript
	var settingsObj = EB.Barcode.getAllProperties();

> Note: Use this method sparingly. APIs such as Barcode have many properties and reading them all might cause an undesirable performance hit. 

### Reading Values Asynchronously
There are a few ways to read properties in a non-blocking, asynchronous way by specifying a callback. The following code snippet uses a self-describing autonomous function that will execute when the callback is executed:

	:::javascript
	Barcode.getAllProperties(function(params){
		alert(params.code128);
	};);

The following code snippet also uses a self-describing anonymous function that will execute when the callback is executed, and also passes in other parameters:

	:::javascript
	Barcode.getProperties(["autoEnter","code128"], function (params){
			alert(params.code128);
	};);

> Note: For methods that support callbacks, the callback function will always be the last parameter of the method.

The following code snippet uses a function name for the callback instead of an anonymous function: 

	:::javascript
	Barcode.getAllProperties(fnPropertyPerser(params));

## Handling Callbacks
Some methods support a callback for returning information in an unblocking, asynchronous way. This is indicated in the documentation by the `callback` parameter: 

	:::javascript
	Barcode.take(HASH propertyMap, CallbackHandler callback)

The `callback` parameter will either be marked as &lt;span class="label label-info"&gt;Optional&lt;/span&gt; or &lt;span class="label label-warning"&gt;Mandatory&lt;/span&gt;. Be sure to check the type of object the `callback` will be returning as well as the list of available `callback` parameters for each method. Typically the `callback` will return an object with a pre-defined set of objects that can be accessed for information.

### Callback as anonymous function
The following code snippet enables the hardware barcode button. Upon scanning a barcode, the anonymous function will be executed:

	:::javascript
	// The documentation will list the callback type as well as callback parameters that are available
	EB.Barcode.enable({},function(params){
		alert(params.data);
	};);

### Callback as a JavaScript function
The following code snippet enables the hardware barcode button. Upon scanning a barcode, it then calls the `mycallbackhandler` JavaScript function:

	:::javascript
	EB.Barcode.enable({}, mycallbackHandler);

	function mycallbackHandler(params){
	// The documentation will list the callback type as well as callback parameters that are available
		alert(params.data);
	}

