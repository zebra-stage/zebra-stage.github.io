---
title: Secure Access to DataWedge Intent APIs
layout: guide.html
product: DataWedge
productversion: '8.1'
---

## Overview

Previously, any application on the device could configure DataWedge parameters and receive information such as configurations and status notifications via DataWedge APIs. This led to a potential security risk where a malicious application can configure DataWedge profiles used by other applications and leverage it for its own advantage. For example, a malicious app could modify the destination URI of IP Output plugin to divert the data delivery to a different address.

Now DataWedge provides an option for admins to secure access to DataWedge intent APIs, allowing only approved apps to configure DataWedge. DataWedge intent APIs are categorized, allowing the administrator to grant DataWedge API access to specific apps based on category. By default, DataWedge accepts any intent API to avoid impact to existing applications.

## Secure Access 

The process to secure access to DataWedge intent APIs:
1.	Whitelist approved app using [AccessMgr CSP](/mx/accessmgr) from MX.
2.	Specify the intent API category to restrict intent API access via [DataWedgeMgr CSP](/mx/datawedgmgr) from MX.
3.	Acquire the app token from AccessMgr using EMDK.
4.	Access the API by including the token in the DataWedge intent.

Details are provided in the sections that follow.

### 1. Whitelist Approved App 

The first step to secure access to DataWedge intent APIs is for the admin to whitelist the app using [AccessMgr CSP](/mx/accessmgr) from MX. Whitelisting allows only the apps specified on a list to run, restricting use of apps not on the approved whitelist. Use [StageNow](/stagenow) or [EMDK profile Manager](/emdk-for-android/8-0/guide/profile-manager-guides/) to deploy the configuration to whitelist the app. Set the following parameters:

* **Service Access Action**: "Allow caller" 
* **Service Identifier**: com.symbol.datawedge.api
* **Specify Caller Package Name**: &lt;enter app package name, e.g.: com.company.appname&gt;
* **Caller Signature**: &lt;select signature file that contains the app certificate&gt;

The following permission must be added to the manifest of the Android application so it can be granted access to the DataWedge content provider:

		<uses-permission android:name="com.symbol.datawedge.permission.contentprovider" />


### 2. Restrict DataWedge Intent APIs

By default, all DataWedge APIs are in uncontrolled mode - any application can access all DataWedge APIs. An admin can place a DataWedge API category into controlled/uncontrolled mode using DataWedgeMgr CSP via StageNow to restrict access to a particular API category. Refer to **Control Access to Intent APIs** in [DataWedgeMgr CSP](/mx/datawedgmgr).

<table class="facelift" style="width:70%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>API Category</th>
    <th>Control Modes</th>
  </tr>

  <tr>
    <td>Configuration APIs</td>
	<td>Uncontrolled<br>Controlled</td>
  </tr>

  <tr>
    <td>Notification APIs</td>
	<td>Uncontrolled<br>Controlled</td>
  </tr>

  <tr>
    <td>Query API</td>
	<td>Uncontrolled<br>Controlled</td>
  </tr>
  <tr>
    <td>Runtime APIs</td>
	<td>Uncontrolled<br>Controlled</td>
  </tr>
</table>

**Uncontrolled –** All apps have access to APIs; this the default setting.<br>
**Controlled –** This restricts API access. Only the admin can whitelist apps to access the APIs using AccessMgr CSP.

[DataWedge APIs](../api) are categorized into 4 types:
* **Configuration APIs -** APIs that retrieve configurations or take action on configurations
* **Notification APIs -** APIs that generate a returned value
* **Query API -** APIs that retrieve information or enumerate scanners
* **Runtime APIs -** APIs that can function at runtime

Administrators can designate which categories are protected using [DataWedgeMgr CSP](/mx/datawedgmgr). By default, all the API categories are in unprotected mode.

<table class="facelift" style="width:70%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Intent API category</th>
    <th>Intent APIs</th>
  </tr>

  <tr>
    <td>Configuration APIs</td>
	<td>Get Config<br>Get Disabled app list<br>Get ignore disabled profiles<br>Get Profile list<br>Clone Profile<br>Create Profile<br>Delete Profile<br>Rename Profile<br>Set Ignore Disabled profiles<br>Set Disabled App list<br>Restore Config<br>Import Configuration<br>Export Configuration
    </td>
  </tr>

  <tr>
    <td>Notification APIs</td>
	<td>Profile Switching<br>Scanner Status<br>Configuration change<br></td>
  </tr>

  <tr>
    <td>Query API</td>
	<td>Enumerate Scanners<br>Get Active Profile<br>Get DataWedge Status<br>Get version info<br>Get Scanner Status</td>
  </tr>

  <tr>
    <td>Runtime APIs</td>
	<td>Enable/Disable DataWedge<br>Enable/Disable scanner<br>Switch Scanner Params<br>Switch SimulScan Params<br>Soft Scan Trigger<br>Soft RFID Trigger<br>Switch To Profile<br>Set Default Profile<br>Reset Default Profile<br>Switch Scanner</td>
  </tr>
</table>

### 3. Acquire a Token

Only whitelisted applications are allowed to call DataWedge service identifier to generate tokens.
The applications must use EMDK ProfileManager APIs to acquire a token from AccessMgr CSP.

To generate a token, use EMDK Profile Manager to create a profile:

1.	Open [EMDK ProfileManager](/emdk-for-android/8-0/guide/profile-manager-guides).
2.	Create a new profile using MX 10.1 or above and provide a name, such as RequestToken.
3.	In the “Available Features” list, select and add “Access Manager” as a feature.  
4.	Access Manager is listed under “Selected Features”.
5.	In the Access Manager parameters section, set/enter the following:
    * **Service Access Action**: “Request Token”
    * **Service Identfier**: com.symbol.datawedge.api

Sample generated EMDKConfig.xml from EMDK Profile Manager:

        <?xml version="1.0" encoding="UTF-8"?><!--This is an auto generated document. Changes to this document may cause incorrect behavior.--><wap-provisioningdoc>
        <characteristic type="ProfileInfo">
            <parm name="created_wizard_version" value="7.3.2"/>
        </characteristic>
        <characteristic type="Profile">
            <parm name="ProfileName" value="RequestToken"/>
            <parm name="ModifiedDate" value="2020-03-23 20:01:24"/>
            <parm name="TargetSystemVersion" value="9.1"/>
            <characteristic type="AccessMgr" version="8.3">
            <parm name="emdk_name" value=""/>
            <parm name="ServiceAccessAction" value="7"/>
            <parm name="ServiceIdentifier" value="com.symbol.datawedge.api"/>
            </characteristic>
        </characteristic>
        </wap-provisioningdoc>

Use [ProcessProfile API](/emdk-for-android/latest/api/reference/com/symbol/emdk/ProfileManager) from EMDK to generate the token to be passed to the desired DataWedge API intent for secure access.  Sample code to generate the token:

        import android.content.Context;
        import android.os.AsyncTask;
        import android.text.TextUtils;
        import android.util.Xml;

        import com.symbol.emdk.EMDKManager;
        import com.symbol.emdk.EMDKResults;
        import com.symbol.emdk.ProfileManager;

        import org.xmlpull.v1.XmlPullParser;
        import org.xmlpull.v1.XmlPullParserException;

        import java.io.StringReader;

        public class TokenOperations implements EMDKManager.EMDKListener {

            static Object syncObj = new Object();
            Context mContext;
            // Provides the error type for characteristic-error
            private String errorType = "";
            // Provides the parm name for parm-error
            private String parmName = "";
            // Provides error description
            private String errorDescription = "";
            // Provides error string with type/name + description
            private String errorString = "";
            private String mToken = "";
            //Assign the profile name used in EMDKConfig.xml
            private String profileName = "";
            //Declare a variable to store ProfileManager object
            private ProfileManager profileManager = null;
            //Declare a variable to store EMDKManager object
            private EMDKManager emdkManager = null;


            public TokenOperations(Context context)
            {
                this.mContext = context;
            }

            public String getErrorDescription()
            {
                return errorDescription;
            }

            public String generateToken()
            {
                EMDKResults results = EMDKManager.getEMDKManager(mContext, this);

                //Check the return status of EMDKManager object creation.
                if(results.statusCode == EMDKResults.STATUS_CODE.SUCCESS) {
                    //EMDKManager object creation success
                }else {
                    //EMDKManager object creation failed
                }


                try {
                    synchronized (syncObj) {
                        syncObj.wait();
                    }
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

                if (emdkManager != null) {
                    emdkManager.release();
                    emdkManager = null;
                }

                return mToken;

            }

            @Override
            public void onOpened(EMDKManager emdkManager) {

                this.emdkManager = emdkManager;
                //Get the ProfileManager object to process the profiles
                profileManager = (ProfileManager) emdkManager.getInstance(EMDKManager.FEATURE_TYPE.PROFILE);
                profileName = "RequestToken";
                new ProcessProfileTask().execute("");
            }

            @Override
            public void onClosed() {

                //This callback will be issued when the EMDK closes unexpectedly.
                if (emdkManager != null) {
                    emdkManager.release();
                    emdkManager = null;
                }
            }

            private void parseXML(XmlPullParser myParser) {
                int event;
                try {
                    // Retrieve error details if parm-error/characteristic-error in the response XML
                    event = myParser.getEventType();
                    while (event != XmlPullParser.END_DOCUMENT) {
                        String name = myParser.getName();
                        switch (event) {
                            case XmlPullParser.START_TAG:
                                if (name.equals("parm-error")) {
                                    parmName = myParser.getAttributeValue(null, "name");
                                    errorDescription = myParser.getAttributeValue(null, "desc");
                                    errorString = " (Name: " + parmName + ", Error Description: " + errorDescription + ")";
                                    return;
                                }
                                else if (name.equals("parm")) {
                                    String parmName = myParser.getAttributeValue(null, "name");
                                    if(parmName.equalsIgnoreCase("ServiceAccessToken"))
                                    {
                                        //Retrieved Token will be saved to a variable
                                        mToken = myParser.getAttributeValue(null, "value");

                                        return;
                                    }

                                }
                                break;
                            case XmlPullParser.END_TAG:

                                break;
                        }
                        event = myParser.next();
                    }

                } catch (Exception e) {
                    e.printStackTrace();
                }
            }

            private class ProcessProfileTask extends AsyncTask<String, Void, EMDKResults> {

                @Override
                protected EMDKResults doInBackground(String... params) {

                    parmName = "";
                    errorDescription = "";
                    errorType = "";
                    mToken = "";

                    EMDKResults resultsReset = profileManager.processProfile(profileName, ProfileManager.PROFILE_FLAG.RESET, params);
                    EMDKResults results = profileManager.processProfile(profileName, ProfileManager.PROFILE_FLAG.SET, params);

                    return results;
                }

                @Override
                protected void onPostExecute(EMDKResults results) {

                    super.onPostExecute(results);

                    String resultString = "";

                    //Check the return status of processProfile
                    if(results.statusCode == EMDKResults.STATUS_CODE.CHECK_XML) {

                        // Get XML response as a String
                        String statusXMLResponse = results.getStatusString();

                        try {
                            // Create instance of XML Pull Parser to parse the response
                            XmlPullParser parser = Xml.newPullParser();
                            // Provide the string response to the String Reader that reads
                            // for the parser
                            parser.setInput(new StringReader(statusXMLResponse));
                            // Call method to parse the response
                            parseXML(parser);

                            if (TextUtils.isEmpty(parmName) && TextUtils.isEmpty(errorType) && TextUtils.isEmpty(errorDescription) ) {

                                resultString = "Profile update success.";
                                if(!TextUtils.isEmpty(mToken))
                                {
                                    resultString = "";
                                }
                            }
                            else {

                                resultString = "Profile update failed." + errorString;
                            }

                            synchronized (syncObj) {
                                syncObj.notify();
                            }

                        } catch (XmlPullParserException e) {
                            resultString =  e.getMessage();
                        }
                    }
                }
            }
        }


### 4. Accessing the APIs

Once the token is generated, it needs to be included in the intent API call along with the calling application’s package name being sent to DataWedge. When the intent is received by DataWedge, DataWedge verifies if the token is valid for the given application. If the token is valid, DataWedge processes the intent. If the token is not valid, one of the following error codes occur:

* Main error code: `APPLICATION_NOT_AUTHORIZED`
* Sub error codes:
    * `TOKEN_EXPIRED`: The token is expired; applications are required to acquire a new token.
    * `MX_NOT_INITIALIZED`:  MX is not initialized. This can usually occur right after a reboot.
    * `FAILED_TO_VERIFY_APPLICATION`: Unable to verify the calling application (i.e token is invalid or application is not whitelisted).

Source code samples are provided for multiple APIs: 

#### Example 1: Get Config

        Intent i = new Intent();
        i.setAction("com.symbol.datawedge.api.ACTION");
        i.setPackage("com.symbol.datawedge");
        i.putExtra("APPLICATION_PACKAGE", getPackageName());
        i.putExtra("TOKEN", "291f7f7c-1479-4813-9639-2d4ab31e37b9");
        i.putExtra("com.symbol.datawedge.api.GET_CONFIG", "Profile0 (default)");
        this.sendBroadcast(i);

#### Example 2: Enable/Disable DataWedge

        Intent i = new Intent();
        i.setAction("com.symbol.datawedge.api.ACTION");
        i.setPackage("com.symbol.datawedge");
        i.putExtra("APPLICATION_PACKAGE", getPackageName());
        i.putExtra("TOKEN", "<token here>"););
        i.putExtra("SEND_RESULT","LAST_RESULT");
        i.putExtra("com.symbol.datawedge.api.ENABLE_DATAWEDGE", true);
        sendBroadcast(i);


#### Example 3: Set Config

        Bundle bMain = new Bundle();
        bMain.putString("PROFILE_NAME", "Profile009");
        bMain.putString("PROFILE_ENABLED", "true");
        bMain.putString("CONFIG_MODE", "CREATE_IF_NOT_EXIST");

        Bundle bConfig = new Bundle();
        bConfig.putString("PLUGIN_NAME","BARCODE");
        bConfig.putString("RESET_CONFIG","true");


        Bundle paramList = new Bundle();
        paramList.putString("scanner_selection","auto");
        paramList.putString("decoder_code11", "true");

        bConfig.putBundle("PARAM_LIST", paramList);

        bMain.putBundle("PLUGIN_CONFIG", bConfig);

        Intent i = new Intent();
        i.setAction("com.symbol.datawedge.api.ACTION");
        i.setPackage("com.symbol.datawedge");
        i.putExtra("APPLICATION_PACKAGE", getPackageName());
        i.putExtra("TOKEN", "<token here>"););
        i.putExtra("com.symbol.datawedge.api.SET_CONFIG", bMain);
        i.putExtra("SEND_RESULT","LAST_RESULT");
        i.putExtra("COMMAND_IDENTIFIER", "SET_CONFIG");
        this.sendBroadcast(i);


## Usage Notes

* When DataWedge APIs are set as "Controlled" and when the device restarts, sending an Intent API to the "Controlled" group from a whitelisted application may return an error. Since MX framework did not complete initialization, allow some time to elapse after reboot before sending the intent to avoid this error. 
* The token expires in the following situations:
    * Device date or time is set prior to the timestamp on the token.
    * 24 Hours passed in the device clock after generating the token.
    * Automatic time updates caused the device time to go backward or move forward more than 24 hours.
* If Runtime Intent APIs are placed into protected mode, the Scan button of Enterpise Keyboard does not work for versions below 3.9.x/4.0.
* MX version 10.1.1 or above is required to be present on the device.


-----

Related Guides: 

* [DataWedge APIs](../../api) 
* [EMDK ProfileManager](/emdk-for-android/8-0/guide/profile-manager-guides)
* [AccessMgr CSP](/mx/accessmgr)
* [DataWedgeMgr CSP](/mx/datawedgmgr)
* [DataWedge Get Started guide](../../gettingstarted)
