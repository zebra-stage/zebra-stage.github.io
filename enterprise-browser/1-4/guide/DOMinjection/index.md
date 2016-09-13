---
title: DOM Injection
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
---
## Overview

Apps made with Enterprise Browser 1.3 and higher are able to perform DOM Injection, the ability insert CSS, JavaScript and/or meta tags into the DOM without modifying the underlying application. This permits features, capabilities and even the look of one or more server-based Enterprise Browser app pages to be modified at runtime using DOM elements stored in a text file on the device. 

DOM injection is enabled by default in EB 1.3 and higher apps, and is **activated by  the &lt;CustomDOMElements&gt; tag in the &lt;Application&gt; section** of the app's `Config.xml` file. This tag will contain a fully qualified path to the device-resident "tags" file that must be created. It contains the DOM element(s) to be injected and the names of the pages to receive injections whenever they're displayed. **Injected CSS and JavaScript can be local, server-based or in combination**. Meta tags must be specified and fully contained within the tags file.    

* **DOM injection device support**: 
	* **Android with stock webkit**
	* **Windows Mobile/CE with Zebra Webkit**
	* **Windows CE with IE engine**

**_DOM injection is NOT currently supported on Windows Mobile devices using the IE engine_**. 

No special licensing is required. 

## What is "the DOM"?
In the context of modern web programming, **the "DOM" refers to HTML5 as it will appear when running**. While the code of an HTML5 app might define certain variables, those variables contain no values until the app is executed. Therefore, it's accurate to think of the DOM as an HTML5 app that's in use.

## How to use DOM Injection

To use DOM injection, **ALL of the following must be true**:

* The app was made with Enterprise Browser 1.3 (or higher)
* A `tags` file containing elements to be injected has been created and pushed to the target device
* The path to the `tags` file is specified in the app's `Config.xml` file 
* The target device is one of the following: 
	* Android with stock webkit 
	* Windows Mobile/CE device with Zebra Webkit
	* Windows CE with IE engine

**_DOM injection is NOT currently supported on Windows Mobile devices using the IE engine_**. 


### Step 1- Prepare the "tags" file

* **Create a text file to contain the desired DOM-injection elements** using the tagging syntax below. This will become the list of elements that will be injected into the DOM, and will specify the pages to receive the injections. 

In the sample `mytags.txt` file referenced below, notice a syntax similar to that of ordinary HTML tags for including scripts, style sheets and meta data. Parts of the tags as they apply to DOM injection are explained in the JavaScript comments, and in further detail below. 


	:::xml
	<!--Sample tags file -->
	<!--FILENAME: 'mytags.txt' -->
	<!--DESC: 'tags' file for DOM Injection -->

	<!--JavaScript section-->

	<!--inject mytest.js into pages p1 and p2 only-->
	<script type='text/javascript' src='./mytest.js' pages='p1;p2'/>

	<!--inject mytest.js into all pages-->
	<script type='text/javascript' src='./mytest.js' pages='*'/>

	<!--inject a server-based JavaScript (into all pages)-->
	<script type='text/javascript' src='http://192.168.10.1:8081/test.js' pages='*'/>

	<!--inject a local JavaScript file (into p1 into p2)-->
	<script type='text/javascript' src='file://\programfiles\enterprisebrowser\rho\apps\app\test.js' pages='p1;p2'/>
	
	<!--MetaTags section-->

	<!--refresh pages p1 and p2 every 30 seconds-->
	<meta http-equiv="refresh" content="30" pages='p1;p2'/> 

	<!--refresh all pages every 30 seconds-->
	<meta http-equiv="refresh" content="30" pages='*'/>
	
	<!--enable the scanner on all pages-->
	<meta HTTP-Equiv="scanner" Content="Enable" pages='*'/>	
	
	<!--StyleSheets section-->

	<link rel="stylesheet" type="text/css" href="mystyle.css" pages='p1;p2'/>
	<link rel="stylesheet" type="text/css" href="mystyle.css" pages='*'/>
	<!--link rel="stylesheet" type="text/css" href="mystyle.css" pages='*'-->	
	<link rel="stylesheet" type="text/css" href="file://\programfiles\enterprisebrowser\rho\apps\app\mystyle.css" pages='p1;p2'>

Attributes of DOM Injection tags: 

**Note that the "pages" attribute specifies the file name of the page into which the element defined in the tag will be injected**. The following rules apply: 

* Assumes an ".html" file extension; specify extension if different
* For local files, works from directory relative to the installation root; include qualified path if different 
* For server-based CSS or JavaScript files, works relative to the app's start page; include qualified URL if different
* Accepts wildcard (*) character to inject all files in relative or specified directory
* Accepts URLs for server-based CSS and JavaScript files only
* Meta tag data must be contained completely within the tags file  
* If using server-based JavaScript, see JavaScript Injection section (below) for dependency cautions 

* When tags are completed, **store the tags file on the device** and take note of the path 

### Step 2- Specify path to tags file in Config.xml

The tags file created in Step 1 must reside on the device. 

 * **Specify the path to the tags file** by adding a line like the one below in the `<Application>` section in the app's `Config.xml` file:  

		:::xml
		<Application>
		...
			<CustomDOMElements value="file://%INSTALLDIR%\rho\apps\app\mytags.txt"/>
		...
		</Application>


For information about how to configure the `Config.xml` file, see the [Config.xml Reference Guide](../configreference). **Note**: The &lt;CustomDOMElements&gt; tag cannot be configured using the [On-device Config Editor utility](../OndeviceConfig).  

> **The value inside the &lt;CustomDOMElements&gt; tag is empty by default. DOM injection cannot function unless a path to the tags file on the device is specified**. 

## JavaScript Injection
JavaScript can be injected either through file protocol or by using an absolute or server path relative to the Enterprise Browser app's start page. Different rules apply to injection of local and server-based JavaScript, and might affect the app if dependencies exist between the JavaScript modules in use. 

####Inject Local JavaScript
When using the file protocol, the JavaScript file(s) must be resident on the target device, and have path(s) specified in the `src` attribute of the script tag using the `file://` designation. For example, the following lines will inject four JavaScript files into all pages of the app-relative directory:

	:::xml
	<script type='text/javascript' src='file://\Program Files\EnterpriseBrowser\rho\apps\app\elements.js' pages='*' /> 

	<script type='text/javascript' src='file://\Program Files\EnterpriseBrowser\rho\apps\app\jquery.js' pages='*' /> 

	<script type='text/javascript' src='file://\Program Files\EnterpriseBrowser\rho\apps\app\jquery-1.11.3.js' pages='*' />

	<script type='text/javascript' src='file://\Program Files\EnterpriseBrowser\rho\apps\app\test.js' pages='*' />  

**Notes**
* Local JavaScript files are injected consecutively in the order in which they are listed in the tags file.
* Each JavaScript file will be loaded completely before the next file is loaded. 
* DOM injections occur every time a page is loaded, **so changes to JavaScript files injected in this way can be put into effect simply by refreshing the relevant page**.

####Inject Server-based JavaScript
* Here, the same four JavaScript files are injected from a server: 

		:::xml
		<script type='text/javascript' src='http:\\192.168.1.1:8081\elements.js' pages='*' /> 
		<script type='text/javascript' src='http:\\192.168.1.1:8081\jquery.js' pages='*' /> 
		<script type='text/javascript' src='http:\\192.168.1.1:8081\jquery-1.11.3.js' pages='*' />
		<script type='text/javascript' src='http:\\192.168.1.1:8081\test.js' pages='*' />  

With server-based injection, Enterprise Browser will be commanding the engine to inject JavaScript to the DOM asynchronously, which might cause `jquery.js` to be loaded before `element.js`, for example. Therefore, **if JavaScript files are interdependent, additional steps might be required to avoid failure due to a dependency issue**. 

In another example, the tags file below is used to inject the `rhoapi-modules.js` and `test.js` files into the page `/dominjection/index.html`. 


		:::xml
		<script type="text/javascript" src="./rhoapi-modules.js" pages="/dominjection/index.html" />

		<script type="text/javascript" src="./test.js" pages="/dominjection/index.html" />

If an attribute contained in the rhoapi-modules file--for example the Rho namespace--is required by `test.js`, an error might occur if `test.js` is injected first. To guard against this, it might be useful for `test.js` to include some logic like the JavaScript below so that it waits until its dependent JavaScript (`rhoapi-modules.js`) is loaded.

Sample JavaScript to delay loading: 


		:::javascript
		(function() {
		   
		    // Poll for jQuery to come into existence
		    var checkReady = function(callback) {
		        if (window.Rho) {
		            callback(Rho);
		        }
		        else {
		            window.setTimeout(function() { checkReady(callback); }, 100); //check here
		        }
		    };
		    // Start polling...
		    checkReady(function(Rho) {
		      alert(Rho.Application.appName); //use rho api here
		    });
		})();

