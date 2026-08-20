---
title: Custom Detector
layout: guide.html
product: AI Data Capture SDK
productversion: "4.1"
---

## Overview

The `CustomDetector` class (`com.zebra.ai.vision.custommodels`) enables seamless integration of any Android-compatible third-party machine learning model or SDK directly into the AI Data Capture pipeline. Developers can wrap external frameworks - such as TensorFlow Lite (LiteRT), ONNX Runtime, and Google ML Kit - to run simultaneously alongside Zebra's native, built-in Zebra detectors. By wrapping third-party model implementations in the standard Zebra `Detector` interface, developers can pass them to the [EntityTrackerAnalyzer](../camerax/#entitytrackeranalyzer) and easily visualize results on-screen using [EntityView](../camerax/#entityview).

To support models and SDKs that detect objects and output bounding boxes, the SDK includes a ready-to-use base class called [DetectionEntity](../entity/#detectionentityclass). This base class can be used directly for standard detections or extended with custom fields to support specific business needs. By building on `DetectionEntity`, detection results gain automatic framework support for coordinate remapping and viewfinder overlay rendering.

**Key Capabilities:**

- **Pipeline Extensibility:** Run user-defined detectors alongside SDK-native detectors such as [BarcodeDecoder](../barcodedecoder/) and [TextOCR](../textocr/) in a single `EntityTrackerAnalyzer` instance.
- **Automatic Coordinate Remapping:** Entities built on `DetectionEntity` have their bounding boxes and corners automatically remapped from analysis space to viewfinder space by `EntityTrackerAnalyzer`.
- **cropRect Filtering Support:** `DetectionEntity`-based results pass through the SDK's built-in viewfinder region filter without any additional code.

---

## AI Model

Any model or SDK that runs on Android (such as TensorFlow Lite, ONNX, or Google ML Kit) is fully supported. Developers retain complete control over model loading, configuration, and lifecycles using the framework's native APIs.

---

## Developer Guide

This guide provides two samples demonstrating how to integrate an external model,TensorFlow Lite, (TFLite) and an external SDK, Google ML Kit, using a `CustomDetector`.

### Step 1: Initialization

Initialize the third-party model (TFLite):

        // TFLite — wrap Interpreter in your own class and implement process(InputImage)
        public class TFLiteModel implements AutoCloseable {

            private final Interpreter interpreter;

            public TFLiteModel(Context context) throws IOException {
                interpreter = new Interpreter(FileUtil.loadMappedFile(context, "models/mobilenet_ssd.tflite"));
            }

            public Task<List<DetectionEntity>> process(InputImage image) {
                // run inference on image.getBitmapInternal(), wrap results as DetectionEntity list
                List<DetectionEntity> results = runInference(image.getBitmapInternal());
                return Tasks.forResult(results);
            }

            @Override public void close() { interpreter.close(); }
        }
        TFLiteModel model = new TFLiteModel(context);

Initialize the SDK (ML Kit):

        TextRecognizer model = TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS);

### Step 2: Create CustomDetector

Create the `CustomerDetector` with the initialized model object by passing the model and an inference lambda to `CustomDetector.create()`. The SDK processes each `ImageData` frame on a background thread and returns a list of detected entities.

        CustomDetector<DetectionEntity> detector = CustomDetector.create(
               model,       // TFLite: Interpreter | ML Kit: TextRecognizer
               MODEL_ID,    // Unique string to identify this detector (e.g. "TFLite" or "MLKit")

               // Lambda invoked per camera frame.
               // 'm' is the model instance; 'imageData' is the current frame.
               // - TFLite: Call the m.process() method implemented in Step 1.
               // - ML Kit: Call the built-in TextRecognizer m.process() method.
               // Tasks.await() blocks the lambda thread until the Task execution completes.
               // NOTE: This lambda must run on a background thread; calling Tasks.await() on the UI thread can cause a crash.
               (m, imageData) -> {
                   return Tasks.await(
                           m.process(InputImage.fromBitmap(imageData.getBitmap(), 0)));
        });

### Step 3: Register with EntityTrackerAnalyzer

Add the custom detector to the analyzer’s detector list, optionally alongside built-in detectors.

        ExecutorService executor = Executors.newSingleThreadExecutor();

        EntityTrackerAnalyzer analyzer = new EntityTrackerAnalyzer(
            List.of(detector),                          // detector from Step 2
            ImageAnalysis.COORDINATE_SYSTEM_ORIGINAL,
            executor,
            result -> handleEntities(result)            // Step 4
        );

### Step 4: Handle Results

In the analyzer callback, retrieve entities with `result.getValue(customDetector)`.

        private void handleEntities(EntityTrackerAnalyzer.Result result) {

            List<? extends Entity> entities = result.getValue(detector); // detector from Step 2
            if (entities == null) return;

            for (Entity e : entities) {
                // TFLite: cast to DetectionEntity
                if (e instanceof DetectionEntity) { ... }

                // ML Kit: cast to CustomOcrTextEntity which extends from DetectionEntity
                if (e instanceof CustomOcrTextEntity) { ... }
            }
        }

### Step 5: Release Resources

Call `close()` on the custom detector when the activity or fragment is destroyed.

        override fun onDestroy() {
            super.onDestroy();
            detector?.close();   // closes tfliteModel if it implements AutoCloseable
        }

---

## Methods

### create (M modelInstance, String modelId, BiFunction processFn)

        static <M, E extends Entity> CustomDetector<E> create(M modelInstance, String modelId,
        BiFunction<M, ImageData, List<E>> processFn)

**Description:** Wraps a third-party model and inference function for use with `EntityTrackerAnalyzer`.

**Parameters:**

- **M modelInstance -** The initialized third-party model object.
- **String modelId -** Identifier used in SDK logging.
- **BiFunction&lt;M, ImageData, List&lt;E&gt;&gt; processFn -** Inference function invoked on the adapter's worker thread. Receives the model and an ImageData frame; must return a list of entities.

**Return Value:** A `CustomDetector<E>` ready for the detector list or direct `process()` calls.

---

### process(ImageData imageData)

        CompletableFuture<List<E>> process(ImageData imageData) throws AIVisionSDKException

**Description:** Submits a camera frame for asynchronous inference on the adapter's worker thread.

**Parameters:**

- **ImageData image -** The camera frame in analysis coordinates.

**Exceptions:**

- **AIVisionSDKException -** Thrown if the frame submission fails.

---

### process(ImageData imageData, Executor callbackExecutor)

        CompletableFuture<List<E>> process(ImageData imageData, Executor callbackExecutor)
        throws AIVisionSDKException

**Description:** Same as `process(ImageData)`, with the completion callback routed through the supplied executor.

**Parameters:**

- **ImageData imageData -** The camera frame in analysis coordinates.
- **Executor callbackExecutor -** The `Executor` on which the completion stage is invoked.

**Return Value:** A `CompletableFuture<List<E>>` with detection results.

**Note:** Inference always runs on the adapter's internal worker thread regardless of `callbackExecutor`.

---

### close()

        void close()

**Description:** Shuts down the internal worker thread and releases resources. If the wrapped model implements `AutoCloseable`, its `close()` method is also invoked.

**Return Value:** None

---

## Sample Apps

Start building your first custom model integration with the [QuickStart Sample](https://github.com/zebradevs/AISuite_Android_Samples/tree/main/AISuite_QuickStart) application source.

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
