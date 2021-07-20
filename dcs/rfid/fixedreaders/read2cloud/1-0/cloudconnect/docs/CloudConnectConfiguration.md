# Configuring Cloud Connect

Cloud Connect for RFID can be configured in a variety of different ways depending on the use case.

## Zebra Data Services

The Cloud Connect for RFID feature enables the Cloud connectivity to Zebra Data Services (Savanna Cloud). Zebra Data Services is
Zebra's proprietary cloud platform that empowers the user to build secure, scalable digital services with
ease and speed. This solution aggregates and analyzes data from multiple edge devices and services,
creating data-powered environments to provide real-time guidance and insights. For more information on
Zebra Data Services go to: <https://developer.zebra.com/community/tools/eaidata>.

The Cloud Service exposes a REST API interface that can be used to manage, configure, and read tag
data from RFID readers.

### Enrolling the Reader to Zebra Data Services

To enroll the reader to Zebra Data Services, follow the steps below:

1. Register and generate the Claim Code from the Zebra Data Services platform. Go to
<https://developer.zebra.com/docs/enroll-fx-reader> for more information on how to generate the claim
token.
2. Open a web browser to connect to the reader using the reader's host name or IP address.
3. Log into the reader's web console.
4. Click Communication -> Cloud.
5. In the Cloud Connection Settings section, enter the Claim Code (provided in step 1) and click the Enroll button to enroll the reader.

After enrolling the reader, the Enrollment Status indicates the reader's enrollment status. A reader can be disenrolled by clicking the Disenroll button.
The Cloud Connection status indicates the status of Control, Management, and Data Interfaces.

Once enrolled, the reader will automatically connect to Zebra Data Services. An existing connection may be terminated by clicking Disable button.

## Local Configuration

Cloud Connect for RFID also enables a configuring in a local private network. In this configuration, the reader is configured to have all the interfaces (Management, Control and Data)
exposed locally so that once enrolled, the reader does not have to be connected to the Internet. When
configured in this way the Control and Management Interfaces are exposed as REST APIs on the reader via the reader's webserver.
The Data Interface can be configured to be sent via HTTP/HTTPS POST request to the
a local webserver. 

### Configuring the Reader for Local Deployment

Configuring the reader for use cases that do not utilize Zebra Data Services utilizes the reader's direct RM interface and follows these steps:

1. Create a cloud configuration json object]
2. Login to reader using RM
3. Disable Cloud Connect Connection
4. Import the new cloud configuration
5. Confirm the new cloud configuration
6. Enable Cloud Connect connection

These steps can be followed using Postman (<https://www.postman.com/downloads/>). The Postman collection can be found ***here***.

Alternatively, these steps can be completed via curl as follows:

1. Create a cloud configuration json object  
The following json object can be used to configure the reader to respond to REST requests on its webserver and will post tag data to a webserver running at URL 192.168.1.1 on port 8080

```json
{
    "control": {
        "commandResponse": {
            "enableLocalRest": true
        }
    },
    "management": {
        "commandResponse": {
            "enableLocalRest": true
        }
    },
    "data": {
        "event": {
            "connections": [
                {
                    "type": "httpPost",
                    "options": {
                        "URL": "http://192.168.1.1:8080",
                        "security": {
                            "verifyPeer": false,
                            "verifyHost": false,
                            "authenticationType": "NONE"
                        }
                    }
                }
            ]
        }
    }
}
```

2. Login to reader using RM
    1. Save the following into a file called login.xml

        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <rm:command epcglobal:creationDate="2001-12-17T09:30:47.0Z" epcglobal:schemaVersion="0.0" xsi:schemaLocation="urn:epcglobal:rm:xsd:1 ../../../schemas/RmCommand.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:rm="urn:epcglobal:rm:xsd:1" xmlns:epcglobal="urn:epcglobal:xsd:1" xmlns:motorm="urn:motorfid:rm:xsd:1">
            <rm:id>99</rm:id>
            <rm:targetName>MyFX7500</rm:targetName>
            <motorm:readerDevice>
                <motorm:doLogin>
                    <motorm:username>admin</motorm:username>
                    <motorm:password>change</motorm:password>
                    <motorm:forceLogin>true</motorm:forceLogin>
                </motorm:doLogin>
            </motorm:readerDevice>
        </rm:command>
        ```

        Note: If the password has been changed from 'change', the password in the xml file should be updated appropriately.

    2. Send a `GET` request to the reader at `http://<readerip>/control` with the xml file above as payload. If using curl, the command would be:

        ```
         curl --location --request GET 'http://<readerip>/control'
              --header 'Content-Type: application/xml'
              --data-binary "@login.xml"
       ```

        Note: The reader's hostname or ip address must replace `<readerip>` in the example URL above

        Note: If the reader is using https and not http, `http` in the example URL above must be changed to `https`

    3. Parse out the session ID from the response.

       Assuming no errors occured in the `GET` request, the response will look something like this:

        ```xml
        <g1:reply xmlns:g1="urn:epcglobal:rm:xsd:1" xmlns:g2="urn:epcglobal:xsd:1" g2:creationDate="2010-02-10T10:10:10Z" g2:schemaVersion="1">
            <g1:id>99</g1:id>
            <g1:resultCode>0</g1:resultCode>
            <g3:readerDevice xmlns:g3="urn:motorfid:rm:xsd:1">
                <g3:doLogin>
                    <g3:sessionID>84:24:8D:EF:95:C9:f5c52401c119c5110eed951cc53d76e1:A</g3:sessionID>
                </g3:doLogin>
            </g3:readerDevice>
        </g1:reply>
       ```

        The value between `<g3:sessionID>` and `</g3:sessionID>` is the session ID. In the example above, the session ID is: `84:24:8D:EF:95:C9:f5c52401c119c5110eed951cc53d76e1:A`

3. Disable Cloud Connect Connection
    1. Using the session ID from step 2, create and save the following as disconnect.xml

        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <rm:command xmlns:rm="urn:epcglobal:rm:xsd:1" xmlns:epcglobal="urn:epcglobal:xsd:1" xmlns:motorm="urn:motorfid:rm:xsd:1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <rm:id>104</rm:id>
        <rm:targetName />
        <motorm:readerDevice>
            <motorm:sessionID>{{sessionID}}</motorm:sessionID>
            <motorm:disconnectFromCloud/>
            </motorm:readerDevice>
        </rm:command>
        ```

        Note: `sessionID` must be replaced by the session ID from step 2

    2. Send a `GET` request to the reader at `http://<readerip>/control` with the xml file above as payload. If using curl, the command would be:

        ```
         curl --location --request GET 'http://<readerip>/control'
              --header 'Content-Type: application/xml'
              --data-binary "@disconnect.xml"
       ```

        Note: The reader's hostname or ip address must replace `<readerip>` in the example URL above

        Note: If the reader is using https and not http, `http` in the example URL above must be changed to `https`

    3. Assuming no errors occured in the `GET` request, a successful response will look something like this:

        ```xml
        <g1:reply xmlns:g1="urn:epcglobal:rm:xsd:1" xmlns:g2="urn:epcglobal:xsd:1" g2:creationDate="2010-02-10T10:10:10Z" g2:schemaVersion="1">
            <g1:id>104</g1:id>
            <g1:resultCode>0</g1:resultCode>
            <g3:readerDevice xmlns:g3="urn:motorfid:rm:xsd:1">
                <g3:disconnectFromCloud>
                    <g3:isDisconnected>true</g3:isDisconnected>
                </g3:disconnectFromCloud>
            </g3:readerDevice>
        </g1:reply>
       ```

4. Import the new cloud configuration

    1. Using the cloud configuration json object from step 1 and the session ID from step 2, create and save the following as import.xml

        ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <rm:command epcglobal:creationDate="2001-12-17T09:30:47.0Z" epcglobal:schemaVersion="0.0" xsi:schemaLocation="urn:epcglobal:rm:xsd:1 ../../../schemas/RmCommand.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:rm="urn:epcglobal:rm:xsd:1" xmlns:epcglobal="urn:epcglobal:xsd:1" xmlns:motorm="urn:motorfid:rm:xsd:1">
            <rm:id>99</rm:id>
            <rm:targetName>MyFX7500</rm:targetName>
            <motorm:readerDevice>
                <motorm:sessionID>sessionID</motorm:sessionID>
                <motorm:importCloudConfigToReader>
                    <motorm:CloudConfigData>JSON_CONFIG_DATA</motorm:CloudConfigData>
                </motorm:importCloudConfigToReader>
            </motorm:readerDevice>
        </rm:command> 
        ```

        Note: `sessionID` must be replaced by the session ID from step 2

        Note: `JSON_CONFIG_DATA` must be replace by the json configuration created in step 1

    2. Send a `GET` request to the reader at `http://<readerip>/control` with the xml file above as payload. If using curl, the command would be:

        ```
         curl --location --request GET 'http://<readerip>/control'
              --header 'Content-Type: application/xml'
              --data-binary "@import.xml"
       ```

        Note: The reader's hostname or ip address must replace `<readerip>` in the example URL above

        Note: If the reader is using https and not http, `http` in the example URL above must be changed to `https`

    3. Assuming no errors occured in the `GET` request, a successful response will look something like this:

        ```xml
        <g1:reply xmlns:g1="urn:epcglobal:rm:xsd:1" xmlns:g2="urn:epcglobal:xsd:1" g2:creationDate="2010-02-10T10:10:10Z" g2:schemaVersion="1">
            <g1:id>99</g1:id>
            <g1:resultCode>0</g1:resultCode>
            <g3:readerDevice xmlns:g3="urn:motorfid:rm:xsd:1">
                <g3:importCloudConfigToReader></g3:importCloudConfigToReader>
            </g3:readerDevice>
        </g1:reply>
       ```

5. Confirm the new cloud configuration
    1. Using the session ID from step 2, create and save the following as export.xml

        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <rm:command epcglobal:creationDate="2001-12-17T09:30:47.0Z" epcglobal:schemaVersion="0.0" xsi:schemaLocation="urn:epcglobal:rm:xsd:1 ../../../schemas/RmCommand.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:rm="urn:epcglobal:rm:xsd:1" xmlns:epcglobal="urn:epcglobal:xsd:1" xmlns:motorm="urn:motorfid:rm:xsd:1">
            <rm:id>99</rm:id>
            <rm:targetName>MyFX7500</rm:targetName>
            <motorm:readerDevice>
                <motorm:sessionID>SessionID</motorm:sessionID>
                <motorm:exportCloudConfigFromReader></motorm:exportCloudConfigFromReader>
            </motorm:readerDevice>
        </rm:command>
        ```

        Note: `sessionID` must be replaced by the session ID from step 2

    2. Send a `GET` request to the reader at `http://<readerip>/control` with the xml file above as payload. If using curl, the command would be:

        ```
         curl --location --request GET 'http://<readerip>/control'
              --header 'Content-Type: application/xml'
              --data-binary "@export.xml"
       ```

        Note: The reader's hostname or ip address must replace `<readerip>` in the example URL above

        Note: If the reader is using https and not http, `http` in the example URL above must be changed to `https`

    3. Assuming no errors occured in the `GET` request, a successful response will look something like this:

        ```xml
        <g1:reply xmlns:g1="urn:epcglobal:rm:xsd:1" xmlns:g2="urn:epcglobal:xsd:1" g2:creationDate="2010-02-10T10:10:10Z" g2:schemaVersion="1">
            <g1:id>99</g1:id>
            <g1:resultCode>0</g1:resultCode>
            <g3:readerDevice xmlns:g3="urn:motorfid:rm:xsd:1">
                <g3:exportCloudConfigFromReader>
                    <g3:ConfigData>{
           "control": {
               "commandResponse": {
                   "enableLocalRest": true
               }
           },
           "management": {
               "commandResponse": {
                   "enableLocalRest": true
               }
           },
           "data": {
               "event": {
                   "connections": [
                       {
                           "type": "httpPost",
                           "options": {
                               "URL": "http://192.168.1.1:8080",
                               "security": {
                                   "verifyPeer": false,
                                   "verifyHost": false,
                                   "authenticationType": "NONE"
                               }
                           }
                       }
                   ]
               }
           }
        }
        </g3:ConfigData>
                </g3:exportCloudConfigFromReader>
            </g3:readerDevice>
        </g1:reply>
       ```

6. Enable connection
    1. Using the session ID from step 2, create and save the following as connect.xml

        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <rm:command xmlns:rm="urn:epcglobal:rm:xsd:1" xmlns:epcglobal="urn:epcglobal:xsd:1" xmlns:motorm="urn:motorfid:rm:xsd:1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" epcglobal:creationDate="2001-12-17T09:30:47.0Z" epcglobal:schemaVersion="0.0" xsi:schemaLocation="urn:epcglobal:rm:xsd:1 ../../../schemas/RmCommand.xsd">
            <rm:id>104</rm:id>
            <rm:targetName />
            <motorm:readerDevice>
                <motorm:sessionID>{{sessionID}}</motorm:sessionID>
                <motorm:connectToCloud />
            </motorm:readerDevice>
        </rm:command>
        ```

        Note: `sessionID` must be replaced by the session ID from step 2

    2. Send a `GET` request to the reader at `http://<readerip>/control` with the xml file above as payload. If using curl, the command would be:

        ```
         curl --location --request GET 'http://<readerip>/control'
              --header 'Content-Type: application/xml'
              --data-binary "@connect.xml"
        ```

        Note: The reader's hostname or ip address must replace `<readerip>` in the example URL above

        Note: If the reader is using https and not http, `http` in the example URL above must be changed to `https`

    3. Assuming no errors occured in the `GET` request, a successful response will look something like this:

        ```xml
        <g1:reply xmlns:g1="urn:epcglobal:rm:xsd:1" xmlns:g2="urn:epcglobal:xsd:1" g2:creationDate="2010-02-10T10:10:10Z" g2:schemaVersion="1">
            <g1:id>104</g1:id>
            <g1:resultCode>0</g1:resultCode>
            <g3:readerDevice xmlns:g3="urn:motorfid:rm:xsd:1">
                <g3:connectToCloud>
                    <g3:isConnected>true</g3:isConnected>
                </g3:connectToCloud>
            </g3:readerDevice>
        </g1:reply>
        ```

## Generic Configuration
[Schema](CloudConfigurationSchema.md)

