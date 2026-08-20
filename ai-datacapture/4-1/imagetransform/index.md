---
title: Image Transform Detector
layout: guide.html
product: AI Data Capture SDK
productversion: "4.1"
---

## Overview

The `ImageTransformDetector` class provides capabilities for transforming images by detecting and blurring sensitive information. It can identify and redact barcodes, text, and people within an image, making it an essential tool for applications requiring data privacy and compliance. The detector processes images asynchronously and returns a transformed image. It can also be used with `ImageAttributesDetector` to provide both image quality validation and transformation in a single, streamlined operation.

**Key Capabilities:**

- **Content Blurring -** Detects and blurs sensitive in-image content - including barcodes, text, people, and pets — to ensure privacy and data protection.
- **Configurable Blur Intensity -** Supports three levels of blur intensity (Low, Medium, High) for customizable content obscuring.
- **Flexible Transformation Actions -** Allows enabling or disabling specific transformation actions independently to meet specific use case requirements.
- **Asynchronous Processing -** Ensures efficient, non-blocking processing through a design based on <code>CompletableFuture</code>.

**Application in Picture Proof of Delivery (PPOD):**

A key use case for this detector is [Picture Proof of Delivery (PPOD)](../ppod/), which requires a photograph to confirm a package was delivered correctly. The primary challenges are ensuring capture compliance (a clear, usable photo) and protecting privacy (redacting sensitive data).

To address these challenges, two distinct workflows are offered:
- **[Guided PPOD](../camerax/#guidedppod):** Provides real-time user guidance to ensure a compliant photo is captured on the first attempt.
- **[Non-Guided PPOD](../ppod/#nonguidedppod):** Enables flexible and efficient post-capture and redaction for images that have already been taken.

---

## AI Model

The `ImageTransformDetector` class orchestrates image transformations by selecting and applying the appropriate model based on user-defined configurations. It utilizes the Qualcomm FCN-ResNet50-object-segmentation model to detect people and pets in an image. To download the object segmenter model, refer to [Object Detector Model](../model/image-trans/).

### Model Loading Options

There are two methods for loading a model into your application:

- **Using Gradle -** Automatically loads the model configured as a dependency in the `build.gradle` file.

        ImageTransformDetector.Settings settings = new ImageTransformDetector.Settings();

- **Independent Loading -** Provides more control by allowing a model to be loaded from a specific file path on the device. First, the model file must be transferred to a path on the device that the app can access. This can be done using a tool like Android Debug Bridge (adb) or an Enterprise Mobility Management (EMM). The model file must be readable and have a supported file format: `.tar.crypt`, `.tar`, and `.aar`.

        File modelFile = new File("/path/to/model.tar.crypt");
        settings.loadModelFromFilePath(ModelType.ImageTransformPersonLocalizer, modelFile);

---

### Supported Transformations and Models

The following transformation actions are supported, each powered by a specific model:

<table class="facelift" align="" style="width:100%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Transformation Action</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Model Type</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Description</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Model Name</th>
        </tr>
    <tbody>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>TransformationAction.LocalizeAndBlurBarcode</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">ModelType.ImageTransformBarcodeLocalizer</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Identify the barcodes visible in the image and blur them in the output image returned to the user.</td>
            <td style="padding: 12px; border: 1px solid #ddd;"><code><a href="../model/barcode-localizer/">barcode-localizer</a></code></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>TransformationAction.LocalizeAndBlurText</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">ModelType.ImageTransformTextLocalizer</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Identify the bounding boxes of text areas in the image and blur them.</td>
            <td style="padding: 12px; border: 1px solid #ddd;"><code><a href="../model/textocr/">text-ocr-recognizer</a></code></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>TransformationAction.LocalizeAndBlurPeople</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;" rowspan="2">ModelType.ImageTransformPersonLocalizer</td>
            <td style="padding: 12px; border: 1px solid #ddd;" rowspan="2">Identify any person, cat, or dog in the image and blur them in the output image returned to the user.</td>
            <td style="padding: 12px; border: 1px solid #ddd;" rowspan="2"><code><a href="../model/image-trans/">FCN-ResNet50-object-segmentation</a></code></td>
        </tr>   
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>TransformationAction.LocalizeAndBlurPets</code></td>
        </tr>         
    </tbody>
</table>

---

## Developer Guide

This guide outlines the process for using `ImageTransformDetector`, from initializing the SDK to processing the image.

### Step 1: Initialization

This is a one-time setup step that imports the required classes and initializes the AI Data Capture SDK.

1.  **Import the required classes:** Use the following code:

        // For the detector and its settings
        import com.zebra.ai.vision.detector.ImageTransformDetector;
        import com.zebra.ai.vision.detector.ImageTransformDetector.TransformationAction;
        import com.zebra.ai.vision.detector.ImageTransformDetector.ModelType;
        import com.zebra.ai.vision.detector.ImageTransformResult;

        // For SDK initialization and configuration
        import com.zebra.ai.vision.AIVisionSDK;
        import com.zebra.ai.vision.InferencerOptions;
        import com.zebra.ai.vision.ImageData;

2.  **Initialize the SDK:** Use your application's context object and invoke `init()` from the AIVisionSDK class.

        // Initialize SDK with context
        boolean isInitDone = AIVisionSDK.getInstance(getApplicationContext()).init();

---

### Step 2: Configure Transformation Actions and Inference Options

Create an instance of `ImageTransformDetector.Settings`. Specify which transformations to apply and configure hardware acceleration options for each model to optimize performance.

**Configuring Inference Options:** Different processors (DSP, CPU) can be assigned to different models to balance performance and resource usage. For example, run the barcode localizer on the high-performance DSP.

<i class="fa fa-exclamation-triangle" style="color:#FFA500;"></i> **Important:** At least <u>one</u> transformation action must be enabled, otherwise `getImageTransformDetector` will throw an InvalidInputException.

Sample Code:

        // 1. Create a settings instance
        ImageTransformDetector.Settings transformSettings = new ImageTransformDetector.Settings();

        // 2. Configure the actions you want to perform
        transformSettings.configureTransformationActions(Arrays.asList(
            TransformationAction.LocalizeAndBlurBarcode,
            TransformationAction.LocalizeAndBlurText,
            TransformationAction.LocalizeAndBlurPeople,
            TransformationAction.LocalizeAndBlurPets
        ));

        // 3. (Optional) Configure output image resolution
        ImageTransformDetector.OutputImageProperties outputProps =
            new ImageTransformDetector.OutputImageProperties.Builder()
                .setWidth(1280)
                .setHeight(720)
                .keepAspectRatio(true)
                .build();
        transformSettings.setOutputImageProperties(outputProps);

        // 4. (Optional) Configure hardware acceleration for each model
        // Use DSP for barcode detection for maximum speed
        InferencerOptions barcodeOptions = new InferencerOptions();
        barcodeOptions.runtimeProcessorOrder = new Integer[]{ InferencerOptions.DSP };
        transformSettings.configureInferencerOptions(ModelType.ImageTransformBarcodeLocalizer, barcodeOptions);

        // Let the SDK decide for other detections (default behavior)

---

### Step 3: Get Detector Instance

Asynchronously initialize the `ImageTransformDetector` with the settings created. This loads the required Machine Learning models in the background.

Sample Code:

        // Create an executor for background tasks
        ExecutorService executor = Executors.newSingleThreadExecutor();

        // Asynchronously get the detector instance
        CompletableFuture<ImageTransformDetector> detectorFuture =
            ImageTransformDetector.getImageTransformDetector(transformSettings, executor);

        // You can chain actions to be performed after initialization is complete
        detectorFuture.thenAccept(detector -> {
            // The detector is ready to use now
            Log.i("MyApp", "ImageTransformDetector initialized successfully.");
            // You can now proceed to process images
        }).exceptionally(ex -> {
            Log.e("MyApp", "Failed to initialize detector: " + ex.getMessage());
            return null;
        });

---

### Step 4: Process the Image

Once the detector is initialized, call one of the `process` methods with the image data. The following examples show two approaches: using the default executor or providing a custom executor.

Processing with the Default Executor:

        // Process with default executor
        try {
            ImageData imageData = ImageData.fromBitmap(bitmap, 0);

            detector.process(imageData)
                .thenApply(result -> {
                    // Process result asynchronously
                    return result;
                })
                .exceptionally(ex -> {
                    Log.e("TAG", "Processing failed: " + ex.getMessage());
                    return null;
                });
        }
        catch (AIVisionSDKException e) {
            Log.e("TAG", "Error: " + e.getMessage());
        }

Processing with a Custom Executor:

        // Process with custom executor
        try {
            ExecutorService customExecutor = Executors.newSingleThreadExecutor();
            ImageData imageData = ImageData.fromBitmap(bitmap, 0);

            detector.process(imageData, customExecutor)
                .thenApply(result -> {
                    // Results delivered on custom executor
                    return result;
                })
                .exceptionally(ex -> {
                    Log.e("TAG", "Processing failed: " + ex.getMessage());
                    return null;
                });
        }
        catch (AIVisionSDKException e) {
            Log.e("TAG", "Error: " + e.getMessage());
        }

---

### Step 5: Handle the Result

The `process` method returns a `CompletableFuture<ImageTransformResult>`. Use this to get the transformed image once processing is complete.

Sample Code:

        // Handle the result asynchronously
        resultFuture.thenAccept(transformResult -> {
            Log.i("MyApp", "Image processing complete.");

            // Get the transformed image as a Bitmap
            Bitmap transformedBitmap = transformResult.getBitmapImage();

            // Or get it as a compressed JPEG byte array
            int imageQuality = 90; // 0-100
            byte[] compressedImage = transformResult.getCompressedImage(imageQuality);

            // Now you can display the bitmap or save the byte array
            runOnUiThread(() -> {
                myImageView.setImageBitmap(transformedBitmap);
            });

        }).exceptionally(ex -> {
            Log.e("MyApp", "Image processing failed: " + ex.getMessage());
            return null;
        });

---

### Step 6: Resource Management

It is essential to call the `dispose()` method in the `ImageTransformDetector` instance when it is no longer needed. This releases native resources and Machine Learning models from memory to prevent memory leaks.

Sample Code:

        // In your activity's onDestroy() or equivalent lifecycle method
        @Override
        protected void onDestroy() {
            super.onDestroy();
            if (transformDetector != null) {
                transformDetector.dispose();
            }
            if (executor != null) {
                executor.shutdown();
            }
        }

---

### Step 7: Exception Handling

The API methods can throw exceptions related to model loading and processing, including `InvalidInputException` and `AIVisionSDKException`. It is important to handle these exceptions, particularly by using the `.exceptionally()` method with a `CompletableFuture` chain.

---

## ImageTransformDetector Methods

### getImageTransformDetector(Settings settings, Executor executor)

        public static CompletableFuture<ImageTransformDetector> getImageTransformDetector(Settings settings, Executor executor) throws InvalidInputException, AIVisionSDKSNPEException, AIVisionSDKLicenseException, AIVisionSDKModelException, AIVisionSDKException

**Description:** Asynchronously initializes an instance of `ImageTransformDetector`. This method loads the necessary models based on the provided settings.

**Parameters:**

- **Settings settings -** Configuration for the detector. Must not be null.
- **Executor executor -** The [executor](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Executor.html) for asynchronous model loading; if null, the default SDK executor is used.

**Exceptions:**

- **InvalidInputException -** Thrown if settings is null or no transformation actions are enabled.
- **AIVisionSDKException -** Thrown if the AI Data Capture SDK is not initialized.
- **AIVisionSDKSNPEException -** Thrown if there is an error in the SNPE runtime.
- **AIVisionSDKLicenseException -** Thrown if there is a license validation error.
- **AIVisionSDKModelException -** Thrown if a model fails to load or is incompatible.

---

### process(ImageData image)

        public CompletableFuture<ImageTransformResult> process(ImageData image) throws AIVisionSDKException

**Description:** A convenience overload that uses a default executor for processing.

**Parameters:**

- **ImageData image -** The image to process. Must not be null.

**Exceptions:**

- **InvalidInputException -** Thrown if `image` is null.
- **AIVisionSDKException -** Thrown if the detector instance has been disposed or if models are not initialized.

---

### process(ImageData image, Executor executor)

        public CompletableFuture<ImageTransformResult> process(ImageData image, Executor executor) throws AIVisionSDKException

**Description:** Applies the configured transformations to the image. Results are returned using the custom executor.

**Parameters:**

- **ImageData image -** The image to process. Must not be null.
- **Executor executor -** The [executor](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Executor.html) for asynchronous processing. Must not be null.

**Exceptions:**

- **InvalidInputException -** Thrown if `image` or `executor` is null.
- **AIVisionSDKException -** Thrown if the detector instance has been disposed or if models are not initialized.

---

### process(ImageData image, Executor executor, @NonNull ImageAttributesDetector detector)

        public CompletableFuture<ImageTransformResult> process(ImageData image, Executor executor, @NonNull ImageAttributesDetector detector) throws AIVisionSDKException

**Description:** Processes an image for both attribute compliance detection and transformation. **Zebra recommends this method for the guided PPOD (Picture Proof of Delivery) use case,** where it first validates the image quality (e.g., blur, glare) and content, and then redacts sensitive information in a single, atomic operation.

This method first runs image attribute compliance detection using the provided `ImageAttributesDetector`. The `ImageAttributeDetector` should already be configured and initialized before calling this method. It then applies the configured transformation operations. Both compliance results and transformation results are returned in a single `ImageTransformResult` object. Processing is performed asynchronously on the provided executor.

Ensure that the provided executor has enough threads to handle parallel processing of image transformation and attribute detection. A thread pool of 3 or more threads is required depending on the Transform actions set by the user. If all three transformation actions are enabled, a pool of 4 threads is recommended to handle the 4 parallel actions (Attributes detection + 3 Transformation actions).

**Parameters:**

- **ImageData image -** The image to process. Must not be null.
- **Executor executor -** The executor in which the result is delivered. Must not be null.
- **ImageAttributesDetector detector -** A pre-configured `ImageAttributesDetector` for compliance checks. Must not be null.

**Returns:**
- **CompletableFuture<ImageTransformResult> -** A `CompletableFuture` that completes with an `ImageTransformResult` object containing both compliance and transformation results.

**Exceptions:**

- **InvalidInputException -** Thrown if `image` or `detector` is null.
- **AIVisionSDKException -** Thrown if the detector models are not initialized.


---

### dispose()

        public void dispose()

**Description:** Releases all resources used by the detector instance. This must be called to avoid memory leaks.

**Parameters:**
None

---

## Settings Configuration Methods

### configureTransformationActions(@NonNull List&lt;TransformationAction&gt; actions)

        public void configureTransformationActions(@NonNull List<TransformationAction> actions)

**Description:** Enables specific image transformation operations by providing a list of `TransformationAction` enums. At least one action must be enabled for the detector to be useful.

**Parameters:**

- **List&lt;TransformationAction&gt; actions -** List of of actions to enable (e.g., `LocalizeAndBlurBarcode`). Must not be null.

**Exceptions:**

- **IllegalArgumentException -** Thrown if the `actions` list is null.

---

### configureTransformationActions(@NonNull TransformActionDescriptor descriptor)

        public void configureTransformationActions(@NonNull TransformActionDescriptor descriptor)

**Description:** Configure transformation actions with blur settings using a descriptor. This method allows to specify both the transformation action to enable and the blur radius to use for these transformations.

**Parameters:**

- **TransformActionDescriptor descriptor -** The transformation action descriptor containing actions and blur settings. Must not be null.

**Exceptions:**

- **IllegalArgumentException -** Thrown if the `actions` list is null.

---

### getBlurRadius()

        public BlurRadius getBlurRadius()

**Description:** Returns the current blur radius configuration used for image transformations. This value determines the strength of the blur applied when blurring detected regions (for example: barcodes, text, or people) in the processed image.

**Returns:**

- **BlurRadius -** The currently configured blur radius value:
  - <code>BlurRadius.Low</code> - A light blur effect that applies subtle obscuring of content.
  - <code>BlurRadius.Medium</code> - The default blur level, offering a balance between visibility and privacy.
  - <code>BlurRadius.High</code> - A strong blur effect for maximum content obscuring.

---

### setOutputImageProperties(OutputImageProperties properties)

        public void setOutputImageProperties(OutputImageProperties properties)

**Description:** Sets the output image properties for the transformed images. This method configures how the output images should be formatted, allowing you to specify the output resolution and aspect ratio preservation.

**Parameters:**

- **OutputImageProperties properties -** The output image properties to configure. Must not be null.

**Exceptions:**

- **IllegalArgumentException -** Thrown if `properties` is null.

---

### loadModelFromFilePath(@NonNull ModelType modelType, @NonNull File modelFilePath)

        public void loadModelFromFilePath(@NonNull ModelType modelType, @NonNull File modelFilePath) throws InvalidInputException

**Description:** Load a model from a file path accessible to the application. The model file must be in a supported format (`.tar.crypt`, `.tar`, or `.aar`) and must be readable. If this method is not called, the model must be defined using `build.gradle` file.

**Parameters:**

- **ModelType modelType -** The type of model to load. Must not be null.
- **File modelFilePath -** The path to the custom model file (`.tar.crypt`, `.tar`, or `.aar`).

**Exceptions:**

- **IllegalArgumentException -** Thrown if `modelType` or `modelFilePath` is null.
- **InvalidInputException -** Thrown if the model file path is invalid or the file is not in a supported format (`.tar.crypt`, `.tar`, or `.aar`).

---

### configureInferencerOptions(@NonNull ModelType modelType, @NonNull InferencerOptions options)

        public void configureInferencerOptions(@NonNull ModelType modelType, @NonNull InferencerOptions options)

**Description:** Configures fine-grained inference options for a **specific model type.** This allows to set different hardware accelerators (e.g., DSP for one model, GPU for another) to optimize performance.

**Parameters:**

- **ModelType modelType -** The model to target for the options.
- **InferencerOptions options -** The inference options to configure (e.g., setting the runtime processor order).

**Exceptions:**

- **IllegalArgumentException -** Thrown if `modelType` or `options` is null.

---

### configureInferencerOptions(@NonNull InferencerOptions options)

        public void configureInferencerOptions(@NonNull InferencerOptions options)

**Description:** A convenience method that applies the same `InferencerOptions` to **all models** used by the detector.

**Parameters:**

- **InferencerOptions options -** The inference options to apply globally.

**Return Value:** None

**Exceptions:**

- **IllegalArgumentException -** Thrown if `options` is null.

---

### getModelTypeForAction(TransformationAction action)

        public ModelType getModelTypeForAction(TransformationAction action)

**Description:** Get the model type associated with a given transformation action. This method helps identify which model is responsible for executing a specific transformation.

**Parameters:**

- **TransformationAction action -** The transformation action (must not be null)

**Return Value:** `ModelType` - The model type associated with the action.

**Exceptions:**

- **IllegalArgumentException -** Thrown if `action` is null.

---

## TransformActionDescriptor and BlurRadius

### BlurRadius Enum

**Description:** The `BlurRadius enum` defines the intensity of the blur effect applied to a detected region. Three levels of blur are available.

<table class="facelift" align="" style="width:100%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Value</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Description</th>
        </tr>
    <tbody>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>BlurRadius.Low</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">A light blur effect that applies subtle obscuring of content.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>BlurRadius.Medium</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">The default blur level, offering a balance between visibility and privacy.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>BlurRadius.High</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">A strong blur effect for maximum content obscuring.</td>
        </tr>
    </tbody>
</table>

### TransformActionDescriptor

**Description:** The `TransformActionDescriptor` class configures transformation actions along with blur settings using a Builder pattern. This provides a convenient way to specify both the transformations to apply and the strength of the blur.

#### TransformActionDescriptor.Builder

**Builder Methods:**

<table class="facelift" align="" style="width:100%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Method</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Description</th>
        </tr>
    <tbody>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>setActions(List<TransformationAction> actions)</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Sets the list of transformation actions to apply. Must not be null or empty.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>setBlurRadius(BlurRadius radius)</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Sets the blur radius for all transformations. Defaults to <code>BlurRadius.Medium</code>.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>build()</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Constructs and returns the immutable <code>TransformActionDescriptor</code> instance.</td>
        </tr>
    </tbody>
</table>

**Accessor Methods:**

<table class="facelift" align="" style="width:100%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Method</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Return Type</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Description</th>
        </tr>
    <tbody>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>getActions()</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>List<TransformationAction></code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Returns an unmodifiable list of configured transformation actions.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>getBlurRadius()</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>BlurRadius</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">	Returns the configured blur radius.</td>
        </tr>
    </tbody>
</table>

---

## OutputImageProperties Configuration

The `OutputImageProperties` class is used to configure the resolution and aspect ratio of the final transformed image. It is created using a Builder pattern.

### OutputImageProperties.Builder()

        ImageTransformDetector.OutputImageProperties outputProps = new ImageTransformDetector.OutputImageProperties.Builder()
            .setWidth(1280)
            .setHeight(720)
            .keepAspectRatio(true)
            .build();

**Description:** The entry point to creating an `OutputImageProperties` object.

#### Builder Methods

<table class="facelift" align="" style="width:100%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Method</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Description</th>
        </tr>
    <tbody>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>setWidth(int width)</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Sets the target width for the output image.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>setHeight(int height)</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Sets the target height for the output image.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>keepAspectRatio(boolean preserve)</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">If true, preserves the original aspect ratio when scaling down the image to fit within the target width and height.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>build()</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Constructs and returns the immutable <code>OutputImageProperties</code> instance.</td>        
        </tr>
    </tbody>
</table>

---

## ImageTransformResult Public APIs

### isImageAttributeResultAvailable()

        public boolean isImageAttributeResultAvailable()

**Description:** Intended to be used with `ImageTransformDetector` for the [Guided](#overview) use case. If `true` is returned, it indicates that compliance results from `ImageAttributesDetector` are available for use. 

**Returns:** A boolean indicating the availability of `ImageAttributeResult`.


### getImageAttributeResult()

        public List<ImageAttributeResult> getImageAttributeResult()

**Description:** Intended to be used with `ImageTransformDetector` for the [Guided](#overview) use case. It returns the list of `ImageAttributeResult` results for this image. 

**Returns:** `List<ImageAttributeResult>` - The list of `ImageAttribute` results.

### getCompressedImage(int imageQuality)

        public byte[] getCompressedImage(int imageQuality)

**Description:** Returns the transformed image as a compressed JPEG byte array.

**Parameters:**

- **int imageQuality -** The compression quality, from 0 (low) to 100 (high).

**Returns:** A `byte[]` containing the compressed image data.

**Exceptions:**

- **AIVisionSDKException -** Thrown if the internal bitmap fails to compress.

### getBitmapImage()

        public Bitmap getBitmapImage()

**Description:** Returns the transformed image as a mutable `Bitmap` object.

**Returns:** The resulting `Bitmap`.

---

## Related Guides

- [About](../about/)
- [Setup](../setup/)
- [Localizer](../localizer/)
  - Models: [Barcode](../model/barcode-localizer/), [Product & Shelf](../model/prod-recognizer/)
- [Product Recognition](../productrecognition/) - Model: [Model](../model/prod-recognizer/)
  - [Feature Extractor](../productrecognition/#featureextractor)
  - [Feature Storage](../productrecognition/#featurestorage)
  - [Recognizer](../productrecognition/#recognizer)
- [Text OCR](../textocr/)
  - [Model](../model/textocr/)
- [CameraX](../camerax/)
  - [EntityTrackerAnalyzer](../camerax/#entitytrackeranalyzer)
  - [Detectors](../camerax/#detectors)
  - [EntityViewfinder](../camerax/#entityviewfinder)
- [Image Attributes Detector](../imageattributes/)
- [Entity](../entity/)
- [Data Types](../types/)
