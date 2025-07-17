---
title: Inferencer Options
layout: guide.html
product: AI Data Capture SDK
productversion: ""
---

## Overview

**Inferencer Options** offer settings that influence how the model processes input data to make predictions or inferences.

---

## InferencerOptions()

        InferencerOptions.InferencerOptions()

**Description:** Constructs a new `InferencerOptions` object. Use this to create a new set of inference options for customizing how the OCR model will be executed. This is often the first step before setting any specific parameters, particularly when default settings do not meet your requirements.

<!-- 
---

## runtimeDependencies

        String InferencerOptions.runtimeDependencies

**Description:** Specifies the path to any required runtime dependencies. Configure this option if your OCR model requires additional libraries or dependencies at runtime that are not included by default. This is important when deploying on platforms where dependencies might vary or when specific libraries are needed for model execution.

**Default:** ""
-->
---

## runtimeProcessorOrder

        int InferencerOptions.runtimeProcessorOrder[]

**Description:** Specifies the preferred processor for running the model:

- **0 -** (Default) CPU
- **1 -** GPU
- **2 -** DSP

Adjust this setting to optimize performance based on available hardware. Use GPU or DSP for faster processing if available, especially in environments with high-performance requirements or when running on devices with specialized processors for machine learning tasks.

---

## defaultDims

        DynamicDimensions InferencerOptions.defaultDims

**Description:** Specifies the image dimensions, height and width in pixels, when required for OCR processing. This is important when processing non-standard image sizes or when consistent input dimensions are needed across different devices or use cases.

**Type:** {width, height}

**Default** { -1, -1} (No dimensions are enforced.)

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
- [TextOCR](../textocr/)
