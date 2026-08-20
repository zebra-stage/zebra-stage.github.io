---
title: Text OCR Model
layout: guide.html
product: AI Data Capture SDK
productversion: "4.1"
---

## Overview

**Model Name:** text-ocr-recognizer

Text OCR is used to detect and recognize text within a given image. It is capable of handling use cases involving printed text in various sizes and non-stylized fonts, as well as dot peen fonts and handwriting.​

**Note:** Zebra strongly recommends updating to the latest models.

<div>
<form action="https://zebratech.jfrog.io/ui/repos/tree/General/emc-mvn-ext/com/zebra/ai/models/vision/text-ocr-recognizer/" method="get" target="_blank">
    <button type="submit" style="background-color: #5087b5; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Download Model</button>
</form>

</div>

---

## Version History

### New in v2.9.0

- Improved accuracy across multiple use cases and data sets, particularly:
  - **Longer Strings -** If the updated model does not yield the required results, utilizing the [tiling settings](../../textocr/#tiling-2) is recommended as an alternative.
  - **Unexpected String Splitting -** The new model mitigates unwanted splits caused by subtle character spacing differences. If further adjustments are necessary, utilizing the [grouping settings](../../textocr/#groupersettings) is recommended.
  - **Direct Part Marking (DPM) -** Character accuracy is improved for select DPM use cases, primarily for single-word metal DPM images.
- **Changes to unclip ratio:** Due to changes in the Text OCR model the unclip ratio range has shifted from 1.5-2.0 to 0.4-0.7 (0.6 is the default). Applications using non-default values should be updated to this new range. Use the following guidance for mapping values:
  - A previous value of 1.5 (original default) should be updated to 0.6.
  - A previous value of 2.0 value should be updated to 0.7.
  - Values between 1.5 and 2.0 should be scaled proportionally across the new 0.4 to 0.7 range.

### New in v2.8.1

- Improved overall performance, leading to increased accuracy.
- Added support for Q-6690 device platform.

---

## Requirements

- **Operating System:** Android 14 or higher. For specific OS versions, refer to AI Data Capture SDK Release Notes from the Zebra support portal.
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

---

## Performance Details

<table class="facelift" style="width:20" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
        <th>Model</th>
        <th>Model Dimensions</th>
        <th>Typical Load Time (ms)</th>
        <th>Typical Inference Time (ms)</th>
        <th>Typical Maximum Read Distance (cm)<br />8pt font (Times New Roman)</th>
        <th>Typical Maximum Read Distance (cm)<br />12pt font (Times New Roman)</th>
        <th>Typical Maximum Read Distance (cm)<br />36pt font (Times New Roman)</th>
    </tr>
    <tr>
        <td>text-ocr-recognizer​</td>
        <td>640x640</td>
        <td>1580</td>
        <td>110</td>
        <td>No Read</td>
        <td>20</td>
        <td>55</td>
    <tr>
    <tr>
        <td>text-ocr-recognizer​</td>
        <td>1280x1280</td>
        <td>1780</td>
        <td>180</td>
        <td>25</td>
        <td>40</td>
        <td>130</td>
    <tr>
    <tr>
        <td>text-ocr-recognizer​</td>
        <td>1600x1600</td>
        <td>1740</td>
        <td>270</td>
        <td>35</td>
        <td>40</td>
        <td>145</td>
    <tr>
    <tr>
        <td>text-ocr-recognizer​</td>
        <td>2560x2560</td>
        <td>1840</td>
        <td>480</td>
        <td>50</td>
        <td>65</td>
        <td>165</td>
    <tr>
</table>

**Measurements Notes:**

- All measurements are estimations​.
- Measurements were conducted using the Zebra TC53 device equipped with the Qualcomm 6490 chipset operating on the DSP AI accelerator​.
- Images were 4MP Resolution under 300 Lux​ lighting conditions.
- Read distance met at least 90% Recall.

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

## <!--

## Version History

### Version 2.6.0

<div>
<form action="https://www.zebra.com/us/en/software/mobile-computer-software/zebra-mobile-computing-ai-suite.html" method="get" target="_blank">
    <button type="submit" style="background-color: #5087b5; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Download</button>
</form>

</div>
-->
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
