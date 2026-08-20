---
title: AIVisionSDK
layout: guide.html
product: AI Data Capture SDK
productversion: "4.1"
---

## Overview

The `AIVisionSDK` class is a singleton designed to manage operations within the AI Data Capture SDK. It provides methods for initializing the SDK, retrieving version information, and accessing model archive details. Specifically for use on Zebra devices, this class interacts with the native library and handles licensing requirements.

---

## getSDKVersion ()

        String getSDKVersion()

**Description:** Retrieves the current version of the AI Data Capture SDK. This method is useful for ensuring compatibility and maintaining version control within applications using the SDK.

**Return Value:** String representing the SDK version, formatted as MAJOR.MINOR.PATCH.

**Sample Code:**

        // Get the SDK version
        String sdkVersion = AIVisionSDK.getInstance(this.getApplicationContext()).getSDKVersion();

---

## getModelArchiveInfo (String mavenModelName)

        String getModelArchiveInfo(String mavenModelName) throws InvalidInputException, AIVisionSDKException

**Description:** Retrieves model information from a Maven-specified model archive.

**Return Value:** Returns a JSON-style string with model information.

For barcode-localizer, the following is an example of the expected model information:

        {"id":"h584fe5f19958575e381576b1332e5001","models":[{"details":{"classes":["LinearCode","DataMatrix","QRCode","Aztec","PDF417","DotCode","PostalCode","MaxiCode","CompositeCode","HanXinCode","2D_Code","MicroPDF417","MicroQRCode","GridMatrix","ArUco"],"thresholds":[0.522883,0.458015,0.657128,0.741542,0.854713,0.501189,0.0105327,0.649458,0.785859,0.853738,0.475047,0.714595,0.350847,0.349967,0.732143]},"name":"model"}],"version":"3.1.0"}

For product-and-shelf-localizer,the following is an example of the expected model information:

        {"id":"h9aad4019668dd891464a6ba8e777d636","models":[{"name":"descriptor"},{"details":{"classes":["product","label_shelf","label_peg","shelf"],"thresholds":[0.428574,0.498056,0.56302,0.485179]},"name":"localizer"}],"version":"3.4.2"}

**Parameters:**

- **mavenModelName -** The name of the model specified in the Maven repository.

**Exceptions:**

- **InvalidInputException -** Thrown if the mavenModelName is invalid.
- **AIVisionSDKException -** Thrown if an error occurs while reading the specified model.

---

## getModelArchiveInfo (File modelFile)

        String getModelArchiveInfo(File modelFile) throws InvalidInputException, AIVisionSDKException

**Description:** Retrieves model archive information from a specified file.

**Parameters:**

- **modelFile -** The file object that contains the model.

**Return Value:** A JSON-style string with model archive information.

For barcode-localizer, the following is an example of the expected model information:

        {"id":"h584fe5f19958575e381576b1332e5001","models":[{"details":{"classes":["LinearCode","DataMatrix","QRCode","Aztec","PDF417","DotCode","PostalCode","MaxiCode","CompositeCode","HanXinCode","2D_Code","MicroPDF417","MicroQRCode","GridMatrix","ArUco"],"thresholds":[0.522883,0.458015,0.657128,0.741542,0.854713,0.501189,0.0105327,0.649458,0.785859,0.853738,0.475047,0.714595,0.350847,0.349967,0.732143]},"name":"model"}],"version":"3.1.0"}

For product-and-shelf-localizer, the following is an example of the expected model information:

        {"id":"h9aad4019668dd891464a6ba8e777d636","models":[{"name":"descriptor"},{"details":{"classes":["product","label_shelf","label_peg","shelf"],"thresholds":[0.428574,0.498056,0.56302,0.485179]},"name":"localizer"}],"version":"3.4.2"}

**Exceptions:**

- **InvalidInputException -** Thrown when the `modeFile` is invalid.
- **AIVisionSDKException -** Thrown if an error occurs while reading the specified model.

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
- [Custom Detector](../customdetector/)
- [Entity](../../entity/)
- [Data Types](../../types/)
