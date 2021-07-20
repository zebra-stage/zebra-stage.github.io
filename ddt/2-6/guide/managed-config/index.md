---
title: Managed Configurations
layout: guide.html
product: Device Diagnostic Tool
productversion: "2.6"
---

## Overview

Device Diagnostic Tool (DDT) can be remotely configured through Managed Configurations, specifications developed by Google and the Android community to configure installed applications and deploy these configurations through an EMM (Enterprise Mobility Management). A schema defines the DDT features available for consumption by the EMM, providing the information necessary to present to the EMM's corresponding data-driven UI. This mechanism integrates DDT remote configuration within the EMM for seamless operation and allows Zebra to release a new schema as soon as new features are available for use. DDT and the Zebra schema are available from the Google Play Store and must be used together to leverage DDT with its managed configurations to perform diagnostic operations.

## Requirements

Requirements for use of Managed Configurations with DDT:

- Zebra device with Android 10 or Android 11
- DDT with the Zebra schema downloaded from the Google Play Store
- DDT is installed on the device and _must be launched at least once_
- An EMM for device deployment
- FTP Server to upload DDT test data<br>
  _Recommended: To minimize security risks from disclosure of login credentials, Zebra recommends uploading test data to a dedicated server._

## Use Managed Configurations

This section provides general instructions to use Managed Configurations through an EMM. The UI layout may vary depending on the EMM. In the EMM, after adding DDT to the device app catalog for app installation, the corresponding schema is automatically retrieved and presented to the EMM managed configuration UI based on the data defined. Through this UI, the administrator can select the desired Managed Configurations. Prior to pushing the Managed Configurations to the device(s), DDT must be launched at least once in order to accept these configurations. Instructions include how DDT can be launched remotely with [OEMConfig](/oemconfig).

General instructions to use Managed Configurations:

1.  **Add Device Diagnostic Tool to the application catalog.** In the EMM, browse or search for Device Diagnostic Tool 2.6 or higher from the Google Play Store and add it to the app catalog. This automatically retrieves the corresponding schema for the app and makes the app available for deployment to the device(s) through the EMM.
2.  **Configure app restrictions using Managed Configurations** as described in the schema. See [App Restrictions](#apprestrictions) section that follows, which describes the available options.
3.  **Push a policy that deploys the DDT app and the created Managed Configurations to the device(s).**
4.  **Launch DDT remotely using OEMConfig - _DDT must be installed from step 3 prior to executing this step_:**

    - Install [OEMConfig](/oemconfig/setup) on the device, if not previously installed.
    - In OEMConfig, open Device Administration Configuration.
    - Select **Action** > **Submit XML.**
    - In the input field for **Submit XML**, enter the text below to launch DDT:

              <wap-provisioningdoc>
              <characteristic type="Intent">
              <parm name="Action" value="StartActivity"/>
              <parm name="ActionName" value="android.intent.action.MAIN"/>
              <parm name="Package" value="com.symbol.selfdiagnostics"/>
              <parm name="Class" value="com.symbol.selfdiagnostics.activities.MainActivity"/>
              <characteristic type="Extra">
              <parm name="ExtraType" value="string"/>
              <parm name="ExtraName" value="LAUNCH_DDT"/>
              <parm name="ExtraValue" value="1"/>
              </characteristic>
              </characteristic>
              </wap-provisioningdoc>

      Note: Line breaks should be removed.

    - Apply OEMConfig configuration to the device(s).

## App Restrictions

There are 2 [modes of operations](../usage/#overview) for DDT: admin mode and user mode. Currently only admin mode is supported with managed configuration to schedule recurring tests and configure log uploads.

### Admin Mode

In admin mode, the DDT app restrictions are as follows:

1. **[Test Plan](#testplan) -** Create or modify a test plan that includes Schedule, Activity, and Delivery.
2. **[Test Log Retention](#testlogretention) -** Select whether to keep or discard test plans on device after automatic upload to server.

## App Restriction Options

This section provides the options available for each app restriction.

### Test Plan

Test Plan creates or modifies a test plan that includes the weekly test schedule, specifying the test to perform and configuring the server to receive the test results.

<table class="facelift" align="center" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Restriction Name</th>
    <th>Option</th>
    <th>Description</th>
    <th>Value(s)</th>
  </tr>

  <tr>
    <td rowspan="2">Schedule</td>
    <td>Test Day</td>
    <td>Day of the week to automatically perform the weekly test</td> 
    <td>• Monday<br>• Tuesday<br>• Wednesday<br>• Thursday<br>• Friday<br>• Saturday<br>• Sunday</td>
  </tr>
  
  <tr>
    <td>Test Time</td>
    <td>Designated time to run the test and upload the result log file</td>
    <td>[Time in HH:MM 24-hour format] </td>
  </tr>

  <tr>
    <td>Activity</td>
    <td>System to Test</td>
    <td>Test to perform on the device</td> 
    <td>• Bluetooth<br>• WiFi<br>• Battery<br>• WWAN<br>• SD card</td>
  </tr>
  
  <tr>
    <td rowspan="4">Delivery</td>
    <td>Protocol</td>
    <td>Protocol used by the server that receives DDT file uploads</td> 
    <td>FTP</td>
  </tr>

  <tr>
    <td>IP Address</td>
    <td>IP address for the user to access the DDT upload server</td> 
    <td>[valid IP address]</td>
  </tr>

  <tr>
    <td>User Name</td>
    <td>User name to access the DDT upload server</td> 
    <td>[valid user name]</td>
  </tr>

  <tr>
    <td>Password</td>
    <td>Password to access the DDT upload server</td> 
    <td>[valid password]</td>
  </tr>

</table>

### Test Log Retention

Test Log Retention specifies the action to take for all test plan files on the device after uploading them to the designated server.

<table class="facelift" align="center" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Restriction Name</th>
    <th>Description</th>
    <th>Value</th>
  </tr>

  <tr>
    <td rowspan="2">Test Log Retention</td>
    <td>Retain or discard test plan files on device after file upload to server</td>
    <td>• Keep after upload<br>• Delete after upload</td> 
  </tr>
</table>

<br><br>

---

## See Also

- [OEMConfig](/oemconfig) - for launching apps remotely
