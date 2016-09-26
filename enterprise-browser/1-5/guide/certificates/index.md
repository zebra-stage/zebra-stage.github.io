---
title: Certificates
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
---
## Overview
Secure Sockets Layer (SSL) Certificates can be used by Enterprise Browser to establish a secure connection (via HTTPS) between a device and a server to protect highly confidential transactions such as those involving financial institutions and commerce sites. The Enterprise Browser Webkit supports Transport Layer Security (TLS) 1.2, and allows certificates for clients and servers to be configured according to the security requirements of any application.

This guide explains how client-side certificates are used on Zebra devices running Android and Windows Mobile/CE, how to create them for a device, and how to store and specify their location on the device so that Enterprise Browser can access them when needed. For help creating server-side certificates, please refer to the server's documentation. 

## OpenSSL
Tools such as [OpenSSL](https://www.openssl.org/docs/faq.html) can be useful for creating and working with certificates, and most of of its capabilities are accessible through [CLI commands](https://www.sslshopper.com/article-most-common-openssl-commands.html). Some typical usages are shown below. Before attempting to create certificates using the steps below, [download OpenSSL](https://www.openssl.org/source/) and install it. 

### Generate a self-signed certificate
To create a self-signed certificate, a private key must exist to encrypt into the certificate. **If an existing private key can be used, skip to Step 2**. To generate a new key, begin with Step 1. 

**To generate a self-signed certificate**: 

**&#49;. Generate a basic key with no passphrase**:

        :::term
        openssl genrsa -out privkey.pem

**&#50;. Use the key file generated in Step 1 (or an existing key) to create a self-signed certificate**:

        :::term
        openssl req -new -x509 -key privkey.pem -out capturableacert.pem -days 365

**&#51;.** A series of questions appears. **Leave all fields blank** (by pressing ENTER) **_except_ the "Common Name" field**-- which should contain the domain name that will serve the certificate. 

**&#52;. Add the private key file to the web server** according to the server's documentation. 

**&#53;. Add the certificate file to the web client** as described above.

### Inspect a certificate
**To decode the contents of a certificate**:

				::term
				openssl x509 -in cacert.pem -text -noout

* The Common Name is shown as "Subject: CN=" 
* The signing authority is shown as Issuer: CN=, which will be the same as Subject for a self-signed certificate.

### Convert certificate format
**To convert a** `.der` **format certificate to** .`pem` **format**:

	:::term
	openssl x509 -inform der -in cacert.der -out cacert.pem


## Android
Enterprise Browser `https://` requests on Android can be done in two ways, and are subject to the following rules:

* **Using system browser navigation with a WebView component**:
	* The system browser uses built-in, system-trusted storage for root CAs. 
	* Root certificates should be installed from the system menu, and will be used by any application that uses a WebView UI component (such as a browser).
	* Reference navigation in EB also will use this method. 
	* EB currently supports only server SSL authentication for WebView.
	* Browser-based client authentication (introduced in Android 5) is not currently supported in EB.
* **Using certificate formats**:
	* **Certificate files must contain the certificate data between "BEGIN" and "END" lines**.
	* Android accepts any certificate format that represents the certificate as encoded text. These files typically end with a `.crt` or `.pem` extension. 
	* Certificates in the `.der` format are not supported. See the [OpenSSL section](#openssl) for conversion instructions.

## Windows Mobile/CE
**This section applies only to** `https://` **requests made by Webkit**.

####SSL Server certificates
To access **server certificates** (beyond the pre-loaded ones) from apps made with Enterprise Browser for Windows Mobile/CE with Webkit, specify the path to those certificates using the [CaFile parameter](../configreference/#cafile) in the `Config.xml` file. The "CaFile" itself can contain one or more certificates, which are treated by Webkit as trusted authorities. Expired certificates are ignored. 

To deploy certificates in a CaFile called `mycert.pem` for example, copy the certificate file to the device and specify the path to the file in the `Config.xml` using the syntax below: 

	:::xml
	<CaFile Value=”\\mycert.pem”>
<br>

####SSL Client certificates
**The use of client certificates** from Windows Mobile/CE with Webkit is **supported only on Enterprise Browser 1.5 and higher**. When a secure server requests a certificate during an SSL handshake, EB will analyze and send any that qualify to the server. 

To generate a client certificate, follow the steps below. **Note: The server must be configured to accept client certificates**. Refer to the server documentation, if necessary. 

**To generate a client certificate for WM/CE with Webkit**:

**&#49;. Generate a basic key file with a passphrase**, noting the passphrase and file name. Refer to the OpenSSL documentation, if necessary. 

**&#50;. Use the key file generated in Step 1 to create a self-signed certificate**: 

        :::term
        openssl req -new -x509 -key privkey.pem -out capturableacert.pem -days 365

**&#51;.** A series of questions appears. **Leave all fields blank** (by pressing ENTER) **_except_ the "Common Name" field,** which should contain the domain name of the server that will accept the client certificate. 

**&#52;. Create a new text file** using any editor app that can save plain text. 

**&#53;. Copy and paste the contents of the files created in Steps 1 and 2** into the new file using the sample format below, **including the section tags** as shown:

	:::xml
	// The SSL client certificate file must contain 
	// the following three sections in any order:  

	-----BEGIN CERTIFICATE-----
		// Paste contents of file created in Step 2 here
	-----END CERTIFICATE-----

	-----BEGIN RSA PRIVATE KEY-----
		// Paste contents of file created in Step 1 here
	-----END RSA PRIVATE KEY-----

	-----BEGIN PASSWORD-----
		// Enter the "passphrase" created in Step 1 here  
	-----END PASSWORD-----


**&#54;. Save the client certificate with a** `.pem` **extension** and push it to the device.    

**&#55;. Specify the path to the certificate file** on the device in the [ClientCertPath parameter](../configreference/#clientcertpath) of the `Config.xml` file. 

**The device will now be able to connect using SSL** (`https://`) **to the specified server**. 

