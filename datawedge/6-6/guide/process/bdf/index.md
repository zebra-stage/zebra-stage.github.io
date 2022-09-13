<h2 id="overview">Overview</h2>
<p>Process Plug-ins manipulate the acquired data in a specified way before sending it via the Output Plug-in to the associated application or server. Controls for Process Plug-ins appear as "Basic Data Formatting" and "Advanced Data Formatting," and are grouped in a Profile's settings panel along with its Output Plug-in. </p>
<p><strong>Process Plug-ins specify</strong>: </p>
<ul>
<li>Basic data formatting (i.e. append with keystrokes, a prefix, a suffix, etc.)</li>
<li>Advanced data formatting (rules-based data manipulation, action triggers, etc.)</li>
</ul>
<p><strong>The Basic Formatting Process Plug-in</strong> allows DataWedge to add a prefix and/or a suffix to captured data before passing it to an Output Plug-in. It also permits the insertion of TAB and ENTER keystrokes, which can be used to move the cursor to from one field of an app to another to facilitage a series of data acquisition tasks.  </p>
<p>If desired, BDF also can convert acquired data to hexidecimal notation. For example, if an acquired barcode data is 012345, this option could convert and send the hex equivalent data of 30<strong>31</strong>32<strong>33</strong>34<strong>35</strong>. </p>
<p>Get more info about <a href="../../overview">how Profiles work</a>. </p>
<blockquote>
  <p>The parameters of this feature can be configured using the <a href="../../api/setconfig">Set Config API</a>.</p>
</blockquote>
<hr />
<h2 id="basicdataformatting">Basic Data Formatting</h2>
<p>The Basic Format Process Plug-in provides an easy way to append or prepend acquired data with custom values or keystrokes before passing it to an Output Plug-in. It also permits the conversion of data to hexadecimal format. If the Basic Formatting Plug-in is not enabled, captured data is passed to the selected Output Plug-in without modification.</p>
<p><img style="height:350px" src="../basic_data_formatting.png"/>
<em>Basic Data Formatting Output Plug-in options</em>. 
<br></p>
<p><strong>Prefix to data -</strong> adds (prepends) the specified characters(s) <strong>to the beginning</strong> of the acquired data before sending.</p>
<p><strong>Suffix to data -</strong> adds (appends) the specified characters(s) <strong>to the end</strong> of the acquired data before sending.</p>
<p><strong>Send data -</strong> Enabled by default, this allows transfer of the captured data to the associated application when it comes to the foreground. <strong>Note</strong>: Disabling this option prevents only the <em>captured</em> data from being transferred; any prefix and/or suffix strings will be handed to the associated application(s), even when this option is disabled.</p>
<p><strong>Send as hex -</strong> sends the data in hexadecimal format. For example, if the acquired barcode data is 012345, this option would send the hex equivalent of 30<strong>31</strong>32<strong>33</strong>34<strong>35</strong>. </p>
<p><strong>Send TAB key -</strong> appends a TAB character to the processed data. </p>
<p><strong>Send ENTER key -</strong> appends an Enter character to the processed data. </p>
<hr />
<p><strong>Related guides</strong>:</p>
<ul>
<li><a href="../adf">Advanced Data Formatting</a></li>
<li><a href="../../profiles">DataWedge Profiles</a></li>
<li><a href="../../api">DataWedge APIs</a> </li>
</ul>