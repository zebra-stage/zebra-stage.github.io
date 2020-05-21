---
title: DataWedge Remote Administration
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## Overview
**DataWedge Manager** CSP (Configuration Service Provider) securely enables mass configuration deployment with the underlying [MX](/mx/overview) framework, an XML-based communications platform that serves as a common interface for managing capabilities and behaviors of Zebra Android devices. The CSP is an MX plug-in that can set or query a particular configuration, allowing DataWedge to receive and process XML files. This lets device administrators utilize [StageNow](/stagenow) to create profiles specific to configuring DataWedge. Features that can be configured include:
* Enable/Disable DataWedge UI
* Enable/Disable configuration file import via intent API
* Enable/Disable auto import of configuration file
* Import configuration file from specified path<br>

See [DataWedge Manager](/mx/datawedgemgr/) for more information.
<br><br>
**Version History**
* **DataWedge 7.5 -** DataWedge Manager CSP support introduced, requires at minimum MX v9.2 and StageNow v3.5.
<br>
##Enable/Disable DataWedge UI
Controls whether the DataWedge user interface is accessible to the device user, determining the ability to change DataWedge configuration settings on the device. If disabled, DWDemo profile settings can still be modified for demonstration purposes. 

##Enable/Disable configuration file import via intent API
Controls whether configuration files can be imported by apps via DataWedge [Import Config](../api/importconfig) intent API. 

##Enable/Disable auto import of configuration file
Controls whether DataWedge configuration files are [auto-imported](../settings#autoimport) when located in the `/enterprise/device/settings/datawedge/autoimport` folder on the device.

##Import configuration file from specified path
Specifies the full path and file name to import the configuration file (`datawedge.db`) or profile (by default, `dwprofile_<profilename>.db`). Can be used instead of the default Auto-Import (`/enterprise/device/settings/datawedge/autoimport`) folder. The file name must adhere to the existing DataWedge file naming convention: 
* Config file is always named `datawedge.db`
* Profile naming convention: `dwprofile_<profilename>.db`<br>



See [Mass Deployment](../settings#massdeployment) for more information.

-----

**Related Guides**: 

* **[DataWedge Manager CSP](/mx/datawedgemgr) -** describes DataWedge Manager CSP usage
* **[MX Management System](/mx) -** explains MXMS framework
* **[Profile Architecture Overview](../overview) -** explains how DataWedge uses Profiles and Plug-ins


