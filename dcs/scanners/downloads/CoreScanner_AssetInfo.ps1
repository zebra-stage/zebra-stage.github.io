# Description : Following script query the asset information of the connected scanners timely. Support PSVersion 5+.
# Last Update : 04/28/2020
# Copyright : ©2020 Zebra Technologies Corp. and/or its affiliates.

# Log everything, file will create in the script execution folder.
# Comment the following line if logging is not required.
Start-Transcript -Append -Path $PSScriptRoot"\CoreScanner_AssetInfo.log.txt"

# Process GetScanners out XML and list the asset information
Function Process-Out-XML ($XML)
{
    $XmlContent = New-Object -TypeName System.Xml.XmlDocument
    $XmlContent.LoadXml($XML)

    # Pipe asset information
    $XmlContent.scanners.scanner | Format-Table -AutoSize @{Name = 'Scanner ID'; Expression = {$_.scannerID}},
                                                            @{Name = 'Host Mode'; Expression = {$_.type}}, 
                                                            @{Name = 'Model Number'; Expression = {$_.modelnumber}},
                                                            @{Name = 'Serial Number'; Expression = {$_.serialnumber}},
                                                            @{Name = 'Date of Manufacture'; Expression = {$_.DoM}},
                                                            @{Name = 'Scanner Firmware Version'; Expression = {$_.firmware}}
}

# Main script to execute
Invoke-Command -ScriptBlock {
    # Initialize CoreScanner
    Write-Output "$(Get-Date) Loading Interop.CoreScanner.dll";		
	[System.Reflection.Assembly]::LoadFile("C:\Program Files\Zebra Technologies\Barcode Scanners\Common\Interop.CoreScanner.dll")|Out-Null;		
	$ScannerObject = New-Object Interop.CoreScanner.CCoreScannerClass;

    # Initialize
	$Status = 0;
	$AppHandle = 0;
    $OutXML = "";
    $ScannerCount = 0;
    
    # For all scanners, set to 1
	$ScannerTypes = New-Object int16[] 11;
	$ScannerTypes[0] = 1;
	
    # For all scanner types, set to 1
	$NumberOfScannerTypes = [int16] 1;

    $ScannerIDList = New-Object int16[] 255;
	
    # Invokde Open API		
	$ScannerObject.Open($AppHandle, $ScannerTypes, $NumberOfScannerTypes, [ref] $Status);
	Write-Output "$(Get-Date) Scanner.Open() Status: $Status";

    # Invoke GetScanners API, process XML to query scanners
    $ScannerObject.GetScanners([ref] $ScannerCount, $ScannerIDList, [ref] $OutXML, [ref] $Status)
    Write-Output "$(Get-Date) GetScanners API Invoke Status: $Status";
    Write-Output "$(Get-Date) Number of Connected Scanner(s) to the Host: $ScannerCount";
    
    Process-Out-XML -XML $OutXML;
}