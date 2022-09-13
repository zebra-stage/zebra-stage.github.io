<h2 id="overview">Overview</h2>
<p>DataWedge provides barcode scanning and processing services for Zebra devices running Android. Included with every Zebra device, DataWedge enables all apps on the device (whether stock or added later) to acquire scanned data without using scanner APIs directly. DataWedge can be easily configured to automatically provide scanning services whenever a particular app is launched; to use a particular scanner, reader or other sensor; and to manipulate acquired data according to simple options or complex rules. </p>
<h4 id="thisdocumentappliesto">This document applies to:</h4>
<ul>
<li><strong>DataWedge 6.2.x</strong>, which requires:</li>
<li><strong>Scanner Framework 5.1.0</strong> or higher, and</li>
<li><strong>SimulScan 1.9 or higher</strong> (on <a href="../../../../simulscan">devices that support SimulScan</a>)</li>
</ul>
<h4 id="newindatawedge62">New in DataWedge 6.2</h4>
<p>DataWedge 6.2 implements a new structure for launching Android intents, part of a transition that will ultimately support multiple intents launched as a single command. For details, see the <a href="../api">DataWedge Data Capture API</a> guide.</p>
<p><strong>New APIs in DataWedge 6.2</strong>: </p>
<ul>
<li><strong>DELETE_PROFILE -</strong> used to delete one or more Profiles</li>
<li><strong>GET<em>PROFILES</em>LIST -</strong> returns a list of Profiles in the device</li>
<li><strong>CLONE_PROFILE -</strong> creates a copy of an existing Profile</li>
<li><strong>RENAME_PROFILE -</strong> changes the name of an existing Profile </li>
<li><strong>GET<em>ACTIVE</em>PROFILE -</strong> returns the name of the currently selected Profile</li>
<li><strong>ENABLE_DATAWEDGE -</strong> used to enable/disable the DataWedge app</li>
</ul>
<p>See the <a href="../api">DataWedge Data Capture API</a> guide for details. </p>
<h3 id="mainfunctionality">Main Functionality</h3>
<p>The version of DataWedge documented in this guide provides the following primary functions and options: </p>
<ul>
<li>Scan and process all <a href="../decoders">major barcode symbologies</a></li>
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
  <p>Ready to get started? Go to the <a href="../setup">DataWedge Setup Guide</a>.</p>
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