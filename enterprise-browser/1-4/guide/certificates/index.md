---
title: Certificates
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
---
## Overview
Secure Sockets Layer (SSL) Certificates can be used by Enterprise Browser to establish a secure connection (via HTTPS) between a device and a server to protect highly confidential transactions such as those involving financial institutions and commerce sites. The Enterprise Browser Webkit supports Transport Layer Security (TLS) 1.2, and allows certificates for clients and servers to be configured according to the security requirements of any application.

This guide explains how client-side certificates are used on Zebra devices running Android and Windows Mobile/CE, how to create them for a device, and how to store and specify their whereabouts on the device so that Enterprise Browser can find them when needed. For help creating server-side certificates, please refer to the server's documentation. 

## Android
Enterprise Browser `https://` requests on Android can be done in two ways:

* Using system browser navigation with a WebView component:
	* The system browser uses built-in, system-trusted storage for root CAs. 
	* Root certificates should be installed from the system menu, and will be used by any application that uses a WebView UI component (such as a browser).
	* Reference navigation in EB also will use this method. 
	* EB currently supports only server SSL authentication for WebView.
	* Browser-based client authentication, which was introduced in Android 5, is not currently implemented.
* Using certificate formats:
	* **Certificate files must contain the certificate data between "BEGIN" and "END" lines**.
	* Android accepts any certificate format that represents the certificate as encoded text. These typically have a `.crt` or `.pem` extension. 
	* Certificates in the `.der` format are not supported. See the [OpenSSL section](#openssl) (below) for conversion instructions.

## Windows Mobile and CE
To access **client certificates** from apps made with Enterprise Browser 1.5 and higher for Windows Mobile/CE with Webkit, use the [ClientCertPath parameter](../configreference/#clientcertpath) to specify the path to client certificate files. 

To access **server certificates** (beyond the pre-loaded ones) from apps made with Enterprise Browser for Windows Mobile/CE with Webkit, specify the path to those certificates using the [CaFile parameter](../configreference/#cafile) in the `Config.xml` file. 

The `CaFile` points to a file containing the certificate data, and the certificate(s) specified there are treated by Webkit as trusted authorities. For example, to use certificates in the file `mycert.pem`, copy the file to the device and make an entry made in the `Config.xml` corresponding to the file's location on the device using the syntax below: 

	:::xml
	<CaFile Value=”\\mycert.pem”>

> **Note**: This applies only to `https://` requests made by Webkit.

## OpenSSL
Tools such as [OpenSSL](https://www.openssl.org/docs/faq.html) can be useful for creating and working with certificates, and most of of its capabilities are accessible through [CLI commands](https://www.sslshopper.com/article-most-common-openssl-commands.html). Some typical usages are shown below. Before proceeding, [download OpenSSL](https://www.openssl.org/source/) and install it. 

### Generate a self-signed certificate
To create a self-signed certificate, a private key must exist to encrypt into the certificate. **Skip to Step 2 if an existing private key can be used**. To generate a new key, begin with Step 1. 

**&#49;. To generate a basic key with no passphrase**:

        :::term
        openssl genrsa -out privkey.pem

**&#50;. Next, use the key file generated in Step 1 to create a self-signed certificate**:

        :::term
        openssl req -new -x509 -key privkey.pem -out capturableacert.pem -days 365

&#51;. A series of questions appears. Leave all fields blank (by pressing ENTER) _except_ for **the "Common Name" field-- this should contain the domain name that will serve the certificate**. 

&#52;. **Add the private key file to the web server** according to the server's documentation. 

&#53;. **Add the certificate file to the web client** as described above.

### Inspect a certificate
**To decode the contents of a certificate**:

				::term
				openssl x509 -in cacert.pem -text -noout

* The Common Name is shown as "Subject: CN=" 
* The signing authority is shown as Issuer: CN=, which will be the same as Subject for a self-signed certificate.

### Convert certificate format
**To convert a `.der` format certificate to .`pem` format**:

	:::term
	openssl x509 -inform der -in cacert.der -out cacert.pem

