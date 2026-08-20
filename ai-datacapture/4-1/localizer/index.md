---
title: Localizer
layout: guide.html
product: AI Data Capture SDK
productversion: "4.1"
---

## Overview

The `Localizer` class enables object detection within images, a process commonly referred to as localization. It processes input images and outputs a list of [bounding boxes](../types/#bbox/) or [Entities](../entity/) that indicate the locations of detected objects or barcodes. This functionality is particularly beneficial for applications that require the identification and localization of specific objects within an image. The `Localizer` class can be configured through the [Localizer.Settings](#localizersettings) class, allowing specification and modification of model parameters as needed.

---

## AI Model

There are three types of supported detection models:

- [Barcode Decoder](../model/barcode-localizer/) - Detects and decodes barcodes within images.
- [Shelf and Product Localizer](../model/prod-recognizer/) - Bundled with the Product and Shelf Recognizer, it detects and identifies objects on retail shelves, including products, shelf labels, peg labels, and the shelves themselves.
- [Pallet and Box Localizer (Beta)](../model/warehouse-localizer/) - Detects boxes, pallets, warehouse shelves, and shelf labels from RGB images, returning structured outputs including bounding box coordinates, class labels, and confidence scores. 

For more information and to access downloads for each model, click on the respective links above.

### Barcode Localizer

The **Barcode Localizer** detects barcodes within images. The supported barcode types include: linear barcode (e.g., UPC and EAN), Data Matrix, QR Code, Aztec, PDF417, DotCode, Postal code, MaxiCode, Composite Code, Han Xin Code, MicroPDF417, Micro QR Code, GridMatrix, and ArUco.

- **Input image size:** The dimensions (height and width) can be changed during runtime initialization. The default is 640x640.
- **Output:** The model outputs [bounding boxes](../types/#bbox/) around detected barcodes.

### Shelf and Product Localizer

The **Shelf and Product Localizer** model detects and identifies objects on retail shelves, including products, shelf labels, peg labels, and the shelves themselves.

- **Input image size:** The size can be adjusted during initialization based on the proximity of the camera to the shelf. The default size is 832x832 pixels.
- **Output:** The model outputs [bounding boxes](../types/#bbox/) for the detected objects on the shelf.

---

## Developer Guide

This guide outlines the process for using Barcode Localizer to detect barcodes within images, from initialization to detecting barcodes.

### Step 1: Initialization

To set up and initialize a Localizer object:

1.  **Import the Localizer class -** Use `com.zebra.ai.vision.detector.Localizer`.
2.  **Configure Localizer settings -** Create a `Localizer.Settings` object.
3.  **Initialize the SDK -** Use your application's context object and invoke `init()` from the [AIVisionSDK](../class/aivisionsdk/) class.
4.  **Optional: Set model input dimensions -** If needed, customize the model input height and width through [InferencerOptions](../class/inferenceroptions/):

        settings.inferencerOptions.defaultDims.height = [your value];
        settings.inferencerOptions.defaultDims.width = [your value];

    The input size should be multiples of powers of 32 (e.g., 640). Adjust these dimensions based on the camera resolution for optimal detection results. See [Input Image Guidelines](#inputimageguidelines).

5.  **Initialize and load the model asynchronously:** Declare a `Localizer` object and use [CompletableFuture](../types/#completablefuture) to load the model asynchronously with `Localizer.getLocalizer(settings, executor)`. Ensure an `Executor` is available to get the Localizer instance. Refer to the [Barcode Localizer Model](../model/barcode-localizer/) to learn about the supported resolutions and cached dimensions that ensure optimal model loading time.
6.  **Handle asynchronous initialization:** Use the `thenAccept()` method of `CompletableFuture` to handle the initialized `Localizer` object. Assign the returned instance to your localizer variable, making it ready for barcode or shelf/product detection tasks.

#### Sample Code

        import com.zebra.ai.vision.detector.Localizer;

        // Initialize SDK. Context refers to application context object.
        AIVisionSDK.getInstance(this.getApplicationContext()).init();

        // For Shelf/product localizer, pass the mavenModelName as "product-and-shelf-recognizer”
        // For Barcode Localizer, pass the mavenModelName as "barcode-localizer”
        // For Pallet and Box Localizer, pass the mavenModelName as "pallet-and-box-localizer”
        Localizer.Settings locSettings = new Localizer.Settings(mavenModelName);

        // Optional - set model input size
        locSettings.inferencerOptions.defaultDims.height = 640;
        locSettings.inferencerOptions.defaultDims.width = 640;

        // Optional – Set runtime processor order to load the model
        Integer[] rpo = new Integer[3];
        rpo[0] = InferencerOptions.DSP;
        rpo[1] = InferencerOptions.CPU;
        rpo[2] = InferencerOptions.GPU;

        locSettings.inferencerOptions.runtimeProcessorOrder = rpo;

        // Initialize Localizer object
        Localizer localizer = null;

        // Initialize Localizer and load the model asynchronously
        // locSettings: Localizer.Settings object created above
        // Executor: An executor thread for returning the results
        CompletableFuture<Localizer> futureObject = Localizer.getLocalizer(locSettings,executor);

        // Use the futureObject to implement the thenAccept() callback of CompletableFuture
        futureObject.thenAccept (localizerInstance -> {
            // Use the localizer object returned here for detecting barcodes/shelves/products
            localizer = localizerInstance;
        }).exceptionally(e -> {
            if (e instanceof AIVisionSDKException) {
                Log.e(TAG, "[AIVisionSDKException] Localizer object creation failed: " + e.getMessage());
            }
            return null;
        });

#### Input Image Guidelines

For accurate detection of text and barcodes, input images must have sufficient pixel data to clearly represent the text or barcode. For instance, a 640x640 image may be suitable for scanning a parcel label that occupies the full width of the image, while a 1920x1920 image may be needed for capturing price tags on a shelf.

Considerations for input size:

- **Smaller input sizes -** Offer faster processing but may sacrifice accuracy.
- **Larger input sizes -** Improve detection accuracy for smaller or more distant objects, but take longer to process. <br />

<i class="fa fa-exclamation-triangle" style="color:#FFA500;"></i> **Caution:** Selecting an excessively large input size may lead to out-of-memory errors, potentially causing the application to crash at runtime.

For further guidance on input image dimensions, refer to the [Barcode Localizer Model](../model/barcode-localizer/).

Real-time application tips:

- Consider the overall dimensions of the input images. Smaller images can be processed more quickly.
- To minimize latency, ensure that the text or barcodes occupy as much of the image as possible.
- Capture images at lower resolutions while maintaining sufficient accuracy.

---

### Step 2: Capture Image

Capture the image and ensure it is formatted as a `Bitmap`. For applications using CameraX, developers can create their own custom `ImageAnalysis.Analyzer` to supply a sequence of frames to the Localizer. For further details, refer to [CameraX](../camerax/).

---

### Step 3: Detect Object

To detect objects within the frame, choose _one_ of the following methods:

#### Method 1: Use `process()` API

The `process()` API allows applications to use `CameraX` as the frame source and build a custom analyzer to detect barcodes, shelves, or products within the frame. These are passed to `process()` as `ImageData` objects, offering flexibility to integrate with various image resources. Unlike the CameraX `ImageAnalyzer`, this method can handle image frames from other sources such as Android's Camera2 APIs or local storage. For such cases, steps 1 and 2 can be skipped below.

**Key Use Cases:**

- **Integration with CameraX -** Best suited for applications utilizing CameraX as the frame source and requiring custom analyzers for detecting and decoding barcodes, shelves, or products within the frame.
- **Multiple Detectors -** Suitable for scenarios where multiple detectors need to be combined within a custom CameraX analyzer.
- **Flexible Image Sources -** Suitable for applications not implementing the CameraX `ImageAnalyzer` interface. It allows passing `ImageData` objects from other sources, such as Camera2 APIs or local storage.

**Step-By-Step Implementation:**

1. **Implement ImageAnalysis.Analyzer -** Develop a custom CameraX analyzer by implementing the `ImageAnalysis.Analyzer` interface.
2. **Override analyze() -** CameraX continuously feeds the frames to the Analyzers that are bound to it. Developers can override the `analyze()` method to perform specific functions.
3. **Convert ImageProxy to ImageData -** Use the `fromImageProxy()` method to convert `ImageProxy` to `ImageData`, which is required for the `process()` method.
4. **Invoke process() -** Call the `process()` method on the `ImageData` object to initiate barcode detection.
5. **Success Handling -** After a successful detection, the `thenAccept()` callback is returned in the Executor thread, with the detected `LocalizerEntity`.
6. **Manage Failure -** If detection fails, the `exceptionally()` callback is returned in the Executor thread with the exception to be handled.
7. **Exception Handling -** If a failure occurs, the `process()` method throws `InvalidInputException` or `AIVisionSDKException`.

Sample Code:

        // Perform the detection

        CompletableFuture<List<LocalizerEntity>> futureObject = localizer.process(ImageData.fromImageProxy(imageProxy));

        futureObject.thenAccept(result -> {
            // iterate over list of localizer Entity
            for(LocalizerEntity localizerEntity : result){

                // Access bounding box of localized barcode
                Rect rect = localizerEntity.getBoundingBox();

                // Access corner coordinates of barcode
                List<Point> points = localizerEntity.getCorners();

                // Acsess the classId
                int classID = localizerEntity.getClassId();

                // Acess the accuracy
                float accuracy = localizerEntity.getAccuracy();
            }

        }).exceptionally( e ->{
            if (e instanceof AIVisionSDKException) {
                Log.e(TAG, "[AIVisionSDKException] Error in localizing: " + e.getMessage());
            }
            return null;
        });

        // Release resources
        Localizer.dispose();

#### Method 2: Use `detect()` API

The 'detect()' API simplifies object detection by allowing to pass a bitmap image and retrieve processed results asynchronously in the form of [BBox](../types/#bbox) objects.

**Key Use Cases:**

- **Simplicity and Directness -** Suitable for cases where a straightforward, asynchronous method is needed to process and detect objects from a bitmap image.
- **Bitmap Source -** Ideal when the input image is in Bitmap format and the focus is on quickly obtaining bounding boxes for detected objects.
- **Asynchronous Execution -** Ideal for applications where managing task execution without blocking the main application thread is crucial.

**Step-By-Step Implementation:**

1. **Set up an Executor -** Create an `Executor` to retrieve the results in the callback from the detect() method.
2. **Initialize the Localizer and detect -** Use an initialized `Localizer` object to call the [detect](#detectbitmapbmpexecutorexecutor) method. Pass in the Bitmap image and the executor to perform the detection of barcodes or shelf items. The output is a collection of [bounding boxes](../types/#bbox/) for each detected object.
3. **Release resources -** After processing with the localizer object, call `Localizer.dispose()` to release any allocated resources and free up memory.

#### Sample Code

        // Perform the detection
        CompletableFuture <BBox[]> resultFutureObject = localizer.detect(bitmap, executor);

        resultFutureObject.thenAccept ( bboxes -> {
            // Process the returned array of bounding boxes
            for(BBox bb : bboxes){
                // get class id associated with the bounding box
                int class_id = bb.cls;
                // get probability of the bounding box

                float probability =  bb.prob;

                // draw the bounding box with the coordinates xmin,ymin,xmax and ymax
                drawResult(bb.xmin,bb.ymin,bb.xmax,bb.ymax);
            }

        }).exceptionally( e -> {
            if (e instanceof AIVisionSDKException) {
                Log.e(TAG, "[AIVisionSDKException] Detection failed : " + e.getMessage());
        }
        return null;
        });

        // Release resources
        Localizer.dispose();

---

## Methods

### getLocalizer(Settings settings, Executor executor)

        CompletableFuture<Localizer> Localizer.getLocalizer(Settings settings,Executor executor) throws InvalidInputException, AIVisionSDKSNPEException, AIVisionSDKException, AIVisionSDKModelException,  AIVisionSDKLicenseException

**Description:** Asynchronously loads the model and returns a Localizer object. This method ensures that the `Localizer` is set up properly with the specified settings and executor.

**Parameters:**

- **settings -** Configurable `Settings` object, including files for loading the model
- **executor -** Executor thread in which the localizer object is returned

**Return Value:** Returns a `CompletableFuture<Localizer>` of the `Localizer` object.

**Exceptions:**

- **InvalidInputException -** Thrown if the settings object is null.
- **AIVisionSDKSNPEException -** Thrown if SNPE fails to initialize.
- **AIVisionSDKException -** Thrown if the AI Data Capture SDK is not initialized.
- **AIVisionSDKModelException -** Thrown if the current SDK version is below the minimum required version. To resolve this, update the SDK to a newer or the latest version.
- **AIVisionSDKLicenseException -** Thrown if there is a licensing issue related to the barcode-decoder model.

---

### process (ImageData imageData, Executor executor)

        CompletableFuture<List<LocalizerEntity>> process(ImageData imageData, Executor executor) throws InvalidInputException, AIVisionSDKException

Processes an image for object detection. This method implements the `Detector` interface, providing a standardized approach to image processing, and returns results as a list of `LocalizerEntity` objects.

**Parameters:**

- `ImageData` - The image data to be processed for object detection.
- executor - Returns the results.

**Return Value:**
`CompletableFuture<List<LocalizerEntity>>` - A list of `LocalizerEntity` objects representing the detected objects.

**Exceptions:**

- **InvalidInputException -** Thrown if `ImageData` is null or contains invalid data.
- **AIVisionSDKException -** Thrown if the image queue size limit of 5 is exceeded.

---

### process (ImageData imageData)

        CompletableFuture<List<LocalizerEntity>> process(ImageData imageData) throws InvalidInputException, AIVisionSDKException

Processes an image for object detection. This method implements the `Detector` interface, providing a standardized approach to image processing and returns results as a list of `LocalizerEntity` objects. This method does not accept an `Executor` object; therefore, the results are returned in a background thread owned by the AI Data Capture SDK.

**Parameters:**

- `ImageData` - The image data to be processed for object detection.

**Return Value:**
`CompletableFuture<List<LocalizerEntity>>` - A list of `LocalizerEntity` objects representing the detected objects.

**Exceptions:**

- **InvalidInputException -** Thrown if `ImageData` is null or contains invalid data.
- **AIVisionSDKException -** Thrown if the image queue size limit of 5 is exceeded.

---

### detect (Bitmap bmp, int orientation, Executor executor)

        CompletableFuture<BBox[]> detect (Bitmap bmp, int orientation, Executor executor) throws InvalidInputException, AIVisionSDKException

**Description:** Runs the model on an input image, potentially including a depth map, to calculate [bounding boxes](../types/#bbox/). The number of channels supplied must match model's required input channels.

**Parameters:**

- **Bitmap bmp -** The input image for detection.
- **int orientation -** The orientation angle of the input image. The routine rotates the image clockwise by this angle for processing and then applies an anticlockwise rotation to the results for correction.
- **Executor executor -** Executor responsible for delivering the result. If null, the SDK's default executor is used.

**Return Value:** `CompletableFuture<BBox[]>` containing detected objects, locations, probability and class of objects.

**Exceptions:**

- **[InvalidInputException](../class/invalidinputexception/) -** Thrown when the Bitmap is null or the orientation is not supported.
- **AIVisionSDKException -** Thrown when the image queue size is exceeded.

---

### detect (Bitmap bmp, Executor executor)

        CompletableFuture<BBox[]> detect(Bitmap bmp, Executor executor) throws InvalidInputException, AIVisionSDKException

**Description:** Runs the model on an input image to calculate [bounding boxes](../types/#bbox/) without specifying orientation.

**Parameters:**

- **Bitmap bmp -** The input image for detection.
- **Executor executor -** Executor thread in which detection is performed.

**Return Value:** `CompletableFuture<BBox[]>` containing detected objects, locations, probability and class of objects.

**Exceptions:**

- **[InvalidInputException](../class/invalidinputexception/) -** Thrown when `Bitmap` is null.
- **AIVisionSDKException -** Thrown when the image queue size is exceeded.

---

### getSupportedClasses()

        String[] Localizer.getSupportedClasses()

**Description:** Retrieves a list of names representing the classes that the model can detect.

**Return Value:** `String[]` - Returns an array of strings containing the names of supported classes.

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

### Settings(String mavenModelName)

        Localizer.Settings locSettings = new Localizer.Settings(mavenModelName) throws InvalidInputException,AIVisionSDKException;

**Description:** Constructor for the `Settings` object with the model name.

**Parameters:**

- **mavenModelName -** Name of the model specified in the Maven repository.

**Exceptions:**

- **InvalidInputException -** Thrown if the mavenModelName is invalid.
- **AIVisionSDKException -** Thrown if an error occurs while reading the specified model or the AI Data Capture SDK is not initialized.

---

### Settings(File modelFile)

        Localizer.Settings locSettings = new Localizer.Settings(modelFile) throws InvalidInputException, AIVisionSDKException;

**Description:** Constructs a new `Settings` object using the provided `File` object.

**Parameters:**

- **modelFile -** The file object that contains the localizer model.

**Exceptions:**

- **InvalidInputException -** Thrown when the modelFile is invalid.
- **AIVisionSDKException -** Thrown if an error occurs while processing the specified model or if the AI Data Capture SDK is not initialized properly.

---

### InferencerOptions

        InferencerOptions InferencerOptions

**Description:** Provides options for the inferencer. Developers may primarily be interested in `defaultDims`, which allows resizing of the model’s input layer. More details are available in the [Inferencer Options](../class/inferenceroptions/).

---

### minProdWidth

        Integer minProdWidth[]

**Description:** This parameter, tuned along `minProdHeight`, ensures only boxes wider than this threshold are returned. Increasing this parameter filters out thin boxes.

**Default Value:** 4

**Value range:** [0, max(int)]

---

### minProdHeight

        Integer minProdHeight[]

**Description:** Tuned along with `minProdWidth`, this parameter ensures only boxes taller than this threshold are returned. Increasing this parameter filters out short boxes.

**Default Value:** 4

**Value Range:** [0, max(int)]

---

### probThreshold

        Float probThreshold[]

**Description:** Probability threshold for the supported classes. Only bounding boxes / Localizer Entities with probability score higher than this value will be returned. If developer sees many low-probability boxes in the output, raising this value will filter out those with smaller probability.

**Default Values:** Refer to the default threshold values returned by AIVisionSDK.getModelArchiveInfo() method.

**Value Range:** [0.0f, 1.0f]

---

## Sample Apps

Refer to the following resources:

- **This [QuickStart Sample](https://github.com/zebradevs/AISuite_Android_Samples/tree/main/AISuite_QuickStart) provides the source code for building a product and shelf recognizer application.**
- **This [QuickStart Sample](https://github.com/ZebraDevs/AISuite_Android_Samples/tree/main/AISuite_QuickStart/app/src/main/java/com/zebra/aisuite_quickstart/java/detectors/warehouselocalizer) provides the source code for building a pallet and box localizer (beta) application.**
- **Consult the [Java/Kotlin snippets](https://github.com/zebradevs/AISuite_Android_Samples/tree/main/AISuite_Snippets),** which demonstrate the SDK's capabilities and can be easily integrated into your applications.
- **Access advanced use case and technology-based demos through the Showcase Application,** including the [AI DataCapture demo](https://github.com/zebradevs/AISuite_Android_Samples/tree/main/AISuite_Demos/AIDataCaptureDemo), which outlines how users can enroll and recognize products in real-time.
  - For instructions on accessing these demo apps, refer to the [installation guide](../about/zebra-frontline-ai-enablers-showcase-demo-app-installation.pdf)
  - Access source code for these demos in the [ZebraDevs github repo](https://github.com/zebradevs/AISuite_Android_Samples/tree/main/AISuite_Demos), including the [AI Data Capture Demo](https://github.com/zebradevs/AISuite_Android_Samples/tree/main/AISuite_Demos/AIDataCaptureDemo) and [AI Barcode Finder Demo](https://github.com/zebradevs/AISuite_Android_Samples/tree/main/AISuite_Demos/AI_Barcode_Finder) sources, to easily build these capabilities into your application.

---

## Related Guides

- [About](../about/)
- [Setup](../setup/)
- [Product Recognition](../productrecognition/) - Model: [Model](../model/prod-recognizer/)
  - [Feature Extractor](../productrecognition/#featureextractor)
  - [Feature Storage](../productrecognition/#featurestorage)
  - [Recognizer](../productrecognition/#recognizer)
- [Barcode Decoder](../barcodedecoder/)
- [Text OCR](../textocr/)
  - [Model](../model/textocr/)
- [CameraX](../camerax/)
  - [EntityTrackerAnalyzer](../camerax/#entitytrackeranalyzer)
  - [Detectors](../camerax/#detectors)
  - [EntityViewfinder](../camerax/#entityviewfinder)
- [Image Attributes Detector](../imageattributes/)
- [Image Transform Detector](../imagetransform/)
- [Custom Detector](../customdetector/)
- [Entity](../entity/)
- [Data Types](../types/)
