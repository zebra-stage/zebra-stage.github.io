# Runtime Logging API
**RFD40 / RFD90 RFID Sleds**

RFID SDK for Android 2.0.5.292

## Overview

This tutorial provides a comprehensive guide for developers to integrate, configure, and retrieve Runtime Logs from Zebra RFD40 and RFD90 RFID sled devices using the Zebra RFID SDK for Android.

Runtime logging enables developers to capture firmware diagnostics, communication events, reader state transitions, and error information for troubleshooting, debugging, performance analysis, and support diagnostics.

Using the Runtime Logging APIs, an application can:

- Configure reader logging behavior
- Enable or disable SDK debug logging
- Stream real-time reader diagnostics
- Retrieve internal RAM and FLASH logs
- Export logs for troubleshooting and support analysis

## Create the Project

1. Create a new Android Studio project.
2. Follow the Hello RFID tutorial to configure the Zebra RFID SDK.
3. Connect to an RFD40 or RFD90 reader.
4. Follow the Runtime Logging APIs described below.

---

# Runtime Logging Architecture

The Runtime Logging UI provides the following operations:

| Index | Functional Area | Description |
|---------|---------|---------|
| 1 | Enable Debug Logs | Enable or disable SDK debug logging |
| 2 | Enable Real-Time Logs | Configure reader log verbosity |
| 3 | Retrieve Logs | Request RAM and FLASH logs |
| 4 | Export Logs | Export retrieved logs to a local file |

---

## 1. Application - Enable Debug Logs

### Purpose

Enables or disables RFID SDK debug logging.

When enabled, SDK diagnostic messages are written to Android Logcat.

### SDK API Usage

```java
// Enable debug logs
logger.setLogConfig(LogStates.DEBUGLOGGERSTATE, true);

// Disable debug logs
logger.setLogConfig(LogStates.DEBUGLOGGERSTATE, false);

// Read current state
boolean enabled =
        logger.getLogConfig(LogStates.DEBUGLOGGERSTATE);
```

### Behavior

| State | Behavior |
|---------|---------|
| ON | SDK logs are written to Logcat |
| OFF | SDK logs are suppressed |

---

## 2. Reader - Enable Real-Time Logs

### Purpose

Controls real-time diagnostic information streamed from the connected RFID reader.

### Supported Logging Levels

| Logging Level | Description |
|---------|---------|
| None | Real-time logging disabled |
| Error | Error messages only |
| Warning | Warnings and errors |
| Verbose | All available log information |

### SDK API Usage

```java
logger.setRfidRealTimeReaderLog(
        RealTimeLogsType.Verbose);

logger.setRfidRealTimeReaderLog(
        RealTimeLogsType.Error);

logger.setRfidRealTimeReaderLog(
        RealTimeLogsType.Warning);

logger.setRfidRealTimeReaderLog(
        RealTimeLogsType.None);
```

---

### setRfidRealTimeReaderLog()

Configures reader-side real-time logging.

#### Method Signature

```java
void setRfidRealTimeReaderLog(
        RealTimeLogsType realTimeLogsType)
```

#### Exceptions

- InvalidUsageException
- OperationFailureException
- ADMIN_CONNECT_ERROR

---

### Example: Verbose Logging

```java
try {

    logger.setRfidRealTimeReaderLog(
            RealTimeLogsType.Verbose);

} catch (InvalidUsageException e) {

    Log.e(TAG,
          "Invalid parameter: " +
          e.getInfo());

} catch (OperationFailureException e) {

    Log.e(TAG,
          "Operation failed: " +
          e.getResults());
}
```

### Example: Error Logging

```java
logger.setRfidRealTimeReaderLog(
        RealTimeLogsType.Error);
```

### Example: Disable Logging

```java
logger.setRfidRealTimeReaderLog(
        RealTimeLogsType.None);
```

---

## 2.1 Query Reader Logging State

Applications can query reader-side log configuration.

### SDK API Usage

```java
void getRfidReaderLogs(
        LogStates logState,
        boolean state)
        throws InvalidUsageException,
               OperationFailureException;
```

### API Summary

| Method | Purpose | Reader Communication |
|---------|---------|---------|
| setRfidRealTimeReaderLog() | Configure reader logging | Yes |
| getRfidReaderLogs() | Query/retrieve reader logs | Yes |
| setLogConfig() | Configure SDK logging | No |
| getLogConfig() | Read SDK logging state | No |

---

## 3. Retrieve Logs

### Purpose

Retrieves historical log data stored in internal RAM and FLASH memory.

### Example

```java
try {

    rfidLogger.getRfidReaderLogs(
            LogStates.INTERNALRAMANDFLASHLOGSTATE,
            true);

} catch (InvalidUsageException e) {

    Log.d(TAG,
            "getRfidReaderLogs failed: " +
             e.getMessage());
}
```

### Log Storage

| Storage Type | Description |
|---------|---------|
| RAM | Volatile log storage |
| FLASH | Persistent log storage |

---

## 4. Export Logs

### Purpose

Exports retrieved log data to local device storage.

### Behavior

| Scenario | Behavior |
|---------|---------|
| Logs Retrieved | Export file is generated |
| Logs Not Retrieved | Prompt user to retrieve logs first |

Example file:

```text
/sdcard/RfidLog.txt
```

---

# Receiving Runtime Log Events

## Register for Debug Events

Enable debug event notifications.

```java
RFIDController
    .mConnectedReader
    .Events
    .setDebugInfoEvent(true);
```

---

## Event Registration

```java
public void setDebugInfoEvent(
        boolean notifyDebugInfoEvent) {

    if (notifyDebugInfoEvent) {

        registerForNotification(
                RFID_EVENT_TYPE
                        .DEBUG_INFO_EVENT);

    } else {

        unRegisterForNotification(
                RFID_EVENT_TYPE
                        .DEBUG_INFO_EVENT);
    }

    this.m_bDebugInfoEvent =
            notifyDebugInfoEvent;
}
```

---

## Protocol Processing

```java
if (eventType ==
        RFID_EVENT_TYPE.DEBUG_INFO_EVENT) {

    DEBUG_INFO_EVENT event =
            new DEBUG_INFO_EVENT();

    event.setLevel(
            (String) responseEvent.take());

    event.setMessage(
            (String) responseEvent.take());

    debugInfoEventQueue.offer(event);
}
```

---

## Receive Events in Application

```java
private void notificationFromGenericReader(
        RfidStatusEvents rfidStatusEvents) {

    if (rfidStatusEvents
            .StatusEventData
            .getStatusEventType()
            == STATUS_EVENT_TYPE.DEBUG_INFO_EVENT) {

        String level =
                rfidStatusEvents
                        .StatusEventData
                        .debugInfoData
                        .getLevel();

        String message =
                rfidStatusEvents
                        .StatusEventData
                        .debugInfoData
                        .getMessage();

        Log.d(TAG,
              "Level: " + level);

        Log.d(TAG,
              "Message: " + message);
    }
}
```

---

# Real-Time Logs vs Retrieved Logs

| Type | Description |
|---------|---------|
| Real-Time Logs | Streamed immediately through DEBUG_INFO_EVENT |
| Retrieved Logs | Historical RAM and FLASH logs retrieved on demand |

---

# Next Steps

- Profiles Tutorial
- Read Access Tutorial
- RapidRead Sample Application
- Firmware Update API

Refer to the Zebra RFID SDK documentation for additional implementation examples.