---
title: API Compatibility Matrix
productversion: '1.5'
product: Enterprise Browser
layout: ebmatrix.html
---
<div id="toolbar" style="display:none">
	<button class="btn btn-primary" id="btnFilter"><i class="glyphicon glyphicon-filter"></i> (<span id="condition">Any</span>)</button>
	<select id="engines" multiple="multiple">
	</select>
	<select id="os" multiple="multiple">
	</select>
</div>

<table id="table" 
	data-search="true"
	data-show-columns="true"
	data-toolbar="#toolbar">
    <thead>
    <tr>
        <th data-field="api">API</th>
        <th data-field="engines">Engine(s)</th>
        <th data-field="os">Operating System(s)</th>
    </tr>
    </thead>
</table>

<script>
var matrix=[
    {
        "api":"AddressBar", 
       "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"AirBeam",
        "engines": "Webkit,IE",
        "os": "WM,CE",
        "devices": "All"
    },

    {
        "api":"Alarm",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Application",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"AudioCapture",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"BackButton",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Backlight",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Barcode",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },
    {
        "api":"Battery",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"BottomCommandArea",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"CardReader",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Comm",
        "engines": "Webkit,IE",
        "os": "WM,CE",
        "devices": "All"
    },
    {
        "api":"Database",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },
    {
        "api":"Device",
        "engines": "Webkit,IE",
        "os": "Android,WM",
        "devices": "All"
    },


    {
        "api":"File",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"FileTransfer",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"ForwardButton",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Gesture",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"GoButton",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"HomeButton",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Hourglass",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Imager",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    

    {
        "api":"KeyCapture",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"KeyState",
        "engines": "Webkit",
        "os": "WM,CE",
        "devices": "All"
    },

    {
        "api":"KeyLight",
        "engines": "Webkit,IE",
        "os": "WM,CE",
        "devices": "All"
    },

    {
        "api":"Log",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Mediaplayer",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Memory",
        "engines": "Webkit,IE",
        "os": "WM,CE",
        "devices": "All"
    },

    {
        "api":"NativeMenubar",
        "engines": "Webkit",
        "os": "WM,CE",
        "devices": "All"
    },

    {
        "api":"NativeTabbar",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"NativeToolbar",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Network",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Notification",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"PowerOn",
        "engines": "Webkit,IE",
        "os": "WM,CE",
        "devices": "All"
    },

    {
        "api":"Printer",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"PrinterZebra",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Process",
        "engines": "Webkit",
        "os": "WM,CE",
        "devices": "All"
    },

    {
        "api":"QuitButton",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Reboot",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },
    {
        "api":"RemoteNotification",
        "engines": "Webkit",
        "os": "Android",
        "devices": "All"
    },

    {
        "api":"Registry",
        "engines": "Webkit,IE",
        "os": "WM,CE",
        "devices": "All"
    },

    {
        "api":"ReloadButton",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"ScreenOrientation",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Sensor",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"SignalIndicators",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Signature",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Sip",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"SipButton",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"SmartCradle",
        "engines": "Webkit",
        "os": "Android,CE",
        "devices": "All"
    },

    {
        "api":"StopButton",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Stylus",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"System",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"SystemTime",
        "engines": "Webkit,IE",
        "os": "WM,CE",
        "devices": "All"
    },

    {
        "api":"TopCommandArea",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Videocapture",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Volume",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Wake",
        "engines": "Webkit,IE",
        "os": "Android",
        "devices": "All"
    },


    {
        "api":"WebView",
        "engines": "Webkit",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"Zoom",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },

    {
        "api":"ZoomTextButton",
        "engines": "Webkit,IE",
        "os": "Android,WM,CE",
        "devices": "All"
    },
];
var lookups = {
	engines: {
		cluttered: [],
		unique: []
	},
	os: {
		cluttered: [],
		unique: []
	},
	devices: {
		cluttered: [],
		unique: []
	}
};




function pushArray(obj,ar)
{
	for (var i = 0; i < ar.length; i++) {
		obj.push(ar[i]);
	};
}

function arrayContains(match, search){
	// console.log("checking match")
	// console.log(match);
	// console.log(search);
	var found=false;
	if(match != null)
	{
		for (var i = 0; i < match.length; i++) {
			if($.inArray(match[i],search)>-1){
				found=true;
			}
		};
	}
	// console.log(found)
	return found;
}

function sameArray(arr1,arr2){
	if($(arr1).not(arr2).length == 0 && $(arr2).not(arr1).length == 0)
		return true
	else
		return false
}

function getFilteredMatrix(){
	var newMatrix = [];
	// console.log($('#devices').val())
	if($('#engines').val()==null && $('#os').val()==null)
	{
		newMatrix = matrix;
	}
		else
		{
		for (var i = 0; i < matrix.length; i++) {
			// console.log(matrix[i].api);
			var found = {
				os: false,
				engines: false
			};
			
			if(arrayContains($('#engines').val(),matrix[i].engines.split(','))){
				found.engines=true;
				// console.log('Found Engine');
			}
			if(arrayContains($('#os').val(),matrix[i].os.split(','))){
				found.os=true;
				// console.log('Found OS');
			}
			
			// console.log(found);
			if(($('#condition').html() =='All') && (found.os && found.engines)){
				newMatrix.push(matrix[i]);
			}
			if(($('#condition').html() =='Any') && (found.os || found.engines)){
				newMatrix.push(matrix[i]);
			}
		};

	}
	$('#table').bootstrapTable("load",newMatrix);
	return newMatrix;
}

function displayMatrix() {

        for (var i = 0; i < matrix.length; i++) {
        	pushArray(lookups.engines.cluttered,matrix[i].engines.split(','));
        	pushArray(lookups.os.cluttered,matrix[i].os.split(','));
        };
        lookups.engines.unique = $.unique(lookups.engines.cluttered).sort();
        lookups.os.unique = $.unique(lookups.os.cluttered).sort();
        
		$.each(lookups.os.unique, function(key, value) {   
		     $('#os')
		         .append($("<option selected></option>")
		         .attr("value",value)
		         .text(value)); 
		});
		$.each(lookups.engines.unique, function(key, value) {   
		     $('#engines')
		         .append($("<option selected></option>")
		         .attr("value",value)
		         .text(value)); 
		});

        $('#os').multiselect({
            includeSelectAllOption: true,
            allSelectedText: 'All Operating Systems',
            nonSelectedText: 'Select Operating Systems',
            onChange: function(option, checked, select) {
               getFilteredMatrix();
            }
        });        
        $('#engines').multiselect({
            includeSelectAllOption: true,
            allSelectedText: 'All Engines',
            nonSelectedText: 'Select Engines',
            onChange: function(option, checked, select) {
               getFilteredMatrix();
            }
        });  

      $('#table').bootstrapTable({
        data: matrix
    	});  

    	$('#btnFilter').click(function(){
    		if($('#condition').html() =='All')
    			$('#condition').html('Any');
    		else
    			$('#condition').html('All');
    		getFilteredMatrix();
    	})    
    };
</script>

