---
title: Getting Started
layout: guide.html
product: StageNow
productversion: '5.0'
---

## Introduction
This section provides information on the StageNow Android staging solution, including an explanation of staging, its purposes, and users. 

## Staging
Staging is the process where a device administrator or operator configures a device and/or deploys firmware or software to a device to prepare it for production use. This entails configuring, deploying, and managing systems and devices.

Staging can be performed at a centralized location, where all devices in an enterprise are configured and deployed together, in a particular store or site, where all devices at that site are configured and deployed, or on-site/per user, where a single device is configured for that site or user.

## Stage Now Staging Solution
StageNow is Zebra’s next generation Android staging solution, supporting KitKat and Jelly Bean and built on the MX 4.3 platform. It allows simple profile creation, and easy device deployment with a simple bar code scan or tag read.

The StageNow solution includes the following components:
* The Staging Tool offers a user interface that is accessed within a staging workstation (host computer). The staging administrator uses this tool to create staging profiles by configuring device components, in addition to other staging actions.
The Staging Tool includes the Staging Database and Staging Server which store content entered in the Staging Tool, e.g., setting templates and staging profiles. Staging data is persistent.
* The Staging Client resides on the device and provides a user interface for the staging operator to initiate staging. The operator uses a staging modality, e.g., prints and scans a bar code, to deliver staging material to the device

### Devices Supported
StageNow supports All KitKat and Jelly Bean Android Devices:

* TC70 (Android KitKat 4.4.2)

* TC55 (non GMS) (Android Jelly Bean 4.1.2) 

* MC40 (Android Jelly Bean 4.1.1)

### StageNow Users
Following are the StageNow users:
* The staging administrator is the main user of the Staging Tool, and is responsible for the configuration, deployment, and management of systems and client devices. The administrator creates profiles which identify the staging to perform, collects the staging content (e.g., applications), and uploads this content into the Staging Tool.
* The staging operator identifies the devices to stage and uses the Staging Tool to view and select the profiles that the administrator published. The operator then determines the staging materials to use to stage the devices (e.g., bar codes), performs the staging, and delivers the devices to the end users

### Staging Methods/Modalities
Following are the staging methods available via StageNow. See Device Staging on page 4 for details:
* Bar Code Profile - The operator prints the bar code(s) containing profile information and scans with the device to configure that device.
* NFC Tag - The operator exports profile data to an NFC tag, then reads the tag with the device within a certain proximity to deploy the profile to the device.















