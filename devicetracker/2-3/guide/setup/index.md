---
title: Install & Setup
layout: guide.html
product: Device Tracker
productversion: '2.3'
---
## Overview

As part of Zebra DNA Visibility Console (ZDVC) server, Device Tracker runs on a supported Windows-based server. Device Tracker client runs on supported [Zebra devices](../about/#supporteddevices). This section provides system requirements and instructions for install and setup for the solution.

Solution components:
* **ZDVC server** - ZDVC server includes Device Tracker and [PowerPrecision Console](/ppc/latest/guide/about). Device Tracker collects and processes device data for tracking misplaced devices.
* **Web portal** - ZDVC centralized dashboard for monitoring device presence, device tracking, and battery status.
* **Device Tracker client** - reports device presence status and information (such as remaining battery and charging status) to server

Before installing, ensure to prepare additional steps for system setup - consult your local IT department for assistance:
 * **Install SSL certificate** (procured by a signed Certificate Authority) - configured on server for secure HTTPS communication
 * **Open specific incoming and outgoing ports** - for server communication through the firewall, based on ports specified during server installation
 * **Add DNS (Domain Name Server) Entry** - an entry is added to the DNS to map the server IP address to the domain 

<font color="red"><b>Important:</b> An SSL Certificate is required from a third-party certificate authority (CA), such as Verisign or Thawte. Any self-signed certificate or one issued by a non third-party CA will not work. The .pfx certificate must contain the complete certificate chain, including intermediate certificates.</font>

##System Requirements
This section provides the server and device requirements. Device Tracker supports a maximum of 500 devices per installation.

###Server Requirements
1. Windows Operating System supported:
   * Windows Server 2012, 64-bit processor
   * Windows Server 2016, 64-bit processor

2. Browsers supported (connect over https):  
   * Google Chrome Browser version 66 and higher
   * Microsoft Internet Explorer version 11 and higher
   * Microsoft Edge for Windows 10
   * Safari for Mac version 11 and higher

3. Software Required (included in server installation):
   * Java runtime
   * Node.js version 6.11
   * PostgreSQL 9.6.3-3 and higher
   * Device Tracker software (server and client) 

4. Network Access Requirements (see **Server Setup** below):
   * If required, **open incoming and outgoing ports** for communication between server and mobile devices through the server firewall. Sample ports are: 
        * Backend Server: Data Port 8080 for Device Tracker client to register to the server and transmit device data 
        * Web Portal: UI Port 8443 for accessing Device Tracker web portal  
   * If required, perform **DNS setup** to add server IP address to the DNS server. 

5. Internet Access Required: Internet access is needed during initial setup to download npm package dependencies.

6. Hardware Requirements:
   * Minimum CPU cores: 16
     * Minimum memory (RAM): 64 GB
         * Minimum available hard drive space: 500 GB


###Device Requirements
Requirements for Device Tracker client:
* The ZDVC server is installed and running.
* The device is connected via WiFi on the same network as the server. 
* Zebra Data Service agent is running on the device. This agent collects data from the device.
* The server URL, user name, and password is configured in the Device Tracker client to communicate with the server. 
* Bluetooth radio is enabled on both devices for proximity tracking with BLE (Bluetooth Low Energy) beacons.

See [Supported Devices](../about#supporteddevices).


##Server Install & Setup
Download ZDVC server from [Zebra Support and Downloads](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/device-tracker.html). Install ZDVC server via a new install or an upgrade from an existing install on the supported system that meets the specified requirements. The user must have the appropriate system privileges to install the server. After server installation, further network and certificate setup is required to allow communication between the server and devices via DNS and firewall. Instructions for server installation and setup:

###Server Prerequisites
The following are the prerequisites required for the server: <br>
1. **DNS (Domain Name Server) Setup.** ZDVC server runs in a domain, for example _company.com_. An entry with the server hostname and corresponding IP address is required in the DNS server for name resolution. The DNS server and ZDVC server are required to be on the same network. Contact your local IT Administrator to configure the domain to IP address mapping. 

2. **SSL Certificate.** ZDVC requires an SSL certificate for secure communications. The certificate must be in .pfx format and set with a password. See [Server Certificate](./#servercertificate) section for details.

3. **Open Inbound/Outbound Ports on the Firewall.** The appropriate ports are required to be opened for inbound/outbound network traffic flow through the firewall for communication between the server and devices. The UI and Backend Server ports are specified during server install. The method to open the ports depends on the firewall software used by the network administrator. 

	* Backend Server (data) Port: inbound (e.g. port 8080)  
	* Web Portal (UI) Port: inbound and outbound (e.g. port 8443)
<br>

###Server Certificate
An SSL certificate is needed for secure connections. Generate the CSR (Certificate Signing Request) with private key and submit it to the trusted CA. The CA issues the SSL Certificate signed with the public key (in .p7b format). Use this issued certificate to generate the SSL certificate with the private key. The final, complete SSL certificate contains the server certificate, any intermediate certificates, the public key and private key. The procedure to accomplish this is separated into two sections below:
* **Procure server certificate** (.p7b format) with public key 
* **Generate complete SSL certificate** (.pfx format) with both public and private keys 

If the server certificate with public key already exists, skip to the second section _Generate complete SSL Certificate_. If the complete SSL certificate already exists, skip to section _Server Installation_. <br><br>
**Procure server certificate:** Create a private key and generate the CSR. Submit the CSR to the CA for signing. The server certificate issued should be in .p7b format. Watch a video demonstration or follow the steps below:
<video controls width="430" height="290"> <source src="../../../videos/ZDVC_ServerCert-Step1.mp4" type="video/mp4">
</video>
1. Download and install the SSL toolkit [OpenSSL](https://www.openssl.org/source/) for Windows. Follow the instructions stated to download the file based on your Windows configuration.<br>
2. Add a new "openSSL" environment variable to the Windows system and set the value to the location where openSSL is installed (e.g. "C:\Program Files\OpenSSL-Win64\bin\").<br>
3. Create a folder named "ServerCert".  Open the command prompt to this folder path.<br>
4. Create a private key. It prompts to enter the passphrase - _make note of this passphrase_, which is used in Device Tracker. Run the command:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`openSSL genrsa -des3 -out dtrkdemo.key 2048`<br>
where "dtrkdemo.key" can be replaced with a custom file name.
5. Create a CSR based on the new private key. Run the command:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`openSSL req key dtrkdemo.key -new -out dtrkdemo.csr`<br>
where "dtrkdemo.key" (same file name as in step 4) and "dtrkdemo.csr" (new file created) can be replaced with custom file names. 
It prompts to enter the private key password (created in step 5). Enter in the required fields when prompted (the information entered must match that registered with the CA):
   * **Country Name** - Enter the two-letter code without punctuation for country, for example: US or CA.
   * **State or Province** - Enter the full state or province name without abbreviation, for example: California.
   * **Locality or City** - Enter the city or town name without abbreviation, for example: Berkeley or Saint Louis.
   * **Organization Name** - Enter the company. If the company or department contains a special character such as "&" or "@", the symbol must be spelled out or omitted in order to enroll successfully. 
   * **Organizational Unit Name** - Enter the name of the department or organization unit making the request. This is optional, to skip, press Enter on the keyboard.
   * **Common Name** - Enter the fully qualified host name, for example: "hostname.company.com". _This is the same name to be used in the Server Installation in step 5 for the Domain name._
   * **Email Address** - Enter the contact email address.<br>
When prompted for the challenge password, it is not required - _do not supply one_. 
6. Submit the CSR created to the CA. They will supply a certificate in .p7b format, e.g. ssl_certificate.p7b.

<!-- **Note:** Symantec certificates can only be used on web servers using the Common Name specified during enrollment. For example, a certificate for the domain "zebra.com" will receive a warning if accessing a site named "www.zebra.com" or "secure.zebra.com" since "www.zebra.com" and "secure.zebra.com" are different from "zebra.com." <br>
-->
<!--
E. Run the following command to generate a private key and CSR file: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`openSSL req -newkey rsa:2048 -nodes -keyout zdvc_private_key.key -out zdvc_cert_sign_req.csr`<br>
 Where "zdvc_cert_sign_req.csr" and "zdvc_private_key.key" can be replaced with custom file names.<br> 
F. Enter in the required fields when prompted:

   * **Country Name** - Enter the two-letter code without punctuation for country, for example: US or CA.
   * **State or Province** - Enter the full state or province name without abbreviation, for example: California.
   * **Locality or City** - Enter the city or town name without abbreviation, for example: Berkeley or Saint Louis.
   * **Company** - Enter the company. If the company or department contains a special characteres such as "&" or "@" the symbol must be spelled out or omitted in order to enroll successfully. 
   * **Organizational Unit** - Enter the name of the department or organization unit making the request. This is optional, to skip, press Enter on the keyboard.
   * **Common Name** - Enter the Host and Domain Name, following the same format as these examplese: "www.zebra.com" or "zebra.com". **Note:** Symantec certificates can only be used on web servers using the Common Name specified during enrollment. For example, a certificate for the domain "zebra.com" will receive a warning if accessing a site named "www.zebra.com" or "secure.zebra.com" since "www.zebra.com" and "secure.zebra.com" are different from "zebra.com." <br>

 G. Enter the challenge password when prompted. _This is the password needed when generating the certificate in .pfx format._<br>
 H. A .csr file is created in the "CSR_Request" folder. Submit this file to the CA to have it signed. <br>
 I. Obtain the certificate bundle from the CA in .pkcs format and certificate in .p7b format (which includes the public key). -->
**Generate complete SSL Certificate:** Zebra requires the certificate be procured in .p7b format and combined with the private key (.key file) to generate the SSL certificate in .pfx file format. If the certificate is in a different format, use an SSL certificate converter tool to convert to the proper format. Watch a video demonstration or follow the steps below:
<video controls width="450" height="280"> <source src="../../../videos/ZDVC_ServerCert-Step2.mp4" type="video/mp4">
</video>
1. Create an ssl_certificate.cer file with the command:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`openssl pkcs7 -print_certs -in ssl_certificate.p7b -out ssl_certificate.cer`<br>
where "ssl_certificate.p7b" is the certificate issued by the CA.
2. Create SSL certificate "ssl_certificate.pfx" with command (using the private key password created from step 4 in the previous section):<br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`openssl pkcs12 -export -in ssl_certificate.cer -inkey dtrkdemo.key -out ssl_certificate.pfx`<br>
where "dtrkdemo.key" is the private key generated from step 4 in the previous section and "ssl_certificate.cer" is the file generated from the previous step 1.
3. Import the SSL certificate on the server. Double-click the certificate on the local computer and follow the Certificate Import wizard.
4. Use SSL certificate "ssl_certificate.pfx" and the private key password for Device Tracker server installation and setup in the sections that follow.
<!--
A. Create an empty directory named "generated_certs" to contain the .pfx certificate.<br>
B. Copy the following certificate files to "generated_certs" folder: primary certificate (e.g. "ssl_certificate.p7b"), private key (e.g. "zdvc_private_key.key"), and intermediate CA certificate (e.g. "IntermediateCA.cer").  _The intermediate CA certificate is optional - use if required in the certificate chain._  <br>
C. Open a command prompt. Execute the following command to generate "ssl_certificate.cer":<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`openssl pkcs7 -print_certs -in ssl_certificate.p7b -out ssl_certificate.cer`
<br>
D. At the command prompt, execute the following command:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`openssl pkcs12 -export -in ssl_certificate.cer -inkey zdvc_private_key.key -out ssl_certificate.pfx -certfile IntermediateCA.cer`
	<br>
	Where "-certfile IntermediateCA.cer" is optional.
<br>
E. When prompted, enter the certificate password to export "ssl_certificate.pfx". This is the challenge password specified in step 2.G. above.<br>
F. Copy the SSL certificate "ssl_certificate.pfx" with domain name “name.company.com” to a designated folder.
<br>
-->
###Server Installation
ZDVC Server Installation steps for a new installation: <br>
1. Double-click on the .EXE to launch the installer.
2. At the initial window, click **Next.**
![img](DTRK_Install_1.JPG)
_Figure 1. Installation - initial screen_
3. Accept the license agreement. Click **Next.**
![img](DTRK_Install_2.JPG)
_Figure 2. Installation - EULA_
4. Accept the default folder or browse to the destination folder. Click **Next.**
![img](DTRK_Install_3.JPG)
_Figure 3. Installation - destination location_
5. Enter in the server configurations, then click **Next:**
   * **Domain** - fully qualified domain name (FQDN) which consists of the hostname and domain name, e.g. "hostname.company.com"
   * **Server Certificate Path** - location of server certificate (.pfx file)
   * **Server Certificate Password** - password for server certificate
   * **UI port** - designated UI port, can default to 8443
   * **Backend Server Port** - designated server port, can default to 8080
![img](DTRK_Install_4.JPG)
_Figure 4. Installation - server configuration_
6. Set the server authentication and login credentials, then click **Next:**
   * Super admin and database password
   * Server auth key
   * Server auth password
<br>
**Important**: Use of the following special characters is not supported for the "Server auth key" and "Server auth password": <br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt; (less than) <br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &gt; (greater than) <br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#38; (ampersand) <br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#39; (single quote) <br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#34; (double quote) <br>
![img](DTRK_Install_5.JPG)
_Figure 5. Installation - server authentication and credentials_
7. Review settings. Click **Next.** Third party applications (such as Postgres and Node.js) will be installed if it does not pre-exist in the system.
![img](DTRK_Install_6.JPG)
_Figure 6. Installation - review settings_
8. Installation complete. Click **Finish.**
![img](DTRK_Install_7.JPG)
_Figure 7. Installation - complete_
9. Perform one of the following to run the server:<br>
A. Reboot the server. The ZDVC server services automatically start as scheduled tasks.<br>
B. Manually start the **ZDVC Backend Server** and **ZDVC WebUI Server** scheduled tasks to run the services. Open **Task Scheduler** in **Administrative Tools.** For each scheduled task, right-click on the task and select **Run** from the menu.
<img style="height:350px" src="zdvc_service_run.png"/>
_Figure 8. Run ZDVC service_

###Server Upgrade
ZDVC Server can be upgraded from a previous existing ZDVC installation. Prior to upgrading, the ZDVC services must be stopped. Procedure to upgrade:
1. Follow steps to [stop the application server.](./#stopapplicationserver) 
2. Run the new installer.
3. Click **Yes** when prompted to upgrade.
4. At the initial window, click **Next** to proceed with the upgrade.
5. Once installation completes, click **Finish.**

###Server Downgrade
To downgrade the server, uninstall the previous version, terminate the ZDVC server processes and install the older server version. Procedure to downgrade:
1. Uninstall ZDVC server.
2. Terminate the active processes running on specified ports by using one of the following methods:<br>
A. Reboot the system.<br>
B. Run the following commands from the command prompt to find the process ID and terminate the specific process ID:<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`netstat -aon | find /i "8080" `<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`taskkill /pid 1234 /f`
<br>
Where "8080" represents the specific backend server port number specified during install and "1234" represents the process ID returned from the first command. Repeat these steps for the Web UI port.
3. Run the installer for the older server version. Follow the prompts to complete installation.

###Server Setup
Steps for ZDVC server setup after installation: <br>
1. **Run ZDVC Server Software.** Start the server services either manually or by rebooting the server after install. Refer to the last step in the [Server Installation](#serverinstallation) section.
2. **View the web portal.** Open a supported browser. Enter the default server URL: `https://hostname.company.com:8443/zdvc`, where "hostname.company.com:8443" is replaced with the appropriate hostname, domain and port number.
3. **Select app to launch.** As part of ZDVC, the server consists of multiple solution offerings. Select "Device Tracker" then enter the login credentials to login. The default user name is "SAdmin". The password is the super admin and database password entered during server installation.
4. **Server certificate validation.** Use an SSL Tool (such as [ssltools.com](http://ssltools.com/)) to aid in diagnostics and validate the certificate chain.<br>
A. Open [ssltools.com](http://ssltools.com/) in the browser.<br>
B. Enter the Web UI URL, for example `https://hostname.company.com:8443/zdvc`<br>
C. Click the Scan button. A successful result returns green checks for each step. _See Figure 8 below._ <br>
D. Enter the backend URL for your server, for example `https://hostname.company.com:8080/zdvc` <br>
E. Click the Scan button. A successful result returns green checks for each step:
![img](SSLTools.JPG)
_Figure 9. SSLTools.com results_

###Stop Application Server
To stop the application server, stop the **ZDVC Backend Service** and **ZDVC Web UI Service** from **Task Scheduler** in **Administrative Tools.** Right-click on the service and select **End.**
<img style="height:350px" src="zdvc_service_end.png"/>
_Figure 10. End ZDVC service_

<!--
###Post-Server Setup
To meet certain customer requirement needs, for example for Device Tracker to run without a logged in user or Device Tracker to run on server startup, this can be accomplished by having Device Tracker run as a scheduled task using the following procedure.  Two scheduled tasks are needed, one for the backend and one for the WebUI:<br>
1. Open **Task Scheduler** in **Administrative Tools.** 
<img style="height:350px" src="TS_1.png"/>
_Figure 11. Task Scheduler main screen_
2. Click **Create Basic Task** in the Actions menu to the right. Enter a name for the task, such as “Zebra ZDVC Backend." 
<img style="height:350px" src="TS_2.png"/>
_Figure 12. Create Backend Task_
3. Click **Next.** Select the desired time to trigger the task, for example “When the computer starts” to run on startup.
<img style="height:350px" src="TS_3.png"/>
_Figure 13. Task Trigger_
4. Click **Next.** Select **Start a program**.
<img style="height:350px" src="TS_4.png"/>
_Figure 14. Task Action_
5. Click **Next.** Browse to the backend RunBackendServer.bat file (file path by default `C:\Program Files (x86)\Zebra Technologies\ZDVC\BackendServer\RunBackendServer.bat`). Enter the folder path for the **Start in** field - even though it indicates it is optional, it is required for this to work.
<img style="height:350px" src="TS_5.png"/>
_Figure 15. Task Program_
6. Click **Next.**
<img style="height:350px" src="TS_6.png"/>
_Figure 16. Complete Task creation_
7. Click **Finish.** After authentication, the new task is listed in the Active Tasks list.
<img style="height:200px" src="TS_7.png"/>
_Figure 17. Task list_
8. Repeat above steps for the WebUI batch file RunWebUI.bat (file path by default: `C:\Program Files (x86)\Zebra Technologies\ZDVC\WebUI\RunWebUI.bat`).  Screens specific to WebUI:
<img style="height:350px" src="TS_8.png"/>
_Figure 18. Create WebUI Task_
<img style="height:350px" src="TS_9.png"/>
_Figure 19. Task WebUI Program_
<img style="height:350px" src="TS_10.png"/>
_Figure 20. Complete WebUI Task_
9. Both tasks created are listed in the Active Tasks list.
<img style="height:200px" src="TS_11.PNG"/>
_Figure 21. Select Task Trigger_
10.	Double-click on one of the schedule tasks created. The specific task is displayed.
<img style="height:350px" src="TS_12.png"/>
_Figure 22. Task Details_
11.	Tap **Properties** in the right panel. In the **Security options** section select “Run whether user is logged on or not”.
<img style="height:350px" src="TS_13.png"/>
_Figure 23. Task Properties_
12.	Click **OK.**
13.	Repeat steps 10–12 for the other scheduled task.
14.	Click **Run** in the right menu (same screen as in step 11). 

This allows Device Tracker to run each time the server restarts regardless of the user logged in.
-->
##Client Install & Setup
Install Device Tracker client on the supported Zebra device to register the device and transmit data to the server. The device must be connected to the same network as the server. Client install and setup can be accomplished either manually or remotely with Zebra's [StageNow](/stagenow/latest/about) or an EMM (Enterprise Mobility Management) system. 

###Client Installation
Steps for client installation on the device, which may be performed either manually or with an EMM (Enterprise Mobile Management):
1. Download Device Tracker client from [Zebra Support and Downloads](https://www.zebra.com/us/en/support-downloads/software.html). Extract the files and folders.
2. Install DTRKClient.apk. 
3. If updating an existing client, reboot the device.

###Client Configuration
Configure the client settings either manually or remotely. For information on using CSP for remote configuration deployment, refer to [MX documentation](/mx/overview).
> WiFi sleep policy "Keep Wi-Fi on during sleep" must be set to "Always" on Android Marshmallow devices for Device Tracker to work in Doze mode. By default it is set to "Never".

####Manual Configuration
Steps for manual client configuration after installation:
1. Open Device Tracker client.
2. Tap "Yes" to "Ignore battery optimizations". This is required for the client to remain connected to the server while running in the background.
3. Tap the hamburger menu at the top right, then tap "Settings".  
4. Enter in the following information:
   * **Server URL** - URL for the server with port number and Device Tracker path specified, for example: **hostname.company.com:8080/zdvc/dtrk**, where "hostname.company.com:8080" is replaced with the appropriate hostname, domain and port number. The URL must not contain "https://" nor "http://".
   * **Server Auth Key** - UserName designated during server install
   * **Server Auth Password** - Password designated during server install
<br>
5. Tap the device back button to save the changes and return to the main screen.
Device Tracker client registers with the server and loads "Devices to be found".
<!--3. Tap "Allow" to "Allow Device Tracker to access this device's location". This is required to allow BLE (Bluetooth Low Energy) locationing. -->

####Remote Configuration
After client installation, follow these steps to create StageNow profiles to remotely configure the client:
1. Disable Battery Optimization
2. Start Device Tracker Service
3. Configure Device Tracker settings with CSP
<!-- 2. Reboot device (refer to [Power Manager](http://techdocs.zebra.com/stagenow/latest/csp/power/) in StageNow documentation) -->

Detailed procedures for each follow in the sections below.

When using StageNow or any EMM system for remote configuration, use of the following special characters is not supported (for example, when setting the password): <br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt; (less than) <br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &gt; (greater than) <br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#38; (ampersand) <br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#39; (single quote) <br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#34; (double quote) <br>

> Use of a StageNow profile which combines installation and configuration into a single profile is not supported. Two separate profiles need to be created:
1. Install Device Tracker application and start the service.
2. Configure Device Tracker settings.

**Steps to create StageNow profile to automatically bypass the device Battery Optimization pop-up message:**
1. Open [StageNow](https://www.zebra.com/us/en/support-downloads/software/utilities/stagenow.html) on a PC. 
2. In the StageNow home screen, click “Create New Profile” from the left menu.  <br>
3. Ensure the proper MX version is selected at the top drop-down selector. This should match the StageNow client version on the device. Select “XpertMode" from the table. Click Create.<br>
![img](SN_CreateNewProfile.JPG)
_Figure 11. Profile wizard_ <br>
4. Enter the profile name. Click Start.<br>
5. Scroll down and click the plus (+) sign next to “AppMgr”. This adds to the Config tab on the right side. Click Add.<br>
![img](SN_AddAppMgr.JPG)
_Figure 12. Add Setting_ <br>
6. In the StageNow Config section, click “Re-use Saved Setting” tab. The screen is populated with the information from the setting created in step 5. Validate all settings and click Continue.
![img](SN_BattOpt.JPG)
_Figure 13. Re-use saved setting_ <br>
7. Click “Complete Profile." <br>
8. In the Publish section, select the desired barcode type. Click Test. 
![img](SN_Publish.JPG)
_Figure 14. Generate StageNow barcode_ <br>
9. A window opens with the generated StageNow barcode in .pdf format. When ready to publish, click Publish.<br>
10. For EMM Staging, continue to section "Steps for EMM Staging" below.
11. Open the StageNow client on the device.
12. Scan the barcode generated to automatically bypass the Battery Optimization message.

**Steps to create StageNow profile to start Device Tracker service remotely:**
1. Open [StageNow](https://www.zebra.com/us/en/support-downloads/software/utilities/stagenow.html) on a PC. 
2. In the StageNow home screen, click “Create New Profile” from the left menu.  <br>
3. Ensure the proper MX version is selected at the top drop-down selector. This should match the StageNow client version on the device. Select “XpertMode" from the table. Click Create.<br>
![img](SN_CreateNewProfile.JPG)
_Figure 15. Profile wizard_ <br>
4. Enter the profile name. Click Start.<br>
5. Scroll down and click the plus (+) sign next to “Intent”. This adds to the Config tab on the right side. Click Add.<br>
![img](SN_AddIntentSetting.jpg)
_Figure 16. Add Setting_ <br>
6. Enter the following information:
   * Action: select "StartService"
   * Android Action Name: enter "com.zebra.devicetracker.csp.DTCspService"
   * Package Name: enter "com.zebra.devicetracker"
Click Continue.
![img](SN_IntentConfig.jpg)
_Figure 17. Configure Setting_ <br>
7. Click “Complete Profile." <br>
8. In the Publish section, select the desired barcode type. Click Test. 
![img](SN_Publish.JPG)
_Figure 18. Generate StageNow barcode_ <br>
9. A window opens with the generated StageNow barcode in .pdf format. When ready to publish, click Publish.<br>
10. For EMM Staging, continue to section "Steps for EMM Staging" below.
11. Open the StageNow client on the device.
12. Scan the barcode generated to start the Device Tracker service in the background.

**Steps for remote client configuration with StageNow and CSP Plug-in:**

1. Download Device Tracker client software DTRKClient.zip from [Zebra Support and Downloads](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/power-precision-console.html). The .zip file includes the following: 
	* com.zebra.devicetracker.dsd 
	* DTRKClient.apk
2. Open [StageNow](https://www.zebra.com/us/en/support-downloads/software/utilities/stagenow.html) on a PC. 
3. Import the CSP Plugin Library: <br>
A. In the StageNow home screen, click “CSP Library” from the left menu. <br>
B. Upload the .zip file to the CSP Library by clicking “Choose File” then browsing to the .zip file, or by dragging and dropping the .zip file. Click "OK" in the confirmation message. <br> 
C. Once successfully uploaded, the CSP Library is listed in the Plugin tab.<br>
![img](SN_CSPLib.JPG)
_Figure 19. Import plugin into CSP Library_
4. Create a new setting:<br>
A. In the StageNow home screen, click “All Settings” from the left menu. Click “Create Setting” at the top right. <br>
![img](SN_Settings.JPG)
_Figure 20. Import into CSP Library_ <br>
B. Select the MX version for the device. For the “Setting Type”, select “com.zebra.devicetracker." Enter a name for the setting. Enter the server URL e.g. `hostname.company.com:8080/zdvc/dtrk`, where "hostname.company.com:8080" is replaced with the appropriate hostname, domain name and port number. Select the desired option to determine whether or not to allow the end user to edit the setting. Enter the "Server Auth Key" and "Server Auth Password", both designated during server install.  <br>
![img](SN_CreateSettings.JPG)
_Figure 21. Create New Setting_ <br>
C. Tap Save. The new setting is listed in the Settings screen.
![img](SN_NewSetting.JPG)
_Figure 22. New Setting created_ <br>
5. Create profile:<br>
A. In the StageNow home screen, click “Create New Profile” from the left menu.  <br>
B. Ensure the proper MX version is selected at the top drop-down selector. Select “XpertMode" from the table. Click Create.<br>
![img](SN_CreateNewProfile.JPG)
_Figure 23. Profile wizard_ <br>
C. Enter the profile name. Click Start.<br>
D. Click the plus (+) sign next to “com.zebra.devicetracker”. This adds to the Config tab on the right side. Click Add.<br>
![img](SN_Profile_AddSetting.JPG)
_Figure 24. Add Setting_ <br>
E. In the StageNow Config section, click “Re-use Saved Setting” tab. The screen is populated with the information from the setting created in previous steps. Validate all settings and click Continue.
![img](SN_ReUseSavedSetting.JPG)
_Figure 25. Re-use saved setting_ <br>
F. Click “Complete Profile." <br>
G. In the Publish section, select the desired barcode type. Click Test. 
![img](SN_Publish.JPG)
_Figure 26. Generate StageNow barcode_ <br>
H. A window opens with the generated StageNow barcode in .pdf format. When ready to publish, click Publish.<br>
6. For EMM Staging, continue to section "Steps for EMM Staging" below.
7. Open the StageNow client on the device.
8. Scan the barcode generated to configure the Device Tracker client with the settings specified. <br>


For more information on StageNow, refer to its [documentation](http://techdocs.zebra.com/stagenow) and [download](https://www.zebra.com/us/en/support-downloads/software/utilities/stagenow.html). 
<br>
<br>
**Steps for EMM Staging (optional):**
1. Pre-requisite steps:
   * Follow procedure for "Device Tracker remote configuration with StageNow and CSP Plug-in" up to step 6
   * Follow procedure for "Create StageNow profile to automatically bypass the device Battery Optimization pop-up message" up to step 11.
2. Select "Export option for EMM" from the top to export the .xml file.  Save the .xml file.
![img](SN_ExportMDM.JPG)
_Figure 27. Export for EMM_
3. Push the .xml settings via EMM to the device for the desired client configuration.

<br>
-----

## See Also

* [About Device Tracker](../about)
* [Admin View](../admin)
* [Device Tracking](../mgmt)
* [Configuration](../config)
* [Troubleshooting & FAQ](../troubleshooting)
