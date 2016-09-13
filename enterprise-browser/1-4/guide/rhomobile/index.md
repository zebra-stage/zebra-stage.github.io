---
title: RhoMobile 4.x Migration Guide
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
---

## Overview
Enterprise Browser supports RhoElements 4.x Shared Runtime applications and HTML-based hybrid RhoMobile applications for Android and Windows Mobile/CE that use HTML and JavaScript. It does not support any Ruby APIs or Ruby-language program code. See the **[RhoMobile 2.x online docs](http://docs.rhomobile.com/en/5.4/guide/rhoArchitecture)**. 

## JavaScript Usage
In RhoElements 4.x, access to the features were made available through JavaScript objects under the `Rho.` namespace:

	:::javascript
	// Scan with default options
	Rho.Barcode.take({}, scan_received);

To use the `Rho.` namespace, replace the `rhoapi-modules.js` file that came with RhoMobile Suite 4.x with the file `rhoapi-modules.js`. By default, this file is located in the following directory on the development host:

* `C:/EnterpriseBrowser/JavaScriptFiles/BackwardCompatibility/`

##Android Intents
Enterprise Browser 1.3 and higher includes support for Android Intents, which can be specified through an entry in the manifest file or using the [IntentReceiver](../configreference/#intentreceiver) parameter of the `Config.xml` file. See the [Intent Receiver](../configreference/#intentreceiver) section of the Enterprise Browser Config.xml Reference for more information.