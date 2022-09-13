<h2 id="overview">Overview</h2>
<p>DataWedge provides “zero-code” barcode scanning and processing services for Zebra devices running Android. Included with every Zebra device, DataWedge enables all apps on the device (whether stock or added later) to acquire scanned data without using scanner APIs directly. DataWedge can be easily configured to automatically provide scanning services whenever a particular app is launched; to use a particular scanner, reader or other sensor; and to manipulate acquired data according to simple options or complex rules. </p>
<p>When programmatic control is required, <a href="../api">DataWedge APIs</a> provide the ability to control, modify and query the DataWedge configuration settings and operations through Android intents. This allows new or existing Android apps to be easily modified with an organization's current development resources to acquire data using Zebra devices. </p>
<p>To learn more about DataWedge APIs, read <a href="https://developer.zebra.com/community/home/blog/2017/06/27/datawedge-apis-benefits-challenges">DataWedge APIs - Benefits & Usage Scenarios</a> by Zebra engineer Darryn Campbell. </p>
<hr />
<p><strong>Go to <a href="#newindatawedge68">"what's new" section</a></strong></p>
<h3 id="mainfunctionality">Main Functionality</h3>
<p>The version of DataWedge documented in this guide provides the following primary functions and options: </p>
<h4 id="datacapture">Data Capture</h4>
<ul>
<li>Scan and process all <a href="../input/barcode/#decoderselection">major barcode symbologies</a></li>
<li>Use existing apps to <a href="../input/barcode">acquire barcodes</a>, images, text, phone numbers, mag-stripe and other data</li>
<li>Set DataWedge to <a href="../setup">acquire scanned data for one or multiple apps</a></li>
<li>Acquire multiple types of data in a single scan <a href="../input/simulscan">using SimulScan</a> </li>
<li>Designate device screen areas as scan triggers using <a href="../input/dcp">Data Capture Plus</a></li>
<li><a href="../overview">Create Profiles</a> to implement DataWedge features for individual apps </li>
<li>Configure DataWedge to <a href="../input/barcode/#autoswitchtodefaultonevent">automatically scan with external Zebra peripherals</a>: <ul>
<li><a href="../input/barcode/#usbssiscanners">USB SSI scanners</a></li>
<li><a href="../input/barcode/#bluetoothscanners">Bluetooth scanners</a></li>
<li><a href="../input/serial">Serial scanners</a></li></ul></li>
</ul>
<h4 id="dataprocessing">Data Processing</h4>
<ul>
<li><a href="../input/barcode/#decoderselection">Enable/Disable decoding</a> of individual symbologies to improve speed</li>
<li><a href="../input/barcode">Set parameters</a> for individual barcodes, scanners and readers</li>
<li>Format output according to <a href="../process/bdf/">simple</a> or <a href="../process/adf/">custom</a> rules</li>
<li>Use <a href="../profiles">Plug-ins</a> for data input, output and processing</li>
<li><a href="../process/adf/#settingcriteria">Create custom string handling</a> and other processing criteria</li>
</ul>
<h4 id="deployment">Deployment</h4>
<ul>
<li><a href="../settings">Import and export settings</a> </li>
<li>Remotely configure and <a href="../settings/#massdeployment">mass-deploy settings</a> via MDM  </li>
<li><a href="../settings/#restoredefaults">Restore settings</a> to factory defaults</li>
<li><a href="../settings/#autoimport">Apply changes remotely</a> to update devices in the field </li>
<li><a href="../settings/#reporting">Generate reports</a></li>
</ul>
<p><strong>Note</strong>: Availability and operation of DataWedge features varies by device and operating system (which determine the DataWedge version installed on the device). </p>
<hr />
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
<h2 id="newindatawedge68">New in DataWedge 6.8</h2>
<ul>
<li><strong><a href="../input/barcode/#autoswitchtodefaultonevent">Scanner auto-switching</a> behavior is now controllable</strong> after connecting and disconnecting external scanners</li>
<li><strong><a href="../settings/#datawedgesettings">DataWedge Settings</a> allows disabled Profiles to be ignored</strong> to help maintain full functionality at all times </li>
<li>New <strong><a href="../api/setignoredisabledprofiles">SET<em>IGNORE</em>DISABLED_PROFILES API</a></strong> configures DataWedge to avoid switching to Profiles are are not enabled. </li>
<li>New <strong><a href="../api/getignoredisabledprofiles">GET<em>IGNORE</em>DISABLED<em>PROFILES API</a></strong> returns the status of the IGNORE</em>DISABLED_PROFILES flag. </li>
<li>Updated <strong><a href="../api/setconfig">SET_CONFIG API</a></strong> now supports: </li>
<li>Advanced Data Formatting</li>
<li>Digimarc decoding</li>
<li>New <strong><a href="../api/switchsimulscanparams">SWITCH<em>SIMULSCAN</em>PARAMS API</a></strong> enables runtime changes to SimulScan parameters </li>
<li><strong>Automatic Profile importing is enhanced</strong> to improve reliability and reduce extra coding </li>
</ul>
<h4 id="otherchanges">Other changes</h4>
<p>The SimulScan Input Plug-in default template is now "Default - Barcode4.xml" </p>
<blockquote>
  <p>Ready to get started? Go to the <a href="../setup">DataWedge Setup guide</a>.</p>
</blockquote>
<hr />
<h2 id="recentversionhistory">Recent Version History</h2>
<h3 id="addedinv67">Added in v6.7</h3>
<ul>
<li><p><strong>This version supports devices running Android Lollipop and higher only</strong>. </p></li>
<li><p><strong>Supports <a href="../input/barcode/#readerparams">multi-barcode input</a></strong> for simultaneous acquisition of more than one barcode at a time (<strong>TC20/TC25 devices only</strong>).  </p></li>
<li><p><strong>Enhanced <a href="../output/keystroke/#keystrokeoutputsetup">inter-character delay</a> function</strong> allows a delay to be specified for all characters or for multi-byte characters only.  </p></li>
<li><p><strong>AimType now supports <a href="../input/barcode/#readerparams">Press and Sustain</a></strong> function continues a decode session until the Beam Timer is expired, barcode is decoded or the read is canceled.  </p></li>
<li><p><strong>A <a href="../input/simulscan">Dynamic Templates parameter</a></strong> allows the number of barcodes to be specified (from 1-99) for decoding on a form when using SimulScan Dynamic Templates.</p></li>
<li><p><strong>A new <a href="../api/importconfig">IMPORT_CONFIG API</a></strong> allows Config and Profile settings files to be imported using an intent. </p></li>
</ul>
<hr />
<h3 id="addedinv66">Added in v6.6</h3>
<ul>
<li><p><strong>New <a href="../input/serial">serial input options</a> allow DataWedge to specify communications parameters for a scanner or other device connected to a serial port and used to acquire data</strong>.</p></li>
<li><p><strong><a href="../settings/#reporting">Import Reporting</a> displays the results of imported databases and Profiles, allowing administrators to easily identify source/destination differences and make adjustments to compensate</strong>.</p></li>
<li><p><strong>A new <a href="../api/setreportingoptions">SET<em>REPORTING</em>OPTIONS</a> API provides control of Reporting features with intents</strong>. </p></li>
<li><p><strong>The <a href="../api/setconfig">SET_CONFIG</a> API now configures multiple plug-ins with a single intent action</strong>. </p></li>
<li><p><strong>The <a href="../api/switchscanner">SWITCH_SCANNER</a> API now supports friendly device names with a new extra</strong>. </p></li>
</ul>
<hr />
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
<img style="height:350px" src="dw_6.7_about_screen.jpg"/>
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