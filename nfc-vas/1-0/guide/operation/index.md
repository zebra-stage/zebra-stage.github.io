---
title: Operation
layout: guide.html
product: NFC VAS
productversion: "1.0"
---

## Overview 

From an application developer’s perspective, there are three main components to the SDK:
1. **VasConfig -** configuration object
2. **ZebraNfcVas -** operational core
3. **Pass -** an object representing the received pass

There is one or more configuration objects (VASConfig), there is one ZebraNfcVas processing object and there is a Pass object created for each pass read. Each configuration object describes a pass type, or set of pass types that should be read or accepted. The ZebraNfcVas object handles all the communication with the passes, the configuration of the NFC system and pass decryption. The Pass contains the payload of the pass along with additional meta data about the pass.

-----

## VasConfig

A configuration object must contain at least one Pass Type Id, but may contain multiple Pass Type Ids. This will identify which pass types should be returned.

A configuration object may contain a private key. The private key should be associated with the Pass Type Ids in the configuration object. It is the key that will be used to decrypt the pass that matches one of the associated Pass Type Ids.

It is also acceptable to have multiple configuration objects. Each configuration object will be used to query the Apple device for a pass.

Example:
* Configuration Object #1
    * Pass Type Id:
        * pass.com.zebra.customer_loyalty 
        * pass.com.zebra.cafe_loyalty
    * Private Key:
        * private key that will decrypt either of the two above pass types.
* Configuration Object #2
    * Pass Type Id:
        * pass.com.zebra.special_holiday_event_pass
    * Private Key:
        * private key that will decrypt the above pass type

The application developer could specify either or both of the above configuration objects when attempting to read passes. SDK will iterate through each Pass Type Id in each configuration object. In the above example, assuming bothe configuration objects were provided, the sequence would be:
1. pass.com.zebra.customer_loyalty
2. pass.com.zebra.cafe_loyalty
3. pass.com.zebra.special_holiday_event_pass

-----

## ZebraNfcVas

This object connects with the Android NFC sub-system, sets up the configuration for the NFC polling and handles reading of the passes from a mobile wallet. Once the pass has been read, ZebraNfcVas will decrypt the pass (if all information is provided and correct) and return the Pass object to the caller.

-----

## Pass

The pass object encapsulates the information about the pass read. This includes:
* pass payload (decrypted if possible)
* pass type (Apple VAS)
* payload date (date and time pass was read)
* Pass Type Id / MerchantID associated with the pass

This allows a developer to validate that a pass is the correct type and that it is not a replay (the date and time should be within 10 seconds of the actual date and time).

-----

## Related Guides


