---
title: Pallet and Box Localizer Model (Beta)
layout: guide.html
product: AI Data Capture SDK
productversion: "4.1"
---

## Overview

**Model Name:** pallet-and-box-localizer

As part of Zebra’s Frontline AI Enablers, this beta release introduces the new Pallet and Box Localizer Model (formerly Warehouse Localizer), expanding our suite of enterprise-ready AI solutions with powerful new capabilities. The Pallet and Box Localizer model is designed to detect key assets within warehouses and retail environments. It identifies items such as boxes, pallets, warehouse shelves, and shelf labels. This model is ideal for use cases like automated inventory counting and asset tracking.

Integrated with the AI Data Capture SDK Localizer building block, the model allows developers to incorporate warehouse asset detection directly into their applications. This beta release provides stable core functionality for evaluation and integration testing, with ongoing refinements planned prior to general availability.

> **Note on Beta Features:** Features marked as **(Beta)** are under active development and may be subject to change. They are made available for evaluation and feedback purposes. We do not recommend using Beta features in production environments.

**Note:** Zebra strongly recommends updating to the latest models.

<div>
<form action="https://zebratech.jfrog.io/ui/native/emc-mvn-ext/com/zebra/ai/models/vision/pallet-and-box-localizer/" method="get" target="_blank">
    <button type="submit" style="background-color: #5087b5; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Download Model</button>
</form>

</div>

---

## Version History

### New in v1.0.5

- Renamed the Warehouse Localizer Model (warehouse-localizer) to the Pallet and Box Localizer Model (pallet-and-box-localizer) to better reflect its targeted capabilities.
- Improved pallet and box detection precision, supporting better operational reliability for warehouse workflows.

### New in v1.0.4

- Improved detection accuracy for `boxitem` and `pallet` classes.

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
    </table>

  For more information on devices based on platform, see [Zebra Platform Devices](https://support.zebra.com/article/000022440).

- **Memory Requirements:** Since running multiple on-device models concurrently is highly resource-intensive, using multiple models within the AI Data Capture SDK is recommended for high-memory devices only.

---

## Technical Details

- **Input Resolution Recommended:** 832x832

<i class="fa fa-exclamation-triangle" style="color:#FFA500;"></i> **Note:** For input resolutions beyond this recommendation, the model load time could be higher.​

---

## Performance Guidance

<table class="facelift" align="" style="width:90%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
        <th>Model</th>
        <th>Default Input<br />Image Resolution</th>
        <th>SNPE Load Time (ms)</th>
        <th>Inference Time (ms)</th>
        <th>API Time (SDK + Inference) (ms)</th>
        <th>Inference Memory Usage (MB)</th>
    </tr>
    <tr>
        <td>pallet-and-box-localizer</td>
        <td>832x832</td>
        <td>26</td>
        <td>19</td>
        <td>981</td>
        <td>63</td>
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
