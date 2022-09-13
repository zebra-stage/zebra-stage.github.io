<h2 id="overview">Overview</h2>
<p><strong>Profiles and Plug-ins</strong> form the basis of most DataWedge functionality. Profiles include all the information about how DataWedge should behave when providing scanning services for a particular application. Much of that information comes from Plug-ins, which determine how the data will be input, processed and output.</p>
<p>Each Profile generally contains four elements: </p>
<ul>
<li><strong>An Input Plug-in -</strong> to determine how data will be acquired (i.e. a barcode scanner)</li>
<li><strong>A Process Plug-in -</strong> to specify how the acquired data should be manipulated </li>
<li><strong>An Output Plug-in -</strong> to control the passing of data to an application</li>
<li><strong>An associated application -</strong> (or activity) with which to link DataWedge actions</li>
</ul>
<p>When associated with an app, DataWedge can be invoked to scan and acquire the data, format or append it in a specified way, and pass it to the associated app when the app comes to the foreground. DataWedge also includes Profile0, which works with any unassociated application that comes to the foreground. Profile0 contains baseline settings that can be tailored to suit individual needs. This allows DataWedge to be used out of the box with little or no setup. </p>
<p><strong>Important: Control of barcode scanning hardware is exclusive</strong>. When DataWedge is active, Scanner and Barcode APIs of apps such as Enterprise Browser and others will be inoperative. Likewise, when an app such as Enterprise Browser controls the scanning hardware, other apps (including DataWedge) are locked out. It is therefore important to understand how to take control of a device's scanner hardware and, if necessary, release it to other apps when scanning is complete. For more information, see <strong>Disable DataWedge</strong> section. </p>
<!-- _**This guide describes DataWedge for Android. Features and usage of Windows versions may vary slightly. Please refer to Windows documentation**_. 10/20/16- Windows reference removed per eng. -->
<h2 id="profiles">Profiles</h2>
<p>A DataWedge Profile contains information about how DataWedge should behave with one or more associated applications, and provides a means to allow different apps that might be acquiring the same data to do different things with it. For example, while "App A" might require that a TAB be sent after each dataset is passed from DataWedge, "App B" might require the ENTER key to be pressed instead. Through Profiles, DataWedge can be configured to process the same set of captured data according to the requirements of any number of individual applications. Alternatively, a <strong>single</strong> Profile can be created and associated with <strong>many applications</strong>, acquiring and processing data in exactly the same way for all. </p>
<p>Any number of Profiles can be created to suit all the needs of an enterprise. DataWedge also includes several pre-configured Profiles to support general needs or for specific apps that are built into every device. Some of these, such as Profile0, are visible to the user and can be edited as needed. Others contain fixed parameters and are not visible or configurable. </p>
<h4 id="visibleprofiles">Visible Profiles</h4>
<ul>
<li><strong>Profile0 -</strong> is a generic that takes effect for any unassociated foreground app. </li>
<li><strong>Launcher -</strong> is used when the Launcher screen is in the foreground.</li>
<li><strong>DWDemo -</strong> is used with DWDemo, the <a href="../demo">DataWedge Demo app</a> app. When DWDemo comes to the foreground, data captured with DataWedge is handed to the DWDemo application.</li>
<li><strong>User-defined -</strong> profiles are always visible and available for editing. </li>
</ul>
<h4 id="hiddenprofiles">Hidden Profiles</h4>
<ul>
<li><strong>RD Client -</strong> provides support for Zebra's Rapid Deploy app and third-party MDM solutions.</li>
<li><strong>MSP Agent -</strong> provides support for Zebra's legacy Mobility Services Platform (MSP).</li>
<li><strong>MspUserAttribute -</strong> provides additional support for MSP.</li>
<li><strong>Camera -</strong> disables scanning when the default camera application is in the foreground.</li>
<li><strong>RhoElements -</strong> disables scanning when RhoElements is in the foreground.</li>
</ul>
<h3 id="profile0">Profile0</h3>
<p>Profile0 is a generic Profile that automatically takes effect for any app that comes to the foreground that has not been associated with DataWedge. This can be useful for quickly acquiring data using an app that has just been installed, for example, or when using an app that has not yet been configured by an administrator for use with DataWedge. All parameters of Profile0 can be edited except its association. <!-- **Note: Profile0 cannot be used with IPWedge**.10/18/16- removed per Tharindu --></p>
<p><strong>Profile0 also can be disabled within a Profile</strong>. This provides a measure of security by restricting output to applications or servers to which DataWedge has been specifically associated. </p>
<h2 id="plugins">Plug-ins</h2>
<p>Plug-ins extend DataWedge functionality to support device hardware, peripherals, data processing and transport. Plug-ins are used to configure how data will be acquired by DataWedge, manipulated or altered for an app, and output to an app or server.</p>
<p><strong>Input Plug-ins specify</strong>:</p>
<ul>
<li>Barcode scanners (laser, imager, camera, bluetooth scanner)</li>
<li>Magnetic Stripe Readers (MSR)</li>
<li>SimulScan hardware</li>
</ul>
<p><strong>Process Plug-ins specify</strong>: </p>
<ul>
<li>Basic data formatting (append with keystrokes, prefix, suffix, etc.)</li>
<li>Advanced data formatting (rules-based data manipulation)</li>
</ul>
<p><strong>Output Plug-ins specify</strong>:</p>
<ul>
<li>Keystrokes (emulates manual keyboard input)</li>
<li>Intent (programmatic hand-off of data)</li>
<li>IP Output (sending data to a server over IP)</li>
</ul>
<h3 id="inputplugins">Input Plug-ins</h3>
<p>Input Plug-ins specify the device hardware to be used to acquire the data before sending it for processing. Those included with DataWedge are explained below. <strong>DataWedge also provides beep sounds and other feedback to alert the user of scanning results and barcode type. Refer to Scanner Parameters section for more information</strong>. </p>
<p><strong>The Barcode Scanner Input Plug-in</strong> reads data from the integrated barcode scanner built into the device, attached by cable or implemented as a snap-on module. This Plug-in supports laser, imager and internal cameras. The raw barcode data that's acquired is processed or formatted as required using Process Plug-ins. </p>
<p><strong>The MSR Input Plug-in</strong> is for magnetic stripe reader modules. This plug-in reads data from an integrated MSR reader or attached Scan/MSR Module, after which the raw data from the reader can be processed or formatted as required using Process Plug-ins. See the <a href="../msr">MSR Guide</a> for more information. </p>
<p><strong>The SimulScan Input Plug-in</strong> permits simultaneous capture of barcodes, images, text, signatures, phone numbers and other data on multi-part forms. The SimulScan Input Plug-in adds this capability to DataWedge. When form data is captured according to a designated SimulScan template, data can be processed or formatted as required using Process Plug-ins. </p>
<p><strong>Note</strong>: DataWedge concatenates all text captured through SimulScan into a single string, and performs processing on the concatenated string. See <strong>SimulScan section</strong> later in this guide. </p>
<h3 id="processplugins">Process Plug-ins</h3>
<p>Process Plug-ins manipulate the acquired data in a specified way before sending it to the associated application or server via the Output Plug-in. Process Plug-ins are grouped with each Output Plug-in, and appear as "Basic Data Formatting" and "Advanced Data Formatting." They are explained below. </p>
<p><strong>The Basic Format Process Plug-in</strong> allows DataWedge to add a prefix and/or a suffix to captured data before passing it to an Output Plug-in. It also permits the insertion of TAB and ENTER keystrokes as well as conversion of data to hex. For example, if the acquired barcode data is 012345, this option would cause the hex equivalent data of 30<strong>31</strong>32<strong>33</strong>34<strong>35</strong> to be sent. </p>
<p><strong>The Advanced Format Process Plug-in</strong> allows for acquired data to be customized  to suit any requirement based on a set of complex rules containing individual or multiple criteria and actions. For more information, please see the <a href="../advanced">Advanced Data Formatting Guide</a>. </p>
<h3 id="outputplugins">Output Plug-ins</h3>
<p>Output Plug-ins send the processed data to the associated application or server. Those included with DataWedge are explained below. </p>
<p><strong>The Keystroke Output Plug-in</strong> collects the processed data and sends it to the associated application as a series of keystrokes, emulating the actions of a user pressing the keys.</p>
<p><strong>The Intent Output Plug-in</strong> sends the processed data to the associated foreground application as payload within an Android Intent.</p>
<p><strong>The IP Output Plug-in</strong> allows captured data to be sent to a specified IP address and port using either TCP or UDP transport protocols to a Windows server running Zebra IPWedge software. Please refer to the <a href="../ipwedge">IP Output Guide</a> for further information. <!-- **Note: Profile0 cannot be used with IPWedge**. 10/18/16- removed per Tharindu --></p>
<h2 id="createaprofile">Create a Profile</h2>
<p>This section provides step-by-step instructions for creating a DataWedge Profile, which includes plug-ins for input, processing and output, plus association with an app. Use these steps for every app that will call on DataWedge for scanning services. </p>
<h3 id="quicksteps">Quick Steps</h3>
<p>To enable DataWedge scanning services for an app, perform the following steps on an Android device:</p>
<ol>
<li><strong>Install the app</strong> that will use DataWedge for scanning. </li>
<li><strong>Start DataWedge</strong> app and navigate to the Profiles list (if not shown by default).  </li>
<li>Tap on the Profiles screen's "hamburger" menu and <strong>select -> New profile</strong>. </li>
<li><strong>Enter a name for the Profile and tap OK</strong>. The new Profile appears in the Profiles list. </li>
<li>Tap on the new profile.</li>
<li><strong>Select Associated Apps</strong> from the Applications section.</li>
<li>In the Hamburger menu, <strong>select -> New app/activity</strong>. A list of installed apps appears. </li>
<li>Select your app's package name (scrolling down, if necessary).</li>
<li><strong>Tap the asterisk</strong> (*) to associate all of your app's activities with DataWedge. </li>
<li>Tap the device's Back button until the new Profile's Settings screen appears.</li>
<li>Confirm that the "Profile enabled" checkbox is checked. </li>
<li>As needed, <strong>confirm that the Barcode Input and Keystroke Output checkboxes are checked</strong>. </li>
</ol>
<p>Test and adjust input, processing (data formatting) and output parameters as necessary. </p>
<p>The app will now use DataWedge for barcode data acquisition. </p>
<h3 id="detailedsteps">Detailed Steps</h3>
<h4 id="createanewprofile">Create a New Profile:</h4>
<!--
&#49;. Locate and <b>tap the DataWedge icon</b> from the Launcher or App Drawer to launch it:  
<img style="height:350px" src="01_datawedge_launcher.png"/>
_Launcher icon for DataWedge 3.x_
<br>
-->
<p><img style="height:350px" src="02_datawedge_launcher.png"/>
<em>Launcher icon for DataWedge 6.x</em>
<br></p>
<p>On newly installed devices, the DataWedge Profiles screen similar to the image below appears, showing the three included (visible) Profiles. White text indicates enabled Profiles. Also shown is a fourth, disabled Profile (grey text) that's not present out-of-the-box. 
<img style="height:350px" src="01a_ProfilesScreen.png"/></p>
<p><strong>Note</strong>: If DataWedge had been opened previously, it will reopen to the last screen used. If necessary, press BACK until the Profiles screen appears.<br />
<br></p>
<p>&#50;. <strong>Tap the "hamburger"</strong> menu and <strong>select -> New profile</strong>.<br />
<img style="height:350px" src="02_OptionsMenu.png"/>
<br></p>
<p>&#51;.  <strong>Enter a name</strong> for the new Profile and <strong>tap OK</strong>. The Profiles list appears, similar to the image in Step 4, below.<br />
<img style="height:350px" src="03_name_profile.png"/>
Zebra recommends that Profile names be unique and contain alpha-numeric characters only.
<br></p>
<h4 id="associatetheprofilewithappsandoractivities">Associate the Profile with App(s) and/or Activities:</h4>
<p>&#52;. <strong>Tap the Profile</strong> to be associated: 
<img style="height:350px" src="04_profile_list.png"/>
<br></p>
<p>&#53;. From the Profile screen, <strong>tap the "Profile enabled" checkbox</strong> to enable it, then <strong>tap "Associated apps"</strong> to link it with an app or activity:
<img style="height:350px" src="05_enable_profile.png"/>
<br></p>
<p>&#54;. <strong>Tap the menu</strong> and <strong>select -> New app/activity</strong>. A list appears with all apps and activities installed on the device. 
<img style="height:350px" src="06_associate_menu.png"/>
<br></p>
<p>&#55;. From the device apps/activities list, <strong>select the app or activity to associate</strong> with the Profile being edited. When an app is selected, its activities list appears (see Step 8). 
<img style="height:350px" src="07_select_app_to_associate.png"/>
<br></p>
<p>&#56;. From the app activities list, <strong>tap the asterisk to associate all app activities</strong> with the Profile, or tap on an indvidual activity to use DataWedge for <strong>that specific activity only</strong>:
<img style="height:350px" src="08_pick_asterisk.png"/>
<br></p>
<p>&#57;. The app now appears in the Profile associations list as below. <strong>Repeat Steps 6-8</strong> until all desired apps and/or activities are associated. 
<img style="height:350px" src="09_confirm_association.png"/>
When finished adding associations, <strong>Tap the BACK button</strong> to return to the Profile screen. 
<br>
<br></p>
<h4 id="configurepluginsforinputprocessingandoutput">Configure Plug-ins for Input, Processing and Output:</h4>
<p>&#49;&#48;. From the Profile screen, <strong>enable the desired Input Plug-in</strong> (scrolling down as necessary). For example, the Barcode Input displays an option for Scanner selection: 
<img style="height:350px" src="10_enable_new_profile.png"/>
<br></p>
<p>&#49;&#49;. From the Scanner selection screen, <strong>select the desired scanner</strong> or imager. <strong>Tap BACK</strong> to return to the Input Plug-in screen. 
<img style="height:350px" src="11_select_input.png"/>
<strong>Note: Lists such as the one above display only devices that are present on (or connected to) the unit being configured</strong>. For related information, see <strong>Scanner Selection</strong> section. 
<br></p>
<p>&#49;&#50;. From the Decoders screen (accessible from the Input Plug-in screen), <strong>select only the decoders required by the application</strong> to optimize scanning performance. <strong>Tap BACK</strong> to return to the Input Plug-in screen. For more information about configuring Decoder parameters, see the <a href="../decoders">Decoder Guide</a>.
<img style="height:350px" src="12_select_decoders.png"/>
<br></p>
<p>&#49;&#51;. From the Profile screen, <strong>select the desired Output Plug-in</strong> (scrolling down as necessary). For example, the image below shows that the Keystroke Output Plug-in is enabled: 
<img style="height:350px" src="13_select_output.png"/>
<strong>Note</strong>: Output Plug-in sections contain selectors for configuring "Basic data formatting" and "Advanced data formatting." <strong>These are the Process Plug-ins</strong>.<br />
<br></p>
<p>&#49;&#52;. <strong>Select the Basic data formatting</strong> for options on inserting special keystrokes or adding text before (prefix) and/or after (suffix) the collected data:<br />
<img style="height:350px" src="14_basic_data_formatting.png"/>
<br></p>
<p>See <strong>Basic data formatting</strong> elsewhere in this guide for more information. For Advanced data formatting options, see the <a href="../advanced">Advanced Data Formatting Guide</a>.
<br></p>
<h3 id="editrenamedeleteorcloneaprofile">Edit, Rename, Delete or Clone a Profile</h3>
<p><strong>To edit, rename, delete or clone a profile</strong>: </p>
<p>&#49;. <strong>Long-press the Profile name</strong> to bring up its Context menu.</p>
<p>&#50;. <strong>Tap on the desired action</strong>: 
<img style="height:350px" src="profile_context_menu.png"/>
<br>
Editing a Profile also can be started by tapping the Profile name in the Profile list. </p>
<h3 id="disabledatawedge">Disable DataWedge</h3>
<p><strong>Control of barcode scanning hardware is exclusive</strong>. When DataWedge is active, Scanner and Barcode APIs of apps such as Enterprise Browser and others will be inoperative. Likewise, when an app such as Enterprise Browser controls the scanning hardware, other apps (including DataWedge) are locked out. It is therefore important to understand how to take control of a device's scanner hardware and, if necessary, release it to other apps when scanning is complete. </p>
<p><strong>To disable DataWedge</strong>:</p>
<p>&#49;. <strong>Start DataWedge</strong> and navigate to the Profiles list (if not shown by default).</p>
<p>&#50;. Tap on the "hamburger" menu and <strong>select -> Settings</strong>:
<img style="height:350px" src="datawedge_settings.png"/>
<br></p>
<p>&#51;. <strong>Uncheck the "DataWedge enabled" checkbox</strong>. Control of scanner hardware is now returned to the system. 
<img style="height:350px" src="datawedge_enable-disable.png"/>
<em>The DataWedge Settings panel controls Profile import/export, logging and other general functions</em>. 
<br></p>
<p>For more information about functions of the DataWedge Settings panel, please see the <a href="../advanced">Advanced Guide</a>.</p>
<h2 id="scannerselection">Scanner Selection</h2>
<p>For the Barcode Input Plug-in, the Scanner selection panel determines which scanning device will be used for data capture. The list of available scanners will be based devices that are present on (or connected to) the unit being configured. 
<img style="height:350px" src="11_select_input.png"/>
<br></p>
<p>The "Auto" option will automatically determine the best scanning device from the list of available devices based on the rules below. </p>
<p><strong>Auto Scanner Selection Rules</strong>:</p>
<ul>
<li>If a Zebra Scan Module or Scan/MSR Module is installed, the 2D imager will be selected. </li>
<li>If no Scan Module is installed, the camera will be selected. </li>
<li>When the camera is selected, scanning is performed with the rear-facing camera.</li>
<li>When 2D Imager is selected, scanning is performed using the installed Scan or Scan/MSR module.</li>
</ul>
<h4 id="bluetoothscanners">Bluetooth Scanners</h4>
<p>DataWedge supports the following Bluetooth scanners: </p>
<ul>
<li><strong>Zebra RS507</strong> Cordless Ring Scanner</li>
<li><strong>RS6000 Bluetooth Ring Scanner</strong> (when used with WT6000 only)  </li>
</ul>
<p>Bluetooth scanners are supported according to the following rules:</p>
<ul>
<li><strong>To initially configure the RS507</strong> in a Profile, the scanner must be paired and connected.</li>
<li><strong>After initial configuration</strong>, the Bluetooth scanner can be enabled and disabled in the Profile even if it is disconnected from the device. However, to configure reader parameters, decoders and other scanner settings, the Bluetooth scanner must be connected.</li>
<li><strong>DataWedge will not automatically reconnect</strong> to a Bluetooth scanner if that scanner is connected while DataWedge is using a different auto-selected scanner. To re-enable a Bluetooth scanner, connect the scanner and select it in the Profile or re-choose the Auto select option.</li>
<li><strong>Auto-selection and Battery Swap -</strong> If Scanner selection is set to Auto and the RS507 was enabled prior to a battery swap, DataWedge will continue working with that RS507 scanner upon reconnection after the battery is swapped. If the RS507 does not reconnect with after the swap, DataWedge will revert to the current default scanner.</li>
<li><strong>Keep Enabled on Suspend -</strong> This mode is supported on Bluetooth and pluggable scanners, and might result in faster battery drain than would otherwise be expected while in suspend mode. <strong>Note: The Zebra computing device will wake from suspend mode when the RS507 scan trigger is pressed</strong>.</li>
</ul>
<h2 id="simulscaninput">SimulScan Input</h2>
<p>The SimulScan Input Plug-in permits simultaneous capture of barcodes, images, text, signatures, phone numbers and other data on multi-part forms. The SimulScan Input Plug-in adds this capability to DataWedge. When form data is captured according to a designated SimulScan template, data can be processed or formatted as required using Process Plug-ins. </p>
<p><img style="height:350px" src="keystroke-output.png"/>
<em>SimulScan Input Plug-in options</em>.
<br></p>
<p><strong>SimulScan Capture Notes</strong>:</p>
<ul>
<li><strong>Text captured through SimulScan</strong> is concatenated into a single string, and processing is performed on that string.</li>
<li><strong>If the Barcode Input Plug-in is enabled</strong> in a Profile, enabling SimulScan in that Profile will cause the Barcode Input Plug-in to be disabled. </li>
</ul>
<p><strong>Device Selection -</strong> permits selection between the device camera or the default scanning device set by the system.  </p>
<p><strong>Template selection -</strong> sets a SimulScan template for the Profile being configured. </p>
<p><strong>Templates included with DataWedge</strong>:</p>
<ul>
<li><p><strong>BankCheck.xml -</strong> captures the account number and routing number from the machine-readable zone (MRZ) of a check.</p></li>
<li><p><strong>Barcode1.xml -</strong> decodes a single barcode of any symbology.</p></li>
<li><p><strong>Barcode2.xml -</strong> decodes two barcodes of the same or differing symbologies.</p></li>
<li><p><strong>Barcode4.xml -</strong> decodes four barcodes of the same or differing symbologies.</p></li>
<li><p><strong>Barcode5.xml -</strong> decodes five barcodes of the same or differing symbologies.</p></li>
<li><p><strong>Barcode10.xml -</strong> decodes 10 barcodes of the same or differing symbologies.</p></li>
<li><p><strong>BookNumber.xml -</strong> decodes 10- or 13-digit ISBN codes.</p></li>
<li><p><strong>DocCap+Optional-Barcode.xml -</strong> captures the form as an image and optionally decodes a barcode if present. This is the default form if none is selected.</p></li>
<li><p><strong>DocCap+Required-Barcode.xml -</strong> captures the form and decodes any available barcode.</p></li>
<li><p><strong>TravelDoc.xml -</strong> captures information from the machine-readable zone (MRZ) of a travel document such as a passport.</p></li>
<li><p><strong>Unstructured Multi-Line.xml -</strong> uses OCR to acquire multiple lines of alpha/numeric text.</p></li>
<li><p><strong>Unstructured Single Line.xml -</strong> uses OCR to acquire a single line of alpha/numeric text.</p></li>
</ul>
<p><em>The names of all Templates included with SimulScan are preceded by the word "Default" plus a hyphen</em>.</p>
<p>Custom template XML files copied to the following device directory will be available for selection using this option:</p>
<p><code>/enterprise/device/settings/datawedge/templates</code> </p>
<p><strong>Note: Files and folders within the /enterprise directory are invisible to Android File Browser</strong> by default; they can be made visible by manually inputting the path.</p>
<p>Partners and other authorized users can create custom templates online using Zebra's <a href="../../../../simulscan/1-1/guide/templatebuilder">SimulScan Template Builder</a>. </p>
<p><strong>Region separator -</strong> is used to configure a separator character for SimulScan text-region data. When multiple text regions exist, the region separator will be inserted between the data strings from each region on the acquisition form. Region separators can be used with the Keystrokes Plug-in Action key character setting (see below) to dispatch SimulScan region data to separate text fields.</p>
<p>Possible values:</p>
<ul>
<li>None (default)</li>
<li>Tab</li>
<li>Line feed </li>
<li>Carriage return </li>
</ul>
<p><strong>Notes</strong>: </p>
<ul>
<li><strong>Barcode, OCR and OMR regions</strong> are considered as text regions. When using keystroke output and IP output, only text-region data will be dispatched to the foreground application or the remote server.</li>
<li><strong>Picture-region data</strong> can be retrieved only through the Intent Output Plug-in.</li>
</ul>
<h2 id="keystrokeoutput">Keystroke Output</h2>
<p>The Keystroke Output Plug-in collects the processed data and sends it to the associated application as a series of keystrokes, emulating the actions of a user pressing the keys. </p>
<p><img style="height:350px" src="keystroke-output.png"/>
<em>Keystroke Output Plug-in options</em>. 
<br></p>
<p><strong>Action key character -</strong> enables injection of a special character embedded within barcode or MSR data.</p>
<p>Possible values:</p>
<ul>
<li><strong>None -</strong> inject no action key</li>
<li><strong>Tab -</strong> inject action key in place of a ASCII Tab (0x09) character</li>
<li><strong>Line feed -</strong> inject action key in place of ASCII LF (0x0A) character</li>
<li><strong>Carriage return -</strong> inject action key in place of ASCII CR (0x0D) character</li>
</ul>
<p><strong>Multi byte character delay -</strong> used to set an inter-character delay (in ms) for sending multibyte characters. This parameter can help avoid problems that arise when sending Unicode and multibyte characters to the Android browser. Value is set to zero by default. If experiencing errors in the delivery of keystrokes, increase the delay value in increments of 100 ms.</p>
<p><strong>Key event delay -</strong> used to set a delay (in ms) for dispatching control characters as keystrokes to the foreground application. </p>
<!-- 
Send data - Set to transfer the captured data to the foreground application. Disabling this option prevents the actual data from being transmitted. However, the prefix and suffix strings, if present, are still transmitted even when this option is disabled (default - enabled).
-->
<h2 id="basicdataformatting">Basic Data Formatting</h2>
<p>The Basic Format Process Plug-in provides an easy way to append or prepend acquired data with custom values or keystrokes before passing it to an Output Plug-in. It also permits the conversion of data to hexadecimal format. If the Basic Formatting Plug-in is not enabled, captured data is passed to the selected Output Plug-in without modification.</p>
<p><img style="height:350px" src="basic_data_formatting.png"/>
<em>Basic Data Formatting Output Plug-in options</em>. 
<br></p>
<p><strong>Prefix to data -</strong> adds (prepends) the specified characters(s) <strong>to the beginning</strong> of the acquired data before sending.</p>
<p><strong>Suffix to data -</strong> adds (appends) the specified characters(s) <strong>to the end</strong> of the acquired data before sending.</p>
<p><strong>Send data -</strong> Enabled by default, this allows transfer of the captured data to the associated application when it comes to the foreground. <strong>Note</strong>: Disabling this option prevents only the <em>captured</em> data from being transferred; any prefix and/or suffix strings will be handed to the associated application(s), even when this option is disabled.</p>
<p><strong>Send as hex -</strong> sends the data in hexadecimal format. For example, if the acquired barcode data is 012345, this option would send the hex equivalent of 30<strong>31</strong>32<strong>33</strong>34<strong>35</strong>. </p>
<p><strong>Send TAB key -</strong> appends a TAB character to the processed data. </p>
<p><strong>Send ENTER key -</strong> appends an Enter character to the processed data. </p>
<h2 id="advanceddataformatting">Advanced Data Formatting</h2>
<p>The Advanced Data Format Process Plug-in allows for acquired data to be customized to suit any requirement based on a set of complex rules containing individual or multiple criteria and actions. For more information, please see the <a href="../advanced">Advanced Data Formatting Guide</a>. </p>
<h2 id="intentoutput">Intent Output</h2>
<p>The Intent Output Plug-in allows acquired data to be passed programmatically to an application using the Android Intent mechanism. The core components of an application (its activities, services, and broadcast receivers) are activated by Intents. An Intent Object is a bundle of information that describes a desired action. It includes the data to be acted upon, the category of component that should perform the action and some other pertinent instructions. When an Intent is initiated, Android locates an appropriate component to respond to the Intent, launches a new instance of the component (if needed), and passes the Intent Object to it.</p>
<p>Components advertise the kinds of Intents they can handle through Intent Filters, which are specified in the <code>AndroidManifest.xml</code> file as &lt;intent-filter&gt; elements. A component may have any number of Intent Filters, each describing a different capability. </p>
<p><img style="height:350px" src="intent_output.png"/>
<em>Intent Output Plug-in options</em>. 
<br></p>
<p>DataWedge invokes an Intent though an <strong>Intent Action</strong> in an <strong>Intent Category</strong> as described in its <code>AndroidManifest.xml</code> file. For example, if the DataWedge manifest contains the lines…</p>
<pre><code>&lt;intent-filter&gt;
    ...
    &lt;action android:name="com.myapp.action" /&gt;
    &lt;category android:name="android.intent.category.DEFAULT" /&gt;
    ...
&lt;/intent-filter&gt;
</code></pre>
<p>…then the <strong>Intent Action</strong> in the Intent Output Plug-in would be <code>com.myapp.action</code> and the <strong>Intent Category</strong> would be <code>android.intent.category.DEFAULT</code>.</p>
<p>The Intent Delivery option allows the method by which the Intent is delivered to be specified. Intent-based data is delivered through one of three delivery mechanisms:  </p>
<ul>
<li><p><strong>Send via startActivity</strong> </p></li>
<li><p><strong>Send via startService</strong> </p></li>
<li><p><strong>Broadcast Intent</strong> </p></li>
</ul>
<p>When Intent delivery is sent via Broadcast Intent, DataWedge sets the <strong>Receiver foreground flag</strong> <code>Intent.FLAG_RECEIVER_FOREGROUND</code> in the broadcast Intent, giving the broadcast recipient permission to run at foreground priority with a shorter timeout interval. This flag is set only when Intent delivery is set to Broadcast Intent. <strong>Note: Use this flag only if delays are seen in delivery of Intents immediately following device boot-up</strong>.</p>
<h4 id="decoderelateddata">Decode-related data</h4>
<p>The decode-related data added to an Intent bundle can be retrieved using the followng call: </p>
<ul>
<li><code>Intent.getStringtExtra()</code></li>
</ul>
<!-- * `Intent.getSerializableExtra()`-->
<p>The call above can be used with the following String tags:</p>
<ul>
<li><p><strong>String LABEL<em>TYPE</em>TAG = "com.symbol.datawedge.label_type"</strong>; String contains the barcode label type</p></li>
<li><p><strong>String DATA<em>STRING</em>TAG = "com.symbol.datawedge.data_string"</strong>; String contains the output data as a String. In the case of concatenated barcodes, the decode data is concatenated and sent out as a single string.</p></li>
<li><p><strong>String DECODE<em>DATA</em>TAG = "com.symbol.datawedge.decode_data"</strong>; Decode data is returned as a list of byte arrays. In most cases there will be one byte array per decode. For barcode symbologies that support concatenation (i.e. Codabar, Code128, MicroPDF, etc.) the decoded data is stored in multiple byte arrays (one byte array, per bar code). Clients can get data in each byte array by passing an index.</p></li>
</ul>
<h4 id="simulscanrelateddata">SimulScan-related Data</h4>
<p>The SimulScan-related data added to an Intent bundle can be retrieved using the following calls: </p>
<ul>
<li><code>Intent.getStringtExtra()</code></li>
<li><code>Intent. getParcelableArrayListExtra()</code></li>
<li><code>Bundle.getInt()</code></li>
<li><code>Bundle.getString()</code></li>
<li><code>Bundle.getByteArray()</code></li>
</ul>
<!-- * `Intent.getSerializableExtra()` -->
<p>The calls above can use the following String tags:</p>
<ul>
<li><p><strong>String SIMULSCAN<em>TEMPLATE</em>NAME<em>TAG = "com.symbol.datawedge.simulscan</em>template_name"</strong>; The name of the template which used by SimulScan to capture the form.</p></li>
<li><p><strong>String SIMULSCAN<em>REGIONS</em>BUNDLE<em>TAG= "com.symbol.datawedge.simulscan</em>region_data"</strong>; Return an array of Bundles where each bundle contains data and information about a region and the form.</p></li>
<li><p><strong>String SIMULSCAN<em>REGION</em>NAME<em>TAG = "com.symbol.datawedge.simulscan</em>region_name"</strong>; Returns the region name of the bundle object for reach region. To get the region name <code>Bundle.getString()</code> should be called.</p></li>
<li><p><strong>String SIMULSCAN<em>REGION</em>ID<em>TAG = "com.symbol.datawedge.simulscan</em>region_id"</strong>; Returns the region id of the bundle object for reach region. Region id is an integer and can be retrieved by calling <code>Bundle.getInt ()</code>.</p></li>
<li><p><strong>String SIMULSCAN<em>REGION</em>STRING<em>DATA= "com.symbol.datawedge.simulscan</em>region<em>string</em>data"</strong>; Returns the string data of the region. String data comes with barcode, OCR and OMR data.</p></li>
<li><p><strong>String SIMULSCAN<em>REGION</em>BINARY<em>DATA= "com.symbol.datawedge.simulscan</em>region<em>string</em>data"</strong>;
Returns the data of the region in the form of byte array. Binary data comes only for picture regions and the form image. Both picture and form data can be load in to a bitmap and display in the application.</p></li>
<li><p><strong>String SIMULSCAN<em>REGION</em>TYPE<em>TAG = "com.symbol.datawedge.simulscan</em>region_type"</strong>; Returns the region type of the bundle object for reach region. Region type is a string and can be retrieved by calling <code>Bundle.getString ()</code>. </p></li>
</ul>
<p>Possible return values for the region type:</p>
<ul>
<li><strong>Barcode -</strong> Region is a barcode.</li>
<li><strong>OCR -</strong> Region is an Optical Character Recognition (OCR) region (i.e name or address). </li>
<li><strong>OMR -</strong> Region is an Optical Mark Recognition (OMR) region (i.e checkbox, radio button).</li>
<li><strong>Picture -</strong> Region is a picture; data will be in the JPEG format.</li>
<li><strong>Form -</strong> Form type to specify that the bundle contains a picture of the captured form. Form image will be in the JPEG format.</li>
</ul>
<p><strong>Important</strong>: For some scanning applications, it might be preferable for decoded data to be sent directly to the current activity and not necessarily displayed. For such instances, the activity must be designated  as "singleTop" in its AndroidManifest.xml file. Failure to designate an activity in this way will cause an instance of the activity to be launched on every decode, and the data sent to each newly spawned copy. </p>
<p>For more information about Android Intents, please refer to the <a href="https://developer.android.com/guide/components/intents-filters.html">Android Developer site</a>.</p>
<h2 id="ipoutput">IP Output</h2>
<p>The IP Output Plug-in enables captured data to be transferred over a network to a computer running IPWedge, a small Windows app made by Zebra. The PC receives the data as keystrokes or in its Clipboard, in essence turning the device into a wireless scanner for the PC. </p>
<p>To configure a device to use the IP Output Plug-in, it's necessary to know the IP address of the PC as well as the port number to which the PC will be listening. To set up the PC first, see the <a href="../ipwedge">IPWedge Guide</a> for IPWedge download and set-up instructions. Then resume from here.</p>
<h4 id="setuptheipoutputplugin">Set up the IP Output Plug-in:</h4>
<p><strong>From the Profile in which to activate the IP Output Plug-in</strong>:  </p>
<p>&#49;. Locate the IP Output section of the Profile.  </p>
<p>&#50;. <strong>Check "Enabled" and "Remote Wedge" boxes</strong> to enable IP Output and communication with the IPWedge server component.</p>
<p><img style="height:350px" src="ip_output.png"/>
<em>IP Output Plug-in options</em>. 
<br></p>
<p>&#51;. <strong>Select the desired Protocol</strong> for data transport (TCP or UDP) or accept the default (TCP).</p>
<p>&#52;. <strong>Enter the IP address</strong> of the server running IPWedge software.</p>
<p>&#53;. <strong>Enter the Port number</strong> if other than the default of 58627. </p>
<h3 id="usingipoutputpluginwithoutipwedge">Using IP Output Plug-in without IPWedge</h3>
<p>it is possible to use the IP Output Plug-in to send captured data to a remote device without IPWedge. At the data receiving end, the PC or Mobile device should have a client application that listens to TCP or UDP data coming from the configured port and IP address in IP Output Plug-in. To get IP output plug-in configured to send captured data to a remote computer or device, follow these steps.</p>
<p>&#49;. Locate the IP Output section of the Profile.  </p>
<p>&#50;. <strong>Check "Enabled" box</strong> and <strong><em>uncheck</em> the "Remote Wedge" box</strong>.</p>
<p>&#51;. <strong>Select the desired Protocol</strong> for data transport (TCP or UDP) or accept the default (TCP).</p>
<p>&#52;. <strong>Enter the IP address</strong> of the server running IPWedge software.</p>
<p>&#53;. <strong>Enter the Port number</strong> if other than the default of 58627. </p>
<p><strong>Warning: Zebra does not support this usage scenario</strong>.</p>
<h2 id="datacaptureplusdcp">Data Capture Plus (DCP)</h2>
<p>Data Capture Plus (formerly known as the "Data Capture Panel") enables areas of the device screen to be designated as scan triggers. By tapping on a designated screen area, DataWedge will respond as it would to a scanner button-press or other hardware trigger.</p>
<p>DCP is disabled by default. The DataWedge Profile configuration screen allows an app user to configure the appearance of DCP on the screen once a particular Profile is loaded. If the user checks the option to enable the DCP, the five parameters shown below appear on the preference screen and can be configured as desired.</p>
<p><strong>Note: The DCP will not appear if the scanner is disabled in the current Profile</strong>.</p>
<p><img style="height:350px" src="dcp_settings.png"/>
<em>Data Capture Plus options for setting scan triggers</em>. 
<br></p>
<p>Data Capture Plus offers these configurable parameters:</p>
<p><strong>Dock button on -</strong> Sets the initial docking location of the floating DCP button. Changes by the user at runtime are saved to the active Profile. Docking options:  </p>
<ul>
<li>Right side only</li>
<li>Left side only</li>
<li>Either side</li>
</ul>
<p><strong>Start in -</strong> Sets the mode that DCP will startup with. If configured to launch as a button, the DCP mode can be changed at runtime by dragging, but the launch state will not be changed in the Profile. Start-in options: </p>
<ul>
<li>Button mode (floating button)</li>
<li>Full-screen mode</li>
<li>Button-only mode</li>
</ul>
<p><strong>Button highest position -</strong> Sets a ceiling for button position expressed as a percent of screen height. For example, on a screen measuring four inches vertically, a setting of 75 (%) would prevent the upper edge of the DCP button from being positioned less than one inch from the top of the screen. </p>
<p><strong>Bottom lowest position -</strong> Sets a floor for button position expressed as a percent of screen height. For example, on a screen measuring four inches vertically, a setting of 25 (%) would prevent the lower edge of the DCP button from being positioned less than one inch from the bottom of the screen.</p>
<p><strong>Drag Detect Time -</strong> The wait time (in ms) that DCP should wait after a screen tap before triggering a scanner action. This can help prevent accidental triggers when dragging the DCP button to a new location.</p>
<p><strong>Note</strong>: A quick touch and release of the DCP can sometimes start the viewfinder when using camera as a scanner. To exit, press the back button.</p>
<p><img style="height:350px" src="dcp_minimized.png"/>
<em>Data Capture Plus shown in minimized mode</em>. 
<br></p>
<p><strong>Note</strong>: If configured to launch as a button, the DCP mode can be changed at runtime by dragging, but the launch state will not be changed in the Profile. However, runtime changes to the vertical position and the docking side of device screen <em><strong>will</strong></em> be saved to the active Profile.</p>
<p><img style="height:350px" src="dcp_maximized.png"/>
<em>Data Capture Plus shown in maximized mode</em>. 
<br></p>
<h3 id="scanningwithdcp">Scanning with DCP</h3>
<p><strong>To scan a barcode with DCP</strong>: </p>
<p>&#49;. With DCP enabled, <strong>tap and hold the area of the screen designated for DCP</strong>. The scan beam (or camera viewfinder) will be active while the tap is held. </p>
<p>&#50;. <strong>Aim the scan beam or camera reticle at the barcode</strong> to be scanned. DCP will use the preferences configured in the Barcode Input Plug-in for the current Profile.</p>
<p>&#51;. * <strong>Release finger to stop scanning</strong> or to close the camera viewfinder.</p>
<p><strong>Note</strong>: A quick touch and release of the DCP control sometimes will start the viewfinder when using camera as a scanner. To exit, press the BACK button.</p>
<hr />
<p>Other DataWedge guides: </p>
<ul>
<li><a href="../ipwedge">IPWedge Guide</a></li>
<li><a href="../api">DataWedge Data Capture API for Android</a> &lt;!--</li>
<li><a href="../capture">DataWedge Capture API</a> --&gt;</li>
</ul>