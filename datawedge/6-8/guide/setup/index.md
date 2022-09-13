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
<p><strong>Important: Control of barcode scanning hardware is exclusive</strong>. When DataWedge is active, Scanner and Barcode APIs of apps such as Enterprise Browser and others will be inoperative. Likewise, when an app such as Enterprise Browser controls the scanning hardware, other apps (including DataWedge) are locked out. It is therefore important to understand how to take control of a device's scanner hardware and, if necessary, release it to other apps when scanning is complete. For more information, see the section on <strong><a href="../settings/#disabledatawedge">disabling DataWedge</a></strong>. </p>
<p><strong>Related Guides</strong>:</p>
<ul>
<li><strong><a href="../overview">Profile Overview</a> -</strong> DataWedge architecture and defaults</li>
<li><strong><a href="../profiles">Profiles/Plug-Ins listing</a> -</strong> links to all DataWedge Plug-ins</li>
</ul>
<hr />
<h2 id="gettingstarted">Getting Started</h2>
<p>The basic steps for creating a Profile and associating it with an app on the device are shown below. For most scenarios, a version of this process must be used for every app that will call on DataWedge for scanning services. For a detailed look at this process, see the <a href="../createprofile">Managing Profiles</a> page.  </p>
<p><strong>To enable DataWedge scanning services for an app</strong>:</p>
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
<hr />
<p><strong>Related Guides</strong>: </p>
<ul>
<li><strong><a href="../createprofile">Create a Profile guide</a> -</strong> the instructions above plus details and screenshots</li>
<li><strong><a href="../overview">Profile Architecture Overview</a> -</strong> explains how DataWedge uses Profiles and Plug-ins</li>
<li><strong><a href="../profiles">Profiles/Plug-Ins listing</a> -</strong> links and details for all DataWedge Plug-ins</li>
<li><strong><a href="../api">DataWedge APIs</a> -</strong> access DataWedge programmatically </li>
</ul>