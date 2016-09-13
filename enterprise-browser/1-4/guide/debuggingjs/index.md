---
title: On-Device Debugging
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
---
## Overview

Just as debugging should be thought of as a vital part of every development cycle, on-device debugging should be part of any effective testing regimen. Although much can be accomplished using emulators and an IDE, applications often behave differently when running on hardware, and features such as [Barcode](../../api/barcode) scanning are impossible to test without the use of physical hardware to perform the scan and acquire the data.

This guide includes instructions for enabling debugging on an Android device and describes two methods of debugging Enterprise Browser apps while they're running on a device:  

* **Weinre -** is a node.js application that can effectively test most apps running on Android Jelly Bean as well as Windows Mobile/CE devices. 

* **Remote Debug Inspector -** works with Windows Mobile/CE devices that use the Zebra Webkit. 

###Prerequisites
Requirements of the development host vary based on the target device and its OS platform. General requirement guidelines are listed below. Platform-specific requirements, if any, will be listed in the section that describes the individual debugging tool and/or method.  

* Mac OS X or Windows development host
* Android Debug Bridge ([ADB](http://developer.android.com/tools/help/adb.html)) or MS Mobile Device Center (or ActiveSync) 
* Chrome 32 or later (Chrome Canary recommended)
* A Zebra target device (Android or Windows Mobile/CE)
* A USB cable for connecting the target to the dev. host
* USB debugging enabled on target
* A WebView-based app configured for debugging

-----

<a name="weinre"></a>
## Debugging with Weinre
[Weinre](http://people.apache.org/~pmuellr/weinre/docs/latest/Home.html) is a must-have developer tool for testing and debugging JavaScript Enterprise Browser application. Short for <b>We</b>b <b>In</b>spector <b>Re</b>mote, Weinre provides a live portal into Enterprise Browser APIs with its JavaScript Console tab, a much faster method than sifting through logs.

This section of the guide follows a 14-minute [Weinre webinar](https://www.youtube.com/watch?v=aSTXEEAfJ6M) and uses the [Barcode Example app](https://github.com/rhomobile/rho-samples/tree/master/BareBones/BarcodeExample) from that lesson for all of the examples in this guide. You're welcome to download the app and follow along, use your own app, or simply play around with the APIs and code snippets.

### Install Weinre
<b>Note</b>: Admin/sudo privileges are required to install Weinre.

Weinre is a Node.js application and is delivered via a Node Package installed with the `npm` command. 

<b>&#49;. [Download node.js](http://nodejs.org/download/)</b> from the project's `/release` folder. 

<b>&#50;. On Windows, install Weinre using the following command</b>:

    :::term
    $ npm -g install weinre

<b>Mac users might need to include the 'sudo' prefix</b>:


    :::term
    $ sudo npm -g install weinre

For more information about installing and configuring Weinre, please refer to the [Weinre installation site](http://people.apache.org/~pmuellr/weinre/docs/latest/Installing.html).

### Start Weinre

<b>IMPORTANT</b>: The target device must be on the same Wi-Fi network as the development host. When launched, Weinre must be bound to that network using the `boundhost` parameter (see below). Launching without this parameter will bind Weinre to the `localhost`, making it inaccessible from the device.


<b>&#51;. Launch Weinre from the command line using the `--boundhost` option</b>:

    :::term
    $ weinre --boundhost <development host IP address>

Weinre will respond with a message similar to the one below--an address and port that will be used to communicate with the device:


    :::term
    2013-10-31T00:24:07.549Z weinre: starting server at http://192.168.1.128:8080

<b>&#52;. Using a browser, open the address and port provided by Weinre</b>. 

The page should look something like this:

![img](../../images/debugging/weinre-web-console.png)

_Click on any image to enlarge_.

### Enable Weinre In the App
If all has gone well so far, the browser is displaying the Weinre Inspector Remote console. In the section labeled ‘Target Script,’ there's a string that contains a URL with the dev host's local IP address and port number, plus the name and path of the script file that Weinre needs to communicate with the target device.

Lower in the Target Script section is an example of how to embed the Target Script string between script tags:

<b>Example Script String</b>:

`<script src="http://<your local ip address>:<your port>/target/target-script-min.js#anonymous"></script>`

<b>&#53;. Copy and paste the example script string (above) into the** `barcode_enumerate.html` **file (or your corresponding app file).</b> 

<b>&#54;. Copy the URL string referenced earlier and use it to replace the example URL</b>. Be sure to leave the quote marks on either side of the URL.

The line in the HTML should look like this:

![img](../../images/debugging/weinre-target-script-example.png)

<b>&#55;. Start the Weinre debug UI by clicking the link in the Access Points section of the Weinre browser page</b>:

![img](../../images/debugging/weinre-link-to-debug-ui.png)

### Debug Client UI
The image below shows the ‘Remote’ tab of Weinre’s Debug Client UI. The ‘Targets’ and ‘Clients’ sections contain one device each, and the green text indicates that both devices are communicating.

The inset image is a screenshot from the target Android device that’s being displayed by an app called [Droid@Screen](http://droid-at-screen.org/) . This useful screencasting tool uses USB and ADB to stream screen shots to the development host.

![img](../../images/debugging/weinre-debug-and-device.png)

At this point, the app can be inspected as with the web inspector of Chrome or any other tool. The Elements tab shown below demonstrates two-way communication between the device and the development host. Clicking on an element in the HTML will cause that element to be highlighted on the device’s UI.

![img](../../images/debugging/weinre-two-way-communication-inspection.png)

The Elements tab can be used for on-the-fly changes to CSS styling, API and method calls and any and all app UI settings. In the example below, the button text was changed from ‘Enumerate’ to ‘Changed!’ simply by editing the test in the Elements tab.

<div class="span6" style="text-align:center">
    <p><b>Button text "Enumerate"</b></p>
</div>
![img](../../images/debugging/weinre-button-element-before-change.png)
<div class="span6" style="text-align:center">
    <p><b>Button text "Changed!"</b></p>
</div>
![img](../../images/debugging/weinre-button-element-after-change.png)

### Console and Issuing API Calls
One of the most versatile components of Weinre is its Console. Not only does it offer classic capabilities such as device visibility and monitoring during operation, but the Weinre Console also can access all of a device’s hardware features, issue commands and report how the device reacts.

The example below shows results from an attempt to use the JavaScript API to check the target platform, use the camera to scan a barcode, and issue a command to the [ScreenOrientation API](../../api/ScreenOrientation) (which returned an error).

![img](../../images/debugging/weinre-barcode-take.png)

In the example, the Console is used to verify that JavaScript APIs are functioning properly. A return of the correct system platform ‘Android’ proves that the System API is working. A return of the correct scanned barcode value likewise proves that the Barcode module is working properly.

<b>Here’s another important benefit of the Weinre console</b>.
Notice that when the barcode callback handler function is executed, we are using the form `console.log(e)`, where `e` is the callback return object. This allows us to inspect the object right in the console. It also simplifies validation because we see that it contains a barcode property and a status property, exactly as described in the [Barcode.take( ) method](../../api/barcode) description. Alternative means, such as adding code for outputting to a log and then searching and retrieving the information from the device, can be time-consuming and error-prone.

### Other Tabs in Debugger UI
Several other tabs in the debugging UI can be quite useful. 

![img](../../images/debugging/weinre-tabs.png)

#### Network Tab
The Network tab <b>measures and displays the time required for HTTP requests</b> made by an application. Clicking on any of the resources in the left-hand pane will visually represent the delay as its headers and content are loaded and AJAX and other calls are made to remote servers. Data displayed when hovering over "Latency" and "Timeline" columns, andcan be used to help optimize load-time performance. Remember that EB application can have a 'server' running on the device as well as on the web. It is important to inspect the processing of JavaScript or CSS files and reduce lag wherever possible. 

#### TimeLine Tab
The Timeline tool <b>measures and displays the rendering time of each element of the user interface</b>, presenting a visual display similar to that of the Network tab. The Timeline tab is useful for finding bottlenecks in front-end UI or DOM performance.

More information about Timeline can be found starting at 25:10 of Zebra’s [Front-End UI Optimization Webinar](https://developer.zebra.com/docs/DOC-1661). This one-hour video contains useful information about detecting re-flows and other common problems that can bring mobile apps to a crawl.

#### Resources Tab
The Resources tab allows <b>displays the resources being used by the current Webview page</b>. Resources can include outside assets being called into the app such as images, JavaScript, style sheets and cookies. Inspecting the resources can be useful if for ensuring that a particular resource has been loaded. This tab also can provide insight into other HTML5 features such as WebSQL and localStorage, if present.

-----

<a name="inspector"></a>
## Using Remote Debug Inspector

The Remote Debug Inspector tool is for debugging apps running on Zebra Windows Mobile/CE devices that use Zebra Webkit. Remote Debug Inspector installs on the device and requires a new tag in the Config.XML of the target app to make it work with desktop Chrome. 

### Prerequisites
* A Mac (with ADB) or Windows 7 or later PC (with Mobile Device Center) 
* Enterprise Browser installed on the development host
* Chrome browser installed (Mac or Windows)
* A Zebra device running Windows Mobile/CE
* An EB app installed with Webkit (not the IE Engine; see below)
* A connection to the device for copying files (Bluetooth, USB or Wi-Fi)
* The development host and device on the same subnet (over which to debug)

![img](../../images/debugging/ebsetup_webkit.jpg)

Enterprise Browser device installer showing Webkit deployment options.

_Click on any image to enlarge_.

### Install 

&#49;. **[Download Remote Debug Inspector](http://enterprise-browser.s3.amazonaws.com/inspector.CAB)** tool.<br>
&#50;. **Copy the downloaded `"inspector.CAB"` file to the device**.<br> 
&#51;. **Execute the file**, which will install into a folder called `/inspector` on the device.<br>
&#52;. **Add to the Config.XML file** (of the target app) the following tags:<br>

        :::xml
        ...
        </HTMLStyles>
      
        <RemoteDebug>
            <ResourceFiles  value="file:///inspector/"/>
            <ServerPort     value="7000"/>
        </RemoteDebug>
      
        <SIP> 
        ...

Notice that the <b>&lt;RemoteDebug&gt;</b> section is inserted <b>after &lt;HTMLStyles&gt;</b> and <b>before &lt;SIP&gt;</b>.

Also note that we're using the default values for ResourceFiles and ServerPort. If these are changed, be sure to make the corresponding changes in the next steps.  

<b>&#53;. Note the IP address of the target device</b> (Wi-Fi Settings >> Wi-Fi Driver Settings). It must be on the same subnet as the development host.

<b>&#54;. Launch the Enterprise Browser app</b> to be tested. 

<b>&#55;. Enter the following URL</b> in Chrome's URL bar: 

    ...
    http://<device ip address>:7000


After a few moments, the browser should display a page similar to the image below: 

<img style="height:300px" src="../../images/debugging/inspectable_webviews.png"/>

<b>&#56;. Click on a link</b> to inspect it in a panel similar to the image below: 

![img](../../images/debugging/inspecting_html.png)

This panel works in much the same manner as those of Weinre and Chrome Web Inspector (click on any image to enlarge). 



