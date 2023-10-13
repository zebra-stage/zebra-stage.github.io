---
title: Frequently Asked Questions
layout: guide.html
product: Device Tracker
productversion: "6.0"
---

### • Why can’t I access the Device Tracker web portal within my corporate network?

Your firewall/proxy may be blocking a required URL. Contact your IT administrator to verify that the required URLs from the [network requirements](../setup/#networkrequirements) are opened in your firewall/proxy. You can cross-check this by accessing the URL in a network that is not within the firewall or proxy. This helps to identify whether it is a firewall/proxy issue.

### • Why are many domains required to be allowed through my firewall or proxy? What are they used for?

The specified domains must be allowed through the firewall or proxy for Device Tracker to operate:

- `connectivitycheck.gstatic.com` (Required for Android to check internet connectivity.)
- `www.googleapis.com` (Required for Device Tracker to authenticate device communication with the cloud server.)
- `firestore.googleapis.com` (Required for Device Tracker to access the cloud database.)
- `cloudfunctions.googleapis.com` (Required for Device Tracker to connect with the cloud server.)
- `*.cloudfunctions.net` (Required for Device Tracker to access the cloud server.)
- `us-central1-[ProjectID].cloudfunctions.net` (Required for Device Tracker to connect with the cloud server, where `[ProjectID]` is supplied by Zebra during onboarding.)
- `[ProjectID].firebaseio.com` (Required for Device Tracker to access the cloud database, where `[ProjectID]` is supplied by Zebra during onboarding.)
- `[ProjectID]-default-rtdb.firebaseio.com` (Required for Device Tracker to access the cloud database, where `[ProjectID]` is supplied by Zebra during onboarding.)
- `*.firebaseio.com` (Required for Device Tracker to access the cloud database, where `*` represents multiple characters that changes dynamically over time.)
- `[ProjectID].firebaseapp.com` (Required for accessing password reset link, where `[ProjectID]` is supplied by Zebra during onboarding.)
- `[Web portal URL]` (Required to access the Device Tracker web portal, supplied by Zebra during onboarding.)

See [Network Requirements](../setup/#networkrequirements).

### • Why didn't I receive the password reset email?

The password reset is sent from the email address `zdtrksupport@zebra.com`. Contact your IT administrator check if you are permitted to receive an email from this email address.

### • Why do I get an error from StageNow during deployment?

If a StageNow error is encountered during deployment, such as one of the following:

- “The profile is referencing an MX setting that does not exist on the device”
- “A setting or service failed to register with the device on start-up”

Make sure that Device Tracker is launched and all [required permissions](../setup/) are granted. Also, make sure the device OS version is _not_ Android 11 LG update 11-20-18.00; if so, update to a later version.

### • Why does Device Tracker on my device display the error “Server not configured”?

Wi-Fi must be enabled and the server connectivity settings (provided by Zebra Services during onboarding) must be deployed on the device. Refer to Device Tracker [installation instructions](../setup/).

### • Why do I get an error indicating the device has not registered with MX Framework?

This error occurs if Device Tracker MX XML file is not deployed to the device and Device Tracker is not launched at least once for it to accept the configuration. Ensure that Device Tracker is launched before deploying the configuration as stated in [Install through EMM](../setup/#instalthroughemm). If the error continues, add a delay (e.g. a few seconds) before deploying the server connectivity settings XML.

### • Why can’t the device connect to the server?

The device is unable to communicate with the cloud server due to network issues.
Check the following:

- Enable Wi-Fi on the device and connect the device to the internet.
- Verify the device can reach the Device Tracker URLs.
- Verify the Device Tracker domain names and ports are opened in the firewall/proxy for the device to communicate with the cloud server.
- To identify whether there is a firewall/proxy issue, access the URL in a network that is not within the firewall or proxy.

For more details, see [Network Requirements](../setup/#networkrequirements).

### • Why do I get a license error “Checking licenses”?

Login to the Device Tracker web portal and verify the available license count from the [License Summary](../dashboard/#licensesummary). If you purchased a license and the available license count shows as zero, click **Sync Licenses** in the web portal. If the issue persists, contact Zebra Technical Support.

### • Why do I get an error while validating SSO after I configured all SSO settings in the web portal?

<!-- WAIT FOR ELS IN NEXT RELEASE
Check the following:
* Verify the Device Tracker App and Enterprise Login Screen App parameters are registered properly in your SSO system.-->

OAuth 2.0 with TLS Certificate requires public and private certificates to be deployed to Device Tracker and your SSO service. Check the following:

- Make sure the public and private certificates were sent to Zebra services and confirmation was received from Zebra that the certificates are deployed to the Device Tracker Cloud.
- Make sure your SSO IT deployed the TLS public certificate to your SSO server to allow the Device Tracker client to be trusted.

### • My SSO server does not support TLS Certificate. How do I integrate SSO?

The current version of Device Tracker only supports OAuth 2.0 with TLS certificate as the client authentication type.

### • After activating SSO, why is "server connection failed" error seen on my device?

To use SSO, Device Tracker 5.1 or higher is required on the device. To recover, clear the Device Tracker application cache either manually through Android settings or using [App Manager](/mx/appmgr/) through MX.

### • Why can’t I access Device Tracker web portal with SSO?

If error “Your account has not been authorized to access Device Tracker. Please contact your system administrator” is encountered after logging in to the Device Tracker web portal with SSO, one of the following could apply:

- Your User ID is not added to the Device Tracker system
- The User ID added in Device Tracker does not match with the user information returned within the SSO response.

Contact your administrator to add your user ID to the Device Tracker system, or verify your user ID was added to Device Tracker.

### • Why does the SSO server show invalid user ID or password?

Device Tracker does not manage SSO user IDs or passwords. Only existing SSO user IDs from your SSO provider can be duplicated in the Device Tracker system. Contact your SSO IT administrator to make sure the SSO user ID and password in Device Tracker matches with the one in your SSO system.

### • Why is my device stuck in the Checkout screen?

[Checkin/Checkout](../config/#checkincheckoutdevice) is enabled by your administrator, requiring the user to scan their user barcode to access the device. If a Barcode Prefix is defined, the barcode being scanned must contain the specified prefix. If the problem persists, try rebooting the device.

### • Why is the proximity indicator is not displayed on my device?

If the proximity indicator is not displayed showing how close or how far the device in use is located in relation to the lost device, the following are possible reasons:

- The lost device is not within the Bluetooth range.
- The lost device turned off and does not have secondary BLE within the device or its battery.
- The lost device has the secondary BLE capability, but it is not enabled on the lost device.
- The lost device has the secondary BLE capability, but battery is completely drained.

### • Why am I unable to play a sound on the lost device during the finding process?

Possible reasons:

- The lost device is not connected to the server due to network issues.
- The device is powered off.
- Media notification channels are turned off on the device.

### • Why am I unable to upgrade Device Tracker client app from version 4.2 to a newer version?

The Device Tracker client package name was changed starting with Device Tracker version 5.0. An upgrade is not supported with this version; please uninstall the previous version and then install the new version.

### • Why am I unable to receive daily End of Day reports?

Make sure [End of Day reporting](../config/#endofdaydevicesummary) is enabled and the email ID is configured properly. End of Day reports are sent from email address `zdtrksupport@zebra.com`. Contact your IT administrator to check if the email address, user ID and attachments are being blocked by your email or proxy server.

---

## See Also

- [Licensing](../license)
- [Install & Setup](../setup)
- [Secondary BLE](../secondaryble)
- [Configuration](../config)
- [Track Devices](../use)
