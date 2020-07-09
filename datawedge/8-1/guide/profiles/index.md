---
title: DataWedge Profiles
description: DataWedge functionality is based on Profiles. Each Profile contains options, also known as plug-ins, for determining how the data is acquired (input), processed (data formatting) and delivered to the app (output). A single Profile can be associated with one or more activities or apps. However, an activity or app can be associated only to a single Profile. In addition to the core functionality with Input, Processing, and Output, optional Profile specific configuration settings are categorized under Utilities, which can be associated with apps or controlled at runtime. Details about functionality and usage of each of the Input, Processing, Output and Utilities options can be found in the links below. By default, Profile0 is provided as a generic Profile that can take effect for foreground apps that have not yet been associated to any Profiles. This provides the ability to quickly acquire data prior to taking action on setting any configurations. For more information about how Profiles work, see the Architecture Overview page.
layout: list-apis.html
product: DataWedge
productversion: '8.1'
automenu:
  items:
    - title: About Profiles
      items:
        - title: Architecture Overview
          url: ../overview
        - title: Managing Profiles
          url: ../createprofile

---
<!--  // Commented out from section above
    - title: Input
      items:
        - title: Barcode
          url: ../input/barcode
        - title: Mag-stripe Reader (MSR) 
          url: ../input/msr
        - title: Radio-frequency Identification (RFID) 
          url: ../input/rfid
        - title: Serial/USB Port
          url: ../input/serial
        - title: SimulScan
          url: ../input/simulscan
        - title: Voice
          url: ../input/voice
    - title: Processing
      items:
        - title: Advanced Data Formatting (ADF)
          url: ../process/adf
        - title: Basic Data Formatting (BDF) 
          url: ../process/bdf
    - title: Output
      items:
        - title: Intent
          url: ../output/intent
        - title: Internet Protocol (IP)
          url: ../output/ip
        - title: Keystroke
          url: ../output/keystroke

    - title: Utilities
      items:
        - title: Data Capture Plus (DCP)
          url: ../input/dcp
        - title: Enterprise Keyboard Configuration
          url: ../utilities/ekb
-->

<img src="./dw_profile.png" />
_<b>A DataWedge Profile and its contents.</b> When the associated app/activity is in the foreground, DataWedge loads the Profile and performs actions to acquire (input), format (process) and deliver (output) the data based on the Profile configurations. Data Capture Plus and Enterprise Keyboard Configuration are separate utilities that perform specific functions to the app/activity. Data Capture Plus enables areas of the screen to behave as a scan trigger. Enterprise Keyboard Configuration enables a custom generated keyboard layout to be displayed in the associated app/activity._
<br/>
<br/>
<b>Main configurations for plugins:</b>
<table class="facelift" align="center" style="width:80%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Plugin</th>
    <th>Type</th>
    <th>Main Configurations (not all-inclusive)</th>
  </tr>

  <tr>
    <td rowspan="5">Input</td>
    <td><a href="../input/barcode">Barcode</a></td>
	  <td>∙ Select scanner: camera, 1D or 2D imager, Bluetooth scanner, etc.<br>∙ Enable/disable hardware trigger<br>∙ Select decoders<br>∙ Set decoder params (options for each decoder)<br>∙ Set reader params (options for the scanner selected)<br>∙ Set scan params (scanner specific decoding feedback)</td>
  </tr>
  
  <tr>
    <td><a href="../input/msr">Magnetic Stripe Reader (MSR)</a></td>
	  <td>∙ (Data output is acquired through intents, which DataWedge automatically parses and places into specific tags to be handled by the app)</td>
  </tr>

  <tr>
    <td><a href="../input/rfid">Radio-frequency Identification (RFID)</a></td>
	  <td>∙ Enable/disable hardware trigger<br>∙ Configure reader settings</td>
  </tr>

  <tr>
    <td><a href="../input/serial">Serial/USB</a></td>
	  <td>∙ Set serial port configuration</td>
  </tr>

  <tr>
    <td><a href="../input/voice">Voice</a></td>
	  <td>∙ Data capture start option: start phrase or PTT button<br>∙ Specify data capture start phrase<br>∙ Specify data capture end phrase<br>∙ Set timeout for data capture<br>∙ Configure voice commands<br>∙ Configure data type returned: alpha, numeric, any<br>∙ Offline speech recognition<br>∙ Validation window (validate captured data allowing to edit if needed)</td>
  </tr>

  <tr>
    <td rowspan="2">Process</td>
    <td><a href="../process/bdf">Basic Data Formatting (BDF)</a></td>
	  <td>∙ Add prefix<br>∙ Add suffix<br>∙ Send as hex<br>∙ Append TAB key<br>∙ Append ENTER key<br>∙ Create custom rule with specific criteria and actions to process acquired data</td>
  </tr>

  <tr>
    <td><a href="../process/adf">Advanced Data Formatting (ADF)</a></td>
	  <td>∙ Create custom rule with specific criteria and actions to process acquired data</td>
  </tr>

  <tr>
    <td rowspan="3">Output</td>
    <td><a href="../output/keystroke">Keystroke</a></td>
	  <td>∙ Inject action key in place of the character: None, Tab, Line feed, Carriage return<br>∙ Send keystrokes as key events<br>∙ Send certain key events as a string<br>∙ Set key event delay</td>
  </tr>

  <tr>
    <td><a href="../output/intent">Intent</a></td>
	  <td>∙ Set intent action<br>∙ Set intent category<br>∙ Set intent delivery</td>
  </tr>

  <tr>
    <td><a href="../output/ip">Internet Protocol</a></td>
	  <td>∙ Enable/disable Remote Wedge<br>∙ Set protocol: TCP or UDP<br>∙ Set IP address<br>∙ Set Port number</td>
  </tr>

<tr>
    <td rowspan="2">Utilities (Options)</td>
    <td><a href="../input/dcp">Data Capture Plus (DCP)</a></td>
	  <td>∙ Set location of button to trigger scanning: left side, right side, either side<br>∙ Set mode to launch DCP: button only, full-screen only, button interchangeable to full screen<br>∙ Set highest/lowest button position<br>∙ Set wait time to trigger scanner action after a screen tap</td>
  </tr>

  <tr>
    <td><a href="../utilities/ekb">Enterprise Keyboard Configuration</a></td>
	  <td>∙ Select custom generated layout</td>
  </tr>
</table>