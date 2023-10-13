---
title: Get Started
layout: guide.html
product: Device Tracker
productversion: "6.0"
---

## Overview

Device Tracker is a cloud-based solution with software onboarding guided by Zebra. Licenses are required and automatically managed by the system. One-, three-, or five-year license terms are available. This section provides guidance on how to get started with Device Tracker.

## Get Started

<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

<b>Get Started: </b><br />

  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="scanBarcode">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseLicenses" aria-expanded="false" aria-controls="collapseLicenses"><img src="chevron-down.svg" style="display:inline" />
          How to get started with Device Tracker
        </a>
      </h4>
    </div>
    <div id="collapseLicenses" class="panel-collapse collapse" role="tabpanel" aria-labelledby="scanBarcode">
      <div class="panel-body">
      <!-- panel-body begin -->
        Before installing Device Tracker, perform the following steps to obtain Device Tracker licenses: 
        <ol>
            <li>Follow the steps to procure <a href="../license/">Device Tracker licenses</a></li>
            <li>You will receive a welcome email from Zebra which includes the following: </li>
                <ul>
                    <li>Device Tracker web portal link </li>
                    <li>First time login credentials. <a href="../config/#resetpassword">Reset the password</a> for these credentials.</li>
                    <li>.PDF file to configure the Device Tracker client app to connect to the Device Tracker cloud server. </li>
                    <li>.XML file to mass deploy the Device Tracker configuration </li>
                </ul>
            The two files supplied are used for mobile client app <a href="../setup">installation</a>.
        </ol>
        <!-- panel-body end -->
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="feedback">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseInstall" aria-expanded="false" aria-controls="collapseInstall"><img src="chevron-down.svg" style="display:inline" />
          How to install Device Tracker
        </a>
      </h4>
    </div>
    <div id="collapseInstall" class="panel-collapse collapse" role="tabpanel" aria-labelledby="feedback">
      <div class="panel-body">
              <!-- panel-body begin -->
              Make sure all <a href="../setup/#requirements">requirements</a> are met. If a firewall or proxy exists, specific ports and domain names must be allowed; see <a href="../setup/#networkrequirements">Network Requirements</a>.<br />
              To install Device Tracker mobile app on the devices:
                <ul>
                    <li>For manual installation, follow the <a href="../setup/#installmanually">manual install</a> procedure. This includes scanning the barcode in the .PDF file provided by Zebra to configure Device Tracker with the cloud server settings. </li>
                    <li>For EMM installation, follow the <a href="../setup/#installthroughemm">install using EMM procedure</a>. This includes deploying the .XML provided by Zebra that configures the server connectivity settings. </li>
                    <li>For StageNow installation, follow the <a href="../setup/#installwithstagenow">install with StageNow</a> procedure. </li>
                </ul>                
            <!-- panel-body end -->
      </div>
    </div>
  </div>

<div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="decoder">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSSO" aria-expanded="false" aria-controls="collapseSSO"><img src="chevron-down.svg" style="display:inline" />
          Do I need to integrate Single Sign-On (SSO)?  
        </a>
      </h4>
    </div>
    <div id="collapseSSO" class="panel-collapse collapse" role="tabpanel" aria-labelledby="decoder">
      <div class="panel-body">
              <!-- panel-body begin -->
           <p>SSO enables a single login credential to securely authenticate with multiple applications and websites. Integrate with your identity provider (IdP) to authenticate users, ensuring transparent accountability and security during device check-out and check-in, so the appropriate role-based access is given. To integrate SSO with Device Tracker, follow steps to <a href="../config/#singlesignonsso">activate and integrate SSO</a>. Then <a href="../config/#manageusers">add SSO users</a> and assign admin or 	manager roles to grant permissions to access the Device Tracker dashboard.  </p>
            <p>With <a href="../config/#singlesignonsso">SSO</a>, user accountability can be enforced to track the user logged into the device by enabling <a href="../config/#checkincheckoutdevice">Checkin/checkout</a>. This prevents the user from gaining access to the device until their login is authenticated, in effect assigning that particular user to the device. </p>
            <!-- panel-body end -->
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="dataFormat">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseUsers" aria-expanded="false" aria-controls="collapseUsers"><img src="chevron-down.svg" style="display:inline" />
          How to create new users and assign roles 
        </a>
      </h4>
    </div>
    <div id="collapseUsers" class="panel-collapse collapse" role="tabpanel" aria-labelledby="dataFormat">
      <div class="panel-body">
            <!-- panel-body begin -->
            <a href="../config/#manageusers">Create new user accounts</a> based on role: <a href="../config/#administratorrole">administrator</a> or <a href="../config/#managerrole">manager</a>. No user login is required for <a href="../config/#userassociaterole">end users/associates</a> <i>unless</i> SSO is integrated, in which case the user must login with their SSO credentials. If SSO is in use, follow the procedure to create SSO user accounts, otherwise follow the procedure to create non-SSO user accounts.
            <!-- panel-body end -->
      </div>
    </div>
  </div>
  
  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="decoder">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseDashboard" aria-expanded="false" aria-controls="collapseDashboard"><img src="chevron-down.svg" style="display:inline" />
         How to access Device Tracker web portal and device dashboards
        </a>
      </h4>
    </div>
    <div id="collapseDashboard" class="panel-collapse collapse" role="tabpanel" aria-labelledby="decoder">
      <div class="panel-body">
              <!-- panel-body begin -->
           <p>Managers and administrators can access the Device Tracker dashboard through the web portal or Device Tracker mobile app. The dashboard is a centralized view of devices, access points, and sites across an organization where action can be taken to track devices. </p>
            <p>There are 2 methods to authenticate users: 
                <ul>
                    <li><b>Device Tracker users (non-SSO)</b> – In Device Tracker, <a href="../config/#nonssouser">add manager and administrator users</a> to grant access to view the dashboard. <a href="../config/#administratorrole">Administrators</a> can view data across all sites, along with other capabilities. <a href="../config/#managerrole">Managers</a> can view data specific to their assigned site. (Only managers and administrators need to be added.) </li>
                    <li><b>Single Sign On (SSO)</b> - SSO enables a single login credential to securely authenticate with multiple applications and websites. An existing SSO service is required. To use SSO with Device Tracker, follow steps to <a href="../config/#singlesignonsso">activate and integrate SSO</a>. Then <a href="../config/#manageusers">add SSO users</a> to the allow list and designate the user as administrator or manager to grant permission to access the respective Device Tracker dashboard.   </li>
                </ul>
            </p>
            <!-- panel-body end -->
      </div>
    </div>
  </div>

<br />
<b>Configuration: </b><br />
  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="dataFormat">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseAccountability" aria-expanded="false" aria-controls="collapseAccountability"><img src="chevron-down.svg" style="display:inline" />
          How to track device user accountability 
        </a>
      </h4>
    </div>
    <div id="collapseAccountability" class="panel-collapse collapse" role="tabpanel" aria-labelledby="dataFormat">
      <div class="panel-body">
            <!-- panel-body begin -->
            <p>User accountability can be enforced, tracking the user checked in to the device. This is accomplished by enabling <a href="../config/#checkincheckoutdevice">Checkin/checkout</a> to prevent the user from gaining access to the device until their unique user barcode is scanned. When the user barcode is scanned, it assigns that particular user to the device, which can be viewed in the dashboard. </p>
            <p>With <a href="../config/#singlesignonsso">SSO</a>, user accountability can be enforced to track the user logged into the device by enabling <a href="../config/#checkincheckoutdevice">Checkin/checkout</a>.  This prevents the user from gaining access to the 	device 	until their login is authenticated. After login, it assigns that particular user to the device, which can be seen in the dashboard. </p> 
            <!-- panel-body end -->
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="deployment">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSites" aria-expanded="false" aria-controls="collapseSites"><img src="chevron-down.svg" style="display:inline" />
          How to register sites 
        </a>
      </h4>
    </div>
    <div id="collapseSites" class="panel-collapse collapse" role="tabpanel" aria-labelledby="deployment">
      <div class="panel-body">
            <!-- panel-body begin -->
            <a href="../config/#managesites">Register sites</a> to allow devices to be assigned to a specific site, for example based on geographical location. Grouping devices based on site location provides visibility of all devices assigned to that site. <a href="../dashboard/#reports">Data reports</a> can be generated base on site location.
            <!-- panel-body end -->
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="deployment">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseAPs" aria-expanded="false" aria-controls="collapseAPs"><img src="chevron-down.svg" style="display:inline" />
          How to register access points (APs)  
        </a>
      </h4>
    </div>
    <div id="collapseAPs" class="panel-collapse collapse" role="tabpanel" aria-labelledby="deployment">
      <div class="panel-body">
            <!-- panel-body begin -->
            <a href="../config/#manageaccesspoints">Register APs</a> to aid in locating the device based on the AP friendly name, such as Frozen Goods. This allows a user to easily identify the AP location based on friendly name rather than the mac address when searching for a misplaced device. Additionally, this allows the option for a <a href="../config/#devicetositeassignment">device to automatically be assigned to a site</a> based on the AP it is connected to, eliminating manual device registration. 
            <!-- panel-body end -->
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="deployment">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseDevices" aria-expanded="false" aria-controls="collapseDevices"><img src="chevron-down.svg" style="display:inline" />
          How to register devices  
        </a>
      </h4>
    </div>
    <div id="collapseDevices" class="panel-collapse collapse" role="tabpanel" aria-labelledby="deployment">
      <div class="panel-body">
            <!-- panel-body begin -->
            <a href="../config/#managedevices">Register devices</a> to assign a friendly name to a device to easily identify the device.
            <!-- panel-body end -->
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="deployment">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseAutomation" aria-expanded="false" aria-controls="collapseAutomation"><img src="chevron-down.svg" style="display:inline" />
          How do I automatically prevent devices from being lost or misplaced?   
        </a>
      </h4>
    </div>
    <div id="collapseAutomation" class="panel-collapse collapse" role="tabpanel" aria-labelledby="deployment">
      <div class="panel-body">
            <!-- panel-body begin -->
            Workflow automation allows administrators to automate the task which determines what devices are at risk of being lost and then flag them to be recovered. This avoids the need for site managers to constantly monitor the state of their fleet of devices to determine which are at risk of being lost and then manually flag them to be found. By setting system thresholds, Device Tracker continuously monitors the state of devices and automates the process. To enable workflow <a href="../config/#automation">automation</a>, specify the conditions and/or thresholds that need to be met for the device to automatically change state. If a device meets any one or a combination of the defined thresholds or conditions, Device Tracker automatically flags that device as lost so that it can be recovered quickly.  
            <!-- panel-body end -->
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="deployment">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseProximity" aria-expanded="false" aria-controls="collapseProximity"><img src="chevron-down.svg" style="display:inline" />
          How do I find lost devices in close proximity to other devices?    
        </a>
      </h4>
    </div>
    <div id="collapseProximity" class="panel-collapse collapse" role="tabpanel" aria-labelledby="deployment">
      <div class="panel-body">
            <!-- panel-body begin -->
            Users <a href="../use/#lostdevicenearby">located near lost or misplaced devices</a> can be notified when the device is located nearby. If the lost device is detected in close proximity, an notification appears on the known device giving the option to recover the lost device and return it to production, allowing for proactive device recovery. 
            <!-- panel-body end -->
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="deployment">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSecondaryBLE" aria-expanded="false" aria-controls="collapseSecondaryBLE"><img src="chevron-down.svg" style="display:inline" />
          Can I track a device that is powered off or has reached critically low battery?
        </a>
      </h4>
    </div>
    <div id="collapseSecondaryBLE" class="panel-collapse collapse" role="tabpanel" aria-labelledby="secondaryBLE">
      <div class="panel-body">
            <!-- panel-body begin -->
            Yes, <a href="../secondaryble">Secondary BLE</a> allows a device to be located if it is powered off or has reached critically low battery (5% or less battery remaining). Device location is detected based on secondary BLE beacons transmitted, powered by the remaining device battery. Secondary BLE beacons are transmited as long as the battery is not completely depleted. When a device reaches a crtical low battery state, in general secondary BLE beacons can be transmitted for at least a few days - there are multiple factors that can affect this, including battery charge cycles, battery age, operating temperature, etc. Secondary BLE is supported only on select hardware, see <a href="https://www.zebra.com/us/en/support-downloads/software/productivity-apps/device-tracker.html">device compatibility</a>.
            <!-- panel-body end -->
      </div>
    </div>
  </div>

<br />
<b>Administration: </b><br />
  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="deployment">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseMonitor" aria-expanded="false" aria-controls="collapseMonitor"><img src="chevron-down.svg" style="display:inline" />
          How do I gain insight to the devices within a site or organization?  
        </a>
      </h4>
    </div>
    <div id="collapseMonitor" class="panel-collapse collapse" role="tabpanel" aria-labelledby="deployment">
      <div class="panel-body">
            <!-- panel-body begin -->
            <p>The dashboard provides a centralized view with real-time tracking information to monitor devices anywhere and anytime. This helps to identify devices that are at risk of being lost or misplaced and allows action to be taken to track devices. The dashboard is accessible to site managers and administrators - managers can view devices specific to their site location and administrators can view devices across multiple sites within the organization.  </p>
            <p>There are 2 types of dashboards:
                <ul>
                    <li><b><a href="../dashboard/#overview">Web portal</a></b> - dashboard viewable through a browser from a desktop or mobile device </li>
                    <li><b><a href="../dashboard/#devicedashboard">Mobile Client App dashboard</a></b> - dashboard viewable through the Device Tracker client app </li>
                </ul>
            </p>
            <!-- panel-body end -->
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="deployment">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseReports" aria-expanded="false" aria-controls="collapseReports"><img src="chevron-down.svg" style="display:inline" />
          How do I generate data reports?  
        </a>
      </h4>
    </div>
    <div id="collapseReports" class="panel-collapse collapse" role="tabpanel" aria-labelledby="deployment">
      <div class="panel-body">
            <!-- panel-body begin -->
            Administrators can generate historical <a href="../dashboard/#reports">data reports</a> and view device events and utilization, providing actionable information to improve fleet usage and 	employee procedures. Devices must be assigned to sites in order to get the report data."
            <!-- panel-body end -->
      </div>
    </div>
  </div>

<br />
  <b>Usage: </b><br />
  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="deployment">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFind" aria-expanded="false" aria-controls="collapseFind"><img src="chevron-down.svg" style="display:inline" />
          How do I find a misplaced or lost device?    
        </a>
      </h4>
    </div>
    <div id="collapseFind" class="panel-collapse collapse" role="tabpanel" aria-labelledby="deployment">
      <div class="panel-body">
            <!-- panel-body begin -->
            <p>To initiate the process to find a lost or misplaced device, the administrator or manager first <a href="../use/#markdevicetofind">marks the device for retrieval</a> by setting it to the <b>To Be Found</b> state in the dashboard. This adds the device to the <b>To Be Found</b> list visible to all device users in the mobile app. </p>            
            <p>To perform the <a href="../use/#finddevice">device search,</a> the user taps <b>Start Finding.</b> A  Geiger counter-style interface appears a showing a proximity meter that indicates how close or far the user is located from the lost device. The user taps <b>Play Sound</b> to remotely ring the lost device so they can move even closer to the lost device. If the lost device has <a href="../secondaryble">secondary BLE</a> and is low in battery or powered off, it can still be located provided that secondary BLE is enabled in Device Tracker and the secondary BLE radio is still powered. By repeating this process of playing sound and using the proximity meter, the user continually moves closer to the device until it is located. Once found, tap <b>Device Found</b> to change the device state in the dashboard.</p>
            <!-- panel-body end -->
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="deployment">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseProximity-2" aria-expanded="false" aria-controls="collapseProximity-2"><img src="chevron-down.svg" style="display:inline" />
          How do I find lost devices in close proximity to other devices?    
        </a>
      </h4>
    </div>
    <div id="collapseProximity-2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="deployment">
      <div class="panel-body">
            <!-- panel-body begin -->
            Users <a href="../use/#lostdevicenearby">located near lost or misplaced devices</a> can be notified when the device is located nearby. If the lost device is detected in close proximity, an notification appears on the known device giving the option to recover the lost device and return it to production, allowing for proactive device recovery. 
            <!-- panel-body end -->
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="gps">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseGPS" aria-expanded="false" aria-controls="collapseGPS"><img src="chevron-down.svg" style="display:inline" />
          How do I find a device location on a map or its GPS coordinates?    
        </a>
      </h4>
    </div>
    <div id="collapseGPS" class="panel-collapse collapse" role="tabpanel" aria-labelledby="gps">
      <div class="panel-body">
            <!-- panel-body begin -->
            Administrators can <a href="../dashboard/#mapbasedlocationing">view GPS coordinates of a device and pinpoint its location on a map</a> through the web portal. <a href="../config/#mapbasedlocationing">Map Based Locationing</a> must be enabled.
            <!-- panel-body end -->
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="deployment">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOptimize" aria-expanded="false" aria-controls="collapseOptimize"><img src="chevron-down.svg" style="display:inline" />
          How do I optimize the use of Device Tracker? 
        </a>
      </h4>
    </div>
    <div id="collapseOptimize" class="panel-collapse collapse" role="tabpanel" aria-labelledby="deployment">
      <div class="panel-body">
            <!-- panel-body begin -->
            To optimize the use of Device Tracker, execute or enable the following features:  
            <ul>
                <li><b><a href="../config/#manageaccesspoints">AP Friendly Name</a></b> - Ensure the AP location friendly name is easily understood by users to identify the AP location which the device is connected to, such as sporting goods, when finding a device. </li>
                <li><b><a href="../config/#devicetositeassignment">Device-to-Site Assignment</a></b> - Automatically assigns a device to a site based on the AP the device is connected to. This helps to automatically register new devices and avoids manual device registration. </li>
                <li><b>User Authentication</b> - There are 2 methods to authenticate users: 
                    <ul>
                        <li><b>Device Tracker users </b>– in Device Tracker, <a href="../config/#nonssouser">add manager and administrator users</a> to grant access to view the dashboard. Administrators can view data across all sites. Managers can view data specific to their assigned site. (Only managers and administrators need to be added.) </li>
                        <li><b>Single Sign On (SSO)</b> - SSO enables a single login credential to securely authenticate with multiple applications and websites. An existing SSO service is required. To use SSO with Device Tracker, follow steps to <a href="../config/#singlesignonsso">activate and integrate SSO</a>. Then <a href="../config/#manageusers">add SSO users</a> to the allow list and designate the user as administrator or manager to grant permission to access the respective Device Tracker dashboard.   </li>
                    </ul>
                </li>
                <li><b>User Accountability</b> - User accountability can be enforced, tracking the user checked into the device. This is accomplished by enabling <a href="../config/#checkincheckoutdevice">Checkin/checkout</a>, preventing the user from gaining access to the device until their unique user barcode is scanned, in effect assigning that particular user to the device as viewed in the dashboard. 
                <p>With <a href="../config/#singlesignonsso">SSO</a>, user accountability can be enforced to track the user logged into the	device by enabling <a href="../config/#checkincheckoutdevice">Checkin/checkout</a>. This prevents the user from gaining access to the device until their login is authenticated, in effect assigning that 	particular user to the device as viewed in the dashboard. </p></li>
                <li><b><a href="../config/#automation">Automation</a></b> - Workflow automation allows administrators to automate the task of determining which devices are at risk of being lost and flagging them to be recovered. This avoids the need for site managers to constantly monitor the state of their fleet of devices to determine which are at risk of being lost and then manually flag them to be found. By setting system thresholds, Device Tracker continuously monitors the state of devices and automates the process. To enable workflow automation, specify the conditions and/or thresholds that need to be met for the device to automatically change state. If a device meets any one or a combination of the defined thresholds or conditions, Device Tracker automatically flags that device as lost so that it can be recovered quickly. </li>
                <li><b><a href="../config/#lostdevicenearby">Lost Device Nearby</a></b> - Aids in device recovery by proactively sending alert notifications to a device when a lost device is detected within close proximity, giving the option to recover the device and return it to production. </li>
                <li><b><a href="../dashboard/#reports">Generate Reports</a></b> - Managers and administrators can generate historical data reports and view device events and utilization, providing actionable information to improve fleet usage and employee procedures. </li>
            </ul>
            <!-- panel-body end -->
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading panel-heading-custom" role="tab" id="deployment">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSecondaryBLE-2" aria-expanded="false" aria-controls="collapseSecondaryBLE-2"><img src="chevron-down.svg" style="display:inline" />
          Can I track a device that is powered off or has reached critically low battery?
        </a>
      </h4>
    </div>
    <div id="collapseSecondaryBLE-2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="secondaryBLE">
      <div class="panel-body">
            <!-- panel-body begin -->
            Yes, <a href="../secondaryble">Secondary BLE</a> allows a device to be located if it is powered off or has reached critically low battery (5% or less battery remaining). Device location is detected based on secondary BLE beacons transmitted, powered by the remaining device battery. Secondary BLE beacons are transmited as long as the battery is not completely depleted. When a device reaches a crtical low battery state, in general secondary BLE beacons can be transmitted for at least a few days - there are multiple factors that can affect this, including battery charge cycles, battery age, operating temperature, etc. Secondary BLE is supported only on select hardware, see <a href="https://www.zebra.com/us/en/support-downloads/software/productivity-apps/device-tracker.html">device compatibility</a>.
            <!-- panel-body end -->
      </div>
    </div>
  </div>

</div>

<!--
## Prerequisites

The following prerequisites must take place prior to installation:

1. Procure [Device Tracker licenses](../license).
2. Receive a welcome email from Zebra, which includes the following:
    - Device Tracker web portal link
    - First time login credentials. [Reset the password](../config/#resetpassword) for these credentials.
    - .PDF file to configure the app to connect to the Device Tracker cloud server.
    - .XML file to mass deploy the Device Tracker configuration.

    The 2 files supplied are referenced in the [Installation](#installation) section below.
3. Make sure all [requirements](../setup/#requirements) are met. If a firewall or proxy exists, specific ports and domain names must be allowed, see [Network Requirements](../setup/#networkrequirements).

## Get Started

Follow the steps below to get started.

### Installation

1. Install [Device Tracker client](../setup) on the devices.
   - For **manual installation,** follow the [manual install procedure](../setup/#installmanually). This includes scanning the barcode in the .PDF file provided by Zebra to configure Device Tracker with the cloud server settings.
   - For **EMM installation,** follow the [install with EMM procedure](../setup/#installwithemm). This includes deploying the .XML provided by Zebra that configures the server connectivity settings.
   - For **StageNow installation,** follow [install with StageNow](../setup/#installwithstagenow).
2. _(Optional)_ Enable [Secondary BLE](../secondaryble/) to locate a device if it loses power.

### Configuration

1. [Create new user accounts](../config/#manageusers) based on role: [administrator](../config/#administratorrole) or [manager](../config/#managerrole). No user login is required for [end users/associates](../config/#userassociaterole).
   - Managers can be permitted to [modify device names or access points](../config/#registration).
2. If SSO is enforced, follow steps to [integrate SSO](../config/#singlesignonsso).
3. [Register sites](../config/#managesites) and [access points](../config/#manageaccesspoints).
4. [Register devices.](../config/#managedevices)
   - _(Optional)_ [Automatically assign devices to a site](../config/#devicetositeassignment) based on the connected AP.
5. _(Optional)_ Enable [Checkin/Checkout](../config/#checkincheckoutdevice) for user accountability.
6. _(Optional)_ Configure [Automation Thresholds](../config/#automation) for more efficient workflow.
7. _(Optional)_ Configure daily [Device Summary reports](../config/#endofdaydevicesummary) to be sent by email to select managers and administrators.

### Track Devices

Learn how to use Device Tracker to [find devices](../use/).

### Dashboard

Administrators and managers can monitor and track devices through the web portal [dashboard](../dashboard/). The web portal provides data [reports](../dashboard/#reports) to administrators. Daily device summary reports can be sent to designated recipients.
-->

---

## See Also

- [Licensing](../license)
- [Install & Setup](../setup)
- [Secondary BLE](../secondaryble)
- [Configuration](../config)
- [Track Devices](../use)
- [Dashboard](../dashboard)
- [FAQ](../faq)
