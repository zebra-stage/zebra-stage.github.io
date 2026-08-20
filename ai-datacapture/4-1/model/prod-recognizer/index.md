---
title: Product and Shelf Recognizer Model
layout: guide.html
product: AI Data Capture SDK
productversion: "4.1"
---

## Overview

**Model Name:** product-and-shelf-recognizer

Product recognition is used to detect and recognize products located on retail shelf images, as well as detect other classes including shelf labels, peg labels, and shelves. It is capable of recognizing the products using the previously prepared index. The index must be generated with the same model version from the set of cropped product images with their labels.​

This bundle comprises of **product and shelf localizer** and **product recognizer.​**

**Note:** Zebra strongly recommends updating to the latest models.

<div>
<form action="https://zebratech.jfrog.io/ui/repos/tree/General/emc-mvn-ext/com/zebra/ai/models/vision/product-and-shelf-recognizer/" method="get" target="_blank">
    <button type="submit" style="background-color: #5087b5; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Download Model</button>
</form>

</div>

---

## Version History

### New in v3.4.4

- Updated configurations for compatibility with the latest SDK version.

### New in v3.4.3

- Added support for Q-6690 device platform.

### New in v3.4.2

- Improves detection for the cosmetic product category.

---

## Requirements

- **Operating System:** Android 14 or higher. For specific OS versions, refer to AI Data Capture SDK Release Notes from the [Zebra support portal](https://www.zebra.com/us/en/support-downloads.html#q=ai%20suite).
- **Minimum SDK Version:** AI Data Capture SDK v4.0.0 or later.
- **Supported Zebra Devices:**
    <table class="facelift" align="" style="width:80%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
        <th>Features</th>
        <th>Platform</th>
        <th>Device Model</th>
    </tr>

    <tr>
        <td rowspan="3"><b>Products with DSP</b> <br />Fastest and most battery efficient</td>
        <td>QC6490</td>
        <td>TC53, TC58, TC73, TC78, ET60, ET65 </td>
    </tr>

    <tr>
        <td>QC5430</td>
        <td>EM45</td>
    </tr>
    
    <tr>
        <td>Q-6690</td>
        <td>TC501, TC701</td>
    </tr>

    </table>

  For more information on devices based on platform, see [Zebra Platform Devices](https://support.zebra.com/article/000022440).

- **Memory Requirements:** Since running multiple on-device models concurrently is highly resource-intensive, using multiple models within the AI Data Capture SDK is recommended for high-memory devices only.

<!--
- **Supported devices:** Zebra EM45 devices and QC6490 and QC4490 platform mobile computers; see [Zebra Platform Devices](https://support.zebra.com/article/000022440) for compatible models.
-->

---

## Technical Details

- **Input Resolutions Recommended:**
  - 640x640
  - 832x832
  - 1280x1280
  - 1600x1600​ (Localizer only)​

**Note:** Any other resolutions chosen will result in higher model load times.

<i class="fa fa-exclamation-triangle" style="color:#FFA500;"></i> **Note:** Exceeding these recommended input resolutions may result in increased model load times.​

## <!--

## Performance Details

Measured using Zebra TC53 device with Qualcomm 6490 chipset running on DSP AI accelerator​

<table class="facelift" align="" style="width:75%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
        <th>Model</th>
        <th>Default Input Image<br />Resolution</th>
        <th>Load Time</th>
        <th>Inference Time</th>
        <th>API Time<br />(SDK + Inference)</th>
        <th>Memory Usage</th>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    <tr>
</table>
-->
---

## Resources

<div style="display: flex; gap: 10px;">

<form action="https://ptr.zebra.com/SDK-mobileAISuite" method="get" target="_blank">
    <button type="submit" style="background-color: #5087b5; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Download SDK</button>
</form>

<form action="/ai-datacapture" method="get" target="_blank">
    <button type="submit" style="background-color: black; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">SDK Documentation</button>
</form>

<form action="https://github.com/ZebraDevs/AISuite_Android_Samples/tree/main/AISuite_QuickStart" method="get" target="_blank">
    <button type="submit" style="background-color: #5087b5; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Sample Apps</button>
</form>

</div>

---

## Related Guides

- [About](../../about/)
- [Setup](../../setup/)
- [Localizer](../../localizer/)
  - Models: [Barcode](../barcode-localizer/), [Product & Shelf](../prod-recognizer/)
- [Product Recognition](../../productrecognition/) - Model: [Model](../prod-recognizer/)
  - [Feature Extractor](../../productrecognition/#featureextractor)
  - [Feature Storage](../../productrecognition/#featurestorage)
  - [Recognizer](../../productrecognition/#recognizer)
- [Barcode Decoder](../../barcodedecoder/)
- [Text OCR](../../textocr/)
  - [Model](../textocr/)
- [CameraX](../../camerax/)
  - [EntityTrackerAnalyzer](../../camerax/#entitytrackeranalyzer)
  - [Detectors](../../camerax/#detectors)
  - [EntityViewfinder](../../camerax/#entityviewfinder)
- [Image Attributes Detector](../imageattributes/)
- [Image Transform Detector](../imagetransform/)
- [Custom Detector](../customdetector/)
- [Entity](../../entity/)
- [Data Types](../../types/)
