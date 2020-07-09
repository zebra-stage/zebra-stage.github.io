---
title: Input Plug-ins
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## Overview

Input Plug-ins specify the device hardware to be used to acquire the data before sending it for processing. Those included with DataWedge are explained below. **DataWedge also provides beep sounds and other feedback to alert the user of scanning results and barcode type. Refer to Scanner Parameters section for more information**. 

Input Plug-ins are used to specify: 

* Barcode scanners (laser, imager, camera, bluetooth scanner)
* Data Capture Plus (DCP)
* Magnetic Stripe Readers (MSR)
* Radio-frequency Identification (RFID)
* Serial port(s)
* SimulScan hardware
* Voice

**The Barcode Scanner Input Plug-in** reads data from the integrated barcode scanner built into the device, attached by cable or implemented as a snap-on module. This Plug-in supports laser, imager and internal cameras. The raw barcode data that's acquired is processed or formatted as required using Process Plug-ins. 

**The MSR Input Plug-in** is for magnetic stripe reader modules. This plug-in reads data from an integrated MSR reader or attached Scan/MSR Module, after which the raw data from the reader can be processed or formatted as required using Process Plug-ins.

**The SimulScan Input Plug-in** permits simultaneous capture of barcodes, images, text, signatures, phone numbers and other data on multi-part forms. The SimulScan Input Plug-in adds this capability to DataWedge. When form data is captured according to a designated SimulScan template, data can be processed or formatted as required using Process Plug-ins. 

**Note**: DataWedge concatenates all text captured through SimulScan into a single string, and performs processing on the concatenated string. See **SimulScan section** later in this guide. 

## Scanner Selection
For the Barcode Input Plug-in, the Scanner selection panel determines which scanning device will be used for data capture. The list of available scanners will be based devices that are present on (or connected to) the unit being configured. 
<img style="height:350px" src="11_select_input.png"/>
<br>

The "Auto" option will automatically determine the best scanning device from the list of available devices based on the rules below. 

**Auto Scanner Selection Rules**:
* If a Zebra Scan Module or Scan/MSR Module is installed, the 2D imager will be selected. 
* If no Scan Module is installed, the camera will be selected. 
* When the camera is selected, scanning is performed with the rear-facing camera.
* When 2D Imager is selected, scanning is performed using the installed Scan or Scan/MSR module.

#### Bluetooth Scanners
DataWedge supports the following Zebra Bluetooth scanners: 

* **RS507** Cordless Ring Scanner
* **RS6000** Ring Scanner
* **DS3678** Ultra-Rugged Scanner

Bluetooth scanners are supported according to the following rules:

* **To initially configure the RS507** in a Profile, the scanner must be paired and connected.
* **After initial configuration**, the Bluetooth scanner can be enabled and disabled in the Profile even if it is disconnected from the device. However, to configure reader parameters, decoders and other scanner settings, the Bluetooth scanner must be connected.
* **DataWedge will not automatically reconnect** to a Bluetooth scanner if that scanner is connected while DataWedge is using a different auto-selected scanner. To re-enable a Bluetooth scanner, connect the scanner and select it in the Profile or re-choose the Auto select option.
* **Auto-selection and Battery Swap -** If Scanner selection is set to Auto and the RS507 was enabled prior to a battery swap, DataWedge will continue working with that RS507 scanner upon reconnection after the battery is swapped. If the RS507 does not reconnect with after the swap, DataWedge will revert to the current default scanner.
* **Keep Enabled on Suspend -** This mode is supported on Bluetooth and pluggable scanners, and might result in faster battery drain than would otherwise be expected while in suspend mode. **Note: The Zebra computing device will wake from suspend mode after pressing the scan trigger of any supported scanner**.

## Input Parameters
Many input methods include parameters that are configurable according to the expected scan targets and/or preferences of an organization. This can be used as a means of increasing security, reducing decode errors or other reasons. For example, a company that routinely receives packages encoded with Code 128 symbology might help reduce scan errors by limiting the Code 128 decoders it implements to those of the non-EAN variety. 

Parameters for individual Decoders are modified within a Profile. Each DataWedge Profile can be assigned a unique group of Decoders and Decoder parameters (where applicable) to use with its associated application(s). This guide covers the selection of Decoders, and provides details for those with configurable parameters.

DataWedge decodes all major barcode symbologies. Popular formats are enabled by default in all DataWedge Profiles, and are indicated by an (*) in the table below. **To help improve scanning performance, Zebra recommends disabling any Decoders that are not required by the application(s) associated with a given Profile**.

### Default Decoders 
<div class="table-striped">
<table rules="none"
width="100%"
frame="void"
cellspacing="0" cellpadding="4">

<col width="33%" />
<col width="33%" />
<col width="33%" />
<tbody>
<tr>
<td align="left" valign="top"><p class="table">UPC-E0<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">UPC-E1</p></td>
<td align="left" valign="top"><p class="table">UPC-A<sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">MSI</p></td>
<td align="left" valign="top"><p class="table">EAN-8<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">EAN-13<sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Codabar<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Code 39<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Discrete 2of5</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Interleaved 2of5</p></td>
<td align="left" valign="top"><p class="table">Code 11</p></td>
<td align="left" valign="top"><p class="table">Code 93</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Code 128<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">PDF417<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Trioptic 39</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">MicroPDF<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">MacroPDF<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Maxicode<sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Datamatrix<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">QR Code<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">MacromicroPDF<sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">GS1 DataBar</p></td>
<td align="left" valign="top"><p class="table">GS1 DataBar Limited</p></td>
<td align="left" valign="top"><p class="table">GS1 DataBar Expanded</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Composite AB<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Webcode</p></td>
<td align="left" valign="top"><p class="table">Composite C<sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">TLC 39<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">USPostnet</p></td>
<td align="left" valign="top"><p class="table">USPlanet</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">UK Postal</p></td>
<td align="left" valign="top"><p class="table">Japanese Postal</p></td>
<td align="left" valign="top"><p class="table">Australian Postal</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Canadian Postal</p></td>
<td align="left" valign="top"><p class="table">Dutch Postal</p></td>
<td align="left" valign="top"><p class="table">Chinese 2of5</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Aztec<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">MicroQR</p></td>
<td align="left" valign="top"><p class="table">Korean 3 of 5</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">US4state</p></td>
<td align="left" valign="top"><p class="table">US4state FICS</p></td>
<td align="left" valign="top"><p class="table">Matrix 2of5</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">HAN XIN</p></td>
<td align="left" valign="top"><p class="table"></p></td>
<td align="left" valign="top"><p class="table"></p></td>
</tr>
</tbody>
</table>
</div>
&#42; _Enabled by default_

**Note**: Decoders that do not have configurable parameters do not appear in the Decoder Parameters section.

### Enable/Disable Decoders

**To enable or disable Decoders**: 

&#49;. **From the Profile being edited, tap Decoders** as highlighted below. A list of Decoders appears similar to the image in Step 2, below.  
<img style="height:350px" src="select_decoders.png"/>
<br>

&#50;. **Select the desired Decoders** by checking the corresponding checkbox. **Deselect Decoders not required** for the app associated with the Profile. 
<img style="height:350px" src="decoder_selection.png"/>
<br>

### Edit Decoder Parameters

**To edit Decoder parameters**:

&#49;. **From the Profile being edited, tap Decoder params** as highlighted below. A list of Decoders appears similar to the image in Step 2, below.
<img style="height:350px" src="decoder_params.png"/>
<br>

&#50;. **From the Decoder list, tap a Decoder to edit its parameters**. 
<img style="height:350px" src="edit_decoder_params.png"/>
<br>

## Decoder Parameters
Editable parameters of individual Decoders are explained below. **Note: Decoders that do not have configurable parameters do not appear in the Decoder Parameters section**. For further instructions about creating and editing DataWedge Profiles, please see "Create a Profile" in [Manage Profiles](../createprofile).

### Reduced Quiet Zone 
The quiet zone is the blank space on either side of a bar code that indicates where the symbology begins and ends, and is intended to prevent the reader from scanning irrelevant information. When margin-less decoders are used with Reduced Quiet Zone Level reader parameters, the decoders behave according to the following table: 
<img style="height:350px" src="Marginless_C128_param_table.png"/>
_**Descriptions of the 1D Quiet Zone Levels** shown above are in the [Reader Params](#readerparams) section along with important warnings_. 
<br>

### UPCE0
**Report Check Digit -** The check digit is the last character of the symbol used to verify the integrity of the data. Enables or disables this option. A check in the checkbox indicates that the option is enabled.

**Preamble -** Preamble characters are part of the UPC symbol consisting of Country Code and System Character. There are three options for transmitting a UPCE0 preamble:

**Preamble Sys Char -** Transmit System Character only.

**Preamble Country and Sys Char -** Transmit System Character and Country Code ("0" for USA).

**Preamble None -** Transmit no preamble.

Select the appropriate option to match the host system.

**Convert UPCE0 To UPCA -** Enable to convert UPCE0 (zero suppressed) decoded data to UPC-A format before transmission. After conversion, the data follows UPC-A format and is affected by UPC-A programming selections. Disable to transmit UPCE0 decoded data as UPCE0 data, without conversion (default - disabled).

------

### UPCE1

**Report Check Digit -** The check digit is the last character of the symbol used to verify the integrity of the data. Enables or disables this option. A check in the checkbox indicates that the option is enabled.

**Preamble -** Preamble characters are part of the UPC symbol consisting of Country Code and System Character. There are three options for transmitting a UPCE1 preamble:

**Preamble Sys Char -** Transmit System Character only.

**Preamble Country and Sys Char -** Transmit System Character and Country Code ("0" for USA).

**Preamble None -** Transmit no preamble.

Select the appropriate option to match the host system.

**Convert UPCE1 To UPCA -** Enable this to convert UPCE1 decoded data to UPC-A format before transmission. After conversion, the data follows UPC-A format and is affected by UPC-A programming selections. Disable this to transmit UPCE1 decoded data as UPCE1 data, without conversion.

------

### UPCA

**Report Check Digit -** The check digit is the last character of the symbol used to verify the integrity of the data. Enables or disables this option. A check in the checkbox indicates that the option is enabled.

**Preamble -** Preamble characters are part of the UPC symbol consisting of Country Code and System Character. There are three options for transmitting a UPCA preamble:

**Preamble Sys Char -** Transmit System Character only.

**Preamble Country and Sys Char -** Transmit System Character and Country Code ("0" for USA).

**Preamble None -** Transmit no preamble.

Select the appropriate option to match the host system.

------

### MSI

**Length1&#42; -** To decode an MSI symbol with a specific length range, set this value to the lower limit. For example, to decode MSI symbols containing between 4 and 12 characters, this value would be set to 4.

**Length2&#42; -** To decode an MSI symbol with a specific length range, set this value to the upper limit. For example, to decode MSI symbols containing between 4 and 12 characters, this value would be set to 12.

_&#42; See **[Decode Lengths section](#decodelengths)**, below_

**Redundancy -** Sets the reader to read the barcode twice before accepting data.

**Check Digit -** With MSI symbols, one check digit is required, and is always verified by the reader. The second check digit is optional.

**One Check Digit -** Verify one check digit.

**Two Check Digits -** Verify two check digits.

**Check Digit Scheme -** Two algorithms are possible for the verification of the second MSI check digit. Select the algorithm used to encode the check digit.

**Mod-11-10 -** First check digit is MOD 11; the second check digit is MOD 10.

**Mod-10-10 -** Both check digits are MOD 10.

**Report Check Digit -** Transmit MSI data with or without the check digit. A check in this checkbox will send MSI data with a check digit.

------

### EAN8

**Convert EAN8 To EAN13 -** Converts EAN8 data to EAN 13 format. A check in the checkbox enables this conversion.

------

### Codabar

**Length1&#42; -** To decode a Codabar symbol with a specific length range, set this value to the lower limit. For example, to decode Codabar symbols containing between 8 and 24 characters, this value would be set to 8.

**Length2&#42; -** To decode a Codabar symbol with a specific length range, set this value to the upper limit. For example, to decode Codabar symbols containing between 8 and 24 characters, this value would be set to 24.

_&#42; See **[Decode Lengths section](#decodelengths)**, below_

**Redundancy -** Sets the reader to read the barcode twice before accepting data. 

**Clsi Editing -** Enable this parameter to strip the start and stop characters and insert a space after the first, fifth, and tenth characters of a 14-character Codabar symbol. Enable this feature if the host system requires this data format.

**Notis Editing -** Enable this parameter to strip the start and stop characters from a decoded Codabar symbol. Enable this feature if the host system requires this data format.

------

### Code39

**Length1&#42; -** To decode a Code 39 symbol with a specific length range, set this value to the lower limit. For example, to decode Code 39 symbols containing between 8 and 24 characters, this value would be set to 8.

**Length2&#42; -** To decode a Code 39 symbol with a specific length range set this value to the upper limit. For example, to decode Code 39 symbols containing between 8 and 24 characters, this value would be set to 24.

_&#42; See **[Decode Lengths section](#decodelengths)**, below_

**Verify Check Digit -** Enable this feature to check the integrity of all Code 39 symbols to verify that the data complies with a specified check digit algorithm. The digital scanner decodes only those Code 39 symbols that include a modulo 43 check digit. Enable this feature only if the Code 39 symbols contain a modulo 43 check digit.

**Report Check Digit -** Transmit Code 39 data with or without the check digit. A check in the checkbox will send Code 39 data with a check digit.

**Full ASCII -** Code 39 Full ASCII is a variant of Code 39 that pairs characters to encode the full ASCII character set. Check this checkbox to enable Code 39 Full ASCII.

**Redundancy -** Sets the reader to read the barcode twice before accepting data.

**Convert Code39 To Code32 -** Code 32 is a variant of Code 39 used by the Italian pharmaceutical industry. 

**Report Code32 Prefix -** Enables the addition of the prefix character "A" to all Code 32 barcodes.

**Security Level -** Options: Security level 0, Security Level 1, Security Level 2 and Security Level 3.

### Discrete 2of5

**Length1&#42; -** To decode a Discrete 2of5 symbol with a specific length range, set this value to the lower limit. For example, to decode Discrete 2of5 symbols containing between 4 and 12 characters, this value would be set to 4.

**Length2&#42; -** To decode a Discrete 2of5 symbol with a specific length range, set this value to the upper limit. For example, to decode Discrete 2of5 symbols containing between 4 and 12 characters, this value would be set to 12.

_&#42; See **[Decode Lengths section](#decodelengths)**, below_

**Redundancy -** Sets the reader to read the barcode twice before accepting data.

------

### Interleaved 2of5

**Length1&#42; -** To decode an Interleaved 2of5 symbol with a specific length range, set this value to the lower limit. For example, to decode Interleaved 2of5 symbols containing between 4 and 12 characters, this value would be set to 4.

**Length2&#42; -** To decode an Interleaved 2of5 symbol with a specific length range, set this value to the upper limit. For example, to decode Interleaved 2of5 symbols containing between 4 and 12 characters, this value would be set to 12.

_&#42; See **[Decode Lengths section](#decodelengths)**, below_

**Redundancy -** Sets the reader to read the barcode twice before accepting data.

------

### Check Digit

**No Check Digit -** A check digit is not used.

**USS Check Digit -** Select to check the integrity of all Interleaved 2of5 symbols to verify the data complies with the Uniform Symbology Specification (USS) check digit algorithm.

**OPCC Check Digit -** Select to check the integrity of all Interleaved 2of5 symbols to verify the data complies with the Optical Product Code Council (OPCC) check digit algorithm.

**Report Check Digit -** Transmit Interleaved 2of5 data with or without the check digit. A check in the checkbox sends Interleaved 2of5 data with check digit.

**Convert ITF-14 To EAN13 -** Convert 14-character Interleaved 2of5 barcodes to EAN-13, and transmit as EAN-13. The Interleaved 2of5 barcode must be enabled and must have a leading zero and a valid EAN-13 check digit. 

------

### Code11

**Length1&#42; -** To decode a Code 11 symbol with a specific length range, set this value to the lower limit. For example, to decode Code 11 symbols containing between 4 and 12 characters, this value would be set to 4.

**Length2&#42; -** To decode a Code 11 symbol with a specific length range, set this value to the upper limit. For example, to decode Code 11 symbols containing between 4 and 12 characters, this value would be set to 12.

_&#42; See **[Decode Lengths section](#decodelengths)**, below_

**Redundancy -** Sets the reader to read the barcode twice before accepting data.

**Verify Check Digit -** Check the integrity of all Code 11 symbols to verify that the data complies with the specified check digit algorithm. This selects the check digit mechanism for the decoded Code 11 barcode.

**No Check Digit -** Do not verify check digit.

**One Check Digit -** Barcode contains one check digit.

**Two Check Digits -** Barcode contains two check digits.

**Report Check Digit -** Transmit Code 11 data with or without the check digit. A check in the checkbox sends Code 11 data with a check digit.

### Code93

**Length1&#42; -** To decode a Code 93 symbol with a specific length range, set this value to the lower limit. For example, to decode Code 93 symbols containing between 4 and 12 characters, this value would be set to 4.

**Length2&#42; -** To decode a Code 93 symbol with a specific length range, set this value to the upper limit. For example, to decode Code 93 symbols containing between 4 and 12 characters, this value would be set to 12.

_&#42; See **[Decode Lengths section](#decodelengths)**, below_

**Redundancy -** Sets the reader to read the barcode twice before accepting data.

------

### Code128

**Length1&#42; -** To decode a Code 128 symbol with a specific length range, set this value to the lower limit. For example, to decode Code 128 symbols containing between 4 and 12 characters, this value would be set to 4.

**Length2&#42; -** To decode a Code 128 symbol with a specific length range, set this value to the upper limit. For example, to decode Code 128 symbols containing between 4 and 12 characters, this value would be set to 12.

_&#42; See **[Decode Lengths section](#decodelengths)**, below_

**Redundancy -** Sets the reader to read the barcode twice before accepting data. 

**Enable EAN128 -** Set the EAN128 subtype. A check in the checkbox indicates that the option is enabled.

**Enable ISBT128 -** Set the ISBT128 subtype. A check in the checkbox indicates that the option is enabled.

**Enable Plain Code128 -** Enables other (non-EAN or ISBT) Code 128 subtypes. 

**ISBT128 Concat Mode -** Select an option for concatenating pairs of ISBT code types:

* **Concat Mode Never -** Do not concatenate pairs of ISBT codes encountered.

* **Concat Mode Always -** There must be two ISBT codes in order to decode and perform concatenation. Does not decode single ISBT symbols.

* **Concat Mode Auto -** Decodes and concatenates pairs of ISBT codes immediately. If only a single ISBT symbol is present, the device must decode the symbol the number of times set via Redundancy - Code128 before transmitting its data to confirm that there is no additional ISBT symbol.

**Check ISBT Table -** The ISBT specification includes a table that lists several types of ISBT barcodes that are commonly used in pairs. If ISBT128 Concat Mode is set, enable "Check ISBT Table" to concatenate only those pairs found in this table. Other types of ISBT codes are not concatenated.

**Security Level -** The scanner offers four levels of decode security for Code 128 barcodes. As the quality of barcodes decreases, implementing an increased level of security will compensate and help improve decoding success. There is an inverse relationship between scanner aggressiveness and security. Zebra recommends choosing carefully the level of security necessary for any given application: 

* **Security Level 0 -** This setting allows the scanner to operate in its most aggressive state, while providing sufficient security in decoding most "in-spec" barcodes.

* **Security Level 1 -** This setting eliminates most decode failures.

* **Security Level 2 -** Select this option if Security level 1 fails to eliminate decode failures.

* **Security Level 3 -** If Security Level 2 is selected and decode failures still occur, select this security level. Be advised, selecting this option is an extreme measure against mis-decoding severely out-of-spec barcodes. Selecting this security level significantly impairs the decoding ability of the scanner. If this level of security is required, try to improve the quality of the barcodes.

------

### Trioptic39

**Redundancy -** Sets the reader to read the barcode twice before accepting data. 

------

### HAN XIN

**HAN XIN Inverse -** Checks the inverse of the HanXin decoder. 

------

### Matrix 2of5

**Length1&#42; -** Used to set decode length.
**Length2&#42; -** Used to set decode length.
**Redundancy -** Sets the reader to read the bar code twice before accepting data.
**Report Check Digit -** Transmit Matrix 2of5 data with or without the check digit.
**Verify Check Digit -** Enable this feature to check the integrity of all Matrix 2of5 symbols to verify that the data complies with a specified check digit algorithm.

_&#42; See **[Decode Lengths section](#decodelengths)**, below_

------

### MicroPDF

**Code 128 Emulation -** Enable this option to transmit data from certain MicroPDF417 symbols as Code 128. **This option requires that the AIM Code ID Character be enabled**.

**Enable Code 128 Emulation** to transmit these MicroPDF417 symbols with one of the following prefixes:

* **]C1** if the first codeword is 903, 904 or 905

* **]C2** if the first codeword is 908 or 909

* **]C0** if the first codeword is 910 or 911

**Disable Code 128 Emulation** to transmit these MicroPDF417 symbols with one of the following prefixes:

* **]L3** if the first codeword is 903, 904 or 905

* **]L4** if the first codeword is 908 or 909

* **]L5** if the first codeword is 910 or 911.

------

### Webcode

**Webcode Subtype -** Enables decoding of the GT Webcode subtype. A check in the checkbox enables this option.

------

### Composite AB

**UCC Link Mode:**

* Link Flag ignored

* Always Linked

* Auto Discriminate

**MultiPacket Mode:**

* Multi-Part, Single-Packet

* Mutli Independent Reads

**Use UPC Preamble Check Digit -** Use the UPC rules specified in the UPC-EAN parameters when reporting composite decode data.

------

### Composite C

**MultiPacket Mode:**

* Multi-Part, Single-Packet

* Mutli Independent Reads

------

### USPostnet

**Report Check Digit -** Transmit USPostnet data with or without the check digit. A check in the checkbox sends USPostnet data with a check digit.

------

### USPlanet

**Report Check Digit -** Transmit USPlanet data with or without the check digit. A check in the checkbox sends USPlanet data with a check digit.

------

### UK Postal

**Report Check Digit -** Transmit UK Postal data with or without the check digit. A check in the checkbox sends UK Postal data with a check digit.

------

### Korean 3of5

**Length1&#42; -** To decode a Korean 3 of 5 symbol with a specific length range, set this value to the lower limit. For example, to decode Korean 3 of 5 symbols containing between 4 and 12 characters, this value would be set to 4.

**Length2&#42; -** To decode a Korean 3 of 5 symbol with a specific length range, set this value to the upper limit. For example, to decode Korean 3 of 5 symbols containing between 4 and 12 characters, this value would be set to 12.

_&#42; See **[Decode Lengths section](#decodelengths)**, below_

**Redundancy -** Sets the reader to read the barcode twice before accepting data.

------

## Decode Lengths

The allowable decode lengths are specified by **Length1** and **Length2** as follows:

* **Variable length -** Decode symbols containing any number of characters:
	* Set both Length1 and Length2 to "0" (zero)
* **Range -** Decode a symbol with a specific length range from a-b (inclusive):
	* Set Length1 to "a" (the lower bound) and set Length2 to "b" (the upper bound)
* **Two Discrete Lengths -** Decode only symbols containing either of two specific lengths:
	* Set Length2 as the _**shorter**_ length and Length1 as the _**longer**_ one
* **One Discrete Length -** Decode only symbols containing a specific length:
	* Set both Length1 and Length2 to the desired (non-zero) length

------

## UPC/EAN Params
The UPC/EAN Parameter allows configuration of parameters that apply to more than one UPC or EAN decoder.

<img style="height:350px" src="upc_params.png"/>
<br>

**Security Level -** The scanner offers four levels of decode security for UPC/EAN barcodes. As the quality of barcodes decreases, implementing an increased level of security will compensate and help improve decoding success. There is an inverse relationship between scanner aggressiveness and security. Zebra recommends choosing carefully the level of security necessary for any given application: 

* **Level 0 -** This setting allows the scanner to operate fastest, while providing sufficient security in decoding "in-spec" UPC/EAN barcodes.

* **Level 1 -** As barcode quality levels diminish, certain characters become prone to decode failures before others (i.e., 1, 2, 7, 8). If the scanner is decode failures poorly printed barcodes, and the decode failures are limited to these characters, select this security level.

* **Level 2 -** If the scanner fails to decode poorly printed barcodes, and the decode failures are not limited to characters 1, 2, 7, and 8, select this security level.

* **Level 3 -** If the scanner is still fails to decode, select this security level. Be advised, selecting this option is an extreme measure against decode failures for severely out-of-spec barcodes. Selecting this level of security can significantly impair the decoding ability of the scanner. If this level of security is required, try to improve the quality of the barcodes.

**Supplemental2 -** A check in the checkbox enables this option.

**Supplemental5 -** A check in the checkbox enables this option.

### Supplemental Mode

**No Supplementals -** The scanner is presented with a UPC/EAN plus supplemental symbol, the scanner decodes UPC/EAN and ignores the supplemental characters.

**Supplemental Always -** The scanner decodes only UPC/EAN symbols with supplemental characters, and ignores symbols without supplementals.

**Supplemental Auto -** The scanner decodes UPC/EAN symbols with supplemental characters immediately. If the symbol does not have a supplemental, the scanner must decode the barcode the number of times set via UPC/EAN Supplemental Redundancy before transmitting its data to confirm that there is no supplemental.

**Supplemental Smart -** Enables smart supplementals. In this mode, the decoder returns the decoded value of the main block immediately unless it belongs to one of the following supplemental types: 
* 378
* 379
* 977
* 978
* 979
* 414
* 419
* 434
* 439

If the barcode is preceded by one of the prefixes above, the image is searched more aggressively for a supplemental and attempts to scan it. If the supplemental scanning fails, only the main barcode is returned.

**Supplemental 378-379 -** Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 378 or 379. Disables reading of supplementals for any other UPC/EAN barcode not starting with 378 or 379. Tries to scan the supplemental if present. If the supplemental scanning fails, only the main barcode is returned.

**Supplemental 978-979 -** Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 978 or 979. Disables reading of supplementals for another UPC/EAN barcode not starting with 978 or 979. Tries to scan the supplemental if present. If the supplemental scanning fails, only then the main barcode is returned.

**Supplemental 414-419-434-439 -** Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 414, 419, 434 or 439. Disables reading of supplementals for another UPC/EAN barcode not starting with 414, 419, 434 or 439. Tries to scan the supplemental if present. If the supplemental scanning fails, only the main barcode is returned.

**Supplemental 977 -** Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 977. Disables reading of supplementals for another UPC/EAN barcode not starting with 977. Tries to scan the supplemental if present. If the supplemental scanning fails, only the main barcode is returned.

**Retry Count -** Retry count for auto-discriminating for supplementals. Possible values are 2 to 20 inclusive. Note that this flag is only considered if Supplemental Mode is set to one of the following values: Supplementals Auto, Supplementals Smart, Supplementals 378-379, Supplementals 978-979, Supplementals 977 or Supplementals 414-419-434-439 (2 to 20).

**Random Check Digit -** Enables random weight check digit verification. 

**Linear Decode -** Not in use. Deprecated.

**Coupon -** Enables Coupon code decoding. To successfully decode any Coupon codes, all appropriate decoders must be enabled. 

**Bookland -** When enabled, select a Bookland Format from the list below.  

**Bookland Format -** When Bookland is enabled, permits selection of an option for Bookland data:

* **Format ISBN-10 -** The scanner reports Bookland data starting with 978 in traditional 10-digit format with the special Bookland check digit for backward-compatibility. Data starting with 979 is not considered Bookland in this mode.

* **Format ISBN-13 -** The scanner reports Bookland data (starting with either 978 or 979) as EAN-13 in 13-digit format to meet the 2007 ISBN-13 protocol.

* **Convert GS1 To UPC EAN -** If this is set it converts GS1 barcodes to UPC/EAN format. For this setting to work UPC/EAN symbologies must be enabled. A check in the checkbox indicates that the option is enabled.

## Reader Params
Reader Parameters control specific configuration options for the barcode reader selected in the Profile being edited. **Not all parameters will apply to all readers**. 

<img style="height:350px" src="reader_params.png"/>
<br>

------
**Illumination mode -**  Turns illumination on and off.

**Aim Mode -** Turns aim pattern on and off.

**Aim Type -** Permits selection of reader behavior when the trigger is pressed: 

* **Trigger -** For each trigger press, a single barcode can be scanned.

* **Timed Hold –** Once trigger is pressed, an aiming session is started for a time specified by Aim Timer. When this time expires, a decode session is started and scan beam will be visible. The decode session will remain active until the Beam Timer expires, the trigger is released or a barcode is decoded.

* **Timed Release -** Once the trigger is pressed, an aiming session is started and will continue until the trigger is released. If the Aim Timer is expired when the trigger is released, a decode session will be started with scan beam visible for a remaining time equal to Beam Timer or a barcode is decoded.

* **Press and Release -** The scan beam starts when the trigger is pressed and released. The decode session will remain active until the Beam Timer expires or a barcode is decoded.

* **Continuous Read -** A press and hold of the scan trigger will continuously scan barcodes. **Not supported with the Zebra RS507 Bluetooth Ring Scanner**.

**Beam Timer -** Sets the maximum amount of time (in ms) that the reader remains on. Supports a range from 0 - 60,000 ms in increments of 100 ms. A value of 0 sets the reader to stay on indefinitely.

**Aim Timer -** Sets the duration (in ms) for timed aim modes. Supports a range from 0 - 60,000 ms in increments of 100 ms.

**Image Capture Mode -** Sets the barcode scanner to image capture mode: 

* **None -** No image capturing.

* **Single Image Capture on Decode -** Captures an image with decoded data.

* **Image Capture Only -** Only captures and image and no barcode data will be dispatched.

**Note: Zebra does not recommend changing this parameter when barcode scanning is used with DataWedge. No image data will be processed by DataWedge**.

------

**Linear Security Level -** Sets the number of times a barcode is read to confirm an accurate decode:

* **Security Redundancy and Length -** Two times read redundancy based on redundancy flags and code length.

* **Security Short or Codabar -** Two times read redundancy if short barcode or Codabar.

* **Security All Twice -** Two times read redundancy for all barcodes.

* **Security Long and Short -** Two times read redundancy for long barcodes, three times for short barcodes.

* **Security All Thrice -** Three times read redundancy for all barcodes.

------

**Picklist -** Permits selection of Picklist mode, which instructs the imager to decode only the barcode directly under the cross-hair/reticle in the viewfinder. This feature is most useful for applications in which multiple barcodes may appear in the field of view during a decode session but only one is desired for decoding.

* **Disable -** Disables Picklist mode; any barcode within the field of view can be decoded.

* **Hardware Picklist -** Picklist mode is enabled by sending a command to hardware.

* **Software Picklist -** Picklist feature is handled in the software; no commands are sent to hardware.

**Note: Performance might vary on some devices if Hardware or Software Picklist modes are set**.

------

**Same Symbol Timeout -** This parameter is used to prevent the scanner from decoding the same symbol within a specified time interval (applicable only when Aim Type is set to Continuous Read). A value of 0 indicates that no interval is required between two successive reads.

**Different Symbol Timeout -** This parameter is used to prevent the scanner from decoding another symbol within a specified time interval (applicable only when Aim Type is set to Continuous Read). A value of 0 indicates that no interval is required between two successive reads.

**LCD Mode -** Enable/Disable LCD Mode, which enhances the ability of the imager to read barcodes from LCD displays such as cellphones. **Applies to Scan Module only**.

**Note: Use of LCD mode might lead to performance degradation and a blinking reticle prior to decoding**.

------

**HW Engine Low Power Timeout -** Time (in ms) of inactivity before scanner enters low-power mode.

**Inverse 1D Mode -** Permits option selection for inverse 1D barcode decoding: 

* **Disabled -** Disables decoding of inverse 1D symbologies.

* **Enabled -** Enables decoding of inverse 1D symbologies only.

* **Auto -** Automatically detects and decodes positive and inverse 1D symbologies.

------

**1D Quiet Zone Level -** Sets the effort at which the decoder will attempt to decode margin-less barcodes: 

* **Level 0 -** The decoder will perform margin decoding as usual.

* **Level 1 -** The decoder will perform more aggressively.

* **Level 2 -** The decoder requires only one side end of barcode.

* **Level 3 -** The decoder can decode anything.

**Behavior of these levels will vary based on the margin-less decoder selected. See the [Reduced Quiet Zone](#reducedquietzone) table for behaviors**. 

>**Note**: Higher margin-less levels will increase decoding times and the risk of decoding errors. Zebra therefore recommends enabling only the symbologies that require a higher margin-less level, and leaving all other symbologies at the default level of 1. 

------

**Poor Quality Decode Effort -** Permits selection of enhancement modes for decoding barcodes of poor or degraded quality. Available options:

* **Effort Level 0 -** Decoding performance on regular 1D and 2D barcodes is not affected.

* **Effort Level 1 -** The scanner performance on regular 2-D barcodes is impacted while decoding performance on Tesco Thailand barcode and Suppository barcode is improved.

* **Effort Level 2 -** same as Level 1.

* **Effort Level 3 -** same as Level 1.

**Note:** Same performance from Effort Level 1 to Effort Level 3.

------

**Character Set Selection -** Allows the user to convert the barcode data if different from default encoding type. UTF-8 is the default value. Other options are ISO-8859-1 and Shift_JIS.

------

**Viewfinder Mode -** Permits selection of supported Viewfinder modes: 

* **Viewfinder Enabled -** Enables only the viewfinder.

* **Static Reticle -** Enables the viewfinder and a red reticle (cross-hairs) in the center of the screen to aid in positioning the barcode for scanning. **This parameter is supported only when the Camera is used for scanning**.

## Scan Params
Scan Parameters allow for configuration of Code ID and scanner-specific decoding feedback options for the scanner selected in the Profile being edited. 

**Note: Some parameters are device-dependent**.

<img style="height:350px" src="scan_params.png"/>
<br>

**Code ID Type -** Permits the selection of a Code ID character to insert between the prefix and the decoded symbol. The Code ID character identifies the code type of a scanned barcode. This information can be useful to an application when multiple barcode types are being read. Available options: 

* **Code ID Type None -** Insert no prefix.

* **Code ID Type Aim -** Inserts a standards-based three-character prefix.

* **Code ID Type Symbol -** Inserts a Zebra-defined single-character prefix.

------

**Volume Type -** Permits selection of the volume setting to be used when playing the Decode Audio Feedback. Available options: 

* **Ringer and Notifications -** Uses Ringer and Notifications volume setting for audio feedback.

* **Music and Media -** Uses Music and Media volume setting for audio feedback.

* **Alarms -** Uses the Alarms volume setting for audio feedback.

* **Decode Audio Feedback -** Select an audio tone to play to indicate a successful decode.

**Note**: Not all ringtones are supported as decode tones; some ringtones might be truncated when used as a decode tone. Zebra recommends testing all selected tones before deployment.

------

**Decode Haptic Feedback -** Enable the mobile computer to vibrate to indicate a successful decode.

**Decode Feedback LED Timer -** Defines the length of time (in ms) to flash the Green LED to indicate a successful decode.

**Decoding LED Notification -** When enabled, causes the Red LED to flash when the scan trigger is pressed.

------

**DataWedge Input Options**:

* **[Barcodes](../barcode) -** scan barcodes of all types   
* **[Mag-stripe Reader](../msr) -** capture credit/debit and identity card numbers
* **[SimulScan](../simulscan) -** document capture and muti-barcode scanning 


**Related Guides**:

* [Profiles](../profiles)
* [DataWedge Settings](../settings)
* [DataWedge APIs](../../api) 
