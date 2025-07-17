---
title: Invalid Input Exception
layout: guide.html
product: AI Data Capture SDK
productversion: ""
---

## Overview

The `InvalidInputException` class is designed to handle errors related to invalid inputs in the AI Data Capture SDK. It extends the standard Java Exception class, providing a mechanism to capture and manage situations where input data is deemed inappropriate or incorrect according to the system’s requirements.

---

## APIs

### InvalidInputException()

        InvalidInputException.InvalidInputException()

**Description:** Default constructor for the `InvalidInputException` class. This constructor initializes the exception without any specific error message. It is useful in scenarios where a generic exception is sufficient to indicate an invalid input error.

### InvalidInputException (String message)

        InvalidInputException.InvalidInputException	(String	message)

**Description:** This constructor allows for the creation of an `InvalidInputException` with a specific error message. This is particularly helpful for debugging and logging purposes, as it provides more context about the error condition.

**Parameters:**

- **String message -** A descriptive message providing details about the invalid input.

---

Related Guides:

- [About](../about/)
- [Setup](../setup/)
- [Localizer](../localizer/)
- [Product Recognition](../productrecognition/)
  - [Feature Extractor](../productrecognition/#featureextractor)
  - [Feature Storage](../productrecognition/#featurestorage)
  - [Recognizer](../productrecognition/#recognizer)
- [Barcode Decoder](../barcodedecoder/)
- [TextOCR](../textocr/)
