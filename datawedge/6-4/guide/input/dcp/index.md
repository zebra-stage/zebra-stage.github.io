<h2 id="overview">Overview</h2>
<p>Data Capture Plus (formerly known as the "Data Capture Panel") enables areas of the device screen to be designated as scan triggers. By tapping on such a screen area, DataWedge will respond as it would to a scanner button-press or other hardware trigger. DCP is disabled by default. </p>
<p>The DataWedge profile configuration screen allows an app user to configure the appearance of DCP on the screen after a particular Profile is loaded. If the user checks the option to enable the DCP, the five parameters shown below appear on the preference screen and can be configured as desired.</p>
<p><strong>Note: The DCP will not appear if the scanner is disabled in the active Profile</strong>.</p>
<p><img style="height:350px" src="../dcp_settings.png"/>
<em>Data Capture Plus options for setting scan triggers</em> 
<br></p>
<hr />
<h3 id="dockbuttonon">Dock button on</h3>
<p>Sets the initial docking location of the floating DCP button. Changes by the user at runtime are saved to the active Profile. </p>
<p><strong>Docking options</strong>:</p>
<ul>
<li>Right side only</li>
<li>Left side only</li>
<li>Either side</li>
</ul>
<p><img style="height:350px" src="../dcp_minimized.png"/>
<em>Data Capture Plus shown in minimized mode</em> 
<br></p>
<h3 id="startin">Start in</h3>
<p>Sets the mode that DCP will startup with. If configured to launch as a button, the DCP mode can be changed at runtime by dragging, but the launch state will not be changed in the Profile. </p>
<p><strong>Start-in options</strong>: </p>
<ul>
<li>Button mode (floating button)</li>
<li>Full-screen mode</li>
<li>Button-only mode</li>
</ul>
<p><img style="height:350px" src="../dcp_maximized.png"/>
<em>Data Capture Plus shown in maximized mode</em> 
<br></p>
<h3 id="buttonhighestposition">Button highest position</h3>
<p>Sets a ceiling for button position expressed as a percentage of total screen height. For example, on a screen measuring four inches vertically, a setting of 75 (%) would prevent the upper edge of the DCP button from being positioned less than one inch from the top of the screen. </p>
<h3 id="bottomlowestposition">Bottom lowest position</h3>
<p>Sets a floor for button position expressed as a percentage of total screen height. For example, on a screen measuring four inches vertically, a setting of 25 (%) would prevent the lower edge of the DCP button from being positioned less than one inch from the bottom of the screen.</p>
<h3 id="dragdetecttime">Drag Detect Time</h3>
<p>The wait time (in ms) that DCP should wait after a screen tap before triggering a scanner action. This can help prevent accidental triggers when dragging the DCP button to a new location.</p>
<p><strong>Note</strong>: A quick touch and release of the DCP can sometimes start the viewfinder when using camera as a scanner. To exit, press the back button.</p>
<p><strong>Note</strong>: If configured to launch as a button, the DCP mode can be changed at runtime by dragging, but the launch state will not be changed in the Profile. However, runtime changes to the vertical position and the docking side of device screen <em><strong>will</strong></em> be saved to the active Profile.</p>
<hr />
<h2 id="scanningwithdcp">Scanning with DCP</h2>
<p><strong>To scan a barcode with DCP</strong>: </p>
<p>&#49;. With DCP enabled, <strong>tap and hold the area of the screen designated for DCP</strong>. The scan beam (or camera viewfinder) will be active while the tap is held. </p>
<p>&#50;. <strong>Aim the scan beam or camera reticle at the barcode</strong> to be scanned. DCP will use the preferences configured in the Barcode Input Plug-in for the current Profile.</p>
<p>&#51;. <strong>Release finger to stop scanning</strong> or to close the camera viewfinder.</p>
<p><strong>Note</strong>: A quick touch and release of the DCP control sometimes will start the viewfinder when using camera as a scanner. To exit, press the BACK button.</p>
<hr />
<p><strong>Related guides</strong>:</p>
<ul>
<li><a href="../../profiles">Profiles/Plug-ins</a></li>
<li><a href="../barcode/#decoderselection">Input Parameters</a></li>
<li><a href="../../api">DataWedge APIs</a> </li>
</ul>