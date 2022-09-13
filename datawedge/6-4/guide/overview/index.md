<h2 id="overview">Overview</h2>
<p>A DataWedge Profile contains information about how DataWedge should behave with one or more associated applications, and provides a means to allow different apps that might be acquiring the same data to do different things with it. For example, while "App A" might require that a TAB be sent after each dataset is passed from DataWedge, "App B" might require the ENTER key to be pressed instead. Through Profiles, DataWedge can be configured to process the same set of captured data according to the requirements of any number of individual applications. Alternatively, a <strong>single</strong> Profile can be created and associated with <strong>many applications</strong>, acquiring and processing data in exactly the same way for all. </p>
<p>Any number of Profiles can be created to suit all the needs of an enterprise. DataWedge also includes several pre-configured Profiles to support general needs or for specific apps that are built into every device. Some of these, such as Profile0, are visible to the user and can be edited as needed. Others contain fixed parameters and are not visible or configurable. </p>
<h4 id="visibleprofiles">Visible Profiles</h4>
<ul>
<li><strong>Profile0 -</strong> a generic that takes effect for any unassociated foreground app. </li>
<li><strong>Launcher -</strong> used when the Launcher screen is in the foreground.</li>
<li><strong>DWDemo -</strong> used with DWDemo, the <a href="../demo">DataWedge Demo app</a> app. When DWDemo comes to the foreground, data captured with DataWedge is handed to the DWDemo application.</li>
<li><strong>User-defined -</strong> always visible and available for editing. </li>
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
<hr />
<p><strong>Related Guides</strong>: </p>
<ul>
<li><strong><a href="../profiles">Profiles/Plug-Ins listing</a> -</strong> links and details for all DataWedge Plug-ins</li>
<li><strong><a href="../api">DataWedge APIs</a> -</strong> access DataWedge programmatically </li>
</ul>