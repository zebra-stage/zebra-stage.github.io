---
title: Setup
layout: guide.html
product: AI Data Capture SDK
productversion: "4.1"
---

## Overview

This document discusses the process for setting up Android Studio to work with AI Data Capture SDK. The SDK and its models for various use cases are distributed as AAR libraries, which can be integrated into your Android Studio project via Gradle or manually. These libraries are available through Zebra's official [Maven repository](https://zebratech.jfrog.io/ui/packages).

---

## Requirements

- **Supported Zebra Devices:**
    <table class="facelift" align="" style="width:95%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
        <th>Features</th>
        <th>Platform</th>
        <th>Android Version</th>
        <th>Device Model</th>
    </tr>

    <tr>
        <td rowspan="4"><b>Products with DSP</b> <br />Fastest and most battery efficient</td>
        <td>QC6490</td>
        <td>Android 14</td>
        <td>TC53, TC58, TC73, TC78, ET60, ET65 </td>
    </tr>

    <tr>
        <td>QC6490</td>
        <td>Android 13</td>
        <td>TC58, TC78</td>
    </tr>

    <tr>
        <td>QC5430</td>
        <td>Android 14</td>
        <td>EM45</td>
    </tr>
    
    <tr>
        <td>Q-6690</td>
        <td>Android 15</td>
        <td>TC501, TC701</td>
    </tr>

    </table>

  For more information on devices based on platform, see [Zebra Platform Devices](https://support.zebra.com/article/000022440).

- **Android Project:** Target SDK version 34 (Android 14) or higher
- **Development Tools:** Latest version of Android Studio
- **Memory Requirements:** Since running multiple on-device models concurrently is highly resource-intensive, using multiple models within the AI Data Capture SDK is recommended for high-memory devices only.
- **Licensing Information:** The AI Data Capture SDK is free for perpetual use on Zebra mobile computers. Certain AI models require a purchased license, see the [Licensing](../license/) documentation.

<!--
- `IMPORTANT NOTE:` The current SDK version is available with a complimentary, unlicensed period and is scheduled to deactivate by the end of 2025. An updated version with enhanced features, including both free and paid licensed components, will be introduced later this year to replace this version. -->

---

## Performance Optimization

**Hardware Acceleration for AI Models -** AI vision model inference speed is significantly accelerated by specialized processing blocks (NPUs) included in premium Qualcomm mobile computing chips. Zebra mobile computers equipped with Qualcomm 6 series and 5 series chips feature NPUs, enabling significantly faster AI model performance compared to devices using Qualcomm 4 series chips.

To estimate performance for a specific use case, users can try the AI Demo Applications available through the Zebra Showcase App, which is pre-loaded on Zebra devices.

---

## Features & Models

The table below lists the SDK features along with their associated model names and latest versions required for setup. The model name and related information can be obtained by invoking methods from the [AIVisionSDK](../class/aivisionsdk/) class. Zebra strongly recommends updating to the latest models.

<table class="facelift" align="" style="width:80%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Features</th>
    <th>Model Name</th>
    <th>Model Versions</th>
  </tr>

  <tr>
    <td><a href="../model/barcode-localizer/">Barcode Decoder</a></td>
    <td>barcode-decoder</td>
    <td>5.0.3</td>
  </tr>

  <tr>
    <td><a href="../model/prod-recognizer/">Product Recognizer</a></td>
    <td>product-and-shelf-recognizer</td>
    <td>3.4.4</td>
  </tr>

  <tr>
    <td><a href="../model/prod-recognizer/">Shelf and Product Localizer</a></td>
    <td>product-and-shelf-recognizer</td>
    <td>3.4.4</td>
  </tr>

  <tr>
    <td><a href="../model/textocr/">TextOCR</a></td>
    <td>text-ocr-recognizer</td>
    <td>2.9.0</td>
  </tr>

  <tr>
    <td><a href="../imageattributes/">Image Attributes Detector</a></td>
    <td>image-attributes-proof-of-delivery</td>
    <td>2.3.3</td>
  </tr>

  <tr>
    <td><a href="../imagetransform/">Image Transform Detector</a></td>
    <td>barcode-decoder<br /><br />text-ocr-recognizer<br /><br />FCN-ResNet50-object-segmentation</td>
    <td>5.0.3<br /><br />2.8.1<br /><br />1.0.3</td>
  </tr>

  <tr>
    <td><a href="../model/warehouse-localizer">Pallet and Box Localizer</a></td>
    <td>pallet-and-box-localizer</td>
    <td>1.0.5</td>
  </tr>

</table>

---

## Setup SDK

Integrate the AI Data Capture SDK and models into an Android project by using either the Gradle or manual method. Models can be included as a bundle with the application or loaded independently. After integration, develop application logic for functionalities such as [localization](../localizer/), [recognition](../productrecognition/), [barcode decoding](../barcodedecoder/), or [text OCR](../textocr/).

For effective use of the AI Data Capture SDK, models can be loaded independently from the application ([Method 1](#method1loadmodelsindependently)). Alternatively, they can be bundled with the application using Gradle ([Method 2](#method2usegradle))or manual integration ([Method 3](#method3manual)). Choose the approach that best fits your needs and follow the corresponding method below.

---

### Method 1: Load Models Independently

Procedure for deploying models independently:

1.  **Configure the Application to Access the Model:** Program the application to retrieve the model from a designated public folder. Instead of `/data/local/tmp` used in the sample below, it may be replaced by any application-accessible location on the device. Sample code:

        // Define the model file path and name.
        String modelFilePath = "/data/local/tmp/barcode-decoder-5.0.3.aar"; // Path to the model file

        File modelFile = new File(modelFilePath); // modelFile represents the model File object

        // Create a BarcodeDecoder Settings object using the specified model file object
        BarcodeDecoder.Settings locSettings = new BarcodeDecoder.Settings(modelFile);

        // For TextOCR, create TextOCR Settings object using defined model file object.
        TextOCR.Settings textOCRSettings = new TextOCR.Settings(modelFile);

2.  **Deploy the Models to the Specified Folder:** Transfer models to the configured folder using Android Debug Bridge (adb) or Enterprise Mobility Management (EMM) tools. To push the model to the public folder on the device using adb:

        adb push barcode_decoder-5.0.3.aar /data/local/tmp/

3.  **Application Accesses the Model Upon Launch:** Upon launching, the application automatically accesses the model from the folder where it was deployed. Ensure the application is configured to correctly locate and utilize the model from this designated path.

---

### Method 2: Use Gradle

Follow these steps to include the SDK and models to your Android Studio project through Gradle:

1.  **Prepare the AndroidManifest.xml:** Grant the necessary permissions for camera access.
2.  **Update Gradle Settings:** Open the application's version catalog file (`libs.versions.toml`) and add definitions for the SDK and model. Specify the desired model version as needed:
    - Define SDK and model versions, for example:

            aiSdkVersion = "4.0.1"
            barcodeDecoder = "5.0.3"

    - Add the following in the `[libraries]` section. Refer to the [Features & Models](#featuresmodels) section for the model name to use for "name."

            [libraries]
            …
            ai-sdk-version = {group ="com.zebra.ai.sdk.vision", name="AI-Data-Capture-SDK", version.ref ="aiSdkVersion"}
            barcode-decoder = {group ="com.zebra.ai.models.vision", name="barcode-decoder", version.ref =" barcodeDecoder"}

      **Note:** The "version.ref" field must match the variable defined in the previous step.

3.  **Add Dependencies:** In the app-level gradle file (`build.gradle.kts`), add the dependencies for the SDK and model:

            dependencies{
                ……
                implementation(libs.ai-sdk-version) { artifact { type ="aar" } }
                implementation(libs.barcode-decoder) { artifact { type ="aar" } }
            }

    **Note:** The string following "libs." must match the variable defined in the [libraries] section from the previous step.

4.  **Configure Gradle for No Compression:** Ensure Gradle does not compress `.TAR` and `TAR.CRYPT` extensions:

        android{
            …
            androidResources {
                    noCompress.add("tar")
                    noCompress.add("tar.crypt")
           }
        }

5.  **Enter Maven Settings:** In the `settings.gradle.kts` file, provide the maven URL as follows:

        maven {
            url = uri("https://zebratech.jfrog.io/artifactory/emc-mvn-ext")
        }

6.  **Sync Project:** Synchronize the Android Studio project to ensure the models defined in the Gradle file are integrated into the workspace.
7.  **Include SDK Packages:** Open Java project files (e.g., `MainActivity.java`) and incorporate the AI Data Capture SDK packages.

---

### Method 3: Manual

Follow these steps to manually include the SDK and models to your Android Studio project:

1. Download the SDK and model `.AAR` files from Zebra's official [Maven repository](https://zebratech.jfrog.io/ui/repos/tree/General/emc-mvn-ext/com/zebra/ai).
2. In Android Studio, create a "libs" folder within the `app/` folder.
3. Copy the `.AAR` files into the "libs" folder.
4. Synchronize the project with the Gradle files.

---

### Method 4: Google Play Store

For developers utilizing the SDK to create applications intended for distribution via the Google Play Store, Zebra recommends to adopt Play Asset Delivery for asset management. Follow the steps below, then reference Android's official _Integrate Asset Delivery_ guide.

1.  **Download the Model `.AAR`:** Obtain the required download model package (`.AAR` file) from Artifactory based on the model in use. Refer to the [Features & Models table](../setup/#featuresmodels) to access the download package. For example, `barcode-decoder-5.0.3.aar`.
2.  **Extract the `.AAR` and Locate the Model Folder:**
    Extract the contents of the downloaded `.AAR` file. Navigate to the `assets` directory within the extracted files and locate the relevant model folder (e.g., barcode-decoder). For example:

            assets/
            └── barcode-decoder/

3.  **Create the Asset Pack Directory:** In the Android project, create a new asset pack directory (e.g., asset_pack_name) at the same directory level as the main `app` module.
4.  **Set Up the Asset Pack Folder Structure:** Within the new asset pack directory, create the following folder structure and place the extracted model folder inside `src/main/assets`. For example:

        asset_pack_name/
        └── src/
            └── main/
                └── assets/
                    └── barcode-decoder/
                        └── barcode-decoder-v5.0.3.tar.crypt

5.  **Complete the Remaining Integration:** For all subsequent steps, such as modifying the `build.gradle` file and implementing the code to request the asset pack, consult the official Android **Play Asset Delivery** documentation titled _Integrate asset delivery (Kotlin and Java),_ beginning at step 3.

<!--  https://developer.android.com/guide/playcore/asset-delivery/integrate-java -->

---

## Related Guides

- [About](../about/)
- [Localizer](../localizer/)
  - Models: [Barcode](../model/barcode-localizer/), [Product & Shelf](../model/prod-recognizer/)
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
