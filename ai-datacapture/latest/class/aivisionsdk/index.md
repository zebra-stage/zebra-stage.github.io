---
title: AIVisionSDK
layout: guide.html
product: AI Data Capture SDK
productversion: ""
---

## Overview

The `AIVisionSDK` class provides a set of functionalities for working with AI Data Capture models. It allows developers to initialize the SDK, retrieve version information, and retrieve model archive details. This class includes both instance and static methods that facilitate the management and operation of AI Data Capture tasks.

---

## getSDKVersion ()

        String getSDKVersion()

**Description:** Retrieves the current version of the AI Data Capture SDK. This method is useful for ensuring compatibility and maintaining version control within applications using the SDK.

**Return Value:** String representing the SDK version, formatted as MAJOR.MINOR.PATCH.

**Sample Code:**

        // Get the SDK version
        String sdkVersion = AIVisionSDK.getInstance(this.getApplicationContext()).getSDKVersion();

---

## getModelArchiveInfo (int modelType)

        String AIVisionSDK.getModelArchiveInfo (int modelType) throws InvalidInputException

**Description:** Obtains information about a model based on the specified type, formatted as a JSON string. It caters to models categorized by type, such as barcode localizer, shelf localizer, or OCR.

**Parameters:**

- **modelType -** Integer representing the type of model (e.g., barcode, OCR, shelf).
  - **0 -** Barcode Localizer
  - **1 -** OCR
  - **2 -** Shelf Localizer

**Return Value:** A JSON-formatted string containing information about the specified model type.

**Exceptions:**

- **InvalidInputException -** Thrown when the `modelType` is invalid or unrecognized.

**Sample Code:**
//Get model archive info
int modeltype = 0;// 0 – Barcode localizer

        String modelInfo = AIVisionSDK.getInstance(his.getApplicationContext()).getModelArchiveInfo(modelType);

**Sample JSON Response for Barcode Localizer:**

        {"id":"h584fe5f19958575e381576b1332e5001","models":[{"details":{"classes":["LinearCode","DataMatrix","QRCode","Aztec","PDF417","DotCode","PostalCode","MaxiCode","CompositeCode","HanXinCode","2D_Code","MicroPDF417","MicroQRCode","GridMatrix","ArUco"],"thresholds":[0.522883,0.458015,0.657128,0.741542,0.854713,0.501189,0.0105327,0.649458,0.785859,0.853738,0.475047,0.714595,0.350847,0.349967,0.732143]},"name":"model"}],"version":"3.1.0"}


---

## init()

        public boolean init()

**Description:** Initializes the AI Data Capture SDK, setting up necessary configurations and resources. It must be called before performing any operations that depend on the SDK.

**Return Value:** `true` if the initialization is successful, otherwise `false`.

**Sample Code:**

        // Initialize SDK
        boolean isInitDone = AIVisionSDK.getInstance(this.getApplicationContext()).init();

---

## getInstance (Context context)

        public static AIVisionSDK getInstance(Context context) throws UnsupportedOperationException

**Description:** Returns a singleton instance of the `AIVisionSDK` class. This ensures efficient resource management by maintaining a single SDK instance across the application.

**Parameters:**

- **context:** A `Context` object providing environment-specific information necessary for SDK initialization and operation.

**Return Value:** An instance of `AIVisionSDK`.

**Exceptions:**

- **UnsupportedOperationException -** Thrown if the SDK cannot be instantiated due to environmental constraints or unmet prerequisites.

**Sample Code:**

        // Get AIVisionSDK instance
        AIVisionSDK aivisionSDK = AIVisionSDK.getInstance(this.getApplicationContext());

---

## IsSDKInitialized ()

        public static boolean IsSDKInitialized()

**Description:** Checks whether the SDK has been successfully initialized, useful for verifying the readiness of the SDK before executing dependent operations.

**Returns:** `true` if the SDK is initialized, otherwise `false`.

**Sample Code:**

        // Check if SDK is initialized
        boolean isSDKInitialized = AIVisionSDK.IsSDKInitialized();

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
