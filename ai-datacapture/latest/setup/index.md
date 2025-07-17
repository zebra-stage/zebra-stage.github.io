---
title: Setup
layout: guide.html
product: AI Data Capture SDK
productversion: ""
---

## Overview

This document discusses the process for setting up Android Studio to work with AI Data Capture SDK. The SDK and its models for various use cases are distributed as AAR libraries, which can be integrated into your Android Studio project via Gradle or manually. These libraries are available through Zebra's official [Maven repository](https://zebratech.jfrog.io/ui/packages).

---

## Requirements

- Zebra QC6490 or QC4490 mobile computer running Android 14 or higher; for information on relevant device models, see [Zebra Platform Devices](https://supportcommunity.zebra.com/s/article/000022440?language=en_US)<!--  For supported device models, see the [Zebra Support Portal](https://www.zebra.com/us/en/support-downloads/software.html). -->
- Android project targeting SDK version 34 (Android 14) or higher
- Latest version of Android Studio installed

<!-- 
- `IMPORTANT NOTE:` The current SDK version is available with a complimentary, unlicensed period and is scheduled to deactivate by the end of 2025. An updated version with enhanced features, including both free and paid licensed components, will be introduced later this year to replace this version. -->

---

## Features & Models

The table below lists the SDK features along with their associated model names and versions required for setup. The model name and related information can be obtained by invoking methods from the [AIVisionSDK](../class/aivisionsdk/) class.

<table class="facelift" align="" style="width:60%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Features</th>
    <th>Model Name</th>
    <th>Model Version</th>
  </tr>

  <tr>
    <td>Barcode Decoder</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>Barcode Localizer</td>
    <td>barcode-localizer</td>
    <td>4.0.0</td>
  </tr>

  <tr>
    <td>Product Recognizer</td>
    <td>product-recognition-bundle</td>
    <td>3.3.0</td>
  </tr>

  <tr>
    <td>Shelf and Product Localizer</td>
    <td>product-recognition-bundle</td>
    <td>3.3.0</td>
  </tr>

  <tr>
    <td>TextOCR</td>
    <td>ocr</td>
    <td>2.6.0</td>
  </tr>

</table>

**Note:** No model is required for Barcode Decoder.

---

## Setup SDK

The AI Data Capture SDK and models can be integrated into an Android project either through Gradle or manually.

Once the SDK and models are added, you can proceed to develop application logic for [localization](../localizer/), [recognition](../productrecognition/), [barcode decoding](../barcodedecoder/), or [text OCR](../textocr/).


---
### Method 1: Load Models Independently

To use the AI Data Capture SDK effectively, models can be loaded independently from the application, rather than bundling them with the application as described in "Method 2: Use Gredle" and "Method 3: Manual." This approach allows for flexibility in deploying models.

Procedure for Deploying Models Independently:

1. **Configure the Application to Access the Model:** Program the application to retrieve the model from a designated public folder. For example:

        // Define the model file path and name.
        String modelFilePath = "/data/local/tmp/barcode_localizer.tar.crypt"; // Path to the model file
        String modelFileName = "localizer"; // Name of the model

        // Create a Localizer Settings object using the specified model file path and name.
        Localizer.Settings locSettings = new Localizer.Settings(modelFilePath, modelFileName);

2. **Deploy the Models to the Specified Folder:** Transfer models to the configured folder using adb (Android Debug Bridge) or Enterprise Mobility Management (EMM) tools. To push the model to the public folder on the device using aadb:
        
        adb push barcode_localizer.tar.crypt /data/local/tmp/

3. **Application Accesses the Model Upon Launch:** Upon launching, the application automatically accesses the model from the folder where it was deployed. Ensure the application is configured to correctly locate and utilize the model from this designated path.

---

### Method 2: Use Gradle

Follow these steps to include the SDK and models to your Android Studio project through Gradle:

1.  **Prepare the AndroidManifest.xml:** Grant the necessary permissions for camera access and set the attribute `extractNativeLibs` to true:

        <application android:extractNativeLibs="true"/>

2.  **Update Gradle Settings:** Open the application's version catalog file (`libs.versions.toml`) and add definitions for the SDK and model. Specify the desired model version as needed:

    - Define SDK and model versions, for example:

            aiSdkVersion = "2.22.8"
            localizerVersion = "3.1.0"

      **Note:** Replace "localizerVersion" with the desired model and version.

    - Add the following in the `[libraries]` section. Refer to the [Features & Models](#featuresmodels) section for the model name to use for "name."

            [libraries]
            …
            ai-sdk-version = {group ="com.zebra.ai.vision", name="Zebra-AI-Vision-SDK", version.ref ="aiSdkVersion"}
            barcode-localizer = { group ="com.zebra.ai.models", name="barcode-localizer", version.ref ="localizerVersion"}

      **Note:** The "version.ref" field must match the variable defined in the previous step.

3.  **Add Dependencies:** In the app-level gradle file (`build.gradle.kts`), add the dependencies for the SDK and model:

            dependencies{
                ……
                implementation(libs.ai-sdk-version) { artifact { type ="aar" } }
                implementation(libs.barcode-localizer) { artifact { type ="aar" } }
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
            url = uri("https://zebratech.jfrog.io/ui/packages")
        }

6.  **Sync Project:** Synchronize the Android Studio project to ensure the models defined in the Gradle file are integrated into the workspace.
7.  **Include SDK Packages:** Open Java project files (e.g., `MainActivity.java`) and incorporate the AI Data Capture SDK packages.

<!-- 
---

#### Generate Artifactory Token

Follow these steps to generate an identity token from JFrog:

1. In Zebra's [Maven repository](https://zebratech.jfrog.io/ui/packages), click on **Log in.**
   <img alt="image" style="height:400px"  src="./jfrog-login.png" />
2. Click on **SAML SSO** and login with your SSO credentials.
   <img alt="image" style="height:400px"  src="./jfrog-welcome.png" />
3. From the Jfrog Platform screen, access the user menu and click on **Edit Profile.**
   <img alt="image" style="height:400px"  src="./jfrog-edit-profile.png" />
4. Click **Generate an Identity Token.**
   <img alt="image" style="height:400px"  src="./jfrog-generate-token.png" />
5. Add a description, then click **Next.**
   <img alt="image" style="height:400px"  src="./jfrog-token-desciption.png" />
6. Copy the **Reference Token** and save it. Use this token in the password field for Maven credentials.
   <img alt="image" style="height:400px"  src="./jfrog-token.png" />

   **Note:** Once this window is closed, the same token cannot be viewed again, but a new token can be generated.
-->
---

### Method 3: Manual

Follow these steps to manually include the SDK and models to your Android Studio project:

1. Download the SDK and model `.AAR` files from Zebra's official [Maven repository](https://zebratech.jfrog.io/ui/packages).
2. In Android Studio, create a "libs" folder within the `app/` folder.
3. Copy the `.AAR` files into the "libs" folder.
4. Synchronize the project with the Gradle files.

---

Related Guides:

- [About](../about/)
- [Localizer](../localizer/)
- [Product Recognition](../productrecognition/)
  - [Feature Extractor](../productrecognition/#featureextractor)
  - [Feature Storage](../productrecognition/#featurestorage)
  - [Recognizer](../productrecognition/#recognizer)
- [Barcode Decoder](../barcodedecoder/)
- [Text OCR](../textocr/)
