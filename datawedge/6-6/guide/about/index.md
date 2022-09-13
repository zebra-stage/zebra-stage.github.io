<h2 id="overview">Overview</h2>
<p>DataWedge provides barcode scanning and processing services for Zebra devices running Android. Included with every Zebra device, DataWedge enables all apps on the device (whether stock or added later) to acquire scanned data without using scanner APIs directly. DataWedge can be easily configured to automatically provide scanning services whenever a particular app is launched; to use a particular scanner, reader or other sensor; and to manipulate acquired data according to simple options or complex rules. </p>
<h3 id="languagesupport">Language Support</h3>
<p>DataWedge has been approved to run on device operating systems localized for the following languages:</p>
<ul>
<li>English</li>
<li>French</li>
<li>German</li>
<li>Italian</li>
<li>Spanish</li>
<li>Simplified Chinese</li>
<li>Traditional Chinese</li>
</ul>
<p>For more information about approved languages or to download a localized operating system, please <a href="https://www.zebra.com/us/en/about-zebra/contact-zebra/contact-tech-support.html">contact Zebra Technical Support</a>.</p>
<hr />
<h4 id="thisdocumentappliesto">This document applies to:</h4>
<ul>
<li><strong>DataWedge 6.6.x</strong>, which requires:</li>
<li><strong>Scanner Framework 18.0.9.0</strong> or higher, and</li>
<li><strong>SimulScan 1.9 or higher</strong> (on <a href="../../../../simulscan">devices that support SimulScan</a>)</li>
</ul>
<p>To learn more about DataWedge APIs, read <a href="https://developer.zebra.com/community/home/blog/2017/06/27/datawedge-apis-benefits-challenges">DataWedge APIs - Benefits & Usage Scenarios</a> by Zebra engineer Darryn Campbell. </p>
<hr />
<h3 id="newindatawedge66">New in DataWedge 6.6</h3>
<ul>
<li><p><strong>New <a href="../input/serial">serial input options</a> allow DataWedge to specify communications parameters for a scanner or other device connected to a serial port and used to acquire data</strong>.</p></li>
<li><p><strong><a href="../settings/#reporting">Import Reporting</a> displays the results of imported databases and Profiles, allowing administrators to easily identify source/destination differences and make adjustments to compensate</strong>.</p></li>
<li><p><strong>A new <a href="../api/setreportingoptions">SET<em>REPORTING</em>OPTIONS</a> API provides control of Reporting features with intents</strong>. </p></li>
<li><p><strong>The <a href="../api/setconfig">SET_CONFIG</a> API now configures multiple plug-ins with a single intent action</strong>. </p></li>
<li><p><strong>The <a href="../api/switchscanner">SWITCH_SCANNER</a> API now supports friendly device names with a new extra</strong>. </p></li>
</ul>
<hr />
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
<p>&#52;. If the DataWedge version on the device is different than that of this guide, <a href="../../../../">return to the Techdocs tile page</a> and select the appropriate version from the drop-down menu in the DataWedge tile.</p>
<p>It also might be helpful to visit the <a href="https://www.zebra.com/us/en/sitesearch.html?q=integrator%20guide">Zebra support site</a> and download a device-specific Integrator Guide for reference. </p>
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