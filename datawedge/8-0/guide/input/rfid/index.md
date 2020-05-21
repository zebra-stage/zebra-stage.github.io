---
title: RFID Input
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## Overview

**Radio-frequency identification (RFID) Input** acquires data from RFID tags using integrated RFID Zebra mobile computers. _Currently this feature is supported on MC3300R only._ RFID is another input source to DataWedge - data delivery is similar to other input sources such as Barcode and MSR (Magnetic-stripe Reader). The data acquired is processed and formatted according to the [Basic Data Formatting (BDF)](../../process/bdf) and [Advanced Data Formatting (ADF)](../../process/adf) options located in the **Keystroke output** section of the profile. 

> **Important:** For instructions on initial setup, refer to "Setting Up the MC3300R" section from [MC3300R Integrator Guide](https://www.zebra.com/content/dam/zebra_new_ia/en-us/manuals/mobile-computers/mc33/mc3300R-ig-en.pdf).

### Version History
* **DataWedge 7.5 -** New parameters that include Link Profile, Dynamic Power, Pre filters, and Post filters.
* **DataWedge 7.3.22 -** Feature introduced

## RFID Input
**RFID Input** from the DataWedge profile provides options to toggle RFID input, specify the trigger mode and configure RFID reader settings.

<img style="height:350px" src="./rfid-input.jpg"/>
<br>

**Enabled -** enable/disable RFID tag reading <br>
**Reader selection -** display the name of the internal RFID reader<br>
**Hardware trigger -** enable/disable hardware trigger to activate RFID reading. If enabled, set the **Trigger mode**.<br>
**Configure reader settings:**<br>
* **Filter duplicate tags –** enable/disable feature to display data read only once instead of duplicating the same data from multiple readings. 
* **Tag read duration –** amount of time (in ms) for events to propagate to the application. If the trigger is released before the timeout elapses, data is returned to the application upon trigger release. Data returned to the application is limited to the capacity of the Android bundle payload – any data read beyond that capacity is discarded.
* **Antenna transmit power –** amount of signal power to be transmitted by the RFID reader. The higher the value, the further it is able to read the RFID tag. The range is 5 to 30 dBm. 
* **Session -** configure the read session. Refer to **EPC UHF Gen2 Air Interface Protocol Standard** for details. Supported values:
  * **Session 0 -** based on _EPC UHF Gen2 Air Interface Protocol Standard Specification_
  * **Session 1 (default) -** based on _EPC UHF Gen2 Air Interface Protocol Standard Specification_
  * **Session 2 -** based on _EPC UHF Gen2 Air Interface Protocol Standard Specification_
  * **Session 3 -** based on _EPC UHF Gen2 Air Interface Protocol Standard Specification_
* **Memory bank –** configure the memory bank to read. The integrated circuit (IC) on some tags have different bit allocations between the memory banks to allow for more user memory or a longer EPC (electronic product code) number. Refer to the tag specifications to determine the memory bank type needed. Supported values: 
  * **None (default) -** no memory bank to read. 
  * **Reserved -** store the access and kill password of the tag, 32 bits each. The kill password permanently disables the tag. The access password is set to lock and unlock the write capabilities of the tag. Therefore this is writeable if a password is specified. Can typically be used if an application contains sensitive data. 
  * **EPC -** store the EPC code with a minimum of 96 bits of memory.  
  * **User -** (optional) extended memory to store more information. This can have various sizes, usually 512 bits and up to 8K of memory.  Can be used for additional data that is not suitable or does not fit into the EPC memory, such as temperature or expiration date. 
  * **TID (tag identification) -** store the unique tag identifier from the manufacturer, which typically cannot be changed. 
* **Trigger mode –** select the mode to activate the RFID reader. Supported values: 
  * **Immediate (default) –** tag reading takes place based on when the trigger is pressed.
  * **Continuous-** continually reads tags after pressing the trigger once. Press the trigger again to terminate tag reading. 
* **Feedback –** configure audio or visual feedback from an RFID tag read. Options: 
  * **Beeper -** audio feedback
  * **LED -** visual feedback
* **Link Profile –** select the profile to be used by the reader from the automatically populated options based on the connected reader. The populated range of values is subject to change based on the reader model. 
* **Dynamic power –** enable/disable optimization of RFID reader power consumption.
* **Pre filters:**
  * **Enable pre filters -** enable/disable the tag pattern pre filter options based on standard RFID protocol.
  * **Tag pattern -** specify the hexadecimal character pattern to compare for tag filtering. Pattern matching is based on the **Offset value.**  Maximum characters: 64 byte hexadecimal. 
  * **Memory bank -** specify the memory bank on which the filter is to be applied. Supported values: User, TID, EPC.
  * **Offset -** specify the offset from the start of the memory bank in bytes in which to apply the **Tag pattern** criteria. 
  * **Action -** indicate whether matching tags assert or de-assert SL (Selected Flag), or set their inventoried flag to A or to B. Options:<br>
        • INV A NOT INV B or ASRT_SL_NOT_DSRT_SL<br>
        • INV A or ASRT SL<br>
        • NOT INV B or NOT DSRT SL<br>
        • INV A2BB2A NOT INV A or NEG SL NOT ASRT SL<br>
        • INV B NOT INV A or DSRT SL NOT ASRT SL<br>
        • INV B or DSRT SL<br>
        • NOT INV A or NOT ASRT SL<br>
        • NOT INV A2BB2A or NOT NEG SL<br>
  * **Target -** indicate which flag shall be affected when pre filter is applied. Options: <br>
        • SESSION S0<br>
        • SESSION S1<br>
        • SESSION S2<br>
        • SESSION S3<br>
        • SL FLAG<br>
* **Post filters:**
  * **Enable post filters -** enable/disable post filtering performed by DataWedge service.
  * **Number of tags to read -** specify the maximum number of tags to display in a single inventory action. Integer range: 0 to 1000.
  * **RSSI value -** display the overall trend of the RFID signal based on proximity. The closer the value is to 0, the closer in proximity the tag is located. Value range: -100 to 0. 


<!--
* **Session -** configure the read session based on EPC Gen 2 standard to optimize RFID read performance. The session defines the duration of time and conditions which an inventoried tag remains in either state A or B. State A is the state in which a tag has not been inventoried. State B is the state in which the tag has been inventoried. During the inventory process, presuming the default state is A, the reader switches the tag's state to B once the read is performed. Since tags in the B state have already been accounted for, the focus can be on tags in the A state. Supported values:
  * **Session 0 -** the tag persists in the B state as long as it is powered in the RF field. When there is no reader power, tags in the B state revert back to the A state. This can be useful to read a small number of tags quickly and repeatedly. It is not good for reading numerous tags at once since if a tag loses power momentarily, it will reset.
  * **Session 1 (default) -** the tag persists in the B state for a limited time even after being removed from the RF field. The time period varies depending on the manufacturer, ranging from 500 ms to 5 seconds. When the time period elapses, regardless of whether the tag is powered, it reverts back to the A state.
  * **Session 2 -** the tag persists in the B state for at least 2 seconds after being removed from the RF field. This can be useful to read large quantities of tags while minimizing duplicate reads.
  * **Session 3 -** same as session 2
-->

##Key mapping
MC3300R consists of multiple triggers, all utilized for Barcode and SimulScan features by default. In order to use the hardware trigger for an RFID action, it needs to be mapped to RFID. Steps to follow:

**Manual Instructions:**
1. Open Android Settings. 
2. Tap Key Programmer.
3. Tap SYMBOL_RFID. 

**CSP (Configuration Service Provider) Instructions:** With CSP, use StageNow for key mapping to be updated during device staging. Refer to [KeyMapping Manager](/stagenow/latest/csp/keymap) for more information.

## Data
Important notes regarding RFID data reading:
* By default, a newline character is added after each tag read. 
* A data set returned in one read cycle may include one or more tags. 
* If applicable, a data set from multiple data reads can be returned if multiple tags are read simultaneously. 
* If receiving data via **Keystroke output**, it requires **Inter character delay** to be set to 50 ms. 

<img style="height:350px" src="./profile-rwdemo.jpg"/>
<br>

##RWDemo
**RWDemo** demonstrates RFID features in DataWedge. This application is pre-installed on supported Zebra RFID devices, such as MC33R, and creates a DataWedge profile associated with RWDemo when launched. 

------

**Related guides**:

* [Advanced Data Formatting](../../process/adf)
* [Basic Data Formatting](../../process/bdf) 
* [Intent Output](../../output/intent) 
* [Keystroke Output](../../output/keystroke)
* [Profiles/Plug-ins](../../profiles)
* [DataWedge APIs](../../api) 

