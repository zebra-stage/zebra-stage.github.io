---
title: RhoElements 2.x Migration Guide
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
---
##Overview
Enterprise Browser supports RhoElements 2.x applications, which in many cases will run in EB with just a few small changes. This guide explains the changes that will always be required for migration to EB, and a few others that might be. 

**Prerequisites**:
These instructions require a development host (desktop or laptop) connected to a Zebra device, both containing the Enterprise Browser software, as well as a familiarity with the process of editing the Enterprise Browser `Config.xml` file. For help, see the guides below. 

**Related Guides**: 
* **[Installing Enterprise Browser](../setup)**
* **[Editing the Config.xml file](../ConfigEditor/)**

-----

## Config.xml
The single change that is always necessary when migrating to Enterprise Browser from any other platform is to specify the [StartPage](../configreference#startpage) of the app in the Enterprise Browser `Config.xml` file. It's also sometimes necessary to replicate or adjust other relevant settings from old config file to the new, and to copy page files and/or relevant JavaScript API files.

####Path to Config.xml file: 
* **On Android devices**: `/sdcard/Android/data/com.symbol.enterprisebrowser/Config.xml`
* **On Windows devices**: `\Program Files\EnterpriseBrowser\Config\Config.xml`

**&#49;. Set the StartPage of the app**. This will be the first page that loads with Enterprise Browser, and can be on a server (specify the URL) or local to the device (specify the full path), as below: 

		:::xml
		<Configuration>
		    <Applications>
		        <Application>
		            <General>
		                <Name value="Menu"/>
		                <StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
		            </General>

**&#50;. Copy any required off-line files** (i.e. ["BadLink"](../configreference/#badlinkuri) pages, etc.) to the device, take note of their paths and specify those paths in the relevant sections of the `Config.xml` file, as necessary. 

> **Note**: The file systems of some operating systems are case-sensitive. For cross-platform compatibility, letter case for URL, file and path references in the `Config.xml` file should be identical to those of the sources.

**&#51;. If the app requires access to RhoElements APIs**, see the [Deploy Legacy APIs](#deploylegacyapis) section below.

See the [Config.xml Reference Guide](../configreference) for more information about settings, parameters and other requirements.

-----

## Meta Tags
RhoElements 2.x and Enterprise Browser both support the configuration of app functionality "on-the-fly" through the use of meta tags. Enterprise Browser was engineered to be backward compatible with this feature, and therefore should implement RE 2.x meta tags for Android and Windows Mobile/CE with no changes required. **As a precaution, confirm that the tags are specified properly, as below**.

Example meta-tag specification:

	:::html
	<META HTTP-Equiv="scanner" Content="Enable">
	<META HTTP-Equiv="scanner" Content="AutoEnter:Enabled">
	<META HTTP-Equiv="scanner" Content="Start"> 

-----

## Display Rendering
**Applies to most migration scenarios**. If migrating from a Windows device to one running Android, or from Windows Mobile to Windows CE or vice-versa, adjustments to some display settings will likely be necessary since those migrations involve the use of different webkits. Other considerations might include display of the soft input panel, controlling its position on the screen and the ability to hide it, if desired. The relevant parameters are listed below; all should be checked as part of the migration process. 

**Render-related** `Config.xml` **parameters**: 

* **[Enable SIP](../configreference/#enablesip)**
* **[Engine In Use](../configreference/#engineinuse)**
* **[Fit To Screen](../configreference/#fittoscreenenabled)**
* **[Font Family](../configreference/#fontfamily)**
* **[Page Zoom](../configreference/#pagezoom)**
* **[Resize on SIP](../configreference/#resizeonsip)**
* **[Scroll Technique](../configreference/#scrolltechnique)**
* **[Use Native Fonts](../configreference/#usenativefonts)**

-----

### Deploy Legacy APIs
**Applies to Android devices only**. Running a RhoElements2.x app in Enterprise Browser for Android requires that the legacy APIs (contained in the `elements.js` file) be available to any HTML page rendered on the device that needs access to an API. For example, if a page exists for controlling the device scanner, that page's HTML must contain a reference to `elements.js`. The file should generally be located in the same place as the HTML pages themselves, which can be on the device or a server. See the [API Usage Guide](../apioverview/) for more information. 

**To Deploy the** `elements.js` **file**:

**&#49;. Locate the** `elements.js` **file**, which by default is located in the following directory on the development host:

* `C:/EnterpriseBrowser/JavaScriptFiles/BackwardCompatibility/`

**&#50;. Place a copy of** `elements.js` **on the device or a server** accessible by all of the app's HTML pages. 

**&#51;. Add a reference to the API file in every HTML page** that will access the APIs, as below: 


		:::html

		// This example applies when elements.js is in a web server's "js" folder:

	<html>
		<head>
		<script type="text/javascript" charset="utf-8" src="/js/elements.js"></script>
		
-----

### Enable ActiveX Objects
**Applies to Windows Mobile/CE devices only**. If the RhoElements app uses ActiveX controls, the legacy ActiveX and generic objects must be preloaded when EB initializes. 

**Specify a value of "1" in the [PreloadLegacyActiveX](../configreference/#preloadlegacyactivex) [PreloadLegacyGeneric](../configreference/#preloadlegacygeneric) parameters**, as below:


	:::xml
	<NPAPI>
	  	<NPAPIDirectory value="file://%INSTALLDIR%/NPAPI/" />
		   <Preloads>
		      <PreloadLegacyActiveX value="1" />
	    	  <PreloadLegacyGeneric value="1" />  


-----

###Notes: 
* The generic methods RasConnect and RasDisconnect are not supported.
* The NOSIP control for preventing display of the soft input panel is not supported. See the [SIP API's hide() method](../../api/Sip#hide) for an alternative.
* The [FitToScreenEnabled](../configreference/#fittoscreenenabled) parameter of EB is not supported on Android or Windows CE.
* EMML profiles are not supported on Android.
* If the app is to perform scanning, check for hardware contention issues and other potential [conflicts with DataWedge](/datawedge/5-0/guide/setup/#disabledatawedge) and other Android-native apps that use the device's scanning hardware.

-----

**Related Guides**: 
* **[PocketBrowser 2.x Migration Guide](../pb2/)** 
* **[PocketBrowser 3.x Migration Guide](../pb3/)**
* **[RhoMobile Migration guide](../rhomobile)**
* **[Optimization Guide](../optimization) -** for help minimizing device memory footprint

* **[Enterprise Browser Config.xml Reference](../configreference) -** for more information about settings, parameters and other requirements.

