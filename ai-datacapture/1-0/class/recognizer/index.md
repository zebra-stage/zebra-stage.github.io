---
title: Recognizer
layout: guide.html
product: AI Data Capture SDK
productversion: "1.0"
---

## Overview

The `Recognizer` class provides methods for recognizing patterns and making recommendations based on input descriptors. It supports operations for finding top recognitions, generating recommendations, and managing index states.

The `Recognizer` class is designed to perform recognition tasks by finding the top-k recognitions that match a set of descriptors. It supports both synchronous and asynchronous operations for retrieval of recognition results and can handle loading and saving of indices and labels for persistent storage.


## APIs

<!-- 
The following is a list of APIs supported by Recognizer.

Return Type                          |  API Name
-------------------------------------| --------------------------------------
--      | [Recognizer](Recognizer.md#recognizersettingsdb---settings) ([SettingsDb](SettingsDb.md) settings) throws FileNotFoundException, IOException
--      | [Recognizer](Recognizer.md#recognizersettingsindex--settings) ([SettingsIndex](SettingsIndex.md) settings) throws IOException
void     |  	[dispose](Recognizer.md#dispose) ()
CompletableFuture<[Recognition](Recognition.md)[]>      |  		[findRecognitions](Recognizer.md#findrecognitionsfloatdescriptors-int-k) (float[][] descriptors, int k)
CompletableFuture<[Recognition](Recognition.md)[]>	     |  	 [findRecognitions](Recognizer.md#findrecognitionsfloatdescriptors) (float[ ][ ] descriptors)
[Recommendation](Recommendation.md)[ ]      |  		[findRecommendations](Recognizer.md#findrecommendationsfloat-descriptors-intk) (float[ ][ ] descriptors, int k)
[Recommendation](Recommendation.md)[ ] 	     |  	[findRecommendations](Recognizer.md#findrecommendationsfloatdescriptors) (float[][] descriptors)
void 	     |  	[saveIndex](Recognizer.md#saveindex) (String labelFilename, String indexFilename)
void       |  	[loadIndex](Recognizer.md#loadindex) (String labelFilename, String indexFilename)

## API Detailed Description-->

### Recognizer(SettingsDb settings)

Constructs a `Recognizer` object using database settings.

* **Constructor:**
    - Recognizer.Recognizer ([SettingsDb](SettingsDb.md) settings) throws FileNotFoundException, IOException

#### Parameters
- `SettingsDb settings` - Settings for initialization from a database.
#### Exceptions
- `FileNotFoundException`

Throws `FileNotFoundException` if metadata is not found in the archive.

- `IOException`

Throws `IOException` if the archive is corrupted.
 
### Recognizer(SettingsIndex  settings)

Constructs a `Recognizer` object using index file settings.

#### API Name 
Recognizer.Recognizer	([SettingsIndex](SettingsIndex.md)	settings)	throws IOException

#### Parameters
- `SettingsIndex settings` - Settings for initialization from an index file.
#### Exceptions
- `IOException`

Throws `IOException` if the search index is corrupted.
 
### Dispose()

Frees or releases resources. 

* **Constructor:**
    - void Recognizer.dispose()

NOTE: Needs to be called manually to release all internal resources.

### findRecognitions(float descriptors[ ][ ], int k) 

Finds the top-k classes for each item represented by a descriptor.

**Method:**
    - [CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html)<[Recognition](Recognition.md)[]> Recognizer.findRecognitions (float	descriptors[ ][ ], int k)

#### Parameters
- `descriptors` - Array of descriptors to use for recognitions.
- `k` - number of max top recognitions that should be returned.
#### Return Value
A `CompletableFuture` containing an array of [Recognition](Recognition.md) objects.

### findRecognitions(float	descriptors[ ][ ]) 
#### API Name
[CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html)<[Recognition](Recognition.md)[]>  Recognizer.findRecognitions (float	descriptors[ ][ ])
#### Description
Finds the top 5 classes for each item represented by a descriptor.
#### Parameters
- `descriptors` - Array of descriptors to use for recognitions.
#### Return Value
A `CompletableFuture` containing an array of [Recognition](Recognition.md) objects.

### findRecommendations(float descriptors[ ][ ], int k)

Finds the top-k labels matching a set of descriptors as a whole.

**Method:** 
    - [Recommendation](Recommendation.md)[ ] Recognizer.findRecommendations (float descriptors[][], int	k)

#### Parameters
- `descriptors` - Array of descriptors to use for recognitions.
- `k` - Number of max top matches that should be returned.
#### Return Value
An array of recommendations.

### findRecommendations(float	descriptors[ ][ ])
#### API Name
[Recommendation](Recommendation.md)  Recognizer.findRecommendations	(float	descriptors[ ][ ])
#### Description
Finds the top 5 labels matching a set of descriptors as a whole.
#### Parameters
- `descriptors` - Array of descriptors to use for recognitions.
#### Return Value
An array of recommendations.

### saveIndex()

Write index state and labels to a file.

* **Constructor:**
    - void Recognizer.saveIndex	(String	labelFilename, String indexFilename)

#### Parameters
- `labelFilename` - Specifies the file for writing labels.
- `indexFilename` - Specifies the file for writing indices.

### loadIndex()

Read index state and labels from a file.

* **Constructor:**
    - void  Recognizer.loadIndex	(String	labelFilename, String	indexFilename)

#### Parameters
- `labelFilename` - Specifies the file for writing labels.
- `indexFilename` - Specifies the file for writing indices.
