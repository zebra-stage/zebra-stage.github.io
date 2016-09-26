---
title: Optimization
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
---
##Overview 
This guide provides suggested techniques for optimizing Enterprise Browser apps to improve performance and reduce the size of its memory footprint and RAM usage. Some of the techniques described here might not apply to all situations. 

-----

## API files
Enterprise Browser APIs are stored as individual JavaScript files for each API and as a single JavaScript file that includes all APIs. When device resources are at a premium, the option to include only the required module(s) can save on storage space and page loading speeds of multi-page apps.

### Enabling the API
There are two methods of enabling an Enterprise Browser API:

* Include all "ebapi" modules
* Include only the required API modules

Both methods are explained below. 

With either method, the included files will be found in the directory:
<br> 
`/Enterprise Browser/JavaScript Files/Enterprise Browser`
<br>
This is a directory on the computer that contains the Enterprise Browser installation.

### Include all API modules
To include all JavaScript APIs, copy the `ebapi-modules.js` file to a location on the device that's accessible by the app's files and include a reference to the JavaScript modules file in the app. For instance, to include a reference to the modules file in the app's `index.html`, copy the modules file to the same directory as the index.html file and add the following line to the HEAD section of that index.html file:

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi-modules.js"></script>

> The line above defines the EB class within that page. Note that the path for this file is relative to the current page (index.html). **Any page from which the API module file will be called must contain a similar reference to** `ebapi-modules.js`.

### Include only required API modules
To include individual APIs, copy the `ebapi.js` file and any required individual API files to a location on the device that's accessible by the app's files, and include a reference to `ebapi.js` and the any API file(s) being called from that page. For instance, to use the Printer API, add the following code to the HTML file(s). Again, this assumes that relevant API files have been copied to the same directory as the HTML:

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi.js"></script>
    <script type="text/javascript" charset="utf-8" src="eb.printer.js"></script>

> In the code lines above, notice that `ebapi.js` is included first, followed by `eb.printer.js`, which is the Printer API for Enterprise Browser. **Similar coding is required on each HTML page whenever an individual API will be called from that page**.

-----

## Barcode Scanner
**Skip this section if running a single-page app**. If running a multi-page app that requires the barcode scanner on more than one page, page-loading performance can be improved by keeping the scanner enabled during page navigation (the default setting disables it). To keep the scanner enabled during page navigation, place a value of “0” in the `Config.xml` parameter, as shown below:

	:::xml
	<Scanner>
		<DisableScannerDuringNavigation value="0"/>
	</Scanner>

The setting will take effect the next time Enterprise Browser is launched. 

-----

## Engine Selection
Windows Mobile and Windows CE devices offer two rendering engine options: IE and Webkit. Selecting the IE engine will save storage space and RAM, but doing so comes with the following caveats: 

* IE does not support CSS3, and offers non-standard support for CSS2
* IE does not support the Enterprise Browser primary syntax; apps must be written using the EMML1.0/1.1 syntax

**Note: The IE engine is recommended only for legacy PocketBrowser applications**.

-----

## Logging
The logging options by default are set to capture only errors and warnings. If the LogInfo parameter was enabled during development, it may save cycles and storage space to deactivate it for deployment; the log engine is processor-intensive and its default output occupies device storage space. For logging options, see the [Logger section](../configreference/#logger) of the Config.xml Reference. 

-----

## Regular Expressions
The Enterprise Browser supports EMML v1.0 (PocketBrowser v2.x) through the use of a regular expressions engine. EMML 1.0 syntax is translated to EMML1.1 (which is internally processed) based on an XML file. 

**Location of the** `RegEx.xml` **file**:

* On Android: `/<internal_mem_root_dir>/Android/data/com.symbol.enterprisebrowser/RegEx.xml`
* On Windows: `\Program Files\EnterpriseBrowser\Config\RegEx.xml`

If the application was written using the PocketBrowser v2.x syntax, make sure the Regular Expressions engine is running. The Regular Expressions engine is activated from the `Config.xml` file with this setting:

	:::xml
	<General>
		<UseRegularExpressions value='1'/>
	</General>

However, if the application is written in EMML 1.1, RE v2 or RE v4 syntax, then switching off Regular Expression will save significant machine cycles. Deactivate the Regular Expressions engine with this setting:

	:::xml
	<General>
		<UseRegularExpressions value='0'/>
	</General>

-----
