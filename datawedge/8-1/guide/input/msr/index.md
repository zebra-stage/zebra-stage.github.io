---
title: Mag-Stripe Reader Input
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## Overview
**Magnetic Stripe Reader (MSR) Input** is used to acquire data from a "mag-stripe" card such as a credit or debit card. The information stored on the black magnetic strip is transferred to the device when the card is "swiped" through the MSR. Information is encoded in an open format using the ANSI x4.16 standard and usually relates to the carrier's identity and/or financial institution. DataWedge can acquire and output the raw data from most cards that use the ANSI x4.16 format. For cards that also adhere to [ISO/ABA specifications](https://www.magtek.com/content/documentationfiles/d99800004.pdf) published by the ISO and American Bankers Association, developers can opt to enable Zebra encryption, which protects data immediately upon acquisition and at all times thereafter. Once enabled on a Zebra device, **encryption cannot be disabled**. 

Under the [ANSI magnetic stripe standard](https://www.magtek.com/content/documentationfiles/d99800004.pdf), data is stored on the card in three tracks. Unencrypted data can be acquired from any of the individual tracks or from all three at once. The same is true of data encrypted using Zebra's Enhanced Mode encryption. Zebra Original Mode encryption treats all three tracks as a single entity.  

<img style="height:350px" src="msr_encryption_modes.png"/>
_The three modes of MSR card encoding, two of which include encryption_
<br>
<br>

#### Enabling Encryption

**<u>Enabling encryption on a device cannot be undone</u>**. Once a device has been configured to encrypt ISO/ABA data, it can never again be configured to output raw ISO/ABA data; switching between Original and Enhanced encryption modes is the only permitted change on such devices. <u>Encryption applies only to ISO/ABA data</u>; all other MSR-acquired data is output in unencrypted form using Non-ISO Mode. 

To learn how to enable encryption and work with encrypted data, refer to the [ID TECH SecureHead User Manual](https://atlassian.idtechproducts.com/confluence/download/attachments/30479625/80101505-001-H%20User%20manual%20SecureHead%20USB%20UART.pdf?api=v2). 

#### Compatible Zebra Devices
The following Zebra devices can use DataWedge to acquire (and optionally encrypt) MSR data: 

* **MC40 with MSR** (model# [MC40N0-SLK3RM1](https://www.zebra.com/us/en/products/mobile-computers/handheld/mc40-mobile-computer-series.html)) 
* **TC70/TC75** with MSR snap-on module (part# [MSR-TC7X-SNP1-01](https://www.zebra.com/us/en/products/accessories/mobile-computer/mobile-payment-device/magnetic-card-reader.html))

See all [MC40 configuration options (.pdf)](https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/Mobile_Computers/Hand-Held%20Computers/MC40%20Touch%20Computer/guide/MC40%20Configuration%20and%20Accessories%20Guide.pdf). 

-----

## MSR Input

**To enable DataWedge to accept MSR input**:

Check the "Enabled" box in the MSR Input section of the desired Profile(s):    
<img style="height:350px" src="msr_input.png"/>
_MSR input enabled in the "DWDemo" Profile_
<br>

**Note**: DataWedge also provides beep sounds and other feedback to indicate scanning results. See the [Scan Params](../barcode/#scanparams) section for more information. 

-----

## MSR Output

**<u>DataWedge outputs MSR data only through intents</u>**. This is true whether acquired data is open or encrypted. It is therefore necessary for <!--Intent Output to be enabled and-->the receiving application to be capable of accepting and processing data from an intent bundle. To help simplify the use of MSR data for application developers, DataWedge automatically parses acquired data, formats it for specific uses, and places the modified data into specific tags. For example, the code for printing a receipt might make use of one of the "Masked Data (ASCII)" tags, which displays all but the last four digits of the credit card number as asterisks. 

For modifying the acquired data, DataWedge offers only the formatting options shown in the sections below. Options for formatting data beyond those shown can be found in the [ID TECH SecureHead User Manual](https://atlassian.idtechproducts.com/confluence/download/attachments/30479625/80101505-001-H%20User%20manual%20SecureHead%20USB%20UART.pdf?api=v2). **Custom data formatting is the sole responsibility of the developer**.

### To get MSR data: 

	:::java
	Intent.getStringtExtra()

The method call above returns all data readable from the card. The table below lists the data fields contained in the tag.

-----

## Non-ISO Mode

Non-ISO Mode is the default mode on any device on which encryption is not enabled. This mode outputs the data without encryption exactly as read form the card. Its three status tags (in the Mapping table below) indicate the presence of data in each of the corresponding tracks on the card. 

On devices with encryption enabled, Non-ISO Mode is invoked only when reading a card that is **<u>not</u>** ISO/ABA compliant; data from such cards is otherwise encrypted using Original or Enhanced Mode and can never be configured otherwise. 

**MSR data from <u>all three tracks</u> is contained in the tag**: `com.symbol.datawedge.msr_data`

### Non-ISO Field-to-Tag Mapping 
<table border="0" cellspacing="0" cellpadding="0" class="Table4"><colgroup><col width="311"/><col width="403"/></colgroup>
<tr class="Table41" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8021in; " class="Table4_A1"><p class="P22"><span class="T18"><strong><u>Card Data Field</u></strong></span></p></td>
<td style="text-align:left;width:3.6347in; " class="Table4_A1"><p class="P22"><span class="T18"><strong><u>Maps to DataWedge Tag</u></strong></span></p></td></tr>
<tr class="Table42"><td style="text-align:left;width:2.8021in; " class="Table4_A2"><p class="P21"><span class="T26">Track 1 Status</span></p></td><td style="text-align:left;width:3.6347in; " class="Table4_B2"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track1_status</span></p></td></tr>
<tr class="Table42" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8021in; " class="Table4_A3"><p class="P21"><span class="T26">Track 2 Status</span></p></td><td style="text-align:left;width:3.6347in; " class="Table4_B3"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track2_status</span></p></td></tr>
<tr class="Table42"><td style="text-align:left;width:2.8021in; " class="Table4_A4"><p class="P21"><span class="T26">Track 3 Status</span></p></td><td style="text-align:left;width:3.6347in; " class="Table4_B4"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track3_status</span></p></td></tr>
<tr class="Table42" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8021in; " class="Table4_A5"><p class="P21" bgcolor="#e0e0eb"><span class="T26"><strong>All MSR Data (see Fields Table, below)</strong></span></p></td><td style="text-align:left;width:3.6347in; " class="Table4_B5"><p class="P23"><span class="T27"><strong>com.symbol.datawedge.msr_data</strong></span></p></td></tr>
</table>

-----

### Non-ISO Fields
<table border="0" cellspacing="0" cellpadding="0" class="Table7">
<tbody>
<colgroup>
<col width="125"/><col width="347"/><col width="249"/></colgroup>
<tr class="Table71" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A1"><p class="P22"><span class="T12"><strong>Field Number</strong></span></p></td>
<td style="text-align:left;width:3.125in; " class="Table7_A1"><p class="P22"><span class="T12"><strong>Description</strong></span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_A1"><p class="P22"><span class="T12"><strong>Notes</strong></span></p></td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">1</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">STX</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P26"> </p></td></tr>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A3"><p class="P22"><span class="T13">2</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B3"><p class="P23"><span class="T13">Length</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C3"><p class="P26"> </p></td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">3</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">Card Encoding Type</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P26"> </p></td>
</tr>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A5"><p class="P22"><span class="T13">4</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B5"><p class="P23"><span class="T13">Track 1-3 Status</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C5"><p class="P26"> </p></td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">5</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">Track 1 Unencrypted Length </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P23"><span class="T13">0 = "No track 1 data present"</span></p></td>
</tr>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A7"><p class="P22"><span class="T13">6</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B7"><p class="P23"><span class="T13">Track 2 Unencrypted Length </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C7"><p class="P23"><span class="T13">(always present)</span></p></td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">7</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">Track 3 Unencrypted Length </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P23"><span class="T13">0 = "No track 3 data present"</span></p></td>
</tr>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A9"><p class="P22"><span class="T13">8</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B9"><p class="P23"><span class="T13">Track 1 Data </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C9"><p class="P23"><span class="T13">(if present)</span></p></td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">9</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">Track 2 Data </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P23"><span class="T13">(always present)</span></p></td></td>
</tr>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A11"><p class="P22"><span class="T13">10</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B11"><p class="P23"><span class="T13">Track 3 Data </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C11"><p class="P23"><span class="T13">(if present)</span></p></td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">11</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">LRC </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P26"> </p></td>
</tr>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A13"><p class="P22"><span class="T13">12</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B13"><p class="P23"><span class="T13">Checksum</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C13"><p class="P26"> </p></td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">13</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">ETX</span></p></td>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A13"><p class="P22"><span class="T13"></span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B13"><p class="P23"><span class="T13"></span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C13"><p class="P26"> </p></td>
</tr>
</tbody>
</table>

-----

## Enhanced Mode

Zebra Enhanced Mode encrypts data on each track separately, enabling data to from each track to be handled separately, if desired. Tags for obtaining the data are shown below. 

**MSR data from <u>all three tracks</u> is contained in the tag**: `com.symbol.datawedge.msr_data`

The tag above returns all data readable from the card. The table below lists the data fields contained in the tag.

### Enhanced Mode Field-to-Tag Mapping
<table border="0" cellspacing="0" cellpadding="0" class="Table2"><colgroup><col width="319"/><col width="395"/></colgroup><tr class="Table21" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A1"><p class="P22"><span class="T18"><strong>Card Data Field</strong></span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_A1"><p class="P22"><span class="T18"><strong>Maps to DataWedge Tag</strong></span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A2"><p class="P21"><span class="T26">Track 1 Status</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B2"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track1_status</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A3"><p class="P21"><span class="T26">Track 2 Status</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B3"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track2_status</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A4"><p class="P21"><span class="T26">Track 3 Status</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B4"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track3_status</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A5"><p class="P21"><span class="T26">Track 1 Encrypted data present</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B5"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track1_encrypted_status</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A4"><p class="P21"><span class="T26">Track 2 Encrypted data present</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B4"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track2_encrypted_status</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A7"><p class="P21"><span class="T26">Track 3 Encrypted data present</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B7"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track3_encrypted_status</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A4"><p class="P21"><span class="T26">Track 1 Masked Data (ASCII)</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B4"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track1</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A9"><p class="P21"><span class="T26">Track 2 Masked Data (ASCII)</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B9"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track2</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A4"><p class="P21"><span class="T26">Track 3 Masked Data (ASCII)</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B4"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track3</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A11"><p class="P21"><span class="T26"><strong>All MSR Data (see Field table for details)</strong></span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B11"><p class="P23"><span class="T27">com.symbol.datawedge.msr_data</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A4"><p class="P21"><span class="T26">Track 1 Encrypted Data (HEX)</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B4"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track1_encrypted</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A13"><p class="P21"><span class="T26">Track 2 Encrypted Data (HEX)</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B13"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track2_encrypted</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A4"><p class="P21"><span class="T26">Track 3 Encrypted Data (HEX)</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B4"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track3_encrypted</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A15"><p class="P21"><span class="T26">Track 1 Hashed</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B15"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track1_hashed</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A4"><p class="P21"><span class="T26">Track 2 Hashed</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B4"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track2_hashed</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A17"><p class="P21"><span class="T26">Track 3 Hashed</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B17"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track3_hashed</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A4"><p class="P21"><span class="T26">DUKPT Serial Number (KSN)</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B4"><p class="P23"><span class="T26">com.symbol.datawedge.msr_ksn</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A15"><p class="P21"><span class="T26"></span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B15"><p class="P23"><span class="T26"></span></p></td></tr>
</table>

-----

### Enhanced Mode Fields
<!-- <p class="P10"> </p>
-->
<table border="0" cellspacing="0" cellpadding="0" class="Table6"><colgroup><col width="125"/><col width="347"/><col width="249"/></colgroup>
<tr class="Table61" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A1"><p class="P22"><span class="T19"><strong>Field Number</strong></span></p></td><td style="text-align:left;width:3.125in; " class="Table6_A1"><p class="P22"><span class="T19"><strong>Description</strong></span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_A1"><p class="P22"><span class="T19"><strong>Notes</strong></span></p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">1</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">STX </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P26"> </p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A3"><p class="P22"><span class="T13">2</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B3"><p class="P23"><span class="T13">Length</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C3"><p class="P26"> </p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">3</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Card Encoding Type</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P26"> </p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A5"><p class="P22"><span class="T13">4</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B5"><p class="P23"><span class="T13">Track 1-3 Status</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C5"><p class="P26"> </p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">5</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Track 1 Unencrypted Length </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P23"><span class="T13">0 = "No track 1 data present"</span></p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A7"><p class="P22"><span class="T13">6</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B7"><p class="P23"><span class="T13">Track 2 Unencrypted Length </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P23"><span class="T13">(always present)</span></p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">7</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Track 3 Unencrypted Length </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P23"><span class="T13">0 = "No track 3 data present"</span></p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A9"><p class="P22"><span class="T13">8</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B9"><p class="P23"><span class="T13">Clear/Masked Data Sent Status</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C9"><p class="P26"> </p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">9</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Encrypted/Hashed Data Sent Status</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P26"> </p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A11"><p class="P22"><span class="T13">10</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B11"><p class="P23"><span class="T13">Track 1 Masked </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C11"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">11</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Track 2 Masked</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P23"><span class="T13">(always present)</span></p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A13"><p class="P22"><span class="T13">12</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B13"><p class="P23"><span class="T13">Track 3 Masked </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C13"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">13</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Track 1 Encrypted </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A15"><p class="P22"><span class="T13">14</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B15"><p class="P23"><span class="T13">Track 2 Encrypted </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P23"><span class="T13">(always present)</span></p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">15</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Track 3 Encrypted </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A17"><p class="P22"><span class="T13">16</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B17"><p class="P23"><span class="T13">Track 1 Hashed </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C17"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">17</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Track 2 Hashed </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P23"><span class="T13">(always present)</span></p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A19"><p class="P22"><span class="T13">18</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B19"><p class="P23"><span class="T13">Track 3 Hashed </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C19"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">19</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">KSN (DUKPT Serial Number)</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P26"> </p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A21"><p class="P22"><span class="T13">20</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B21"><p class="P23"><span class="T13">LRC</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C21"><p class="P26"> </p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">21</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Checksum</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P26"> </p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A23"><p class="P22"><span class="T13">22</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B23"><p class="P23"><span class="T13">ETX</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C23"><p class="P26"> </p></td></tr>
</table>

-----

## Original Mode

Zebra Original Mode encrypts data on the three tracks as a single entity, preventing track data from be handled separately except as contained in the tags described below, which Zebra created as a convenience according to the most common use cases. All readable data from all three tracks on the card is placed in the tag `com.symbol.datawedge.msr_data` and can be parsed as desired by the developer.  

The table below lists the data fields contained in the tag.

### Original Mode Field-to-Tag Mapping
<table border="0" cellspacing="0" cellpadding="0" class="Table3"><colgroup><col width="312"/><col width="402"/></colgroup><tr class="Table31" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8125in; " class="Table3_A1"><p class="P22"><span class="T18"><strong>Card Data Field</strong></span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_A1"><p class="P22"><span class="T18"><strong>Maps to DataWedge Tag</strong></span></p></td></tr>
<tr class="Table32"><td style="text-align:left;width:2.8125in; " class="Table3_A2"><p class="P21"><span class="T26">Track 1 Status</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B2"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track1_status</span></p></td></tr>
<tr class="Table32" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8125in; " class="Table3_A3"><p class="P21"><span class="T26">Track 2 Status</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B3"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track2_status</span></p></td></tr>
<tr class="Table32"><td style="text-align:left;width:2.8125in; " class="Table3_A4"><p class="P21"><span class="T26">Track 3 Status</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B4"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track3_status</span></p></td></tr>
<tr class="Table32" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8125in; " class="Table3_A5"><p class="P21"><span class="T26">Track 1 Masked Data (ASCII)</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B5"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track1</span></p></td></tr>
<tr class="Table32"><td style="text-align:left;width:2.8125in; " class="Table3_A4"><p class="P21"><span class="T26">Track 2 Masked Data (ASCII)</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B4"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track2</span></p></td></tr>
<tr class="Table32" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8125in; " class="Table3_A7"><p class="P21"><span class="T26">Track 3 Masked Data (ASCII)</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B7"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track3</span></p></td></tr>
<tr class="Table32"><td style="text-align:left;width:2.8125in; " class="Table3_A4"><p class="P21"><span class="T26"><strong>All MSR Data (see Field table for details)</strong></span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B4"><p class="P23"><span class="T27">com.symbol.datawedge.msr_data</span></p></td></tr>
<tr class="Table32" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8125in; " class="Table3_A9"><p class="P21"><span class="T26">Track 1 Encrypted Data (HEX)</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B9"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track1_encrypted</span></p></td></tr>
<tr class="Table32"><td style="text-align:left;width:2.8125in; " class="Table3_A4"><p class="P21"><span class="T26">Track 2 Encrypted Data (HEX)</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B4"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track2_encrypted</span></p></td></tr>
<tr class="Table32" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8125in; " class="Table3_A11"><p class="P21"><span class="T26">Track 3 Encrypted Data (HEX)</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B11"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track3_encrypted</span></p></td></tr>
<tr class="Table32"><td style="text-align:left;width:2.8125in; " class="Table3_A4"><p class="P21"><span class="T26">Track 1 Hashed</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B4"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track1_hashed</span></p></td></tr>
<tr class="Table32" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8125in; " class="Table3_A13"><p class="P21"><span class="T26">Track 2 Hashed</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B13"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track2_hashed</span></p></td></tr>
<tr class="Table32"><td style="text-align:left;width:2.8125in; " class="Table3_A4"><p class="P21"><span class="T26">Track 3 Hashed</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B4"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track3_hashed</span></p></td></tr>
<tr class="Table32" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8125in; " class="Table3_A15"><p class="P21"><span class="T26">DUKPT Serial Number (KSN)</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B15"><p class="P23"><span class="T26">com.symbol.datawedge.msr_ksn</span></p></td></tr>
</table>

-----

### Original Mode Fields
<table border="0" cellspacing="0" cellpadding="0" class="Table5"><colgroup><col width="124"/><col width="347"/><col width="271"/></colgroup>
<tr class="Table51" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A1"><p class="P22"><span class="T17"><strong>Field Number</strong></span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_A1"><p class="P22"><span class="T17"><strong>Description</strong></span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_A1"><p class="P22"><span class="T17"><strong>Notes</strong></span></p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">1</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">STX</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P26"> </p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A3"><p class="P22"><span class="T13">2</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B3"><p class="P23"><span class="T13">Length</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C3"><p class="P26"> </p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">3</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">Card Encoding Type</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P26"> </p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A5"><p class="P22"><span class="T13">4</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B5"><p class="P23"><span class="T13">Track 1-3 Status</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C5"><p class="P26"> </p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">5</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">Track 1 Unencrypted Length </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P23"><span class="T13">0 = "No track 1 data present"</span></p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A7"><p class="P22"><span class="T13">6</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B7"><p class="P23"><span class="T13">Track 2 Unencrypted Length </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P23"><span class="T13">(always present)</span></p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">7</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">Track 3 Unencrypted Length </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P23"><span class="T13">0 = "No track 3 data present"</span></p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A9"><p class="P22"><span class="T13">8</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B9"><p class="P23"><span class="T13">Track 1 Masked </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C9"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">9</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">Track 2 Masked</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P23"><span class="T13">(always present)</span></p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A11"><p class="P22"><span class="T13">10</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B11"><p class="P23"><span class="T13">Track 3 Data </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C11"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">11</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">Encrypted Data<br/>(Track 1 + Track 2 + Track 3)</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P23"><span class="T13">Track 1 and Track 3 included only if present</span></p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A13"><p class="P22"><span class="T13">12</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B13"><p class="P23"><span class="T13">Track 1 Hashed </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C13"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">13</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">Track 2 Hashed</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P23"><span class="T13">(always present)</span></p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A15"><p class="P22"><span class="T13">14</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B15"><p class="P23"><span class="T13">KSN (DUKPT Serial Number)</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C15"><p class="P26"> </p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">15</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">LRC </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P26"> </p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A17"><p class="P22"><span class="T13">16</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B17"><p class="P23"><span class="T13">Checksum</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C17"><p class="P26"> </p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">17</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">ETX</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P26"> </p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A17"><p class="P22"><span class="T13"></span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B17"><p class="P23"><span class="T13"></span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C17"><p class="P26"> </p></td></tr>
</table>

-----

## Configuration

Programmatically configure MSR and retrieve the configuration:
* [Set Config](../../api/setconfig/#setmsrinputconfiguration)
* [Get Config](../../api/getconfig/#getmsrinputconfiguration)

-----

**Related guides**:

* [DataWedge Profiles](../../profiles) - guides for all DataWedge input, processing and output options 
* [DataWedge APIs](../../api) - usage specifications for all DataWedge-supported intents 
* [ID TECH SecureHead User Manual](https://atlassian.idtechproducts.com/confluence/download/attachments/30479625/80101505-001-H%20User%20manual%20SecureHead%20USB%20UART.pdf?api=v2) - Tech specs of the [ID TECH](http://www.idtechproducts.com/) read head used in Zebra MSR devices 
* [ANSI x9.24-2016](http://webstore.ansi.org/RecordDetail.aspx?sku=ANSI+X9.24-2-2016) - Encryption key (DUKPT) specifications

