---
title: Setup
layout: guide.html
product: Identity Guardian
productversion: "1.1"
---

## Overview

**Through either [Zebra DNA Cloud](/zebradna) or Enterprise Mobility Management (EMM), administrators establish usage policies and controls for Identity Guardian via [Managed Configurations](../mc/).** This enables companies to personalize device restrictions and access. Additionally, administrators gain insight into usage details such as user sign-in/sign-out events and usage times through a dashboard, promoting user accountability.

**Identity Guardian streamlines application authentication by integrating with the identity provider (IdP).** Users need only to sign in once with [single sign-on (SSO)](#sso), which then handles subsequent application sign-ins, streamlining the process.

**It is necessary to install Identity Guardian app on the devices.**

---

## Requirements

Identity Guardian requirements:

- Zebra devices running **Android 11 or higher** are supported. See [Zebra Support Portal](https://www.zebra.com/us/en/support-downloads/software/utilities/identity-guardian.html) for the supported devices.
- For **biometric authentication,** a front-facing camera is required on the device
- **Licenses:**
  - An **Identity Guardian license** is required for advanced features including facial biometric authentication, Single Sign-On (SSO) support and device API support. See [Licensing](../licensing/).
  - Zebra Professional-series devices require a **[Mobility DNA Enterprise license](/licensing)** for basic functionality

SSO requirement:

- Support is available for **integration with both Microsoft Entra ID (formerly Azure Active Directory) and PingID platforms** with OAUTH and OAUTH+OIDC authentication protocols.

---

## Download

Download and install Identity Guardian from the [Zebra support portal](https://www.zebra.com/us/en/support-downloads/software/utilities/identity-guardian.html).

---

## SSO

Identity Guardian integrates with identity providers (IdPs) simplifying authentication by only requiring users to log in once, and then leveraging single sign-on (SSO) to streamline the process. This single login grants users to gain access to multiple applications, eliminating the need to keep track of multiple logins for each app. There are 2 types of IdPs supported: Microsoft Entra ID and PingID.

### Microsoft Entra ID

This section provides guidance to integrate Identity Guardian with Microsoft Entra ID (formerly Azure Active Directory):

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[I. Register Zebra Identity Guardian](#iregisterzebraidentityguardian)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[II. Configure SSO for Shared Devices](#iiconfiguressoforshareddevices)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[III. Configure Microsoft Authenticator App](#iiiconfiguremicrosoftauthenticatorapp)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[IV. Configure Zebra Identity Guardian App](#ivconfigurezebraidentityguardianapp)<br />

<br />

#### I. Register Zebra Identity Guardian

**To establish a trust relationship between Identity Guardian and the Microsoft identity platform, register Zebra Identity Guardian** as an Android application in Microsoft Entra ID (IdP). _Consult Microsoft's documentation for guidance on registering an application with the Microsoft identity platform._

Please ensure to enter or select the following when registering Identity Guardian:

- For the supported account type, select "Single tenant."
  <img alt="image" style="height:525px" src="single-tenant.png" />
- When configuring the Android app, enter the following:
  - **Package name:** com.zebra.mdna.els
  - **Signature hash:** KqmK9tYXpw+eW2lke7US3iG9EAQ=
    <img alt="image" style="height:450px" src="config-android-app.png" />
- Download the code sample and save the file as `auth_config_single_account.json`. This will be used in a subsequent step to configure the app settings on the device.
  <img alt="image" style="height:450px" src="download-code-sample.png" />
  <br />

#### II. Configure SSO for Shared Devices

**If Microsoft Authenticator is used for single sign-on (SSO) on shared devices, it is possible to integrate a third-party device compliance partner solution with Microsoft Intune.** This allows for the collection of device compliance data in conjunction with Intune's own compliance results. The combined data can be used to formulate access policies, providing enhanced protection for your organization and its data. Examples of third-party device compliance partners include solutions such as SOTI MobiControl, VMware Workspace ONE UEM (formerly AirWatch), and others. _Consult your EMM or Microsoft's documentation for guidance on adding a third-party device compliance partner in Intune._

<br />

#### III. Configure Microsoft Authenticator App

**For optimal use of shared device mode with SSO through Microsoft Authenticator, ensure the Microsoft Authenticator app is installed on the devices.** This facilitates automatic SSO single sign-in and single sign-out across apps on the device.

To install and configure Microsoft Authenticator app:

1.  Download and install the Microsoft Authenticator app from Google Play via an EMM, such as SOTI MobiControl or VMware Workspace ONE UEM.
2.  In the EMM, enable **Shared Device Mode** and enter the **Shared Device Mode Tenant Identifier** (obtained from the Microsoft Entra ID).

        <img alt="image" style="height:400px" src="managed-config-shared-device.png" />

        _SOTI MobiControl Managed App Config_

    <br />

#### IV. Configure Zebra Identity Guardian App

**To enable user access to the device through SSO, install and set up Identity Guardian on the devices:**

1. Deploy and install Zebra Identity Guardian app on the devices.
2. Launch the app using an EMM. _This step must be performed at least once._
3. Enter the [Managed Configuration](../mc) settings for the app via your EMM:
   - Select the application mode:
     - **Application Mode:** Authentication
       <img alt="image" style="height:375px" src="managed-config-app-mode.jpg" />
       _zDNA Cloud Managed Config_
   - Configure the Verification Setup to validate the user access:
     - **Primary Authentication Factor:** SSO
     - **Secondary Authentication Factor:** [Select FACE, PASSCODE, SSO or NONE]
     - **Fallback Authentication Factor:** [Select FACE, PASSCODE, NONE, SSO or ADMIN BYPASS PASSCODE]
     - **Primary Authentication Timeout:** [Enter value in ms, e.g. "300000"]
     - **Fallback Authentication Timeout:** [Enter value in ms, e.g. "300000"]
       <img alt="image" style="height:450px" src="managed-config-verification-setup.jpg" />
       _zDNA Cloud Managed Config_
   - Configure the Lock-screen Event options:
     - **On Unlock:**
       - **Verification Setup:** [Enter the desired authentication scheme, e.g. "Verification Setup1"]
     - **On Reboot:**
       - **Verification Setup:** [Enter the desired authentication scheme, e.g. "Verification Setup1"]
     - **On AC power connected:**
       - **Verification Setup:** [Enter the desired authentication scheme, e.g. "Verification Setup1"]
     - **On AC power disconnected:**
       - **Verification Setup:** [Enter the desired authentication scheme, e.g. "Verification Setup1"]
     - **On device manual check in:**
       - **Verification Setup:** [Enter the desired authentication scheme, e.g. "Verification Setup1"]
     - **On user change: Verification Setup:** - **Verification Setup:** [Enter the desired authentication scheme, e.g. "Verification Setup1"]
       <img alt="image" style="height:400px" src="managed-config-lock-screen.jpg" />
       _zDNA Cloud Managed Config_
   - Configure the SSO Authentication Configuration for the app to communicate with Microsoft SSO to authenticate the user: - **Single Sign On Provider:** Microsoft - **Authentication Protocol:** OAuth 2.0 (OIDC) - **Scope:** [Enter the string based on the SSO server settings] - **Configuration Settings:** [Enter the following string, but replace "client_id" and "authority_url" with your values from `auth_config_single_account.json` file downloaded from step I.]
     <pre class="prettify">
         <code>
             {
                 "client_id" : "[ENTER YOUR CLIENT ID]",
                 "authorization_user_agent" : "DEFAULT",
                 "redirect_uri" : "msauth://com.zebra.mdna.els/KqmK9tYXpw%2BeW2lke7US3iG9EAQ%3D",
                 "account_mode" : "SINGLE",
                 "broker_redirect_uri_registered": true,
                 "shared_device_mode_supported": true,
                 "authorities" : [
                     {
                         "type": "AAD",
                         "authority_url": "[ENTER YOUR AUTHORITY URL]"
                     }  
                 ]
             }
         </code>
     </pre>
     <img alt="image" style="height:450px" src="managed-config-sso-ms.jpg" />
     _zDNA Cloud Managed Config_
4. If mapping the SSO response to application-specific roles, enter the following (see [Managed Configurations](../mc) for more information):
   - **Configuration Role Identification -** Enables the recognition and mapping of the Single Sign-On (SSO) response to application-specific roles. Click **Add Role Identifier** as needed. - **Role Identifier -** Establishes links between roles in SSO responses and their corresponding roles within the Identity Guardian app. - **Identity Guardian Role Name -** Enter the Identity Guardian user role to be assigned based on SSO response during user sign-in - **Key-value Pair for Role Assignment -** Add one or more SSO key-value pairs to identify and map users to a predefined Identity Guardian user role. Click **Add SSO Key-Value Pair** as needed. - **SSO Key-Value Pair -** Choose whether the SSO response, which contains the user key and values, should be mapped to a corresponding user role in Identity Guardian - **SSO Key -** Enter the SSO key to map it to an Identity Guardian role. - **SSO Value -** Enter the SSO value(s) to map to the Identity Guardian role. Use commas to separate multiple entries.
     <img alt="image" style="height:450px" src="managed-config-roleID.jpg" />
     _zDNA Cloud Managed Config_
5. See [Managed Configurations](../mc) to configure any other non-SSO settings.
6. Deploy the Managed Configurations to the devices through your EMM.

When a device gets updated with the new configurations, Zebra Identity Guardian activates the lock screen. The user is then required to authenticate themselves using Single Sign-On (SSO) to gain access to the device. See [User Guide](../usage/) for more information.

---

### PingID

This section provides guidance to integrate Identity Guardian with PingID.

**To enable user access to the device through SSO, install and set up Identity Guardian on the devices:**

1. Deploy and install Zebra Identity Guardian app on the devices.
2. Launch the app using an EMM. _This step must be performed at least once._
3. Enter the [Managed Configuration](../mc) settings for the app via your EMM:
   - Select the application mode:
     - **Application Mode:** Authentication
       <img alt="image" style="height:375px" src="managed-config-app-mode.jpg" />
       _zDNA Cloud Managed App Config_
   - Configure the Verification Setup to validate the user access:
     - **Primary Authentication Factor:** SSO
     - **Secondary Authentication Factor:** [Select FACE, PASSCODE, or NO_COMPARISON]
     - **Fallback Authentication Factor:** [Select FACE, PASSCODE, NONE, SSO or ADMIN BYPASS PASSCODE]
     - **Primary Authentication Timeout:** [Enter value in ms, e.g. "300000"]
     - **Fallback Authentication Timeout:** [Enter value in ms, e.g. "300000"]
       <img alt="image" style="height:450px" src="managed-config-verification-setup.jpg" />
       _zDNA Cloud Managed Config_
   - Configure the Lock-screen Event options:
     - **On Unlock:**
       - **Verification Setup:** [Enter the desired authentication scheme, e.g. "Verification Setup1"]
     - **On Reboot:**
       - **Verification Setup:** [Enter the desired authentication scheme, e.g. "Verification Setup1"]
     - **On AC power connected:**
       - **Verification Setup:** [Enter the desired authentication scheme, e.g. "Verification Setup1"]
     - **On AC power disconnected:**
       - **Verification Setup:** [Enter the desired authentication scheme, e.g. "Verification Setup1"]
     - **On device manual check in:**
       - **Verification Setup:** [Enter the desired authentication scheme, e.g. "Verification Setup1"]
     - **On user change: Verification Setup:** - **Verification Setup:** [Enter the desired authentication scheme, e.g. "Verification Setup1"]
       <img alt="image" style="height:400px" src="managed-config-lock-screen.jpg" />
       _zDNA Cloud Managed Config_
   - Configure the SSO Authentication Configuration: - **Single Sign On Provider:** PingId - **Authentication Protocol:** OAuth 2.0 (OIDC) - **Scope:** openid email profile - **Userid Identifier:** [Specify the user key for identifying the signed-in user] - **Configuration Settings:** [Enter the specified string, but replace the following values with those from your own SSO response: logoutURL, logoutURL, tokenURL, authorizationURL, clientId, userInfoUrl]
     <pre class="prettify">
     <code>
     {
     "redirectURI" : "com.zebra.mdna.els:/loginComplete",
     "logoutURL" : "[enter your logout URL]",
     "logoutURL" : "[enter your revoke URL]",
     "tokenURL" : "[enter your token URL]",
     "authorizationURL" : "[enter your authorization URL]",
     "clientAuthType" : 0,
     "clientId" : "[enter your clientID]",
     "certificatePhrase" : "",
     "userInfoUrl" : "[enter your serInfo URL]",
     "certificate" : ""
     }
     </code>
     </pre>
     <img alt="image" style="height:450px" src="managed-config-sso-ping.jpg" />
     _zDNA Cloud Managed App Config_
4. If mapping the SSO response to application-specific roles, enter the following (see [Managed Configurations](../mc) for more information):
   - **Configuration Role Identification -** Enables the recognition and mapping of the Single Sign-On (SSO) response to application-specific roles. Click **Add Role Identifier** as needed. - **Role Identifier -** Establishes links between roles in SSO responses and their corresponding roles within the Identity Guardian app. - **Identity Guardian Role Name -** Enter the Identity Guardian user role to be assigned based on SSO response during user sign-in - **Key-value Pair for Role Assignment -** Add one or more SSO key-value pairs to identify and map users to a predefined Identity Guardian user role. Click **Add SSO Key-Value Pair** as needed. - **SSO Key-Value Pair -** Choose whether the SSO response, which contains the user key and values, should be mapped to a corresponding user role in Identity Guardian - **SSO Key -** Enter the SSO key to map it to an Identity Guardian role. - **SSO Value -** Enter the SSO value(s) to map to the Identity Guardian role. Use commas to separate multiple entries.
     <img alt="image" style="height:450px" src="managed-config-roleID.jpg" />
     _zDNA Cloud Managed Config_
5. See [Managed Configurations](../mc) to configure any other non-SSO settings.
6. Deploy the Managed Configurations to the devices through your EMM.

When a device gets updated with the new configurations, Zebra Identity Guardian activates the lock screen. The user is then required to authenticate themselves using Single Sign-On (SSO) to gain access to the device. See [User Guide](../usage/) for more information.

---

## See Also

- [About Identity Guardian](../about)
- [Licensing](../licensing/)
- [User Guide](../usage)
- [Managed Configurations](../mc)
- [APIs](../api/)
