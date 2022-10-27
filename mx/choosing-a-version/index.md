<!-- layout: mx-filter.html-->

## Overview
The MX Management System (MXMS) is an XML-based communication framework that provides an interface for managing the capabilities and behaviors of Zebra Android devices. This provides developers and administrators with an extensible, efficient, reliable and scalable means to configure and administer devices in their organization. 

The OSX layer provides extensions to the base operating system to implement functionality not offered by Android. The root OSX version number always matches the root number of the Android version that it extends (i.e. OSX 5.x extends Android 5.x). The MX Management System provides a uniform interface into privileged and unprivileged Android APIs on the device. Some features require a specific pairing of MX and OSX versions, some are available using the Android version alone, and still others require a specific MX version plus a minimum version of Android.

### Evaluation Steps

**To determine which versions of MX and OSX to target**:

1. List the features, capabilites and functions required of the device and its users. 
2. Scan the [CSP list](../compatibility) to determine which CSPs are required to deliver the desired features. 
3. Determine which MX and OSX versions deliver the required CSPs.
4. Check [which MX/OSX version is installed](../mx-version-on-device) on the device to be targeted.

-----

**Related guides**: 

* [Which version of MX/OSX is installed?](../mx-version-on-device)
* [EMDK for Android](../../../../emdk-for-android)
* [Setting up ADB](http://techdocs.zebra.com/enterprise-browser/1-6/guide/setup/#connections)