---
title: About Identity Guardian
layout: guide.html
product: Identity Guardian
productversion: "1.1"
---

## Overview

Zebra's **[Identity Guardian](https://www.zebra.com/identityguardian)**
provides a secure login solution for both enterprise shared or personally assigned mobile computers, ensuring not only easy access to devices but also the security and privacy of user and corporate data. It leverages facial biometrics and single sign-on (SSO) compatibility for effortless and secure access to devices and applications.

<!--Zebra's **[Identity Guardian](https://www.zebra.com/identityguardian)** simplifies device authentication by combining facial biometric recognition, multifactor login, and Single Sign-On (SSO) for a personalized role-based experience. It utilizes facial biometrics to unlock mobile devices securely, regardless of whether they are shared or personally assigned. If facial biometrics is not the preferred choice, a unique barcode or PIN offers an alternative secure access method.  enables secure and personalized user access to mobile devices by combining biometric authentication with multifactor login protocols. Facial biometrics unlock the mobile devices securely, regardless of whether they are shared or personally assigned. For users who prefer alternatives to facial biometrics, a unique barcode or PIN offers secure access options.
-->

In a [shared device environment,](../usage/#shareddevice) user data is securely encrypted and encapsulated within a personal barcode, generated via facial recognition and can be easily discarded to erase personal data. On [personally assigned devices,](../usage/#personallyassigneddevice) the user data is securely embedded within the Android framework, making it inaccessible even to the organization.

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

## New in Identity Guardian 1.1

* Now available for download from the Play Store.
* **Resolved Issues:**
    * Enhanced Identity Guardian blocking screen behavior to appear quicker after device reboot.
    * Resolved an issue where Identity Guardian’s managed configuration was not loading from the EMM UI.
    * Ping Identity SSO configurations now consistently functions with Identity Guardian when set up from an EMM.
* **Known Issues:** 
    * **If Microsoft Entra ID is used as the SSO provider, Microsoft applications such as Teams, Word, etc., are not using the shared log-in session to facilitate single sign-on.** Consequently, users are required to re-enter their login credentials when using these Microsoft apps.
    * **On TC22 or TC27 devices, occasionally an error message may appear requiring the MDNA license** following a device restart.

---

## Usage Notes

- **Identity Guardian can be installed and configured** from Zebra DNA Cloud (My Apps > Zebra Collection), Zebra StageNow or a company’s own EMM system.  
- **Screen lock in Android device settings must be set to “None.”** Other types of screen locks, such as swipe or pin, are not supported.
- **While performing facial biometric authentication on a Zebra ET45,** the device must not be rotated.
- **When using the 42Gears EMM system,** apps installed via Zebra DNA in app update mode must be set as high priority.


---

## See Also

- [Licensing](../licensing/)
- [Setup](../setup)
- [User Guide](../usage)
- [Managed Configurations](../mc)
- [APIs](../api/)
