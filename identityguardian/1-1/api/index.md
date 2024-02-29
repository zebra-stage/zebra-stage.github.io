---
title: APIs
layout: guide.html
product: Identity Guardian
productversion: "1.1"
---

## Overview

This guide discusses the APIs offered by **Identity Guardian.** Identity Guardian implements a content provider interface to securely retrieve and share data between applications. The content provider URI contains four distinct parts: `<Scheme:>//<Authority>/<API>/<data>`

1. **Scheme -** The identifier that informs Android that the URI provides access to a content source. This is typically: `content://`
2. **Authority -** The authority name, typically in the forma `packagename.provider`.
3. **API -** Th path that differentiates the content data.
4. **Data -** The key name which points to data in the path.

Example of content provider URI: `content://com.zebra.mdna.els.provider/<API>/<data>`

`<API>` and `<data>` are replaced with the appropriate string.

---

## Requirements

- In the **AndroidManifest.xml** of your application, add the required permission and the `<queries>` tag, which defines the package name for Identity Guardian:

        <uses-permission android:name="com.zebra.mdna.els.permission.PROVIDER" />
        <queries>
            <package android:name="com.zebra.mdna.els" />
        </queries>

- For security purposes, your app must be included on Identity Guardian's permitted app whitelist using [AccessMgr CSP](/mx/accessmgr) from [Zebra Device Manager (ZDM)](/flux/about) to enable utilization of the APIs. Create a profile using [StageNow](/stagenow) to deploy the configuration to whitelist your app. Set the following parameters:

  - **Operation Mode:** "Single User without Whitelist"
  - **Service Access Action**: "Allow Caller to Call Service"
  - **Service Identifier**: &lt;delegation scope of the API category&gt;
  - **Specify Caller Package Name**: &lt;enter app package name, e.g.: com.company.appname&gt;
  - **Caller Signature**: &lt;select signature file that contains the app certificate&gt;

See [Caller Signature](/mx/accessmgr/#caller-signature) in the Access Mgr CSP documentation for information on generating a signature file. After creating the StageNow profile, use StageNow to scan the barcode generated or deploy the XML file via Enterprise Mobility Management (EMM) software.

---

## Register for Notifications

Register to receive notifications on the locked/unlocked status of Identity Guardian for user sign in/out events. Register this API in onCreate() and unregister it in onDestroy() method.

URI: `content://com.zebra.mdna.els.provider/lockscreenstatus/state`

Sample code:

        Uri URI_CURRENT_LOCKSCREEN_STATE = Uri.parse("content://com.zebra.mdna.els.provider/lockscreenstatus/state");
        cr.registerContentObserver(URI_CURRENT_LOCKSCREEN_STATE, false, contentObserverLockScreenState);
        contentObserverLockScreenState = new ContentObserver(new Handler(getMainLooper())) {

            @Override
            public void onChange(boolean selfChange, Uri uri) {
                super.onChange(selfChange, uri);
                Log.d(TAG, "content has changed, uri = " + uri);
                new Thread(new Runnable() {
                    @Override
                    public void run() {
                        getCurrentLockScreenStateOfDevice();
                    }
                }).start();

            }
        };

The return value is in a JSON string format:

        {state: “SHOWN” or “HIDDEN”, lastchangedtimestamp:”MM:DD:YY HH:MM:SS”}

- "HIDDEN" indicates that the device is unlocked and a user is currently logged in.
- "SHOWN" indicates that the device is locked and no user is logged in.

---

## Retrieve User Session Data

### Retrieve Current User Session Data

Retrieve data from the current user's session. The data retrieved includes: user ID, role, and timestamps for sign in/out.

URI: `content://com.zebra.mdna.els.provider/currentsession`

Sample code:

        Uri URI_USER_CURRENT_SESSION = Uri.parse("content://com.zebra.mdna.els.provider/currentsession");
        Cursor cursor = cr.query(URI_USER_CURRENT_SESSION, null, null, null, null);

If cursor is null or empty, it means no user has signed in.

Return value (cursor):

        result : {"signin_time":"2023-10-04 10:53.381+0530","user_role":"Manager","user_id":"John Doe","signout_time":null,"barcode_id":"16946760673674C04C38","signed_in_state":"1"}

### Retrieve Previous User Session Data

Retrieve data from the last user's session. Data retrieved include: user ID, role, and timestamps for sign in/out.

URI = `content://com.zebra.mdna.els.provider/previoussession`

Sample code:

        Uri URI_PREVIOUS_USER_SESSION = Uri.parse("content://com.zebra.mdna.els.provider/previoussession");
        Cursor cursor = cr.query(URI_PREVIOUS_USER_SESSION , null, null, null, null);

Return value (cursor):

        result: {"signin_time":"2023-10-04 11:19.338+0530","user_role":"Warehouse ","user_id":"John Doe","signout_time":"2023-10-04 11:19.068+0530","barcode_id":"1693820652113F736CAB","signed_in_state":"0"}

---

## Authenticate User

This launches Identity Guardian for user authentication.

URI = `content://com.zebra.mdna.els.provider/lockscreenaction/startauthentication`

Sample code:

        String BASE_URI = "content://com.zebra.mdna.els.provider/";
        private final String USER_VERIFICATION = "user_verification";
        private final String LAUNCH_FLAG = "launchflag";
        Uri uri = Uri.parse(BASE_URI);

        String METHOD_NAME = "lockscreenaction";
        String API_NAME = "startauthentication";
        ContentResolver cr = getContentResolver();
        Bundle bundle = new Bundle();
        bundle.putString(USER_VERIFICATION, "authenticationScheme1");
        bundle.putString(LAUNCH_FLAG, "blocking");

        Bundle response = cr.call(uri, METHOD_NAME, API_NAME, bundle);
        if (response != null && response.containsKey("RESULT")) {
            Log.i(TAG, response.getString("RESULT"));
        }

Possible "user_verification" values:

- authenticationScheme1
- authenticationScheme2
- authenticationScheme3
- authenticationScheme4

Possible "launchflag" values:

- blocking (The notification bar, system bar, home button, and recent button are disabled and cannot be accessed by the user.)
- unblocking

Return RESULT:

- authState: IN_PROGRESS (The device screen is in the process of being locked by Identity Guardian.)
- authState: BUSY (The device screen is already locked by another application.)
- authState: SUCCESS (The device screen is successfully locked by Identity Guardian.)
- authState: ERROR (An exception has occurred.)

---

## Check App Status

After calling Authenticate User, monitor the Identity Guardian status of screen lock state and user sign in/out by registering for notifications of these state changes. For example, if Identity Guardian launched successfully, will be launched or is launched by another application, listen for these notifications to take further action if needed.

URI: `content://com.zebra.mdna.els.provider/lockscreenaction/authenticationstatus`

Sample code:

        Uri uri = Uri.parse(BASE_URI + "lockscreenaction/authenticationstatus");
        ContentResolver cr = getContentResolver();
        Cursor cursor = cr.query(uri, null, null, null, null);
        if (cursor != null){
            Bundle bundle = cursor.getExtras();
            if (bundle != null && bundle.containsKey("RESULT")) {
                String valueFromBundle = bundle.getString("RESULT");
                Log.i("TAG", "" + valueFromBundle);

            }
        }

Return RESULT:

- authState: IN_PROGRESS (The device screen is in the process of being locked by Identity Guardian.)
- authState: BUSY (The device screen is already locked by another application.)
- authState: SUCCESS (The device screen is successfully locked by Identity Guardian.)
- authState: ERROR (An exception has occurred.)

Register for application state change (sign in/out, screen lock state):

        Uri URI_AUTHENTICATION_STATUS = Uri.parse("content://com.zebra.mdna.els.provider/lockscreenaction/authenticationstatus");
        cr.registerContentObserver(URI_AUTHENTICATION_STATUS,false,contentObserverAuthenticationStatus);
        contentObserverAuthenticationStatus = new ContentObserver(new Handler(getMainLooper())) {

            @Override
            public void onChange(boolean selfChange, Uri uri) {
                super.onChange(selfChange, uri);
                Log.d(TAG, "content has changed, uri = " + uri);
            }
        }

Return value:

        response: {"code":0,"message":"Authenticated user","status":"SUCCESS","userData":{"applicationId":"com.test.lob_testapp_2","barcodeId":"1693820652113F736CAB","userId":"ns4943","userLoggedInState":"SUCCESS","userLoginTime":"2023-10-03 14:42.901+0530","userRole":"Warehouse "}}

---

## See Also

- [About Identity Guardian](../about)
- [Licensing](../licensing/)
- [Setup](../setup)
- [User Guide](../usage)
- [Managed Configurations](../mc)
