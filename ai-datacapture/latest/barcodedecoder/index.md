---
title: Barcode Decoder
layout: guide.html
product: AI Data Capture SDK
productversion: ""
---

## Overview

The `BarcodeDecoder` class is designed to decode various types of barcodes detected in images. Initially, the [Localizer](../localizer/) class identifies the location of barcodes in captured images. Subsequently, the `BarcodeDecoder` class decodes barcodes from either entire images or specific regions of the image defined by [bounding boxes](../types/#bbox/). It can handle single and multiple barcode decoding within a single image. 

Additionally, the `process()` method of the `BarcodeDecoder` class facilitates the ability to localize and decode barcodes simultaneously. This interface enables the development of CameraX analyzers in conjunction with other detectors.

Common applications:

- **Retail and Inventory Management -** Automate product identification and inventory management by decoding barcodes on shelves, labels, or packaging.
- **Mobile Applications -** Integrate scanning capabilities for QR codes and other barcodes in mobile apps.
- **Logistics and Supply Chain -** Track packages and shipments by decoding barcodes on boxes and pallets.
- **Healthcare -** Scan barcodes on medical supplies and patient wristbands for inventory management and patient tracking.

---

## Developer Guide

This guide outlines the process for setting up and executing barcode decoding using BarcodeDecoder, from initialization to decoding image data.

### Step 1: Initialization

1. **Import the BarcodeDecoder class** using `com.zebra.ai.vision.BarcodeDecoder`.
2. **Initialize BarcodeDecoder Settings:** Create an instance of `BarcodeDecoder.Settings`, which will hold any configurations needed to set for the barcode decoding process.
3. **Configure Barcode Symbologies:** Enable the desired barcode symbologies to recognize and set its parameters; refer to the [Supported Barcode Symbologies](#barcodesymbologies).
4. **Initialize and load the model asynchronously -** Declare a `BarcodeDecoder` object and use a [CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html) to load the model asynchronously. Refer to the supported and cached input resolutions for reducing model loading time.
5. **Handle synchronous initialization -** Implement the `thenAccept()` callback to use the decoder instance once it is available.

Sample Code:

        import com.zebra.ai.vision.BarcodeDecoder;

        // Initialize BarcodeDecoder settings object
        BarcodeDecoder.Settings settings = new BarcodeDecoder.Settings();

        // Enable UPCE1 and its parameters or other desired symbologies
        settings.Symbology.UPCE1.enable(true);
        settings.Symbology.UPCE1.setReportCheckDigit(true);

        // Initialize BarcodeDecoder object
        BarcodeDecoder barcodeDecoder = null;

        // Executor = An executor thread in which the processing of API call happens, and the results are returned
        CompletableFuture<BarcodeDecoder> futureObject = BarcodeDecoder.getBarcodeDecoder(settings, executor);

        // Use the futureObject to implement thenAccept() callback of CompletableFuture.
        futureObject.thenAccept (decoderInstance -> {
            // Use the decoder object returned here for decoding the barcodes
            barcodeDecoder = decoderInstance;
        });

---

### Step 2: Decode

Select one of the following methods to decode:

#### > Method 1: Detect and Decode with process()

The [process()](#processimagedataimagedata) method within the `BarcodeDecoder` class enables applications to pass an `ImageData` object and perform simultaneous localization and decoding, based on the Localizer and BarcodeDecode settings respectively. Designed as a “detector” for use with CameraX analyzers, this interface can be integrated alongside other detectors, such as TextOCR. 

**Note:** AI Data Capture SDK also offers a cameraX `ImageAnalysis.Analyzer`, which can localize, decode and track barcodes, and notify applications. For further details, refer to [EntityTrackerAnalyzer](../camerax/).

**Step 1: Initialize BarcodeDecoder:**
1. **Create BarcodeDecoder Settings:** Instantiate a `Settings` object for the `BarcodeDecoder` and enable the desired symbologies.
2. **Initialize BarcodeDecoder:** Obtain a `BarcodeDecoder` instance asynchronously using a `CompletableFuture`.

**Step 2: Process the Frame:**
1. **Prepare Inputs:** The `process()` method requires an `ImageData` object. Use the helper methods within `ImageData` for conversion based on the image source type (`ImageProxy`, `Android.media.image`, or `Bitmap`).
2.**Localize and Decode Barcodes:** Execute the `process()` method to detect and decode barcodes.
3. **Handle Results:** Process the decoded barcodes when the `CompletableFuture` completes.
4. **Dispose the Decoder:** After decoding is complete and the decoder instance is no longer needed, dispose of the decoder to release resources.

Sample Code:

        try {
         
        } 
    
        catch (Exception e) {
                Log.e(TAG, "Analysis failed: " + e.getMessage());
        }


#### > Method 2: Decode Full Image

This method executes the decoder over the entire image, attempting to find and decode a barcode. Typically, this applies for decoding a single barcode.

1. **Prepare Inputs:** Obtain a Bitmap image that contains the barcode. Use an Executor to manage the asynchronous decoding operation.
2. **Decode Barcode:** Call the decode method on the BarcodeDecoder instance, passing the image and executor.
3. **Handle Results:** Process the decoded barcode when the CompletableFuture completes.
4. **Dispose Decoder:** After decoding is complete and the decoder instance is no longer needed, dispose of the decoder to release resources.

Sample Code:

        // Decoding starts once the bitmap image is available
        // Input params: bitmap image and an executor thread object (in which the decode happens and the results are returned).
        CompletableFuture<Result> resultFutureObject = barcodeDecoder.decode(bitmap, executor);
        resultFutureObject.thenAccept (results -> {
            // Process the returned result of decoded barcode.
        });

        // Once done with using the decoder object, dispose the object to release the resources and memory used for decoding
        barcodeDecoder.dispose();

#### > Method 3: Decode Image Regions

This method executes the decoder over specific areas of an image, as defined by [bounding boxes](../types/#bbox/). It is generally used when these bounding boxes are identified through a separate localization process, such as a [Localizer](../localizer/), and is particularly applicable when decoding multiple barcodes.

**Step 1: Barcode Detection:**

1. **Set Model Name:** Obtain the model name for barcode localization.
2. **Configure Localizer Settings:** Create and configure a `Localizer.Settings` object with the model name. Optionally, set the input dimensions.
3. **Initialize Localizer:** Asynchronously obtain a `Localizer` instance using a `CompletableFuture`.

**Step 2: Barcode Decoding:**

1. **Create BarcodeDecoder Settings:** Instantiate a Settings object for the BarcodeDecoder and enable desired symbologies.
2. **Initialize BarcodeDecoder:** Asynchronously obtain a BarcodeDecoder instance using a [CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html).
3. **Detect Objects:** Once a camera image is available, use the `Localizer` to detect objects. This method accepts a Bitmap image and returns bounding boxes of detected items.
4. **Decode Barcodes:** Use the `BarcodeDecoder` to decode the detected barcodes from the bounding boxes.

Sample Code:

        // Barcode Detection
        String modelName =  Localizer.Settings.getModelName(Localizer.Settings.MODEL_TYPE_BARCODE_LOCALIZER);
        Localizer.Settings settings = new Localizer(modelName);

        // Optional: Set model input size parameters
        settings.inferencerOptions.defaultDims.height = 640;
        settings.inferencerOptions.defaultDims.width = 640;

        // Initialize Localizer object
        Localizer localizer = null;

        CompletableFuture<Localizer> futureObject = Localizer.getLocalizer(settings,executor);

        // Use the futureObject to implement thenAccept() callback of //CompletableFuture.
        futureObject.thenAccept ( localizerInstance -> {
            localizer = localizerInstance; // Use the localizer object for the detection of barcodes/shelves/products
        });

        // Create BarcodeDecoder object
        BarcodeDecoder barcodeDecoder = null;

        // Create settings for BarcodeDecoder
        Settings settings = new Settings();

        // Enable symbology settings
        settings.Symbology.UPCE1.enable(true);
        settings.Symbology.UPCE1.setReportCheckDigit(true);

        // Initialize executor
        Executor executor = Executors.newFixedThreadPool(1);

        // Asynchronously get BarcodeDecoder instance
        CompletableFuture<BarcodeDecoder> futureDecoderObj = BarcodeDecoder.getBarcodeDecoder(settings, executor);

        // Use the futureObject to implement thenAccept() callback of CompletableFuture.
        futureDecoderObj.thenAccept (decoderInstance -> {
            barcodeDecoder = decoderInstance;  // Use the decoder object returned here for barcode detection
        });

        // Detect objects once the camera image is available
        BBox[] detections;

        // Input params: bitmap image and an executor thread object in which the detection happens
        // Results are returned in thenAccept() callback
        CompletableFuture <BBox[]> resultFutureObject = localizer.detect(image , executor);
        resultFutureObject.thenAccept ( bboxes -> {
            detections = bboxes;  // Process the returned array of bounding boxes
        });

        // Once the bounding boxes are available, pass them to barcodeDecoder for decoding
        Bitmap image = ...; // //Load your Bitmap image here

        // Perform decode on barcode
        CompletableFuture<Result> resultFutureObject = barcodeDecoder.decode(bitmap, detections , executor);
        resultFutureObject.thenAccept (results -> {
            // Process the returned result (Result[]) of decoded barcodes
        });

        // Dispose resources
        // Once done using the decoder object, dispose it to release the resources and memory used for decoding.
        barcodeDecoder.dispose();

<!--
1. **Prepare Inputs:** Obtain a Bitmap image containing the barcodes. Use an array of BBox ([bounding boxes](..2.22.8/)) indicating the regions of interest in the image where barcodes are expected. Use an Executor to manage asynchronous decoding operations.
2. **Decode Barcodes:** Call the decode method on the BarcodeDecoder instance, passing the image, bounding boxes, and executor.
3. **Handle the Results:** Process the decoded barcodes when the CompletableFuture completes.
4. **Dispose the Decoder:** Once decoding is complete and no further use of the decoder instance is needed, dispose of the decoder to release resources.

Sample Code:

        // Decoding starts once bounding boxes are available
        // Input params: bitmap image, array of bounding boxes, an executor thread object (in which the decode happens and the results are returned)
        CompletableFuture<Result[]> resultFutureObject = barcodeDecoder.decode(bitmap, bboxes, executor);
        resultFutureObject.thenAccept (results -> {
            // Process the returned result of decoded barcodes.
        });

        // Once use of the decoder object is done, dispose the object to release the resources and memory used for decoding
        barcodeDecoder.dispose();

-->

---

## Methods

### getBarcodeDecoder (Settings settings, Executor executor)

        CompletableFuture<BarcodeDecoder> getBarcodeDecoder (Settings settings, Executor executor) throws InvalidInputException, RuntimeException

**Description:** Asynchronously initializes and returns a `BarcodeDecoder` object.

**Parameters:**

- **Settings settings -** Configurable options for the Barcode Decoder.
- **Executor executor -** The [executor](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Executor.html) used to create the `BarcodeDecoder` object.

**Exceptions:**

- **InvalidInputException -** Thrown if the settings object is null.
- **IllegalStateException -** Thrown if the AI Data Capture SDK is not initialized.

---

### decode (Bitmap bmp)

        CompletableFuture<Result> BarcodeDecoder. decode (Bitmap bmp, Executor executor) throws InvalidInputException, IllegalStateException

**Description:** Asynchronously decodes a barcode from the provided bitmap image. Runs the decoding process in the specified executor thread. When scanning multiple barcodes within an image, Zebra recommends passing multiple image frames to the decode API and processing the results frame by frame until all desired barcodes are decoded.

**Parameters:**

- **Bitmap bmp -** Image to decode.
- **Executor executor -** The executor for running the decoding process.

**Return Value -** A [CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html) returing a String representing the decoded barcode.

**Exceptions:**

- **InvalidInputException -** Thrown when the Bitmap is null.
- **IllegalStateException -** Thrown if the previous decoding task is still in progress.

---

### decode (Bitmap bmp, BBox[ ] detections, Executor executor)

        CompletableFuture<Result[]> BarcodeDecoder.decode (Bitmap bmp, BBox[] detections, Executor executor) throws InvalidInputException, IllegalStateException

**Description:** Decodes barcodes at specific locations ([bounding boxes](../types/#bbox/) returned by [Localizer](../localizer/)) within the input image. When scanning multiple barcodes within an image, Zebra recommends passing multiple image frames to the decode API and processing the results frame by frame until all desired barcodes are decoded.

**Parameters:**

- **Bitmap bmp -** Image to decode.
- **BBox[ ] detections -** Bounding boxes indicating the barcode locations.
- **Executor executor -** The executor for running the decoding process.

**Return Value:** A [CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html) returning an array of `Result` objects representing the decoded barcodes.

**Exceptions:**

- **InvalidInputException -** Thrown when Bitmap or detections array is null.
- **IllegalStateException -** Thrown if the previous decoding task is still in progress.

---

### process (ImageData imageData)

        CompletableFuture<List<BarcodeEntity>> BarcodeDecoder.process(ImageData imageData) throws AIVisionSDKException

Processes an <code>[ImageData](#imagedata)</code> object to localize and decode barcodes, returning the localized and decoded barcodes.

**Parameters:**
- **ImageData imageData -** Data representing the image to be processed.

**Return Value:** A `CompletableFuture<List<BarcodeEntity>>` with localized and decoded barcodes.

**Exceptions:**
- **AIVisionSDKException -** Thrown if `imageData` is null or if a previous operation is still in progress.

---

### dispose()

        void dispose()

**Description:** Frees or releases resources. This method must be called manually to release all internal resources when a new `BarcodeDecoder` object is created.

---

## ImageData

The `ImageData` class acts as a container for image data sourced from the [process()](#process) API. It provides a unified interface for detectors to access image information, ensuring orientation adjustments and standardizing the format required for AI processing. The following sections outline the methods available in this class.

### fromImageProxy (ImageProxy imageProxy)

        static ImageData ImageData.fromImageProxy(ImageProxy imageProxy) throws InvalidInputException

Creates an `ImageData` instance from an `ImageProxy`. This factory method converts a CameraX `ImageProxy` to an `ImageData` object, using the rotation information from the `ImageProxy` itself.

**Parameters:**
- **ImageProxy -** The `ImageProxy` to convert.

**Return Value:**
- **ImageData -** A new `ImageData` instance containing the image data.

**Exceptions:**
- **InvalidInputException -** Thrown when the input `ImageProxy` is null, indicating an invalid input parameter.


### fromMediaImage (Image image, int rotationDegrees)

        static ImageData ImageData.fromMediaImage(Image image, int rotationDegrees) throws InvalidInputException

Creates an `ImageData` instance from a media `Image`. This factory method converts an `android.media.Image` into an `ImageData` object, applying the specified rotation to ensure correct orientation.

**Parameters:**
- **image -** The media `Image` to convert.
- **rotationDegrees -** The rotation to apply in degrees.

**Return Value:**
- **ImageData -** A new `ImageData` instance containing the image data.

**Exceptions:**
- **InvalidInputException -** Thrown if the image is null or the orientation is not supported.

### fromBitmap(Bitmap bitmap, int rotationDegrees)

        static ImageData ImageData.fromBitmap(Bitmap bitmap, int rotationDegrees) throws InvalidInputException

Creates an `ImageData` instance from a given bitmap with specified rotation degrees. This factory method transforms a bitmap into an `ImageData` object, applying the specified rotation to ensure the image is correctly oriented for processing.

**Parameters:**
- **bitmap -** The bitmap from which to create `ImageData`.
- **rotationDegrees -** The rotation to apply to the image in degrees.

**Return Value:**
- **ImageData -** A new `ImageData` instance containing the bitmap data.

**Exceptions:**
- **InvalidInputException -** Thrown if the bitmap is null or the rotation is unsupported.

---

## BarcodeDecoder.Settings

The `BarcodeDecoder.Settings` class configures the barcode symbologies and related settings required for decoding barcodes from images. This class allows users to customize decoding parameters to optimize performance for specific use cases.

### Settings()

        BarcodeDecoder.Settings()

**Description:** Constructs a new Settings object with default values. Use this when no specific configuration is needed.

<!--
#### barcodeSettingMap

        Map<SymbologyType, Boolean> barcodeSettingMap = new HashMap<>();

**Description:** Defines a map where `Symbologytype` is the key and its status (enable/disable) is the value, allowing to specify which symbologies to use.
-->

---

## BarcodeDecoder.Result

The `BarcodeDecoder.Result` class encapsulates the result of a barcode decoding operation. It provides information on the decoded data value, the type of symbology used and the bounding box data indicating the barcode position and dimensions within an image.

### symbologytype

        int BarcodeDecoder.Result.symbologytype

**Description:** Integer that defines the type of symbology for the decoded barcode. The symbology type is necessary for identifying the barcode format, such as QR code, UPC, or EAN. Each symbology type typically corresponds to a specific integer value, which can be referenced against a symbology type reference guide; see [Barcode Symbologies](#barcodesymbologies).

---

### value

        String BarcodeDecoder.Result.value

**Description:** A string that contains the data decoded from the barcode, such as a product number or URL. This value serves as the primary output of the barcode decoding operation.

---

### bboxData

        BBox BarcodeDecoder.Result.bboxData

**Description:** Holds the bounding box data of the decoded barcode. The [bounding box](../types/#bbox/) class typically contains information about the position and dimensions of the barcode in the image, such as coordinates of the bounding box corners. This is useful for identifying the exact location of the barcode within a scanned image.

---

## Barcode Symbologies

The symbology classes described in the following sections offer methods for configuring decoder settings. These classes are part of the `com.zebra.ai.vision.BarcodeDecoder.Settings.Symbology` namespace.

**Sample Code:**

The sample code below demonstrates how to enable a symbology and configure its options. In this example, UPC-E1 is enabled with report check digit option activated. These steps can be modified to enable other symbologies and adjust their specific parameters:

        // Initialize BarcodeDecoder settings object
        BarcodeDecoder.Settings settings = new BarcodeDecoder.Settings();

        // Enabling Symbology UPCE1 and it’s parameters
        settings.Symbology.UPCE1.enable(true);
        settings.Symbology.UPCE1.setReportCheckDigit(true);

The table below lists barcode symbologies with its default status and [symbologytype](#symbologytype) value. 

<table class="facelift" style="width:20" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th style="text-align:center">Barcode Symbology</th>
    <th style="text-align:center">Default Status</th>
    <th style="text-align:center"><code>symbologytype</code><br />Value</th>
  </tr>
  <tr>
    <td>AUSTRALIAN_POSTAL</td>
    <td>Disabled</td>
    <td>26</td>
  </tr>
  <tr>
    <td>AZTEC</td>
    <td>Enabled</td>
    <td>4</td>
  </tr>
  <tr>
    <td>CANADIAN_POSTAL</td>
    <td>Disabled</td>
    <td>27</td>
  </tr>
  <tr>
    <td>CHINESE_2OF5</td>
    <td>Disabled</td>
    <td>35</td>
  </tr>
  <tr>
    <td><a href="#codabar">CODABAR</a></td>
    <td>Enabled</td>
    <td>5</td>
  </tr>
  <tr>
    <td><a href="#code11">CODE11</a></td>
    <td>Disabled</td>
    <td>37</td>
  </tr>
  <tr>
    <td><a href="#code39">CODE39</a></td>
    <td>Enabled</td>
    <td>7</td>
  </tr>
  <tr>
    <td><a href="#code93">CODE93</a></td>
    <td>Disabled</td>
    <td>32</td>
  </tr>
  <tr>
    <td><a href="#code128">CODE128</a></td>
    <td>Enabled</td>
    <td>6</td>
  </tr>
  <tr>
    <td><a href="#composite_ab">COMPOSITE_AB</a></td>
    <td>Disabled</td>
    <td>44</td>
  </tr>
  <tr>
    <td>COMPOSITE_C</td>
    <td>Disabled</td>
    <td>45</td>
  </tr>
  <tr>
    <td><a href="#d2of5">D2OF5</a></td>
    <td>Disabled</td>
    <td>34</td>
  </tr>
  <tr>
    <td><a href="#datamatrix">DATAMATRIX</a></td>
    <td>Enabled</td>
    <td>10</td>
  </tr>
  <tr>
    <td><a href="#dotcode">DOTCODE</a></td>
    <td>Disabled</td>
    <td>16</td>
  </tr>
  <tr>
    <td><a href="#dutch_postal">DUTCH_POSTAL</a></td>
    <td>Disabled</td>
    <td>28</td>
  </tr>
  <tr>
    <td><a href="#ean8">EAN_8</a></td>
    <td>Enabled</td>
    <td>0</td>
  </tr>
  <tr>
    <td>EAN_13</td>
    <td>Enabled</td>
    <td>1</td>
  </tr>
  <tr>
    <td>FINNISH_POSTAL_4S</td>
    <td>Disabled</td>
    <td>43</td>
  </tr>
  <tr>
    <td>GRID_MATRIX</td>
    <td>Disabled</td>
    <td>17</td>
  </tr>
  <tr>
    <td><a href="#gs1_databar">GS1_DATABAR</a></td>
    <td>Enabled</td>
    <td>9</td>
  </tr>
  <tr>
    <td>GS1_DATABAR_EXPANDED</td>
    <td>Enabled</td>
    <td>11</td>
  </tr>
  <tr>
    <td><a href="#gs1_databar_lim">GS1_DATABAR_LIM</a></td>
    <td>Disabled</td>
    <td>42</td>
  </tr>
  <tr>
    <td>GS1_DATAMATRIX</td>
    <td>Disabled</td>
    <td>18</td>
  </tr>
  <tr>
    <td>GS1_QRCODE</td>
    <td>Disabled</td>
    <td>19</td>
  </tr>
  <tr>
    <td><a href="#hanxin">HANXIN</a></td>
    <td>Disabled</td>
    <td>39</td>
  </tr>
  <tr>
    <td><a href="#i2of5">I2OF5</a></td>
    <td>Disabled</td>
    <td>8</td>
  </tr>
  <tr>
    <td>JAPANESE_POSTAL</td>
    <td>Disabled</td>
    <td>25</td>
  </tr>
  <tr>
    <td>KOREAN_3OF5</td>
    <td>Disabled</td>
    <td>36</td>
  </tr>
  <tr>
    <td>MAILMARK</td>
    <td>Enabled</td>
    <td>12</td>
  </tr>
  <tr>
    <td><a href="#matrix_2of5">MATRIX_2OF5</a></td>
    <td>Disabled</td>
    <td>40</td>
  </tr>
  <tr>
    <td>MAXICODE</td>
    <td>Enabled</td>
    <td>13</td>
  </tr>
  <tr>
  <tr>
    <td>MICROPDF</td>
    <td>Disabled</td>
    <td>21</td>
  </tr>
  <tr>
    <td>MICROQR</td>
    <td>Disabled</td>
    <td>20</td>
  </tr>
  <tr>
    <td><a href="#msi">MSI</a></td>
    <td>Disabled</td>
    <td>31</td>
  </tr>
  <tr>
    <td>PDF417</td>
    <td>Enabled</td>
    <td>14</td>
  </tr>
  <tr>
    <td>QRCODE</td>
    <td>Enabled</td>
    <td>15</td>
  </tr>
  <tr>
    <td>TLC39</td>
    <td>Disabled</td>
    <td>38</td>
  </tr>
  <tr>
    <td><a href="#trioptic39">TRIOPTIC39</a></td>
    <td>Disabled</td>
    <td>33</td>
  </tr>
  <tr>
    <td><a href="#uk_postal">UK_POSTAL</a></td>
    <td>Disabled</td>
    <td>24</td>
  </tr>
  <tr>
    <td><a href="#upca">UPC_A</a></td>
    <td>Enabled</td>
    <td>2</td>
  </tr>
  <tr>
    <td><a href="#upce">UPC_E</a></td>
    <td>Enabled</td>
    <td>3</td>
  </tr>
  <tr>
    <td><a href="#upce1">UPCE1</a></td>
    <td>Disabled</td>
    <td>41</td>
  </tr>
  <!--
  <tr>
    <td>US_CURRENCY</td>
    <td>Disabled</td>
    <td>44</td>
  </tr> -->
  <tr>
    <td><a href="#usplanet">USPLANET</a></td>
    <td>Disabled</td>
    <td>23</td>
  </tr>
  <tr>
    <td><a href="#uspostnet">USPOSTNET</a></td>
    <td>Disabled</td>
    <td>22</td>
  </tr>
  <tr>
    <td>US4STATE</td>
    <td>Disabled</td>
    <td>29</td>
  </tr>
  <tr>
    <td>US4STATE_FICS</td>
    <td>Disabled</td>
    <td>30</td>
  </tr>
</table>

<br />

---

### CODABAR

**Description:** Configures parameters for decoding Codabar barcodes.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.CODABAR.enable(boolean initialStatus) 

**Description:** Enables or disables the Codabar symbology decoding based on the input boolean parameter.  

**Parameters:**

- **initialStatus -** Boolean indicating whether to enable (true) or disable (false) the symbology. Default is true. 

#### isClsiEditing()

        boolean BarcodeDecoder.Settings.Symbology.CODABAR.isClsiEditing()

**Description:** Checks if CLSI editing is enabled, which modifies the format of a decoded Codabar symbol according to CLSI requirements.

**Return Value:** Boolean value:

- **true -** CLSI editing is enabled
- **false -** CLSI editing is disabled

#### getLength1()

        int BarcodeDecoder.Settings.Symbology.CODABAR.getLength1() 

**Description:** Retrieves the lower limit for the length of the Codabar symbol to be decoded. 

**Return Value:** Integer representing the lower limit of the Codabar symbol length. 
 
#### getLength2()

        int BarcodeDecoder.Settings.Symbology.CODABAR.getLength2()

**Description:** Retrieves the upper limit for the length of the Codabar symbol to be decoded. 

**Return Value:** Integer representing the upper limit of the Codabar symbol length.

#### isNotisEditing()

        boolean BarcodeDecoder.Settings.Symbology.CODABAR.isNotisEditing() 

**Description:** Checks if NOTIS editing is enabled, which strips the start and stop characters from a decoded Codabar symbol according to NOTIS requirements. 

**Return Value:** Boolean value:

- **true -** NOTIS editing is enabled
- **false -** NOTIS editing is disabled

#### isRedundancy()

        boolean BarcodeDecoder.Settings.Symbology.CODABAR.isRedundancy() 

**Description:** Checks if redundancy is enabled, which requires the scanner to read the barcode twice before accepting the data. 

**Return Value:** Boolean value:

- **true -** Redundancy is enabled
- **false -** Redundancy is disabled

#### setClsiEditing(boolean setClsiEditing)

        void BarcodeDecoder.Settings.Symbology.CODABAR.setClsiEditing (boolean setClsiEditing)

**Description:** Enables or disables CLSI editing, which modifies the format of a decoded Codabar symbol according to CLSI requirements. 

**Parameters:**

- **setClsiEditing -** Boolean indicating whether to enable (true) or disable (false) CLSI editing.

#### setLength1(int length1)

        void BarcodeDecoder.Settings.Symbology.CODABAR.setLength1(int Length1) 

**Description:** Sets the lower limit for the length of the Codabar symbol to be decoded. 

**Parameters:**

- **length1:** An integer specifying the lower limit for the Codabar symbol length. Default: 6. Valid range: 0 to 55.

#### setLength2(int length2)

        void BarcodeDecoder.Settings.Symbology.CODABAR.setLength2(int Length2) 

**Description:** Sets the upper limit for the length of the Codabar symbol to be decoded. 

**Parameters:**

- **length2:** An integer specifying the upper limit for the Codabar symbol length. Default: 55. Valid range: 0 to 55.

#### setNotisEditing(boolean notisEditing)

        void BarcodeDecoder.Settings.Symbology.CODABAR.setNotisEditing(boolean notisEditing) 

**Description:** Enables or disables NOTIS editing, which strips the start and stop characters from a decoded Codabar symbol according to NOTIS requirements. 

**Parameters:**

- **notisEditing:** A boolean indicating whether to enable (true) or disable (false) NOTIS editing. Default: false. 

#### setRedundancy(boolean redundancy)

        void BarcodeDecoder.Settings.Symbology.CODABAR.setRedundancy(boolean redundancy) 

**Description:** Enables or disables redundancy, which requires the scanner to read the barcode twice before accepting the data. 

**Parameters:**

- **redundancy:** A boolean indicating whether to enable (true) or disable (false) redundancy, where the scanner reads the barcode twice before accepting data. Default: true. 

---

### CODE11

**Description:** Configures parameters for decoding Code 11 barcodes. Code11 is a numeric barcode symbology commonly used in telecommunications and industrial applications.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.CODE11.enable(boolean initialStatus)

**Description:** Enables or disables Code 11 symbology decoding based on the input boolean parameter.

**Parameters:**
- **initialStatus -** A boolean indicating whether to enable (true) or disable (false) the symbology. Default: true. 

#### getLength1()

        int BarcodeDecoder.Settings.Symbology.CODE11.getLength1()

**Description:** Retrieves the minimum length of the Code11 barcode to be decoded.	

**Return Value:** Integer that defines the minimum length of the Code11 barcode.

#### setLength1(int length1)

        void BarcodeDecoder.Settings.Symbology.CODE11.setLength1(int length1) throws InvalidInputException

**Description:** Sets the minimum length of the Code11 barcode to be decoded.	

**Parameters:**
- **length1:** An integer specifying the minimum length for the Code11 barcode. Default: 4. Valid range: 0 to 55.

**Exception:**
- **InvalidInputException –** Thrown if length1 is beyond the valid range.
 
#### getLength2()

        int BarcodeDecoder.Settings.Symbology.CODE11.getLength2()

**Description:** Retrieves the maximum length of the Code11 barcode to be decoded.	

**Return Value:** Integer representing the maximum length of the Code11 barcode.

#### setLength2 (int length2)
        
        void BarcodeDecoder.Settings.Symbology.CODE11.setLength2 (int length2) throws InvalidInputException

**Description:** Sets the maximum length of the Code11 barcode to be decoded.	

**Parameters:**
- **length2:** An integer specifying the maximum length for the Code11 barcode. Default: 55. Valid range: 0 to 55.

**Exception:**
- **InvalidInputException –** Thrown if length2 is beyond the valid range.
 
#### isRedundancy()

        boolean BarcodeDecoder.Settings.Symbology.CODE11.isRedundancy()

**Description:** Checks if redundancy is enabled, which requires the scanner to read the barcode twice before accepting the data.	

**Return Value:** Boolean:
- **true -** Redundancy is enabled
- **false -** Redundancy is disabled
 
#### setRedundancy(boolean redundancy)

        void BarcodeDecoder.Settings.Symbology.CODE11.setRedundancy (boolean redundancy)	

**Description:** Enables or disables redundancy, requiring the scanner to read the barcode twice before accepting the data.	

**Parameters:**
- **redundancy:** A boolean indicating whether to enable (true) or disable (false) redundancy. Default: true.
 
#### getVerifyCheckDigit()

        int BarcodeDecoder.Settings.Symbology.CODE11.getVerifyCheckDigit()

**Description:** Retrieves the current check digit verification setting for Code11 symbols.	

**Return Value:** Integer that defines the current check digit verification setting (0 to 2).

#### setVerifyCheckDigit(int verifyCheckDigit)

        void BarcodeDecoder.Settings.Symbology.CODE11.setVerifyCheckDigit(int verifyCheckDigit)	

**Description:** Configures the check digit verification mechanism for Code11 symbols.

**Parameters:**
- **verifyCheckDigit:** An integer specifying the check digit verification mode:
    - **0 -** No Check Digit
    - **1 -** 1 Check Digit (Default)
    - **2 -** 2 Check Digits
 
#### isReportCheckDigit()

        boolean BarcodeDecoder.Settings.Symbology.CODE11.isReportCheckDigit()

**Description:** Checks if the “Report Check Digit” parameter is enabled, which determines whether the check digit is included in the transmitted data.	

**Return Value:** Boolean:
- **true -** Report Check Digit is enabled
- **false -** Report Check Digit is disabled

#### setReportCheckDigit(boolean reportCheckDigit)

        void BarcodeDecoder.Settings.Symbology.CODE11.setReportCheckDigit(boolean reportCheckDigit)

**Description:** Enables or disables the “Report Check Digit” parameter, which determines whether the check digit is included in the transmitted data.	

**Parameters:**
- **reportCheckDigit:** A boolean indicating whether to enable (true) or disable (false) the check digit reporting. Default: false	

---

### CODE39

**Description:** Configures parameters for decoding Code 39 barcodes. 

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.CODE39.enable(boolean initialStatus)

**Description:** Enables or disables Code39 symbology decoding based on the input boolean parameter.	

**Parameters:**
- **initialStatus:** A boolean indicating whether to enable (true) or disable (false) the symbology. Default: true.	

#### isConvertToCode32()

        boolean BarcodeDecoder.Settings.Symbology.CODE39.isConvertToCode32()

**Description:** Checks if the option for conversion from Code 39 to Code 32 barcodes is enabled.

**Return Value:** Boolean value:
- **true -**  Conversion from Code 39 to Code 32 is enabled
- **false -** Conversion from Code 39 to Code 32 is disabled 

#### setConvertToCode32(boolean convertToCode32)

        void BarcodeDecoder.Settings.Symbology.CODE39.setConvertToCode32(boolean convertToCode32)

**Description:** Enables or disables conversion from Code 39 to Code 32, which is used by the Italian pharmaceutical industry. 

**Parameters:**
- **convertToCode32 -** A boolean indicating whether to enable (true) or disable (false) the conversion. Default: false. 

#### isFullAscii()

        boolean BarcodeDecoder.Settings.Symbology.CODE39.isFullAscii()

**Description:** Checks if full ASCII encoding is enabled for Code39 barcodes.

**Return Value:** Boolean value:
- **true -** Full ASCII is enabled
- **false -** Full ASCII is disabled

#### setFullAscii(boolean fullAscii)

        void BarcodeDecoder.Settings.Symbology.CODE39.setFullAscii(boolean fullAscii)

**Description:** Enables or disables the Code 39 Full ASCII feature, a variant of Code 39 that pairs characters to encode the full ASCII character set.

**Parameters:**
- **fullAscii -** A boolean indicating whether to enable (true) or disable (false) full ASCII encoding. Default: false. 

#### getLength1()

        int BarcodeDecoder.Settings.Symbology.CODE39.getLength1() 

**Description:** Retrieves the minimum length for Code 39 barcodes.

**Return Value:** Integer representing the minimum length configured for Code 39 barcodes.

#### setLength1(int length1)

        void BarcodeDecoder.Settings.Symbology.CODE39.setLength1(int length1) throws InvalidInputException 

**Description:** Sets the minimum length for Code 39 barcodes. 

**Parameters:**
- **length1 -** An integer specifying the minimum length for the Code 39 symbol. Default: 0. Valid range: 0 to 55.

**Exceptions:**
- **InvalidInputException -** Thrown if length1 is beyond the valid range. 


#### getLength2()

        int BarcodeDecoder.Settings.Symbology.CODE39.getLength2()

**Description:** Retrieves the maximum length for Code 39 barcodes. 

**Return Value:** Integer that represents the maximum length configured for Code 39 barcodes. 

#### setLength2(int length2)

        void BarcodeDecoder.Settings.Symbology.CODE39.setLength2(int length2) throws InvalidInputException

**Description:** Sets the maximum length for Code39 barcodes.

**Parameters:**
- **length2 -** An integer specifying the maximum length for the Code 39 symbol. Default: 55. Valid range: 0 to 55. 

**Exceptions:**
- **InvalidInputException -** Thrown if length2 is beyond the valid range. 

#### isReducedQuietZone()

        boolean BarcodeDecoder.Settings.Symbology.CODE39.isReducedQuietZone() 

**Description:** Checks if marginless decoding is enabled for Code 39 barcodes. 

**Return Value:** Boolean value:
- **true -** Marginless decoding is enabled
- **false -** Marginless decoding is disabled

#### setReducedQuietZone(boolean reducedQuietZone)

        void BarcodeDecoder.Settings.Symbology.CODE39.setReducedQuietZone(boolean reducedQuietZone) 

**Description:** Enables or disables marginless decoding for Code 39 barcodes.

**Parameters:**
- **reducedQuietZone -** A boolean indicating whether to enable (true) or disable (false) marginless decoding. Default: false. 

#### isRedundancy()

        boolean BarcodeDecoder.Settings.Symbology.CODE39.isRedundancy()

**Description:** Checks if redundancy is enabled, requiring the barcode to be read twice before acceptance. 

**Return Value:** Boolean value:
- **true -** Redundancy is enabled
- **false -** Redundancy is disabled

#### setRedundancy(boolean redundancy) 

        void BarcodeDecoder.Settings.Symbology.CODE39.setRedundancy(boolean redundancy)

**Description:** Enables or disables redundancy, where the scanner reads the barcode twice before accepting data. 

**Parameters:**
- **redundancy -** A boolean indicating whether to enable (true) or disable (false) redundancy. Default: false. 

#### isReportCheckDigit()

        boolean BarcodeDecoder.Settings.Symbology.CODE39.isReportCheckDigit() 

**Description:** Checks if the check digit is reported for Code 39 barcodes. 

**Return Value:** Boolean value:
- **true -** The check digit is reported
- **false -** The check digit is not reported

#### setReportCheckDigit(boolean reportCheckDigit)

        void BarcodeDecoder.Settings.Symbology.CODE39.setReportCheckDigit(boolean reportCheckDigit) 

**Description:** Configures whether to transmit data with or without the check digit. 

**Parameters:**
- **reportCheckDigit -** A boolean indicating whether to report (true) or not report (false) the check digit. Default: false. 

#### isReportCode32Prefix()

        boolean BarcodeDecoder.Settings.Symbology.CODE39.isReportCode32Prefix() 

**Description:** Checks if the prefix character “A” is added to all Code 32 barcodes. 

**Return Value:** Boolean value:
- **true -** The prefix is added
- **false -** The prefix is not added

#### setReportCode32Prefix(boolean reportCode32Prefix)

        void BarcodeDecoder.Settings.Symbology.CODE39.setReportCode32Prefix(boolean reportCode32Prefix)

**Description:** Enables the addition of the prefix character “A” to all Code 32 barcodes. 

**Parameters:**
- **reportCode32Prefix -** A boolean indicating whether to enable (true) or disable (false) the prefix addition. Default: false. 

#### getSecurityLevel()

        int BarcodeDecoder.Settings.Symbology.CODE39.getSecurityLevel()

**Description:** Retrieves the current security level used for decoding Code39 barcodes. 

**Return Value:** Returns the integer representing the security level.

#### setSecurityLevel(int securityLevel)

        void BarcodeDecoder.Settings.Symbology.CODE39.setSecurityLevel(SecurityLevel securityLevel)

**Description:** Retrieves the current security level used for decoding Code39 barcodes. 

**Parameters:**
- **SecurityLevel:** An enumerator that specifies the security level, the values are: 
    - **LEVEL_0 -** Configures the decoder to operate in its most aggressive state, providing sufficient security in decoding most in-specification barcodes.
    - **LEVEL_1 -** Reduces the risk of mis-decodes (default).
    - **LEVEL_2 -** Suitable if Security level 1 does not adequately prevent mis-decodes.
    - **LEVEL_3 -** Suitable if Security level 2 does not adequately prevent mis-decodes. This level is an extreme measure against decoding severely out-of-specification barcodes and significantly compromised the decoder's effectiveness. If such aa high security level is required, improving the barcode quality is recommended.

#### isVerifyCheckDigit()

        boolean BarcodeDecoder.Settings.Symbology.CODE39.isVerifyCheckDigit()

**Description:** Checks the integrity of all Code 39 symbols to verify that the data complies with a specified check digit algorithm. 

**Return Value:** Integer representing the current security level:
- **0 -** Configures the decoder to operate in its most aggressive state, providing sufficient security in decoding most in-specification barcodes.
- **1 -** Reduces the risk of mis-decodes (default).
- **2 -** Suitable if Security level 1 does not adequately prevent mis-decodes.
- **3 -** Suitable if Security level 2 does not adequately prevent mis-decodes. This level is an extreme measure against decoding severely out-of-specification barcodes and significantly compromised the decoder's effectiveness. If such aa high security level is required, improving the barcode quality is recommended.

#### setVerifyCheckDigit(boolean verifyCheckDigit)

        void BarcodeDecoder.Settings.Symbology.CODE39.setVerifyCheckDigit(boolean verifyCheckDigit) 

**Description:** Enables or disables the Code 39 check digit verification.

**Parameters:**
- **verifyCheckDigit -** A boolean indicating whether to enable (true) or disable (false) check digit verification. Default: false. 

---

### CODE93

**Description:** Configures parameters for decoding Code 93 barcodes. Code 93 is a compact, high-density barcode used widely in logistics and inventory tracking.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.CODE93.enable(boolean initialStatus)	

**Description:** Enables or disables Code93 symbology decoding based on the input boolean parameter.	

**Parameters:**
- **initialStatus:** A boolean indicating whether to enable (true) or disable (false) the symbology. Default: false.	
 
#### getLength1()

        int BarcodeDecoder.Settings.Symbology.CODE93.getLength1()

**Description:** Retrieves the minimum length of the Code93 barcode to be decoded.	

**Return Value:** Integer representing the minimum length of the Code 93 barcode.

#### setLength1(int length1)

        void BarcodeDecoder.Settings.Symbology.CODE93.setLength1(int length1) throws InvalidInputException

**Description:** Sets the minimum length of the Code 93 barcode to be decoded.	

**Parameters:**
- **length1:** An integer specifying the minimum length for the Code93 barcode. Default: 0. Valid range: 0 to 55.

**Exception:**
- **InvalidInputException –** Thrown if length1 is beyond the valid range.

#### getLength2()

        int BarcodeDecoder.Settings.Symbology.CODE93.getLength2()

**Description:** Retrieves the maximum length for the Code 93 barcode to be decoded.	

**Return Value:** Integer representing the maximum length of the Code93 barcode.

#### setLength2(int length2)

        void BarcodeDecoder.Settings.Symbology.CODE93.setLength2(int length2) throws InvalidInputException

**Description:** Sets the maximum length for the Code93 barcode to be decoded.	

**Parameters:**
- **length2:** An integer specifying the maximum length for the Code 93 barcode. Default: 55. Valid range: 0 to 55.

**Exception:**
- **InvalidInputException –** Thrown if length2 is beyond the valid range.

#### isRedundancy()

        boolean BarcodeDecoder.Settings.Symbology.CODE93.isRedundancy()

**Description:** Checks if redundancy is enabled, which requires the scanner to read the barcode twice before accepting the data.	

**Return Value:** Boolean:
- **true -** Redundancy is enabled
- **false -** Redundancy is disabled

#### setRedundancy(boolean redundancy)

        void BarcodeDecoder.Settings.Symbology.CODE93.setRedundancy(boolean redundancy)

**Description:** Enables or disables redundancy, requiring the scanner to read the barcode twice before accepting the data.

**Parameters:**
- **redundancy:** A boolean indicating whether to enable (true) or disable (false) redundancy. Default: false.


---

### CODE128

**Description:** Configures parameters for decoding Code 128 barcodes.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.CODE128.enable(boolean initialStatus) 

**Description:** Enables or disables Code 128 symbology decoding based on the input boolean parameter.

**Parameters:**
- **initialStatus -** A boolean indicating whether to enable (true) or disable (false) the symbology. Default: true. 

#### isIgnoreFNC4()

        boolean BarcodeDecoder.Settings.Symbology.CODE128.isIgnoreFNC4() 

**Description:** Checks if the “Ignore FNC4” parameter is enabled, allowing the decoder to ignore the FNC4 character in Code 128 barcodes. 

**Return Value:** Boolean value:
- **true -** Ignore FNC4 is enabled
- **false -** Ignore FNC4 is disabled

#### setIgnoreFNC4(boolean ignoreFNC4)

        void BarcodeDecoder.Settings.Symbology.CODE128.setIgnoreFNC4(boolean ignoreFNC4)

**Description:** Enables or disables the “Ignore FNC4” parameter for Code 128 decoding. 

**Parameters:**
- **ignoreFNC4:** A boolean indicating whether to enable (true) or disable (false) the FNC4 parameter. Default: false. 

#### isCheckIsbtTable()

        boolean BarcodeDecoder.Settings.Symbology.CODE128.isCheckIsbtTable() 

**Description:** Checks if the “Check ISBT Table” parameter is enabled, which applies ISBT-specific concatenation rules. 

**Return Value:** Boolean value:
- **true -** Check ISBT Table is enabled
- **false -** Check ISBT Table is disabled

#### setCheckIsbtTable(boolean checkIsbtTable)

        void BarcodeDecoder.Settings.Symbology.CODE128.setCheckIsbtTable(boolean checkIsbtTable)

**Description:** Enables or disables the “Check ISBT Table” parameter, which concatenates only ISBT pairs listed in the ISBT table.

**Parameters:**

- **checkIsbtTable -** Boolean indicating to enable (true) or disable (false) ISBT table checking. Default: false.

#### isEnableEan128()

        boolean BarcodeDecoder.Settings.Symbology.CODE128.isEnableEan128()

**Description:** Checks if EAN128 decoding is enabled. 

**Return Value:** Boolean value:
- **true -** EAN128 decoding is enabled
- **false -** EAN128 decoding is disabled

#### setEnableEan128(boolean enableEan128)

        void BarcodeDecoder.Settings.Symbology.CODE128.setEnableEan128(boolean enableEan128)

**Description:** Enables or disables decoding of EAN128 barcodes.

**Parameters:**

- **enableEan128 -** Boolean indicating to enable (true) or disable (false) EAN 128 decoding. Default: true.

#### isEnableIsbt128()

        boolean BarcodeDecoder.Settings.Symbology.CODE128.isEnableIsbt128()

**Description:** Checks if ISBT128 decoding is enabled. 

**Return Value:** Boolean value:
- **true -** ISBT128 decoding is enabled
- **false -** ISBT128 decoding is disabled

#### setEnableIsbt128(boolean enableIsbt128)

        void BarcodeDecoder.Settings.Symbology.CODE128.setEnableIsbt128(boolean enableIsbt128) 

**Description:** Enables or disables decoding of ISBT128 barcodes.

**Parameters:**

- **enableISBT128 -** Boolean indicating to enable (true) or disable (false) ISBT128 decoding. Default: true.

#### isEnablePlain()

        boolean BarcodeDecoder.Settings.Symbology.CODE128.isEnablePlain() 

**Description:** Checks if plain Code128 decoding is enabled. 

**Parameters:**

- **enableIsbt128:** A boolean indicating whether to enable (true) or disable (false) ISBT128 decoding. Default: true. 

**Return Value:** Boolean value:
- **true -** ISBT128 decoding is enabled
- **false -** ISBT128 decoding is disabled

#### setEnablePlain(boolean enablePlain)

        void BarcodeDecoder.Settings.Symbology.CODE128.setEnablePlain (boolean enablePlain)

**Description:** Enables or disables decoding of plain Code 128 barcodes (non-EAN or ISBT subtypes).

**Parameters:**

- **enablePlain -** Boolean indicating to enable (true) or disable (false) plain Code 128 decoding. 

#### getIsbt128ConcatMode()

        int BarcodeDecoder.Settings.Symbology.CODE128.getIsbt128ConcatMode() 

**Description:** Retrieves the current ISBT128 concatenation mode.

**Return Value:** Returns an integer representing the current ISBT128 concatenation mode:
  - **0 -** Never
  - **1 -** Always
  - **2 -** Auto

#### setIsbt128ConcatMode(Isbt128ContactMode isbt128ConcatMode)

        void BarcodeDecoder.Settings.Symbology.CODE128.setIsbt128ConcatMode(int isbt128ConcatMode)

**Description:** Sets the ISBT128 concatenation mode to control how pairs of ISBT barcodes are concatenated.

**Parameters:**

- **isbt128ConcatMode -** Integer representing the ISBT128 concatenation mode:
  - **0 -** (Default) Never
  - **1 -** Always
  - **2 -** Auto

#### getLength1()

        int BarcodeDecoder.Settings.Symbology.CODE128.getLength1()

**Description:** Retrieves the lower limit for the length of the Code128 barcode to be decoded.

**Return Value:** Integer representing the lower limit of the Code 128 barcode length.

#### setLength1(int length1)

        void BarcodeDecoder.Settings.Symbology.CODE128.setLength1(int length1)

**Description:** Sets the lower limit for the length of the Code 128 barcode to be decoded.

**Parameters:**

- **length1 -** Integer specifying the the lower limit for the Code 128 barcode length. Default: 0. Valid range: 0 to 55.

#### getLength2()

        int BarcodeDecoder.Settings.Symbology.CODE128.getLength2()

**Description:** Retrieves the upper limit for the length of the Code 128 barcode to be decoded.

**Return Value:** Integer that defines the upper limit of the Code 128 barcode length.


#### setLength2(int length2)

        void BarcodeDecoder.Settings.Symbology.CODE128.setLength2(int length2)

**Description:** Sets the upper limit for the length of the Code 128 barcode to be decoded.

**Parameters:**

- **length2 -** An integer specifying specifying the upper limit for the Code 128 barcode length. Default: 55. Valid range: 0 to 55.

#### isReducedQuietZone()

        boolean BarcodeDecoder.Settings.Symbology.CODE128.isReducedQuietZone()

**Description:** Checks if the “Reduced Quiet Zone” parameter is enabled.

**Return Value:** Boolean:
- **true -** “Reduced Quiet Zone” is enabled
- **false -** “Reduced Quiet Zone” is disabled

#### setReducedQuietZone(boolean reducedQuietZone)

        void BarcodeDecoder.Settings.Symbology.CODE128.setReducedQuietZone(boolean reducedQuietZone)

**Description:** Enables or disables the “Reduced Quiet Zone” around barcodes.

**Parameters:**

- **reducedQuietZone -** Boolean indicating to enable (true) or disable (false) “Reduced Quiet Zone” parameter. Default: false.

#### isRedundancy()

        boolean BarcodeDecoder.Settings.Symbology.CODE128.isRedundancy()

**Description:** Checks if redundancy is enabled, which requires the decoder to read the barcode twice before accepting the data.

**Return Value:** Boolean:
- **true -** Redundancy is enabled
- **false -** Redundancy is disabled

#### setRedundancy(boolean redundancy)

        void BarcodeDecoder.Settings.Symbology.CODE128.setRedundancy(boolean redundancy)

**Description:** Enables or disables redundancy, requiring the decoder to read the barcode twice before accepting the data.

**Parameters:**

- **redundancy -** A boolean indicating whether to enable (true) or disable (false) redundancy. Default: false.

#### getSecurityLevel()

        int BarcodeDecoder.Settings.Symbology.CODE128.getSecurityLevel()

**Description:** Retrieves the current security level used for decoding Code 128 barcodes.

**Return Value:** Integer representing the current security level:
  - **0 -** Aggressive
  - **1 -** Intermediate
  - **2 -** High
  - **3 -** Extreme Level 3

#### setSecurityLevel(SecurityLevel securityLevel)

        void BarcodeDecoder.Settings.Symbology.CODE128.setSecurityLevel(int securityLevel)

**Description:** Sets the security level for decoding Code 128 barcodes.

**Parameters:**

- **securityLevel -** An integer representing the security level:
  - **0 -** Aggressive
  - **1 -** (Default) Intermediate
  - **2 -** High
  - **3 -** Extreme


---

### COMPOSITE_AB

**Description:** Configures parameters related to Composite AB barcode decoding. 

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.COMPOSITE_AB.enable(boolean initialStatus)

**Description:** Enables or disables Composite AB symbology decoding based on the input boolean parameter.

**Parameters:**
- **initialStatus -** A boolean to enable (true) or disable (false) the symbology. Default: false.

#### setUccLinkMode(UccLinkMode uccLinkMode)

        void BarcodeDecoder.Settings.Symbology.COMPOSITE_AB.setUccLinkMode(UccLinkMode uccLinkMode)

**Description:** Configures the decoder to one of three link modes for linking UPC symbols with a 2D symbol during transmission as if they were one symbol.

**Parameters:** The Uniform Code Council (UCC) link modes supported are: 
- **LINK_FLAG_IGNORED (0) -** Transmits UPC barcodes regardless of the presence of a 2D symbol.
- **ALWAYS_LINKED (1) -** Transmits both UPC barcodes and the 2D portion. If the 2D symbol is absent, the UPC barcode is not transmitted.
- **AUTO_DISCRIMINATE (2) -** The barcode decoder checks for a 2D symbol and transmits the UPC barcode along with the 2D symbol if present.

#### getUccLinkMode()

        int BarcodeDecoder.Settings.Symbology.COMPOSITE_AB.getUccLinkMode()

**Description:** Retrieves the UCC link mode for Composite AB barcodes.

**Parameters:** 
- Integer representing one of the UCC link modes:
    - **0 (LINK_FLAG_IGNORED) -** Transmits UPC barcodes regardless of the presence of a 2D symbol.
    - **1 (ALWAYS_LINKED) -** Transmits both UPC barcodes and the 2D portion. If the 2D symbol is absent, the UPC barcode is not transmitted.
    - **2 (AUTO_DISCRIMINATE) -** The barcode decoder checks for a 2D symbol and transmits the UPC barcode along with the 2D symbol if present.

---

### D2OF5

**Description:** Configures parameters related to Discrete 2 of 5 (D2OF5) barcode decoding. Discrete 2 of 5 is used in logistics, warehouse management, and industrial applications.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.D2OF5.enable(boolean initialStatus)

**Description:** Enables or disables D2OF5 symbology decoding based on the input boolean parameter.

**Parameters:**

- **initialStatus -** A boolean to enable (true) or disable (false) the symbology. Default: false.

#### getLength1()

        int BarcodeDecoder.Settings.Symbology.D2OF5.getLength1()	

**Description:** Retrieves the minimum length of the D2OF5 symbol to be decoded.	

**Return Value:** Integer that defines the minimum length of the D2OF5 symbol.

#### setLength1(int length1)

        void BarcodeDecoder.Settings.Symbology.D2OF5.setLength1(int length1)

**Description:** Sets the minimum length of the D2OF5 symbol to be decoded.	

**Parameters:**
- **length1:** An integer specifying the minimum length for the D2OF5 symbol. Default: 0. Valid range: 0 to 55.

#### getLength2()	

        int BarcodeDecoder.Settings.Symbology.D2OF5.getLength2()

**Description:** Retrieves the maximum length of the D2OF5 symbol to be decoded.

**Return Value:** Integer that defines the maximum lenght of the D2OF5 symbol.

#### setLength2(int length2)

        void BarcodeDecoder.Settings.Symbology.D2OF5.setLength2(int length2)

**Description:** Sets the upper limit for the length of the D2OF5 symbol to be decoded.	

**Parameters:**
- **length2:** An integer specifying the upper limit for the D2OF5 symbol length. Default: 14. Valid range: 0 to 55.
 
#### isRedundancy()

        boolean BarcodeDecoder.Settings.Symbology.D2OF5.isRedundancy()	

**Description:** Checks if redundancy is enabled, which requires the scanner to read the barcode twice before accepting the data.	

**Return Value:** Boolean:
- **true -** Redundancy is enabled
- **false -** Redundancy is not enabled

#### setRedundancy(boolean redundancy)	

        void BarcodeDecoder.Settings.Symbology.D2OF5.setRedundancy(boolean redundancy)

**Description:** Enables or disables redundancy, requiring the scanner to read the barcode twice before accepting the data.	

**Parameters:**
- **redundancy:** A boolean indicating whether to enable (true) or disable (false) redundancy. Default: true.	


---

### DATAMATRIX

**Description:** Configures parameters related to Data Matrix barcode decoding. Data Matrix is a 2D barcode used widely in healthcare, logistics, and manufacturing for its compact size and error correction capabilities.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.DATAMATRIX.enable(boolean initialStatus)

**Description:** Enables or disables Data Matrix symbology decoding based on the input boolean parameter.

**Parameters:**

- **initialStatus -** Boolean to enable (true) or disable (false) the symbology. Default: true.

#### getInverseMode()

        int BarcodeDecoder.Settings.Symbology.DATAMATRIX.getInverseMode()

**Description:** Retrieves the current inverse mode setting for Data Matrix decoding.	

**Return Value:** Integer representing the current inverse mode setting:
- **0 -** Regular Only
- **1 -** Inverse Only
- **2 -** Inverse Autodetect

#### setInverseMode(int mode)

        void BarcodeDecoder.Settings.Symbology.DATAMATRIX.setInverseMode(int mode)

**Description:** Sets the inverse mode for Data Matrix decoding, allowing configuration to decode regular, inverse, or both types of Data Matrix barcodes.

**Parameters:**
- **mode:** An integer specifying the inverse mode:
    - **0 -** Regular Only
    - **1 -** Inverse Only
    - **2 -** Inverse Autodetect (default)

---

### DOTCODE

**Description:** Configures parameters related to DotCode barcode decoding. DotCode is a high-speed 2D barcode often used in manufacturing and packaging applications.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.DOTCODE.enable(boolean initialStatus)

**Description:** Enables or disables the DotCode symbology decoding based on the input boolean parameter.

**Parameters:**

- **initialStatus -** A boolean indicating whether to enable (true) or disable (false) the symbology. Default: false.	

#### getInverse()

        int BarcodeDecoder.Settings.Symbology.DOTCODE.getInverse()

**Description:** Retrieves the current inverse decoding setting for DotCode symbols.	

**Return Value:** Integer that represent the current inverse decoding setting:
    - **0 -** Disable
    - **1 -** Enable
    - **2 -** Auto

#### setInverse(int inverse)

        void BarcodeDecoder.Settings.Symbology.DOTCODE.setInverse(int inverse)

**Description:** Configures inverse decoding for DotCode symbols, allowing detection of standard or inverse (black-on-white or white-on-black) symbols.	

**Parameters:**
- **inverse:** An integer specifying the inverse decoding mode:
    - **0 -** Disable
    - **1 -** Enable
    - **2 -** Auto (default)
 
#### getMirror()

        int BarcodeDecoder.Settings.Symbology.DOTCODE.getMirror()

**Description:** Retrieves the current mirrored decoding setting for DotCode symbols.	

**Return Value:** Integer that defines the current mirrored decoding setting:
- **0 -** Disable
- **1 -** Enable
- **2 -** Auto (default)

#### setMirror(int mirror)

        void BarcodeDecoder.Settings.Symbology.DOTCODE.setMirror(int Mirror)

**Description:** Configures mirrored decoding for DotCode symbols, allowing detection of mirrored symbols.	

**Parameters:**
- **mirror:** An integer specifying the mirrored decoding mode:
    - **0 -** Disable
    - **1 -** Enable
    - **2 -** Auto (default)
 
#### getErasure()

        int BarcodeDecoder.Settings.Symbology.DOTCODE.getErasure()

**Description:** Retrieves the current erasure setting for DotCode decoding.	

**Return Value:** Integer that defines the erasure setting, indicating the number of erasures allowed, within a range of 4 to 20.

#### setErasure(int erasure)

        void BarcodeDecoder.Settings.Symbology.DOTCODE.setErasure(int erasure)

**Description:** Configures the number of erasures allowed during DotCode decoding to handle damaged or incomplete symbols.	

**Parameters:**
- **erasure:** An integer specifying the number of erasures allowed. Default: 10. Valid range: 4 to 20.

---

### DUTCH_POSTAL

**Description:** Configures parameters related to Dutch Postal barcode decoding. Dutch Postal barcodes are used in postal applications in the Netherlands for mail tracking and routing.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.DUTCH_POSTAL.enable(boolean initialStatus)

**Description:** Enables or disables the Dutch Postal symbology decoding based on the input boolean parameter.

**Parameters:**

- **initialStatus -** A boolean indicating whether to enable (true) or disable (false) the symbology. Default: false.	

#### isPostal3S()

        boolean BarcodeDecoder.Settings.Symbology.DUTCH_POSTAL.isPostal3S()

**Description:** Checks if the postal type is set to 3S, which is a specific format used in Dutch Postal systems.	

**Return Value:** Boolean:
- **true -** The postal type is set to 3S.
- **false -** The postal type is not set to 3S.

#### setPostal3S(boolean postal3S)

        void BarcodeDecoder.Settings.Symbology.DUTCH_POSTAL.setPostal3S (boolean postal3S)		

**Description:** Configures whether the postal type is set to 3S in Dutch Postal systems.	

**Parameters:**
- **postal3S:** A boolean indicating whether to enable (true) or disable (false) the 3S postal type. Default: false.


---

### EAN8

**Description:** Configures parameters related to EAN8 barcode decoding. EAN8 is a compact barcode typically used for small products in retail environments, while EAN13 is its extended counterpart for larger-scale applications. 

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.EAN8.enable(boolean initialStatus)

**Description:** Enables or disables the EAN8 symbology decoding based on the input boolean parameter.

**Parameters:**

- **initialStatus -** Boolean to enable (true) or disable (false) the symbology. Default value is true.

#### isConvertToEan13()

        boolean BarcodeDecoder.Settings.Symbology.EAN8.isConvertToEan13()

**Description:** Checks if the “Convert to EAN13” parameter is enabled, which determines whether EAN8 data is converted to EAN13 format before transmission.

**Return Value:** Boolean indicating to enable (true) or disable (false) conversion to EAN13.

#### setConvertToEan13(boolean convertToEan13)

        void BarcodeDecoder.Settings.Symbology.EAN8.setConvertToEan13(boolean convertToEan13)

**Description:** Enables or disables the “Convert to EAN13” parameter, allowing EAN8 data to be transmitted in EAN13 format.

**Parameters:**
- **convertToEan13 -** Boolean indicating whether to convert (true) or not convert (false) EAN8 to EAN13. Default: false.

---

### GS1_DATABAR

**Description:** Configures parameters related to GS1 DataBar barcode decoding. GS1 DataBar barcodes are a family of compact, high-density barcodes commonly used in retail, healthcare, and logistics for encoding additional information like expiration dates, lot numbers, and serial numbers. 

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.GS1_DATABAR.enable(boolean initialStatus)

**Description:** Enables or disables the GS1 DataBar symbology decoding based on the input boolean parameter.

**Parameters:**
- **initialStatus -** Boolean to enable (true) or disable (false) the symbology. Default: true.

#### getGS1SecurityLevel()

        int BarcodeDecoder.Settings.Symbology.GS1_DATABAR.getGS1SecurityLevel()

**Description:** Retrieves the current security level setting for GS1 DataBar barcodes.	

**Return Value:** Integer that defines the current GS1 DataBar security level (0 to 3).

#### setGS1SecurityLevel(int securityLevel)	

        void BarcodeDecoder.Settings.Symbology.GS1_DATABAR.setGS1SecurityLevel(int securityLevel)

**Description:** Configures the security level for GS1 DataBar barcodes, determining how aggressively the scanner decodes the barcodes while balancing the risk of misdecodes.	

**Parameters:**
- **securityLevel:** An integer specifying the security level:
    - **0 -** Security Level 0
    - **1 -** Security Level 1
    - **2 -** Security Level 2 (default)
    - **3 -** Security Level 3

---

### GS1_DATABAR_LIM

**Description:** Configures parameters related to GS1 DataBar Limited barcode decoding. GS1 DataBar Limited is designed for small items and packaging, particularly in retail and healthcare environments, where barcode space is limited.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.GS1_DATABAR_LIM.enable(boolean initialStatus)

**Description:** Enables or disables the GS1 DataBar Limited symbology decoding based on the input boolean parameter.

**Parameters:**
- **initialStatus -** Boolean to enable (true) or disable (false) the symbology. Default: false.

#### getGS1LIMSecurityLevel()

        int BarcodeDecoder.Settings.Symbology.GS1_DATABAR_LIM.getGS1LIMSecurityLevel()

**Description:** Retrieves the current security level setting for GS1 DataBar Limited barcodes.	

**Return Value:** Integer that defines the current GS1 DataBar Limited security level:
- **1 -** No clear margin
- **2 -** Automatic risk detection (default)
- **3 -** Trailing margin required
- **4 -** Leading and trailing margins required

#### setGS1LimSecurityLevel(int securitylimlevel)

        void BarcodeDecoder.Settings.Symbology.GS1_DATABAR_LIM. setGS1LimSecurityLevel(int securitylimLevel)

**Description:** Configures the security level for GS1 DataBar Limited barcodes, which determines the scanner’s aggressiveness and margin requirements for decoding.	

**Parameters:**
- **securitylimLevel:** An integer specifying the security level:
    - **1 -** No clear margin
    - **2 -** Automatic risk detection (default)
    - **3 -** Trailing margin required
    - **4 -** Leading and trailing margins required


---

### HANXIN

**Description:** Configures parameters related to Han Xin barcode decoding. Han Xin barcodes are a 2D symbology widely used in China for various applications, including logistics and identification.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.HANXIN.enable(boolean initialStatus)

**Description:** Enables or disables the Han Xin symbology decoding based on the input boolean parameter.

**Parameters:**
- **initialStatus -** Boolean to enable (true) or disable (false) the symbology. Default: false.

#### getInverseMode()

        int BarcodeDecoder.Settings.Symbology.HANXIN.getInverseMode()

**Description:** Retrieves the current inverse mode setting for Han Xin barcodes.

**Return Value:** Integer that defines the current inverse mode setting (0 to 2).

#### setInverseMode(int setinverseMode)

        void BarcodeDecoder.Settings.Symbology.HANXIN.setInverseMode(int setinverseMode)

**Description:** Configures the inverse mode for Han Xin barcodes, allowing decoding of regular, inverse, or both types of barcodes.	

**Parameters:**
- **inverseMode:** An integer specifying the inverse mode:
    - **0 -** Disable (default)
    - **1 -** Enable
    - **2 -** Auto

---

### I2OF5

**Description:** Configures parameters related to for Interleaved 2 of 5 (I2OF5) barcode decoding.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.I2OF5.enable(boolean initialstatus)

**Description:** Enables or disables the I2OF5 symbology decoding based on the input boolean parameter.

**Parameters:**

- **initialStatus -** Boolean to enable (true) or disable (false) the symbology. Default: false.

#### isConvertToEan13()

        boolean BarcodeDecoder.Settings.Symbology.I2OF5.isConvertToEan13()

**Description:** Checks if the conversion of 14-character I2OF5 barcodes to EAN13 is enabled.	

**Return Value:** Boolean indicating to enable (true) or disable (false) conversion to EAN13.

#### setConvertToEan13(boolean convertToEan13)

        void BarcodeDecoder.Settings.Symbology.I2OF5.setConvertToEan13 (boolean ConvertToEan13())

**Description:** Enables or disables the conversion of 14-character I2OF5 barcodes to EAN-13 format.

**Parameters:**

- **convertToEan13 -** Boolean indicating to convert (true) or not convert (false) I2OF5 to EAN13. Default: false.

#### isFebraban()

        boolean BarcodeDecoder.Settings.Symbology.I2OF5.isFebraban()

**Description:** Checks if FEBRABAN (Brazilian banking standard) is enabled for decoding.

**Return Value:** Boolean indicating to enable (true) or disable (false) FEBRABAN.

#### setFebraban(boolean febraban)

        void BarcodeDecoder.Settings.Symbology.I2OF5.setFebraban(boolean febraban)

**Description:** Enables or disables FEBRABAN mode for I2OF5 decoding.

**Parameters:**

- **febraban -** Boolean indicating to enable (true) or disable (false) FEBRABAN mode. Default: false.

#### getLength1()

        int BarcodeDecoder.Settings.Symbology.I2OF5.getLength1()

**Description:** Retrieves the minimum length setting for decoding I2OF5 barcodes.

**Return Value:** Integer value that defines the minimum length of I2OF5 barcodes to decode.

#### setLength1(int length1)

        void BarcodeDecoder.Settings.Symbology.I2OF5.setLength1(int length1())

**Description:** Sets the minimum length of I2OF5 symbols to decode.

**Parameters:**

- **length1 -** Integer specifying the minimum length for the I2OF5 barcode. Default: 6. Valid range: 0 to 55.

#### getLength2()

        int BarcodeDecoder.Settings.Symbology.I2OF5.getLength2()

**Description:** Retrieves the maximum length setting for decoding I2OF5 barcodes.

**Return Value:** Integer value representing the maximum length of I2OF5 barcodes to decode.

#### setLength2(int length2)

        void BarcodeDecoder.Settings.Symbology.I2OF5.setLength2(int length2())

**Description:** Sets the maximum length of I2OF5 symbols to decode.

**Parameters:**

- **length2 -** Integer specifying the maximum length of I2OF5 symbols to decode. Default: 55. Valid range: 0 to 55.

#### isReducedQuietZone()

        boolean BarcodeDecoder.Settings.Symbology.I2OF5.isReducedQuietZone()

**Description:** Checks if the “Reduced Quiet Zone” parameter is enabled.

**Return Value:** Boolean indicating to enable (true) or disable (false) the reduced quiet zone.

#### setReducedQuietZone(boolean reducedQuietZone)

        void BarcodeDecoder.Settings.Symbology.I2OF5.setReducedQuietZone(boolean reducedQuietZone)	

**Description:** Enables or disables the “Reduced Quiet Zone” parameter.

**Parameters:**

- **reducedQuietZone -** Boolean indicating whether to enable (true) or disable (false) reduced quiet zone. Default: false.

#### isRedundancy()

        boolean BarcodeDecoder.Settings.Symbology.I2OF5.isRedundancy(boolean isRedundancy())

**Description:** Checks if redundancy is enabled, which requires the decoder to read the barcode twice before accepting the data.	

**Return Value:** Boolean indicating to enable (true) or disable (false) redundancy.

#### setRedundancy(boolean redundancy)

        void BarcodeDecoder.Settings.Symbology.I2OF5.setRedundancy(boolean redundancy)

**Description:** Enables or disables redundancy, requiring the decoder to read the barcode twice before accepting the data.	

**Parameters:**

- **redundancy -** Boolean indicating to enable (true) or disable (false) redundancy. Default: true.

#### isReportCheckDigit()

        boolean BarcodeDecoder.Settings.Symbology.I2OF5.isReportCheckDigit()

**Description:** Checks if the “Report Check Digit” parameter is enabled, which validates the check digit of I2OF5 symbols.

**Return Value:** Boolean value:

- **true -** Report Check Digit is enabled.
- **false -** Report Check Digit is disabled.

#### setReportCheckDigit(boolean reportCheckDigit)

        void BarcodeDecoder.Settings.Symbology.I2OF5.setReportCheckDigit(boolean reportCheckDigit)

**Description:** Enables or disables the “Report Check Digit” parameter to validate I2OF5 symbols using USS or OPCC algorithms.

**Parameters:**

- **reportCheckDigit -** An integer specifying the check digit algorithm:
    - **0 -** No Check Digit (default)
    - **1 -** USS Check Digit
    - **2 -** OPCC Check Digit

#### getSecurityLevel()

        int BarcodeDecoder.Settings.Symbology.I2OF5.getSecurityLevel()

**Description:** Retrieves the security level setting for decoding I2OF5 barcodes, which affects the aggressiveness and accuracy of decoding.

**Return Value:** Integer value that defines the security level for decoding I2OF5 barcodes:
- **0 -** Aggressive
- **1 -** Intermediate
- **2 -** High
- **3 -** Extreme

#### setSecurityLevel(SecurityLevel securityLevel)

        void BarcodeDecoder.Settings.Symbology.I2OF5. setSecurityLevel(SecurityLevel level)

**Description:** Sets the security level for decoding I2OF5 barcodes. Higher levels improve decoding success for low-quality barcodes but reduce aggressiveness.

**Parameters:**
- **SecurityLevel -** An enumerator that specifies the security level, the values are: 
    - **LEVEL_0:** Configures the decoder to operate in its most aggressive state, providing sufficient security in decoding most in-specification barcodes.
    - **LEVEL_1:** Reduces the risk of mis-decoding (default).
    - **LEVEL_2:** Suitable if LEVEL_1 does not adequately prevent mis-decodes.
    - **LEVEL_3:** Suitable if LEVEL_2 does not adequately prevent mis-decodes. This level is an extreme measure against decoding severely out-of-specification barcodes and significantly compromised the decoder's effectiveness. If such aa high security level is required, improving the barcode quality is recommended. 

#### getVerifyCheckDigit()

        int BarcodeDecoder.Settings.Symbology.I2OF5.getVerifyCheckDigit()

**Description:** Retrieves the current check digit verification setting for I2OF5 barcodes.

**Return Value:** Integer that defines the current check digit verification setting.

#### setVerifyCheckDigit(CheckDigitType verifyCheckDigit)

        void BarcodeDecoder.Settings.Symbology.I2OF5.setVerifyCheckDigit(int verifyCheckDigit)

**Description:** Configures the decoder to verify or ignore the check digit of I2OF5 symbols.

**Parameters:**

- **verifyCheckDigit -** An integer specifying the check digit type:
    - **0 -** No Check Digit (default)
    - **1 -** USS Check Digit
    - **2 -** OPCC Check Digit

---

### MATRIX_2OF5

**Description:** Configures parameters related to for Matrix 2 of 5 barcode decoding. Matrix 2 of 5 is a numeric barcode symbology used in industrial and warehouse applications.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.MATRIX_2OF5.enable(boolean initialStatus)

**Description:** Enables or disables the Matrix 2 of 5 symbology decoding based on the input boolean parameter.

**Parameters:**
- **initialStatus -** Boolean to enable (true) or disable (false) the symbology. Default: false.

#### getLength1()

        int BarcodeDecoder.Settings.Symbology.MATRIX_2OF5.getLength1()

**Description:** Retrieves the minimum length setting of Matrix 2 of 5 symbol to be decoded.

**Return Value:** Integer that defines the minimum length setting of Matrix 2 of 5 symbol to be decoded.

#### setLength1(int length1)

        void BarcodeDecoder.Settings.Symbology.MATRIX_2OF5.setLength1(int length1) throws InvalidInputException	

**Description:** Sets the minimum length of Matrix 2 of 5 symbols to be decoded.	

**Parameters:**
- **length1:** An integer specifying the minimum length for the Matrix 2 of 5 symbols to be decoded. Default: 10. Valid range: 0 to 55.

**Exception:**
- **InvalidInputException –** Thrown if length1 is beyond the valid range.
 
#### getLength2()

        int BarcodeDecoder.Settings.Symbology.MATRIX_2OF5.getLength2()

**Description:** Retrieves the maximum length setting of the Matrix 2 of 5 symbol to be decoded.

**Return Value:** Integer defining the maximum length setting of Matrix 2 of 5 symbols to be decoded.

#### setLength2(int length2)

        void BarcodeDecoder.Settings.Symbology.MATRIX_2OF5.setLength2(int length2) throws InvalidInputException

**Description:** Sets the maximum length of the Matrix 2 of 5 symbols to be decoded.	

**Parameters:**
- **length2:** An integer specifying the maximum length for Matrix 2 of 5 symbols to be decoded. Default: 0. Valid range: 0 to 55.

**Exception:**
- **InvalidInputException –** Thrown if length2 is beyond the valid range.
 
#### isRedundancy()

        boolean BarcodeDecoder.Settings.Symbology.MATRIX_2OF5.isRedundancy ()

**Description:** Checks if redundancy is enabled, which requires the scanner to read the barcode twice before accepting the data.	

**Return Value:** Boolean:
- **true -** Redundancy is enabled
- **false -** Redundancy is disabled

#### SetRedundancy(boolean redundancy)

        void BarcodeDecoder.Settings.Symbology.MATRIX_2OF5.setRedundancy(boolean redundancy)

**Description:** Enables or disables redundancy, requiring the scanner to read the barcode twice before accepting the data.	

**Parameters:**
- **redundancy:** A boolean indicating whether to enable (true) or disable (false) redundancy. Default: false.	
 
#### isReportCheckDigit()

        boolean BarcodeDecoder.Settings.Symbology.MATRIX_2OF5.isReportCheckDigit()

**Description:** Checks if the “Report Check Digit” parameter is enabled, which determines whether the check digit is included in the transmitted data.	

**Return Value:** Boolean:
- **true -** Report Check Digit is enabled
- **false -** Report Check Digit is disabled

#### setReportCheckDigit(boolean reportCheckDigit)

        void BarcodeDecoder.Settings.Symbology.MATRIX_2OF5.setReportCheckDigit(boolean reportCheckDigit)

**Description:** Enables or disables the “Report Check Digit” parameter, which determines whether the check digit is included in the transmitted data.	

**Parameters:**
- **reportCheckDigit:** A boolean indicating whether to enable (true) or disable (false) the check digit reporting. Default: true.	

#### isVerifyCheckDigit()	

        boolean BarcodeDecoder.Settings.Symbology.MATRIX_2OF5. isVerifyCheckDigit()	

**Description:** Checks if the “Verify Check Digit” parameter is enabled, which determines whether the check digit is verified for integrity during decoding.

**Return Value:** Boolean:
- **true -** Verify Check Digit is enabled
- **false -** Verify Check Digit is disabled

#### setVerifyCheckDigit(boolean verifyCheckDigit)

        void BarcodeDecoder.Settings.Symbology.MATRIX_2OF5.setVerifyCheckDigit(boolean verifyCheckDigit)

**Description:** Enables or disables the “Verify Check Digit” parameter, which verifies the integrity of Matrix 2 of 5 symbols using a specified check digit algorithm.	

**Parameters:**
- **verifyCheckDigit:** A boolean indicating whether to enable (true) or disable (false) check digit verification. Default: true.	


---

### MSI

**Description:** Configures parameters related to for MSI barcode decoding. MSI barcodes are commonly used in inventory control and marking applications, particularly in retail environments.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.MSI.enable(boolean initialStatus)

**Description:** Enables or disables the MSI symbology decoding based on the input boolean parameter.

**Parameters:**
- **initialStatus -** Boolean to enable (true) or disable (false) the symbology. Default: false.

#### getLength1()

        int BarcodeDecoder.Settings.Symbology.MSI.getLength1()

**Description:** Retrieves the minimum length setting for the MSI symbol to be decoded.

**Return Value:** Integer that defines the minimum length of the MSI symbol to be decoded.

#### setLength1(int length1)

**Description:** Sets the lower limit for the length of the MSI symbol to be decoded.	

        void BarcodeDecoder.Settings.Symbology.MSI.setLength1(int length1) throws InvalidInputException

**Parameters:**
- **length1:** An integer specifying the minimum length for the MSI symbol to be decoded. Default: 4. Valid range: 0 to 55.

**Exception:**
- **InvalidInputException –** Thrown if length1 is beyond the valid range.
 
#### getLength2()

        int BarcodeDecoder.Settings.Symbology.MSI.getLength2()

**Description:** Retrieves the maximum length of the MSI symbol to be decoded.	

**Return Value:** Integer that defines the maximum length of the MSI symbol length to be decoded.

#### setLength2(int length2)

        void BarcodeDecoder.Settings.Symbology.MSI.setLength2 (int length2) throws InvalidInputException

**Description:** Sets the maximum length of the MSI symbol to be decoded.

**Parameters:**
- **length2:** An integer specifying the maximum length of the MSI symbol. Default: 55. Valid range: 0 to 55.

**Exception:**
- **InvalidInputException –** Thrown if length2 is beyond the valid range.
 
#### isRedundancy()

        boolean BarcodeDecoder.Settings.Symbology.MSI.isRedundancy()

**Description:** Checks if redundancy is enabled, which requires the scanner to read the barcode twice before accepting the data.	

**Return Value:** Boolean:
- **true -** Redundancy is enabled
- **false -** Redundancy is disabled

#### setRedundancy(boolean redundancy)

        void BarcodeDecoder.Settings.Symbology.MSI.setRedundancy(boolean redundancy)

**Description:** Enables or disables redundancy, requiring the scanner to read the barcode twice before accepting the data.	

**Parameters:**
- **redundancy:** A boolean indicating whether to enable (true) or disable (false) redundancy. Default: true.	

#### getCheckDigit()

        int BarcodeDecoder.Settings.Symbology.MSI.getCheckDigit()

**Description:** Retrieves the current check digit configuration for MSI barcodes.	

**Return Value:** Integer the defines the current check digit configuration:
- **0 -** One Check Digit 
- **1 -** Two Check Digits

#### setCheckDigit(int checkDigit)

        void BarcodeDecoder.Settings.Symbology.MSI.setCheckDigit(int checkDigit)

**Description:** Configures the check digit for MSI barcodes. MSI symbols require one check digit, a second check digit is optional.	

**Parameters:**
- **checkDigit:** An integer specifying the check digit configuration:
    - **0 -** One Check Digit (default)
    - **1 -** Two Check Digits
 
#### getCheckDigitScheme()

        int BarcodeDecoder.Settings.Symbology.MSI.getCheckDigitScheme()

**Description:** Retrieves the current check digit scheme used for MSI barcodes.	

**Return Value:** Integer the defines the current check digit scheme:


#### setCheckDigitScheme(int checkDigitScheme)

        void BarcodeDecoder.Settings.Symbology.MSI.setCheckDigitScheme(int checkDigitScheme)

**Description:** Configures the check digit scheme for MSI barcodes. Two algorithms are available for verifying the second check digit.	

**Parameters:**
- **checkDigitScheme:** An integer specifying the check digit scheme:
    - **0 -** Mod-11-10
    - **1 -** Mod-10-10
 
#### isReportCheckDigit()

        boolean BarcodeDecoder.Settings.Symbology.MSI.isReportCheckDigit()

**Description:**  Checks if the “Report Check Digit” parameter is enabled, which determines whether the check digit is included in the transmitted data.	

**Return Value:**  Boolean:
- **true -** Report Check Digit is enabled
- **false -** Report Check Digit is disabled

#### setReportCheckDigit(boolean reportCheckDigit)

        void BarcodeDecoder.Settings.Symbology.MSI.setReportCheckDigit(boolean reportCheckDigit)

**Description:** Enables or disables the “Report Check Digit” parameter, which determines whether the check digit is included in the transmitted data.	

**Parameters:**
- **reportCheckDigit:** A boolean indicating whether to enable (true) or disable (false) the check digit reporting. Default: false.	
 
#### getSecurityLevel()

        int BarcodeDecoder.Settings.Symbology.MSI.getSecurityLevel()

**Description:** Retrieves the current security level used for MSI barcodes.	

**Return Value:** Integer that defines the current security level (0 to 3).

#### setSecurityLevel(int securityLevel)	

        void BarcodeDecoder.Settings.Symbology.MSI.setSecurityLevel(int securityLevel)

**Description:** Sets the security level for MSI barcodes. Higher levels improve decoding success for low-quality barcodes but reduce scanner aggressiveness.

**Parameters:**
- **securityLevel:** An integer specifying the security level:
    - **0 -** Aggressive
    - **1 -** Intermediate (Default)
    - **2 -** High
    - **3 -** Extreme
 
#### isReducedQuietZone()

        boolean BarcodeDecoder.Settings.Symbology.MSI.isReducedQuietZone()

**Description:** Checks if the “Reduced Quiet Zone” parameter is enabled.	

**Return Value:** Boolean:
- **true -** Reduced Quiet Zone is enabled
- **false -** Reduced Quiet Zone is disabled

#### setReducedQuietZone(boolean reducedQuietZone)

        void BarcodeDecoder.Settings.Symbology.MSI.setReducedQuietZone(boolean reducedQuietZone)

**Description:** Enables or disables the “Reduced Quiet Zone” parameter, which allows decoding MSI barcodes with reduced quiet zones.	

**Parameters:**
- **reducedQuietZone:** A boolean indicating whether to enable (true) or disable (false) the reduced quiet zone parameter. Default: false


---

### TRIOPTIC39

**Description:** Configures parameters related to for Trioptic39 barcode decoding. Trioptic39 is a variant of Code39 commonly used in applications requiring specialized barcode formats. 

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.TRIOPTIC39.enable(boolean initialStatus)

**Description:** Enables or disables the Trioptic39 symbology decoding based on the input boolean parameter.

**Parameters:**
- **initialStatus -** Boolean to enable (true) or disable (false) the symbology. Default: false.

#### isRedundancy()

        boolean BarcodeDecoder.Settings.Symbology.TRIOPTIC39.isRedundancy()	 

**Description:** Checks if redundancy is enabled, which requires the scanner to read the barcode twice before accepting the data.	 

**Return Value:** Boolean:
- **true -** Redundancy is enabled
- **false -** Redundancy is disabled

#### setRedundancy(boolean Redundancy())

        void BarcodeDecoder.Settings.Symbology.TRIOPTIC39.setRedundancy(boolean Redundancy())

**Description:** Enables or disables redundancy, requiring the scanner to read the barcode twice before accepting the data.	 

**Parameters:**
- **redundancy:** A boolean indicating whether to enable (true) or disable (false) redundancy.  Default: false.

---

### UK_POSTAL

**Description:** Configures parameters related to UK Postal barcode decoding. UK Postal barcodes are used in postal services within the United Kingdom to encode postal routing and delivery information.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.UK_POSTAL.enable(boolean initialStatus) 

**Description:** Enables or disables the UK Postal symbology decoding based on the input boolean parameter.	

**Parameters:**
- **initialStatus -** Boolean to enable (true) or disable (false) the symbology. Default: false.

#### isReportCheckDigit()

        boolean BarcodeDecoder.Settings.Symbology.UK_POSTAL.isReportCheckDigit()

**Description:** Checks if the “Report Check Digit” parameter is enabled, which determines whether the check digit is included in the transmitted data.	 

**Return Value:** Boolean:
- **true -** Report Check Digit is enabled
- **false -** Report Check Digit is disabled

#### setReportCheckDigit(boolean reportCheckDigit)

        void BarcodeDecoder.Settings.Symbology.UK_POSTAL.setReportCheckDigit(boolean reportCheckDigit)

**Description:** Enables or disables the “Report Check Digit” parameter, which determines whether the check digit is included in the transmitted data.	 

**Parameters:**
- **reportCheckDigit:** A boolean indicating whether to enable (true) or disable (false) the check digit parameter. Default: false.

---

### UPCA

**Description:** Configures parameters related to UPC-A barcode decoding. UPC-A is one of the most widely used barcode formats, especially in retail applications, encoding 12 numerical digits for product identification. 

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.UPCA.enable(boolean initialStatus)

**Description:** Enables or disables the UPC-A symbology decoding based on the input boolean parameter.

**Parameters:**
- **initialStatus -** Boolean to enable (true) or disable (false) the symbology. Default: true.

#### isReportCheckDigit()

        boolean BarcodeDecoder.Settings.Symbology.UPCA.isReportCheckDigit()

**Description:** Checks if the “Report Check Digit” parameter is enabled, which determines whether the check digit is included in the transmitted data.	

**Return Value:** Boolean value:

- **true -** Report the check digit.
- **false -** Do not report the check digit.

#### setReportCheckDigit(boolean reportCheckDigit)

        void BarcodeDecoder.Settings.Symbology.UPCA.setReportCheckDigit(boolean setReportCheckDigit())

**Description:** Enables or disables the “Report Check Digit” parameter, which determines whether the check digit is included in the transmitted data.

**Parameters:**

- **reportCheckDigit:** Boolean value indicating whether to include (true) or exclude (false) the check digit in transmissions. Default: true.

#### getPreamble()

        int BarcodeDecoder.Settings.Symbology.UPCA.getPreamble()

**Description:** Retrieves the current preamble setting for UPC-A symbols.

**Return Value:** Integer value representing the preamble setting:
  - **0 -** None
  - **1 -** System Character only
  - **2 -** System Character and Country Code

#### setPreamble(Preamble preamble)

        void BarcodeDecoder.Settings.Symbology.UPCA.setPreamble(int preamble)

**Description:** Configures the preamble transmission for UPC-A symbols, affecting how the country code and system character are transmitted to the host device.

**Parameters:**
- **preamble -** Integer to define preamble settings:
  - **0 -** None
  - **1 -** System Character only (Default) 
  - **2 -** System Character and Country Code

---

### UPCE

**Description:** Configures parameters related to UPC-E barcode decoding. UPC-E is a compact version of UPC-A, used to save space on packaging, especially in retail environments.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.UPCE.enable(boolean initialStatus)

**Description:** Enables or disables the UPC-E symbology decoding based on the input boolean parameter.	

**Parameters:**
- **initialStatus -** Boolean to enable (true) or disable (false) the symbology. Default: true.

#### isReportCheckDigit()

        boolean BarcodeDecoder.Settings.Symbology.UPCE.isReportCheckDigit()

**Description:** Checks if the “Report Check Digit” parameter is enabled, which determines whether the check digit is included in the transmitted data.	

**Return Value:** Boolean:
- **true -** Report the check digit.
- **false -** Do not report the check digit.

#### setReportCheckDigit(boolean reportCheckDigit)

        void BarcodeDecoder.Settings.Symbology.UPCE.setReportCheckDigit(boolean reportCheckDigit)

**Description:** Enables or disables the “Report Check Digit” parameter, which determines whether the check digit is included in the transmitted data.	

**Parameters:**
- **reportCheckDigit:** Boolean value indicating whether to include (true) or exclude (false) the check digit. Default: false.

#### getPreamble()

        int BarcodeDecoder.Settings.Symbology.UPCE.getPreamble()

**Description:** Retrieves the current preamble setting for UPC-E symbols.

**Return Value:** Integer value representing the preamble setting:
- **0 -** None (default)
- **1 -** System Character only
- **2 -** System Character and Country Code

#### setPreamble(Preamble preamble)

        void BarcodeDecoder.Settings.Symbology.UPCE.setPreamble(int preamble)

**Description:** Configures the preamble transmission for UPC-E symbols, affecting how the country code and system character are transmitted to the host device.	

**Parameters:**
- **preamble -** Integer to define preamble settings:
  - **0 -** None (default)
  - **1 -** System Character only
  - **2 -** System Character and Country Code

#### isConvertToUPCA()

        boolean BarcodeDecoder.Settings.Symbology.UPCE.isConvertToUPCA()

**Description:** Checks if the “Convert to UPCA” parameter is enabled, which determines whether UPCE data is converted to UPCA format before transmission.

**Return Value:** Boolean indicating to enable (true) or disable (false) conversion to UPCA.

#### setConvertToUPCA(boolean convertToUPCA)

        void BarcodeDecoder.Settings.Symbology.UPCE.setConvertToUPCA(boolean convertToUPCA)

**Description:** Enables or disables the “Convert to UPCA” parameter, allowing UPC-E data to be transmitted in UPC-A format.	

**Parameters:**
- **convertToUPCA -** Boolean indicating whether to convert (true) or not convert (false) UPC-E to UPC-A. Default: false.

---

### UPCE1

**Description:** Configures parameters related to UPC-E1 barcode decoding. UPC-E1 is a compressed format of UPC-A, typically used in retail applications to save space on packaging.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.UPCE1.enable(boolean initialStatus)

**Description:** Enables or disables the UPC-E1 symbology decoding based on the input boolean parameter.

**Parameters:**
- **initialStatus -** Boolean to enable (true) or disable (false) the symbology. Default: false.

#### isReportCheckDigit()

        boolean BarcodeDecoder.Settings.Symbology.UPCE1.isReportCheckDigit()

**Description:** Checks if the “Report Check Digit” parameter is enabled, which determines whether the check digit is included in the transmitted data.

**Return Value:** Boolean:
- **true -** Report Check Digit is enabled
- **false -** Report Check Digit is disabled

#### setReportCheckDigit(boolean reportCheckDigit)

        void BarcodeDecoder.Settings.SymbologyClass.UPCE1DecoderParams.setReportCheckDigit(boolean reportCheckDigit)

**Description:** Enables or disables the “Report Check Digit” parameter, which determines whether the check digit is included in the transmitted data to verify data integrity.

**Parameters:**
- **reportCheckDigit:** Boolean value indicating whether to enable (true) or disable (false) the check digit parameter. Default: false.

#### getPreamble()

        int BarcodeDecoder.Settings.Symbology.UPCE1.getPreamble()

**Description:** Retrieves the current preamble settings for UPC-E1 symbols.
- **0 -** None
- **1 -** System Character Only
- **2 -** Country Code and System Character

**Return Value:** Integer value for the current preamble setting.

#### setPreamble(Preamble preamble)

        void BarcodeDecoder.Settings.Symbology.UPCE1.setPreamble(int preamble)

**Description:** Configures the preamble transmission for UPC-E1 symbols, affecting how the country code and system character are transmitted to the host device.

**Parameters:**
- **preamble -** An integer specifying the preamble option:
    - **0 -** None (default)
    - **1 -** System Character Only
    - **2 -** Country Code and System Character

#### isConvertToUPCA()

        boolean BarcodeDecoder.Settings.Symbology.UPCE1.isConvertToUPCA()

**Description:** Checks if the “Convert to UPCA” parameter is enabled, which determines whether UPC-E1 data is converted to UPC-A format before transmission.

**Return Value:** Boolean:
- **true -** Convert to UPCA is enabled
- **false -** Convert to UPCA is enabled

#### setConvertToUPCA(boolean convertToUPCA)

        void BarcodeDecoder.Settings.Symbology.UPCE1.setConvertToUPCA(boolean convertToUPCA)

**Description:** Enables or disables the “Convert to UPCA” parameter, allowing UPC-E1 data to be transmitted in UPC-A format.

**Parameters:**
- **convertToUPCA -** Boolean indicating whether to enable (true) or disable (false) the conversion to UPC-A. Default: false.

---

### UPCEAN

**Description:** Configures parameters related to UPC and EAN barcode decoding, which are widely used in retail and logistics.

#### getSecurityLevel()

        int BarcodeDecoder.Settings.Symbology.UPCEAN.getSecurityLevel()

**Description:** Retrieves the current security level setting for UPC/EAN barcodes.	 

**Return Value:** Integer representing the current security level, which is one of the following enumerated values:
- **LEVEL_0**
- **LEVEL_1**
- **LEVEL_2**
- **LEVEL_3**

#### setSecurityLevel(SecurityLevel securityLevel)

        void BarcodeDecoder.Settings.Symbology.UPCEAN.setSecurityLevel(SecurityLevel securityLevel)

**Description:** Configures the security level for UPC/EAN barcodes, balancing decoding aggressiveness and misdecode prevention.

**Parameters:**
- **securityLevel:** A SecurityLevel enumerator specifying the security level:
    - **0 -** LEVEL_0
    - **1 -** LEVEL_1 (default) 
    - **2 -** LEVEL_2
    - **3 -** LEVEL_3

#### isSupplemental2Enabled()

        boolean BarcodeDecoder.Settings.Symbology.UPCEAN.isSupplemental2Enabled()

**Description:** Checks if the 2-digit supplemental for UPC/EAN barcodes is enabled.

**Return Value:** Boolean:
- **true -** 2-digit supplemental is enabled
- **false -** 2-digit supplemental is disabled

#### setSupplemental2(boolean supplemental2)

        void BarcodeDecoder.Settings.Symbology.UPCEAN.setSupplemental2(boolean supplemental2)

**Description:** Enables the 2-digit supplemental for UPC/EAN barcodes.

**Parameters:**
- **supplemental2:** A boolean indicating whether to enable (true) or disable (false) the 2-digit supplemental.	 

#### isSupplemental5Enabled()

        boolean BarcodeDecoder.Settings.Symbology.UPCEAN.isSupplemental5Enabled()

**Description:** Checks if the 5-digit supplemental for UPC/EAN barcodes is enabled.	 

**Return Value:** Boolean:
- **true -** 5-digit supplemental is enabled
- **false -** 5-digit supplemental is disabled

#### setSupplemental5(boolean supplemental5)

        void BarcodeDecoder.Settings.Symbology.UPCEAN.setSupplemental5(boolean supplemental5)

**Description:** Enables the 5-digit supplemental for UPC/EAN barcodes.

**Parameters:**
- **supplemental5:** A boolean indicating whether to enable (true) or disable (false) the 5-digit supplemental.	 

#### getSupplementalMode()

        int BarcodeDecoder.Settings.Symbology.UPCEAN.getSupplementalMode(int getSupplementalMode)

**Description:** Retrieves the current supplemental mode for UPC/EAN barcodes.	 

**Return Value:** Integer that defines the current supplemental mode (0 to 7). 

#### setSupplementalMode(int supplementalMode)

        void BarcodeDecoder.Settings.Symbology.UPCEAN.setSupplementalMode(int supplementalMode)

**Description:** Sets the supplemental mode for UPC/EAN barcodes, controlling the handling of appended barcodes.	 

**Parameters:**
- **supplementalMode:** A SupplementalMode enumerator indicating the method for handling supplementals: 
    - **NO_SUPPLEMENTALS**
    - **SUPPLEMENTAL_ALWAYS**
    - **SUPPLEMENTAL_AUTO**
    - **SUPPLEMENTAL_SMART**
    - **SUPPLEMENTAL_378_379**
    - **SUPPLEMENTAL_978_979**
    - **SUPPLEMENTAL_414_419_434_439**
    - **SUPPLEMENTAL_977**

#### getRetryCount()

        int BarcodeDecoder.Settings.Symbology.UPCEAN.getRetryCount()

**Description:** Retrieves the current retry count setting for auto-discriminating supplementals in UPC/EAN barcodes.	 

**Return Value:** Integer that defines the current retry count. 

#### setRetryCount(int retryCount)

        void BarcodeDecoder.Settings.Symbology.UPCEAN.setRetryCount(int retryCount) throws InvalidInputException

**Description:** Sets the retry count for auto-discriminating supplementals in UPC/EAN barcodes.	 

**Parameters:**
- **retryCount:** An integer specifying the retry count. Default: 10. Valid range: 2 to 20.

**Exception:**
- **InvalidInputException –** Thrown if the retryCount is outside the valid range.	 

#### isLinearDecodeEnabled()

        boolean  BarcodeDecoder.Settings.Symbology.UPCEAN.isLinearDecodeEnabled()

**Description:** Checks if linear decoding for UPC/EAN barcodes is enabled.	 

**Return Value:** Boolean:
- **true -** Linear decoding is enabled
- **false -** Linear decoding is disabled

#### setLinearDecode(boolean linearDecode)

        void BarcodeDecoder.Settings.Symbology.UPCEAN.setLinearDecode(boolean linearDecode)

**Description:** Enables or disables linear decoding for UPC/EAN barcodes.	 

**Parameters:**
- **linearDecode:** A boolean indicating whether to enable (true) or disable (false) linear decoding.	 

#### isBooklandEnabled()

        boolean BarcodeDecoder.Settings.Symbology.UPCEAN.isBooklandEnabled()	 

**Description:** Checks if Bookland decoding for UPC/EAN barcodes is enabled.	 

**Return Value:** Boolean:
- **true -** Bookland decoding is enabled
- **false -** Bookland decoding is disabled

#### setBookland(boolean bookland)

        void BarcodeDecoder.Settings.Symbology.UPCEAN.setBookland(boolean bookland)

**Description:** Enables the Bookland decoding for UPC/EAN barcodes.

**Parameters:**
- **bookland:** A boolean indicating whether to enable (true) or disable (false) Bookland decoding.	 
  
#### isCouponEnabled()

        boolean BarcodeDecoder.Settings.Symbology.UPCEAN.isCouponEnabled()

**Description:** Checks if coupon decoding for UPC/EAN barcodes is enabled.	

**Return Value:** Boolean:
- **true -** Coupon decoding is enabled
- **false -** Coupon decoding is disabled

#### setCoupon(boolean coupon)

        void BarcodeDecoder.Settings.Symbology.UPCEAN.setCoupon(boolean coupon)

**Description:** Enables or disables coupon decoding for UPC/EAN barcodes.

**Parameters:**
- **coupon:** A boolean indicating whether to enable (true) or disable (false) coupon decoding.	 

#### getCouponReportMode()

        int BarcodeDecoder.Settings.Symbology.UPCEAN.getCouponReportMode()

**Description:** Retrieves the current coupon report mode for UPC/EAN barcodes.	 

**Return Value:** Integer representing the current coupon report mode (0 to 2). 

#### setCouponReportMode(int couponReportMode)

        void BarcodeDecoder.Settings.Symbology.UPCEAN.setCouponReportMode(int couponReportMode) throws InvalidInputException

**Description:** Sets the coupon report mode for UPC/EAN barcodes.	 

**Parameters:**
- **couponReportMode:** An integer specifying the coupon report mode:
    - **0 -** Old Coupon Report Mode, only the Old coupon format is read, with Interim format returning UPC.
    - **1 -** New Coupon Report Mode, only Interim or New coupon formats are read. 
    - **2 -** Both Old as well the new GS1 Databar coupon formats are read (default).

**Exception:**
- **InvalidInputException –** Thrown if couponReportMode is outside the valid values.	 

#### isEanZeroExtendEnabled()

        boolean BarcodeDecoder.Settings.Symbology.UPCEAN.isEanZeroExtendEnabled()

**Description:** Checks if EAN zero extend feature for UPC/EAN barcodes is enabled.	 

**Return Value:** Boolean:
- **true -** EAN zero extend is enabled
- **false -** EAN zero extend is disabled

#### setEanZeroExtend(boolean eanZeroExtend)

        void BarcodeDecoder.Settings.Symbology.UPCEAN.setEanZeroExtend(boolean eanZeroExtend)

**Description:** Enables EAN zero extend feature for UPC/EAN barcodes.

**Parameters:**
- **eanZeroExtend:** A boolean indicating whether to enable (true) or disable (false) EAN zero extend.	 

#### getBooklandFormat()

        int BarcodeDecoder.Settings.Symbology.UPCEAN.getBooklandFormat()

**Description:** Retrieves the current Bookland format setting for UPC/EAN barcodes.	 

**Return Value:** Integer that represents the current Bookland format (0 or 1). 

#### setBooklandFormat(int booklandFormat)

        void BarcodeDecoder.Settings.Symbology.UPCEAN.setBooklandFormat(int booklandFormat) throws InvalidInputException

**Description:** Sets the Bookland format for UPC/EAN barcodes.	 

**Parameters:**
- **booklandFormat:** An integer specifying the Bookland format: 	 
    - **0 -** Format ISBN-10, 978/979 transmitted as EAN13 as per 2007 ISBN-13 protocol (default)
    - **1 -** Format ISBN-13, 978/979 transmitted as EAN13 as per 2007 ISBN-13 protocol 

**Exception:**
- **InvalidInputException –** Thrown if the booklandFormat is beyond the valid accepted values.

#### isConvertDataBarToUPCEANEnabled()

        void BarcodeDecoder.Settings.Symbology.UPCEAN.isConvertDataBarToUPCEANEnabled()

**Description:** Checks if conversion from DataBar to UPC/EAN for barcodes is enabled.

**Return Value:** Boolean:
- **true -** Conversion is enabled
- **false -** Conversion is disabled

#### SetConvertDataBarToUPCEAN(boolean convertDataBarToUPCEAN)

        void BarcodeDecoder.Settings.Symbology.setConvertDataBarToUPCEAN(boolean convertDataBarToUPCEAN) 

**Description:** Enables the conversion from DataBar to UPC/EAN for barcodes.	 

**Parameters:**
- **convertDataBarToUPCEAN:** A boolean indicating whether to enable (true) or disable (false) conversion from DataBar to UPC/EAN.	 

#### isReducedQuietZoneEnabled()

        boolean BarcodeDecoder.Settings.Symbology.isReducedQuietZoneEnabled()

**Description:** Checks if reduced quiet zone decoding for UPC/EAN barcodes is enabled.	 

**Return Value:** Boolean:
- **true -** Reduced quiet zone decoding is enabled
- **false -** Reduced quiet zone decoding is enabled

#### setReducedQuietZone(boolean reducedQuietZone)

        void BarcodeDecoder.Settings.Symbology.setReducedQuietZone(boolean reducedQuietZone)

**Description:** Enables or disables reduced quiet zone decoding for UPC/EAN barcodes.	 

**Parameters:**
- **reducedQuietZone:** A boolean indicating whether to enable (true) or disable (false) reduced quiet zone decoding.


---

### USPLANET

**Description:** Configures parameters related to US Planet barcode decoding. US Planet barcodes are used in postal services for tracking mailpieces and packages. 

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.USPLANET.enable (boolean initialStatus)

**Description:** Enables or disables the US Planet symbology decoding based on the input boolean parameter.	

**Parameters:**
- **initialStatus -** Boolean to enable (true) or disable (false) the symbology. Default: false.

#### isReportCheckDigit()

        boolean BarcodeDecoder.Settings.Symbology.USPLANET.isReportCheckDigit()

**Description:** Checks if the “Report Check Digit” parameter is enabled, which determines whether the check digit is included in the transmitted data for US Planet barcodes.

**Return Value:** Boolean:
- **true -** Report Check Digit is enabled 
- **false  -** Report Check Digit is disabled 

#### setReportCheckDigit(boolean reportCheckDigit)

        void BarcodeDecoder.Settings.Symbology.USPLANET.setReportCheckDigit(boolean ReportCheckDigit())

**Description:** Enables or disables the “Report Check Digit” parameter for US Planet barcodes, determining whether the check digit is included in the transmitted data.

**Parameters:**
- **reportCheckDigit:** A boolean indicating whether to enable (true) or disable (false) the check digit parameter for US Planet barcodes. Default: true.

---

### USPOSTNET

**Description:** Configures parameters related to US Postnet barcode decoding. US Postnet barcodes are commonly used in postal services to encode ZIP codes and delivery points.

#### enable(boolean initialStatus)

        void BarcodeDecoder.Settings.Symbology.USPOSTNET.enable(boolean initialStatus)

**Description:** Enables or disables the US Postnet symbology decoding based on the input boolean parameter.	

**Parameters:**
- **initialStatus -** Boolean to enable (true) or disable (false) the symbology. Default: false.

#### isReportCheckDigit()

        boolean BarcodeDecoder.Settings.Symbology.USPOSTNET.isReportCheckDigit()

**Description:** Checks if the “Report Check Digit” parameter is enabled, which determines whether the check digit is included in the transmitted data.	

**Return Value:** Boolean:
- **true -** Report Check Digit is enabled
- **false -** Report Check Digit is disabled

#### setReportCheckDigit(boolean reportCheckDigit)

        void BarcodeDecoder.Settings.Symbology.USPOSTNET.setReportCheckDigit(boolean reportCheckDigit)

**Description:** Enables or disables the “Report Check Digit” parameter, which determines whether the check digit is included in the transmitted data.

**Parameters:**
- **reportCheckDigit:** A boolean indicating whether to enable (true) or disable (false) the check digit parameter. Default: false.

---

## Sample App

Consult the following sample apps:
* [Barcode Sample App](https://github.com/zebratechnologies/Zebra_AISuite_SDK_Sample_Apps/tree/main/Barcode_Sample_app) - Demonstrates how to [localize](../localizer/) and decode barcodes in images, with options to adjust settings for model input size, inferencer options, and symbology preferences.

* [Product Recognition Sample App](https://github.com/zebratechnologies/Zebra_AISuite_SDK_Sample_Apps/tree/main/ProductRecognition_Sample_app) - Demonstrates how to detect and [recognize](../productrecognition/) products in images, with configurable settings for model input size, inferencer options, and detection accuracy for different object types.

---

Related Guides:

- [About](../about/)
- [Setup](../setup/)
- [Localizer](../localizer/)
- [Product Recognition](../productrecognition/)
  - [Feature Extractor](../productrecognition/#featureextractor)
  - [Feature Storage](../productrecognition/#featurestorage)
  - [Recognizer](../productrecognition/#recognizer)
- [Text OCR](../textocr/)
