---
title: Get Version Info 
layout: guide.html
product: DataWedge
productversion: '8.0'
---

## GET_VERSION_INFO

Introduced in DataWedge 6.4.

Gets the version numbers of DataWedge, SimulScan, and the Scanner Framework/Decoder Library currently installed on the device. 

To retrieve the DataWedge version, the following needs to be performed **before** calling GET_VERSION_INFO:
* Register the Broadcastreceiver
* Call `filter.addCategory(Intent.CATEGORY_DEFAULT);`

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_VERSION_INFO", "");

### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.GET_VERSION_INFO"

**EXTRA VALUE**: Empty string

### Return Values
Returns a bundle with the version numbers of DataWedge, SimulScan, the Scanner Framework/Decoder Library currently installed on the device. 

**EXTRA NAME**: "com.symbol.datawedge.api.GET_VERSION_INFO_RESULT"

**EXTRA TYPE**: [Bundle] 

**BUNDLE**:

* DATAWEDGE, 6.3.1
* BARCODE_SCANNING, 16.0.56.1  
* DECODER_LIBRARY, IMGKIT_XXXXX
* SIMULSCAN, 1.6.13

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

## Example Code

	:::java
	@Override
    protected void onResume() {
        super.onResume();

        IntentFilter ifl = new IntentFilter();
        ifl.addAction("com.symbol.datawedge.api.RESULT_ACTION");
        ifl.addCategory(Intent.CATEGORY_DEFAULT); //Category should be set to default
        registerReceiver(broadcastReceiver, ifl);
    }

    @Override
    protected void onPause() {
        super.onPause();
        
        unregisterReceiver(broadcastReceiver);
    }

	BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
        
		//Retrieving version information - receiver implementation
        
		@Override
        public void onReceive(Context context, Intent intent){

            String text = null;

            if(intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_VERSION_INFO")){
                
				String SimulScanVersion  = "Not supported";
                String[] ScannerFirmware = {""};
                Bundle res = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_VERSION_INFO");
                String DWVersion = res.getString("DATAWEDGE");
                String BarcodeVersion = res.getString("BARCODE_SCANNING");
                String DecoderVersion = res.getString("DECODER_LIBRARY");
                
				if(res.containsKey("SCANNER_FIRMWARE")){
                    ScannerFirmware = res.getStringArray("SCANNER_FIRMWARE");
                }
                
				if(res.containsKey("SIMULSCAN")) {
                    SimulScanVersion = res.getString("SIMULSCAN");
                }

                text = "DataWedge:"+DWVersion+"\nDecoderLib:"+DecoderVersion+"\nFirmware:";
                
				if(ScannerFirmware!=null){
                    for(String s: ScannerFirmware){
                        text+= "\n"+s;
                    }
                }
                text += "\nBarcodescan:" + BarcodeVersion + "\nSimulscan:" + SimulScanVersion;
            }

            Toast.makeText(context, text, Toast.LENGTH_LONG).show();
            Log.d(TAG,text);
        }
    };

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
