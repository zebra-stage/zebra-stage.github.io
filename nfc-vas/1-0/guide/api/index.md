---
title: API
layout: guide.html
product: NFC VAS
productversion: "1.0"
---

## Overview

The Zebra NFC VAS API is an Android library built on top of the existing Android NFC APIs. The NFC VAS API provides simplified configuration and control of the processes required for accessing a VAS pass stored in a mobile device. This guide discusses the APIs available for NFC VAS.

---

## API Summary

**VasConfig -** base class object used to provide an interface for storing and accessing merchant parameters required to access a VAS pass
* VasConfig() - constructor
* getType() - return the specific type of the VAS object
* setPrivateKey() - set the private key
* getPrivateKey() - return the current private key in the config object

**AppleVASConfig -** a VASConfig object that contains the Apple VAS specific parameters for accessing and processing an Apple VAS pass
* appleVasConfig constructor - create a new VAS Config object, with initialization, that contains details specific to Apple VAS interactions
* setPassTypeIds() - Mandatory - specify an array of PassTypeIds needed to read an Apple VAS pass
* setFilter() - Optional - configure the filter used to read an Apple VAS pass
* setFilterNone() - clear the filter parameter so it won’t be used
* setMerchantUrl() - specify the merchant URL needed to read an Apple VAS pass
* getPassTypeIds() - return the array of pass type IDs
* getMerchantIds() - get the calculated Merchant ID
* getFilter() - return the current filter configuration
* getMerchantUrl() - get the current merchant URL
* getTerminalMode() - get the current terminal operating mode 
* getProtocol() - get the current VAS Protocol

**ZebraNfcVas -** class that receives tag notifications, determines if it’s a valid pass and if so, processes the pass, providing either a decrypted pass if the correct PrivateKey was set or an encrypted pass (if no PrivateKey, or the wrong PrivateKey was set).
* ZebraNfcVas constructor - provide the current activity and the object that implements the response interface
* connectToReader() - attach to the NFC system and register the caller to receive the notifications
* getVersionString - get the version of the API as a string (Major Minor Build Revision)
* getVersion() - get the version of the API as a byte array
* getName() - get the name of the API
* setVasConfig() - add one VasConfig object to the internal list of config objects that should be used
* setVasConfgs() - add an array of VasConfig objects to the internal list
* clearConfigs() - clear the internal list of configurations
* enableReadPassMode() - configure the polling to only read for the types of cards in which passes are stored
* disabelReadPassMode() - return the polling to it’s original configuration
* Interface: onPassDetected() - interface function that will provide the final pass contents as well as the merchantId that matched the pass that was read.

---

## VasConfig

VasConfig for a configuration object. It will contain the specific configuration information for accessing and interpreting a VAS pass. This is a base class (interface) and shall not be instantiated by itself.

VasConfig() - constructor

### getType()

<pre class="prettify">
    <code>
public VasType getType()
    </code>
</pre>

Returns the type of the VASConfig object

**Return values:**
VasType will always return VasType.APPLE_VAS

### setPrivateKey()

<pre class="prettify">
    <code>
public void setPrivateKey(String key)
    </code>
</pre>
Sets the private key in PEM format.

**Parameters:**
<code>String key</code>

PEM formatted EC Private key. This must not be null and the string must not be empty. It must also be correctly formatted or decryption to succeed. Example:

     -----BEGIN EC PARAMETERS-----\n
     alkidnklde==\n
     -----END EC PARAMETERS-----\n
     -----BEGIN EC PRIVATE KEY——\n
     aslkdflaksdfjfkk328klxld...\n
     ak7ujvbn9b8o3bv9hae98fn2...\n
     9asjh90fuh34n2uh33==\n
     -----END EC PRIVATE KEY-----\n

**Return values:**
None

**Throws:**
<code>InvalidParameterException</code> if there the parameter is null or the empty string.

### getPrivateKey()

<pre class="prettify">
<code>public String getPrivateKey()</code>
</pre>

Get the currently configured private key

**Return values:**
String - PEM formatted private key value that was provided to the VasConfig

---

## AppleVASConfig 

This is the configuration class object for Apple VAS passes. This is setting information used to select passes that will be read. The passes that will be read must match the configuration provided by the AppleVASConfig object. AppleVasConfig Implements VasConfig.

### AppleVasConfig()

<pre class="prettify">
<code>public void AppleVasConfig()</code>
</pre>

Constructor that creates an empty AppleVasConfig object with initialization, that contains details specific to Apple VAS interactions

### setPassTypeIds()

<pre class="prettify">
<code>public void setPassTypeIds(String[] passTypeIds)</code>
</pre>

Sets the Pass Type IDs that should match the VAS pass to read. This is a list of zero or more Pass Type IDs as strings. This will OVERWRITE any existing values.

**Parameters:**
<code>String[] passTypeIds</code>

This is an array of one or more Pass Type IDs. A Pass Type ID is generally of the form: {“pass.com.zebra”} or {“pass.com.zebra”, “pass.com.xyz.somethingspecific”}

When attempting to read a pass, each Pass Type ID in the array will be used to attempt to read the pass. This means that a pass that matches any of the specified Pass Type IDs will be returned.

**Return values:**
None

**Throws:**
<code>InvalidParameterException</code> if there are null or empty strings in the array, if there are invalid characters in any of the pass Type Ids, or if the array is empty.

### setFilter() 

<pre class="prettify">
<code>public void setFilter(byte[] filter, FilterType type)</code>
</pre>

Set the filter information for the VAS pass to read. This will OVERWRITE any existing value

**Parameters:**

<code>byte[] filter</code>

This is a 4-byte array that is the filter value that will be used during the pass retrieval process. It will be used according to the filter type specified in parameter one.

<code>FilterType type</code>

This is one of two constants: `FILTER_TYPE_EXACT_MATCH` or `FILTER_TYPE_BIT_MASK`

Exact Match will exactly match the filter value to the value specified in the pass.

Bit Mask will match the specified filter value bit-wise ANDed with the merchant pass filter value. If the result is equal to the merchant pass filter value, then the match is a success.
Zebra NFC VAS SDK User’s Guide v1.0.0.1 10

**Return values:**
None

**Throws:**
`InvalidParameterException` if the filter value is not exactly 4 bytes in size

### setFilterNone()

<pre class="prettify">
<code>public void setFilterNone()</code>
</pre>

Clear the Filter. This means that any filter value in a pass (including no filter value) will be accepted.

### setMerchantUrl() 

<pre class="prettify">
<code>public void setMerchantURL(String url)</code>
</pre>

Set the merchant’s URL information for the VAS pass to read. This will OVERWRITE any existing value

**Parameters:**
<code>String url</code>

This is the merchant URL string for the associated pass. This is the URL generally used to sign up for a pass. It MUST use the https:// format and must include the https://

Maximum length is 64 bytes

**Return values:**
None

**Throws:**
`InvalidParameterException` if too long or does not contain a valid https:// header

### setPassTypeIds()

<pre class="prettify">
<code>public String[] getPassTypeIds()</code>
</pre>

Get the list of currently configured Pass Type IDs. This contains a list of zero or more Pass Type IDs as Strings

**Parameters:**
None

**Return values:**
`String[]` of Pass Type Ids.
`null` if no passTypeIds have been set.

### getMerchantIds()

<pre class="prettify">
<code>public byte[][] getMerchantIds()</code>
</pre>

Get the list of currently configured Merchant IDs. This contains a list of zero or more Merchant IDs as byte arrays. The merchant ID is the SHA256 of the Pass Type ID.

**Parameters:**
None

**Return values:**
`byte[][]` of Merchant Ids.
`null` if no passTypeIds have been set.

### getFilter()

<pre class="prettify">
<code>public byte[] getFilter()</code>
</pre>

Get the currently configured filter

**Parameters:**
None

**Return values:**
`byte[]` of the filter. This will always be exactly 5 bytes, or `null` if no filter has been set
The `filter[5]` will contain the filter type (0x01 is exact match, 0x02 is bit_mask).

### getMerchantURL()

<pre class="prettify">
<code>public String getMerchantURL()</code>
</pre>

Get the Merchant URL string

**Parameters:**
None

**Return values:**
`String` of Merchant URL
`null` if no Merchant URL has been set

### getTerminalMode()

<pre class="prettify">
<code>public String getMerchantURL()</code>
</pre>

Return the private key currently configured. It will be in PEM format

**Parameters:**
None

**Return values:**
Will always return `TerminalMode.VasOnly`

### getProtocol()

<pre class="prettify">
<code>public AppleVasConfig.VasProtocol getProtocol()</code>
</pre>

Return the private key currently configured. It will be in PEM format

**Parameters:**
None

**Return values:**
will always return `VasProtocol.FullVASProtocol`

---

## ZebraNfcVas

This is the top interface for the Zebra NFC VAS SDK. It manages the tag process and interaction. ZebraNfcVas implements NfcAdapter.ReaderCallback

### ZebraNfcVas()

<pre class="prettify">
<code>public void ZebraNfcVas(Activity activity, Response resp)</code>
</pre>

constructor, connects the library to the desired activity. Must also provide the Response interface implementation which will receive the Pass read.

**Parameters:**
`Activity activity` - this is the activity that has registered for the NFC intent
Response resp - this is the class that has implemented the Response interface and will receive the pass data

**Return values:**
None

**Throws:**
`InvalidParameterException` if either parameter is NULL

<pre class="prettify">
<code>public void ZebraNfcVas(Activity activity, Response resp, VasConfig cfg)</code>
</pre>

constructor, connects the library to the desired activity. Must also provide the Response interface implementation which will receive the Pass read. This constructor allows for creating the object and specifying the desired configuration objects at the same time

**Parameters:**
`Activity activity` - this is the activity that has registered for the NFC intent
`Response resp` - this is the class that has implemented the Response interface and will receive the pass data `VasConfig cfg` - the configuration object that will be used for retrieving and reading a pass

**Return values:**
None

**Throws:**
`InvalidParameterException` if either parameter is NULL

### connectToReader()

<pre class="prettify">
<code>public int connectToReader()</code>
</pre>

Attach the ZebraNfcVas object to the NfcAdapter.

**Parameters:** None

**Return values:** int - result value:
* 0 - success
* -1 - the current hardware does not have NFC support 
* -2 - the NFC hardware is currently disabled

### getVersionString()

<pre class="prettify">
<code>public String getVersionString()</code>
</pre>

Return the version of the ZebraNFCVAS SDK formatted as MAJ.MIN.BLD.REV

**Parameters:** None

**Return values:**
* `String` - the SDK version in MAJOR.MINOR.BUILD.REVISION format 
    * Major - change in the API that is no longer compatible with previous version
    * Minor - improvements in performance or additional APIs that are still compatible with previous versions 
    * Build - Build number
    * Revision - Revision of the current version and build

### getVersion()

<pre class="prettify">
<code>public byte[] getVersion()</code>
</pre>

Return the version of the ZebraNFCVAS SDK in a 4-byte byte[]

**Parameters:** None

**Return values:**
* `byte[]` - the SDK version in MAJOR.MINOR.BUILD.REVISION format: 
    * Major - change in the API that is no longer  compatible with previous version
    * Minor - improvements in performance or additional APIs that are still compatible with previous versions 
    * Build - Build number
    * Revision - Revision of the current version and build

### getName()

<pre class="prettify">
<code>public String getName()</code>
</pre>

Return the version of the name of the ZebraNFCVAS SDK

**Parameters:** None

**Return values:**  `String` - the name of the SDK

### setVasConfig()

<pre class="prettify">
<code>public void setVasConfig(VasConfig cfg)</code>
</pre>

Specify the VasConfig object that should be used for interacting with passes. This will add to the array of current config object(s)

**Parameters:** `VasConfig` - a VasConfig object 

**Return values:** None

**Throws:** `InvalidParameterException` if cfg is `null`.

### setVasConfig()

<pre class="prettify">
<code>public void setVasConfig(VasConfig[] cfgs)</code>
</pre>

Specify the VasConfig object or objects that should be used for interacting with passes. This can have one or more VasConfig objects. This will add to the array of current config object(s)

**Parameters:** `VasConfig[]` - an array of one or more VasConfig objects.

**Return values:** None

**Throws:** `InvalidParameterException` if cfg is `null` or if there are more than one of a single VasConfig type.

### clearConfigs()

<pre class="prettify">
<code>public void clearConfigs()</code>
</pre>

Removes all VasConfig objects from the SDK.

**Parameters:** None

**Return values:** None

### enableReadPassMode()

<pre class="prettify">
<code>public void enableReadPassMode()</code>
</pre>

Configure polling for reader mode only and only for Tech TypeA and Tech TypeB

**Parameters:** None

**Return values:** None

### disableReadPassMode()

<pre class="prettify">
<code>public void disableReadPassMode()
</code>
</pre>

Return to default polling configuration

**Parameters:** None

**Return values:** None

### onPassDetected()

<pre class="prettify">
<code>public void onPassDetected(Pass pass)
</code>
</pre>

This interface must be implemented in the calling application. The interface method onPassDetected() will be called when an AppleVAS NFC token is read. The ZebraNFCVAS SDK will provide the Pass that was read. The Pass object will have the decrypted payload (if possible) and meta data about the pass

**Parameters:** Pass pass - a Pass object containing information about the pass that was read.

**Return values:** None

## Pass

This an object that contains information and the payload of the pass read from the user’s mobile device.

### getPassType()

<pre class="prettify">
<code>public Pass.Type getPassType()
</code>
</pre>

Returns the type of the Pass

**Parameters:** None

**Return values:** `Pass.Type.AppleVas`

### getPayloadDate()

<pre class="prettify">
<code>public Date getPayloadDate()
</code>
</pre>

Returns the Date of the pass. This corresponds to the time when the pass NFC message was generated by an Apple device. The date should be examined and the pass should be rejected if the time is more than 10 sec older than the current time on the reading device. This is to prevent recording and replay attacks. The Date should be within 10 sec of the current date and time

**Parameters:** None

**Return values:** `Date` date

### getPayloadMessage()

<pre class="prettify">
<code>public byte[] getPayloadMessage()
</code>
</pre>

Returns the content of the NFC message received from the Apple device. If the Private Key was provided and the decryption is successful, this will be the decrypted payload of the NFC message. Otherwise, this will be the encrypted payload.

**Parameters:** None

**Return values:** `byte[]` payload

### getPassTypeId()

<pre class="prettify">
<code>public String getPassTypeId()
</code>
</pre>

Returns the Pass Type Id that matches the pass that was read.

**Parameters:** None

**Return values:** `String` Pass Type Id

### getMerchantId()

<pre class="prettify">
<code>public byte[] getMerchantId()
</code>
</pre>

Returns the MerchantId that matches the pass that was read. This is the SHA256 of the Pass Type Id.

**Parameters:** None

**Return values:** `byte[]` MerchantId

### getResultCode()

<pre class="prettify">
<code>public Pass.Result getResultCode()
</code>
</pre>

Returns the result code for receiving the pass.

**Parameters:** None

**Return values:** 
* `Pass.Result.Success` - pass was successfully read and decrypted
* `Pass.Result.Failure` - there was a failure attempting to read the pass. The payload is not valid
* `Pass.Result.NotVas` - a tag was detected but it was not an Apple VAS pass and was not read
* `Pass.Result.IncorrectPrivateKey` - the private key provided does not correspond to the public key used to encrypt the pass. As a result, the pass could not be decrypted and the payload is encrypted
* `Pass.Result.VasNotActive` - the Apple device did not have an active Apple VAS pass. This could be for a number of reasons, including, but not limited to:
    * The user manually selected a pass that does not have an NFC enablement
    * The user’s device requires authentication (FaceID or pass code) before the NFC pass can be read • The user’s device is locked
* `Pass.Result.DecryptionFailure` - the attempt to decrypt the pass failed

---

## Sample Code

        onCreate() {
            // Create a config object
            AppleVasConfig cfg = new AppleVasConfig();
            
            //-- example of setting a filter and then clearing the filter
            cfg.setFilter(new byte[]{(byte) 0xaa, 0x55, (byte) 0xaa, 0x55}, AppleVasConfig.FilterType.ExactMatch);
            cfg.setFilterNone();

            //-- example of setting a URL and then clearing the URL
            cfg.setMerchantURL("https://www.zebra.com/vas-signup");
            cfg.setMerchantURL(null);
            
            //-- example of setting the private key and the Pass Type ID
            cfg.setPrivateKey(ZebraPrivateKeyStr);
            cfg.setPassTypeIds(new String[] {"pass.com.pronto.zebra-wallet-pass.demo"});
            
            //-- create the main object and specify the current Activity as the Activity and the Response
            //  also specifies the above VasConfig object as the config object to be used.
            vasSDK = new ZebraNfcVas(this, this, cfg);
            
            //-- examples of modifying the cfg object
            vasSDK.setVasConfig(cfg);       // there are now TWO identical cfgs set
            vasSDK.clearConfigs();          // clear out all configuration objects
            vasSDK.setVasConfig(cfg);       // set the SINGLE cfg we're interested in
 
            //-- activate the connection to the NfcAdapter
            vasSDK.connectToReader();

        }
        
        onResume() {
            /* configure the NFC adapter for reader mode only */
            vasSDK.enableReadPassMode();
        }
        
        onPause() {
            /* return the NFC adapter to standard polling */
            vasSDK.disableReadPassMode();
        }

        /* This method will be called when a pass is detected and read during polling */
        public void onPassDetected(Pass pass) {
            if(pass.getPassType() == Pass.Type.AppleVas){
                if(pass.getResultCode() == Pass.Result.Success) {
                    // Decrypted Pass
                    DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                    format.setTimeZone(TimeZone.getTimeZone("Etc/UTC"));
                    String formatted = format.format(pass.getPayloadDate()) + "Z";
                    Log.v(TAG, "--- PASS Received and Decrypted ---");
                    Log.v(TAG, "Pass Date: " + formatted);
                    Log.v(TAG, "Payload as HEX: " + ByteArrayToHexString(pass.getPayloadMessage()));
                    Log.v(TAG, "Payload as ASCII: " + new String(pass.getPayloadMessage(), StandardCharsets.UTF_8));
                    Log.v(TAG, "Payload is from pass with Pass Type Id: " + pass.getPassTypeId());
                    Log.v(TAG, "This Pass Type Id corresponds to merchantId: " + ByteArrayToHexString(pass.getMerchantId()));
                }
                else if(pass.getResultCode() == Pass.Result.IncorrectPrivateKey){
                    // Encrypted Pass
                    Log.v(TAG, "--- PASS Received but Wrong Private Key or No Private Key provided for Decryption ---");
                    Log.v(TAG, "Encrypted pass payload as HEX: " + ByteArrayToHexString(pass.getPayloadMessage()));
                    Log.v(TAG, "Payload is from pass with Pass Type Id: " + pass.getPassTypeId());
                    Log.v(TAG, "This Pass Type Id corresponds to merchantId: " + ByteArrayToHexString(pass.getMerchantId()));
                }
                else if(pass.getResultCode() == Pass.Result.DecryptionFailure) {
                    // Encrypted Pass
                    Log.v(TAG, "--- PASS Received but Decryption Failure ---");
                    Log.v(TAG, "Encrypted pass payload as HEX: " + ByteArrayToHexString(pass.getPayloadMessage()));
                    Log.v(TAG, "Payload is from pass with Pass Type Id: " + pass.getPassTypeId());
                    Log.v(TAG, "This Pass Type Id corresponds to merchantId: " + ByteArrayToHexString(pass.getMerchantId()));
                }
                else if(pass.getResultCode() == Pass.Result.Failure) {
                    // No Pass
                    Log.v(TAG, "--- Pass Not Read for some reason - see the Status Word ---");
                    Log.v(TAG, "Returned Status Word is: " + ByteArrayToHexString(pass.getPayloadMessage()));
                } 
            }
        }

---

## Best Practices

* **Application life cycle -** enableReadPassMode() should be called when the app is in the foreground and disableReadPassMode() should be called when the app moves away from the foreground

---

## See Also

- [About Wireless Insights](../about)
- [Licensing](../license)
- [Data](../data)
