---
title: Barcode Decoder Model
layout: guide.html
product: AI Data Capture SDK
productversion: "4.1"
---

## Overview

**Model Name:** barcode-decoder

The Barcode Decoder (formerly Barcode Localizer) model is designed to detect and decode 1D and 2D barcodes within each image. It handles use cases involving barcodes printed on documents, packaging, and direct part marking (DPM) barcodes.

**Note:** Zebra strongly recommends updating to the latest models.

<div>
<form action="https://zebratech.jfrog.io/ui/repos/tree/General/emc-mvn-ext/com/zebra/ai/models/vision/barcode-decoder" method="get" target="_blank">
    <button type="submit" style="background-color: #5087b5; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Download Model</button>
</form>

</div>

---

## Version History

### New in v5.0.4

- Tightened threshold configuration to eliminate partial decodes and mis-decodes.

### New in v5.0.3

- Replaced the Barcode Localizer Model (barcode-localizer) with the Barcode Decoder Model (barcode-decoder), combining image-based barcode detection and decoding into a single operation.
- Updated with configuration required for new SDK version compatibility.

<!--  New in 6.0.1
- Enabled barcode detection at arbitrary orientations, returning rotated corner points.
- Achieved high accuracy 1D barcode decode performance.
- Improved overall accuracy.
- Improved accuracy for barcodes containing 200 to 250 bars.
- Added support for longer barcodes containing 250 to 350 bars.
- Reduced model inference time by 50%.
-->

### New in v5.0.2

- Added support for Q-6690 device platform.

### New in v5.0.1

- Improved detection accuracy for low contrast images and for low contrast images and composite barcodes​.

---

## Requirements

- **Operating System:** Android 14 or higher. For specific OS versions, refer to AI Data Capture SDK Release Notes from the [Zebra support portal](https://www.zebra.com/us/en/support-downloads/mobile-computers.html).
- **Minimum SDK Version:** AI Data Capture SDK 4.0.0 or later.
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

<!-- - **Supported devices:** Zebra QC6490, QC4490, and QC5430 platform mobile computers; see [Zebra Platform Devices](https://support.zebra.com/article/000022440) for compatible models.
-->

---

## Technical Details

- **Input Resolutions Recommended:**
  - 640x640
  - 1280x1280
  - 1600x1600​

**Note:** This model is pre-cached with the recommended resolutions above. Any other resolutions chosen will result in higher model load times.

<i class="fa fa-exclamation-triangle" style="color:#FFA500;"></i> **Note:** For input resolutions beyond these recommendations, the model load time could be higher.​

---

## Performance Guidance

<table class="facelift" align="" style="width:75%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
        <th>Model</th>
        <th>Model Dimensions</th>
        <th>Typical Load Time (ms)</th>
        <th>Typical Detection Time<br />(ms, at 30 cms)</th>
        <th>Typical Max Detection Range (cms)</th>
        <th>Typical Detection + Decode Time (ms, at 30 cms)
        <th>Typical Max Detection + Decode Range (cms)
    </tr>
    <tr>
        <td>barcode-decoder</td>
        <td>640x640</td>
        <td>700</td>
        <td>22</td>
        <td>220</td>
        <td>57</td>
        <td>100</td>
    <tr>
    <tr>
        <td>barcode-decoder</td>
        <td>1280x1280</td>
        <td>770</td>
        <td>59</td>
        <td>340</td>
        <td>94</td>
        <td>100</td>
    <tr>
    <tr>
        <td>barcode-decoder</td>
        <td>1600x1600</td>
        <td>720</td>
        <td>89</td>
        <td>410</td>
        <td>124</td>
        <td>100</td>
    <tr>
</table>

**Measurements Notes:**

- All measurements are estimations​.
- Measurements were conducted using the Zebra TC53 device equipped with the Qualcomm 6490 chipset operating on the DSP AI accelerator​.
- Images were 4MP Resolution under 300 Lux​ lighting conditions.
- Measurements were based on a UPCA 13 mil barcode.
- Estimates reflect detection times only and do not include decode time.

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
