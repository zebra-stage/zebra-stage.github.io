---
title: About NFC VAS
layout: guide.html
product: NFC VAS
productversion: "1.0"
---

## Overview

**Apple VAS** is a system designed by Apple to provide NFC enabled passes on Apple devices such as iPhone and AppleWatch. Companies that want to deploy NFC enabled passes will work with Apple to obtain the required NFC permissions that are needed or work with a company that can issue NFC enabled passes.

The **Zebra NFC VAS API** is an Android library built on top of the existing Android NFC APIs. The NFC VAS API provides simplified configuration and control of the processes required for accessing a VAS pass stored in a mobile device. This guide discusses the APIs available for NFC VAS.

---

## Requirements

* Apple VAS certified devices - need list (requires special NFC chip with ECP polling)

---

## NFC Pass

An NFC enabled pass will appear in the user’s Apple Wallet. This pass will look similar to any other pass in the wallet, but will have an NFC indicator in the lower right corner of the pass. From the deployment perspective, an NFC pass is created in a similar manner to any other Apple Wallet pass. There is only a small additional component to identify an NFC enabled pass. This is the NFC top-level key in the pass description. This key contains the message and an encryption public key (optional). All other elements in the pass are the same as for non-NFC passes. 

The information associated with a pass includes:

* **Pass Type Identifier -** a string of the recommended form pass.com.developer.appname. The Pass Type Identifier is used to search for passes in a user’s Apple Wallet. A reader will specify one or more Pass Type Identifiers and only passes that match will be retrieved.
* **MerchantID -** the merchant ID is a hash value, calculated from the Pass Type Identifier. There is a one to one correspondence between the Pass Type Identifier and the MerchantID. Because of this one to one correspondence, supplying the Pass Type Identifier is sufficient when working with the VAS SDK. The MerchantID will be calculated internally by the SDK.
* **Private Key -** the NFC message is encrypted by the user’s Apple device prior to being communicated to the reader terminal. The key used to encrypt the message is the encryption public key, provided in the json description for the pass. To decrypt the pass, the Zebra NFC VAS SDK needs the associated Private Key. This private key is obtained at the time of pass creation, either by the developer with the NFC permissions from Apple for creating the pass, or from the company that issued the NFC enabled pass. If no private key is provided to the SDK, the SDK will return the encrypted message and it will be up to the developer to decrypt it. This might include for example, sending the encrypted pass to a back end server to be decrypted and processed.
* **Merchant URL -** (OPTIONAL) passes are often used as loyalty cards. In a case where a customer is not yet a loyalty member, the user could tap the reader and the Merchant URL would be communicated to the user’s device and direct the user to a sign up page. There are specific server APIs and processes required to support this. These specifics are beyond the scope of this document.
* **Filter -** (OPTIONAL) a company might issue passes for many different reasons and or uses. The filter provides a component to allow a company to issue many similar passes, with identifiable differences. An example use case might be a season of tickets to a sporting event. The same company issues all the tickets, each ticket should look the same, the only difference would be the date that access should be allowed. The filter could be used to identify any combination of dates. For example, if there were 4 possible games. The developer could assign each game one bit in the filter. The pass could be good for any or all of the 4 games, based on which bit was set. The reader would then specify a filter with one bit set for the current game and also specify that the filter should be treated as a bit-mask. Any pass that had the bit set for the current date would be read. Any pass that did not have the bit set would be skipped.



---

## See Also

