---
title: Entity
layout: guide.html
product: AI Data Capture SDK
productversion: "4.1"
---

## Overview

The `Entity` interface represents a generic trackable entity within the AI Data Capture SDK. It defines the methods required for any trackable entity, including retrieving bounding box data, and performing equality checks.Implementations of this interface represent specific types of entities that can be detected and tracked by the vision system.

Use Case:

- **Object Detection -** Implementing Entity for objects detected in images to track their position and maintain metadata.

---

## Methods

### getBoundingBox()

        Rect Entity.Rect()

Retrieves the rectangular bounding box of the entity in pixel coordinates, providing a complete enclosure of the detected entity within an image. The bounding box is defined by its left, top, right, and bottom boundaries in absolute pixel coordinates relative to the original image dimensions. This information is valuable for quick collision detection, cropping operations, UI overlay positioning, and spatial analysis.

**Return Value:**
Returns a `Rect` object representing the bounding box in pixel coordinates, or `null` if no bounding box is available.

**NOTE:**
The `Rect` class is essential for graphical operations in Android, allowing developers to define and manipulate rectangular areas within an application’s UI or during drawing operations. The `android.graphics.Rect` is a class that represents a rectangle in a 2D coordinate system, defined by the coordinates of its top-left and bottom-right corners. It is extensively used for defining drawing boundaries, hit areas, and layout regions in Android applications. `Rect` holds four integer coordinates that define its edges (left, top, right bottom), which can be accessed directly. Use the `width()` and `height()` methods to retrieve the rectangle's width and height.

<br />

### getCorners()

        List<Point>	getCorners();

Retrieves the corner points of the entity’s bounding box in pixel coordinates. This method returns a list of corner points that define the boundary of the detected entity within the image. The corners are typically returned in clockwise order starting from the top-left corner, with coordinates in absolute pixel values relative to the original image dimensions.

**NOTE:** `android.graphics.Point` is a fundamental Android class representing a 2D point with integer coordinates (x, y). The class provides direct access to x and y attributes, along with utility methods like `set(int x, int y)` for updating coordinates and `equals(Object obj)` for comparison.

**Return Value:**
Returns a list of Point objects representing the corner coordinates in pixels, or an empty list if no corners are available.

<br />

### equals(Object obj)

        boolean	Entity.equals(Object obj)

Compares this entity with another entity for equality. This method compares the current entity with another entity of the same type, based on criteria specific to the implementation.

**Parameters:**

- `obj` - The entity to compare with the current entity.

**Return Value:**

- `true` - The entities are considered equal based on implementation-specific criteria
- `false` - The entities are not considered equal based on implementation-specific criteria.

<br />

### hashCode()

        int Entity.hashCode()

Returns the hash code of the trackable object. This method returns the hash code of the trackable object, which is used in hash-based collections. It must be consistent with the `equals(Object)` method to ensure proper behavior when entities are stored in hash-based collections.

**Return Value:**
Returns the hash code of the entity as an integer.

<br />

### getAccuracy()

        float Entity.getAccuracy()

Retrieves the detection probability (accuracy) for this entity. This value typically represents the confidence or probability score associated with the detection of this entity.

**Return Value:**
Returns the probability or confidence value for this entity as a float.

---

## DetectionEntity Class

The `DetectionEntity` class is the base type for every detected object in the AI Data Capture SDK. This includes [BarcodeEntity](#barcodeentityclass), [LocalizerEntity](#localizerentityclass), [ParagraphEntity](#paragraphentityclass), [ShelfEntity](#shelfentityclass), [LabelEntity](#labelentityclass), and [ProductEntity](#productentityclass). This class provides the standard foundation for holding bounding boxes and corner points.

**Use Cases & Capabilities:**

- **Spatial Detection Foundation:** Provides the coordinates, bounding box, and corner points needed to locate a detected region in an image frame.
- **Direct Usage:** `DetectionEntity` can be used directly when standard bounding box and corner coordinates represent the entirety of the model's output.
- **Optional Extension:** If the detection model outputs additional metadata (such as confidence scores or classification labels), developers can extend `DetectionEntity` to carry these fields and override methods like `getAccuracy()` or `transformWith(Matrix)`.

---

### Methods

#### DetectionEntity (Rect bbox, List corners)

        DetectionEntity(@NonNull Rect bbox, @Nullable List<Point> corners)

Creates a spatial entity with the given bounding box and optional corner points.

**Parameters:**

- **Rect bbox -** Bounding box in analysis-space pixel coordinates. Must not be null.
- **List&lt;Point&gt; corners -** Corner points for the detection polygon. Optional; stores an empty list if null.

**Return Value:** A new `DetectionEntity` instance.

<br />

#### getBoundingBox()

        Rect getBoundingBox()

Returns the stored axis-aligned bounding box.

**Return Value:**
A `Rect` in analysis-space when returned from inference; view-space in the result callback after transform.

<br />

#### getCorners()

        List<Point> getCorners()

Returns the stored corner points.

**Return Value:**
Returns an unmodifiable List&lt;Point&gt;, or an empty list if none were provided.

<br />

#### getAccuracy()

        float getAccuracy()

Returns the detection confidence score.

**Return Value:**
Returns a float value. Default is `0.0f`; override in subclasses to return the model score.

<br />

#### transformWith(Matrix transform)

        DetectionEntity transformWith(Matrix transform)

Returns a new instance with bounding box and corners transformed by the supplied matrix. `EntityTrackerAnalyzer` calls this during coordinate remapping.

**Parameters:**

- **Matrix transform -** Coordinate transform matrix from analysis space to viewfinder display space.

**Return Value:**
Returns a new `DetectionEntity` with transformed spatial fields. Override in subclasses to preserve custom fields such as class label.

<br />

---

## BarcodeEntity Class

The `BarcodeEntity` interface represents a barcode detected within an image. It defines the structure for barcode entities, providing methods to access key barcode properties such as the raw barcode data, symbology type, label type, and detection accuracy. This interface is designed to be used within the context of barcode recognition systems, enabling developers to interact with barcode information in a structured and standardized manner.

**Use Cases:**

- **Inventory Management:** Automate inventory tracking by scanning barcodes from product images to retrieve product details.
- **Retail Checkout Systems:** Efficiently process product barcodes in point-of-sale systems, managing transactions and inventory updates.
- **Logistics and Supply Chain:** Use barcode scanning to track shipments, verify contents, and ensure accurate delivery.
- **Security and Access Control:** Enhance security systems by managing and verifying access credentials encoded in barcodes.
- **Marketing and Promotions:** Process QR codes or barcodes for promotional materials, providing links to content or special offers.

---

### Methods

#### getBoundingBox()

        Rect getBoundingBox()

Retrieves the rectangular bounding box of the barcode entity in pixel coordinates.

**Return Value:**
Returns a Rect object representing the bounding box in pixel coordinates, or null if no bounding box is available.

<br />

#### getCorners()

        List<Point> getCorners()

Retrieves the corner points of the barcode’s bounding box in pixel coordinates.

**Return Value:**
Returns a list of Point objects representing the corner coordinates in pixels, or an empty list if no corners are available.

<br />

#### equals(Object obj)

        boolean	BarcodeEntity.equals(Object obj)

Compares this barcode entity with another for equality based on value, symbology, and corners.

**Parameters:**

- `obj` - The object to compare with this `BarcodeEntity`.

**Return Value:**

- `true` - The specified object is equal to this entity.
- `false` - The specified object is not equal to this entity.

<br />

#### hashCode()

        int	BarcodeEntity.hashCode()

Generates a hash code for this barcode entity based on its value, symbology, and corners.

**Return Value:**
Returns an integer hash code for this barcode entity.

<br />

<!--
#### transformBoundingBox(Matrix transformationToTarget)

        boolean	transformBoundingBox(Matrix transformationToTarget)

Transforms the bounding box and corners of the barcode entity to a target coordinate system using the provided matrix.

**Parameters:**
`transformationToTarget` - The Matrix used for transforming the bounding box and corners.

**Return Value:**
- `true` - The transformation is successful.
- `false` - The transformation is not successful.

<br />
-->

#### getValue()

        String BarcodeEntity.getValue()

Retrieves the raw value of the barcode.

**Return Value:**
Returns the barcode’s value as a `String`.

<br />

#### getSymbology()

        int	BarcodeEntity.getSymbology()

Retrieves the symbology type of the barcode.

**Return Value:**
Returns an integer representing the barcode’s symbology type.

<br />

#### getLabel()

        String BarcodeEntity.getLabel()

Retrieves the label type or symbology of the barcode.

**Return Value:**
Returns a string representing the barcode’s label type.

<br />

#### getAccuracy()

        float BarcodeEntity.getAccuracy()

Calculates and retrieves the accuracy of the barcode detection.

**Return Value:**
Returns a float representing the accuracy of the barcode detection.

<br />

<!--
#### updateBoundingBox(Rect rect)

        boolean BarcodeEntity.updateBoundingBox(Rect rect)

Updates the bounding box of the barcode entity.

**Parameters:**
* `rect` - The new `Rect` to update to.
 
**Return Value:** `false`

<br />

#### updateAccuracy(float accuracy)

        boolean BarcodeEntity.updateAccuracy(float accuracy)

Updates the accuracy of the barcode detection.

**Parameters:**
`accuracy` - The new accuracy value for the barcode entity.

**Return Value:** `false`

<br />


#### setHash (UUID hash)

        boolean	BarcodeEntity.setHash(UUID hash)

Sets the unique hash for the barcode entity.

**Parameters:**
- `hash` - The UUID to set as the hash.

**Return Value:**
- `true` - The hash is set successfully.
- `false` - The hash is not set successfully.

<br />

#### isEmpty()

        boolean	BarcodeEntity.isEmpty()

Checks if the barcode entity has an empty value.

**Return Value:**
- `true` - The barcode value is empty.
- `false`- The barcode value is not empty.

<br />

#### updateEntity (Entity entity)

        boolean	BarcodeEntity.updateEntity(Entity entity)

Updates the current entity’s value and symbology from another entity.

**Parameters:**
`entity` - The Entity from which to update the current entity.

**Return Value:**
- `true` - The entity is successfully updated.
- `false` - The entity is not successfully updated.

<br />

#### clearEntity()

        public boolean clearEntity()

Clears the value and symbology of the barcode entity.

**Return Value:**
- `true` - The entity was cleared successfully.
- `false` - The entity was not cleared successfully.
-->

---

### Sample Code

Explanation of Code Sample:

1. **Process Image Data:** The code initiates barcode detection process by calling `barcodeDecoder.process`, which accepts `ImageData` as input and returns a list of `List<BarcodeEntity>` objects representing detected barcodes.
2. **Iterate Over Results:** The resulting list is iterated, performing operations on each entity to extract and utilize barcode data.
3. **Access Detection Confidence:** The `getAccuracy()` method is called to retrieve the confidence level of the barcode detection, providing insights into detection reliability.
4. **Check Equality and Hash Code:** The code demonstrates how to check equality between entities and retrieve their hash codes using `equals()` and `hashCode()`, respectively. Note that `equals()` requires a parameter of the same type for comparison.
5. **Access Bounding Box:** The `getBoundingBox()` method obtains the dimensions of the barcode within the image.
6. **Type Cast to BarcodeEntity:** The entity is type-casted to `BarcodeEntity` to access barcode-specific methods like `getValue()` and `getSymbology()`, which are essential for barcode data extraction.
7. **Access Barcode Data:** The `getBarcodes()` method retrieves the barcodes decoded inside the label’s region.

**Sample Code:**

        List<BarcodeEntity> resultList = barcodeDecoder.process(ImageData.fromImageProxy(image));

        for (BarcodeEntity entity:resultList) {
            // Access detection confidence
            float confidence = entity.getAccuracy();

            // Check equality (method requires a parameter, here it's assumed another entity for comparison)
            boolean isEqual = entity.equals(); // Note: Correct usage requires passing another entity

            // Retrieve hash code
            int hashcode = entity.hashCode();

            // Access bounding box
            BoundingBox boundingBox = entity.getBoundingBox();

            // Type cast Entity to BarcodeEntity for specific operations
            BarcodeEntity barcodeentity = (BarcodeEntity)entity;

            // Access barcode-specific data
            String value = barcodeentity.getvalue();
            Int symbology = barcodeentity.getSymbology();
            String label_type = barcodeentity.getLabel();
        }

---

## LocalizerEntity Class

The `LocalizerEntity` class represents an entity detected by a [Localizer](../localizer/), encapsulating details such as the object’s bounding box and its location within the image. This class offers methods for accessing and updating bounding box information, managing custom user data, and performing equality checks. It implements both the `LocalizerEntity` and `MutableEntity` interfaces.

**Use Cases:**

- **Object Detection and Classification:** Detect and classify objects within images, providing precise location and category information for each detected entity.
- **Augmented Reality Applications:** Anchor digital content to real-world objects based on their location and classification in AR systems.
- **Robotics and Navigation:** Enable robots to navigate and interact with their environment by recognizing and classifying objects.
- **Security and Surveillance:** Monitor and track objects of interest in security systems to enhance threat detection and response capabilities.
- **Retail and Inventory Management:** Automate the identification and location of products within a store or warehouse for inventory tracking and management.

---

### Methods

#### getBoundingBox()

        Rect LocalizerEntity.getBoundingBox()

Retrieves the rectangular bounding box of the entity in pixel coordinates. This method returns a rectangle that completely encloses the detected entity within the image.

**Return Value:**
Returns a Rect object representing the bounding box in pixel coordinates, or null if no bounding box is available.

<br />

#### getCorners()

        List<Point>	LocalizerEntity.getCorners()

Retrieves the corner points of the entity’s bounding box in pixel coordinates. The corners are returned in a list, typically in clockwise order starting from the top-left corner.

**Return Value:**
Returns a list of Point objects representing the corner coordinates in pixels, or an empty list if no corners are available.

<br />

#### equals(Object obj)

        boolean	LocalizerEntity.equals(Object obj)

Compares this entity with another object for equality. This method considers two entities equal if their bounding box data, probability, and class ID match.

**Parameters:**
`obj` - The object to compare with this LocalizerEntity.

**Return Value:**

- `true` - The specified object is equal to this entity.
- `false` - The specified object is not equal to this entity.

<br />

#### hashCode()

        int	LocalizerEntity.hashCode()

Returns a hash code value for this entity. The hash code is based on the bounding box, probability, and class ID.

**Return Value:**
Returns an integer hash code for this entity.

<br />

#### getAccuracy()

        float LocalizerEntity.getAccuracy()

Retrieves the detection probability (accuracy) for this entity.

**Return Value:**
Returns the probability value as a float.

<br />

#### getClassId()

        int LocalizerEntity.getClassId()

Retrieves the class ID for this entity.

**Return Value:**
Returns the class ID as an integer.

<br />

<!--
#### updateBoundingBox(Rect rect)

        boolean	LocalizerEntity.updateBoundingBox(Rect rect)

Updates the current bounding box with a new one.

**Parameters:**
`rect` - The new Rect to update the bounding box to.

**Return Value:**
- `true` - The bounding box was updated.
- `false` - The bounding box was not updated.

<br />

#### updateAccuracy(float accuracy)

        boolean	LocalizerEntity.updateAccuracy(float accuracy)

Updates the accuracy of the entity.

**Parameters:**
`accuracy` - The new accuracy value.

**Return Value:** `false`

<br />

#### calcBoundingBoxArea()

        float LocalizerEntity.calcBoundingBoxArea()

Calculates the area of the bounding box.

**Return Value:**
Returns the area of the bounding box as a float, or `-1` if the bounding box is invalid.

<br />

#### isEmpty()

        boolean	LocalizerEntity.isEmpty()

Checks if the bounding box area is zero or negative, indicating an invalid or empty entity.

**Return Value:**
- `true` - The bounding box area is less than or equal to zero.
- `false` - The bounding box area is greater than zero.

<br />

#### updateEntity(Entity entity)

        boolean	LocalizerEntity.updateEntity(Entity entity)

Updates the current entity with values from another entity.

**Parameters:**
`entity` - This parameter is used to update the current entity.

**Return Value:**
- `true` - The entity is successfully updated.
- `false` - The entity is not successfully updated.

<br />

#### clearEntity()

        boolean	clearEntity()

Clears the entity’s data. Currently a placeholder that always returns true.

**Return Value:** `true`

<br />

#### setHash(UUID hash)

        boolean LocalizerEntity.setHash(UUID hash)

Sets a unique hash identifier for the entity.

**Parameters:**
`hash` - The UUID to set as the hash.

**Return Value:**
- `true` - The hash is set successfully.

<br />
-->

---

### Sample Code

**Explanation of Code Sample:**

1. **Process Image Data:** The code processes an image with the `localizer.process()` method, which accepts `ImageData` as input and returns a list of `Entity<LocalizerEntity>` objects.
2. **Iterate Over Results:** The resulting list is iterated over, and various operations are performed on each entity to extract and utilize localization data.
3. **Access Detection Confidence:** The `getAccuracy()` method is called to obtain the confidence level of the detection, offering insights into the reliability of the localization.
4. **Check Equality and Hash Code:** The code demonstrates how to check equality between entities and retrieve their hash codes using `equals()` and `hashCode()`, respectively. Note that `equals()` requires a parameter of the same type for comparison.
5. **Access Bounding Box:** The `getBoundingBox()` method is used to obtain the spatial location and dimensions of the localized entity within the image.
6. **Type Cast to LocalizerEntity:** The entity is type-cast to `LocalizerEntity` to access specific methods like `getAccuracy()` and `getClassId()`, which are essential for extracting localization data.
7. **Access Localizer Data:** Localizer-specific information such as detection confidence and class ID is accessed for further processing or classification.

**Sample Code:**

        List<LocalizerEntity> resultList = localizer.process(ImageData.fromImageProxy(image));

        for (LocalizerEntity entity: resultList) {
            // Access detection confidence
            float confidence = entity.getAccuracy();

            // Check equality (method requires a parameter, here it's assumed another entity for comparison)
            boolean isEqual = entity.equals(); // Note: Correct usage requires passing another entity

            // Retrieve hash code
            int hashcode = entity.hashCode();

            // Access bounding box
            BoundingBox boundingBox = entity.getBoundingBox();

            //Access probability of barcode
            float value = entity.getAccuracy();

            // Typecast Entity to LocalizerEntity for specific operations
            LocalizerEntity localizerentity = (LocalizerEntity)entity;

            // Access barcode-specific data
            Int getClassId = localizerentity.getClassId();
        }

---

## ParagraphEntity Class

The `ParagraphEntity` class represents a paragraph of text detected in an image. It encapsulates information about a detected text paragraph, including its bounding box and component lines. The class provides access to the individual line entities that make up the paragraph.

**Use Cases:**

- **Document Digitization:** Digitize and analyze printed or handwritten documents, extracting structured text information for digital storage or processing.
- **Content Management Systems:** Automate the organization and indexing of text from scanned documents in content management applications.
- **Text Analysis and Summarization:** Analyze and summarize text content, facilitating tasks such as data extraction, summarization, and sentiment analysis.
- **Optical Character Recognition (OCR):** Enhance text recognition accuracy in OCR systems by leveraging structured paragraph data.
- **Educational Tools:** Assist in reading comprehension and analysis in educational software, providing tools for students to interact with text in images.

---

### Methods

#### getBoundingBox()

        Rect ParagraphEntity.getBoundingBox()

Retrieves the rectangular bounding box of the paragraph entity in pixel coordinates. This method returns a rectangle that completely encloses the detected entity within the image.

**Return Value:**
Returns a Rect object representing the bounding box in pixel coordinates, or null if no bounding box is available.

<br />

#### getCorners()

        List<Point> getCorners()

Retrieves the corner points of the paragraph’s bounding box in pixel coordinates. The corners are returned in a list, typically in clockwise order starting from the top-left corner.

**Return Value:**
Returns a list of Point objects representing the corner coordinates in pixels, or an empty list if no corners are available.

<br />

#### equals(Object obj)

        boolean	ParagraphEntity.equals(Object obj)

Compares this paragraph entity with another object for equality. This method considers two entities equal if their text content, bounding box, line entities, and probability match.

**Parameters:**

- `obj` - The object to compare with this ParagraphEntity.

**Return Value:**

- `true` - The specified object is equal to this entity.
- `false` - The specified object is not equal to this entity.

<br />

#### hashCode()

        int	ParagraphEntity.hashCode()

Returns a hash code value for this text paragraph entity. The hash code is based on the text content, bounding box, line entities, and probability.

**Return Value:**
Returns an integer hash code for this entity.

<br />

<!--
#### getTextParagraph()

        Paragraph ParagraphEntity.getTextParagraph()

Retrieves the underlying Paragraph object that contains the raw paragraph data.

**Return Value:**
Returns the Paragraph object for this entity.

<br />

#### getLineEntities()

        List<Entity> ParagraphEntity.getLineEntities()

Retrieves the list of line entities that make up this text paragraph. Returns an unmodifiable list of line entities to prevent modification of the paragraph’s structure.

**Return Value:**
`List<Entity>`: Returns an unmodifiable list of line entities within the text paragraph.

<br />
-->

#### getText()

        String ParagraphEntity.getText()

Concatenates the text from all lines in the paragraph, separating each line with a line break (\n). The result is a single string representing the entire paragraph as detected in the image.

**Return Value:**
Returns a string containing the complete text of the paragraph, with lines separated by line breaks.

<br />

#### getLines()

        List<LineEntity> ParagraphEntity.getLines()

Returns an unmodifiable list of `LineEntity` objects representing the individual lines of text within this paragraph, ordered from top to bottom as they appear in the image. The returned list cannot be modified, ensuring the paragraph’s structure remains unchanged.

**Return Value:**
An unmodifiable list of line entities (`List<LineEntity>`) within the text paragraph.

<br />

#### getAccuracy()

        float ParagraphEntity.getAccuracy()

Retrieves the detection probability (accuracy) for this paragraph entity.

**Return Value:**
Returns a float value representing the detection probability.

---

### Sample Code

**Explanation of Code Sample:**

1. **Process Image Data:** Use the `textocr.process()` method to extract a `List<ParagraphEntity>` from `ImageData`, resulting in a list of detected text paragraphs.
2. **Iterate Over Results:** The resulting list is iterated through, performing operations on each `ParagraphEntity` to extract and utilize paragraph data.
3. **Access Detection Confidence:** The `getAccuracy()` method is called to retrieve the confidence level of the paragraph detection, providing insights into the reliability of the recognition.
4. **Check Equality and Hash Code:** The code demonstrates how to check equality between entities and retrieve their hash codes using `equals(Object)` and `hashCode()`. Note that `equals()` requires a parameter of the same type for comparison.
5. **Access Bounding Box:** The `getBoundingBox()` method retrieves the rectangular bounding box of the paragraph within the image.
6. **Access Paragraph Data:** Paragraph-specific information, such as the full paragraph text (`getText()`) and the list of line entities (`getLines()`), is accessed for further processing or analysis.

**Sample Code:**

        List<ParagraphEntity> resultList = textocr.process(ImageData.fromImageProxy(image)).get();
        for (ParagraphEntity entity : resultList) {

            // Access detection confidence
            float confidence = entity.getAccuracy();

            // Check equality (example: compare with another entity)
            // boolean isEqual = entity.equals(otherEntity); // Pass another ParagraphEntity or Object

            // Retrieve hash code
            int hashcode = entity.hashCode();

            // Access bounding box
            android.graphics.Rect boundingBox = entity.getBoundingBox();

            // Access paragraph-specific data
            String paragraphText = entity.getText();

            List<LineEntity> lineEntities = entity.getLines();
        }

---

## LineEntity Class

The `LineEntity` class represents a line of text detected within an image. It encapsulates information such as the line’s bounding box and its component words. This class provides methods to access the individual word entities that compose the line and allows for the storage of custom user data associated with it.

**Use Cases:**

- **Document Processing:** Extract and analyze lines of text from documents to support tasks such as indexing, searching, and archiving text data.
- **Optical Character Recognition (OCR):** Improve text recognition accuracy and deliver structured output for further processing.
- **Text Layout Analysis:** Analyze and understand text layout within documents to aid in reconstructing document structure.
- **Transcription Services:** Convert scanned text lines into editable and searchable digital text for transcription applications.
- **Language Learning Tools:** Assist learners in analyzing and understanding text lines with educational software, offering tools for language learning and comprehension.

---

### Methods

#### getBoundingBox()

        Rect LineEntity.getBoundingBox()

Retrieves the rectangular bounding box of the line entity in pixel coordinates. This method returns a rectangle that completely encloses the detected entity within the image.

**Return Value:**
Returns a `Rect` object representing the bounding box in pixel coordinates, or `null` if no bounding box is available.

<br />

#### getCorners()

        List<Point> getCorners()

Retrieves the corner points of the line’s bounding box in pixel coordinates. The corners are returned in a list, typically in clockwise order starting from the top-left corner.

**Return Value:**
Returns a list of `Point` objects representing the corner coordinates in pixels, or an empty list if no corners are available.

<br />

#### equals(Object obj)

        boolean LineEntity.equals(Object obj)

Compares this line entity with another line entity for equality. Two line entities are considered equal if their text content, bounding box, word entities, and bounding box probability are all equal.

**Parameters:**

- `obj` - The object to compare with this LineEntity.

**Return Value:**

- `true` - The specified object is equal to this entity.
- `false` - The specified object is not equal to this entity.

<br />

#### hashCode()

        int	LineEntity.hashCode()

Returns a hash code value for this text line entity. The hash code is based on the text content, bounding box, word entities, and probability.

**Return Value:**
Returns an integer hash code for this entity.

<br />

#### getText()

        String LineEntity.getText()

Returns the complete text content of the line as a single string, combining all words in the line with spaces between them. The resulting string represents the full line of text as detected in the image.

**Return Value:**
String: The text content of the line, with words separated by spaces.

<br />

#### getWords()

        List<WordEntity> LineEntity.getWords()

Returns an unmodifiable list of `WordEntity` objects representing the individual words within this line, ordered from left to right as they appear in the image. The returned list cannot be modified, ensuring the structure of the line remains unchanged.

**Return Value:**
An unmodifiable list of word entities (`List<WordEntity>`) within the line.

<br />

#### getAccuracy()

        float LineEntity.getAccuracy()

Retrieves the detection probability (accuracy) for this line entity.

**Return Value:**
Returns the probability value as a float.

---

### Sample Code

**Explanation of Code Sample:**

1. **Iterate Over Results:** The code iterates over a list of `List<LineEntity>`, where each object represents a detected line of text in the image.
2. **Access Detection Confidence:** The `getAccuracy()` method is called to retrieve the confidence level of line detection, providing insights into the reliability of the recognition.
3. **Check Equality and Hash Code:** The code demonstrates how to check equality between entities and retrieve their hash codes using `equals(Object)` and `hashCode()`. Note that `equals()` requires a parameter of the same type for comparison.
4. **Access Bounding Box:** The `getBoundingBox()` method retrieves the rectangular bounding box of the line within the image.
5. **Access Line Data:** Line-specific information, such as the text content (`getText()`) and the list of word entities (`getWords()`), is accessed for further processing or analysis.

**Sample Code:**

        for (LineEntity entity : resultList) {

            // Access detection confidence
            float confidence = entity.getAccuracy();

            // Check equality (example: compare with another entity)
            // boolean isEqual = entity.equals(otherEntity); // Pass another LineEntity or Object

            // Retrieve hash code
            int hashcode = entity.hashCode();

            // Access bounding box (returns android.graphics.Rect)
            android.graphics.Rect boundingBox = entity.getBoundingBox();

            // Access line-specific data
            String lineText = entity.getText();
            List<WordEntity> wordEntities = entity.getWords();
        }

---

## WordEntity Class

The `WordEntity` class represents a word detected within an image. It encapsulates information about a detected word, such as its bounding box and decoded text alternatives. This class allows access to the individual decoded text entities that form the word and supports the storage of custom user data linked to the word.

**Use Cases:**

- **Text Recognition and Processing:** Extract and analyze words from images, facilitating tasks such as text recognition, indexing, and searching.
- **Document Digitization:** Convert scanned documents into editable and searchable text formats within digitization workflows.
- **Optical Character Recognition (OCR):** Enhance text recognition accuracy and deliver structured word-level output in OCR systems for further processing.
- **Language Learning Applications:** Assist learners in analyzing and understanding words with educational software, providing tools for language learning and comprehension.
- **Data Extraction from Forms:** Extract text data from structured forms to enable automated data entry and processing.

---

### Methods

#### getCorners()

        List<Point>	getCorners()

Retrieves the corner points of the word’s bounding box in pixel coordinates. The corners are returned in a list, typically in clockwise order starting from the top-left corner.

**Return Value:**
Returns a list of Point objects representing the corner coordinates in pixels, or an empty list if no corners are available.

<br />

#### getBoundingBox()

        Rect WordEntity.getBoundingBox()

Retrieves the rectangular bounding box of the word entity in pixel coordinates. This method returns a rectangle that completely encloses the detected entity within the image.

**Return Value:**
Returns a `Rect` object representing the bounding box in pixel coordinates, or null if no bounding box is available.

<br />

#### equals(Object obj)

        boolean	WordEntity.equals(Object obj)

Compares this word entity with another object for equality. Two word entities are considered equal if their text content, bounding box, decoded text entities, and bounding box probability are all equal.

**Parameters:**

- `obj` - The object to compare with this WordEntity.

**Return Value:**

- `true` - The specified object is equal to this entity.
- `false` - The specified object is equal to this entity.

<br />

#### hashCode()

        int	WordEntity.hashCode()

Returns a hash code value for this word entity. The hash code is generated based on the decoded text content if available, otherwise based on the bounding box.

**Return Value:**
Returns an integer hash code for this entity.

<br />

#### getText()

        String WordEntity.getText()

Retrieves the most confident decoded text for this word. Returns the text content of the word as recognized by the OCR engine. This is typically the most likely interpretation of the word detected in the image.

**Return Value:**
The most confident decoded text for this word in String format, or an empty string if no text is available.

<br />

#### getAllPredictedText()

        DecodedText[] WordEntity.getPredictedText()

Retrieves all possible decoded text interpretations for this word, ordered by confidence. Returns an array of `DecodedText` objects, each representing a possible interpretation of the word along with its confidence score. The first element in the array is the most confident prediction.

**Return Value:**
An array (DecodedText[]) of possible decoded text interpretations for this word, ordered by confidence. Returns an empty array if no predictions are available.

<br />

#### getAccuracy()

        float WordEntity.getAccuracy()

Retrieves the detection probability (accuracy) for this word entity.

**Return Value:**
Returns the probability value as a float.

---

### Sample Code

**Explanation of Code Sample:**

1. **Iterate Over Results:** The code iterates over `List<WordEntity>`, where each object represents a detected word in the imagae.
2. **Access Detection Confidence:** The `getAccuracy()` method is invoked to retrieve the confidence level of word detection, providing insights into the reliability of the recognition.
3. **Check Equality and Hash Code:** The code demonstrates how to check equality between entities and retrieve their hash codes using `equals(Object)` and `hashCode()`. Note that `equals()` requires another object as a parameter for comparison.
4. **Access Bounding Box:** The `getBoundingBox()` method retrieves the spatial location and dimensions of the word within the image.
5. **Access Word Data:** Word-specific information, such as the recognized text (`getText()`) and all possible decoded text predictions (`getAllPredictedText()`), is accessed for further processing or analysis. <br />

 

**Sample Code:**

        for (WordEntity entity : resultList) {

            // Access detection confidence
            float confidence = entity.getAccuracy();

            // Check equality (example: compare with another entity)
            // boolean isEqual = entity.equals(otherEntity); // Pass another WordEntity or Object

            // Retrieve hash code
            int hashcode = entity.hashCode();

            // Access bounding box (returns android.graphics.Rect)
            android.graphics.Rect boundingBox = entity.getBoundingBox();

            // Access word-specific data
            String wordText = entity.getText();
            DecodedText[] decodedTexts = entity.getAllPredictedText();
        }

## <!--

## DecodedTextEntity Class

The `DecodedTextEntity` class represents a decoded text entity that encapsulates information about the text, including its content and confidence level. This class offers methods to access the raw decoded text data and allows for the storage of custom user data associated to the text entity.

**Use Cases:**

- **Text Recognition and Analysis** Extract and analyze text from images, facilitating tasks such as text recognition, indexing, and searching.
- **Document Digitization:** Convert scanned documents into editable and searchable text formats within digitization workflows.
- **Optical Character Recognition (OCR):** Improve text recognition accuracy and provide structured output for further processing in OCR systems.
- **Data Extraction:** Extract text data from forms or documents to enable automated data entry and processing.
- **Language Processing:** Store and retrieve language information or custom metadata for each decoded text entity to enhance text processing workflows.

---

### Methods

#### getBoundingBox()

        Rect DecodedTextEntity.getBoundingBox()

Retrieves the rectangular bounding box of the entity in pixel coordinates. For decoded text entities, this method always returns `null` since decoded text typically doesn’t include spatial position information.

**Return Value:**

- `Rect` - The pixel coordinates of the rectangular bounding box.
- `null` - The decoded text entities do not have bounding boxes.

<br />

#### getCorners()

        List<Point> getCorners()

Retrieves the corner points of the entity’s bounding box in pixel coordinates. For decoded text entities, this method always returns `null` since decoded text typically do not include spatial position information.

**Return Value:**
Returns `null` since decoded text entities do not have corner coordinates.

<br />

#### equals(Object obj)

        boolean	DecodedTextEntity.equals(Object obj)

Compares this text entity with another object for equality. Two decoded text entities are considered equal if their text content and confidence are equal.

Parameters:
`obj` - The object to compare with this DecodedTextEntity.

**Return Value:**

- `true` - The specified object is equal to this entity.
- `false` - The specified object is not equal to this entity.

<br />

#### hashCode()

        int	DecodedTextEntity.hashCode()

Returns a hash code value for this text entity. The hash code is generated based on the text content and confidence.

Return Value:
Returns an integer hash code for this entity.

 
<br />

#### getDecodedText()

        DecodedText DecodedTextEntity.getDecodedText()

Retrieves the underlying DecodedText object that contains the raw text data.

**Return Value:**
Returns the `DecodedText` object for this entity.

<br />

#### getAccuracy()

        float DecodedTextEntity.getAccuracy()

Retrieves the detection probability (accuracy) for this decoded text entity.

Return Value:
Returns the confidence value as a float.

<br />

#### updateBoundingBox (Rect rect)

        boolean DecodedTextEntity.updateBoundingBox(Rect rect)

Updates the bounding box for the entity. This method always returns false as decoded text entities don’t have a bounding box.

**Parameters:**
`rect` - The `Rect` that updates the bounding box.

**Return Value:** Always returns `false`.

<br />

#### updateAccuracy (float accuracy)

        boolean DecodedTextEntity.updateAccuracy(float accuracy)

Updates the accuracy (confidence) of the decoded text entity.

**Parameters:**
`accuracy` - The new confidence value to set.

**Return Value:**
Returns a boolean `true`, indicating the accuracy is successfully updates.

<br />

#### isEmpty()

        public DecodedTextEntity.boolean isEmpty()

Checks if the decoded text entity is empty, i.e., has no content and zero confidence.

**Return Value:**
Boolean:

- `true` - The confidence is less than or equal to zero and the content is empty.
- `false` - The confidence is greater than zero and the content is not empty.

<br />

#### updateEntity (Entity entity)

        boolean	DecodedTextEntity.updateEntity(Entity entity)

Updates the current entity with values from another entity.

**Parameters:**
`entity` - The current entity updated.

**Return Value:**
Boolean:

- `true` - The entity is successfully updated.
- `true` - The entity is not successfully updated.

<br />

#### clearEntity

        boolean	clearEntity()

Clears the content and confidence of the decoded text entity.

**Return Value:**
Returns `true` after clearing the entity.

<br />

#### setHash (UUID hash)

        boolean	DecodedTextEntity.setHash(UUID hash)

Sets a unique hash for this entity.

**Parameters:**

- `hash` - The UUID to set as the hash.

**Return Value:**
Returns boolean `true` when the hash is successfully set.

---

### Sample Code

**Explanation of Code Sample:**

1. **Iterate Over Results:** The code processes a list of `List<DecodedTextEntity>` objects, each representing a piece of decoded text from the image.
2. **Access Detection Confidence:** The `getAccuracy()` method retrieves the confidence level of the decoded text, offering insights into the reliability of the text extraction.
3. **Check Equality and Hash Code:** The code demonstrates how to check equality between entities and obtain their hash codes using `equals()` and `hashCode()`. Note that `equals()` requires a parameter of the same type for comparison.
4. **Access Bounding Box:** The `getBoundingBox()` method retrieves the dimensions of the decoded text within the image. However, for `DecodedTextEntity`, the bounding box may not apply, and this step could return `null`.
5. **Type Cast to DecodedTextEntity:** The entity is cast to `DecodedTextEntity` to access specific methods like `getDecodedText()`, which are essential for extracting text data.
6. **Access Decoded Text Data:** Specific information related to the decoded text is accessed, enabling further processing or analysis of the extracted text.

**Sample Code:**

        for (List<DecodedTextEntity> entity: resultList) {
            // Access detection confidence
            float confidence = entity.getAccuracy();

            // Check equality (method requires a parameter, here it's assumed another entity for comparison)
            boolean isEqual = entity. equals();// Note: Correct usage requires passing another entity

            // Retrieve hash code
            int hashcode = entity. hashcode();

            // Access bounding box
            BoundingBox boundingBox = entity. getBoundingBox();

            // Type cast Entity to DecodedTextEntity for specific operations
            DecodedTextEntity decodedtextentity = (DecodedTextEntity) entity;

            // Access decoded text-specific data
            OCR.DecodedText decodedtext = decodedtextentity. getDecodedText ()
        }

-->

---

## LabelEntity Class

The `LabelEntity` interface represents a detected label (such as a shelf label or peg label) within a retail shelf image. It provides geometric and classification information about each detected label.

**Use Cases:**

- **Retail Shelf Analysis:** Detect and localize shelf and peg labels in retail images to support planogram compliance, inventory checks, or shelf auditing.
- **Label Association:** Associate detected labels with shelves or products for downstream processing, such as linking price tags to specific products or shelf sections.
- **Label Classification:** Distinguish between different types of labels (shelf vs. peg) for targeted analytics or reporting.
- **Confidence Filtering:** Filter detected labels based on detection confidence to improve result quality or reduce false positives.

---

### Methods

#### getClassId()

        LabelEntity.ClassId LabelEntity.getClassId()

Returns the model-specific class identifier for this label, identitying it as a shelf label, peg label, or an unknown type.

**Returns:**
A ClassId enum value representing the label's classification:

<table class="facelift" align="" style="width:100%" border="1" padding="5px">
<tr bgcolor="#dce8ef">
    <th>ClassId</th>
    <th>Value</th>
    <th>Description</th>
</tr>

<tr>
    <td>SHELF_LABEL</td>
    <td>2</td>
    <td>A standard shelf label, typically found on retail shelves for displaying price or product information. </td>
</tr>

<tr>
    <td>PEG_LABEL</td>
    <td>3</td>
    <td>A label for products that hang on a peg or hook, common in pegboard displays.</td>
</tr>

<tr>
    <td>UNKNOWN</td>
    <td>-1</td>
    <td>The label type could not be determined or does not match a known label type.</td>
</tr>
</table>

<br />

#### getBoundingBox()

        Rect LabelEntity.getBoundingBox()

Retrieves the rectangular bounding box of the label entity in pixel coordinates. This method returns a rectangle that completely encloses the detected label within the image.

**Return Value:**
Returns a `Rect` object representing the bounding box in pixel coordinates, or null if no bounding box is available.

<br />

#### getCorners()

        List<Point> LabelEntity.getCorners()

Retrieves the corner points of the label’s bounding box in pixel coordinates. The corners are returned in a list, typically in clockwise order starting from the top-left corner.

**Return Value:**
Returns a list of `Point` objects representing the corner coordinates in pixels, or an empty list if no corners are available.

<br />

#### getAccuracy()

        float LabelEntity.getAccuracy()

Returns the overall recognition confidence for this product. This is typically the accuracy score of the first SKU in the list (i.e., the top prediction), or `0f` if no SKUs are available.

**Return Value:**
A float value in the range `[0.0, 1.0]` representing the confidence score for the top SKU prediction, or `0f` if no SKUs are present.

<br />

#### getBarcodes()

        List BarcodeEntity getBarcodes()

Returns the list of barcodes detected and decoded within the label's region.

**Return Value:**
A `List<BarcodeEntity>` containing the barcodes found on the label. This list is empty if barcode recognition was not enabled or if no barcodes were detected in the label region.

<br />

#### equals(Object obj)

        boolean LabelEntity.equals(Object obj)

Compares this label entity with another object for equality. The comparison is based on implementation-specific criteria, typically including bounding box, corners, accuracy, and class ID.

**Parameters:**

- `obj` - The object to compare with this LabelEntity.

**Return Value:**

- `true` - The specified object is equal to this entity.
- `false` - The specified object is not equal to this entity.

<br />

#### hashCode()

        int LabelEntity.hashCode()

Returns a hash code value for this label entity. The hash code is typically based on the bounding box, accuracy, and class ID.

**Return Value:**
Returns an integer hash code for this entity.

---

### Sample Code

**Explanation of Code Sample:** 2. **Iterate Over Results:** The code iterates over a `List<LabelEntity>`, where each object represents a detected label in the image. 3. **Access Detection Confidence:** The `getAccuracy()` method retrieves the confidence level of label detection. 4. **Check Equality and Hash Code:** The code demonstrates how to check equality between label entities using `equals(Object)` and how to retrieve their hash codes with `hashCode()`. 5. **Access Bounding Box:** The `getBoundingBox()` method retrieves the spatial location and dimensions of the label within the image. 5. **Access Corner Points:** The `getCorners()` method returns the list of corner points for the label’s bounding box. 6. **Access Label Class:** The `getClassId()` method retrieves the class identifier for the label, allowing to distinguish between shelf labels and peg labels.

**Sample Code:**

        for (LabelEntity label : labelEntities) {

            // Access detection confidence
            float confidence = label.getAccuracy();

            // Check equality (example: compare with another label)
            // boolean isEqual = label.equals(otherLabel); // Pass another LabelEntity or Object

            // Retrieve hash code
            int hashcode = label.hashCode();

            // Access bounding box (returns android.graphics.Rect)
            android.graphics.Rect boundingBox = label.getBoundingBox();

            // Access corner points (if available)
            List<Point> corners = label.getCorners();

            // Access barcodes recognized (if enabled)
            List<BarcodeEntity> barcodes = label.getBarcodes();

            // Access label-specific data: class ID
            LabelEntity.ClassId classId = label.getClassId();
            if (classId == LabelEntity.ClassId.SHELF_LABEL) {
                // Handle shelf label
            } else if (classId == LabelEntity.ClassId.PEG_LABEL) {
                // Handle peg label
            }
        }

---

## ProductEntity Class

The `ProductEntity` class represents a detected product on a shelf image. It provides access to the product’s bounding box, corner points, and optional recognition results (SKUs) with associated confidence scores. This class enables integration of product detection and recognition into retail automation workflows.

**Use Cases:**

- **Retail Product Recognition:** Identify and localize products on shelves for inventory management, planogram compliance, and automated checkout.
- **SKU Prediction and Ranking:** Retrieve the top-K SKU predictions for each detected product, enabling applications to display or process the most likely matches.
- **Product Search and Analytics:** Use the complete list of SKU predictions for advanced analytics, product search, or auditing.
- **Visual Overlay and Cropping:** Use bounding box and corner information to overlay results on images or to crop product regions for further processing.

---

### Methods

#### getTopKSKUs()

        List<SKUInfo> ProductEntity.getTopKSKUs()

Returns an unmodifiable list of [SKUInfo](../types/#skuinfo) objects representing the top-K SKU predictions for this product, ordered by confidence (highest first). The returned list cannot be modified, ensuring the recognition results remain consistent. May be null or empty if recognition is disabled or unavailable.

**Return Value:**
An unmodifiable list of top-K SKU predictions (`List<SKUInfo>`) for the product, ordered by confidence.

<br />

#### getSku()

        String ProductEntity.getSku()

Returns the SKU identifier string for the highest-confidence SKU prediction associated with this product. This is the product SKU value of the top (best) [SKUInfo](../types/#skuinfo) in the prediction list. May return an empty string if recognition is disabled or unavailable.

**Return Value:**
The SKU string for the highest-confidence prediction (String). Returns an empty string if no SKU predictions are available, recognition is disabled or unavailable, or the top prediction does not contain a SKU value.

<br />

#### getAccuracy()

        float ProductEntity.getAccuracy()

Returns the overall recognition confidence for this product. This is typically the accuracy score of the first SKU in the list (i.e., the top prediction), or `0f` if no SKUs are available.

**Return Value:**
A float value in the range `[0.0, 1.0]` representing the confidence score for the top SKU prediction, or `0f` if no SKUs are present.

<br />

#### getBoundingBox()

        Rect ProductEntity.getBoundingBox()

Retrieves the rectangular bounding box of the product entity in pixel coordinates. This method returns a rectangle that completely encloses the detected product within the image.

**Return Value:**
Returns a `Rect` object representing the bounding box in pixel coordinates, or null if no bounding box is available.

<br />

#### getCorners()

        List<Point> ProductEntity.getCorners()

Retrieves the corner points of the product’s bounding box in pixel coordinates. The corners are returned in a list, typically in clockwise order starting from the top-left corner.

**Return Value:**
Returns a list of `Point` objects representing the corner coordinates in pixels, or an empty list if no corners are available.

<br />

#### equals(Object obj)

        boolean ProductEntity.equals(Object obj)

Compares this product entity with another object for equality. The comparison is based on implementation-specific criteria, typically including bounding box, corners, and accuracy.

**Parameters:**

- `obj` - The object to compare with this ProductEntity.

**Return Value:**

- `true` - The specified object is equal to this entity.
- `false` - The specified object is not equal to this entity.

<br />

#### hashCode()

        int ProductEntity.hashCode()

Returns a hash code value for this product entity. The hash code is typically based on the bounding box, corners, and accuracy.

**Return Value:**
Returns an integer hash code for this entity.

---

### Sample Code

**Explanation of Code Sample:** 2. **Iterate Over Results:** The code iterates over a `List<ProductEntity>`, where each object represents a detected product in the image. 3. **Access Detection Confidence:** The `getAccuracy()` method retrieves the confidence level of product detection. 4. **Check Equality and Hash Code:** The code demonstrates how to check equality between product entities using `equals(Object)` and how to retrieve their hash codes with `hashCode()`. 5. **Access Bounding Box:** The `getBoundingBox()` method retrieves the spatial location and dimensions of the product within the image. 5. **Access SKU Predictions:** The `getTopKSKUs()` method retrieves the most likely SKU predictions, ordered by confidence. The `getSku()` method retrieves the SKU predictions for the product. 6. **Get SKU Data:** For each `SKUInfo`, the SKU identifier (`getProductSKU()`) and its confidence score (`getAccuracy()`) can be accessed.

**Sample Code:**

        for (ProductEntity product : productEntities) {

            // Access detection confidence (accuracy)
            float confidence = product.getAccuracy();

            // Check equality (example: compare with another product)
            // boolean isEqual = product.equals(otherProduct); // Pass another ProductEntity or Object

            // Retrieve hash code
            int hashcode = product.hashCode();

            // Access bounding box (returns android.graphics.Rect)
            android.graphics.Rect boundingBox = product.getBoundingBox();

            // Access corner points (if available)
            List<Point> corners = product.getCorners();

            // Get top-K SKU predictions (ordered by confidence)
            List<SKUInfo> topKSKUs = product.getTopKSKUs();
            if (topKSKUs != null && !topKSKUs.isEmpty()) {
                SKUInfo topSku = topKSKUs.get(0);
                String skuId = topSku.getProductSKU();
                float skuScore = topSku.getAccuracy();
                // Use topSku as needed
            }

            // Use top SKU string + overall accuracy
            String skuId = product.getSku(); // top (best) SKU
            float score = product.getAccuracy(); // accuracy for that SKU
            // Use skuId and score as needed
        }

---

## ShelfEntity Class

The `ShelfEntity` class represents a detected shelf region within an image. It encapsulates geometric and detection information about a shelf, such as its bounding box, corner points, and detection confidence. This class enables access to the spatial location of shelves in retail images and serves as a foundation for associating related entities, such as labels and products.

**Use Cases:**

- **Retail Shelf Analysis:** Detect and localize shelf regions in retail images to support planogram compliance, shelf auditing, and inventory management.
- **Product and Label Association:** Serve as a parent entity for associating detected labels and products, enabling hierarchical analysis of shelf contents.
- **Store Layout Digitization:** Digitize and map store layouts by identifying shelf positions and structures within images.
- **Automated Merchandising:** Facilitate automated shelf monitoring and merchandising solutions by providing precise shelf locations for further processing.

---

### Methods

#### getCorners()

        List<Point> ShelfEntity.getCorners()

Retrieves the corner points of the shelf’s bounding box in pixel coordinates. The corners are returned in a list, typically in clockwise order starting from the top-left corner.

**Return Value:**
Returns a list of `Point` objects representing the corner coordinates in pixels, or an empty list if no corners are available.

<br />

#### getBoundingBox()

        Rect ShelfEntity.getBoundingBox()

Retrieves the rectangular bounding box of the shelf entity in pixel coordinates. This method returns a rectangle that completely encloses the detected shelf within the image.

**Return Value:**
Returns a `Rect` object representing the bounding box in pixel coordinates, or null if no bounding box is available.

<br />

#### getAccuracy()

        float ShelfEntity.getAccuracy()

Returns the overall recognition confidence for this product. This is typically the accuracy score of the first SKU in the list (i.e., the top prediction), or `0f` if no SKUs are available.

**Return Value:**
A float value in the range `[0.0, 1.0]` representing the confidence score for the top SKU prediction, or `0f` if no SKUs are present.

<br />

#### getLabels()

        List LabelEntity getLabels()

Retrieves the list of labels that have been associated with this shelf. The association is performed by the detector, linking detected labels to their corresponding shelf.

**Return Value:** A `List<LabelEntity>` containing the associated label entities. The list is guaranteed to be non-null but may be empty if no labels are associated with this shelf.

<br />

#### getProducts()

        List ProductEntity getProducts()

Retrieves the list of products that have been associated with this shelf. The association is performed by the detector, linking detected products to the shelf they are on.

**Return Value:** A `List<ProductEntity>` containing the associated product entities. The list is guaranteed to be non-null but may be empty if no products are associated with this shelf.

<br />

#### equals(Object obj)

        boolean ShelfEntity.equals(Object obj)

Compares this shelf entity with another object for equality. The comparison is based on implementation-specific criteria, typically including bounding box, corners, and accuracy.

**Parameters:**

- `obj` - The object to compare with this ShelfEntity.

**Return Value:**

- `true` - The specified object is equal to this entity.
- `false` - The specified object is not equal to this entity.

<br />

#### hashCode()

        int ShelfEntity.hashCode()

Returns a hash code value for this shelf entity. The hash code is typically based on the bounding box, corners, and accuracy.

**Return Value:**
Returns an integer hash code for this entity.

---

### Sample Code

**Explanation of Code Sample:** 2. **Iterate Over Results:** The code iterates over a `List<ShelfEntity>`, where each object represents a detected product in the image. 3. **Access Detection Confidence:** The `getAccuracy()` method retrieves the confidence level of shelf detection. 4. **Check Equality and Hash Code:** The code demonstrates how to check equality between shelf entities using `equals(Object)` and how to retrieve their hash codes with `hashCode()`. 5. **Access Bounding Box:** The `getBoundingBox()` method retrieves the spatial location and dimensions of the shelf within the image. 5. **Access Corner Points:** The `getCorners()` method returns the list of corner points for the shelf’s bounding box. 6. **Access Labels:** The `getLabels()` method returns the list of labels associated with the shelf. 7. **Access Labels:** The `getProducts()` method returns the list of products associated with the shelf. 8. **Shelf-Specific Logic:** Additional logic can be added to process shelf-specific information or to associate shelves with related entities such as labels or products.

**Sample Code:**

        for (ShelfEntity shelf : shelfEntities) {

            // Access detection confidence
            float confidence = shelf.getAccuracy();

            // Check equality (example: compare with another shelf)
            // boolean isEqual = shelf.equals(otherShelf); // Pass another ShelfEntity or Object

            // Retrieve hash code
            int hashcode = shelf.hashCode();

            // Access bounding box (returns android.graphics.Rect)
            android.graphics.Rect boundingBox = shelf.getBoundingBox();

            // Access corner points (if available)
            List<Point> corners = shelf.getCorners();

            // Access labels assosciated to shelf
            List<LabelEntity> labels = shelf.getLabels();

            // Access products assosciated to shelf
            List<ProductEntity> products = shelf.getProducts();


            // Additional shelf-specific logic can be added here
        }

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
- [Data Types](../types/)
