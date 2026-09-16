# Read Tag Temperature

The readTemperature API reads the temperature from a temperature-sensing RFID tag and returns the value in degrees Celsius.

**Note:** This API is supported only on RFD40 and RFD90 readers running the latest firmware.

## API

Class: com.zebra.rfid.api3.AxzonTemperatureReader

```java
public AxzonTemperatureReader(RFIDReader reader)

public double readTemperature(String tagId)
        throws InvalidUsageException, OperationFailureException
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| reader | RFIDReader | A connected RFIDReader instance, passed to the constructor. |
| tagId | String | EPC of the tag to read, as a hex string. |

### Return value

| Type | Description |
| --- | --- |
| double | The tag temperature in degrees Celsius. |

## How to use

Create an AxzonTemperatureReader with a connected reader and call readTemperature with the tag EPC.

```java
import com.zebra.rfid.api3.AxzonTemperatureReader;

// 'reader' is a connected RFIDReader instance
AxzonTemperatureReader tempReader = new AxzonTemperatureReader(reader);

try {
    double celsius = tempReader.readTemperature("AABBCCDDEEFF001122334455");
    Log.d(TAG, "Temperature: " + celsius + " C");

} catch (Exception e) {
    Log.e(TAG, "Temperature read failed: " + e.getMessage());
}
```

## Notes

- Supported only on RFD40 and RFD90 readers with the latest firmware.
- The reader must be connected before calling the API.
- The call takes a few seconds to complete, so call it from a background thread and not from the UI thread.
- One tag is read per call. Keep the tag in front of the antenna for the whole duration of the call.
- Any pre-filters that are already set are deleted when readTemperature is called. Re-apply the pre-filters after the call if the application needs them.
- The temperature is returned in Celsius. Convert to Fahrenheit in the application if required.
