---
title: Product Recognition
layout: guide.html
product: AI Data Capture SDK
productversion: ""
---

## Overview

**Product Recognition** utilizes the **Feature Extractor, Feature Storage,** and **Recognizer** classes to identify products in images. Typically used alongside the [Localizer](../localizer/) class, this approach builds a comprehensive knowledge base that enhances inventory tracking and facilitates automated checkouts.

- **[Feature Extractor](#featureextractor) -** Extracts key features from images to produce descriptors that chaaracterize these features.
- **[Feature Storage](#featurestorage) -** Stores these descriptors in a vector database, allowing users to build a comprehensive product recognition database.
- **[Recognizer](#recognizer) -** Initializes the database to perform semantic searches, identifying the most similar embeddings in the knowledge base and predicting the identity of detected products.

When combined with the [Shelf and Product Localizer](../localizer/), products within an image are first detected, then ‘cropped’ and individually submitted for recognition, streamlining the process for efficient and accurate identification. This system is particularly optimized for retail product recognition.

---

## Feature Extractor

The `FeatureExtractor` class generates a set of [Descriptors](../types/#descriptor), vectors of float numbers that offer a meaningful representation of the features of items identified within an image. It supports processing both entire images and specific regions defined by [bounding boxes](../types/#bbox/), accommodating various input formats and orientations. After the descriptors are generated, integration with Feature Storage allows for storage and retrieval of the descriptors for use.

Common Applications:

- **Image Classification:** Use descriptors that help classify images into categories, enhancing systems that sort or tag images based on visual content.
- **Object Detection and Recognition:** Extract features and generate descriptors from a whole image or specific regions of an image to help identify objects. This could be useful for surveillance, automated inspections or facial recognition within a crowd.
- **Image Search and Retrieval:** Implement image search functionality allowing to match objects to similar known entities from a database based on their descriptors, allowing for efficient and accurate visual searches. This could be useful to analyze specific areas of product images to detect defects or inconsistencies in manufacturing, ensuring high-quality standards.
- **Oriented Object Detection:** Extract features from specific image regions at known angles to improve object detection accuracy across various camera orientations. This is particularly useful in security systems.

Configuration options for Feature Extractor are offered through [FeatureExtractor.Settings](#featureextractorsettings).

---

### Developer Guide

This guide demonstrates how to create descriptors for entire images or specific regions, with the option to adjust for orientation if necessary.

#### Step 1: Initialization

1. **Import the FeatureExtractor class:** Use `com.zebra.ai.vision.FeatureExtractor`.
2. **Initialize the SDK:** Use your application's context object and invoke `init()` from the [AIVisionSDK](../class/aivisionsdk/) class.
3. **Retrieve the model name:** Invoke [getModelName](#staticstringgetmodelnameintmodel_type) with the appropriate model type. This configures the feature extraction process.
4. **Initialize Settings:** Create a `Settings` object with the model file path and model name.
5. **Instantiate FeatureExtractor:** Use the `Settings` object to create an instance of `FeatureExtractor` with a [CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html). The `thenAccept()` method allows handling of the instantiated `FeatureExtractor` for further operations.

Sample Code:

        import com.zebra.ai.vision.FeatureExtractor;

        // Developer must Initialize SDK by calling below API:
        AIVisionSDK.getInstance(Context).init(); //Context refers to application context object.

        //Initialize FeatureExtractor settings object
        String modelName = FeatureExtractor.Settings.getModelName(FeatureExtractor.Settings.MODEL_TYPE_FEATURE_EXTRACTOR);

        FeatureExtractor.Settings settings = new FeatureExtractor.Settings (modelName);

        // Initialize FeatureExtractor object
        FeatureExtractor featureExtractor = null;

        // Initialize featureExtractor
        // settings = featureExtractor.Settings object created
        CompletableFuture<FeatureExtractor> futureObject = getFeatureExtractor (settings, executor);

        // Use the futureObject to implement thenAccept() callback of CompletableFuture
        futureObject.thenAccept (featureExtractorInstance -> {
            // Use the featureExtractor object returned here for the detection of products
            featureExtractor = featureExtractorInstance;
        });

---

#### Step 2: Generate Descriptors

Generate descriptors for either whole images or specific image regions, with the option to adjust orientation if required.

##### For a Whole Image

1.  **Initialization:** Ensure that the `FeatureExtractor` is properly initialized with the necessary settings. Prepare the bitmap image and executor for processing.
2.  **Descriptor Generation:** Call `generateSingleDescriptor` with the bitmap and executor. This method returns a [CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html) that contains the image's descriptors.

    - **Without orientation adjustment:**

            CompletableFuture<Descriptor> futureObject = featureExtractor.generateSingleDescriptor (bitmap, executor);

    - **With orientation adjustment:** Include the orientation angle at which the image was captured:

            CompletableFuture<Descriptor> futureObject = featureExtractor.generateSingleDescriptor(bitmap, orientation, executor);

3.  **Asynchronous Processing:** Use the `thenAccept` method of `CompletableFuture` to handle the result once the descriptor generation is complete. This allows the descriptors for processing without blocking the main thread.
4.  **Resource Management:** After processing is complete, call `dispose()` on the `FeatureExtractor` object to free resources and memory used during feature extraction.

        // Input params: bitmap image and an executor thread object for running the feature extractor functionality
        CompletableFuture<Descriptor> futureObject = featureExtractor.generateSingleDescriptor (bitmap, executor);

        // If orientation adjustment is required, pass the orientation angle from which the image was taken
        // Comment out the code line above and use this line instead:
        // CompletableFuture<Descriptor> futureObject = featureExtractor.generateSingleDescriptor(bitmap, orientation, executor);

        futureObject.thenAccept (results -> {
            // Process the returned descriptor object
        });

        // Once done using the featureExtractor object, dispose the object to release the resources and memory used for feature extraction
        featureExtractor.dispose();

##### For Specific Image Regions

1.  **Initialization:** Ensure that the `FeatureExtractor` is initialized. Prepare the bitmap image and define the array of bounding boxes (detections) that indicate the specific regions of interest. _If applicable,_ determine the orientation angle of the image. Set up an executor to manage asynchronous task execution.
2.  **Descriptor Generation for Regions:** Call `generateDescriptors`, passing the [bounding boxes](../types/#bbox/), bitmap, and executor. This returns a [CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html) that outputs a descriptor object for each item specified by the bounding boxes.

    - **Without orientation adjustment:**

            CompletableFuture<Descriptor> futureObject = featureExtractor.generateDescriptors(detections, bitmap, executor);

    - **With orientation adjustment:** Include the orientation angle at which the image was captured:

            CompletableFuture<Descriptor> futureObject = featureExtractor.generateDescriptors(detections, bitmap, orientation, executor);

3.  **Asynchronous Processing:** Use the `thenAccept` method of `CompletableFuture` process the descriptors as they are generated, avoiding blocking the main execution thread.
4.  **Resource Management:** After processing is complete, call `dispose()` on the `FeatureExtractor` to release resources and memory used during extraction. This is essential for optimal performance and preventing memory leaks.

Sample Code:

        // Input params: bitmap image; array of bounding boxes; an executor thread object thread object for running the feature extractor functionality
        CompletableFuture<Descriptor> futureObject = featureExtractor.generateDescriptors(detections, bitmap, executor);

        // If orientation adjustment is required, pass the orientation angle from which the image was taken
        // Comment out the code line above and use this line instead:
        // CompletableFuture<Descriptor> futureObject = featureExtractor.generateDescriptors(detections, bitmap, orientation, executor);

        futureObject.thenAccept (results -> {
            // Process the Descriptor object
        } );

        // Once done using the featureExtractor object dispose the object to release the resources and memory used for feature extraction

        featureExtractor.dispose();

---

### Methods

#### FeatureExtractor (Settings settings)

        FeatureExtractor (Settings settings) throws IOException

**Description:** Constructs a new `FeatureExtractor` object.

**Parameters:**

- **settings -** Configuration settings to construct a `FeatureExtractor` object.

**Exceptions:**

- **IOException -** Thrown if there is an issue accessing the archive (e.g., file not found).

---

#### void Dispose()

        void FeatureExtractor.dispose()

**Description:** Releases all internal resources used by the feature extractor object. This method should be called manually to free resources.

---

#### generateSingleDescriptor (Bitmap bmp, int orientation, Executor executor)

        CompletableFuture<Descriptor> generateSingleDescriptor(Bitmap bmp, int orientation, Executor executor) throws InvalidInputException, IllegalStateException

**Description:** Generates a descriptor for a whole image with a specified orientation, using a provided executor for asynchronous execution.

**Parameters:**

- **bmp -** The image to process.
- **orientation -** This refers to the orientation angle, which is of the Integer type:
  - **0 -** 0 degrees
  - **1 -** 90 degrees
  - **2 -** 180 degrees
  - **3 -** 270 degrees
- **executor -** An `Executor` for asynchronous task execution.

**Return Value:** A CompletableFuture with a Descriptor object as the output for a given input image.

**Exceptions:**

- **InvalidInputException -** Thrown if bmp is null or orientation is invalid.
- **IllegalStateException -** Thrown if the feature extractor is not in a valid state to perform the operation.

---

#### generateSingleDescriptor (Bitmap bmp, Executor executor)

        CompletableFuture<Descriptor> generateSingleDescriptor(Bitmap bmp, Executor executor) throws InvalidInputException, IllegalStateException

**Description:** Generates a descriptor for a whole image without specifying orientation, using a provided executor for asynchronous execution.

**Parameters:**

- **bmp -** The image to process.
- **executor -** An `Executor` for asynchronous task execution.

**Return Value:** A CompletableFuture with a Descriptor object as the output for a given input image.

**Exceptions:**

- **InvalidInputException -** Thrown if bmp is null or orientation is invalid.
- **IllegalStateException -** Thrown if the feature extractor is not in a valid state to perform the operation.

---

#### generateDescriptors (BBox[ ] detections, Bitmap bmp, int orientation, Executor executor)

        CompletableFuture<Descriptor> generateDescriptors(BBox[] detections, Bitmap bmp, int orientation, Executor executor) throws InvalidInputException, IllegalStateException

**Description:** Generates a set of descriptors for each item in an image determined by an array of bounding boxes with a specified orientation, using a provided executor for asynchronous execution.

**Parameters:**

- **detections -** Array of bounding boxes determining the location of items.
- **bmp -** The image to process.
- **orientation -** This refers to the orientation angle, which is of Integer type:
  - **0 -** 0 degrees
  - **1 -** 90 degrees
  - **2 -** 180 degrees
  - **3 -** 270 degrees
- **executor -** An `Executor` for asynchronous task execution.

**Return Value:** A CompletableFuture with a Descriptor object as the output for each of the items defined by the bounding boxes adjusted for the specified orientation.

**Exceptions:**

- **InvalidInputException -** Thrown if `bmp` or `detections` is null or `orientation` is invalid.
- **IllegalStateException -** Thrown if a previous descriptor generation is still in progress.

---

#### generateDescriptors (BBox[ ] detections, Bitmap bmp, Executor executor)

        CompletableFuture<Descriptor> generateDescriptors(BBox[] detections, Bitmap bmp, Executor executor) throws InvalidInputException, IllegalStateException

**Description:** Generates a set of descriptors for each item in an image determined by an array of bounding boxes without specifying orientation, using a provided executor for asynchronous execution.

**Parameters:**

- **detections -** Array of bounding boxes determining the location of items.
- **bmp -** The image to process.
- **executor -** An `Executor` for asynchronous task execution.

**Return Value:** A CompletableFuture with a Descriptor object as the output for each of the items defined by the bounding boxes adjusted for the specified orientation.

**Exceptions:**

- **InvalidInputException -** Thrown if `bmp` or `detections` is null.
- **IllegalStateException -** Thrown if a previous descriptor generation is still in progress.

---

#### getFeatureExtractor (Settings settings, Executor executor)

        CompletableFuture<FeatureExtractor> getFeatureExtractor(Settings settings, Executor executor) throws InvalidInputException, RuntimeException

**Description:** Asynchronously loads the model and returns a `FeatureExtractor` object.

**Parameters:**

- **settings -** Settings to construct a `FeatureExtractor` object.
- **executor -** An `Executor` for asynchronous task execution.

**Return Value:** A `CompletableFuture` containing the initialized `FeatureExtractor` object.

**Exceptions:**

- **InvalidInputException -** Thrown if `settings` is null.
- **RuntimeException -** Thrown if the SDK is not initialized.

---

### FeatureExtractor.Settings

The `FeatureExtractor.Settings` class is a nested class within the `FeatureExtractor` class. It provides configuration options for the feature extractor, offering multiple constructors to initialize the settings with varying levels. This flexibility allows developers to tailor configurations according to their specific requirements.

---

#### Settings()

**Description:** Constructs a new `Settings` object with default values, suitable for scenarios when the default configuration is adequate.

**Exceptions:**

- **RuntimeException -** Thrown if the SDK is not initialized.

---

#### Settings (String model_name)

**Description:** Constructs a new `Settings` object with a specified file location and model name, specification of the resource file and model name.

**Parameters:**

- **model_name -** Name of the model within the compressed file. For Feature Extractor, this is “descriptor”.

**Exceptions:**

- **InvalidInputException -** Thrown if any parameter is null or invalid.
- **RuntimeException -** Thrown if the SDK is not initialized.

---

#### Static String getModelName (int model_type)

**Description:** Returns the model name for the specified model type, used to load the feature extractor model for generating feature descriptors.

**Parameters:**

- **int model_type -** Model type to be passed. For Feature Extractor, this should be `MODEL_TYPE_FEATURE_EXTRACTOR`.

**Return value:**

- String representing the model name

**Exceptions:**

- **InvalidInputException -** Thrown if an invalid model type is passed

---

#### Attributes

<!--
##### String resourceName

**Description:** Location of the resource file (i.e., model) for the feature extractor, indicating where the necessary file is located.
-->

##### String modelName

**Description:** Name of the model in the compressed file, identifying which model to use from the provided resources.

##### InferencerOptions = new InferencerOptions()

**Description:** An instance of [InferencerOptions](../class/inferenceroptions/), providing additional configuration options for the inferencer’s behavior.

##### static final int MODEL_TYPE_FEATURE_EXTRACTOR

**Description:** The model type passed to [getModelName](#staticstringgetmodelnameintmodel_type). For Feature Extractor, the value is 1.

---

## Feature Storage

**Feature Storage** is primarily responsible for storing and updating the descriptors of items generated by the `FeatureExtractor`. It stores them in a database along with their corresponding class names to be used for detection by the [Recognizer](#recognizer).

### Developer Guide

This guide demonstrates how to retrieve descriptors from Feature Extractor and store them into the database.

#### Step 1: Initialization

1. **Import the `FeatureStorage` class:** Use com.zebra.ai.vision.FeatureStorage.
2. **Initialize the SDK:** Use your application's context object and invoke `init()` from the [AIVisionSDK](../class/aivisionsdk/) class.
3. **Initialize Settings:** Create a `Settings` object with the database file path (e.g., file_path/product.db) as the input parameter
4. **Set up an Executor:** Create an `Executor` to handle the asynchronous operations. This is important for managing the execution of tasks without blocking the main application thread.
5. **Instantiate `FeatureStorage`:** Use the `Settings` object to create an instance `FeatureStorage` with a `CompletableFuture`. The `thenAccept()` method allows handling of the `FeatureStorage` for further operations.

Sample Code:

        import com.zebra.ai.vision.FeatureStorage;

        // Create settings
        FeatureStorage.Settings settings = new FeatureStorage.Settings(“data_base_file_path/product.db”);

        FeatureStorage featureStorage = null;

        // Initialize executor
        Executor executor = Executors.newFixedThreadPool(1);

        // Initialize FeatureStorage object
        CompletableFuture<FeatureStorage> futureObject = FeatureStorage.getFeatureStorage(settings , executor);

        futureObject.thenAccept(featureStorageInstance -> {
            // Use the featureStorageInstance returned here for storing Feature descriptors generated by Feature Extractor.
            featureStorage =  featureStorageInstance;
        });

---

#### Step 2: Store Feature Descriptors

1.  **Retrieve the feature descriptors:** Use the `FeatureExtractor` to obtain a Descriptor object, which contains descriptors of type float[][] from the provided bitmap image.
2.  **Store descriptors:** Store these descriptors from the Descriptor object into the database. The `label_file` parameter serves as the identifier for the product represented by the descriptors, and `descriptorObj` contains product's descriptors.

        // Obtaain descriptorObj from FeatureExtractor and store the descriptors in the database using FeatureStorage
        featureStorage.addDescriptors(label_file , descriptorObj);

        // Dispose of the FeatureStorage object once it is no longer needed
        featureStorage.dispose();

---

### Methods

#### FeatureStorage(Settings settings)

        FeatureStorage (Settings settings) throws FileNotFoundException, IOException, RuntimeException

**Description:** Constructs a new `FeatureStorage` object with the provided settings. Throws exceptions if the model is not found, the archive is corrupted, or if the SDK is not initialized.

**Parameters:**

- **settings:** Configuration settings used to initialize the feature storage.

**Exceptions:**

- **FileNotFoundException:** Thrown if the configuration file specified in the settings is not found.
- **IOException:** Thrown if there is an issue reading or writing to the underlying storage.
- **RuntimeException:** Thrown if the AI Data Capture SDK is not initialized.

---

#### dispose()

        void dispose()

**Description:** Releases all internal resources used by the `FeatureStorage` object. This method should be called manually to free resources.

---

#### addDescriptors (String label, Descriptor descriptorObj, boolean forceSupport, boolean randomTrim)

        void addDescriptors(String label, Descriptor descriptorObj, boolean forceSupport, boolean randomTrim) throws InvalidInputException

**Description:** Adds descriptors for a product with options to support flagging and random trimming.

**Parameters:**

- **label -** Identifier of the product.
- **descriptorObj -** Descriptor object consisting of model version used and descriptors of type float[][].
- **forceSupport -** Flag to mark descriptors as support.
- **randomTrim -** If true, randomly removes descriptors exceeding `maxUpdateN`.

**Exceptions:**

- **InvalidInputException:** Thrown when `descriptorObj` or `label` is null.

---

#### addDescriptors(String label, Descriptor descriptors, boolean forceSupport)

        void addDescriptors(String label, Descriptor descriptorObj, boolean forceSupport) throws InvalidInputException

**Description:** Adds descriptors for a product with an option to force support.

**Parameters:**

- **label -** Identifier of the product.
- **descriptorObj -** Descriptor object consists of model version used and descriptors of type float[][].
- **forceSupport -** Flag to mark descriptors as support.

**Exceptions:**

- **InvalidInputException:** Thrown when `descriptorObj` or `label` is null.

---

#### addDescriptors(String label, Descriptor descriptor)

        void addDescriptors(String label, Descriptor descriptorObj) throws InvalidInputException

**Description:** Adds descriptors for a product without additional flags.

**Parameters:**

- **label:** Identifier of the product.
- **descriptorObj:** Descriptor object consisting of the model version used and descriptors of type float[ ][ ].

**Exceptions:**

- **InvalidInputException:** Thrown when `descriptorObj` or `label` is null.

---

#### addDescriptorsWithImages(String label, Descriptor descriptorObj, byte[ ][ ] images, boolean forceSupport)

        void addDescriptorsWithImages(String label, Descriptor  descriptorObj, byte[][] images, boolean forceSupport) throws InvalidInputException

**Description:** Adds descriptors and associated images for a product with an option to force support.

**Parameters:**

- **label -** Identifier of the product.
- **descriptorObj -** Descriptor object consists of model version used and descriptors of type float[ ][ ].
- **images -** List of images.
- **forceSupport -** Flag to mark descriptors as support.

**Exceptions:**

- **InvalidInputException:** Thrown when `descriptorObj` or `label` is null.

---

#### addDescriptorsWithImages(String label, Descriptor descriptorObj, byte[ ][ ] images)

        void addDescriptorsWithImages(String label, Descriptor descriptor, byte[][] images) throws InvalidInputException

**Description:** Adds descriptors and associated images for a product without forcing support.

**Parameters:**

- **label -** Identifier of the product.
- **descriptorObj -** Descriptor object consisting of the model version used and descriptors of type float[][].
- **images -** List of images.

**Exceptions:**

- **InvalidInputException:** Thrown when `descriptorObj` or `label` is null.

---

#### getSupportDescriptorsForProduct(String label)

        float[][] getSupportDescriptorsForProduct(String label)

**Description:** Retrieves all support descriptors for a specified class.

**Parameters:**

- **label -** Product identifier.

**Returns:** Array of support descriptors for the specified class.

---

#### getAvailableClassNames()

        String[] getAvailableClassNames()

**Description:** Retrieves the product labels from database with at least one supported descriptor.

**Returns:** List of labels of the found products.

---

### FeatureStorage.Settings

The `FeatureStorage.Settings` class provides options to configure the behavior of `FeatureStorage`.

#### String dbSource

**Description:** Specifies the location of the database.

#### int maxUpdateN

**Description:** Specifies the maximum number of descriptors that can be added from an image.

---

## Recognizer

The `Recognizer` class offers methods to identify patterns from descriptors produced by the [Feature Extractor](#feature-extractor) and stored in [Feature Storage](#featurestorage). It determines the top matches for a given set of descriptors and manages the loading and saving of indices and labels for persistent storage. The class supports both synchronous and asynchronous result retrieval.

This guide begins with initial instructions for basic setup of the Recognizer after implementing Feature Extractor and Feature Storage. Subsequent sections offer a comprehensive list of Recognizer settings that can be fine-tuned for specific needs:

- [Recognition](#recognizerrecognition)
- [SettingsDb](#settingsdb)
- [SettingsIndex](#settingsindex)

---

### Developer Guide

This guide demonstrates how use the `Recognizer` to find recognitions based on the descriptors generated. Setup the database to store feature descriptors. Initialize the Recognizer with an index.

#### Step 1: Initialize Database

1.  **Import Necessary Classes:** Import the `Recognizer` class and other necessary classes such as `CompletableFuture` and `Executor`.
2.  **Initialize SDK:** Call `AIVisionSDK.getInstance(Context).init()` from the [AIVisionSDK](../class/aivisionsdk/) class to initialize the SDK. Here, `Context` refers to the application context object.
3.  **Configure SettingsDb Instance:** Initialize a `Recognizer.SettingsDb` object and set the `dbSource` attribute to the path of the SQLite database file containing the feature descriptors.
4.  **Initialize Executor:** Use `Executors.newFixedThreadPool(1)` to create an Executor for managing asynchronous tasks efficiently.
5.  **Instantiate Recognizer:** Use the `getRecognizer(dbSettings, executor)` method to get a `CompletableFuture<Recognizer>` object, initializing the recognizer with the database settings.
6.  **Handle Asynchronous Result:** Use `thenAccept()` on the `CompletableFuture` to handle the `Recognizer` object once it becomes available. Assign the recognizer instance to a variable for further use.

        import com.zebra.aivision.Recognizer;

        // Initialize SDK
        AIVisionSDK.getInstance(Context).init(); // Context refers to application context object.

        // Initialize Recognizer settings object
        Recognizer.SettingsDb dbSettings = new Recognizer.SettingsIndex();

        String database_file_path  = “path_of_db_file”; // Full path to the SQLite database file

        dbSettings.dbSource = database_file_path ;

        // Initialize Recognizer object
        Recognizer recognizer = null;

        //Initialize recognizer from a database
        //settings = Recognizer.SettingsDb object created above

        // Initialize executor
        Executor executor = Executors.newFixedThreadPool(1);

        CompletableFuture<Recognizer> futureObject = getRecognizer(dbSettings, executor);

        // Use the futureObject to implement thenAccept() callback of CompletableFuture.
        futureObject.thenAccept (recognizerInstance -> {
            // Use the recognizer object returned here to recognize products
            recognizer = recognizerInstance;
        });

---

#### Step 2: Initialize Search Indexes

1.  **Import Necessary Classes:** Import the `Recognizer` class and necessary concurrent utilities such as `CompletableFuture` and `Executor`.
2.  **Configure SettingsIndex:** Create an instance of `Recognizer.SettingsIndex` and set the `indexFilename` and `labelFilename` attributes to the paths of the FAISS (Facebook AI Similarity Search) index and label files, respectively.
3.  **Prepare Executor:** Instantiate an `Executor` using `Executors.newFixedThreadPool(1)` to handle asynchronous tasks efficiently.
    4 **Initialize Recognizer:** Use `Recognizer.getRecognizer(reSettings, executor)` to obtain a `CompletableFuture<Recognizer>` object, which initializes the recognizer with the specified index settings.
4.  **Handle Asynchronous Result:** Use `thenAccept()` on the `CompletableFuture` to handle the `Recognizer` object once it’s ready. Assign the recognizer instance to a variable for further operations, such as product or shelf detection.

        import com.zebra.CVSDK.Recognizer;

        // Initialize Recognizer
        Recognizer.SettingsIndex reSettings = new Recognizer.SettingsIndex()

        //set product index file and product label file
        reSettings.indexFilename =  “path_to_product.index”;  // Fully qualified file path to FAISS index object for descriptors
        reSettings.labelFilename = “path_to_product.txt file”; // Fully qualified file path to FAISS index object for labels

        // Initialize Recognizer object
        Recognizer recognizer = null;

        // Initialize executor
        Executor executor = Executors.newFixedThreadPool(1);

        //Initialize recognizer from an index file
        CompletableFuture<Recognizer> futureObject = Recognizer.getRecognizer(reSettings,executor);

        //Use the futureObject to implement thenAccept() callback of CompletableFuture.
        futureObject.thenAccept (recognizerInstance -> {
            //Use the recognizer object returned here for the detection of Shelves/products
            recognizer = recognizerInstance;
        });

---

#### Step 3: Perform Recognition

1.  **Generate Descriptors:** Use `FeatureExtractor.generateDescriptors()` to obtain descriptors required for the recognition process.
2.  **Perform Recognition:** Invoke one of the following methods to find the appropriate matches for each descriptor.:
    - **Top 5 matches:** `recognizer.findRecognitions(descriptors, executor)`
    - **Top-k matches:** `recognizer.findRecognitions(descriptors, k, executor)`
3.  **Process Results:** The results are handled asynchronously using `thenAccept()`. Iterate through the returned Recognition[] to process each recognition result.
4.  **Dispose Recognizer:** After completing the recognition tasks, call recognizer.dispose() to release resources and memory utilized during the process.

        import java.io.IOException;
        import java.util.concurrent.CompletableFuture;
        import java.util.concurrent.ExecutionException;

        // Create an instance of SettingsDb
        Recognizer.SettingsDb settingsDb = new Recognizer.SettingsDb();

        // Instantiate the Recognizer
        //settings = Recognizer.SettingsDb object created above

        // Initialize executor
        Executor executor = Executors.newFixedThreadPool(1);

        CompletableFuture<Recognizer> futureObject = Recognizer.getRecognizer(settings,executor);

        // Use the futureObject to implement thenAccept() callback of CompletableFuture.
        futureObject.thenAccept (recognizerInstance -> {
            // Use the recognizer object returned here for the detection of barcodes/Shelves/products
            recognizer = recognizerInstance;
        });

        // Get the Descriptors from FeatureExtractor.generateDescriptors()
        // Perform Recognition
        // Find top-k recognitions for each item represented by a descriptor
        CompletableFuture<Recognition[]> futureObject = recognizer.findRecognitions(descriptors, k, executor);

        // Perform Recognition
        // Find top 5 recognitions for each item represented by a descriptor
        // CompletableFuture<Recognition[]> futureObject = recognizer.findRecognitions(descriptors, executor);

        futureObject.thenAccept (results -> {
                // Process the returned array of recognitions.
        } );

        // Dispose resources
        // Once done using the recognizer object, dispose the object to release the resources and memory used for recognition
        recognizer.dispose();

---

### Methods

#### getRecognizer (SettingsDb settings, Executor executor)

        CompletableFuture<Recognizer> getRecognizer(SettingsDb settings, Executor executor) throws InvalidInputException, RuntimeException

**Description:** Asynchronously retrieves a Recognizer using database settings.

**Parameters:**

- **SettingsDb settings -** Settings for initialization from a database.
- **Executor executor -** The executor to use for asynchronous operations.

**Return Value:** A future holding the Recognizer object.

**Exceptions:**

- **InvalidInputException -** Thrown if the input settings are invalid.
- **RuntimeException -** Thrown if an unexpected error occurs.

---

#### getRecognizer (SettingsIndex settings, Executor executor)

        CompletableFuture<Recognizer> getRecognizer (SettingsIndex settings, Executor executor) throws RuntimeException, InvalidInputException

**Description:** Asynchronously retrieves a `Recognizer` object using index file settings.

**Parameters:**

- **SettingsIndex settings -** Settings for initialization from an index file.
- **Executor executor -** The executor to use for asynchronous operations.

**Return Value:** A future holding the Recognizer object.

**Exceptions:**

- **RuntimeException -** Thrown if an unexpected error occurs.
- **InvalidInputException -** Thrown if the input settings are invalid.

---

#### Dispose()

        void Recognizer.dispose()

**Description:** Frees or releases resources by the `Recognizer`; must be when the `Recognizer` is no longer needed.

---

#### findRecognitions(float[ ][ ] descriptors, int k, Executor executor)

        CompletableFuture<Recognition[]> findRecognitions(float[][] descriptors, int k, Executor executor) throws InvalidInputException, IllegalStateException

**Description:** Finds the top-k recognitions for the given descriptors asynchronously.

**Parameters:**

- **float[][] descriptors -** Array of descriptors for recognition.
- **int k -** Number of top recognitions to find.
- **Executor executor -** The executor for asynchronous operations.

**Return Value:** A future containing an array of `Recognition` objects.

**Exceptions:**

- **IllegalStateException -** Thrown if the recognizer is not properly initialized.
- **InvalidInputException -** Thrown if descriptors are invalid.

---

#### findRecognitions(float descriptors[ ][ ])

        CompletableFuture<Recognition[]> findRecognitions(float[][] descriptors, Executor executor) throws InvalidInputException, IllegalStateException

**Description:** Finds the top 5 classes for each item represented by a descriptor. A class is the product category of an item.

**Parameters:**

- **float[ ][ ] descriptors -** An array of descriptors to use for recognitions.
- **Executor executor -** The executor for asynchronous operations.

**Return Value:** A [CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html) containing an array of `Recognition` objects.

**Exceptions:**

- **IllegalStateException -** Thrown if the recognizer is not properly initialized.
- **InvalidInputException -** Thrown if descriptors are invalid.

---

#### findRecommendations (Descriptor descriptorObj, int k)

        Recognizer.findRecommendations (Descriptor descriptorObj, int k) throws InvalidInputException

**Description:** This method identifies the top-k labels that match a set of descriptors as a whole.

**Parameters:**

- **descriptorObj -** The descriptor object used for recognition.
- **k -** The maximum number of top matches to return.

**Return Value:** An array of Recommendation objects.

**Exceptions:**

- **InvalidInputException -** Thrown if the descriptor array is null.

---

#### saveIndex()

        void Recognizer.saveIndex (String labelFilename, String indexFilename)

**Description:** Write the index state and labels to a file.

**Parameters:**

- **labelFilename -** Filename to write labels to.
- **indexFilename -** Filename to write indices to.

---

#### loadIndex()

        void Recognizer.loadIndex (String labelFilename, String indexFilename)

**Description:** Read the index state and labels from a file.

**Parameters:**

- **labelFilename -** The filename to read labels from.
- **indexFilename -** The filename to read indices from.

---

### Recognizer.Recognition

The `Recognition` class serves as a container for results from a product recognition process. Each instance of this class contains three parallel arrays: `similarity`, `normalizedSimilarity`, and `sku`. These arrays provide a comprehensive overview of the recognition results, including both the raw and normalized similarity scores, as well as the unique SKUs of the recognized products.

#### similarity

        Recognizer.Recognition.similarity[]

**Description:** This attribute stores the raw similarity scores, indicating the degree of similarity between the input data and each recognized product.

#### normalizedSimilarity

        Recognizer.Recognition.normalizedSimilarity[]

**Description:** This array contains the normalized similarity scores for each recognized product, allowing for a more uniform comparison across different recognition tasks.

#### sku

        Recognizer.Recognition.sku[]

**Description:** This attribute contains the SKU identifiers for each recognized product, facilitating product identification and inventory management.

---

### Recognizer.SettingsDb

The `Recognizer.SettingsDb` class encapsulates the settings required for initializing a recognizer using a database. It provides mechanisms to define the database source, specify FAISS index parameters, and filter labels, among other configurations.

---

#### SettingsDb()

        Recognizer.SettingsDb.SettingsDb()

**Description:** Constructs a new `SettingsDb` object with default settings, initializing the object without any file-specific overrides.

---

#### SettingsDb(String filename)

        Recognizer.SettingsDb.SettingsDb (String filename)

**Description:** Constructs a new `SettingsDb` object using the specified file for resource overrides.

**Parameters:**

- **filename -** The file location containing resources for the recognizer, such as a meta file with configuration values.

---

#### resourceName

        Recognizer.SettingsDb.resourceName

**Description:** An optional parameter specifying the location of the file containing resources for the recognizer (i.e., meta files with configuration values). This allows for configuration overrides.

---

#### dbSource

        Recognizer.SettingsDb.dbSource

**Description:** Specifies the location of the database. This attribute is crucial for determining where the recognizer should source its data.

---

#### faissIndexString

        Recognizer.SettingsDb.faissIndexString

**Description:** Defines the type of the FAISS index, used to select the appropriate indexing strategy for the database.

---

#### faissParamsString

    Recognizer.SettingsDb.faissParamsString

**Description:** Additional parameters for the FAISS index, allowing for fine-tuning the index settings beyond the default configuration.

---

#### labelFilter

        Recognizer.SettingsDb.labelFilter

**Description:** A list of labels to ignore from the database, helping in filtering out unwanted data during the recognition process.

---

#### indexDimensions

        Recognizer.SettingsDb.indexDimensions

**Description:** Specifies the dimension of the vectors stored in the search index, ensuring compatibility between the data and the indexing method.

---

### Recognizer.SettingsIndex

The `Recognizer.SettingsIndex` class manages settings for initializing a system from an index file. It provides constructors to create instances with default settings or with specified index and label file locations, making it useful for applications that require structured input data and label information for AI vision processing tasks.

---

#### SettingsIndex()

        Recognizer.SettingsIndex.SettingsIndex()

**Description:** This is the default constructor for the `SettingsIndex` class, creating a new object without a predefined index or label file paths.

---

#### SettingsIndex(String index filename, String labelFilename)

        Recognizer.SettingsIndex.SettingsIndex (String index filename, String labelFilename)

**Description:** This constructor creates a new `SettingsIndex` object with specified file locations for both the index and label files. This is useful when specific files are needed to initialize the system.

---

#### indexFilename

        Recognizer.SettingsIndex.indexFilename

**Description:** A string attribute that specifies the location of the path to the index file, facilitating the system's initialization with structured input data.

---

#### labelFilename

        Recognizer.SettingsIndex.labelFilename

**Description:** A string attribute that specifies the path to the label file, enabling the system to effectively associate labels with the indexed data.

---

## Sample App

Consult the [Product Recognition Sample App](https://github.com/zebratechnologies/Zebra_AISuite_SDK_Sample_Apps/tree/main/ProductRecognition_Sample_app), which demonstrates how to recognize products in images, with configurable settings for model input size, inferencer options, and detection accuracy for different object types.

---

Related Guides:

- [About](../about/)
- [Setup](../setup/)
- [Localizer](../localizer/)
- [Barcode Decoder](../barcodedecoder/)
- [Text OCR](../textocr/)
