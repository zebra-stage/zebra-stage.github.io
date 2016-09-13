---
title: SAP ITSmobile Usage Guide
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
---
## Overview
This guide provides instructions for modifying an EB app for ITSmobile, the SAP middleware system built around its Internet Transaction Server (ITS). ITSmobile provides browser-based access to SAP's ERP, SRM and other enterprise app apps made with the company's proprietary dynpro language. Enterprise Browser apps can be built or adapted to work with ITSmobile, and hence to access SAP back-end enterprise apps. Doing so requires familiarity with editing the `Config.xml` and HTML file(s) of EB apps. 

**Related Guides**: 

* [Enterprise Browser Config.xml Reference](../configreference)
* [Enterprise Browser APIs](../apioverview)
* [PocketBrowser and RhoElements Migration Guides](../)
* [DOM Injection guide](../DOMinjection)
* [SAP ITSmobile wiki page](https://wiki.scn.sap.com/wiki/display/HOME/ITSmobile)

-----

## Basic Steps 
The basic steps for accessing ITSmobile from an Enterprise Browser app are shown below with descriptions of (or links to) the detailed procedures for each. 

### Set the Start Page
Enterprise Browser must be set to start with the SAP ITSmobile application. Specify the URL of the SAP ITSmobile application in the [StartPage](../configreference/#startpage) parameter of the EB app's `Config.xml` file. 

### Enable JavaScript APIs
If the app uses Enterprise Browser APIs, the [API modules](../apioverview) must be present on the device and referenced from every HTML page that calls them. If the HTML is not available or cannot be edited, **APIs also can be accessed through meta tags** (see DefaultMetaTags section, below), which does not require changes to the HTML files. 

### Handle KeyEvents
Enterprise Browser can handle events triggered by keypresses either by using the KeyCapture common API or the `onkeyup / onkeydown / onkeypress` JavaScript APIs. Zebra generally recommends the KeyCapture method of capturing hardware keys because of several known limitations in the JavaScript APIs on devices running Windows Mobile with the IE rendering engine. For situations in which JavaScript is the only choice, consider swithing to the Zebra Webkit engine, if possible. 

KeyCapture API functionality varies based on the device and its operating system and rendering engine. Use the following table to determine available functionality.  

<table>
<tr>
<th>SCENARIO</th>
<th>Windows Mobile, Zebra Webkit</th>
<th>Windows Mobile, IE engine</th> 
<th>Windows CE, Zebra Webkit</th>
<th>Windows CE, IE engine</th>
<th>Android, stock webkit</th>
</tr>  
<tr>
<td>EB KeyCapture API (EB namespace)</td>
<td>YES</td>
<td>NO</td>
<td>YES</td>
<td>NO</td>
<td>YES</td>
</tr>
<tr>
<td>JavaScript Object, backward compatibility API</td>
<td>YES</td>
<td>NO</td>
<td>YES</td>
<td>NO</td>
<td>YES</td>
</tr>
<tr>
<td>ActiveX Object, backward compatibility API</td>
<td>YES</td>
<td>YES</td>
<td>YES</td>
<td>YES</td>
<td>YES</td>
</tr>
<tr>
<td>HTML onkeyup/onkeydown Events</td>
<td>YES</td>
<td>NO</td>
<td>YES</td>
<td>YES</td>
<td>YES</td>
</tr>
</table>
<br>
_PB = PocketBrowser_

### Using KeyCapture API
The KeyCapture API can be invoked directly from one of the app's HTML pages or through a meta tag, which us useful if the HTML is not available or cannot be edited. Both methods are shown below. 

#### Invoke API directly

Most JavaScript-based key handling for SAP ITSmobile applications is handled by the `mobile.js` file, which is hard to extract and modify from an SAP server and is subject to limitations and JavaScript issues of the IE rendering engine referenced above. **To overcome those issues, try the following technique**:

1. Configure KeyCapture functionality in the `config.xml` file as below:


          :::xml

          <DefaultMetaTags>
            <MetaTag VALUE="KeyCapture~KeyValue:All;Dispatch:True;KeyEvent:url('javascript:fireKeyEvent(%json);');" /> 
          </DefaultMetaTags>

2. Add the following JavaScript method as described in the [DOM Injection guide](../DOMinjection). The same `fireKeyEvent` method has been configured in the `Config.xml` under the `DefaultMetaTags` attribute.


          :::javascript

          //Add the fireKeyEvent in the HTML page for handling in WM device with IE Engine
          function fireKeyEvent(event)
          {
            var getData = processKeyEvent(event);
          }

<br>
**KeyEvents also can be handled using any of the methods below**:

* **To capture keys via JavaScript Object** using backward compatibility API:


          :::javascript

          keyCapture.keyValue = 'All'; //Here keyCapture is 2.2 KeyCapture JavaScript Object.


* **To capture keys via Meta Tags** using backward compatibility API:


          :::xml

          <META HTTP-Equiv="KeyCapture" Content="KeyValue:All; Dispatch:True; KeyEvent:url('javascript:MyCallBack(%json);')">


* **To capture keys via ActiveX Object** using backward compatibility API:

          :::javascript

          var mygeneric = new ActiveXObject("PocketBrowser.Generic");
          var temp = "KeyValue:All;Dispatch:True;KeyEvent:url('javascript:MyCallBack('%s');')";
          mygeneric.InvokeMETAFunction("KeyCapture", temp);


* **To capture keys via Enterprise Browser KeyCapture API**:


          :::javascript

          EB.KeyCapture.captureKey(true,"ALL", MyCallBack);


* **To capture keys via JavaScript onkeydown event attribute**:


        :::html

        <html>
          <head>

          <script>
          function jsKeyEvent(event)
          {
            alert(event.keyCode);
          }

          </script>

          </head>

          <body onkeydown="jsKeyEvent(event);"></body>

        </html>

        
<br>
####Invoke API through DefaultMetaTags 

Invoking an API using DefaultMetaTags adds functionality without modifying the original HTML. The disadvantage is scalability; any functionality added by meta tags is available only on device(s) that contain the tags.

**To apply DefaultMetaTags**:


            :::xml

            <DefaultMetaTags>
              <MetaTag VALUE="KeyCapture~KeyValue:All;Dispatch:True;KeyEvent:url('javascript:fireKeyEvent(%json);');" />
            </DefaultMetaTags>


It's important to note that the functionality added by meta tags is available to all of the app's HTML pages. This is unlike direct API access, which requires a reference to the API from every HTML page that calls any of the API's functions. 

What's more, a series of meta tags can be included once to interact with an API from anywhere in the HTML. For example, the following code in an app's `Config.xml` file would use the Signal API to display the network signal icon in the app. This way it will be available in all HTML pages but can be controlled from one location (the `Config.xml` file):

          :::xml

          <DefaultMetaTags>
            <MetaTag value="Signal~left:10;top:200;color:#663300;"/>
          </DefaultMetaTags>


### Function Keys

Function Keys can be configured to perform custom tasks on the device, and are captured in the same way as other keys. However, Function Keys are sometimes predefined by the operating system to perform certain default behaviors. For example, some Zebra devices reserve the F6 and F7 keys to control the speaker volume. In such cases, those keys cannot be captured by Enterprise Browser. **For Windows Mobile/CE, also see important [interaction notes](../configreference/#remarks)**.

#### Windows Keys on Android
On devices with a hardware keyboard, Android apps made with Enterprise 1.2 or later might benefit by using the [&lt;isWindowKey&gt;](../configreference/#iswindowskey) tag in the `Config.xml` file. This tag makes Android F1-F12 keys return the key codes of a Windows Mobile device, enabling apps to support Android and Windows devices with a single code base. This feature is available only on Enterprise Browser 1.2 and higher, and supports PocketBrowser 2.x/3.x and RhoElements 2.x KeyCapture APIs.

-----

## UI Rendering
UI rendering varies by rendering engine, and also can be effected by web page layout and design, font selection and other factors. Many of the styles available today are not supported by the default IE rendering engine, and pages rendered on WM/CE device using the IE engine will render differently than devices with the Zebra Webkit engine. When designing web pages for Enterprise Browser, Zebra therefore recommends adhering to [Responsive Web Design](https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/?hl=en) practices whenever possible.

To ease the usage of applications running on Enterprise Browser, users can now configure hardware function keys to perform ZoomIn and ZoomOut operations without having to make changes to the application.

**Note: The function keys used for ZoomIn and/or ZoomOut operations are not accessible via any Key Capture API**. <!--Configuration for Zoom IN & Zoom OUT feature is supported in WM/CE platform. WHAT DOES THIS MEAN?-->

-----

## Authentication 

### Using Webkit engine
Zebra recommends configuring SAP credentials through the [&lt;Authentication&gt; parameter](../configreference/#authentication) in the app's `Config.xml` file, which supports digest and basic authentication techniques. The syntax is shown below: 

          :::xml

          <Authentication>
            <Username VALUE="userName"/>
            <Password VALUE="passWord"/>
          </Authentication>

**Note for Windows Mobile with Webkit engine**: If a credential is entered incorrectly using the Authentication parameter, some devices will not present another opportunity to log in, showing only the "Login Failed" page until the device is restarted. 

### Using IE engine
To avoid a perpetual "login failure" message, disable the license confirmation screen in the app's `Config.xml` file by placing a "0" in the &lt;ShowLicenseConfirmation&gt; tag, as below:

          :::xml

          <ShowLicenseConfirmation value="0"/> 

To avoid rebooting the device after every failed log-in attempt, Zebra recommends adding Quit, Back and Reload buttons to login pages.

-----

## Optimize Performance
If an app is performing poorly, the following tips and tricks might help improve it.

* If the scanner is required for multiple pages of an SAP app, Zebra recommends [keeping the scanner enabled](../configreference/#disablescannerduringnavigation) when navigating from one page to another (it's disabled during navigation by default). The scanner should be disabled only when quitting the app or when reaching a page after which it will no longer be used. 

* Avoid pre-loading unwanted capabilities that are not required in SAP environment. Some common pre-loads are listed below. If they're not needed by the app, enter a "0" in their tag in the `Config.xml` (as shown) to disable them.

            :::xml

            <PreloadLegacyODAX value="0"/>
            <PreloadLegacyNoSIP value="0"/>
            <PreloadLegacyAirBeam value="0"/>
            <PreloadLegacyAPD value="0"/>

* Zebra recommends disabling the Hourglass "page loading" icon (as shown) to improve performance during page navigation:

            :::xml

            <HourglassEnabled value="0"/>

* Zebra recommends disabling screen orientation (as shown) to avoid issues while scanning:

            :::xml

            <ScreenOrientation value="0"/>

* Zebra recommends loading only the API modules required by the app and adopting as many additional [Optimization techniques](../optimization) as possible.

-----

## Handle Bad Links
Since ITSmobile apps require the internet (an imperfect medium), apps should be designed to handle communication and navigation failures gracefully. Enterprise Browser is designed to automatically display a [bad link page](../configreference/#badlinkuri) if the user encounters a link that no longer exists or navigation is taking too long. 

When designing the page, consider adding Quit, Back and Reload buttons so users never feel stuck. For ITSmobile apps, Zebra recommends that the Reload button redirect the app back to the SAP authentication page.

-----

**Related Guides**: 

* [Enterprise Browser Config.xml Reference](../configreference)
* [Enterprise Browser APIs](../apioverview)
* [PocketBrowser and RhoElements Migration Guides](../)
* [DOM Injection guide](../DOMinjection)
* [SAP ITSmobile wiki page](https://wiki.scn.sap.com/wiki/display/HOME/ITSmobile)

