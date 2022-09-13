<h2 id="overview">Overview</h2>
<p>IPWedge is a small Windows app that monitors a network port and receives scanned data sent by devices using the DataWedge IP Output Plug-in. The receiving PC inserts the data as keystrokes into the foreground application or the Windows Clipboard, essentially using the device as a wireless scanner. </p>
<h2 id="setup">Setup</h2>
<h3 id="prerequisites">Prerequisites</h3>
<p>Using IPWedge requires the following: </p>
<ul>
<li>A PC with Windows XP, Vista or 7</li>
<li>Microsoft .NET Framework 3.5 Service Pack 1 (or later) installed</li>
<li>A Zebra device running Android 4.4 KitKat (or later)</li>
<li>DataWedge for Android 1.5 (or later)</li>
</ul>
<h3 id="setupipwedge">Set up IPWedge</h3>
<p>&#49;. <a href="https://www.zebra.com/us/en/support-downloads.html">Visit the Zebra Support Portal</a>, enter "IPwedge" in the search box and <strong>download the appropriate version for the target device</strong>. </p>
<p>&#50;. <strong>Install the .zip file</strong> on the system to which the scanned data will be sent. </p>
<p>&#51;. <strong>Run the IPWedge app</strong>. A screen appears similar to the image below. <strong>Make a note of the IP address and port number</strong> (in the red box). 
<img style="height:200px" src="04_ipwedge.jpg"/>
<em>IPWedge System Tray menu</em>. 
<br></p>
<blockquote>
  <p><strong>Note: This default port number is the same as that of the IP Output Plug-in</strong> on the device.</p>
</blockquote>
<p>&#52;. <strong>Open the IPWedge app</strong> from the Windows Start menu or tap on the IPWedge icon in the System Tray and select Options. </p>
<p>The IPWedge Options panel appears similar to the image(s) below. 
<img style="height:250px" src="01_ipwedge.jpg"/>
<em>General Options</em>. 
<br></p>
<p><img style="height:250px" src="02_ipwedge.jpg"/>
<em>Keystroke Options</em>. 
<br></p>
<p><img style="height:250px" src="03_ipwedge.jpg"/>
<em>Clipboard Options</em>. 
<br></p>
<p>&#53;. <strong>Make any required changes</strong> to Options in the General, Keystroke and Clipboard tabs. <strong>Click OK on each tab</strong> to save settings. </p>
<p>The PC is now ready to receive data from devices running DataWedge with the IP Output Plug-in (with IP address and port settings matching those of the PC). For device setup instructions, see "IP Output" in the <a href="../setup">DataWedge Setup Guide</a>. </p>
<hr />
<p><strong>Related guides</strong>:</p>
<ul>
<li><a href="../../profiles">Profiles/Plug-ins</a></li>
<li><a href="../../api">DataWedge APIs</a> </li>
</ul>
<!-- **Note: Profile0 cannot be used with IPWedge**. 10/18/16- removed per Tharindu -->