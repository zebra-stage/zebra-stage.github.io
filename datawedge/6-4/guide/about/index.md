<h2 id="overview">Overview</h2>
<p>DataWedge provides barcode scanning and processing services for Zebra devices running Android. Included with every Zebra device, DataWedge enables all apps on the device (whether stock or added later) to acquire scanned data without using scanner APIs directly. DataWedge can be easily configured to automatically provide scanning services whenever a particular app is launched; to use a particular scanner, reader or other sensor; and to manipulate acquired data according to simple options or complex rules. </p>
<h4 id="thisdocumentappliesto">This document applies to:</h4>
<ul>
<li><strong>DataWedge 6.4.x</strong>, which requires:</li>
<li><strong>Scanner Framework 18.0.xx</strong> or higher, and</li>
<li><strong>SimulScan 1.9 or higher</strong> (on <a href="../../../../simulscan">devices that support SimulScan</a>)</li>
</ul>
<p>To learn more about DataWedge APIs, read <a href="https://developer.zebra.com/community/home/blog/2017/06/27/datawedge-apis-benefits-challenges">DataWedge APIs - Benefits & Usage Scenarios</a> by Zebra engineer Darryn Campbell. </p>
<hr />
<h3 id="newindatawedge64">New in DataWedge 6.4</h3>
<ul>
<li><strong>Support for <a href="../input/barcode/#readerparams">UDI Reader parameters</a> -</strong> which enable simultaneous input of barcodes conforming to <a href="https://www.fda.gov/medicaldevices/deviceregulationandguidance/uniquedeviceidentification/udibasics/default.htm">Unique Device Identification</a> standards. </li>
</ul>
<p><strong>New APIs</strong>: </p>
<ul>
<li><strong><a href="../api/getversioninfo">GET<em>VERSION</em>INFO</a> -</strong> gets version numbers of DataWedge and of scanner and SimulScan frameworks on the device. </li>
<li><strong><a href="../api/getdatawedgestatus">GET<em>DATAWEDGE</em>STATUS</a> -</strong> returns the DataWedge state (enabled/disabled). </li>
<li><strong><a href="../api/restoreconfig">RESTORE_CONFIG</a> -</strong> restores a DataWedge configuration to its default settings.</li>
<li><strong><a href="../api/setconfig">SET_CONFIG</a> -</strong> create new, or overwrite or update an existing Profile, associate with an app, set a scanner config, select intent and/or keystroke plug-in.</li>
<li><strong><a href="../api/registerfornotification">REGISTER<em>FOR</em>NOTIFICATION</a> -</strong> tells DataWedge to inform specified app or activity of updates to scanner and/or Profile status. </li>
<li><strong><a href="../api/registerfornotification">UNREGISTER<em>FOR</em>NOTIFICATION</a> -</strong> cancels request for app notification.</li>
</ul>
<p><strong>DataWedge 6.4 continues to build on the new structure for launching Android intents Introduced in DataWedge 6.2</strong>, and can launch multiple intents as extras in a single intent action. DataWedge continues to support all original commands using their original syntax. For details, see the <a href="../api/overview">DataWedge API guide</a>.</p>
<h3 id="mainfunctionality">Main Functionality</h3>
<p>The version of DataWedge documented in this guide provides the following primary functions and options: </p>
<ul>
<li>Scan and process all <a href="../input/barcode/#decoderselection">major barcode symbologies</a></li>
<li>Acquire barcodes, images, text, phone numbers, mag-stripe and other data</li>
<li>Set DataWedge to acquire scanned data for one or more apps</li>
<li>Create Profiles to implement specific DataWedge features for individual apps </li>
<li>Enable/Disable decoding of individual symbologies to improve speed</li>
<li>Set parameters for individual barcodes, scanners and readers</li>
<li>Format output according to simple or custom rules</li>
<li>Use plug-ins for data input, output and processing</li>
<li>Import and export settings </li>
<li>Remotely configure and mass-deploy settings via MDM  </li>
<li>Restore settings to factory defaults</li>
<li>Apply remote settings changes immediately </li>
<li>Handle escape characters with "string at" criteria in Advanced Data Formatting rules</li>
</ul>
<p>Availability and operation of DataWedge features varies by device and operating system (which determine the DataWedge version installed on the device). </p>
<!-- _**This guide describes DataWedge for Android. Features and usage of Windows versions may vary slightly. Please refer to Windows documentation**_. 10/20/16- Windows reference removed per eng. -->
<blockquote>
  <p>Ready to get started? Go to the <a href="../setup">DataWedge Setup guide</a>.</p>
</blockquote>
<h3 id="whichversionisinstalled">Which Version is Installed?</h3>
<p><strong>To determine which DataWedge version is installed on a device</strong>:</p>
<!--
<img style="height:350px" src="01_datawedge_launcher.png"/>
_Launcher icon for DataWedge 3.x_
<br>
-->
<p>&#49;. On the device, locate and <strong>tap the DataWedge icon</strong> in the Launcher screen or App Drawer: 
<img style="height:350px" src="02_datawedge_launcher.png"/>
<em>Launcher icon for DataWedge 6.x</em>
<br></p>
<p>&#50;. <strong>Tap the "hamburger" menu</strong>. The DataWedge menu appears: 
<img style="height:350px" src="02_datawedge_settings_menu.png"/>
<br></p>
<p>&#51;. <strong>Tap About</strong>. The "About DataWedge" screen appears. The DataWedge version number is highlighted in the image below. Notice that the Scanner Framework version also is shown.<br />
<img style="height:350px" src="03_datawedge_about_screen.png"/>
<em>The "About DataWedge" box showing version numbers</em> 
<br></p>
<p>&#52;. If the DataWedge version on the device is different than that of this guide, visit the <a href="https://www.zebra.com/us/en/support-downloads.html">Zebra support site</a> and download a device-specific Integrator Guide for reference. </p>
<!--
#### Download an Integrator Guide
For each of its devices, Zebra publishes an Integrator Guide containing information specific to that device. For products that include DataWedge, **the Integrator Guide includes a chapter covering only those DataWedge capabilities available on the device**. A search for the term "integrator" at the [Zebra Support Portal](https://portal.motorolasolutions.com/Support/US-EN/Search?searchType=simple&searchTerm=integrator) yields a result similar to the image below. Narrow the seach by adding the device model. 
<br>
<br>
<img style="height:450px" src="support_central_guides.png"/>
_The Zebra Support Central site showing search results for the search term "integrator_" 
<br>



#### Update DataWedge (Windows only)
**DataWedge is part of the device OS image** and relies on specific components built into that image. It cannot be downloaded separately or updated without also updating the entire device, a process that **can result in loss of user data and/or user-installed applications**. It should therefore be considered only after all other options have been eliminated. **Zebra recommends consulting with a Zebra partner before upgrading a device OS image**. 

**This option is not available for Android devices**. 
-->
<hr />
<p>Related Guides: </p>
<ul>
<li><a href="../setup">DataWedge Setup Guide</a></li>
<li><a href="../demo">DataWedge Demo app</a></li>
</ul>