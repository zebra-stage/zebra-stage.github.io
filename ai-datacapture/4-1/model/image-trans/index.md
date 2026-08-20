---
title: Object Detector Model
layout: guide.html
product: AI Data Capture SDK
productversion: "4.1"
---

## Overview

**Model Name:** FCN-ResNet50-object-segmentation

The Image Transform Detector's **Object Detector model** provides object detection functionality using an [FCN-ResNet50 implementation](https://github.com/pytorch/vision/blob/main/torchvision/models/segmentation/fcn.py), which has been optimized for efficient execution within the AI Data Capture SDK. It is trained to detect multiple distinct object classes. The underlying implementation is derived from the PyTorch vision library and is licensed under [BSD-3-CLAUSE](https://github.com/pytorch/vision/blob/main/LICENSE).

**Note:** Zebra strongly recommends updating to the latest models.

<div>
<form action="https://zebratech.jfrog.io/ui/repos/tree/General/emc-mvn-ext/com/zebra/ai/models/vision/FCN-ResNet50-object-segmentation" method="get" target="_blank">
    <button type="submit" style="background-color: #5087b5; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Download Model</button>
</form>
</div>

---

## Requirements

- **Operating System:** Android 14 or higher. For specific OS versions, refer to the AI Data Capture SDK Release Notes on the [Zebra support portal](https://www.zebra.com/us/en/support-downloads.html#q=ai%20suite).
- **Minimum SDK Version:** AI Data Capture SDK v4.0.0 or later.
- **License:** A Picture Proof of Delivery License (AI Blueprint, Annual) is required. The SKU for this annual license is ZEBRA-AI-BP-PPOD. See [Licensing](../../license/) for procurement and deployment instructions.
- **Supported Zebra Devices:**
    <table class="facelift" align="" style="width:80%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
        <th>Features</th>
        <th>Platform</th>
        <th>Device Model</th>
    </tr>

    <tr>
        <td rowspan="2"><b>Products with DSP</b> <br />Fastest and most battery efficient</td>
        <td>QC6490</td>
        <td>TC53, TC58, TC73, TC78, ET60, ET65 </td>
    </tr>

    </table>

  For more information on devices based on platform, see [Zebra Platform Devices](https://support-new.zebra.com/article/000022440).

- **Memory Requirements:** Since running multiple on-device models concurrently is highly resource-intensive, using multiple models within the AI Data Capture SDK is recommended for high-memory devices only.

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
- [Entity](../../entity/)
- [Data Types](../../types/)
