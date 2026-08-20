---
title: Inferencer Options
layout: guide.html
product: AI Data Capture SDK
productversion: "4.1"
---

## Overview

**Inferencer Options** offer settings that influence how the model processes input data to make predictions or inferences. Inferencers provide a way to efficiently execute machine learning models using available hardware.

---

## InferencerOptions()

        InferencerOptions.InferencerOptions()

**Description:** Constructs a new `InferencerOptions` object. Use this to create a new set of inference options for customizing how the specified model will be executed. This is often the first step before setting any specific parameters, particularly when default settings do not meet your requirements.

<!--

## runtimeDependencies

        String InferencerOptions.runtimeDependencies

**Description:** Specifies the path to any required runtime dependencies. Configure this option if your OCR model requires additional libraries or dependencies at runtime that are not included by default. This is important when deploying on platforms where dependencies might vary or when specific libraries are needed for model execution.

**Default:** ""
-->

---

## runtimeProcessorOrder

        integer InferencerOptions.runtimeProcessorOrder[]

**Description:** Specifies the preferred processing sequence to be used for running the model. By default, the processing order is set as: DSP, CPU, GPU. The corresponding processor values are:

- **0 -** CPU
- **1 -** GPU
- **2 -** DSP

Adjust this setting to optimize performance based on available the hardware. Use DSP for faster processing if available on the device, especially in environments with high-performance requirements or when running on devices with specialized processors for machine learning tasks.

The AI Data Capture SDK determines the target runtime processor by following the specified `runtimeProcessorOrder`. It selects the first available processor in the provided order. For example, if the `runtimeProcessorOrder` is set to {DSP, CPU, GPU}, the SDK attempts to execute the model on DSP first. If DSP is unavailable, it falls back to CPU, and finally to GPU if neither DSP nor CPU is available.

<i class="fa fa-exclamation-triangle" style="color:#FFA500;"></i> **Important Notes:**

- If the `runtimeProcessorOrder` parameter is not specified, the default processor order {DSP, CPU, GPU} is applied.
- When the following methods are called, and the specified runtime processor is not available on the device, an `AIVisionSDKException` error is thrown with the message "Given runtimes are not available:&lt;specified runtime(s)&gt;." The affected methods are:
  - Localizer.getLocalizer( )
  - BarcodeDecoder.getBarcodeDecoder()
  - TextOCR.getTextOCR()
  - FeatureExtractor.getFeatureExtractor()

---

## defaultDims

        DynamicDimensions InferencerOptions.defaultDims

**Description:** Specifies the image dimensions, height and width in pixels. This is important when processing non-standard image sizes or when consistent input dimensions are needed across different devices or use cases.

**Type:** {width, height}

**Default** { -1, -1} (No dimensions are enforced.)

## <!-- // Removed from v4.0

## PerformanceMode

        enum PerformanceMode

**Description:** Specifies the operational performance profile for the DSP. The SDK automatically chooses a default mode based on the device platform, but apps can use this enum to switch to a preferred mode.

**Values:**

- **BALANCED (0) -** Optimizes for power efficiency. This mode conserves battery and is highly recommended for continuous detection and recognition use cases.
- **BURST (1) -** Maximizes processing performance at the expense of increased power consumption. 

**Note:** BURST mode is only supported on select devices. Attempting to set BURST mode on unsupported devices/platforms throws an `AIVisionSDKException` with the message: “PerformanceMode = BURST, is not supported.”

**Sample Code:**

        // Set to balanced mode (default)
        textOCRSettings.detectionInferencerOptions.performanceMode = InferencerOptions.PerformanceMode.BALANCED;

        // Set to burst mode for maximum speed
        textOCRSettings.detectionInferencerOptions.performanceMode = InferencerOptions.PerformanceMode.BURST;

## -->

## Related Guides

- [About](../../about/)
- [Setup](../../setup/)
- [Localizer](../../localizer/)
  - Models: [Barcode](../../model/barcode-localizer/), [Product & Shelf](../../model/prod-recognizer/)
- [Product Recognition](../../productrecognition/) - Model: [Model](../../model/prod-recognizer/)
  - [Feature Extractor](../../productrecognition/#featureextractor)
  - [Feature Storage](../../productrecognition/#featurestorage)
  - [Recognizer](../../productrecognition/#recognizer)
- [Barcode Decoder](../../barcodedecoder/)
- [Text OCR](../../textocr/)
  - [Model](../../model/textocr/)
- [CameraX](../../camerax/)
  - [EntityTrackerAnalyzer](../../camerax/#entitytrackeranalyzer)
  - [Detectors](../../camerax/#detectors)
  - [EntityViewfinder](../../camerax/#entityviewfinder)
- [Image Attributes Detector](../imageattributes/)
- [Image Transform Detector](../imagetransform/)
- [Custom Detector](../customdetector/)
- [Entity](../../entity/)
- [Data Types](../../types/)
