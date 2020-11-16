---
title: Trusted Staging
layout: guide.html
product: StageNow
productversion: '5.0'
---

## Overview

**StageNow 4.0 (and higher) supports Trusted Staging**, which can protect devices with MX 9.2 and higher from unauthorized staging. Trusted devices are created from a security certificate. Once a certificate is used to create a trusted device, the device can be staged only from barcodes created using the same security certificate.

> **`IMPORTANT:`** Access to Trusted Staging and Trusted Devices is possible only by Windows users with administrative privileges.

#### Requirements: 

* StageNow 4.0 (or higher) installed
* Zebra device(s) with MX 9.2 or higher
* Self-signed security "Trusted Certificate" (`.pfx` file of 1024 bytes or less)

#### Process Snapshot:

1. Create a Trusted Certificate `.pfx` file (1024 bytes or less)
2. Import the Trusted Certificate into StageNow
3. Deploy the Trusted Certificate to device(s) to make them Trusted Device(s)<br> 
 `NOTES:`<br>
 • This activates Trusted Staging on target device(s)<br>
 • Such device(s) no longer accept standard ("untrusted") Profiles
4. Create Trusted Profile(s) for use on Trusted Device(s)

-----

## Create a Trusted Device


### I. Import Certificate

> ***This process requires StageNow to be running in admin mode***. 

1. From the StageNow Home screen, **click the "Trusted Certificates" button**: 
 <img alt="image" style="height:350px" src="SN4_01.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
2. From the Trusted Certificates page, **select a previously imported certificate** from the list and skip to Step 5.<br> **To import a new certificate, click the "Import Certificate" button**: 
 <img alt="image" style="height:350px" src="SN4_12.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
 `CAUTION:` **Certificate files must NOT be greater than 1024 bytes in size**. 
3. **Navigate to the** `.pfx` **file being imported**:
  <img alt="image" style="height:350px" src="SN4_03.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
4. **Confirm that the imported file appears** in the list of Trusted Certificates similar to the image below.<br>
 **NOTE**: When imported, the `.pfx` file is encrypted and given a `.cer` file extension.
   <img alt="image" style="height:350px" src="SN4_04.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
5. **Create a staging profile that pushes the certificate to the device(s)** to become Trusted (next section).
<br>

#### Also see: [How to create a self-signed certificate](https://techdocs.zebra.com/enterprise-browser/latest/guide/certificates/)

-----

### II. Deploy Certificate to Device(s)

1. From the Home screen, **click the Create new Profile button**: 
  <img alt="image" style="height:450px" src="SN4_deploy01.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
2. **Select "Xpert Mode" and the click "Create" button**: 
  <img alt="image" style="height:450px" src="SN4_deploy02.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
3. **Enter a name** for the deployment profile and **click the "Start" button**:  
  <img alt="image" style="height:450px" src="SN4_deploy03.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
4. **Click the plus (+) sign** on the "Batch" CSP line and **click the "Add" button**: 
  <img alt="image" style="height:450px" src="SN4_deploy04.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
5. **Select "Turn On Trusted Mode"** from the drop-down menu:
  <img alt="image" style="height:450px" src="SN4_deploy06.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
6. **Click the Navigation button** to bring up an "Open" dialog (shown in Step 7):
  <img alt="image" style="height:450px" src="SN4_deploy07.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
7. **Navigate to and select the certificate file** (imported in Section I, Step 4) and **click the "Open" button**:<br>
 **NOTE**: When imported, the `.pfx` file is encrypted and given a `.cer` file extension.
  <img alt="image" style="height:450px" src="SN4_deploy08.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
8. Confirm that the `.cer` file appears and **click the "Continue" button**: 
  <img alt="image" style="height:450px" src="SN4_deploy07a.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
9. **Select "Encrypted" from the drop-down menu** as shown and **click the "Complete Profiles" button**: 
  <img alt="image" style="height:450px" src="SN4_deploy09.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
10. **Select the desired barcode type** for the staging client and **click the "Test" button** to generate barcodes: 
  <img alt="image" style="height:450px" src="SN4_deploy10.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
11. **<u>Use the device(s) to be made Trusted</u> to scan the barcodes and deploy the certificate**: 
  <img alt="image" style="height:450px" src="SN4_deploy11.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>

> `IMPORTANT:` All devices that scan barcodes generated this way become "Trusted Devices" and can no longer be staged with standard "untrusted" staging Profiles; <u>they can be staged ONLY with Trusted Profiles created using the same certificate as was deployed to the device(s)</u>. 

-----

### III. Create Trusted Staging Profile

**Trusted Profiles are the same as standard ("untrusted") Profiles <u>with one important exception</u>**: The final step adds a "Trusted" designation and requires selection of a security certificate. 

#### To Create a Trusted Profile:

1. From the Home screen, **click the "Create new Profile" button**. Before selecting a Wizard, **be sure that MX 9.2 (or higher) is selected from the drop-down menu**: 
  <img alt="image" style="height:450px" src="SN4_trustedProfile00.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
1. When naming, **Zebra recommends selecting names that make the Profile easy to identify later**: 
  <img alt="image" style="height:450px" src="SN4_trustedProfile01.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
2. In the final step of Profile creation, **select "Trusted" from the drop-down menu**: 
  <img alt="image" style="height:550px" src="SN4_trustedProfile02.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
3. **From the the drop-down menu of certificates previously imported, <u>select the certificate that matches the one deployed to target device(s)</u>**: 
  <img alt="image" style="height:550px" src="SN4_trustedProfile03.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>

**Trusted Profiles are identified in Profile lists by a green lock icon** as in the sample image below: 
  <img alt="image" style="height:450px" src="SN4_trustedProfile04.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>

#### `IMPORTANT:` Trusted Devices can be staged ONLY with a Trusted Profile that contains the same certificate as was deployed to those devices. 

#### See the [Staging Profiles Guide](../stagingprofiles) for further details. 

-----

## Turn Off Trusted Mode

If it becomes necessary to remove a device from Trusted Mode, simply create a Trusted Profile and select "Turn Off Trusted Mode" using the Batch CSP. Details are below. 

#### To create a Trusted Profile turning off Trusted Mode: 

1. From the Home screen, **click the Create new Profile button**: 
  <img alt="image" style="height:450px" src="SN4_deploy01.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
2. **Select "Xpert Mode" and the click "Create" button**: 
  <img alt="image" style="height:450px" src="SN4_deploy02.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
3. **Enter a name** for the deployment profile and **click the "Start" button**:  
  <img alt="image" style="height:450px" src="SN4_trustedModeOff01.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
4. **Click the plus (+) sign** on the "Batch" CSP line and **click the "Add" button**: 
  <img alt="image" style="height:450px" src="SN4_deploy04.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
5. **Select "Turn Off Trusted Mode"** from the drop-down menu and **click the "Continue" button**:
  <img alt="image" style="height:450px" src="SN4_trustedModeOff02.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
5. **Select "Trusted"** from the drop-down menu, <br> select the same certificate file used to put the device into Trusted Mode from its drop-down menu and <br>**click the "Complete Profiles" button**:
  <img alt="image" style="height:450px" src="SN4_trustedModeOff04.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
6. **Select the desired barcode type** for the staging client and **click the "Test" button** to generate barcodes:
  <img alt="image" style="height:450px" src="SN4_trustedModeOff05.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>
11. **<u>Use the device(s) to be removed from Trusted Mode</u> to scan the barcodes**:
  <img alt="image" style="height:450px" src="SN4_trustedModeOff06.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>

**The device is now removed from Trusted Mode and can be staged using ordinary staging Profiles**. 

-----

