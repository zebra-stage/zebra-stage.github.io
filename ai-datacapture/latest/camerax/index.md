---
title: CameraX
layout: guide.html
product: AI Data Capture SDK
productversion: ""
---

## Overview

[CameraX](https://developer.android.com/media/camera/camerax) is a Jetpack support library for Android that simplifies camera app development by providing a consistent, easy-to-use API across various Android devices. It offers backward compatibility, facilitates smoother camera operations, and integrates seamlessly with existing camera APIs. CameraaX enhances the developer experience with features such as automatic lifecycle management and easy access to use cases such as preview, image capture, and image analysis. 

AI Data Capture SDK supports integration with CameraX-based applications by providing: 
- **Detectors for BarcodeDecode and TextOCR –** Tools for building custom Analyzers.
- **EntityTrackerAnalyzer –** Capabilities for detecting, decoding and tracking Entities.
- **EntityView –** An integrated viewfinder designed to work alongside EntityTrackerAnalyzer. 

For details on compatibility, refer to the [CameraX requirements](https://developer.android.com/media/camera/camerax/architecture#requirements). 

---

## Detectors

The `BarcodeDecoder` and `TextOCR` classes implement a detector interface, enabling efficient image analysis using the `process()` method: 
- [BarcodeDecoder](../barcodedecoder/) – This detector method accepts `ImageData` and generates a list of `BarcodeEntity` objects:
- [TextOCR](../textocr/) - This detector interface facilitates integration with CameraX as the frame source, allowing the creation of custom analyzers for detecting and decoding barcodes within frames provided to the `analyze()` interface. This is particularly beneficial for applications requiring the combination of multiple detectors within the CameraX analyzer. This detector processes `ImageData` to analyze textual content.

        process (ImageData imageData)

---


Related Guides:

- [About](../about/)
- [Setup](../setup/)
- [Localizer](../localizer/)
- [Product Recognition](../productrecognition/)
  - [Feature Extractor](../productrecognition/#featureextractor)
  - [Feature Storage](../productrecognition/#featurestorage)
  - [Recognizer](../productrecognition/#recognizer)
- [Barcode Decoder](../barcodedecoder/)
