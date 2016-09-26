---
title: PocketBrowser 2.x/3.x Migration Guide
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
---
##Overview
Enterprise Browser supports PocketBrowser 2.x/3.x applications, which in many cases will run within EB after just a few small changes. This guide explains the changes that will always be required for migrating to EB from PocketBrowser 2.x/3.x, and a few others that might be. 

**Prerequisites**:
These instructions require a development host (desktop or laptop) connected to a Zebra device, both containing the Enterprise Browser software, as well as a familiarity with the process of editing the Enterprise Browser `Config.xml` file. For help, see the guides below. 

**Related Guides**: 
* **[Installing Enterprise Browser](../setup)**
* **[Editing the Config.xml file](../ConfigEditor/)**

-----

## About PocketBrowser 3.x
The migration procedures for PocketBrowser 3.x are the same as those for 2.x. The following device notes apply to PocketBrowser 3.x migrations only. See the **[PocketBrowser 3.x online docs](http://goo.gl/H8G4IW)** for more information. 

####Notes:

* **On Windows Mobile 6.5, PocketBrowser 3.x uses the Progressive Internet Explorer (PIE, a component of IE4)**. This was done to maintain support for scrollbars after Microsoft dropped the feature from its version of IE6 for Windows Mobile.

* **The [TextSize method](../../api/pb3/deviceapplication/#textsize) in the PB 3.x DeviceApplication API will malfunction on Windows CE devices** unless the [TextSelectionEnabled](../configreference/#textselectionenabled) parameter in the EB `Config.xml` contains a value of "1" (enabled). 

* **The IE6 rendering engine on WinCE supports scrollbars, but does not support the [Scrolling parameter](../configreference/#scrolling)** in the EB `Config.xml`. 

<!-- the following (modified) line was from the original PB 2.x migration guide. Commented out because its value is unclear: 

* **With the introduction of Finger Scrolling in CE7, scrolling options in the** `Config.xml` **file were modified** to accommodate the new features.

PER ABHINEET: In PB, [the <ScrollingTechnique>] tag was never supported. This tag was only introduced in EB. This was introduced during EB-webkit engine but we also provided support for WM device with IE engine but not in CE device with IE engine. 

above info was captured in configref.  

-->

-----

## Common Steps For Most Migrations
The instructions in this section apply to all migrations from Android, Windows Mobile and Windows CE. Platform-specific differences will be indicated in corresponding sections that follow for: 

* **[Android](#android)** 
* **[Windows Mobile/CE with IE](#windowsmobileceusingie)** 
* **[Windows Mobile/CE with Webkit](#windowsmobileceusingwebkit)**

Most of the activities related to app migration involve editing the Enterprise Browser `Config.xml` file, which stores all app settings and parameters for EB runtime behavior. See the [Config Editor Utility Guide](../ConfigEditor/) for information about how to connect to devices and access this file.  

####Config.xml
The single change that is always necessary when migrating to Enterprise Browser from any other platform is to specify the [StartPage](../configreference#startpage) of the app in the Enterprise Browser `Config.xml` file. For PocketBrowser apps on Android, it's also necessary to load legacy APIs, and on Windows Mobile/CE to enable the backward compatibility engine. Some apps also require replication and/or adjustment of other settings from an old config file to the new, and to copy page files and/or other files to the device. This section covers all of those steps, to be performed as necessary for the target platform and app.

**Note for Windows CE devices**: Zebra recommends a persistent installation for most EB scenarios on WinCE. Before proceeding, see the [Windows Mobile/CE section](#windowsmobileceusingwebkit) (below) for details, **including special instructions for editing the** `Config.xml` **file**.
<br>

####Path to Config.xml file: 
* **On Android devices**: `/sdcard/Android/data/com.symbol.enterprisebrowser/Config.xml`
* **On Windows devices**: `\Program Files\EnterpriseBrowser\Config\Config.xml`

**Perform Steps 1-4 as needed**: 

**&#49;. Specify the StartPage of the EB app** in the new `Config.xml` file. This will be the first page that loads with Enterprise Browser, and can be on a server (specify the URL) or local to the device (specify the full path), as below: 

		:::xml
		<Configuration>
		    <Applications>
		        <Application>
		            <General>
		                <Name value="Menu"/>
		                <StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
		            </General>

**For Android devices, skip to Step 3**.

**&#50;. Enable backward compatibility on Windows Mobile/CE** by specifying a value of '1' in the [UseRegularExpressions](../configreference#useregularexpressions) parameter, as below:    

		:::xml
		<Configuration>
			<Applications>
				<Application>
					<General>
						<Name value="Menu"/>
						<StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
						<UseRegularExpressions value='1'/>
							</General>


This enables the regular expressions engine for translation to EMML 1.0 syntax, which is stored in an XML file called `RegEx.xml`. After EB installation, the regular expressions engine can be found on the device at `\Program Files\EnterpriseBrowser\Config\RegEx.xml`. **Applies only to Windows Mobile/CE devices**. 

> **Warning: Do not alter the RegEx.xml file in any way**. 

**&#51;. Verify that the [Engine in Use](../configreference/#engineinuse) parameter contains a value of 'Webkit' (as below) to enable the desired rendering engine**:
	

		:::xml
		<Configuration>
			<Engine>
				<EngineInUse value='Webkit'/>
			</Engine>
		

**&#52;. Copy any required off-line files** (i.e. ["BadLink"](../configreference/#badlinkuri) pages, etc.) to the device, take note of their paths, and specify those paths in the relevant sections of the `Config.xml` file, as necessary. 

> **Note**: The file systems of some operating systems are case-sensitive. For cross-platform compatibility, letter case for URL, file and path references in the `Config.xml` file should be identical to those of the sources.

See the **[Enterprise Browser Config.xml Reference](../configreference)** for more information about settings, parameters and other requirements.

####Display Rendering
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

## Android
**Complete this section only after following the [Common Steps For Most Migrations](#commonstepsformostmigrations) above**, and only if migrating to Android.

####Deploy Legacy APIs
Running a PocketBrowser 2.x/3.x app in Enterprise Browser on Android requires that the legacy APIs (contained in the `elements.js` file) be available to any HTML page rendered on the device that needs access to an API. For example, if a page exists for controlling the device scanner, that page's HTML must contain a reference to `elements.js`. The file should generally be located in the same place as the HTML pages themselves, which can be on the device or a server. See the [API Usage Guide](../apioverview/) for more information. 

**To deploy the** `elements.js` **file**:

**&#49;. Locate the** `elements.js` **file**, which by default is located in the following directory on the development host:

* `C:/EnterpriseBrowser/JavaScriptFiles/BackwardCompatibility/`

**&#50;. Place a copy of** `elements.js` **on the device or a server** in a location that is accessible by all of the app's HTML pages. 

**&#51;. Add a reference to the API file in every HTML page** that will access the APIs, as below: 


		:::html

		// This example applies when elements.js is in a web server's "js" folder:

	<html>
		<head>
		<script type="text/javascript" charset="utf-8" src="/js/elements.js"></script>
				

####Notes:
* The generic methods RasConnect and RasDisconnect are not supported.
* The NOSIP control for preventing display of the soft input panel is not supported. See the [SIP API's hide() method](../../api/Sip#hide) for an alternative.
* The EB [FitToScreenEnabled](../configreference/#fittoscreenenabled) parameter is not supported.
* EMML profiles are not supported.
* If the app is to perform scanning, check for hardware contention issues and other potential [conflicts with DataWedge](/datawedge/5-0/guide/setup/#disabledatawedge) and other Android-native apps that use the device's scanning hardware.

-----

## Windows Mobile/CE using IE
**Complete this section only after following the [Common Steps For Most Migrations](#commonstepsformostmigrations) above**, and only if migrating to Windows Mobile or Windows CE with the IE rendering engine. If using Webkit, skip to the next section. 

**Enterprise Browser APIs do not support IE. When using IE as the rendering engine, only PocketBrowser APIs will be available**. This might represent the best choice for target devices with limited memory and/or CPU resources, or for apps that don't require Webkit features or functionality offered by Enterprise Browser APIs.

####Engine in Use
**Verify that the [Engine in Use]() parameter contains a value of 'IE'** (as below) to enable the desired rendering engine:


		:::xml
		<Configuration>
				<Engine>
					<EngineInUse value='IE'/>

####Persistence
**For Windows CE devices, Zebra recommends the "Enterprise Browser - IE (Persistent)" installation option** when [deploying EB to the device](../setup#deploymenttodevices). This allows Enterprise Browser settings to persist following a cold boot. On persistent installations, **the location of the** `Config.xml` **file to be edited is different** than that of non-persistent installations, and **changes could be lost after a cold boot if an edited file is placed in the wrong location on the device**. 

After a device with a persistent installation is cold-booted, the Enterprise Browser executable (i.e. `EnterpriseBrowser_v1.3_IE.Cab` file) and the `Config.xml` file are copied from the persistence directory:

* `\Application\EnterpriseBrowser\Config\` 

to this non-persistent directory:   

* `\Program Files\EnterpriseBrowser\Config\`
<br>

The Enterprise Browser app launches and reads the `Config.xml` file from the `\Program Files\EnterpriseBrowser\` directory.  This directory is overwritten by a cold boot. To preserve changes to a `Config.xml` file, **the edited file must be placed in the** `\Application\EnterpriseBrowser\Config\` **directory**. Changes based on that edited file will take effect after the next cold boot. If no `Config.xml` file is present in the source directory following a cold boot, a new `Config.xml` file with default values will be generated and copied to the destination directory, overwriting any prior settings. 

Optionally, an edited file can be placed in both directories, with changes taking effect the next time EB is launched, and ensuring that changes will be retained after a cold boot. **This is the Zebra-recommended procedure**. 

####Notes:
* **Enterprise Browser APIs do not support IE. When using IE as the rendering engine, only PocketBrowser APIs will be available**. 
* Generic methods RasConnect and RasDisconnect are not supported.
* The EB [PageZoom](../configreference/#pagezoom) parameter is not supported on IE. This webview supports text zoom only.
* **The JavaScript events onkeydown, onkeypress and onkeyup are not supported** in Windows Mobile devices that use the IE rendering engine. The following workaround options are available:
	* Switch to the EB Webkit engine.
	* Use Enterprise Browser [Keycapture APIs](../../api/keycapture) to capture hardware key-presses.
	* Use the PocketBrowser KeyCapture API (implemented as a plug-in) from the EB IE engine.

------

## Windows Mobile/CE using Webkit 
**Complete this section only after following the [Common Steps For Most Migrations](#commonstepsformostmigrations) above**, and only if migrating to Windows Mobile or Windows CE with Webkit. If using the IE rendering engine, go back to the previous section. 

####Enable ActiveX Objects
If the PocketBrowser uses ActiveX controls, the legacy ActiveX Objects must be preloaded when EB initializes.

**Specify a value of "1" in the [PreloadLegacyActiveX](../configreference/#preloadlegacyactivex) parameter**, as below:


	:::xml
	<NPAPI>
	        <NPAPIDirectory value="file://%INSTALLDIR%/NPAPI/" />
		        <Preloads>
		          <PreloadLegacyActiveX value="1" />


####Persistence
**For Windows CE devices, Zebra recommends the "Enterprise Browser - Webkit (Persistent)" installation option** when [deploying EB to the device](../setup#deploymenttodevices). This allows Enterprise Browser settings to persist following a cold boot. On persistent installations, **the location of the** `Config.xml` **file to be edited is different** than that of non-persistent installations, and **changes could be lost after a cold boot if an edited file is placed in the wrong location on the device**. 

After a device with a persistent installation is cold-booted, the Enterprise Browser executable (i.e. `EnterpriseBrowser_v1.3_IE.Cab` file) and the `Config.xml` file are copied from the persistence directory:

* `\Application\EnterpriseBrowser\Config\` 

to this non-persistent directory, which is overwritten as part of the cold-boot process:  

* `\Program Files\EnterpriseBrowser\Config\`
<br>

The Enterprise Browser app launches and reads the `Config.xml` file from the `\Program Files\EnterpriseBrowser\` directory. This directory is overwritten by a cold boot. To preserve changes to a `Config.xml` file, **the edited file must be placed in the** `\Application\EnterpriseBrowser\Config\` **directory**. Changes based on that edited file will take effect after the next cold boot. If no `Config.xml` file is present in the source directory following a cold boot, a new `Config.xml` file with default values will be generated and copied to the destination directory, overwriting any prior settings. 

Optionally, an edited file can be placed in both directories, with changes taking effect the next time EB is launched, and ensuring that changes will be retained after a cold boot. **This is the Zebra-recommended procedure**. 

####Notes:
* The generic methods RasConnect and RasDisconnect are not supported.
* The NOSIP control for preventing display of the soft input panel is not supported. See the [SIP API's hide() method](../../api/Sip#hide) for an alternative.
* The EB [FitToScreenEnabled](../configreference/#fittoscreenenabled) parameter is not supported on WinCE.

-----

**Related Guides**: 
* **[RhoElements Migration Guide](../elements)**
* **[RhoMobile Migration guide](../rhomobile)**
* **[Optimization Guide](../optimization) -** for help minimizing device memory footprint

* **[PocketBrowser 2.x online docs](http://goo.gl/H1Fuik)**
* **[PocketBrowser 3.x online docs](http://goo.gl/H8G4IW)** 

* **[Enterprise Browser Config.xml Reference](../configreference) -** for more information about settings, parameters and other requirements.


