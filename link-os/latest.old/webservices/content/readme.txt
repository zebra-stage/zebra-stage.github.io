============================================================================================
 Requirements
============================================================================================
 
 - Java SE 6 (64bit JVM recommended)
 - Tomcat 7.0.33 or later (http://tomcat.apache.org/)
 - OpenSSL 1.0.0e or later

============================================================================================
 How To Generate a Certificate For the Zebra Link-OS Servlet
============================================================================================

Assume for the purposes of example that the name of your server is zserver.fakecompinc.com

The following command line operations can be run in either Linux or via a Windows command line.
A version of OpenSSL ('OpenSSL 1.0.0e 6 Sep 2011' or newer) must be installed in order for 
these commands to execute correctly. In Windows it may be required to run in the
OpenSSL shell. To do so type 'openssl' on the command line and hit enter. From there you can
issue the openssl commands below.  If using the OpenSSL shel omit 'openssl' from the start of 
the commands.

1. Create a directory named zebra_certs anywhere on the disk (e.g. on the Desktop).
   Run all the commands in this how to from this directory

2. Generate the 2K private key as follows. Note, this should be kept hidden and backed up. 
   Zebra cannot retrieve this key for you. If someone malicious gets a hold of the key 
   the security of the connection between the Zebra printer and the Zebra Servlet 
   cannot be guaranteed.

$> openssl genrsa -out weblink.zebratest.lan.key 2048

NOTE: If this command fails in Windows one of two things must be done before running step 1:
	A. Run the command line as Administrator
	OR
	B. type set RANDFILE=.rnd  

3. Create the Certificate Request as follows. The output of this operation will be sent to Zebra.
   NOTE: The private key SHOULD NOT be sent to Zebra. This is to be kept private.

$> openssl req -new -subj "/C=US/ST=Illinois/L=Vernon Hills/O=Zebra Technologies/OU=Zebra Software/emailAddress=ADMIN@EMAIL/CN=*.weblink.zebratest.lan" -key weblink.zebratest.lan.key -out weblink.zebratest.lan.csr

There are four fields that need to be filled in above with information unique to the server:
C - Is the two digit Country Code
ST - The Name of the state the server/company resides in
L - The name of the city the server/company resdies in
O - Organization/Company Name
OU - The name of your organizational unit
emailAddress - The contact Email for the creator of the certificate
CN - The full DNS name of the server (this must match the DNS name that is supplied to the printer as the location URL for the weblink connection)

The .csr file that is output should be emailed to softpm@zebra.com. The certificate will be signed and emailed back. Once the certificate file is
received, continue with step 4. You may receive the certificate in a zip file. You will need to unzip it before continuing with step 4.

4. Copy the ZebraCAChain.cer from %SDK_INSTALL_PATH%\link_os_sdk\Webservices\VERSION\cert to the current (zebra_certs) directory.

5. Convert the new certificate to a format that the Tomcat Server can use by doing the following. A passkey will need to be provided in this step.
   It is up to the user to create this passkey. Again, this key should be kept private.  The zserver.fakecompinc.com.cer will be the signed certificate file
   you receive from Zebra Technologies.
   
%> openssl pkcs12 -export -in *.weblink.zebratest.lan.cer -inkey weblink.zebratest.lan.key -out weblink.zebratest.lan.p12 -name tomcat -CAfile ZebraCAChain.cer -caname root -chain

6. Configure tomcat server.xml in the %TOMCAT_INSTALL_LOCATION%\conf directory to use the new key/cert by modifiying the ssl connector as follows.  Place this Connector
   XML object inside of the Service tag which will look like "<Service name="Catalina">".

	<Connector SSLEnabled="true" acceptorThreadCount="5" clientAuth="want" keyAlias="tomcat" keystoreFile="conf/zserver.fakecompinc.com.p12" 
	keystorePass="YourPasskeyFromStep4Here" keystoreType="pkcs12" maxConnections="-1" maxThreads="2500" port="443" protocol="org.apache.coyote.http11.Http11NioProtocol" 
	scheme="https" secure="true" sessionTimeout="0" socket.soKeepAlive="true" sslProtocol="TLS"/>

7. Add the ZebraCAChain.cer to the JRE that will be running your Tomcat server.  If you do not execute this command from the location
   which ZebraCAChain.cer is stored you will have to append the path to the name on the -file argument.  
   Note: The default password for the Java cacert keystore is 'changeit'.
%> keytool -importcert -file ZebraCAChain.cer -keystore "%JRE_HOME%\lib\security\cacerts" -alias "ZebraCAChain"

8. Copy zebra.war from $ZEBRA_SDK_INSTALL_PATH$\link_os_sdk\Webservices\VERSION\lib to $TOMCAT_INSTALL_LOCATION$\webapps

9. Restart the Tomcat server

10. Ensure the printer weblink.ip.conn[1|2].location value is set to "https://$CN$/zebra/weblink/".  Where $CN$ is the host name provided in step 3.  Ensure the / at the end is present, 
    as the printer will faill to connect without.

============================================================================================
 Common Issues
============================================================================================

 - Error error:1411809D:SSL routines:SSL_CHECK_SERVERHELLO_TLSEXT:tls invalid ecpointformat list
	This error occurs when using Java 7.  Follow the steps below to resolve.
	 	1. Download an additional security package, Java Cryptography Extension unlimited strength, found here:
			http://www.oracle.com/technetwork/java/javase/downloads/index.html#docs
			
		2. Extract the jars included with the security extensions to %JRE7_HOME%\lib\security, click yes to overwrite.
		
		3. Update your server.xml SSL connector to include the following ciphers tag
			ciphers="TLS_DHE_RSA_WITH_AES_256_CBC_SHA"


============================================================================================
 Troubleshooting the printer
============================================================================================

 - If you see this on the printer weblink log "Unknown SSL protocol error in connection to ..." it is likely
   the ZebraCAChain.cer was either not installed or installed on the incorrect JRE.  Ensure tomcat is using
   the JRE you added ZebraCAChain.cer to.

 - Ensure the date on your printer is correct.  An invalid date will cause unexpected issues when validating
   with the server.

 - Other Issues:
 	http://www.zebra.com/content/dam/zebra/manuals/en-us/software/link-os-pg-addendum-en.pdf

