---
title: DataWedge APIs
description: DataWedge APIs operate primarily through Android intents--specific commands that can be used by other applications to control data capture without the need to directly access the DataWedge UI.  
layout: list-apis.html
product: 'DataWedge'
productversion: '8.1'
automenu:
  items:
    - title: General Information
      items:
        - title: Getting Started
          url: ../gettingstarted
        - title: Using Intents 
          url: ../output/intent
        - title: Using DataWedge APIs 
          url: overview
        - title: Using Intent Result Codes  
          url: resultinfo
        - title: DataWedge API Benefits & Usage (article) 
          url: https://developer.zebra.com/community/home/blog/2017/06/27/datawedge-apis-benefits-challenges
        - title: DataWedge Intent Demo App 
          url: tutorials

    
---
<!--
// Removed from above section

- title: DataWedge APIs
      items:
        - title: Clone Profile 
          url: cloneprofile
        - title: Create Profile 
          url: createprofile
        - title: Delete Profile 
          url: deleteprofile
        - title: Enable/Disable DataWedge 
          url: enabledatawedge
        - title: Enumerate Scanners 
          url: enumeratescanners
        - title: Get Active Profile 
          url: getactiveprofile
        - title: Get Config 
          url: getconfig
        - title: Get DataWedge Status 
          url: getdatawedgestatus
        - title: Get Disabled App List 
          url: getdisabledapplist
        - title: Get Ignore Disabled Profiles 
          url: getignoredisabledprofiles
        - title: Get Profiles List 
          url: getprofileslist
        - title: Get Scanner Status 
          url: getscannerstatus
        - title: Get Version Info 
          url: getversioninfo
        - title: Import Config 
          url: importconfig
        - title: Register/Unregister for Notification 
          url: registerfornotification
        - title: Rename Profile 
          url: renameprofile
        - title: Reset Default Profile 
          url: resetdefaultprofile
        - title: Restore Config 
          url: restoreconfig
        - title: Scanner Input Plug-in 
          url: scannerinputplugin
        - title: Set Config 
          url: setconfig
        - title: Set Default Profile 
          url: setdefaultprofile
        - title: Set Disabled App List 
          url: setdisabledapplist
        - title: Set Ignore Disabled Profiles 
          url: setignoredisabledprofiles
        - title: Set Reporting Options 
          url: setreportingoptions   
        - title: Soft Scan Trigger 
          url: softscantrigger
        - title: Soft RFID Trigger 
          url: softrfidtrigger
        - title: Switch Scanner 
          url: switchscanner
        - title: Switch Scanner Params 
          url: switchscannerparams
        - title: Switch SimulScan Params 
          url: switchsimulscanparams
        - title: Switch to Profile 
          url: switchtoprofile
-->
<!--
<table border="0">
 <tr>
    <td><b style="font-size:18px">Profile:</b></td>
    <td><b style="font-size:18px">Configuration:</b></td>
    <td><b style="font-size:18px">Data Capture:</b></td>
 </tr>
 <tr>
    <td><a href="./cloneprofile">Clone Profile</a></td>
    <td><a href="./getconfig">Get Config</a></td>
    <td><a href="./enabledatawedge">Enable/Disable DataWedge</a></td>
 </tr>
 <tr>
    <td><a href="./createprofile">Create Profile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></td>
    <td><a href="./getdatawedgestatus">Get DataWedge Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></td>
    <td><a href="./scannerinputplugin">Enable/Disable Scanner Input Plug-in</a></td>
 </tr>
 <tr>
    <td><a href="./deleteprofile">Delete Profile</a></td>
    <td><a href="./getdisabledapplist">Get Disabled App List</a></td>
    <td><a href="./enumeratescanners">Enumerate Scanners</a></td>
 </tr>
 <tr>
    <td><a href="./getactiveprofile">Get Active Profile</a></td>
    <td><a href="./getversioninfo">Get Version Info</a></td>
    <td><a href="./getscannerstatus">Get Scanner Status</a></td>
 </tr>
 <tr>
    <td><a href="./getignoredisabledprofiles">Get Ignore Disabled Profiles</a></td>
    <td><a href="./importconfig">Import Config</a></td>
    <td><a href="./registerfornotification">Register/Unregister for Notification</a></td>
 </tr>
 <tr>
    <td><a href="./getprofileslist">Get Profiles List</a></td>
    <td><a href="./restoreconfig">Restore Config</a></td>
    <td><a href="./softscantrigger">Soft Scan Trigger</a></td>
 </tr>
 <tr>
    <td><a href="./renameprofile">Rename Profile</a></td>
    <td><a href="./setconfig">Set Config</a></td>
    <td><a href="./switchscanner">Switch Scanner</a></td>
 </tr>
 <tr>
    <td><a href="./resetdefaultprofile">Reset Default Profile</a></td>
    <td><a href="./setdisabledapplist">Set Disabled App List</a></td>
    <td><a href="./switchscannerparams">Switch Scanner Params</a></td>
 </tr>
 <tr>
    <td><a href="./setdefaultprofile">Set Default Profile</a></td>
    <td><a href="./setreportingoptions">Set Reporting Options</a></td>
    <td><a href=""></a></td>
 </tr>
 <tr>
    <td><a href="./setignoredisabledprofiles">Set Ignore Disabled Profiles</a></td>
    <td><a href="./switchsimulscanparams">Switch Simulscan Params</a></td>
    <td><a href=""></a></td>
 </tr>
 <tr>
    <td><a href="./switchtoprofile">Switch to Profile</a></td>
    <td><a href=""></a></td>
    <td><a href=""></a></td>
 </tr>
</table>
-->
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style="font-size:16px">Profile:</b><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./cloneprofile">Clone Profile</a>** - Create a copy of an existing DataWedge Profile including all settings.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./createprofile">Create Profile</a>** - Create a new Profile without setting configurations.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./deleteprofile">Delete Profile</a>** - Delete an existing Profile.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./getactiveprofile">Get Active Profile</a>** - Get the name of the Profile current in use by DataWedge.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./getignoredisabledprofiles">Get Ignore Disabled Profiles</a>** - Return the status of the "Ignore Disabled Profiles" parameter. If true, DataWedge cannot switch to any Profile that is not enabled.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./getprofileslist">Get Profiles List</a>** - Return the list of DataWedge Profiles.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./renameprofile">Rename Profile</a>** - Rename an existing Profile.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./resetdefaultprofile">Reset Default Profile</a>** - Reset the default Profile to Profile0, the built-in profile used with unassociated apps.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./setdefaultprofile">Set Default Profile</a>** - Set the specified Profile as the default Profile.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./setignoredisabledprofiles">Set Ignore Disabled Profiles</a>** - Prevent switching to a Profile that is disabled, including Profile0.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./switchtoprofile">Switch to Profile</a>** - Change the apps association to the specified Profile.
    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style="font-size:16px">Configuration:</b><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./getconfig">Get Config</a>** - Gets the `PARAM_LIST` settings in the specified Profile, returned as a set of value pairs or a Plug-in config bundle. <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./getdatawedgestatus">Get DataWedge Status</a>** - Return the DataWedge status, enabled or disabled.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./getdisabledapplist">Get Disabled App List</a>** - Return a list of apps and activities that are blocked from using DataWedge.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./getversioninfo">Get Version Info</a>** - Return the current version of DataWedge, SimulScan, and Scanner Framework/Decoder library installed on the device.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./importconfig">Import Config</a>** - Import a Profile and/or Config file, which can contain multiple Profiles.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./restoreconfig">Restore Config</a></td>** - Reset all user-configured settings and restore DataWedge to the factory-default settings.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./setconfig">Set Config</a>** - Create, update or replace a Profile and its settings.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./setdisabledapplist">Set Disabled App List</a>** - Add, remove or update an app/activity from the list which prevents the use of DataWedge.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./setreportingoptions">Set Reporting Options</a>** - Configure reporting options from importing databases and Profiles.<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style="font-size:16px">Data Capture:</b><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./enabledatawedge">Enable/Disable DataWedge</a>** - Enable/disable DataWedge on the device.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./scannerinputplugin">Enable/Disable Scanner Input Plug-in</a>** - Enable/Disable the Scanner Input Plug-in in use by the current active Profile, which effectively disable scanning.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./enumeratescanners">Enumerate Scanners</a>** - Generate an index of scanners available on the device.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./getscannerstatus">Get Scanner Status</a>** - Return the status of the scanner currently selected as the default.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./registerfornotification">Register/Unregister for Notification</a>** - Enable apps to register or unregister to receive notification of status changes related to configuration, scanner and profile switching.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./softscantrigger">Soft Scan Trigger</a>** - Start, stop of toggle a software scanning trigger. <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./switchscanner">Switch Scanner</a>** - Switch to a specific scanner at runtime to enable an optimal scanning device for the app, requirement or situation. <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./switchscannerparams">Switch Scanner Params</a>** - Temporarily update the settings of the active Profile during runtime by passing one or more barcode, scanner and/or reader parameters as intent extras.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./switchsimulscanparams">Switch Simulscan Params</a>** - Temporarily update the Simulscan settings in the active Profile at runtime.<br />