---
title: About StageNow
layout: guide.html
product: StageNow
productversion: '5.0'
languages:
  - lang: 'ch'
	label: 'Chinese'

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/dX4jmpAOOQs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

StageNow 5.0 User Guide, Revision A; <!-- StageNow MN-003401; --> Sep., 2020

#### Covers StageNow 5.0

## Overview

This guide provides the staging administrator with instructions for using StageNow to create XML-based profiles for configuring the settings of Zebra devices.

### Prerequisites
The following software must be installed on the staging workstation prior to using StageNow:

* **Windows 7, 10 Pro** (English or Chinese)
* **A supported web browser**:
 * Firefox 29 or higher
 * Google Chrome 35 or higher 
 * Internet Explorer 9 or higher

-----

### Sections of This Guide

* [Installing StageNow](../installing) provides instructions for installing, uninstalling, and upgrading the StageNow staging solution, including system requirements.

* [Getting Started](../gettingstarted) describes the StageNow solution, including information about users, use cases and supported devices.

* [Profiles](../stagingprofiles) provides information about StageNow Wizards, which allow the staging administrator to define software configurations and installation scenarios for enterprise devices.

* [Profile Wizards](../ProfileWizards) describes how to use the profile-creation Wizards.

* [Settings](../settingconfig) provides information for the staging administrator about configuring and managing settings for use in profile creation.

* [Setting Types](../settingtypes) lists the parameters and values available when creating settings.

* [Staging Guides (landing page)](../stagingguides) provides links to staging guides, each with information for the administrators and staging operators about staging methods offered, and for creating Profiles to configure Zebra devices and deploying with staging media.

* [Troubleshooting](../troubleshooting) describes errors that can occur in the StageNow Tool and provides possible solutions.

-----

## What's New in v5.0

### Device Support 

> **StageNow supports all Zebra devices running Android 4.x KitKat and later with MX 4.3 or later**.

-----

### New Features

**StageNow 5.0 introduces [Smart Profiles](../smartprofile)**, which automatically calculate all required [Setting Types (CSPs)](../settingtypes) and create all necessary Profile steps for upgrading (or downgrading) the OS on device(s) to any other version. **Target devices must be running MX 8.1 or later**. [Learn more](../smartprofile). 

**Supports MX 10.2**, which adds the following major features and enhancements: 

* **New [Access Manager](../csp/access) features**: 
 * Enter the Token received from a caller 
* **New [Beacon Manager](../csp/beaconmgr) CSP**: 
 * Controls Bluetooth Low Energy beacon on mobile computers 
* **New [Bluetooth Manager](../csp/bluetoothmgr) features**: 
 * Configure single pairing of accessories 
 * Define trusted devices
 * Enhancements to silent pairing rules  
* **New [Clock](../csp/clock) features**: 
 * Enter date and time in local or Universal Coordinate format  
* **New [Display Manager](../csp/display) features**: 
 * Control automatic screen rotation 
 * Enable/disable adaptive brightness 
 * Set device brightness level  
* **New [KeyMapping Manager](../csp/keymap) features**: 
 * Support for additional key codes
* **New [License Manager](../csp/license) features**: 
 * Supports URI-based license sources 
* **New [Power Manager](../csp/power) features**: 
 * Enable/disable/configure battery saver options 
* **New [PowerKey Manager](../csp/powerkey) features**: 
 * Set touch mode options 
* **New [Touch Manager](../csp/touch) features**: 
 * Support and control latest Zebra devices   
* **New [UI Manager](../csp/ui) features**: 
 * Show/hide percentage of battery charge on screen 
* **New [Wi-fi](../csp/wifi) features**: 
 * Configure Fine Timing Measurement  
 * Control encryption options


-----

## Version History

### Added in v4.3

#### Device Support 

> **StageNow supports all Zebra devices running Android 4.x KitKat and later with MX 4.3 or later**.

-----

#### New Features

**Supports MX 10.1**, which adds the following major features and enhancements: 

* **Enhanced [Display Manager](../csp/display)** now allows a Profile to:
 * Control device-screen orientation (automatic rotation on/off)
* **Enhanced [Power Manager](../csp/power)** now allows a Profile to:
 * Control state of Battery Saver mode (on/off)
 * Control Battery Saver Control mode (automatic/manual)
 * Set Battery percentage of charge to automatically turn Battery Saver Mode on
* **Enhanced [UI Manager](../csp/ui)** now allows a Profile to:
 * Control Battery Percentage display in status bar (show/hide)
* **Enhanced [File Manager](../csp/file)** now allows a Profile to configure the following file upload actions:
 * Enter a target URI
 * Enter source path and file name
 * Select the upload order (oldest or newest first, or alpha-sorted by file name)
 * Delete source file(s) after uploading
 * Name uploaded files using a naming pattern
 * Replace the destination file with source if duplicate name
 * Skip copying and remove file from the source
 * Skip copying and keep it at the source

**Adds support for [Access Manager](../csp/access) CSP of MX 9.4** for Permission Access Action for legacy device support. **This allows EMM administrators to**: 
* "Silently" grant permissions to any app without causing the permission pop-up to appear on the device
* Designate an entire CSP as Protected from unauthorized use by apps
* Designate a specific Function Group (of one or more CSPs) as Protected

-----

### Added in v4.2

#### Device Support 

> **StageNow supports all Zebra devices running Android 4.x KitKat and later with MX 4.3 or higher**.

**StageNow v4.2 has been validated on devices with the following operating systems and MX versions**: 

* **Android 10**
* Android 9.x Pie
* Android 8.x Oreo
* Android 7.x Nougat
* **MX 10.0**
* MX 9.x
* MX 8.x
* MX 7.x

**Bold text** indicates recent addition

-----

#### New Features

**Introduces a [Zero Touch Wizard](../Profiles/zerotouch)**, which assists in creating Profiles for connecting a ”factory-fresh" device to the internet through the Android Setup Wizard. This allows the device to contact Google’s Zero-Touch servers for enrollment into the chosen Enterprise Mobile Management system with no user interaction. 

**Also new, settings entered in the Zero Touch Wizard can be persisted on the device** following an Enterprise Reset, further automating subsequent enrollments. 

**A new [Staging Guides landing page](../stagingguides)** and menu tab helps users locate guides quickly.  

**Supports MX 10.0**: which adds the following major features and enhancements: 
* **Enhanced [Power Manager](../csp/power)** now allows a Profile to: 
 * OS Upgrade via streaming (full-package upgrade only using http or https; supported on Android 10 and later)
 * OS Downgrade via streaming (full-package downgrade only using http or https; supported on Android 10 and later)
* **Enhanced [Access Manager](../csp/access)** now allows an admin to: 
 * Auto-grant permissions to an app to prevent permission "pop-up" to appear on device
 * Designate a CSP as "Protected" from unauthorized use 
 * Designate a Function Group (features selected from different CSPs) as "Protected" from unauthorized use


####`APRIL 2020 UPDATE:` 
**StageNow 4.1.1 can enable/disable [Dynamic Staging](../dynamicstaging)**, a feature introduced in StageNow 4.1. Disabled by default. 

####Upgrades to StageNow 4.1.1 are possible only from: 
* **StageNow 4.1.0** (replaced by v4.1.1 on the Zebra support portal) 
* **StageNow 4.0.1**  
* **StageNow 3.4.0** 

### Added in v4.1

#### Device Support 

> **StageNow supports all Zebra devices running Android 4.x KitKat and later with MX 4.3 or higher**.

**StageNow v4.1 has been validated on devices with the following operating systems and MX versions**: 

* Android 9.x Pie
* Android 8.x Oreo
* Android 7.x Nougat
* MX 8.3
* MX 8.2
* MX 8.1
* MX 8.0
* MX 7.2
* MX 7.1
* MX 7.0

-----

#### New Features

**Introduces [Dynamic Staging](../dynamicstaging)**, which allows compatible data-entry fields in a StageNow Profile to be populated with values from a file when barcodes (or `.bin` files) are generated. **This allows multiple staging materials to be created from a single Profile, allowing that single profile to configure various devices differently**. 

**Supports MX 9.3**: which adds the following features and enhancements: 
* **Enhanced [File Manager](../csp/file)** now allows a Profile to: 
 * Download a file or files from a redirected URL (i.e. Tiny URL) 
 * Download a file from multiple redirected URLs 
* **Enhanced [Application Manager](../csp/app)** now allows an admin to: 
 * Set background data/unrestricted data usage per application on the device  
* **Enhanced [Bluetooth Manager](../csp/bluetoothmgr)** now allows an admin to: 
 * Perform silent pairing using the Bluetooth MAC address or PIN 
 * Select a mandatory identifier by Bluetooth MAC or device name 
* **Enhanced [GPRS Manager](../csp/gprs)** now allows an admin to: 
 * Select the IP transport protocol used by an APN 
 * Select from IPv4, IPv6 and the IPv4/IPv6 “dual-stack” protocol for APN use 
* **Enhanced [Keymapping Manager](../csp/keymap)** now allows an admin to: 
 * Select the Grey key and W1 and W2 buttons for reprogramming

<u>**Audio Staging has been removed</u>**. StageNow 4.1 (and later) no longer supports staging devices using sound. Please use StageNow 4.0 (or older) if audio staging is required. 

-----

### Added in v4.0

#### Device Support

**StageNow v4.0 has been validated on devices with the following operating systems and MX versions**: 

* Android 9.x Pie
* Android 8.x Oreo
* Android 7.x Nougat
* MX 8.3
* MX 8.2
* MX 8.1
* MX 8.0
* MX 7.2
* MX 7.1
* MX 7.0

#### New Features

**Introduces [Trusted Staging](../trustedstaging)**, which allows for the creation of trusted profiles and trusted devices, which can be staged only from barcodes created using the same security certificate. See the [Trusted Staging Guide](../trustedstaging) for usage details. **Applies only to devices with MX 9.2 and higher**. 

**Now supports MX 9.2**: which adds the following features and enhancements: 
* **Enhanced [Power Manager](../csp/power)** now allows an admin to: 
 * Control individual hardware wake up methods (buttons) 
* **Enhanced [Display Manager](../csp/display)** now allows an admin to: 
 * Set the size of fonts and app UI components 
* **Enhanced [Access Manager](../csp/access)** now allows an admin to: 
 * Provides greater device visibility and control while remote troubleshooting
 * Prevents one application from stopping another without explicit permission 


### Added in v3.4

#### Device Support 

**StageNow v3.4 supports all Zebra devices with the following operating systems and extensions**: 

* Android 8.x Oreo
* Android 7.x Nougat
* MX 8.3
* MX 8.2
* MX 8.1
* MX 8.0
* MX 7.2
* MX 7.1
* MX 7.0

> **This release adds support for the following devices with Android versions noted**:<br> EC30 Oreo, ET51 Oreo, ET56 Oreo, L10 Oreo, VC8300 Oreo, PS20 Pie, TC52 Pie, TC72 Pie


<!-- 7/28/19 superceded by release notes (Pie support). 
> `IMPORTANT`:<br> 
> <u>**StageNow 3.4 supports devices running Android 8.x Oreo and Android 7.x Nougat only**</u>.
 -->
-----

#### New Features

**[Stage a device from a USB drive or SD Card](../stagingprofiles/#usbandsdcardprofilestaging)** using NFC staging profiles (`.bin` files) generated by StageNow. 

**[Single-barcode staging](../Profiles/wipedevice/#setupwizardmanualbypass)** combines Android Setup Wizard bypass and device configuration barcodes into a single scanning step. **Supported with MX 9.1 and higher**. 

**Now supports MX 9.1**, which adds the following features and enhancements:
* **Enhanced [UI Manager](../csp/ui)** now allows an admin to:
 * Control whether password characters are displayed briefly on the screen as they're entered (otherwise masked at all times)
* **Enhanced [App Manager](../csp/app)** now allows an admin to:
 * Erase all data created by an app specified in the Package parameter
* **Enhanced [GMS Manager](../csp/gmsmgr)** now allows an admin to:
 * Select and enable a subset of GMS apps and services to run on a device (i.e. Chrome browser, Google Maps, Firebase Cloud messaging)
* **Enhanced [Power Manager](../csp/power)** now allows an admin to:
 * Select hardware signals as the device wake-up method
 * Select mappable keycodes as the device wake-up method 

-----

### Added in v3.3

**[Stage a device from a USB drive or SD Card](../stagingprofiles/#usbandsdcardprofilestaging)** using NFC staging profiles (`.bin` files) generated by StageNow. 

**MX 9.0 profiles now make use of the latest encryption certificates** for barcode, NFC and audio data.

**Now supports MX 9.0**, which adds the following features and enhancements on devices running Android Oreo 8.1 and newer:
* **Enhanced [Battery Manager](../csp/battery)** now allows an admin to:
 * Specify a critically low battery threshold
* **Enhanced [UI Manager](../csp/ui)** now allows an admin to:
 * Control user access to the Large Key Indicator (MC93 device only)
 * Turn the Large Key Indicator on or off (MC93 device only)

**Also now supports MX 8.4**, which adds the following features and enhancements on devices running Android Oreo 8.1 and newer:
* **Enhanced [GPRS Manager](../csp/gprs)**  now allows an admin to:
 * Specify the Mobile Virtual Network Operator (MVNO) type for an Access Point Name (APN)
 * Specify APN MVNO Match Data
* **Enhanced [UI Manager](../csp/ui)**  now allows an admin to:
 * Control user access to the On-Screen Power Button
 * Control user access to the Status Bar
* **Enhanced [Wi-Fi](../csp/wifi) CSP** can now enable/disable:
  * Aggregated MAC Protocol Data Unit (AMPDU)
  * Gratuitous ARP address resolution protocol
  * 2g Channel Bonding (40MHz-wide channel in 2.4GHz band)
  * Configuration of Extended WLAN settings

> `IMPORTANT`:<br> 
> <u>**StageNow 3.3 supports devices running Android 8.x Oreo and Android 7.x Nougat only**</u>.

-----

### Added in v3.2

**Support for MX 8.3** provides the following enhancements:

* **Enhancements to [GMS Manager](../csp/gmsmgr)** provide two Google Mobile Services configuration modes:  
 * **Full mode** allows all GMS features and apps to be enabled as desired
 * **Restricted mode** allows operation of a fixed set of GMS apps, blocking all others
* **A new [WorryFreeWiFi](../csp/worryfreewifi)** manager simplifies mobile device management with traffic analysis and reporting for customer/partner applications.
* **A new [NFC Manager](../csp/nfc)** controls the behavior and options for NFC communications on the device. 
* **Enhanced [UI Manager](../csp/ui)** provides ability enable and disable usage of the on-screen power button on the PS20 device.
* **Enhanced [Access Manager](../csp/access)** can emulate device user interactions, allowing key events and touch events to be "injected" into the system by an otherwise unprivileged application. Other enhancements include service actions that can: 
 * Allow or prevent bindings to a service
 * Confirm that service binding is allowed
 * Allow or prevent service callers
 * Confirm that service calling is allowed
* **Enhanced [File Manager](../csp/file)** can download and expand archive files by from a local PC or a server.

> **IMPORTANT NOTE**:<br> 
> <u>**StageNow 3.2 supports only devices running Android 7.x Nougat and newer**</u>.<br>Support for Android 6.x Marshmallow (and older) is discontinued in StageNow 3.2.

-----

### Added in v3.1

> **IMPORTANT NOTE**:<br> 
> <u>**StageNow 3.2 supports devices running Android 6.x Marshmallow and newer only**</u>.<br>Support for Android 5.x Lollipop (and older) is discontinued in StageNow 3.2.

#### Enhanced User experience

**Xpert mode Enhancements**
* Profiles can now be edited as soon as steps/settings are viewable
* Profiles can be saved after clicking the "Continue" button the first time 
* A new “Cancel Changes” option reverts all changes to their original values
* An additional field was added for entering "user-friendly" step descriptions to help during profile review 

**Support for MX 8.2** provides the following enhancements:

* **Enhanced [UI Manager](../csp/ui)** adds these new features: 
 * Enable/disable long-press on HOME key
 * Enable/disable date in Notification panel
 * Enable/disable long press on Recent Apps header icon to control access to app info

**Support for MX 8.1** provides the following enhancements:
* **Enhanced [Power Manager](../csp/power)** adds these new actions:
 * Specify an on-device file to verify an OS update
 * Specify whether to suppress auto-reboot following an A/B upgrade
* **Enhanced [Battery Manager](../csp/battery)** adds these new actions:
 * Enable/disable use of Battery Swap Mode UI
 * Enable/disable “battery charging” LED
* **Enhanced [Bug Report Manager](../csp/bugreportmgr)** adds a new action:
 * Specify a time before expiration (in days) to store or email bug reports or send them to the cloud 
* **Enhanced [Cellular Manager](../csp/cellular)** adds these new actions:
 * Enable/disable user access to public land mobile network (PLMN) a device uses
 * Specify the MCC/MNC network PLMN LockSet
 * Show/hide PLMN lock UI
 * Determine the status of PLMN lock UI
 * Enable/disable Dual SIM Standby
 * Get the status of DSDS
* **Enhanced [DHCP Option Manager](../csp/dhcp)** adds these new actions:
 * Enable/disable requests for a custom DHCP option from server
 * Request or disable a specified DHCP Option
 * Enable/disable sending of a custom DHCP Option to server
 * Send or disable a specified DHCP Option
 * Send a value with a specified custom DHCP Option
* **Enhanced [License Manager](../csp/license)** adds these new actions:
 * Specify an Activation ID to return a license from the device
 * Specify server friendly name for returning one or all licenses and for deleting license source
 * Select the license source type to be used to return one or all licenses
* **Enhanced [Settings Manager](../csp/settingsmgr)** adds these new actions:
 * Enable/disable the slide out drawer for accessing Android system settings
* **Enhanced [UI Manager](../csp/ui)** adds these new actions: 
 * Enable/disable Split Screen mode
 * Enable/disable Do Not Disturb mode
 * Enable/disable Multi-user mode
* **Enhanced [Wi-Fi](../csp/wifi)** adds these new actions:
 * Enable/disable MAC address randomization
 * Enable/disable Call Admission Control
 * Enable/disable user control of Hotspot state (active/inactive)
* **New [AutoTrigger Manager](../csp/autotriggermgr) CSP** is used to configure automatic scan-triggering, which initiates scanning when a scan target is brought within proximity of the device sensor. Currently supports the Zebra PS20 Personal Shopper device only. 
* **New [DeviceCentral Manager](../csp/devicecentralmgr) CSP** allows configuration of settings on the device for Zebra Device Central, an enterprise tool for viewing connection state, battery status, firmware version and other device conditions from a central console.
* **New [Fota Manager](../csp/fotamgr) CSP** controls the Firmware Over The Air (FOTA) Client on the device, allowing administrators to perform OS updates on Zebra devices without a physical connection. The FOTA Client app comes preinstalled on supported devices and is configured to communicate with the Zebra update server.

-----

### Added in v3.0

**Support for Chinese language**. The StageNow tool and device client now support localization for the Chinese language and Chinese version of Windows. 

**Techdocs Chinese**. Techdocs, the technical documentation site for Zebra solutions, now offers a language selector for StageNow in the upper-right corner of the English-language screen. **Note**: The selector disappears after selecting the Chinese language. 

**Support for server-based device staging on devices with MX 4.4 and higher**.<br>
**IMPORTANT**: Network transport protocols are subject to the following MX dependencies: 
* **MX 4.4+ - FTP only**
* **MX 7.0+ - HTTP/HTTPS** 
* **MX 7.1+ - FTPS**

**Supports MX v8.0**, adding the following features:
* **Enhanced [App Manager](../csp/app)** adds these new actions:  
 * Clear Application Cache 
 * Enable/disable All GMS Applications on the "Safe to Disable" list
* **Enhanced [License Manager](../csp/license)** adds these new actions: 
 * Select a licensing file to be embedded in the XML
 * Select a preactivated license source 
 * Query product-specific license information
 * Specify product name to be queried
 * Select the method used to supply the license .bin file
* **Enhanced [Personal Dictionary](../csp/personaldictionary)** now accepts shortcuts when bulk-adding terms from a file.
* **Enhanced [Power Manager](../csp/power)** adds a new action:
 * Enable/disable PTT and scan buttons to wake the device from suspend mode 
* **Enhanced [Settings Manager](../csp/settingsmgr)** adds a new action: 
 * Enable/disable tethering and portable hotspot features
* **Enhanced [UI Manager](../csp/ui)** adds these new actions:
 * Enable/disable the Magnification Gesture
 * Show/hide the Virtual KeyBoard while Physical Keyboard is active

**Supports Windows 10 Pro** (English and Chinese)

-----

### Added in v2.10

* The [Wipe a Device guide](../Profiles/wipedevice) now includes instructions for bypassing the Android Setup Wizard following an Enterprise Reset. 

* **External Staging Server Support**
 * Staging and deployment content can now be hosted on a server or system other than the StageNow workstation
 * An external staging server can use FTP, FTPS, HTTP or HTTPS protocols 

* **Zebra VC80 devices can now be staged using a serial scanner (RS232)**

* **When staging Zebra TC20/TC25 devices, administrators can now prevent Analytics Manager from being disabled**

* **[Support for MX 7.2](../stagingprofiles/#mxselection)** adds the following Setting Types and features:

* [Audio Manager](../csp/audiomgr) new CSP:
 * Controls whether audio on a device plays only through a connected handset or through the handset and the built-in device speaker (supported on the Zebra VC80x only).
* [Display Manager](../csp/display) new feature:
 * On VC80 devices, adds the ability to force the display to “Stay Awake” and remain on.
* [Power Manager](../csp/power) new feature:
	* Turn ON/OFF “Doze Mode” energy saving features on the device. When enabled, only specially designated apps can prevent the device from entering a low-power state to preserve battery life. 
* [Remote Scanner Manager](../csp/rsm) new feature:
 * Supports RS-507 and DS-3608 scanners
* [Settings Manager](../csp/settingsmgr) new feature:
 * Enable/Disable application notification control on devices running Android Nougat

-----

### Additional information

**Included in the StageNow 3.0 download package**: 

* `staging_solution_signed.3.0.exe` - StageNow v3.0 Tool Installable 

* `StagingInstallGuide_V3.0.pdf` - StageNow v3.0 Install Guide 

### Compatibility Notes
 
* See the full list of [Zebra Android devices that support StageNow 3.0](../gettingstarted/)

* Zebra devices running Android Nougat and Marshmallow ship with the StageNow Client and support all device configuration options offered by the StageNow tool.

* The MX features supported by a given device depends on the versions of Android, OSX, and MX versions in the device BSP. Refer to the [MX feature matrix](/mx/compatibility/) to determine features supported by devices in your organization.    
 
* The free StageNow application can be downloaded and installed on any Windows 7 PC with no pre-requisite software and with no need to purchase, locate, license or install other components. 

-----

