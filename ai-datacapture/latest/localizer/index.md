---
title: Localizer
layout: guide.html
product: AI Data Capture SDK
productversion: ""
---

## Overview

The `Localizer` class enables object detection within images, a process commonly referred to as localization. It processes input images and outputs a list of [bounding boxes](../types/#bbox/) that indicate the locations of detected objects or barcodes. This functionality is particularly beneficial for applications that require the identification and localization of specific objects within an image. The `Localizer` class can be configured through the [Localizer.Settings](#localizersettings) class, allowing specification and modification of model parameters as needed.

---

## Detection Models

There are two types of supported detection models: Barcode Localizer and Shelf Localizer.

### Barcode Localizer

The **[Barcode Localizer](../about/#localizer)** detects barcodes within images. It supported a wide range of barcode types, including: linear barcode (e.g., UPC and EAN), Data Matrix, QR Code, Aztec, PDF417, DotCode, Postal code, MaxiCode, Composite Code, Han Xin Code, MicroPDF417, Micro QR Code, GridMatrix, and ArUco. After detection, the [Barcode Decoder](../barcodedecoder/) can be used to decode the barcodes.

- **Input image size:** The dimensions (height and width) can be changed during runtime initialization. The default is 640x640.
- **Output:** The model outputs [bounding boxes](../types/#bbox/) around detected barcodes.

### Shelf and Product Localizer

The **[Shelf and Product Localizer](../about/#localizer)** model detects and identifies objects on retail shelves, including products, shelf labels, peg labels, and the shelves themselves.

- **Input image size:** The size can be adjusted during initialization based on the proximity of the camera to the shelf. The default size is 832x832 pixels.
- **Output:** The model outputs [bounding boxes](../types/#bbox/) for the detected objects on the shelf.

---

## Developer Guide

This guide outlines the process for using Barcode Localizer to detect barcodes within images, from initialization to detecting barcodes.

### Step 1: Initialization

To set up and initialize a Localizer object:

1.  **Import the Localizer class -** Use `com.zebra.ai.vision.Localizer`.
2.  **Initialize the SDK -** Use your application's context object and invoke `init()` from the [AIVisionSDK](../class/aivisionsdk/) class.
3.  **Get the model name -** Call [getModelName](#getmodelnameintmodeltype) and passing in the appropriate `modelType` to use based on the model type:

    - **Barcode Localizer -**

            String modelName =  Localizer.Settings.getModelName(Localizer.Settings.MODEL_TYPE_BARCODE_LOCALIZER);

    - **Shelf and Product Localizer -**

            String modelName = Localizer.Settings.getModelName(Localizer.Settings.MODEL_TYPE_SHELF_LOCALIZER);

4.  **Optional: Set model input dimensions -** If needed, customize the model input height and width through [inferencerOptions](../class/inferenceroptions/):

        settings.inferencerOptions.defaultDims.height = [your value];
        settings.inferencerOptions.defaultDims.width = [your value];

    The input size should be multiples of powers of two (e.g., 640). Adjust these dimensions based on the camera resolution for optimal detection results. See [Input Image Guidelines](#inputimageguidelines).

5.  **Initialize and load the model asynchronously:** Declare a `Localizer` object and use [CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html) to load the model asynchronously with `Localizer.getLocalizer(settings, executor)`. Ensure an [Executor](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Executor.html) is available to manage asynchronous processing.
6.  **Handle synchronous initialization:** Use the `thenAccept()` method of `CompletableFuture` to handle the initialized `Localizer` object. Assign the returned instance to your localizer variable, making it ready for barcode or shelf/product detection tasks.

#### Input Image Guidelines

For accurate detection of text and barcodes, input images must have sufficient pixel data to clearly represent the text or barcode. For instance, a 640x640 image may be suitable for scanning a parcel label that occupies the full width of the image, while a 1920x1920 image may be needed for capturing price tags on a shelf.

Considerations for input size:

- **Smaller input sizes -** Offer faster processing but may sacrifice accuracy.
- **Larger input sizes -** Improve detection accuracy for smaller or more distant objects, but take longer to process. <br />
  **Caution:** Selecting an excessively large input size may lead to out-of-memory errors, potentially causing the application to crash at runtime.

Real-time application tips:

- Consider the overall dimensions of the input images. Smaller images can be processed more quickly.
- To minimize latency, ensure that the text or barcodes occupy as much of the image as possible.
- Capture images at lower resolutions while maintaining sufficient accuracy.

#### Sample Code

        import com.zebra.ai.vision.Localizer;

        // Initialize SDK. Context refers to application context object.
        AIVisionSDK.getInstance(Context).init();

        // For Barcode Detection
        String modelName =  Localizer.Settings.getModelName(Localizer.Settings.MODEL_TYPE_BARCODE_LOCALIZER);

        // For Retail shelf/product detection,
        // Use the line below for shelf or product detection.
        // String modelName = Localizer.Settings.getModelName(Localizer.Settings.MODEL_TYPE_SHELF_LOCALIZER);

        Localizer.Settings settings = new Localizer(modelName);

        // Optional - set model input size
        settings.inferencerOptions.defaultDims.height = 640;
        settings.inferencerOptions.defaultDims.width = 640;

        // Initialize Localizer object
        Localizer localizer = null;

        // Initialize Localizer and load the model asynchronously
        // settings = Localizer.Settings object created above
        // Executor = An executor thread for processing API calls and returning results
        CompletableFuture<Localizer> futureObject = Localizer.getLocalizer(settings,executor);

        // Use the futureObject to implement the thenAccept() callback of CompletableFuture
        futureObject.thenAccept (localizerInstance -> {
            // Use the localizer object returned here for detecting barcodes/shelves/products
            localizer = localizerInstance;
        });

---

### Step 2: Capture Image

Capture the image and ensure the image is in the form of a `Bitmap`.

---

### Step 3: Detect Object

To detect the object in the image:

1. **Set up an Executor -** Have an `Executor` ready to handle the asynchronous processing of the detection call. This is crucial for managing the execution of tasks without blocking the main application thread.
2. **Initialize the Localizer and detect -** Use an initialized `Localizer` object to call the [detect](#detectbitmapbmpexecutorexecutor) method. Pass in the Bitmap image and the executor to perform the detection of barcodes or shelf items. The output is a collection of [bounding boxes](../types/#bbox/) for each detected object.
3. **Release resources -** After processing with the localizer object, call `Localizer.dispose()` to release any allocated resources and free up memory.

#### Sample Code

        // Perform the detection
        CompletableFuture <BBox[]> resultFutureObject = localizer.detect(image, executor);

        resultFutureObject.thenAccept ( bboxes -> {
            // Process the returned array of bounding boxes
        });

        // Release resources
        Localizer.dispose();

---

## Methods

### getLocalizer(Settings settings, Executor executor)

        Public static CompletableFuture<Localizer> Localizer.getLocalizer(Settings settings,Executor executor) throws InvalidInputException, RuntimeException

**Description:** Constructs a new `Localizer` object using the provided settings and returns it via the `thenAccept()` callback of [CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html). The `thenAccept()` callback must be implemented.

**Parameters:**

- **Settings settings -** Configuration settings for initializing the `Localizer`
- **Executor executor -** Executor object in which the result (`Localizer` object) is returned

**Return Value:** `CompletableFuture<Localizer>`

**Exceptions:**

- **InvalidInputException -** Thrown if the settings object is null.
- **RuntimeException -** Thrown if the SDK is not initialized by calling `AIVisionSDK.getInstance(Context).init()`

---

### detect (Bitmap bmp, int orientation, Executor executor)

        CompletableFuture<BBox[]> detect (Bitmap bmp, int orientation, Executor executor) throws InvalidInputException, IllegalStateException

**Description:** Runs the model on an input image and returns a [CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html) object with [bounding boxes](../types/#bbox/) for the detected objects (e.g., barcodes, shelves, labels, products). The `thenAccept()` callback must be implemented.

**Parameters:**

- **Bitmap bmp -** The input image for detection.
- **int orientation -** The orientation angle of the input image. The routine rotates the image clockwise by this angle for processing and then applies an anticlockwise rotation to the results for correction.
- **Executor executor -** Executor object in which the results (Bounding Boxes) are returned.

**Return Value:** `CompletableFuture<BBox[]>` containing detected objects, locations, probability and class of objects.

**Exceptions:**

- **[InvalidInputException](../class/invalidinputexception/) -** Thrown when the Bitmap is null or the orientation angle is not one of the supported values:
  - **0 -** 0 degrees
  - **1 -** 90 degrees
  - **2 -** 180 degrees
  - **3 -** 270 degrees
- **IllegalStateException -** Thrown when the previous detect API call is still in process.

---

### detect (Bitmap bmp, Executor executor)

        CompletableFuture<BBox[]> detect(Bitmap bmp, Executor executor ) throws InvalidInputException , IllegalStateException

**Description:** Runs the model on an input image and returns a [CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html) object with [bounding boxes](../types/#bbox/) for the detected objects (e.g., barcodes, shelves, labels, products). The `thenAccept()` callback must be implemented.

**Parameters:**

- **Bitmap bmp -** The input image for detection.
- **Executor executor -** Executor object in which the results (Bounding Boxes) are returned.

**Return Value:** `CompletableFuture<BBox[]>` containing detected objects, locations, probability and class of objects.

**Exceptions:**

- **[InvalidInputException](../class/invalidinputexception/) -** Thrown when `Bitmap` is null.
- **IllegalStateException -** Thrown when the previous detect API call is still in process.

---

### getDetectedClasses()

        String[] getDetectedClasses()

**Description:** Retrieves a list of class names that the model can detect.

**Return Value:** An array of strings containing the names of the classes.

---

### dispose()

        void dispose()

**Description:** Releases all internal resources used by the `Localizer` object. This method should be called manually to free resources.

---

## Localizer.Settings

The `Localizer.Settings` class provides a comprehensive set of attributes and options to configure the behavior of the `Localizer`. These include settings for tiling, padding, model thresholds, and more, allowing for fine-tuned control over the image processing and inference stages. The class encapsulates the configuration parameters required to initialize the `Localizer`, managing model execution, resource allocation, image processing, and result aggregation.

The `Localizer` output may include [bounding boxes](../types/#bbox/) of different classes, such as 1D barcodes and QR codes, where 'class' refers to the type detected by the `Localizer`. Parameters can be configured individually for each class, such as setting different height or width thresholds for barcode box classes. These class-specific threshold values are passed as a list (vector), with each value corresponding sequentially to a specific class. For example, the first value applies to the first class, the second value to the second class, and so forth.

**Note:** Each parameter that accepts a list of values can also accept a single value, which can be applied to each output class.

---

### Settings(String model_name)

        Localizer.Settings(String model_name)

**Description:** Constructor that initializes a new `Settings` object with specified overrides.

**Parameters:**

- **String model_name -** Name of the model in the compressed file.

<!--
### resourceName

        String resourceName

**Description:** Specifies the file path (model_file_path) containing resources for the `Localizer`, such as model and meta files with configuration values.

---

### modelName

        String modelName

**Description:** Name of the model stored in the model archive, specific to the localizer:
* **Barcode Localizer -** Use the value returned by the following API call:

        Localizer.Settings.getModelName(Localizer.Settings.MODEL_TYPE_BARCODE_LOCALIZER)

* **Shelf Localizer -** Use the value returned by the following API call:

        Localizer.Settings.getModelName(Localizer.Settings.MODEL_TYPE_SHELF_LOCALIZER)
-->

---

### getModelName(int modelType)

        String getModelName(int modelType) throws InvalidInputException

**Description:** Returns the model name for the specified localizer model type.

**Parameters:**

- **int modelType -** Specify one of the supported model types:
  - For Barcode Localizer, pass the modelType as Localizer.Settings.MODEL_TYPE_BARCODE_LOCALIZER.
  - For Shelf Localizer, pass the modelType as Localizer.Settings.MODEL_TYPE_SHELF_LOCALIZER.

**Exceptions:**

- **InvalidInputException -** Thrown when modelType is not one of the supported values:
  - `Localizer.Settings.MODEL_TYPE_BARCODE_LOCALIZER`
  - `Localizer.Settings.MODEL_TYPE_SHELF_LOCALIZER`

---

### InferencerOptions

        InferencerOptions InferencerOptions

**Description:** Provides options for the inferencer. Developers may primarily be interested in `defaultDims`, which allows resizing of the model’s input layer. More details are available in the [Inferencer Options](../class/inferenceroptions/).

---

### minProdWidth

        int minProdWidth[]

**Description:** This parameter, tuned along `minProdHeight`, ensures only boxes wider than this threshold are returned. Increasing this parameter filters out thin boxes.

**Default Value:** 4

**Value range:** [0, max(int)]

---

### minProdHeight

        int minProdHeight[]

**Description:** Tuned along with `minProdWidth`, this parameter ensures only boxes taller than this threshold are returned. Increasing this parameter filters out short boxes.

**Default Value:** 4

**Value Range:** [0, max(int)]

---

## Sample App

Consult the [Barcode Sample App](https://github.com/zebratechnologies/Zebra_AISuite_SDK_Sample_Apps/tree/main/Barcode_Sample_app), which demonstrates how to localize and [decode](../barcodedecoder/) barcodes in images, with options to adjust settings for model input size, inferencer options, and symbology preferences.

---

Related Guides:

- [About](../about/)
- [Setup](../setup/)
- [Product Recognition](../productrecognition/)
  - [Feature Extractor](../productrecognition/#featureextractor)
  - [Feature Storage](../productrecognition/#featurestorage)
  - [Recognizer](../productrecognition/#recognizer)
- [Barcode Decoder](../barcodedecoder/)
- [Text OCR](../textocr/)
