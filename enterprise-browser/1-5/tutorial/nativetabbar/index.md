elow is a EB application which has a startpage configured as nativetabbar.html. On EB launch, this start page creates three tabs where tab0 should be configured as the page used for tab creation (in this case nativetabbar.html). Once tab is created one can switch between tabs using EB.NativeTabbar.switchTab(nTabIndex). It means each tab page should have a link/button to switch between tabs.

Thee sample app below, called `nativetabbar.html`, creates three tabs: "tab0" is the current view (the startpage itself), and tab1 and tab2 are the real tabs shown to user. The app creates the three tabs on launch, and immediately sets is view to mytab2.html.


	:::html
	<html>
	    <head>
		<title>STARTPage</title>
	        <script type="text/javascript" charset="utf-8" src="ebapi-modules.js">     
	        </script>
	        <script type="text/javascript">	

		function create_tabbar() {
			EB.NativeTabbar.create(
						[
						{'label':'MainPage', 'action':'http://192.168.1.5:80/xampp/ebtest/nativetabbar.html', 'useCurrentViewForTab':true},
						{
							label: "abc",
							reload: false,
							action:   
	                                            "http://192.168.1.5:80/xampp/ebtest/mytab2.html"
						
						},
						{
							label: "abcd",
							reload: false,
							action: "http://192.168.1.5:80/xampp/ebtest/mytab3.html"
						
						}
						],
					
						{createOnInit: "true"} ,tabbar_callback   
					);
				}

				function tabbar_callback(params) 
				{
				//alert(params)
				}
				
	   			var alreadyloaded = false;
				function loadEvent(){
					if(alreadyloaded == false)
					{
						alreadyloaded = true;
					       create_tabbar();
	                                       EB.NativeTabbar.switchTab(1);	//this will give a feel to user that his start page is tab1 page contents.(mytab2.html in this case)				
					}				
	            }
				 function removetabbar()
	        {
	        	EB.NativeTabbar.remove();
	        }

	            window.addEventListener('DOMContentLoaded', loadEvent);
	        </script>
	    </head>

	    <body onload="Javascript:loadEvent()" onunload="removetabbar()">	
	    <button onclick="EB.Application.quit()">Quit</button>
	    </body>
	</html>


tab2.html

<!DOCTYPE html>
<html>
<head>
    <title>MyTab2</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    <script type="text/javascript" charset="utf-8" src="ebapi-modules.js"></script>

    <script type="text/javascript">

        
        function tabbarSwitch( nTab ) {
            EB.NativeTabbar.switchTab(nTab); //switch to any other tab
        }

        function goHome( ) {
            EB.NativeTabbar.switchTab(0); //switch to default view if u want to quit the app
        }

        
    </script>

  

</head>
<body>
<h1>MyTab2</h1>
 Text box to check "reload": <input type="text" name="fname"><br>
<a href="#" onclick="goHome();">Switch to Home Page 0</a><br/>
<a href="#" onclick="tabbarSwitch(2);">Switch to MyTab3</a><br/>

</body>
</html>


It has been found that some users doesn't want to modify their existing application for switching from one tab to another. One can use dominjection technique for the same. Below is an example how one can use dominjection along with keycapture module for switching tabs. In this example our start page creates 3 tabs where tab0 is the page used for creating the tabs and tab1 and tab2 are the pages that users doesn't want to modify. In this example tab1 is google and tab2 is yahoo.
Below is the start page nativetabbar.html one should configure in config.xml

<html>
    <head>
	<title>STARTPage</title>
        <script type="text/javascript" charset="utf-8" src="ebapi-modules.js">     
        </script>
        <script type="text/javascript">	

	function create_tabbar() {
		EB.NativeTabbar.create(
					[
					{'label':'MainPage', 'action':'http://192.168.1.5:80/xampp/ebtest/nativetabbar.html', 'useCurrentViewForTab':true},
					{
						label: "abc",
						reload: false,
						action:   
                                            "https://www.google.co.in"
					
					},
					{
						label: "abcd",
						reload: false,
						action: "http://www.yahoo.com"
					
					}
					],
				
					{createOnInit: "true"} ,tabbar_callback   
				);
			}

			function tabbar_callback(params) 
			{
			//alert(params)
			}
			
   			var alreadyloaded = false;
			function loadEvent(){
				if(alreadyloaded == false)
				{
					alreadyloaded = true;
				       create_tabbar();
                                       EB.NativeTabbar.switchTab(1);	//this will give a feel to user that his start page is tab1 page contents.(google.co.in in this case)				
				}				
            }
			 function removetabbar()
        {
        	EB.NativeTabbar.remove();
        }

            window.addEventListener('DOMContentLoaded', loadEvent);
        </script>
    </head>

    <body onload="Javascript:loadEvent()" onunload="removetabbar()">	
    <button onclick="EB.Application.quit()">Quit</button>
    </body>
</html>

Apart from that one should place the dominjection html tags in a file on the device and should mention this path inside config.xml as given below (refer dominjection module documentation for more details)
modify config.xml as follows after placing myTags.txt under Application\EBKeyCap folder in case of CE/WM device
<CustomDOMElements value="file://\Application\EBKeyCap\myTags.txt"/>
below is the content inside myTags.txt
<script type='text/javascript' src='http://192.168.1.5:80/xampp/ebtest/ebapi-modules.js' pages='*'/>
<script type='text/javascript' src='http://192.168.1.5:80/xampp/ebtest/KeyCap.js' pages='*'/>
Once config.xml has been configured with CustomDOMElements path and startpage, EB will start injecting ebapi-modules.js and KeyCap.js to all tabs automatically.
Below is the content of KeyCap.js

 (function() {

        // Poll for jQuery to come into existence
        var checkReady = function(callback) {
            if (window.Rho) {
                callback(Rho);
            }
            else {
                window.setTimeout(function() { checkReady(callback); }, 100); //check here
            }
        };
        // Start polling...
        checkReady(function(Rho) {
        
		EB.KeyCapture.captureKey(true, "ALL", keyCapCallback);
		  

        });
    })();

	

function keyCapCallback(result){

	
	if(result.keyValue==112) // F1
		EB.NativeTabbar.switchTab(1);//go to google
	if(result.keyValue==113)
		EB.NativeTabbar.switchTab(2);//go to yahoo
		if(result.keyValue==114)
		{
		EB.NativeTabbar.remove();//remove tabs
		EB.Application.quit();//quit app
		}
		

}

						 
The above example will give a feel to user that his start page is google.com and upon pressing F2 key his view switches to yahoo.com. On pressing F1, his view will switch back to google.com. On pressing F3, his app will quit. Note that keyboard layout is different on various zebra devices. Hence keyvalue used here needs to be modified based on the users device key mapping.


