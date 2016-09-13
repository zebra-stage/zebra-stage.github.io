---
title: API Compatibility Matrix
productversion: '1.4'
product: Enterprise Browser
layout: ebmatrix.html
---
<div id="toolbar" >
	<button class="btn btn-primary" id="btnFilter"><i class="glyphicon glyphicon-filter"></i> (<span id="condition">Any</span>)</button>
	<select id="engines" multiple="multiple">
	</select>
	<select id="os" multiple="multiple">
	</select>
</div>
The filter option below allows you to change between:

* Filter operator:
	* All : both Engine and Operating System selections must be matched
	* Any : either the Engine or the Operating System selection may be matched
* Engine:
	* IE : Internet Explorer Engine (Windows Mobile / CE). API access is via Pocket Browser EMML 1.0, EMML 1.1, and ActiveX objects only - Please refer to Pocket Browser documentation for syntax. 
	* Webkit:
		* Android devices use the stock webkit provided by Android
		* Windows Mobile/CE devices use the Zebra Technologies Webkit
* Operating System:
	* WM : Windows Mobile
	* CE : Windows CE
	* Android : Android


<table id="table" 
	data-search="true"
	data-show-columns="true"
	data-toolbar="#toolbar">
    <thead>
    <tr>
        <th data-field="api">Api</th>
        <th data-field="engines">Engines</th>
        <th data-field="os">Operating System</th>
    </tr>
    </thead>
</table>

<script>

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

