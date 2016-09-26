---
title: Starting an Application
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
---
## Overview
Enterprise Browser is a runtime environment inside which a company's own HTML and application logic is executed, controlled, and given interfaces to a device's hardware (i.e. scanner, imager, etc.) through EB APIs. For Enterprise Browser to work with a company's application, a runtime configuration file called `Config.xml` must be created that includes a pointer to the HTML. This code can be stored on the device itself or on a web server. Either way, a `Config.xml` file is required, and **Enterprise Browser will not start without it**. 

A sample `Config.xml` file is provided as part of the installation and contains some common default settings. However, some parameters must be configured according to the application and/or device being used, and for specific runtime preferences. See the [Config.xml Reference](../configreference) page for details on the usage and options of each of parameter and their possible values.

## Starting an Application
To set Enterprise Browser to start with an application, find the [StartPage parameter](../configreference#startpage) in the (&lt;General&gt; node of the `Config.xml` file) and enter the URL of the desired HTML application. **Note**: Different steps might be required for scenarios that use different EB APIs. See the [API Overview](../apioverview) for details.

As an example of using a local file called `HelloScan.html`, the following steps would be required:

1. Copy the file HelloScan.html to the root folder of your device using ActiveSync. 
2. Find the file "\Program Files\EnterpriseBrowser\config\config.xml" and copy it to your PC. 
3. Edit config.xml in your text editor. 
4. Find the `Application` entry in the xml file and change it's `startPage` parameter to "file://\helloscan.html". 
5. Start Enterprise Browser using the icon in the programs group. 

> Note: If using a localized variant of the operating system, it might be necessary to edit the default `Config.xml` included with Enterprise Browser to match the localized folder names on a device. For example, the Italian version of Windows contains a folder called `\Programmi\` in place of the default `\Program Files`.
