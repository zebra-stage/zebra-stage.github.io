---
title: Installation
layout: guide.html
product: Device Tracker
productversion: "6.0"
---

## Overview

Device Tracker is a cloud-based solution that consists of:

- A cloud-based server that is hosted and managed by Zebra.
- A client software that runs on Zebra Android devices.

Client app installation is required for the device to communicate with the server and for devices to be tracked by the solution. This section discusses how to install and enable Device Tracker on the mobile device. To access Device Tracker server, the first step is to procure [Device Tracker licenses](../license).

[Enterprise Login Screen (pre-release)](../config/#enterpriseloginscreenels) is an optional mobile application that ensures secure device access by requiring user authentication and device checkout using SSO login credentials, enforcing accountability. Steps are provided to install and run Enterprise Login Screen (ELS).

---

## Installation Notes

- **Both server and client must be upgraded to Device Tracker 5.3** to ensure compatibility of Device Tracker features.
- During a **Google Play Services update,** the Android system automatically stops Device Tracker. After the update is complete, relaunch the Device Tracker app or reboot the device to continue tracking of the device.
- **Backward Compatibility -** Device Tracker Cloud Server v5.0 or above supports Client software versions 4.0, 4.1 and 4.2. Starting on _January 1, 2023,_ Device Tracker Cloud Server will no longer support Device Tracker Client versions 4.0, 4.1 and 4.2. The device must be upgraded with Device Tracker Client version 5.0 or above. See [Zebra Support Portal](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/device-tracker.html) for the latest Device Tracker client.
- **Config Service Notification -** When Device Tracker client is configured for the first time, a notification appears indicating the Config Service is running. This notification disappears after a subsequent device reboot.

---

## Requirements

### Device Requirements

Requirements for Device Tracker client on the device:

- **Supported Devices -** See compatible devices table on the [Zebra support portal](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/device-tracker.html).
- **Operating System -** Only supported on select Android 8 Oreo, Android 10, Android 11 and Android 13 GMS devices. See Device Tracker Support on [Zebra support portal](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/device-tracker.html) for compatible devices. <br /> <i class="fa fa-exclamation-triangle" style="color:#FFA500;"></i> **Note: Android 11 LifeGuard updates support Device Tracker _except_ for LG update 11-20-18.00,** which requires May LG update 11-23-13.00 for support. For A11 LG updates, see the respective product page in [Zebra support portal](https://www.zebra.com/us/en/products/mobile-computers.html).
  <br /><i class="fa fa-exclamation-triangle" style="color:#FFA500;"></i> **Note: Android 13 supports Device Tracker 5.5 and higher.**<br />
- _Optionally,_ **[Secondary BLE](../secondaryble)** allows a device to be located if it loses battery power or is powered off. This feature is available on select hardware that are capable of secondary BLE; see the [device compatibility table](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/device-tracker.html). Also see [Secondary BLE Configuration](../secondaryble/#configuration) for instructions to enable this feature.
- Device **[licenses](../license)** are required for Device Tracker to operate. Contact a [Zebra reseller](../license/#icontactareseller) to procure licenses.

Requirements for [Enterprise Login Screen (ELS)](../config/#enterpriseloginscreenels):

- **[Single Sign-On (SSO)](../config/#singlesignonsso) must be activated**
- **[Checkin/Checkout](../config/#checkincheckoutdevice) must be enabled -** ELS takes place of the [Checkout](../config/#checkincheckoutdevice) screen, replacing it with an SSO login screen. If any [Device Checkin Options](../config/#devicecheckinoptions) are enabled, when the selected action(s) is triggered from that option, the ELS screen appears in place of the Checkout screen.
- **Enterprise Login Screen and Chrome must be added to the Lock Task Mode allow list** through an EMM or other method. This blocks the user from accessing the device until the user logs in with their SSO credentials.

### Network Requirements

Network requirements for communication between the device client app and the cloud server:

- **Open HTTPS port.** By default, port 443 is typically used for HTTPS communication. However, this may vary based on network configuration.
- For administrators and managers to access the web portal (supplied by Zebra during onboarding), **allow the web portal URL through the firewall or proxy**.
- An email is sent from `zdtrksupport@zebra.com` if [reporting](../config/#endofdaydevicesummary) is enabled and if the password is reset.
- For device access and communication to the cloud server, **specific domain names must be allowed through the firewall or proxy.**

  If the firewall or proxy supports wildcards, add the following domain names to the allow list:

  - `connectivitycheck.gstatic.com` <!-- <sup>0</sup> -->
  - `*.googleapis.com`
  - `*.firebaseio.com`
  - `*.cloudfunctions.net`
  - `[ProjectID].firebaseapp.com` <sup>1</sup>
  - `[Web portal URL]` (supplied by Zebra during onboarding)

  If the firewall or proxy does not support wildcards, add the following domain names to the allow list:

  - `connectivitycheck.gstatic.com` <!-- <sup>0</sup> -->
  - `www.googleapis.com`
  - `firestore.googleapis.com`
  - `firebasestorage.googleapis.com `
  - `cloudfunctions.googleapis.com`
  - `us-central1-[ProjectID].cloudfunctions.net` <sup>1</sup>
  - `[ProjectID].firebaseio.com` <sup>1</sup>
  - `[ProjectID]-default-rtdb.firebaseio.com` <sup>1</sup>
  - `*.firebaseio.com` <sup>2</sup>
  - `[ProjectID].firebaseapp.com`
  - `[Web portal URL]` (supplied by Zebra during onboarding)

<!-- **REMOVE PER DLM-27427
  <sup>0</sup> ICMP or TCP Echo Requests must not be blocked by your firewall. -->

<sup>1</sup>`[ProjectID]` is supplied by Zebra services during the onboarding process. An XML file is provided, which contains a string similar to:<br />

        <parm name="ProjectId" value="<customer name>-dtrk-na-p" />

The "value" field contains the ProjectID enclosed in double quotes. In this example, the project ID is: `<customer name>-dtrk-na-p`

<sup>2</sup> Used by Device Tracker client to communicate with Device Tracker realtime database. Google Firebase SDK uses the URLs internally. The active URL depends on Google resource allocation and changes dynamically. Zebra recommends to use the URL with wildcard. To retrieve the latest URL that is being used, create a script to regularly look up the URL using `https://[ProjectID]-default-rtdb.firebaseio.com/.settings/owner.json` (or `https://[ProjectID].firebaseio.com/.settings/owner.json`) and update the rules accordingly.

<!--   <sup>2</sup> `XXX` represents a dynamic range of numbers from 0000–9999 that can change at any time. This is controlled by Google. To retrieve the latest URLs associated with `s-usc1c-nss-XXX.firebaseio.com`, create a script to regularly look up the `s-usc1c-nss-XXX.firebaseio.com` URL using `https://[ProjectID]-default-rtdb.firebaseio.com/.settings/owner.json` (or `https://[ProjectID].firebaseio.com/.settings/owner.json`) and update the rules accordingly.
--->

### Web Portal Requirements

The web portal allows adminstrators to (1) configure Device Tracker, (2) manage users, (3) manage access points, sites, and devices, (4) automate workflows, (5) generate reports, and (6) view licenses. The web portal URL is supplied by Zebra during onboarding.

**To access the web portal,** in a supported browser enter the web portal URL. The supported browsers are:

- Chrome
- Edge
- Safari (v14.0 and later)

**For first-time use,** the administrator must set their password. Click **Forgot Your Password** in the web portal and enter the administrator email address, which is registered as a user in the system during onboarding. An email will be sent to the administrator with a link to set the password in order for the administrator to login.

**If using single sign-on (SSO),** see [SSO](../config/#singlesignonsso) for procedures on configuring SSO.

### Licenses

End-user licenses are required for Device Tracker to operate. Additionally, separate BLE licenses are required for secondary BLE operation, allowing devices to be tracked even after losing battery power. See [Licensing](../license).

---

## Install Manually

Steps to manually install Device Tracker client app on the device:

1. **Open the required ports and allow the domains** specified in [network requirements](#networkrequirements) for the device to communicate to the cloud server.
2. **Connect the device to a Wi-Fi network** that can access the cloud server based on the [network requirements](#networkrequirements).
3. **Enable Bluetooth and Location** services on the device to allow device tracking.
4. **Download Device Tracker client** from [Zebra support portal](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/device-tracker.html) **and install it** on the device.
5. _(Optional)_ If using [SSO](../config/#singlesignonsso) for accountability and [Checkin/Checkout](../config/#checkincheckoutdevice) is enabled, **download [Enterprise Login Screen (ELS)](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/device-tracker.html)** from Zebra support portal **and install it** on the device.
6. **Launch Device Tracker app. Grant all permissions** when prompted:
   - Choose option “Allow all the time” when granting Location permissions.
   - Allow permission for Device Tracker to always run in the background.
   - Grant overlay permissions. Additional steps are required:
     1. In apps, tap and hold the Device Tracker icon to show **App info.** Tap on this option.
     2. Scroll down and tap **Advanced.**
     3. Tap **Display over other apps.**
     4. Toggle to enable **Allow display over other apps.**
7. _(Optional)_ If using ELS, **launch ELS app. Grant overlay permissions:**
   1. In apps, tap and hold the ELS icon to show **App info.** Tap on this option.
   2. Scroll down and tap **Advanced.**
   3. Tap **Display over other apps.**
   4. Toggle to enable **Allow display over other apps.**
8. **Launch StageNow client and scan the barcode from the .PDF file** provided by Zebra during the onboarding process or [downloaded from the portal](../config/#enrolldevices). This configures Device Tracker with the cloud server settings.
9. **_Optionally,_ enable [secondary BLE](../secondaryble)** to allow devices that support this feature to be located even when powered off. **Follow instructions in [Secondary BLE Configuration](../secondaryble/#configuration) to enable and configure secondary BLE.**

---

## Install with EMM

For mass deployment, install Device Tracker client on devices through an EMM. A server connectivity XML file is provided by Zebra services to configure Device Tracker with the server settings.

**Note:** The maximum supported limit for simultaneous device registration is 500 devices. Zebra recommends to register no more than 500 devices at a time.

#### Installation Steps

To install and configure Device Tracker through an EMM - all steps must be followed sequentially:

1. **Open the required ports and allow the domains** specified in [network requirements](#networkrequirements) for devices to communicate to the cloud server.
2. **Connect the device to a Wi-Fi network** that can access the cloud server based on the [network requirements](#networkrequirements).
3. **Enable Bluetooth and Location** services on the device to allow device tracking, if Bluetooth and Location services are disabled or restricted.
4. **Download Device Tracker client** from the [Zebra support portal](https://www.zebra.com/us/en/products/software/mobile-computers/device-tracker.html) **and deploy it** to the device through EMM.
5. _(Optional)_ If using [SSO](../config/#singlesignonsso) for accountability and [Checkin/Checkout](../config/#checkincheckoutdevice) is enabled, **download [Enterprise Login Screen (ELS)](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/device-tracker.html)** from the Zebra support portal **and deploy it** to the device through EMM.
6. **Grant the required permissions for Device Tracker through EMM, if not automatically granted,** based on the Android platform. Refer to the EMM guide. For any platform versions not mentioned below, permissions are automatically granted.
   - For _**Android 11** devices with LG version 11-20-18.00-RG-U02 or lower_ or _**Android 10** devices with LG version 10-16-10.00-QG-U111 or lower,_ grant the following permissions:
     - `android.permission.ACCESS_BACKGROUND_LOCATION` – Required to find devices using the Bluetooth proximity meter.
     - `android.permission.ACCESS_FINE_LOCATION` – Required to find devices using the Bluetooth proximity meter.
   - For **Android 8**, for _TC51 and MC3300 devices with LG version 02-52-21.00-OG-U00 or lower_ or _other devices with LG version 01-30-04.00-OG-U41 or lower,_ grant the following permissions:
     - `android.permission.ACCESS_FINE_LOCATION` – Required to find devices using the Bluetooth proximity meter.
     - `android.permission.READ_PHONE_STATE` – Required to read the device serial number and register devices with the Device Tracker server for tracking.
7. **Download and deploy <a href="./DeviceTracker.xml" download>Device Tracker setup XML</a> to MX through EMM.** This grants permissions to display over other apps, disables battery optimization and starts the device tracking service.
8. _(Optional)_ If using ELS, **download and deploy <a href="./ELS.xml" download>ELS XML</a> to MX through EMM.** This grants permissions to display over other apps.
9. **Download and deploy the server connectivity settings XML to MX through EMM** provided by Zebra during the onboarding process or [downloaded from the portal](../config/#enrolldevices). _If steps 6 and 7 are skipped, an error may occur indicating the device has not registered with MX Framework. Refer to the EMM guide for XML deployment._
10. **_Optionally,_ enable [secondary BLE](../secondaryble)** to allow devices that support this feature to be located even when powered off. **Follow instructions in [Secondary BLE Configuration](../secondaryble/#configuration) to enable and configure secondary BLE.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/0JocLh_PFXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Installation with SOTI MobiControl_

<iframe width="560" height="315" src="https://www.youtube.com/embed/HxrxIuiZV9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Installation with VMware Workspace ONE UEM (AirWatch)_

---

## Install with StageNow

Use Zebra's [StageNow](/stagenow/latest/about) tool to generate a barcode that performs remote installation and setup of Device Tracker. Follow the instructions below:

1. **Open the required ports and allow the domains** specified in [network requirements](#networkrequirements) for the device to communicate to the cloud server.
2. **Connect the device to a Wi-Fi network** that can access the cloud server based on the [network requirements](#networkrequirements).
3. **Enable Bluetooth and Location** services on the device to allow device tracking.
4. **Download Device Tracker client** from [Zebra support portal](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/device-tracker.html). Follow the instructions in this video to create a StageNow profile and generate the staging barcode:
   <iframe width="560" height="315" src="https://www.youtube.com/embed/MZnFb-7sL5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <i>Installation with StageNow</i>

   The video covers the required Device Tracker parameters in the StageNow profile:<br />

   - **AppMgr**:<br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• **Remove Application for Battery Optimization:** com.zebra.mdna.devicetrackercloud<br>
   - **AccessMgr**:<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• **Application Package Name:** com.zebra.mdna.devicetrackercloud<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• **Application Signature:** [browse to <a href="DeviceTracker.crt">certificate file</a>]<br />
   - **Intent**: <br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• **Android Action Name:** com.zebra.mdna.devicetrackercloud.csp.NGDTCspService<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• **Package Name:** com.zebra.mdna.devicetrackercloud<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• **Class Name:** com.zebra.mdna.devicetrackercloud.csp.NGDTCspService<br>

5. _(Optional)_ If using [SSO](../config/#singlesignonsso) for accountability and [Checkin/Checkout](../config/#checkincheckoutdevice) is enabled, download [Enterprise Login Screen (ELS)](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/device-tracker.html) from Zebra support portal and add the following to the StageNow profile:

   - **FileMgr:**<br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• **File Action:** Transfer/Copy File<br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• **Target Path and File Name:** [Enter path where APK is to be copied to the device, e.g. /sdcard/ELS.apk]<br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• **Source Access Method:** [Select the appropriate setting]<br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• **Source File URI:** [Select and enter the appropriate information when prompted]<br />
   - **AccessMgr**:<br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• **Application Package Name:** com.zebra.mdna.els<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• **Application Signature:** [browse to <a href="ELS.CRT">certificate file</a>]<br />

6. **Launch StageNow client and scan the following barcodes:**

   - Barcode generated from the StageNow profile from step 4 and step 5 (if applicable).
   - Barcode from the .PDF file provided by Zebra during the onboarding process or [downloaded from the portal](../config/#enrolldevices), which configures Device Tracker with the cloud server settings.

7. **_Optionally,_ enable [secondary BLE](../secondaryble)** to allow devices that support this feature to be located even when powered off. **Follow instructions in [Secondary BLE Configuration](../secondaryble/#configuration) to enable and configure secondary BLE.**

---

## Upgrade

Important notes pertaining to Device Tracker when upgrading from a previous version:

- **If upgrading from v5.0, both server and clients must be upgraded in order to utilize the new features.** Failure to do so may result in an error when using new features.
- **If upgrading from Device Tracker 5.0 or lower, [sites imported](../config/#managesites) via .CSV file on the device** must be updated with the local time zone information in order for the new [data reporting](../config/#reports) features to work.
- **If upgrading from a version _below_ v5.0, Device Tracker must be uninstalled** before installing this version. Starting with v5.0, a change was required to the app package name and app signature, resulting to new MX XML and server connectivity XML files. Follow the updated [installation instructions](#installwithemm) to generate the new deployment package.

---

## Uninstallation

Instructions to uninstall Device Tracker from the device, remove the Device Tracker client app manually or through an EMM.

<!-- 2. If SSO is integrated, remove ELS app manually or through an EMM. -->

### Termination

To terminate Device Tracker Cloud, contact [Zebra services](https://www.zebra.com/us/en/services.html). This removes the cloud server instance and deletes all data stored.

---

## See Also

- [Licensing](../license)
- [Secondary BLE](../secondaryble)
- [Configuration](../config)
- [Track Devices](../use)
- [Dashboard](../dashboard)
- [FAQ](../faq)
