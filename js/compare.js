//Global variables for keeping state
var mxIndex = undefined;
var cspIndex = undefined;
var osIndex = undefined;
var deviceIndex = undefined;
var uniqueOSs = new Array();
var uniqueDevices = new Array();
var firstLoad = true;
var embedMode = false;

$(function() {

	//Load Root
	loadFirst();
			
	//Check for url change
	$(window).on('hashchange', function(e)
	{
		loadHash();
	});
	
	loadHash();
});

//Load CSP based on hash
function loadHash()
{
	var urlParms = {};
	var hash = location.hash.replace("#","");
	
	if(hash == "")
	{
		loadRoot();
	}
	else
	{
		var params = hash.split(/\&/);
	
		for(var i = 0; i< params.length; i++)
		{
			 var param = params[i].split("=");
			 if(param.length == 2)
			 {
				urlParms[param[0]] = param[1];
			 }
		}
		
		if(Object.getOwnPropertyNames(urlParms).length > 0)
		{		
			//MX Version
			if(urlParms.mx != undefined)
			{
				//Get MX
				var tempIndex = getIndexOfObject(mxVersions, "version", urlParms.mx);
				
				//Validate value
				if(tempIndex != -1)
				{
					//Select Root MX
					mxIndex = tempIndex;
					$("#selectMX").val(tempIndex);
					loadCSPs();
					
					//Setup Event for CSP Select
					$("#selectCSP").change(function() {
						loadCSPInfo();
						loadCSP();
						updateHash();
					});
				}
				else
				{
					loadRoot();
				}
				
				//CSP
				if(urlParms.csp != undefined)
				{	
					//Get CSP
					var tempIndex = getIndexOfObject(mxVersions[mxIndex].csps, "name", urlParms.csp);
					
					//Validate value
					if(tempIndex != -1)
					{
						//Select CSP
						cspIndex = tempIndex;
						$("#selectCSP").val(tempIndex);
						loadCSPInfo();
					}
					else
					{
						loadRootCSP();
					}
				
					//OS and Devices
					if(urlParms.os != undefined && urlParms.device != undefined)
					{	
						//Get Device
						var tempIndexDevice = -1;
					
						if(urlParms.device == "All")
						{
							tempIndexDevice = 1;
						}
						else
						{
							tempIndexDevice = getSelectVals("#selectDevice").indexOf(urlParms.device);
							
							if(tempIndexDevice != -1)
							{
								tempIndexDevice++;
							}
						}
					
						//Validate value
						if(tempIndexDevice != -1)
						{
							//Select Device
							$("#selectDevice").val(tempIndexDevice -1);
						}
					
						//Get OS
						var tempIndexOs = -1;
					
						if(urlParms.os == "All")
						{
							tempIndexOs = 1;
						}
						else
						{
							tempIndexOs = getSelectVals("#selectOS").indexOf(urlParms.os);
							
							if(tempIndexOs != -1)
							{
								tempIndexOs++;
							}
						}
					
						//Validate value
						if(tempIndexOs != -1)
						{
							//Select OS
							$("#selectOS").val(tempIndexOs -1);
						}
						
						
						
						loadCSP();
					}
					else if(urlParms.os != undefined)
					{				
						//Get OS
						var tempIndexOs = -1;
					
						if(urlParms.os == "All")
						{
							tempIndexOs = 1;
						}
						else
						{
							tempIndexOs = getSelectVals("#selectOS").indexOf(urlParms.os);
							
							if(tempIndexOs != -1)
							{
								tempIndexOs++;
							}
						}
					
						//Validate value
						if(tempIndexOs != -1)
						{
							//Select OS
							$("#selectOS").val(tempIndexOs -1);
						}
						
						loadCSP();
					}
					else if(urlParms.device != undefined)
					{		
						//Get Device
						var tempIndexDevice = -1;
					
						if(urlParms.device == "All")
						{
							tempIndexDevice = 1;
						}
						else
						{
							tempIndexDevice = getSelectVals("#selectDevice").indexOf(urlParms.device);
							
							if(tempIndexDevice != -1)
							{
								tempIndexDevice++;
							}
						}
					
						//Validate value
						if(tempIndexDevice != -1)
						{
							//Select Device
							$("#selectDevice").val(tempIndexDevice -1);
						}
						
					
						loadCSP();
					}
					else
					{
						loadCSP();
					}
				}
				else
				{
					loadRootCSP();
				}
			}
			else
			{
				loadRoot();
			}
			
			//Check for embed
			if(urlParms.embed != undefined)
			{
				if(urlParms.embed == "true")
				{
					enableEmbed();
				}
				else
				{
					disableEmbed();
				}
			}
			else
			{
				disableEmbed();
			}
		}
		else
		{
			loadRoot();
		}
	}
	
	$("#openInNewTabLink").attr("href", "#" + hash.replace("&embed=true",""));
}

//First Load
function loadFirst()
{
	//Safety Check
	if(firstLoad)
	{			
		firstLoad = false;
		
		loadMX();
		$("#selectMX").change(function() {
			updateHash();
		});
	}
}

//Load Root
function loadRoot()
{
	//Select Root MX
	mxIndex = 0;
	$("#selectMX").val("0");
	loadCSPs();
	
	//Setup Event for CSP Select
	$("#selectCSP").change(function() {
		updateHash();
	});
	
	loadRootCSP();
}

//Load Root CSP
function loadRootCSP()
{
	//Select Root CSP
	cspIndex = 0;
	$("#selectCSP").val("0");
	loadCSPInfo();
	loadCSP();
}

//Sets up page in embed mode
function enableEmbed()
{
	if(embedMode == false)
	{
		$("#header").css("visibility", "hidden");
		$("#main").css("top", "0px");
		
		embedMode = true;
	}
}

//Sets up page in standalone mode
function disableEmbed()
{
	if(embedMode)
	{
		$("#header").css("visibility", "visible");
		$("#main").css("top", "52px");
		
		embedMode = false;
	}
}

//Gets the index of object in array by property value 
function getIndexOfObject(array, attr, value)
{
	for(var i = 0; i < array.length; i++) 
	{
		if(array[i].hasOwnProperty(attr) && array[i][attr] === value) 
		{
			return i;
		}
	}
	return -1;
}

//Get all vals in select
function getSelectVals(select)
{
	var vals = new Array();
	var temp = $(select + " option");
	
	for(var i = 0; i<temp.length; i++)
	{
		vals.push($(temp[i]).html());
	}	
	
	return vals;
}

function loadMX()
{
	var html = '<select id="selectMX">';
	for( var i = 0; i < mxVersions.length; i++)
	{
		html += '<option value="' + i + '">' + mxVersions[i].version + '</option>';
	}
	html += '</select>';
	
	$("#mxSpan").html(html);
}

function loadCSPs()
{
	mxIndex = $("#selectMX").val();

	var html = '<select id="selectCSP">';
	for( var i = 0; i < mxVersions[mxIndex].csps.length; i++)
	{
		html += '<option value="' + i + '">' + mxVersions[mxIndex].csps[i].name + '</option>';
	}
	html += '</select>';
	
	$("#cspSpan").html(html);
}

function loadCSPInfo()
{
	cspIndex = $("#selectCSP").val();
	
	//Get unique Devices and OSs
	uniqueOSs = new Array();
	uniqueOSs.push("All");
	uniqueDevices = new Array();
	uniqueDevices.push("All");
	for(var i = 0; i < mxVersions[mxIndex].csps[cspIndex].features.length; i++)
	{
		for(var j = 0; j < mxVersions[mxIndex].csps[cspIndex].features[i].specifics.length; j++)
		{
			for(var k = 0; k < mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility.length; k++)
			{
				//Check Device
				if(uniqueDevices.indexOf(mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].device) == -1)
				{
					uniqueDevices.push(mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].device);
				}
				
				//Check OS
				if(uniqueOSs.indexOf(mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].os) == -1)
				{
					uniqueOSs.push(mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].os);
				}
			}
		}
	}			
	
	//Build Selects
	var html = '<select id="selectOS">';
	for(var i = 0; i < uniqueOSs.length; i++)
	{
		html += '<option value="' + i + '">' + uniqueOSs[i]+ '</option>';
	}
	html += '</select>';
	$("#osSpan").html(html);
	
	html = '<select id="selectDevice">';
	for(var i = 0; i < uniqueDevices.length; i++)
	{
		html += '<option value="' + i + '">' + uniqueDevices[i] + '</option>';
	}
	html += '</select>';
	$("#deviceSpan").html(html);
	
	//Setup Events
	$("#selectOS").change(function() {
		updateHash();
	});
	
	$("#selectDevice").change(function() {
		updateHash();
	});
}

function loadCSP()
{
	osIndex = $("#selectOS").val();
	deviceIndex = $("#selectDevice").val();
	var rows = 1; 
	var cols = 2;
	var uniqueIDs = new Array();
	
	for(var i = 0; i < mxVersions[mxIndex].csps[cspIndex].features.length; i++)
	{
		for(var j = 0; j < mxVersions[mxIndex].csps[cspIndex].features[i].specifics.length; j++)
		{
			for(var k = 0; k < mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility.length; k++)
			{							
				//Calc col
				if(osIndex == 0 && deviceIndex == 0)
				{
					var temp = mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].device;
					temp += " " + mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].os;
				
					if(uniqueIDs.indexOf(temp) == -1)
					{
						uniqueIDs.push(temp);
						cols++
					}
				}
				else if(osIndex == 0)
				{
					if(mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].device == uniqueDevices[deviceIndex])
					{
						var temp = mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].device;
						temp += " " + mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].os;
				
						if(uniqueIDs.indexOf(temp) == -1)
						{
							uniqueIDs.push(temp);
							cols++
						}
					}
				}
				else if(deviceIndex == 0)
				{
					if(mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].os == uniqueOSs[osIndex])
					{
						var temp = mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].device;
				
						if(uniqueIDs.indexOf(temp) == -1)
						{
							uniqueIDs.push(temp);
							cols++
						}
					}
				}
				else
				{
					if(mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].device == uniqueDevices[deviceIndex] &&
					   mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].os == uniqueOSs[osIndex])
					{
						var temp = mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].device;
				
						if(uniqueIDs.indexOf(temp) == -1)
						{
							uniqueIDs.push(temp);
							cols++
						}
					}
				}
			}
			
			//Calc row 
			rows ++;
		}
	}
	
	//Build Table
	var html = '<table id="table" class="table">';
	html += '<tr>';
	html += '<th>Parameters</th>';
	html += '<th>Specific</th>';
	for(var i = 2; i < cols; i++)
	{
		html += '<th>' + uniqueIDs[i-2] + '</th>';
	}
	html += '</tr>';
	var offest = 0;				
	for(var i = 0; i < mxVersions[mxIndex].csps[cspIndex].features.length; i++)
	{
		for(var j = 0; j < mxVersions[mxIndex].csps[cspIndex].features[i].specifics.length; j++)
		{
			if(offest == 0)
			{
				html += '<tr>';
				html += '<th rowspan="' + mxVersions[mxIndex].csps[cspIndex].features[i].specifics.length + '">' + mxVersions[mxIndex].csps[cspIndex].features[i].name + '</th>';
				offest = mxVersions[mxIndex].csps[cspIndex].features[i].specifics.length-1;
			}
			else
			{
				html += '<tr>';
				offest--;
			}
			
			html += '<th>' + mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].name + '</th>';

			var valsTemp = new Array();
			for(var x = 0; x<uniqueIDs.length; x++)
			{
				var temp = new Object();
				temp.id =  uniqueIDs[x];
				temp.val = "";
				valsTemp.push(temp);
			}
			
			for(var k = 0; k < mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility.length; k++)
			{							
				if(osIndex == 0 && deviceIndex == 0)
				{
					var tempId = mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].device;
					tempId += " " + mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].os;
				
					var tempIndex = getIndexOfObject(valsTemp, "id",tempId);

					if(tempIndex != -1)
					{
						valsTemp[tempIndex].val = generateCell(mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k]);
					}
				}
				else if(osIndex == 0)
				{
					if(mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].device == uniqueDevices[deviceIndex])
					{
						var tempId = mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].device;
						tempId += " " + mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].os;
						
						var tempIndex = getIndexOfObject(valsTemp, "id",tempId);
						
						if(tempIndex != -1)
						{
							valsTemp[tempIndex].val = generateCell(mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k]);
						}
					}
				}
				else if(deviceIndex == 0)
				{
					if(mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].os == uniqueOSs[osIndex])
					{
						var tempId = mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].device;
						
						var tempIndex = getIndexOfObject(valsTemp, "id",tempId);
						
						if(tempIndex != -1)
						{
							valsTemp[tempIndex].val = generateCell(mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k]);
						}
					}
				}
				else
				{
					if(mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].device == uniqueDevices[deviceIndex] &&
					   mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].os == uniqueOSs[osIndex])
					{
						var tempId = mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k].device;
						
						
						var tempIndex = getIndexOfObject(valsTemp, "id",tempId);

						if(tempIndex != -1)
						{
							valsTemp[tempIndex].val = generateCell(mxVersions[mxIndex].csps[cspIndex].features[i].specifics[j].compatibility[k]);
						}
					}
				}
			}
			
			for(var x = 0; x<valsTemp.length; x++)
			{
				html += '<th>' + valsTemp[x].val + '</th>';
			}
			
			html += '</tr>' 
		}
	}
	html += '</table>';
	$("#panelMainTable").html(html);	
	
	//Tooltips
	$('[data-toggle="tooltip"]').tooltip({html:true, container: 'body'})
}

//Creates html for table cell 
function generateCell(compatibility)
{
	if(compatibility.supported == "1")
	{
		return '<i class="fa fa-check-circle" data-toggle="tooltip" data-placement="top" title="' 
			+  compatibility.name 
			+ '<br> Device: ' + compatibility.device
			+ '<br> OS: ' + compatibility.os
			+ ((compatibility.notes == "") ? "" : '<br> Notes: ' + compatibility.notes)
			+ '"></i>';
	}
	else
	{
		return "";
	}
}

//Update Page Hash
function updateHash()
{
	var tempHash = "";

	tempHash = "#mx=" + $("#selectMX option:selected").text();

	if($("#selectCSP").val() != 0)
	{
		tempHash += "&csp=" + $("#selectCSP option:selected").text();
	}
	else if($("#selectOS").val() != 0 || $("#selectDevice").val() != 0)
	{
		tempHash += "&csp=" + $("#selectCSP option:selected").text();
	}
	
	if($("#selectOS").val() != 0)
	{
		tempHash += "&os=" + $("#selectOS option:selected").text();
	}
	
	if($("#selectDevice").val() != 0)
	{
		tempHash += "&device=" + $("#selectDevice option:selected").text();
	}	
	
	if(location.hash.indexOf("&embed=true") > -1)
	{
		tempHash += "&embed=true";
	}

	location.hash = tempHash;
}