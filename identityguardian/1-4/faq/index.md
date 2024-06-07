---
title: Frequently Asked Questions
layout: guide.html
product: Identity Guardian
productversion: "1.4"
---

## User Sign-In/Authentication

### Q: If the device loses network connectivity, can users still sign into the device?

Network connectivity is not required for the user to sign into the device, with the exception of SSO authentication. Since the idP manages SSO, it necessitates a network connection. The device itself handles the comparison and logic for barcode, facial recognition, and passcode entry.

### Q: Is a barcode required for user authentication?

Shared devices require a barcode to store user data for authentication. The only exception is when single sign-on (SSO) is implemented, eliminating the need for a barcode. However, for personally assigned devices, barcodes are not utilized. Instead, user data is securely stored within the isolated storage of Identity Guardian on the Android platform.

### Q: What if the shared device user loses their barcode?

If the user of a shared device loses their barcode, the only way to recover is to retrieve the barcode from the designated folder on the device: `/enterprise/usr/Profiles`

### Q: If the device is shared among multiple users in a single shift – for example, one nurse grabs another nurse’s device to assist with a patient – how do I know that handoff has occurred?

To ensure a smooth device handoff, a policy incorporating user authentication via barcode and biometric scan (or passcode entry) should be implemented to ensure accountability. This facilitates an automatic profile transition, granting users access to their unique profiles and apps. However, this is only possible if the device screen is locked. Thus, new users receiving a device with an unlocked screen must lock and authenticate themselves. Clear communication of this procedure through the organization's policy is essential for adherence to proper handoff protocol.

### Q: If an admin bypass code is used, how is user accountability tracked?

If the primary and/or secondary authentication methods fail, and an admin bypass code is implemented as a fallback, user accountability is not possible because no user is logged in during this process.

### Q: What are the PIN/passcode character entry restrictions?

This is defined by the administrator when setting up the passcode rules in the Enrollment Configuration.

### Q: How does Identity Guardian support roles?

Since Identity Guardian can include a user’s role, a unique launcher experience can be created based on different user roles through the Zebra [Enterprise Home Screen (EHS)](/ehs) application. Administrators can define multiple layouts tailored to specific roles, ensuring a personalized experience upon device login.

---

## Facial Biometrics

### Q: Is facial biometrics required?

Your administrator can opt to enforce other forms of authentication other than facial biometrics, for example passcode or SSO. This applies to both shared or personally assigned devices.

### Q: Are device users informed they are opting into biometrics?

Yes, Identity Guardian provides a Terms and Conditions disclaimer to the user that they must accept to use the biometric portion of the solution.

### Q: Can I customize the terms a user agrees to when using Biometric?

Yes, an organization can include their own custom Terms and Conditions alongside Zebra’s.

---

## Data Security

### Q: Where is device user data stored?

For shared Zebra Android devices, the user data is stored in an encrypted barcode that the user holds and manages. For personally assigned devices, user data is encrypted and stored in the Identity Guardian app’s sandbox within the Android framework, which is protected and only accessible by the app.

### Q: How do we ensure the barcode encryption is unique?

Organizations can use their own key to encrypt the data, ensuring only their devices can read the barcode data.

---

## Device Usage Visibility

### Q: What visibility does Zebra DNA Cloud provide into device usage via Identity Guardian?

The [Zebra DNA Cloud](/zebradna) has visibility into which users have device access profiles, including information on when these profiles were created, last used, and the specific device(s) they were utilized on, among other data points.

---

## See Also

- [Licensing](../licensing/)
- [Setup](../setup)
- [User Guide](../usage)
- [Managed Configurations](../mc)
- [APIs](../api/)
