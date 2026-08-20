---
title: Image Attributes Detector
layout: guide.html
product: AI Data Capture SDK
productversion: "4.1"
---

<div class="alert alert-info alert-dismissible fade in" role="alert">
<b>Important Notice: Beta Feature</b><br />
This feature is a Beta release and is under active development. Please be aware of the following: 
<ul><li>It may contain bugs, defects, or instabilities.</li><li>It is subject to significant changes in future releases.</li>
</ul>
Help us improve this feature by sharing your feedback in the <a href="https://developer.zebra.com/forum">Zebra Developer Forum</a> under <b>Zebra Frontline AI Enablers</b>.
</div>

## Overview

The `ImageAttributesDetector` class analyzes images in real-time to detect and verify their authenticity and quality. It provides an asynchronous and easy-to-use method to detect critical image attributes such as blur, object presence, and scene characteristics directly within enterprise applications. This is ideal for logistics and proof-of-delivery workflows, among others, to instantly validate that an image is clear and contains the correct subject matter.

Key Capabilities:

- **Intelligent Detection -** Uses advanced Machine Learning models to detect:
    - **Image Quality (blur) -** Blur, over/under exposure, and overall clarity.
    - **Object Presence -** Packages, people, and location surrounding.
- **Real-Time Processing -** An asynchronous API (`CompletableFuture`) provides fast, non-blocking image analysis. 
- **Flexible Configuration -** Customize detection thresholds, metrics, and comparison conditions to fit specific business requirements for your workflow.
- **Detailed Results -** Provides comprehensive results including compliance status, confidence values, and metric details.
- **Multi-Metric Support -** Analyzes multiple image attributes (e.g., blur and package presence) in a single, efficient operation.
- **Hardware Acceleration -** Optimized for mobile devices with SNPE runtime support.

**Application in Picture Proof of Delivery (PPOD):**

A key use case for this detector is Picture Proof of Delivery (PPOD), which requires a photograph to confirm a package was delivered correctly. The primary challenges are ensuring capture compliance (a clear, usable photo) and protecting privacy (redacting sensitive data).

To address these challenges, two distinct workflows are offered:
- **[Guided PPOD](../camerax/#guidedppod):** Provides real-time user guidance to ensure a compliant photo is captured on the first attempt.
- **[Non-Guided PPOD](../ppod/#nonguidedppod):** Enables flexible and efficient post-capture and redaction for images that have already been taken.

---

## AI Model

The **Image Attributes Proof of Delivery (POD) model** is designed specifically for real-time image analysis during proof of delivery workflows. For more information and to download the model, refer to [Image Attributes POD model](../model/image-attrib-pod/).

### Capabilities

The Proof of Delivery (POD) model analyzes key image attributes - such as parcels, surroundings, people, pets, and image blur - to validate that a photo serves as high-quality proof of delivery. This analysis provides clear evidence of the final delivery location and context.

<table class="facelift" align="" style="width:100%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
        <th>Attribute Detected</th>
        <th>Description</th>
        <th>Best Practices &amp; Notes</th>
    </tr>
    <tr>
        <td><strong>Parcels</strong></td>
        <td>Identifies various package types, including cartons, boxes, poly mailer bags, and letters.</td>
        <td>The model performs best when the parcel is well-lit, captured from a moderate distance, and taken in portrait orientation. If detection fails, retry the photo capture under these conditions. Be aware that the model may have difficulty recognizing parcels that are white or have an irregular shape.</td>
    </tr>
    <tr>
        <td><strong>People</strong></td>
        <td>Detects the presence of people or parts of people (e.g., hands, arms, feet, legs).</td>
        <td><em>Note: Detection of entire persons is an area of active improvement.</em></td>
    </tr>
    <tr>
        <td><strong>Surroundings</strong></td>
        <td>Identifies common delivery environments like front doors, garage doors, lobbies, and gates to provide context.</td>
        <td>Ensure surroundings are visible around the parcel and provide context. A blank white wall provides insufficient context for a valid POD image.</td>
    </tr>
    <tr>
        <td><strong>Image Blur</strong></td>
        <td>Analyzes for motion blur. It is tuned to tolerate reasonable amounts of blur where the overall scene remains clear.</td>
        <td>Designed for on-the-move delivery photos, but the delivery scene should still be clearly visible to a person.</td>
    </tr>
</table>

<br />


### Model Loading Options

There are two methods for loading a model into your application:
- **Using Gradle -** Automatically loads the model configured as a dependency in the `build.gradle` file. 

        // Uses the default model
        ImageAttributesDetector.Settings settings = new ImageAttributesDetector.Settings();

- **Independent Loading -** Provides more control by allowing a model to be loaded from a specific file path on the device. First, the model file must be transferred to a path on the device that the app can access. This can be done using a tool like Android Debug Bridge (adb) or an Enterprise Mobility Management (EMM). The model file must be readable and have a supported file format: `.tar.crypt`, `.tar`, and `.aar`. 

        File modelFile = new File("/path/to/model.tar.crypt");
        settings.loadModelFromFilePath(ModelType.TypeImageTagDetect,modelFile);


---

### Image Attributes

The Image Attributes Proof of Delivery (POD) model utilizes model type `TypeImageTagDetect` with the following supported metrics:

<table class="facelift" align="" style="width:100%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
        <th style="text-align: left;">Metric Name <br />(Enum Value)</th>
        <th style="text-align: left;">Description & Tuning Tips</th>
        <th style="text-align: center;">Default Threshold<br />(DISCRETE Float Value)</th>
        <th style="text-align: center;">Value Range</th>
        <th style="text-align: center;">Supported Conditions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Image Quality Clear</strong> <br />(ImageQualityClear)</td>
            <td>
                <p>Detects if an image is clear or blurry. A higher value means the image needs to be less blurry to be considered "clear."</p>
                <ul>
                    <li><b>Decrease Threshold:</b> Model says an image is blurry less often (needs to be more blurry to be flagged).</li>
                    <li><b>Increase Threshold:</b> Model says an image is blurry more often (more easily flagged as not clear).</li>
                </ul>
            </td>
            <td style="text-align: center;">0.02</td>
            <td style="text-align: center;">0.0 – 1.0</td>
            <td style="text-align: center;">GT_THAN, LS_THAN</td>
        </tr>
        <tr>
            <td><strong>Surround Visible</strong><br />(ImageTagSurroundVisible)</td>
            <td>
                <p>Detects if adequate surroundings (e.g., house, doorstep) are visible in the image. This is subjective and may require careful tuning.</p>
                <ul>
                    <li><b>Decrease Threshold:</b> May help if surroundings are present but not detected.</li>
                    <li><b>Increase Threshold:</b> May help reduce false positives (detecting surroundings when none are adequate).</li>
                </ul>
            </td>
            <td style="text-align: center;">0.71</td>
            <td style="text-align: center;">0.0 – 1.0</td>
            <td style="text-align: center;">GT_THAN, LS_THAN</td>
        </tr>
        <tr>
            <td><strong>People Visible</strong> <br />(ImageTagPeopleVisible)</td>
            <td>
                <p>Detects if people or parts of people are visible in the image. Useful for privacy compliance.</p>
                <ul>
                    <li><b>Decrease Threshold:</b> May help detect people who are missed, but increases false positives (e.g., shadows).</li>
                    <li><b>Increase Threshold:</b> May help reduce false positives, but makes the model less likely to detect real people.</li>
                </ul>
            </td>
            <td style="text-align: center;">0.38</td>
            <td style="text-align: center;">0.0 – 1.0</td>
            <td style="text-align: center;">GT_THAN, LS_THAN</td>
        </tr>
        <tr>
            <td><strong>Package Visible</strong><br />(ImageTagPackageVisible)</td>
            <td>
                <p>Detects if a delivered package is visible in the image. Essential for Proof of Delivery.</p>
                <ul>
                    <li><b>Decrease Threshold:</b> May help detect packages that are missed or unusually shaped, but increases false positives (e.g., rectangular plant pots).</li>
                    <li><b>Increase Threshold:</b> May help reduce false positives, but makes the model less likely to detect real packages.</li>
                </ul>
            </td>
            <td style="text-align: center;">0.38</td>
            <td style="text-align: center;">0.0 – 1.0</td>
            <td style="text-align: center;">GT_THAN, LS_THAN</td>
        </tr>
    </tbody>
</table>

The default thresholds are optimized for the v2.0.1 model and are applied automatically unless custom values are specified.

Condition Types:
- **GT_THAN (Greater Than) -** The check passes if the detection score is above the threshold.
- **LS_THAN (Less Than) -** The check passes if the score is below the threshold.

---

## Developer Guide

This guide outlines the process for using `ImageAttributesDetector`, from initializing the SDK to processing image analysis results.

### Step 1: Initialization

This is a one-time setup step that imports the required classes and initializes the AI Data Capture SDK.

1. **Import the required classes:** Use the following code:

        // Import ImageAttributesDetector and related classes
        import com.zebra.ai.vision.detector.ImageAttributesDetector;
        import com.zebra.ai.vision.detector.ImageAttributeMetricValue;
        import com.zebra.ai.vision.detector.ImageAttributeMetricValue.ImageAttributeMetric;
        import com.zebra.ai.vision.detector.ImageAttributeMetricValue.ConditionType;
        import com.zebra.ai.vision.detector.ImageAttributeResult;
        import com.zebra.ai.vision.AIVisionSDK;
        import com.zebra.ai.vision.InferencerOptions;
        import com.zebra.ai.vision.ImageData;

2. **Initialize the SDK:** Use your application's context object and invoke init() from the AIVisionSDK class:

        // Initialize SDK with context
        boolean isInitDone = AIVisionSDK.getInstance(getApplicationContext()).init();

---

### Step 2: Configure Metrics

Create a `Settings` object to define what the detector should look for. For each attribute to be analyzed (e.g., image clarity, package presence), an `ImageAttributeMetricValue` object is built. This object is used to enable the metric, set a custom threshold, and define the pass/fail condition before being added to the main settings configuration. 

Best Practices:
- **Important:** At least one metric must be enabled, otherwise InvalidInputException is thrown.
- Set custom values only when necessary; start with the defaults.
- Use the `toString()` method on the `Settings` object for debugging purposes; see [Debugging & Troubleshooting](#debuggingtroubleshooting).

Sample Code:

        // Create settings instance
        ImageAttributesDetector.Settings settings = new ImageAttributesDetector.Settings();

        // Build metric configurations
        ImageAttributeMetricValue qualityMetric = new ImageAttributeMetricValue.Builder(ImageAttributeMetric.ImageQualityClear)
            .setValue(0.06f)              // Optional: custom threshold
            .setEnable(true)              // Enable this metric
            .setCondition(ConditionType.LS_THAN)  // Less than check for quality
            .build();

        ImageAttributeMetricValue packageMetric = new ImageAttributeMetricValue.Builder(ImageAttributeMetric.ImageTagPackageVisible)
            .setEnable(true)              // Uses default threshold 0.20
            .setCondition(ConditionType.GT_THAN)  // Greater than check for presence
            .build();

        ImageAttributeMetricValue surroundMetric = new ImageAttributeMetricValue.Builder(
            ImageAttributeMetric.ImageTagSurroundVisible)
            .setEnable(true)              // Uses default threshold 0.59
            .build();

        ImageAttributeMetricValue peopleMetric = new ImageAttributeMetricValue.Builder(
                ImageAttributeMetric.ImageTagPeopleVisible)
            .setEnable(true)              // Uses default threshold 0.09
            .build();

        // Add metrics to settings
        List<ImageAttributeMetricValue> metrics = Arrays.asList(qualityMetric, packageMetric, surroundMetric, peopleMetric);
        settings.configureImageAttributeMetrics(metrics);

        // Configure InferencerOptions to use DSP
        InferencerOptions options = new InferencerOptions();
        options.runtimeProcessorOrder = new Integer[]{InferencerOptions.DSP};
        settings.configureInferencerOptions(options);

---

### Step 3: Get ImageAttributesDetector Instance

With the settings configured, create an instance of the `ImageAttributesDetector`. This is an asynchronous operation that should be handled on a background thread (using an `ExecutorService`). 

Sample Code:

        // Create executor for async operations
        ExecutorService executor = Executors.newSingleThreadExecutor();

        // Get detector instance asynchronously
        try {
            CompletableFuture<ImageAttributesDetector> detectorFuture =
                ImageAttributesDetector.getImageAttributesDetector(
                    settings,
                    executor);

            detectorFuture.thenAccept(detector -> {
                Log.i("TAG", "Detector initialized successfully");
                // Obtain ImageAttributesDetector instance to process input image

            }).exceptionally(ex -> {
                Log.e("TAG", "Initialization failed: " + ex.getMessage());
                return null;
            });

        } catch (AIVisionSDKException e) {
            // Handle SDK not initialized
            Log.e("TAG", "SDK Error: " + e.getMessage());
        } catch (InvalidInputException e) {
            // Handle invalid settings (null or no metrics enabled)
            Log.e("TAG", "Invalid Settings: " + e.getMessage());
        }

---

### Step 4: Process Images

Process the input image with the Process API. Use a suitable Process API overload. The Process API expects an `ImageData` object. Use AI Data Capture SDK's `ImageData` methods to create an `ImageData` object matching the input image type.

Recommendations for processing:

- Process images sequentially one at a time.
- Handle asynchronous exceptions to manage processing errors.
- Check results for compliance.
- Log the confidence values to help with analysis and troubleshooting.

Follow these steps:

1. **ImageData Methods:** The `ImageData` class provides factory methods to create instances from different image sources. Choose the appropriate `ImageData` method based on your image source format.

        // Method 1: Create ImageData from Bitmap
        ImageData imageData1 = ImageData.fromBitmap(bitmap, rotationDegrees);

        // Method 2: Create ImageData from MediaImage (android.media.Image)
        ImageData imageData2 = ImageData.fromMediaImage(image, rotationDegrees);

        // Method 3: Create ImageData from ImageProxy (CameraX)
        ImageData imageData3 = ImageData.fromImageProxy(imageProxy);

2. Call `process()` API: Both `process()` overloads return a `CompletableFuture<List<ImageAttributeResult>>`. Use `thenApply()` to process the received results asynchronously. The detector handles threading internally. Use the custom executor overload if you need control over result delivery threading.

        // Process with default executor
        try {
            ImageData imageData = ImageData.fromBitmap(bitmap, 0);

            detector.process(imageData)
                .thenApply(results -> {
                    // Process results asynchronously
                    return analyzeResults(results);
                })
                .exceptionally(ex -> {
                    Log.e("TAG", "Processing failed: " + ex.getMessage());
                    return null;
                });
        } catch (AIVisionSDKException e) {
            Log.e("TAG", "Error: " + e.getMessage());
        }

        // Process with custom executor
        try {
            ExecutorService customExecutor = Executors.newSingleThreadExecutor();
            ImageData imageData = ImageData.fromBitmap(bitmap, 0);

            detector.process(imageData, customExecutor)
                .thenApply(results -> {
                    // Results delivered on custom executor
                    return analyzeResults(results);
                })
                .exceptionally(ex -> {
                    Log.e("TAG", "Processing failed: " + ex.getMessage());
                    return null;
                });
        } catch (AIVisionSDKException e) {
            Log.e("TAG", "Error: " + e.getMessage());
        }

---

### Step 5: Resource Management

When an `ImageAttributesDetector` instance is no longer needed, `dispose()` must be called to prevent memory leaks by freeing all underlying native resources. This releases all native resources used by the `ImageAttributesDetector` instance.

After this method is called, the detector instance becomes permanently unusable. Any subsequent calls to <code>process()</code> will throw an IllegalStateException. To perform further operations, a new detector instance must be created.

Sample Code:

        // Dispose the detector when done
        if (detector != null) {
            detector.dispose();
            detector = null;
        }

        // Also shutdown executor if created
        if (executor != null) {
            executor.shutdown();
        }

<i class="fa fa-exclamation-triangle" style="color:#FFA500;"></i> <b>Important:</b> To ensure proper resource management, <code>dispose()</code> should be called within an appropriate lifecycle method (e.g., <code>onDestroy()</code> in an Android Activity).

Sample Code in LifeCycle Method:

        public class ImageAnalysisActivity extends AppCompatActivity {
            private ImageAttributesDetector detector;
            private ExecutorService executor;

            @Override
            protected void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.activity_main);

                // Initialize resources
                executor = Executors.newSingleThreadExecutor();
                initializeDetector();
            }

            @Override
            protected void onPause() {
                super.onPause();
                // Optional: dispose if needed during pause
            }

            @Override
            protected void onDestroy() {
                super.onDestroy();

                // Always cleanup resources
                if (detector != null) {
                    detector.dispose();
                    detector = null;
                }

                if (executor != null) {
                    executor.shutdown();
                    try {
                        executor.awaitTermination(5, TimeUnit.SECONDS);
                    } catch (InterruptedException e) {
                        executor.shutdownNow();
                    }
                }
            }
        }


### Step 6: Understanding Results

The `process()` API returns `List<ImageAttributeResult>` containing the detection results for each enabled metric.  To consume this information, iterate through the list. Each `ImageAttributeResult` object can use the following:
- `isCompliant()` - Retrieve the pass/fail status based on your configured thresholds.
- `getMetric()` - Identify which image attribute was evaluated (e.g., ImageQualityClear).
- `getValue()` - Retrieve the raw confidence score (0.0 to 1.0) to provide insight into the detection certainty.

**Best Practice:** For robust validation, check the `isCompliant()` status first, but also consider the raw confidence value to understand the certainty of the detection. Logging these values is highly recommended for debugging.

Sample Code:

        // Analyze the returned results
        private String analyzeResults(List<ImageAttributeResult> results) {
            StringBuilder analysis = new StringBuilder();
            boolean allCompliant = true;

            for (ImageAttributeResult result : results) {
                ImageAttributeMetric metric = result.getMetric();
                boolean isCompliant = result.isCompliant();
                Object value = result.getValue();

                // Log individual metric results
                Log.d("TAG", String.format(
                    "Metric: %s | Compliant: %s | Value: %s",
                    metric.toString(), isCompliant, value));

                // Analyze each metric
                switch (metric) {
                    case ImageQualityClear:
                        if (isCompliant) {
                            analysis.append("✓ Image quality is acceptable\n");
                        } else {
                            analysis.append("✗ Image is blurry or unclear\n");
                            allCompliant = false;
                        }
                        Float qualityValue = (Float) value;
                        analysis.append(String.format(
                            "  Quality score: %.3f\n", qualityValue));
                        break;

                    case ImageTagPackageVisible:
                        if (isCompliant) {
                            analysis.append("✓ Package is visible in image\n");
                        } else {
                            analysis.append("✗ Package not detected\n");
                            allCompliant = false;
                        }
                        Float packageConfidence = (Float) value;
                        analysis.append(String.format(
                            "  Package confidence: %.3f\n", packageConfidence));
                        break;

                    case ImageTagSurroundVisible:
                        if (isCompliant) {
                            analysis.append("✓ Surroundings are visible\n");
                        } else {
                            analysis.append("✗ Inadequate surroundings\n");
                            allCompliant = false;
                        }
                        Float surroundConfidence = (Float) value;
                        analysis.append(String.format(
                            "  Surround confidence: %.3f\n", surroundConfidence));
                        break;

                    case ImageTagPeopleVisible:
                        if (isCompliant) {
                            analysis.append("⚠ People detected in image\n");
                        } else {
                            analysis.append("✓ No people in image\n");
                        }
                        Float peopleConfidence = (Float) value;
                        analysis.append(String.format(
                            "  People confidence: %.3f\n", peopleConfidence));
                        break;
                }
            }

            // Overall result
            analysis.append("\n");
            if (allCompliant) {
                analysis.append("✓ IMAGE ACCEPTED - All criteria met\n");
                Log.i("TAG", "Image passed all quality checks");
            } else {
                analysis.append("✗ IMAGE REJECTED - Some criteria not met\n");
                Log.w("TAG", "Image failed quality checks");
            }

            String result = analysis.toString();
            Log.i("TAG", "Analysis:\n" + result);

            return result;
        }

---

## ImageAttributesDetector Methods

### getImageAttributesDetector(Settings, Executor)

        public static CompletableFuture<ImageAttributesDetector> getImageAttributesDetector(Settings settings, Executor executor) throws InvalidInputException, AIVisionSDKSNPEException,  AIVisionSDKLicenseException, AIVisionSDKModelException, AIVisionSDKException

**Description:** Asynchronously initializes an instance of `ImageAttributesDetector`. This method loads and initializes the required models based on the provided settings. The initialization is performed asynchronously and returns a `CompletableFuture`.

**Parameters:**

- **Settings settings -** Configurable options for the detector; must not be null.
- **Executor executor -** The [executor](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Executor.html) used for asynchronous model loading; if null, the SDK default executor is used.

**Return Value:** `CompletableFuture<ImageAttributesDetector>`, a `CompletableFuture` that completes with the `ImageAttributesDetector` instance when initialization is successful.

**Exceptions:**

- **InvalidInputException -** Thrown if the settings object is null or no metrics are enabled in the settings.
- **AIVisionSDKException -** Thrown if the AI Data Capture SDK is not initialized or general SDK errors occur.
- **AIVisionSDKSNPEException -** Thrown if there is an error in the SNPE runtime library.
- **AIVisionSDKModelException -** Thrown if the model fails to load or is incompatible with the device.
- **AIVisionSDKLicenseException -** Thrown if there is a license validation error.

---

### process(ImageData imageData)

        public CompletableFuture<List<ImageAttributeResult>> process(ImageData imageData) throws AIVisionSDKException

**Description:** Process the given image data to detect and verify image attributes. It evaluates the image against all enabled metrics configured in the `Settings` object and returns the results as a list of `ImageAttributeResult` objects. The processing is performed asynchronously and returns a `CompletableFuture` with the results. Thread safety is ensured through a locking mechanism to prevent concurrent processing of multiple images on the same detector instance.

**Parameters:**

- **ImageData imageData -** The image data to be processed; must not be null.

**Return Value:** `CompletableFuture<List<ImageAttributeResult>>`, a `CompletableFuture` that completes with a list of `ImageAttributeResult` objects containing detection results for each enabled metric.

**Exceptions:**

- **InvalidInputException -** Thrown if `imageData` is null.
- **AIVisionSDKException -** Thrown if the detector is disposed, models are not initialized, or if the previous detection is still in progress.

---

### process(ImageData imageData, Executor executor)

        public CompletableFuture<List<ImageAttributeResult>> process(ImageData imageData, Executor executor) throws AIVisionSDKException

**Description:** Process the given image data to detect and verify image attributes, allowing the user to specify the result delivery executor. This overloaded method enables the caller to provide an `Executor` for result delivery. It evaluates the image against all enabled metrics configured in the `Settings` object. Processing is performed asynchronously. Thread safety is maintained through a lock mechanism that prevents multiple detection operations from running concurrently on the same `ImageAttributesDetector` instance.

**Parameters:**

- **ImageData imageData -** The image data to be processed. Must not be null.
- **Executor executor -** The [executor](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Executor.html) in which the result is delivered. Must not be null.

**Return Value:** `CompletableFuture<List<ImageAttributeResult>>`, a `CompletableFuture` that completes with a list of `ImageAttributeResult` objects containing detection results for each enabled metric.

**Exceptions:**

- **InvalidInputException -** Thrown if imageData or executor is null.
- **AIVisionSDKException -** Thrown if the detector is disposed, models are not initialized, or if the previous detection is still in progress.

---

### dispose()

        public void dispose()

**Description:** Releases all resources associated with this `ImageAttributesDetector` instance. After calling this method, the detector becomes unusable and any subsequent calls to `process()` will throw an exception. To use image attribute detection after disposal, create a new instance using `getImageAttributesDetector()`. This method must be called manually to properly release all internal resources. Multiple calls to `dispose()` are safe and will be handled gracefully.

**Parameters:**

None

---

## Settings Configuration Methods

### configureImageAttributeMetrics(List<ImageAttributeMetricValue> metrics)

        public void configureImageAttributeMetrics(List<ImageAttributeMetricValue> metrics)

**Description:** Configure a list of Image Attribute Metrics to be used for Image Attribute Verification. This method allows to enable specific image quality and attribute checks by providing a list of `ImageAttributeMetricValue` objects. Each metric can be configured with custom thresholds and conditions. If a metric is not configured, it will be disabled.

**Parameters:**

- **List&lt;ImageAttributeMetricValue&gt; metrics -** List of `ImageAttributeMetricValue` items to configure. Must not be null.

**Return Value:** None

**Exceptions:**

- **IllegalArgumentException -** Thrown if metrics list is null.

---

### loadModelFromFilePath(ModelType modelType, File modelFilePath)

        public void loadModelFromFilePath(ModelType modelType, File modelFilePath) throws InvalidInputException

**Description:** Load a model from a file path accessible to the application. The model file must be in a supported format (`.tar.crypt`, `.tar`, or `.aar`) and must be readable. If this method is not called, the model must be defined in the `build.gradle` file.

**Parameters:**

- **ModelType modelType -**	The type of model to load. Must not be null.
- **File modelFilePath -** 	The path to the model file. Must not be null and file must exist.

**Return Value:** None

**Exceptions:**

- **IllegalArgumentException -** Thrown if modelType or modelFilePath is null.
- **InvalidInputException -** Thrown if the model file path is invalid or the file is not in a supported format (`.tar.crypt`, `.tar`, or `.aar`).

---

### configureInferencerOptions(ModelType modelType, InferencerOptions options)

        public void configureInferencerOptions(ModelType modelType, InferencerOptions options)

**Description:** Configure inferencer options for a specific model type. This method allows fine-grained control over the inference configuration for a specific model type. Runtime processor order, performance preferences, and other model-specific settings can be configured.

**Parameters:**

- **ModelType modelType -** The type of model to configure. Must not be null.
- **InferencerOptions options -** The inferencer options to apply. Must not be null.

**Return Value:** None

**Exceptions:**

- **IllegalArgumentException -** Thrown if modelType or options is null.
- **InvalidInputException -** Thrown if the model does not support certain options, such as custom input dimensions for ImageTag model.


---

### configureInferencerOptions(InferencerOptions options)

        public void configureInferencerOptions(InferencerOptions options)

**Description:** Configure inferencer options for all models used in `ImageAttributesDetector`. This is a convenience method that applies the same inferencer options to all model types used by the `ImageAttributesDetector`. The detector will make a best effort to apply these options to all internal models.

**Parameters:**

- **InferencerOptions options -** The inferencer options to apply to all models. Must not be null.

**Return Value:** None

**Exceptions:**

- **IllegalArgumentException -** Thrown if options is null.
- **InvalidInputException -** Thrown if the model does not support certain options, such as custom input dimensions for ImageTag model.

---

### getModelTypeForMetric(ImageAttributeMetric metric)

        public ModelType getModelTypeForMetric(ImageAttributeMetric metric)

**Description:** Get the model type associated with a given image attribute metric. This method helps identify which model is responsible for evaluating a specific metric.

**Parameters:**

- **ImageAttributeMetric metric -** The image attribute metric. Must not be null.

**Return Value:** **ModelType -** The ModelType associated with the metric, or null if the metric is not mapped.

**Exceptions:**

- **IllegalArgumentException -** Thrown if metric is null.

---

## ImageAttributeMetricValue 

The **ImageAttributeMetricValue.Builder** class provides a fluent builder pattern API for constructing `ImageAttributeMetricValue` objects. Each metric can be configured with custom values, enabled/disabled state, and condition types. The builder ensures type safety and validates all inputs before creating the final metric value object.

**Constructor:** Initializes the builder with the specified metric type. The metric determines the value type, default value, default condition, and allowed conditions for this configuration.

        public Builder(ImageAttributeMetric metric)

Sample Code:

        // Create a metric with custom threshold
        ImageAttributeMetricValue clearMetric = new ImageAttributeMetricValue.Builder(
            ImageAttributeMetric.ImageQualityClear)
            .setValue(0.08f)
            .setEnable(true)
            .setCondition(ConditionType.LS_THAN)
            .build();

        // Create a metric with default values
        ImageAttributeMetricValue packageMetric = new ImageAttributeMetricValue.Builder(
            ImageAttributeMetric.ImageTagPackageVisible)
            .setEnable(true)
            .build();


### Builder Methods

#### Constructor

        Builder(ImageAttributeMetric metric)

**Constructor:** Creates a new builder instance for the specified metric. Automatically sets the default condition and default value for the metric based on internal configuration. The metric parameter must not be null.

#### setValue(Object vals)

        setValue(Object vals)
    
**Sets the custom threshold value:** Use this method to override the default value if needed. The ValueType is defined by each metric and determines what type of value is expected. Each metric also defines its allowed value ranges. The runtime type of vals must match the metric's ValueType:
- **DISCRETE:** Float
- **BOOLEAN:** Boolean
- **STRING:** String
- **DISCRETE_LIST:** List<Float>
- **STRING_LIST:** List<String>

Throws IllegalArgumentException if the value type is incorrect or the value is not allowed for this metric.

#### setEnable(boolean value)

        setEnable(boolean value)

**Enable/Disable metric:** Controls whether this metric will be evaluated during image processing. Set to `true` to enable the metric (default), or `false` to disable it. Disabled metrics will not be included in processing results.

#### setCondition(ConditionType cond)

        setCondition(ConditionType cond)

**Sets the evaluation condition:** Specifies how the model's output value will be compared against the threshold. Each metric defines the conditions it supports. Available conditions:
- **GT_THAN:** Greater than the set value
- **LS_THAN:** Less than the set value
- **ALL_OF:** All conditions must be met (for list-based metrics)
- **ANY_ONE:** At least one condition must be met (for list-based metrics)

Throws IllegalArgumentException if the condition is not supported by this metric. If not set, the default condition for the metric will be used.

### build()

        build()

**Creates the object:** Constructs and returns an `ImageAttributeMetricValue` instance with the values defined above. This method validates all configurations and creates the final object ready to be added to the `Settings`.

---

## ImageAttributeResult

The **ImageAttributeResult** represents the result of evaluating a single image attribute metric. It contains information about whether the metric criteria were met (compliance), the actual detected value from the model, and metadata about the metric type and value type. This class implements the Entity interface for potential future geometry support.

Best Practices:
- Always check `isCompliant()` first to determine if criteria are met.
- Use `getValueType()` to safely cast `getValue()` return value.
- Log `toString()` output for debugging and analysis.

Sample Code:

        // Process results and check compliance
        for (ImageAttributeResult result : results) {
            ImageAttributeMetric metric = result.getMetric();
            boolean compliant = result.isCompliant();

            if (result.getValueType() == ValueType.DISCRETE) {
                Float confidence = (Float) result.getValue();
                Log.d("TAG", metric.toString() + ": " + confidence +
                        " | Compliant: " + compliant);
            }

            // Log full result for debugging
            Log.d("TAG", result.toString());
        }


### Public Methods

#### getMetric()

        ImageAttributeMetric getMetric()

Returns the specific image attribute metric associated with this result. Use this to identify which metric this result corresponds to (e.g., ImageQualityClear, ImageTagPackageVisible, etc.).

#### isCompliant()

        boolean	isCompliant()

Indicates whether the image attributes criteria have been met. Returns true if the detected value meets the configured threshold and condition, false otherwise. This is the primary method to check if the image passes the quality/attribute check.

#### getValue()

        Object getValue()

Returns the value associated with the image attribute metric. The actual type depends on the metric's ValueType:
- **DISCRETE:** Float (confidence score 0.0-1.0)
- **BOOLEAN:** Boolean
- **STRING:** String
- **DISCRETE_LIST:** List<Float>
- **STRING_LIST:** List<String>

Cast the return value to the appropriate type based on `getValueType()`.

#### getValueType()

        ValueType getValueType()

Returns the type of value associated with the metric. Use this to determine how to cast and interpret the result from `getValue()`. Returns one of the following: DISCRETE, BOOLEAN, STRING, DISCRETE_LIST, or STRING_LIST.

#### hasGeometry()

        boolean hasGeometry()

Indicates whether this result has associated geometry information. Currently returns `false` for all metrics. Check this method before calling geometry-related methods.

#### getBoundingBox()

        Rect getBoundingBox()

Returns the bounding box of the detected attribute. Currently returns null as geometry information is not yet available. Always check `hasGeometry()` before calling this method.

#### getCorners()

    List<Point> getCorners()

Returns the corner points of the detected attribute. Currently returns null as geometry information is not yet available. Always check `hasGeometry()` before calling this method.

#### getAccuracy()

        float getAccuracy()
        
Returns the accuracy for the geometrical information. Currently returns Float.NaN as geometry information is not yet available. Always check `hasGeometry()` before calling this method.

#### equals(Object o)

        boolean equals(Object o)
        
Compares this `ImageAttributeResult` to another object for equality. Two results are equal if they have the same metric, compliance status, value type, and value. Returns true if the objects are equal, false otherwise.

#### hashCode()

        int hashCode()
        
Returns the hash code for this `ImageAttributeResult`. The hash code is computed from the metric, compliance status, value type, and value fields. Consistent with equals() implementation.

#### toString()

        String toString()
        
Returns descriptive information of the `ImageAttributeResult`. Provides a formatted string representation including metric name, compliance status, and detected value. Useful for logging and debugging. Format: "ImageAttributeResult{metric=..., isCompliant=..., value=...}"

---

## Exception Handling


<table class="facelift" align="" style="width:100%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Symptom / Exception</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Potential Cause</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Solution / Handling Strategy</th>
        </tr>
    <tbody>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>AIVisionSDKException</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">The SDK was not initialized before creating the detector or performing operations.</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Ensure the SDK is initialized.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>InvalidInputException</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Null settings, an invalid configuration, or no metrics were enabled in the <code>Settings</code> object before processing.</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Validate all configuration parameters. Enable at least one metric using before calling <code>process()</code>.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>AIVisionSDKModelException</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Model loading fails due to a model file missing or in an unsupported format.</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Verify the model file path is correct and the file is in a supported format.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>AIVisionSDKLicenseException</code></td>
            <td style="padding: 12px; border: 1px solid #ddd;">The provided license key is invalid.</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Check the validity of your license key.</td>
        </tr>
        <!--
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>IllegalStateException</code> or "Disposed instance error" when calling <code>process()</code>.</td>
            <td style="padding: 12px; border: 1px solid #ddd;">An attempt was made to use a detector instance after its <code>dispose()</code> method has already been called.</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Create a new detector instance. Once disposed, an instance cannot be reused.</td>
        </tr>-->
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><code>AIVisionSDKSNPEException</code> </td>
            <td style="padding: 12px; border: 1px solid #ddd;">An issue with the SNPE runtime occurred.</td>
            <td style="padding: 12px; border: 1px solid #ddd;"> Check for device compatibility; ensure the device has a supported Qualcomm chip. </td>
        </tr>
    </tbody>
</table>

Sample Code:

        try {
            ImageAttributesDetector.getImageAttributesDetector(settings, executor)
                .thenAccept(detector -> {
                    // Success path
                })
                .exceptionally(ex -> {
                    Throwable cause = ex.getCause();
                    if (cause instanceof AIVisionSDKLicenseException) {
                        Log.e("TAG", "License error");
                    } else if (cause instanceof AIVisionSDKModelException) {
                        Log.e("TAG", "Model loading error");
                    } else {
                        Log.e("TAG", "Unknown error", cause);
                    }
                    return null;
                });
        } catch (InvalidInputException | AIVisionSDKException e) {
            Log.e("TAG", "Initialization error", e);
        }

---

## Debugging

Use `toString()` for debugging:

        // Print settings configuration
        ImageAttributesDetector.Settings settings =
            new ImageAttributesDetector.Settings();
        // ... configure metrics ...

        Log.d("TAG", "Current Settings:\n" + settings.toString());

        // Output example:
        // image_quality_clear | enabled: true | value: 0.85 | modelType: TypeImageTagDetect
        // includes_delivered_package | enabled: true | value: 0.20 | modelType: TypeImageTagDetect

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
- [Image Transform Detector](../imagetransform/)
- [Custom Detector](../customdetector/)
- [Entity](../entity/)
- [Data Types](../types/)
