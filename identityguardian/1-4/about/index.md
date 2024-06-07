---
title: About Identity Guardian
layout: guide.html
product: Identity Guardian
productversion: "1.4"
---

## Overview

Zebra **[Identity Guardian](https://www.zebra.com/identityguardian)** offers a solution for implementing authentication strategies, facilitating user access to devices. Catering to both enterprise-shared and personally assigned mobile computers, it offers a secure login method that ensures easy device access while maintaining user and corporate data security. Utilizing facial biometrics and single sign-on (SSO) compatibility, it provides seamless and secure access to devices and applications.

There are 2 modes of operation:

- In the [shared devices](../usage/#shareddevice) mode, user data is securely encrypted and contained within a personalized barcode. This barcode is generated through facial recognition or a passcode set by the user and can be easily discarded to erase personal data.
- In the [personally assigned device](../usage/#personallyassigneddevice) mode, user data is securely embedded within the Android framework, making it inaccessible even to the organization.

<!--Zebra's **[Identity Guardian](https://www.zebra.com/identityguardian)** simplifies device authentication by combining facial biometric recognition, multifactor login, and Single Sign-On (SSO) for a personalized role-based experience. It utilizes facial biometrics to unlock mobile devices securely, regardless of whether they are shared or personally assigned. If facial biometrics is not the preferred choice, a unique barcode or PIN offers an alternative secure access method.  enables secure and personalized user access to mobile devices by combining biometric authentication with multifactor login protocols. Facial biometrics unlock the mobile devices securely, regardless of whether they are shared or personally assigned. For users who prefer alternatives to facial biometrics, a unique barcode or PIN offers secure access options.
-->

Key benefits of Identity Guardian:

- **User Data Protection -** Multiple layers of protection ensure that employee data is protected, while employees have control over their data.
- **Application Authentication -** Integration with identity providers (IdPs) simplifies authentication by only requiring users to log in once and then leveraging single sign-on (SSO) to streamlines the process.
- **Facial Biometrics -** Users seamlessly and securely unlock their mobile device using facial biometrics.
- **Multifactor Login -** For enhaanced security, users can be prompted to provide multiple authentication factors to sign into a device: facial recognition, user passcode, and/or SSO authentication
- **Accountability -** Empowers administrators with comprehensive visibility into devices and their associated users.
- **Personalization -** Enables organizations to customize on-device experiences that are specifically tailored to align with the roles of the users.

<!-- With identity provider (IdP) integration, Identity Guardian simplifies application authentication. Users only need to sign in once using [SSO](../setup). After that, SSO manages the rest of the application sign-ins, streamlining the process.

Using [managed configurations](../mc/) through Zebra’s DNA Cloud platform or Enterprise Mobility Mangement (EMM), organizations can customize device controls and access dashboard visibility into device usage, including who has signed in/out of a device, usage times, etc. enforcing user accountability.
-->

---

## Main Features

Identity Guardian main features:

- Supports user enrollment and authentication for shared and personally-assigned devices
- Multi-factor authentication support:
  - Facial biometric authentication
  - User passcode authentication
  - SSO authentication using Microsoft Entra ID or PingID
- Supports other apps and device events that invoke the lock screen
- Installation and configuration can be performed through Zebra DNA Cloud
- Device usage details and user information is visible from the Zebra DNA Cloud console

---

## New in 1.4

- The new [Lock Screen Configuration](../mc/#lockscreenconfiguration) feature allows selected applications to appear in the foreground when the device is locked. This should be limited to specific apps, such as the phone app, which would allow phone calls to be received.
- Users can now create a numeric-only passcode for authentication, rather than alphanumeric. See [Passcode Rules](../mc/#enrollmentconfiguration).
- The username now appears on the [lock screen](../usage/#devicesignin), along with the device name and serial number.
    <img alt="image" style="height:250px"  src="lock-screen-user.png" />
<!-- - **Added single sign-on (SSO) authentication support for [OKTA](../setup/#okta) identity provider (iDP).**
-->

---

## Version History

### New in 1.3

- **Now available for download from Google Play.**
- The **[Authentication Data Storage](../mc/#authenticationconfiguration) feature, formerly a preview, is now officially available.** It provides temporary storage for user barcode data, requiring just a single scan for initial usage during a work shift. Based on admin configurations, device access may trigger primary and secondary authentication.
- **Resolved Issues:**
  - **Resolved an intermittent issue where devices displayed a “Scan to Unlock” button on the blocking screen instead of the “Unlock” button** when device authentication was set to a mode that does not require the end user to scan a barcode.
  - **Resolved an issue where end user was not able to login to the device using Admin Bypass Passcode as the fallback authentication.**
  - **On TC22 or TC27 devices, an error message no longer appears requiring the MDNA license following a device restart.**
- **Known Issues:** - **Uninstalling Identity Guardian from the blocking screen disables the home button on the device.** To remedy this, either reinstall Identity Guardian or set it to enrollment mode before uninstallation. - **When installing Identity Guardian in enrollment mode from VMWare Workspace ONE UEM (AirWatch) EMM,** the authentication screen may appear instead of the expected enrollment screen.

### New in 1.2

- **Integration of Zebra [Device Tracker](/devicetracker) with Identity Guardian client.** Device Tracker v6.2 now offers full support for Identity Guardian to collect device checkin/checkout data and single sign-on (SSO) support.
- **Retrieve multifactor authentication information from the [Current and Previous User Session API](../api/#retrieveusersession).**
- **Preview a new feature, [Authentication Data Storage](../mc/#authenticationconfiguration), allowing for temporary storage of user authentication data on the device, eliminating the need for repeated barcode scans on a shared device.** A one-time scan is sufficient for initial use. Depending on the admin configuration, subsequent device access may prompt primary/secondary authentication. Full functionality of this feature will be available in the upcoming release of Identity Guardian.
- **Added support for MC9300, MC9400, MC3300, PS20J, L10A, TC8300, VC8300, and WS50.** See the [Zebra Support Portal](https://www.zebra.com/us/en/support-downloads/software/utilities/identity-guardian.html) for the list of supported devices.
- **Resolved Issues:**
  - Enhanced Identity Guardian blocking screen behavior to appear quicker after device reboot.
  - Resolved an issue where Identity Guardian’s managed configuration was not loading from the EMM UI.
  - Ping Identity SSO configurations now consistently function with Identity Guardian when set up from EMMs.
- **Known Issues:**
  - **If a device's authentication is configured to a mode that does not require a barcode scan, it may intermittently display the message "Scan to Unlock" instead of simply "Unlock".** This obstructs the function of other authentication methods. A workaround is to lock and then unlock the device, which restores the functionality of alternative authentication modes.
  - **On TC22 or TC27 devices, occasionally an error message may appear requiring the MDNA license following a device restart.**

### New in 1.1

- **Introduced [SSO Mapping](../mc/#ssomapping) managed configuration** encompassing options related to SSO user role mapping, originally part of SSO Authentication Configuration.
- **Resolved Issues:**
  - Enhanced Identity Guardian blocking screen behavior to appear quicker after device reboot.
  - Resolved an issue where Identity Guardian’s managed configuration was not loading from the EMM UI.
  - Ping Identity SSO configurations now consistently functions with Identity Guardian when set up from an EMM.
- **Known Issue:** On TC22 or TC27 devices, occasionally an error message may appear requiring the MDNA license following a device restart.

<!-- // Remove known issue from Microsoft
    * **If Microsoft Entra ID is used as the SSO provider, Microsoft applications such as Teams, Word, etc., are not using the shared log-in session to facilitate single sign-on.** Consequently, users are required to re-enter their login credentials when using these Microsoft apps.
-->

---

## Usage Notes

- **Screen lock in Android device settings must be set to “None.”** Other types of screen locks, such as swipe or pin, are not supported.
- **While performing facial biometric authentication on a Zebra ET45,** the device must not be rotated.

---

## See Also

- [Licensing](../licensing/)
- [Setup](../setup)
- [User Guide](../usage)
- [Managed Configurations](../mc)
- [APIs](../api/)
- [FAQ](../faq/)
