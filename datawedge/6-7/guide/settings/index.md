<h2 id="overview">Overview</h2>
<p>This guide covers settings for the DataWedge app, including enabling and disabling DataWedge on the device, import reporting, and the management of Profile and Configuration files for backup and mass-deployment. For information about creating and implementing Profiles and Plug-ins, see the <a href="../profiles">Profile Guides</a>. </p>
<hr />
<h2 id="datawedgesettings">DataWedge Settings</h2>
<p>Most of the functionality referenced in this guide is accessed through the DataWedge Settings panel. </p>
<p><strong>To access DataWedge Settings</strong>: </p>
<p>&#49;. From the Profiles screen, <strong>tap the "hamburger" menu</strong> and <strong>select Settings</strong> as highlighted below. The DataWedge Settings panel appears similar to the image in Step 2. 
<img style="height:350px" src="datawedge_settings.png"/>
<em>Access the DataWedge Settings panel from the Profiles screen</em>. 
<br></p>
<p>&#50;. <strong>Tap the desired feature</strong> to invoke it or change its state. 
<img style="height:350px" src="datawedge_settings_panel.png"/>
<em>The DataWedge Settings panel</em>
<br></p>
<p><strong>Functions of the DataWedge Settings panel</strong>: </p>
<ul>
<li><p><strong>DataWedge enabled -</strong> Controls the DataWedge service. Uncheck this box to disable DataWedge on the device and return control of scanning hardware to the system.</p></li>
<li><p><strong>Enable logging -</strong> Enables DataWedge to output logs for viewing in Logcat, Android Studio or a compatible viewer.</p></li>
<li><p><strong>Disabled app list -</strong> Disables scanning functions for selected apps and/or activities anywhere on the device. <a href="#disableapps">See more</a>. </p></li>
<li><p><strong>Import -</strong> Invokes navigation for importing a DataWedge Config file from device storage, replacing the current DataWedge settings. <a href="#importaconfig">See more</a>.</p></li>
<li><p><strong>Export -</strong> Exports the current DataWedge configuration to device storage. <a href="#exportaconfig">See more</a>.</p></li>
<li><p><strong>Import Profile -</strong> Invokes navigation for importing a DataWedge Profile from device storage. If a Profile of the same name already exists in DataWedge, settings of the existing Profile will be updated to match those of the imported file. <a href="#importaprofile">See more</a>.</p></li>
<li><p><strong>Export Profile -</strong> Exports an individual DataWedge profile to device storage. <a href="#exportaprofile">See more</a>.</p></li>
<li><p><strong>Restore -</strong> Returns DataWedge on the device to factory default settings. <a href="#restoredefaults">See more</a>.</p></li>
</ul>
<h3 id="logging">Logging</h3>
<p>DataWedge provides the option of outputting system log messages for viewing through the Logcat command line tool, Android Studio or another compatible viewer, usually over a USB connection. </p>
<p><strong>To Enable/Disable Logging</strong>: </p>
<p>From the DataWedge Settings panel, <strong>tap Enable Logging</strong> to enable or disable logging as desired. 
<img style="height:350px" src="datawedge_logging.png"/>
<br></p>
<h3 id="disableapps">Disable Apps</h3>
<p>DataWedge can prohibit certain apps from accessing its data capture services. This can be useful as a security measure to ensure that acquired data is sent only to approved apps, or simply as a means of controlling which apps will have access to the scanner. By default, all apps have access. </p>
<p><strong>To Disable Data Capture for an app</strong>: </p>
<p>From the DataWedge Settings panel, <strong>tap Disabled app list</strong>:<br />
<img style="height:350px" src="datawedge_disabled_apps.png"/>
<br></p>
<p>A list appears showing all installed apps and packages, similar to the image below. <strong>Tap one or more app(s) or activities to add to the disabled list</strong>, scrolling as necessary.<br />
<img style="height:350px" src="disabled_apps_list.png"/>
<br></p>
<p><strong>Notes</strong>:</p>
<ul>
<li>Apps/activities associated with a specific profile cannot be disabled. </li>
<li>Disabled apps/activities cannot be associated with a profile.</li>
<li>Disabling a parent package disables all of its activies.</li>
<li>A disabled activity <strong>does not</strong> disable the parent or its other activities. </li>
</ul>
<h3 id="disabledatawedge">Disable DataWedge</h3>
<p><strong>Control of barcode scanning hardware is exclusive</strong>. When DataWedge is active, Scanner and Barcode APIs of apps such as Enterprise Browser and others will be inoperative. Likewise, when an app such as Enterprise Browser controls the scanning hardware, other apps (including DataWedge) are locked out. It is therefore important to understand how to take control of a device's scanner hardware and, if necessary, release it to other apps when scanning is complete. </p>
<p><strong>To disable DataWedge</strong>:</p>
<p>&#49;. <strong>Start DataWedge</strong> and navigate to the Profiles list (if not shown by default).</p>
<p>&#50;. Tap on the "hamburger" menu and <strong>select -> Settings</strong>:
<img style="height:350px" src="datawedge_settings.png"/>
<br></p>
<p>&#51;. <strong>Uncheck the "DataWedge enabled" checkbox</strong>. Control of scanner hardware is returned to the system. 
<img style="height:350px" src="datawedge_enable-disable.png"/>
<br></p>
<p>To learn how to access DataWedge programmatically, see the <a href="../api">DataWedge APIs</a>. </p>
<hr />
<h2 id="massdeployment">Mass Deployment</h2>
<p>Once DataWedge is set up and configured as desired on a device, settings can be saved to a file and distributed to other devices either manually or using a Mobile Device Management (MDM) system. DataWedge 6.5 introduced improvements to the compatibility of exported Profiles. Profiles created with DataWedge 6.5 (or higher) will work on any Zebra device model running DataWedge 6.5 or higher. See <a href="#exportaprofile">Export a Profile</a> for more information. </p>
<h3 id="exportaconfig">Export a Config</h3>
<p>Once DataWedge is set up and configured as desired on a device, its settings file can be exported, distributed to other devices, imported and activated automatically (or imported manually, as above). </p>
<p><strong>To Export a DataWedge Config file</strong>: </p>
<p>&#49;. From the DataWedge Settings panel, <strong>tap Export</strong> as highlighted below. A screen appears similar to the one in Step 2. 
<img style="height:350px" src="datawedge_export_config.png"/>
<br></p>
<p>&#50;. If more than one storage device exists, <strong>tap the desired storage device, then tap Export</strong>. Only the storage device may be selected; the path will be inserted automatically.<br />
<img style="height:350px" src="02_export_config.png"/>
<br></p>
<p><strong>Notes</strong>: </p>
<ul>
<li>The DataWedge Config file is always named <code>datawedge.db</code>. </li>
<li>The default path and filename of an exported configuration file is:
<code>/storage/sdcard0/Android/data/com.symbol.datawedge/files/datawedge.db</code> </li>
<li>If an external SD card is installed, an alternate path can be selected. For example: 
<code>/storage/sdcard1/Android/data/com.symbol.datawedge/files/datawedge.db</code></li>
</ul>
<p>&#51;. <strong>Retrieve the file</strong> <code>datawedge.db</code> <strong>from the device</strong> and distribute to other devices manually or through a Mobile Device Management (MDM) system. </p>
<hr />
<h3 id="exportaprofile">Export a Profile</h3>
<p>Once a DataWedge Profile is set up and configured as desired on a device, it can be exported and distributed for use on other devices throughout an enterprise. This enables a company to fine-tune settings for the acquisition, manipulation and disposition of data for specific applications(s), and easily propagate those settings to others in the organization. </p>
<p><strong>Notes</strong>: </p>
<ul>
<li><strong>If more than one Profile is to be created, exported and distributed</strong> at the same time, it might be beneficial to create and export the Profiles together as a single DataWedge Configuration file using <a href="#exportaconfig">Export a Config</a>. </li>
<li><strong>If a Profile exists on the device with the same name as one being imported</strong>, the existing profile will be overwritten by the imported one.</li>
<li><strong>Profiles created with DataWedge 6.5 (or higher) will work on any Zebra device model running DataWedge 6.5 or higher</strong>. See <a href="#crossdeviceimport">Cross-Device Import</a> for more info. </li>
</ul>
<p><strong>To Export a Profile</strong>: </p>
<p>&#49;. From the DataWedge Settings panel, <strong>tap Export Profile</strong> as highlighted below. A list of Profiles on the device appears similar to the image in Step 2.
<img style="height:350px" src="datawedge_export_profile.png"/>
<br></p>
<p>&#50;. If more than one storage device exists, <strong>tap the desired storage device, then the name of the Profile to be exported, then tap Export</strong>. Only the storage device and Profile may be selected; the path will be inserted automatically.
<img style="height:350px" src="04_export_profile.png"/>
<br></p>
<p>The default path and filename of an exported Profile is:
<code>/storage/sdcard0/Android/data/com.symbol.datawedge/files/dwprofile_profilename.db</code> </p>
<p>If an external SD card is installed, an alternate path can be selected: 
<code>/storage/sdcard1/Android/data/com.symbol.datawedge/files/dwprofile_profilename.db</code></p>
<p>&#51;. <strong>Retrieve the exported file from the device</strong> and distribute to other devices manually or through a Mobile Device Management (MDM) system. </p>
<blockquote>
  <p><strong>DO NOT RENAME THE EXPORTED FILE</strong>. Doing so will result in errors and import failure. </p>
</blockquote>
<p><strong>Warning: If a Profile exists on the device with the same name as one being imported, the existing profile will be overwritten by the imported one</strong>. </p>
<ul>
<li><strong>Profiles created with DataWedge 6.5 (or higher) will work on any Zebra device model running DataWedge 6.5 or higher</strong>. </li>
</ul>
<hr />
<h3 id="importaconfig">Import a Config</h3>
<p>DataWedge can accept settings created on another device and distributed throughout an enterprise by importing a DataWedge Configuration file. This file contains Profiles, Plug-ins and all DataWedge settings, including its status (enabled/disabled), logging and other configurable parameters. </p>
<blockquote>
  <p><strong>Importing a Config file overwrites all DataWedge settings and Profiles previously stored on the device</strong>.</p>
</blockquote>
<p><strong>To Import a DataWedge Configuration file</strong>:    </p>
<p>&#49;. From the DataWedge Settings panel, <strong>tap Import</strong>. A screen appears similar to the one in Step 2, below. 
<img style="height:350px" src="datawedge_import_config.png"/>
<br></p>
<p>&#50;. <strong>Navigate to the imported file</strong> on device storage using the interface provided:<br />
<img style="height:350px" src="01_import_config.png"/>
Imported settings take effect immediately and overwrite all prior settings.<br />
<br></p>
<p>The DataWedge Config file is always named <code>datawedge.db</code>. </p>
<p>See <a href="#crossdeviceimport">Cross-Device Import</a> for more information. </p>
<hr />
<h3 id="importaprofile">Import a Profile</h3>
<p>Importing a Profile enables settings created elsewhere to quickly be activated on a device. This enables organizations to develop and fine-tune Profiles in a test lab, for example, before exporting and deploying them to the field or across an enterprise. See <a href="#exportaprofile">Export a Profile</a> for more information. </p>
<p>While the Profile importing <em>process</em> is similar to that of the Configuration file, the Profile <em>itself</em> is very different. A Profile is a single group of settings that control how DataWedge will behave with one or more specific applications and devices. A Config file can contain numerous Profiles as well as other DataWedge settings. </p>
<p><strong>Importing a Config file overwrites all previous DataWedge settings and Profiles</strong>. Importing a Profile simply adds the imported Profile to the list of available Profiles on the device. If a Profile exists on the device with the same name as the one being imported, the existing Profile will be modified by the imported one.</p>
<p><strong>To Import a DataWedge Profile</strong>:  </p>
<p>&#49;. From the DataWedge Settings panel, <strong>tap Import Profile</strong> as highlighted below. A screen appears similar to the one in Step 2. 
<img style="height:350px" src="datawedge_import_profile.png"/>
<br></p>
<p>&#50;. <strong>Navigate to the file being imported</strong> from device storage using the interface provided: 
<img style="height:350px" src="03_import_profile.png"/>
<strong>Warning</strong>: If a Profile exists on the device with the same name as the one being imported, the existing Profile will be modified by the imported one. 
<br></p>
<p>DataWedge Profile naming convention: <code>dwprofile_&lt;profilename&gt;.db</code>.  </p>
<hr />
<h3 id="crossdeviceimport">Cross-device Import</h3>
<p>Profiles and Config files exported from a device with DataWedge 6.5 (or higher) can be imported to other devices running DataWedge 6.5 (or higher), even if the source and destination devices contain different scanning and/or imaging peripherals. To accommodate hardware differences, DataWedge 6.5 implements the following user-interface changes.
<br></p>
<h5 id="peripheralnotpresentautonotselected">Peripheral Not Present, 'Auto' not selected</h5>
<p>If a source Profile is configured for a scanner that's not supported by the destination device, a dialog similar to the image below will appear when selecting a scanner for the Profile. For example, the Zebra TC75 has a camera; the TC51 does not. If a Profile configured for a camera created on the TC75 was imported by the TC51, a message like the one below appears, prompting the user to select a peripheral for scanning. After selection, DataWedge applies the input settings (i.e. decoder parameters, etc.) as originally configured for the source scanning device to the manually selected peripheral on the destination device.</p>
<p><img style="height:350px" src="dw_65_scanner_selection.png"/>
<em>Image shown if no Auto device (radio button) was selected</em> 
<br>
<br></p>
<h5 id="peripheralnotpresentautoselected">Peripheral Not Present, 'Auto' selected</h5>
<p>If the selected scanner in the original device is not supported in the destination device but the "Auto" checkbox and "Auto" radio button are selected (as shown below), DataWedge applies the input settings (i.e. decoder parameters, etc.) as originally configured for the source scanning device to the automatically selected peripheral on the destination device. </p>
<p><img style="height:350px" src="dw_65_use_auto.png"/>
<em>Image shown if an Auto device (radio button) was selected</em> 
<br>
<br></p>
<h5 id="conversionfromdatawedge64andlower">Conversion from DataWedge 6.4 (and lower)</h5>
<p>DataWedge makes it possible to covert Config files and Profiles that reside on (or were made with) a device containing a version of DataWedge prior to 6.5 by upgrading the device to DataWedge 6.5 (or higher) and importing (if necessary) and then exporting the files. <strong>This applies to devices running KitKat only</strong>; devices running Marshmallow (and higher) already have DataWedge 6.5 (or higher). </p>
<p><strong>IMPORTANT: The device that's being upgraded for the purpose of converting files must be the same model device as that which made the original files</strong>. For example, Profiles made with an older version of DataWedge on a TC70 must be imported into DataWedge 6.5 (or higher) <u>running on a TC70</u>. </p>
<hr />
<h3 id="restoredefaults">Restore (defaults)</h3>
<p>DataWedge has the ability to reset all user-configured settings, restoring them to their original factory defaults. <strong>Caution: This action cannot be undone</strong>. </p>
<blockquote>
  <p>This feature also can be executed using the <a href="../../api/restoreconfig">Restore Config API</a>.</p>
</blockquote>
<p><strong>To Restore DataWedge to its factory-default settings</strong>:</p>
<p>&#49;. From the DataWedge Settings panel, <strong>tap Restore</strong> as highlighted below. A confirmation screen appears similar to the image in Step 2.
<img style="height:350px" src="datawedge_restore.png"/>
<br></p>
<p>&#50;. <strong>Tap Yes to Restore factory defaults</strong> (tap No to cancel). 
<img style="height:350px" src="05_restore_defaults.png"/>
<br></p>
<hr />
<h3 id="enterprisefolder">Enterprise Folder</h3>
<p>On Zebra devices, internal storage contains a directory named <code>/enterprise</code> that persists (is not erased) after an Enterprise reset is performed on the device. DataWedge stores its files in several directories below <code>/enterprise</code>, which allows them to persist after an Enterprise reset. </p>
<p><strong>Directory Behavior</strong>:</p>
<ul>
<li><p><code>/enterprise/device/settings/datawedge/enterprisereset/</code> - DataWedge checks this folder following an Enterprise reset and imports a configuration file and/or any Profile(s) present. </p></li>
<li><p><code>/enterprise/device/settings/datawedge/autoimport</code> - DataWedge monitors this folder whenever it's running and immediately imports and activates any configuration file placed here, overwriting prior settings. See Auto Import, below.   </p></li>
</ul>
<p><strong>Notes</strong>: </p>
<ul>
<li>A DataWedge Restore operation will delete the working .db file.</li>
<li>A <em><strong>Factory</strong></em> reset <strong>deletes all files</strong> in the <code>/enterprise</code> folder.</li>
<li>If a <code>datawedge.db</code> file exists in the <code>/enterprisereset</code> directory, DataWedge will activate it as the new working Config file.</li>
</ul>
<hr />
<h3 id="autoimport">Auto Import</h3>
<p>DataWedge supports remote deployment of Config files (<code>datawedge.db</code>) and Profiles (<code>dwprofile_profilename.db</code>) to devices through commercially available third-party Mobile Device Management (MDM) systems. When DataWedge launches, it checks the <code>/enterprise/device/settings/datawedge/autoimport</code> directory for the presence of such files. If any are found, it executes the functions below.</p>
<p><strong>DataWedge Auto-Import routine</strong>:</p>
<ol>
<li>Import the new file(s) </li>
<li>Replace the existing Config file and like-named Profile(s) (if any) </li>
<li>Delete the imported files</li>
<li>Put new settings immediately into effect</li>
</ol>
<p>While DataWedge is running, it receives a system notification whenever a Config file or Profile is placed in the <code>/autoimport</code> folder and executes the same four functions. </p>
<p><strong>Notes</strong>:</p>
<ul>
<li>For the best experience, <strong>Zebra strongly recommends that users be advised to <u>exit any DataWedge configuration UI screen</u></strong> before new Config files are remotely deployed. </li>
<li>On devices running Android KitKat or later, the <code>/enterprise</code> folder cannot be seen with File Explorer or other user-level tools. Moving configuration files to and from the <code>/autoimport</code> or <code>/enterprisereset</code> folders must be done programmatically, with a staging client app or MDM.</li>
<li>DataWedge will attempt to consume any of the monitored “.db” files as soon the file name(s) appear in the <code>/autoimport</code> folder. Therefore, <strong>it is possible for DataWedge to attempt to consume a file before it is completely written</strong>. To avoid this condition, Zebra recommends initially storing the file with an alternate extension (i.e. ".tmp") and changing the extension to .db once writing is complete. See sample code, below. </li>
<li><strong>Zebra recommends applying explicit file permissions to the all .db files</strong> so that DataWedge will not be impeded from any of its file procedures.</li>
</ul>
<hr />
<h2 id="reporting">Reporting</h2>
<p>DataWedge 6.6 (and higher) can report the results of the importation of device Profiles. These HTML reports display settings differences between the originating (source) database and the target (destination) device. This allows administrators to easily identify differences and make adjustments to compensate for disparities in hardware or software capabilities from one device to another. <strong>Reports always use the destination device as the basis against which to compare incoming settings files</strong>. </p>
<p><img style="height:350px" src="DW_6.6_Settings_reporting.png"/>
<em>Reporting added in DataWedge 6.6</em>. 
<br></p>
<p><img style="height:350px" src="DW_6.6_Reporting_settings.png"/></p>
<p><strong>Functions of the Reporting panel</strong>:</p>
<ul>
<li><strong>Reporting enabled -</strong> used to enable or disable report generation following import operations. <strong>Disabled by default</strong>. See Note below. </li>
<li><strong>Generate report for -</strong> allows reporting to be generated only for Manual import, only for Auto import, or for both.</li>
<li><strong>Show report after manual import -</strong> displays the generated report using the default browser on the device. <strong>Supported for Manual import only</strong>.</li>
</ul>
<p><strong>Note</strong>: If Reporting is disabled in DataWedge prior to importing a full database file in which reporting is enabled, Reporting is enabled in DataWedge following the operation. </p>
<blockquote>
  <p>The parameters of this feature can be configured using the <a href="../api/setreportingoptions">Set Reporting Options API</a>.</p>
</blockquote>
<hr />
<h3 id="filenamesandlocations">File Names and Locations</h3>
<p><strong>These file names are always the same</strong>:</p>
<ul>
<li><code>datawedge.db</code> - the (exported) DataWedge configuration database to be imported</li>
<li><code>dw_report_for_full_config.html</code> - report generated after importing <code>datawedge.db</code></li>
</ul>
<p><strong>These file names correspond with the Profile name</strong>:</p>
<ul>
<li><code>dwprofile_&lt;profile_name&gt;.db</code> - an individual (exported) Profile to be imported </li>
<li><code>dw_report_for_profile_&lt;profile_name&gt;.html</code> - report generated after importing Profile <code>dwprofile_&lt;profile_name&gt;.db</code></li>
</ul>
<p><strong>Files are generally located in the following device directory</strong>: </p>
<ul>
<li><code>/Android/data/com.symbol.datawedge/files</code></li>
</ul>
<hr />
<h3 id="reportparameters">Report Parameters</h3>
<p>The following parameter categories are currently supported in DataWedge reporting: </p>
<ul>
<li><strong>DECODER</strong></li>
<li><strong>DECODER_PARAMS</strong></li>
<li><strong>READER_PARAMS</strong></li>
<li><strong>SCAN_PARAMS</strong></li>
<li><strong>UDI_PARAMS</strong></li>
<li><strong>UPCEAN_PARAMS</strong></li>
</ul>
<hr />
<h3 id="reportformats">Report Formats</h3>
<p>Report information varies slightly when importing a full <code>datawedge.db</code> file and a profile-specific <code>dwprofile_&lt;profile_name&gt;.db</code> file. Importing either file type generates a summary like the one shown below, with the last two field displaying information specific to the file type.  </p>
<p><img style="height:250px" src="DW_6.6_report_summary.png"/></p>
<p><strong>Summary Elements, Full Database Import</strong>:</p>
<ul>
<li><strong>DataWedge version -</strong> the version installed in the target device.</li>
<li><strong>Source DataWedge version -</strong> the version installed in the source device and used to generate the imported file.</li>
<li><strong>Current Device -</strong> model of the device that generated the report.</li>
<li><strong>Source Device -</strong> model of the device that created the imported database. </li>
<li><strong>Imported time -</strong> date and time of the import operation.</li>
<li><strong>Importing mode -</strong> indicates whether the import was manual or automatic.</li>
<li><strong>Configuration file -</strong> fully qualified path of the imported database file.</li>
<li><strong><u>DataWedge Enabled</u>* -</strong> reports the status of DataWedge following import operation.</li>
<li><strong><u>DataWedge Logging</u>* -</strong> reports the status of DataWedge logging following the import operation.</li>
</ul>
<p>&#42; <em>This field varies for Profile database reports</em>. </p>
<p><strong>Summary Elements, Profile Database Import</strong>:</p>
<ul>
<li><strong>DataWedge version -</strong> the version installed in the target device.</li>
<li><strong>Source DataWedge version -</strong> the version installed in the source device and used to generate the imported file.</li>
<li><strong>Current Device -</strong> model of the device that generated the report.</li>
<li><strong>Source Device -</strong> model of the device that created the imported database. </li>
<li><strong>Imported time -</strong> date and time of the import operation.</li>
<li><strong>Importing mode -</strong> indicates whether the import was manual or automatic.</li>
<li><strong>Configuration file -</strong> fully qualified path of the imported database file.</li>
<li><strong><u>Profile Name</u>* -</strong> indicates the name of the imported profile.</li>
<li><strong><u>Profile Enabled</u>* -</strong> reports the status of imported Profile following the import operation.</li>
</ul>
<p>&#42; <em>This field varies for full database reports</em>. </p>
<h4 id="profilesummary">Profile Summary</h4>
<p>Full database imports can include any number of individual Profiles. Reports for full database imports include a list of the imported Profiles like the one pictured below. Tap on a Profile name to display the report for that Profile. <strong>When importing an individual Profile, the Profile Summary contains a single entry</strong>.</p>
<p><img style="height:150px" src="dw_6.6_profiles_summary.png"/></p>
<h4 id="profilereport">Profile Report</h4>
<p>A report generated for each imported Profile indicates the scanner currently selected for that Profile and whether the Plug-in is enabled and set to automatically select a different scanning device if the selected device is unsupported (see <a href="#crossdeviceimport">Cross-device Import</a> for more information). </p>
<p><img style="height:550px" src="DW_6.6_profile_report.png"/></p>
<p><strong>Impacted parameters -</strong> section lists parameters that contain different values in the source and destination databases. The example report above shows four such parameters, two for decoders and one each for reader and scan parameters. </p>
<p><strong>Unchanged parameters -</strong> section lists parameters that contain values from the imported file that were changed from their default values but remain applicable in the destination device. </p>
<p><strong>Note</strong>: Settings left in their default state in the source device are not reported unless they cannot be applied or have a different default value in the destination. </p>
<hr />
<h3 id="scannerparamssummary">Scanner Params Summary</h3>
<p>This section lists the scanners supported on the current device and the compatibility of each for all imported parameters. Following the summary, a section is presented for each supported scanner that lists unsupported parameters, changes in default settings of existing parameters and new parameters along with their settings.   </p>
<p><img style="height:350px" src="DW_6.6_scanner_parameter_summary.png"/></p>
<p><strong>Unsupported params -</strong> are parameters exported from the source device that are not recognized by the destination device.</p>
<p><strong>Default changed params -</strong> are parameters supported in both devices but with differing default values. </p>
<p><strong>New params -</strong> are parameters supported in the current device but not found or supported in the source device. </p>
<!-- 
After the scanner params summary section a breakdown of the params shown in the summary will be available for each scanner. In Figure 7 a sample is shown. For 2D Barcode Imager, one default change parameter and six new parameters are shown in the summary table. In the detail section these parameters are listed with the category they belong to where default change parameter is in the SCAN_PARAMS section and the six new parameters are shown under the DECODERS section.

For unsupported parameters report shows the source value since there is no destination value that can be matched. For default changed parameters it will display the source value and the destination value. For new parameters, it will display the default value only.


The profile section lists the currently selected scanner, scanner plugin enabled/disabled state and the use auto if unsupported parameter value. The profile section has two sub sections.

**Default changed** parameters are the ones that have different default values in two devices. 

**Param Unsupported** category indicates that the current device does not recognize the given parameter. 

**Value unsupported** is a parameter that user has configure to a value that is not supported in the current device. -->
<hr />
<h3 id="usernotices">User Notices</h3>
<p>A user notice appears when one or more of the imported settings has no corresponding setting on the target device. For example, the report pictured below lists three scanners present in the imported database that are absent from (or have not been configured at least once for) the destination device. </p>
<p><img style="height:150px" src="DW_6.6_user_notice.png"/>
<em>Sample user notice</em></p>
<p><strong>Note: Importing a database that was generated by a version prior to DataWedge 6.6.5 will have no source information and therefore generate and an "incomplete report" when imported</strong>.</p>
<blockquote>
  <p>The parameters of this feature can be configured using the <a href="../api/setreportingoptions">Set Reporting Options API</a>.</p>
</blockquote>
<hr />
<h2 id="programmingnotes">Programming Notes</h2>
<h3 id="capturedataandphotosinoneapp">Capture Data and Photos in One App</h3>
<p>It is possible to take pictures and capture barcode data using the same application if the application was designed with this in mind. </p>
<ol>
<li>Add separate Activities in the app: one for barcode scanning and another for picture taking. </li>
<li>Create a DataWedge Profile with the following settings: <ul>
<li>Associate the Profile with the picture-taking Activity</li>
<li>Disable scanning in the Profile</li></ul></li>
<li>Use the standard Android-SDK APIs to control the camera</li>
<li>When the app is used for scanning, the default DataWedge profile will come into effect. </li>
<li>For accessing specific decoders, processing rules or other special scanning needs, a second DataWedge Profile can be created and associated with the barcode scanning activity of the app.</li>
</ol>
<hr />
<h2 id="sampleimportcode">Sample Import Code</h2>
<p>The following sample Java code can be modified to suit individual needs. </p>
<pre><code>    :::java
    //NOTE: This Java code for demo purposes only; it should not be used without testing.

    InputStream fis = null;
    FileOutputStream fos = null;
    String autoImportDir = "/enterprise/device/settings/datawedge/autoimport/"
    String temporaryFileName = "datawedge.tmp";
    String finalFileName = "datawedge.db";

    // Open the db as the input stream
    fis = context.getAssets().open("datawedge.db");

    // create a File object for the parent directory
    File outputDirectory = new File(autoImportDir);

    // create a temporary File object for the output file
    File outputFile = new File(outputDirectory,temporaryFileName);
    File finalFile = new File(outputDirectory, finalFileName);

    // attach the OutputStream to the file object
    fos = new FileOutputStream(outputFile);

    // transfer bytes from the input file to the output file
    byte[] buffer = new byte[1024];
    int length;
    int tot = 0;
    while ((length = fis.read(buffer)) &gt; 0) {
            fos.write(buffer, 0, length);
            tot+= length;
    }
    Log.d("DEMO",tot+" bytes copied");

    //flush the buffers
    fos.flush();

    //release resources
    try {
            fos.close();
    }catch (Exception e){
    }finally {
            fos = null;
            //set permission to the file to read, write and exec.
            outputFile.setExecutable(true, false);
            outputFile.setReadable(true, false);
            outputFile.setWritable(true, false);
            //rename the file
            outputFile.renameTo(finalFile);
    }
</code></pre>
<hr />
<!--

>>UNDER CONSTRUCTION 

ANSWER:
Data will be sent upto X. (1299)
Since pad with zeros is set as 8, the length of the sending data will be adjusted to 8 by adding 0s to the beginning. (00001299). A space will be added at the end. Since it is a space you dont see it. I know we could have added a visible character there

To test the new ADF rule, open any app on the device that has a text field capable of accepting input and click in the field. Then scan the barcode below: 
<img style="height:150px" src="Figure_19_BarcodeSample.png"/>
A Code39 barcode with "129" in the starting position. 
<br>

&#49;. To scan, press and hold the device's Scan/Action button. Depending on the configuration, the red laser aiming pattern turns on to assist in aiming. Ensure that the barcode is within the area formed by the aiming pattern. The Left and Right LEDs light red to indicate that data capture is in process. The Left and Right LEDs light green, a beep sounds and the mobile computer vibrates, by default, to indicate the bar code was decoded successfully. 

The formatted data "000129X " (with a trailing space) appears in the text field. Scanning a Code 39 bar code of 1299X15598 does not transmit data (rule is ignored) because the bar code data did not meet the length criteria.
<img style="height:350px" src="Figure_20_FormattedData.png"/>
<br>

**Note**: When ADF data processing needs to find or replace non-printable characters such as control characters or extended ASCII characters, \xNN can be used to specify hex value of the character, or \uNNNN can be used to specify the Unicode value of the character to be processed by the ADF. For example, if the captured data contains the GS character (\x1D) and data needs to be separated by the GS character, the following ADF actions can be added to the ADF rule:

* **Data**: 8100712345(GS)2112345678
* **Actions**: Send upto (\x1D)
* **Skip ahead (1)**
* **Send remaining**

-><><<M><>><-

COPIED (PARTIALLY EDITED) FROM FROM DEMO PAGE

## Programming Notes

### Overriding the Trigger Key

MY RE_WRITE: If it becomes necessary to override the scan trigger key in one or more applications, this can be accomplished by creating a DataWedge Profile that disables barcode input and associating the Profile with one or more applications. 

Use standard APIs such as `onKeyDown()` in the application to listen for the `KEYCODE_BUTTON_L1` and `KEYCODE_BUTTON_R1` presses.

###Overriding the Trigger Key
ORIGINAL: To override the trigger key in an application, create a profile for the application that disables the Barcode input. In the application, use standard APIs, such as onKeyDown() to listen for the KEYCODE_BUTTON_L1 and KEYCODE_BUTTON_R1 presses.

Capture Data and Taking a Photo in the Same Application
To be able to capture bar code data and take a photo in the same application:

Add two Activities in your application for barcode scanning and picture taking actions respectively. Create a DataWedge profile associated to the picture taking Activity in your application and disable scanning and use standard Android SDK APIs to control the Camera.

The default DataWedge profile takes care of the scanning when other activities in your application comes foreground. You might want to create another DataWedge profile that caters to any specific scanning needs, and associate it to the barcode scanning activity of your application.

Disable DataWedge on mobile computer and Mass Deploy
To disable DataWedge and deploy onto multiple mobile computers:

Touch  Home > DataWedge >  Menu > Settings.

Unselect the DataWedge enabled check box.

Export the DataWedge configuration. See Export Configuration File above for instructions.

See Configuration File Management above for instructions for using the auto import feature.



-->