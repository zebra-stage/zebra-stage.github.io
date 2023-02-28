// ** For Survey from IT ** //
(function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = "https://assets.adobedtm.com/f4072c74f4f2/089da8459efa/launch-2f5b1ced511b.min.js";
    document.body.appendChild(s);
})();
 
jQuery(function($) {'use strict';

	// Navigation Scroll
	$(window).scroll(function(event) {
		// Scroll();
	});

	// $('.navbar-collapse ul li a').on('click', function() {  
	// 	$('html, body').animate({scrollTop: $(this.hash).offset().top - 100}, 1000);
	// 	return false;
	// });

	$('#toc ul li a').on('click', function() {  
		console.log("scrolling");
		console.log($(this.hash));
		console.log($(this.hash).offset());
		$('html, body, .fixed-column-right').animate({scrollTop: $(this.hash).offset().top - 100}, 1000);
		return false;
	});

	// // User define function
	// function Scroll() {
	// 	var contentTop      =   [];
	// 	var contentBottom   =   [];
	// 	var winTop      =   $(window).scrollTop();
	// 	var rangeTop    =   200;
	// 	var rangeBottom =   500;
	// 	$('.navbar-collapse').find('.scroll a').each(function(){
	// 		contentTop.push( $( $(this).attr('href') ).offset().top);
	// 		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
	// 	})
	// 	$.each( contentTop, function(i){
	// 		if ( winTop > contentTop[i] - rangeTop ){
	// 			$('.navbar-collapse li.scroll')
	// 			.removeClass('active')
	// 			.eq(i).addClass('active');			
	// 		}
	// 	})
	// };

	$('#tile-view').on('click', function(){
		$('.viewlist').addClass('hidden');
		$('.tile').removeClass('hidden');
		$('#tile-view').addClass('hidden');
		$('#list-view').removeClass('hidden');
		$('#blog').attr('id','meet-team')
		return false;
	});
	$('#list-view').on('click', function(){
		$('.tile').addClass('hidden');
		$('.viewlist').removeClass('hidden');
		$('#tile-view').removeClass('hidden');
		$('#list-view').addClass('hidden');
		$('#meet-team').attr('id','blog')
		return false;

	});

	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});

	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

    
    // dropdown selector // Cathy
  /*  $("#btn-dw").on('click', function() {
        console.log("start select")
        var ver = $("#dw-version").val();
        var doc = $("#dw-section").val();
        console.log(ver, doc)
        var url = ver+doc;
        window.location=url; 
    });*/
    //$("#versionSelect a").on('click', function(e) {
     //   console.log("begin click");
      //  e.preventDefault();   // cancel the link behaviour
      //  var selVersion = $(this).text();
      //  console.log(selVersion);
    //});

	//Slider
	$(document).ready(function() {
		// make all images use img-responsove class from bootstrap
		$('img').addClass('img-responsive');

		// replace hrefs for certain docs
		$('a').each(function() {
		    var href = $(this).attr('href');
		    
		    if (href && href.startsWith("/emdk-for-android/6-0/api")) {
		    	console.log("Changing: " + href);
		    	var section = href.replace("/emdk-for-android/6-0/api/","");
		    	var param = "";
		    	if( section.startsWith("core/EMDKBase"))
		    		param = "/?com/symbol/emdk/EMDKBase.html"
		    	if( section.startsWith("core/EMDKManager"))
		    		param = "/?com/symbol/emdk/EMDKManager.html"
		    	if( section.startsWith("core/EMDKResults"))
		    		param = "/?com/symbol/emdk/EMDKResults.html"
		    	if( section.startsWith("core/ProfileConfig"))
		    		param = "/?com/symbol/emdk/ProfileConfig.html"
		    	if( section.startsWith("core/ProfileManager"))
		    		param = "/?com/symbol/emdk/ProfileManager.html"
		    	if( section.startsWith("core/VersionManager"))
		    		param = "/?com/symbol/emdk/VersionManager.html"
		    	if( section.startsWith("barcode/BarcodeManager"))
		    		param = "/?com/symbol/emdk/barcode/BarcodeManager.html"
		    	if( section.startsWith("barcode/InterfaceConfig"))
		    		param = "/?com/symbol/emdk/barcode/InterfaceConfig.html"
		    	if( section.startsWith("barcode/ScanDataCollection"))
		    		param = "/?com/symbol/emdk/barcode/ScanDataCollection.html"
		    	if( section.startsWith("barcode/Scanner"))
		    		param = "/?com/symbol/emdk/barcode/Scanner.html"
		    	if( section.startsWith("barcode/ScannerConfig"))
		    		param = "/?com/symbol/emdk/barcode/ScannerConfig.html"
		    	if( section.startsWith("barcode/ScannerInfo"))
		    		param = "/?com/symbol/emdk/barcode/ScannerInfo.html"
		    	if( section.startsWith("barcode/StatusData"))
		    		param = "/?com/symbol/emdk/barcode/StatusData.html"
		    	if( section.startsWith("notification"))
		    		param = "/?com/symbol/emdk/notification/package-summary.html"
		    	if( section.startsWith("payment"))
		    		param = "/?com/symbol/emdk/payment/package-summary.html"
		    	if( section.startsWith("personalshopper"))
		    		param = "/?com/symbol/emdk/personalshopper/package-summary.html"
		    	if( section.startsWith("scanandpair"))
		    		param = "/?com/symbol/emdk/scanandpair/package-summary.html"
		    	if( section.startsWith("serialcomm"))
		    		param = "/?com/symbol/emdk/serialcomm/package-summary.html"
		    	if( section.startsWith("simulscan"))
		    		param = "/?com/symbol/emdk/simulscan/package-summary.html"
		        href = "/emdk-for-android/6-0/api" + param;
		        $(this).attr('href', href);
		    }
		});		

		
		//youtube enable images with special alt-tag
		var imgTags = $("#mainContent").find('img').each(function( index ) {
		var imgIsVideo = false;
		if($(this).attr('alt') && $(this).attr('alt').startsWith('yt:')){
			imgIsVideo = true;
			var ytid = $(this).attr('alt').replace('yt:','');
			var video_thumbnail = 'http://img.youtube.com/vi/'+ytid+'/0.jpg';
			$(this).attr('src',video_thumbnail);
			$(this).wrap( "<div class='videos'></div>" );
			$(this).wrap( "<div  class='video' alt='yt:" + ytid + "''></div>" );
			$(this).before( "<span></span>" );
		};
		var item;
		if(imgIsVideo){
			item = $(this).parent();
		}
		else{
			item = $(this);
		}

		//Image Model
		item.click(function(){
			//Set Image
			var imgIsVideo = false;
			
			if($(this).attr('alt').startsWith('yt:')){
				imgIsVideo = true;
			}
			var itemHeight = this.naturalHeight;
			var itemWidth = this.naturalWidth;
			if(imgIsVideo){
				var ytid = $(this).attr('alt').replace('yt:','');

				var ytEmbed = '<iframe id="yt-video" width="100%" height="315" src="https://www.youtube.com/embed/' + ytid + '?autoplay=1" frameborder="0" autoplay allowfullscreen></iframe>'
				$("#modalImg").html(ytEmbed);
				console.log('youtube video' + ytid);
				itemHeight = 480;
				itemWidth = 640;
			}
			else{
				$("#modalImg").html( '<a href="' + $(this).attr("src") + '" target="_blank"><img title="" slt="img" src="' + $(this).attr("src") + '"></img></a>');

			}

			//Size box
			if(this.naturalWidth  > ($(document).width()- 100))
			{
				$(".modal-dialog").css("width", ($(document).width() - 100) + "px");
			}
			else
			{
				$(".modal-dialog").css("width", (itemWidth +44) + "px");
			}

			if(this.naturalHeight  > ($(window).height()- 120))
			{
				$(".modal-body").css("height", ($(window).height() - 120) + "px");
			}
			else
			{
				$(".modal-body").css("height", (itemHeight+44) + "px");
			}

			if(imgIsVideo){
				$("#basicModal").on('hide.bs.modal', function(){
			        $("#yt-video").attr('src', '');
			    });
			}
			//Show
			$('#basicModal').modal('show');

			setTimeout(function(){
				$("#modalImg").scrollTop(0);
				$("#modalImg").scrollLeft(0);
			},200);
		});


	});;

		//enable all tooltips
		$('[data-toggle="tooltip"]').tooltip();
		
		prettyPrint();
		var time = 7; // time in seconds

	 	var $progressBar,
	      $bar, 
	      $elem, 
	      isPause, 
	      tick,
	      percentTime;
	 
	    //Init the carousel
	    $("#main-slider").find('.owl-carousel').owlCarousel({
	      autoPlay : false,
	      slideSpeed : 500,
	      paginationSpeed : 500,
	      singleItem : true,
	      navigation : true,
			navigationText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
			],
	      afterInit : progressBar,
	      afterMove : moved,
	      startDragging : pauseOnDragging,
	      //autoHeight : true,
	      transitionStyle : "fade"
	    });
	 
	    //Init progressBar where elem is $("#owl-demo")
	    function progressBar(elem){
	      $elem = elem;
	      //build progress bar elements
	      buildProgressBar();
	      //start counting
	      start();
	    }
	 
	    //create div#progressBar and div#bar then append to $(".owl-carousel")
	    function buildProgressBar(){
	      $progressBar = $("<div>",{
	        id:"progressBar"
	      });
	      $bar = $("<div>",{
	        id:"bar"
	      });
	      $progressBar.append($bar).appendTo($elem);
	    }
	 
	    function start() {
	      //reset timer
	      percentTime = 0;
	      isPause = false;
	      //run interval every 0.01 second
	      tick = setInterval(interval, 10);
	    };
	 
	    function interval() {
	      if(isPause === false){
	        percentTime += 1 / time;
	        $bar.css({
	           width: percentTime+"%"
	         });
	        //if percentTime is equal or greater than 100
	        if(percentTime >= 100){
	          //slide to next item 
	          $elem.trigger('owl.next')
	        }
	      }
	    }
	 
	    //pause while dragging 
	    function pauseOnDragging(){
	      isPause = true;
	    }
	 
	    //moved callback
	    function moved(){
	      //clear interval
	      clearTimeout(tick);
	      //start again
	      start();
	    }
    addExpandableArrows();


    bindTreeEvents($('.sidebar-container li'));

    // Product switcher ------------------------------------------------------------------------- //

    $('.sidebar-container li.product > a').on('click', function(e) {
        e.preventDefault();
        var li = $(e.target).parent();

        if (li.hasClass('active')) {
            return;
        }

        $('.sidebar-container li.product.active > ul').stop(true, true).show().slideUp({
            duration: 400,
            complete: recalcSidebar
        });

        $('.sidebar-container li').removeClass('active');
        li.addClass('active');

        li.find('> ul').stop(true, true).hide().slideDown({
            duration: 400,
            complete: recalcSidebar
        });

        recalcSidebar();
    });


	});

	//Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();

	// portfolio filter
	$(window).load(function(){'use strict';
		// var $portfolio_selectors = $('.portfolio-filter >li>a');
		// var $portfolio = $('.portfolio-items');
		// $portfolio.isotope({
		// 	itemSelector : '.portfolio-item',
		// 	layoutMode : 'fitRows'
		// });
		
		// $portfolio_selectors.on('click', function(){
		// 	$portfolio_selectors.removeClass('active');
		// 	$(this).addClass('active');
		// 	var selector = $(this).attr('data-filter');
		// 	$portfolio.isotope({ filter: selector });
		// 	return false;
		// });
	});

	$(document).ready(function() {
		//Animated Progress
		$('.progress-bar').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).css('width', $(this).data('width') + '%');
				$(this).unbind('inview');
			}
		});

		//Animated Number
		$.fn.animateNumbers = function(stop, commas, duration, ease) {
			return this.each(function() {
				var $this = $(this);
				var start = parseInt($this.text().replace(/,/g, ""));
				commas = (commas === undefined) ? true : commas;
				$({value: start}).animate({value: stop}, {
					duration: duration == undefined ? 1000 : duration,
					easing: ease == undefined ? "swing" : ease,
					step: function() {
						$this.text(Math.floor(this.value));
						if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
					},
					complete: function() {
						if (parseInt($this.text()) !== stop) {
							$this.text(stop);
							if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
						}
					}
				});
			});
		};

		$('.animated-number').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			var $this = $(this);
			if (visible) {
				$this.animateNumbers($this.data('digit'), false, $this.data('duration')); 
				$this.unbind('inview');
			}
		});
	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
		});
	});

	//Pretty Photo
	// $("a[rel^='prettyPhoto']").prettyPhoto({
	// 	social_tools: false
	// });


});

// Select doc section // Cathy
function selectDoc(prod_id, doc_id) {
    console.log(prod_id);
    var ver = "";
    var doc = "";
    
    switch (prod_id) {
        case 'btn-bti':
            ver = $("#bti-version").val();
            doc = $("#bti-doc").val();
            break;
        case 'btn-dcs':
            ver = "";   // no version
            doc = $("#dcs-doc").val();
            break;
        case 'btn-dw':
            ver = $("#dw-version").val();
            doc = $("#dw-doc").val();
            break;
        case 'btn-eb':
            ver = $("#eb-version").val();
            doc = $("#eb-doc").val();
            break;
        case 'btn-emdk-a':
            ver = $("#emdk-a-version").val();
            doc = $("#emdk-a-doc").val();
            break;
        case 'btn-emdk-x':
            ver = $("#emdk-x-version").val();
            doc = $("#emdk-x-doc").val();
            break;
        case 'btn-link-os':
            ver = $("#link-os-version").val();
            doc = $("#link-os-doc").val();
            break;
        case 'btn-mp':
            ver = $("#mp-version").val();
            doc = $("#mp-doc").val();
            break;
        case 'btn-rfid':
            ver = "";   // no version
            doc = $("#rfid-doc").val();
            break;
        case 'btn-ssm':
            ver = $("#ssm-version").val();
            doc = $("#ssm-doc").val();
            break;
        default:
            return false;
    }
    var url = ver+doc;
    window.location=url;
}

function populateDropdown (ddl_ver, ddl_doc) {
    console.log("populateDropdown");
    // differing doc sections
    // SSM
    var ssm_1_0_text = ['About', 'Using SSM', 'APIs'];
    var ssm_1_0_val = ['/guide/about', '/guide/use', '/guide/api'];
    // DataWedge
    var dw_11_2_text = ['About', 'Get Started', 'Profiles', 'Guides', 'Feature Matrix', 'APIs', 'Samples', 'FAQ'];
    var dw_11_2_val = ['/guide/about', '/guide/gettingstarted', '/guide/profiles', '/guide/programmers-guides', '/guide/matrix', '/guide/api', '/guide/samples', '/guide/faq'];
    var dw_11_0_text = ['About', 'Guides', 'Profiles', 'Feature Matrix', 'Decoders', 'Settings', 'APIs', 'Samples', 'FAQ'];
    var dw_11_0_val = ['/guide/about', '/guide/programmers-guides', '/guide/profiles', '/guide/matrix', '/guide/decoders', '/guide/settings', '/guide/api', '/guide/samples', '/guide/faq'];
    var dw_8_2_text = ['About', 'Guides', 'Profiles', 'Feature Matrix', 'Settings', 'APIs', 'Samples', 'FAQ'];
    var dw_8_2_val = ['/guide/about', '/guide/programmers-guides', '/guide/profiles', '/guide/matrix', '/guide/settings', '/guide/api', '/guide/samples', '/guide/faq'];
    var dw_8_0_text = ['About', 'Get Started', 'Profiles', 'Settings', 'APIs', 'Guides', 'Samples', 'Remote Admin', 'Licensing', 'FAQ'];
    var dw_8_0_val = ['/guide/about', '/guide/gettingstarted', '/guide/profiles', '/guide/settings', '/guide/api', '/guide/programmers-guides', '/guide/samples', '/guide/admin', '/guide/licensing', '/guide/faq'];
    var dw_7_6_text = ['About', 'Get Started', 'Profiles', 'Settings', 'APIs', 'Samples', 'Remote Admin', 'FAQ'];
    var dw_7_6_val = ['/guide/about', '/guide/gettingstarted', '/guide/profiles', '/guide/settings', '/guide/api', '/guide/samples', '/guide/admin', '/guide/faq'];
    var dw_7_5_text = ['About', 'Get Started', 'Profiles', 'Settings', 'APIs', 'Samples', 'Remote Admin'];
    var dw_7_5_val = ['/guide/about', '/guide/gettingstarted', '/guide/profiles', '/guide/settings', '/guide/api', '/guide/samples', '/guide/admin'];
    var dw_7_4_text = ['About', 'Get Started', 'Setup', 'Profiles', 'Settings', 'APIs', 'Samples'];
    var dw_7_4_val = ['/guide/about', '/guide/gettingstarted', '/guide/setup', '/guide/profiles', '/guide/settings', '/guide/api', '/guide/samples'];
    var dw_6_9_text = ['About', 'Setup', 'Profiles', 'Settings', 'APIs', 'Samples' ];
    var dw_6_9_val = ['/guide/about', '/guide/setup', '/guide/profiles', '/guide/settings', '/guide/api', '/guide/samples'];
    var dw_6_3_text = ['About', 'Setup', 'Profiles', 'Settings', 'APIs', 'Sample' ];
    var dw_6_3_val = ['/guide/about', '/guide/setup', '/guide/profiles', '/guide/settings', '/guide/api', '/guide/demo'];
    var dw_6_2_text = ['About', 'Setup', 'Advanced', 'Decoders', 'MSR Input', 'IPWedge', 'APIs', 'Demo' ];
    var dw_6_2_val = ['/guide/about', '/guide/setup', '/guide/advanced', '/guide/decoders', '/guide/msr', '/guide/ipwedge', '/guide/api', '/guide/demo'];
    var dw_5_0_text = ['About', 'Setup', 'Advanced', 'Decoders', 'IPWedge', 'APIs', 'Demo' ];
    var dw_5_0_val = ['/guide/about', '/guide/setup', '/guide/advanced', '/guide/decoders', '/guide/ipwedge', '/guide/api', '/guide/demo'];
    // EMDK for Android
    var emdk_a_4_0_text = ['About', 'Get Started', 'Tutorials', 'Samples', 'Guides', 'Profile Manager', 'APIs'];
    var emdk_a_4_0_val = ['/guide/about', '/guide/gettingstarted', '/tutorial', '/samples', '/guide/programming-guides', '/guide/profile-manager-guides', '/api'];
    var emdk_a_7_3_text = ['About', 'Get Started', 'Tutorials', 'Samples', 'Guides', 'Profile Manager', 'FAQ', 'APIs'];
    var emdk_a_7_3_val = ['/guide/about', '/guide/gettingstarted', '/tutorial', '/samples', '/guide/programming-guides', '/guide/profile-manager-guides', '/faq', '/apimenu'];
    var emdk_a_9_0_text = ['About', 'Set Up', 'Tutorials', 'Samples', 'Guides', 'Profile Manager', 'FAQ', 'APIs'];
    var emdk_a_9_0_val = ['/guide/about', '/guide/gettingstarted', '/tutorial', '/samples', '/guide/programming-guides', '/guide/profile-manager-guides', '/faq', '/apimenu'];
    // EMDK for Xamarin
    var emdk_x_4_0_text = ['About', 'Get Started', 'Tutorials', 'Samples', 'Guides', 'Profile Manager', 'FAQ', 'APIs'];
    var emdk_x_4_0_val = ['/guide/about', '/guide/gettingstarted', '/tutorial', '/samples', '/guide/programming-guides', '/guide/profile-manager-guides', '/faq', '/api'];
    var emdk_x_2_1_text = ['About', 'Get Started', 'Tutorials', 'Samples', 'Guides', 'Profile Manager', 'APIs'];
    var emdk_x_2_1_val = ['/guide/about', '/guide/gettingstarted', '/tutorial', '/samples', '/guide/programming-guides', '/guide/profile-manager-guides', '/api'];
    var emdk_x_1_0_text = ['About', 'Get Started', 'Tutorials', 'Samples', 'Profile Manager', 'APIs'];
    var emdk_x_1_0_val = ['/guide/about', '/guide/gettingstarted', '/tutorial', '/samples', '/guide/profile-manager-guides', '/api'];
    // Enterprise Browser
    var eb_1_4_text = ['About', 'Get Started', 'Tutorials', 'Guides', 'Config.xml', 'APIs'];
    var eb_1_4_val = ['/guide/about', '/guide/gettingstarted', '/tutorial', '/guide', '/guide/configreference', '/api'];
    var eb_1_5_text = ['About', 'Get Started', 'Tutorials', 'Samples', 'Guides', 'Config.xml', 'APIs'];
    var eb_1_5_val = ['/guide/about', '/guide/gettingstarted', '/tutorial','/guide/samples', '/guide', '/guide/configreference', '/api'];
    var eb_1_8_text = ['About', 'Get Started', 'Tutorials', 'Samples', 'Guides', 'Migration', 'Config.xml', 'APIs'];
    var eb_1_8_val = ['/guide/about', '/guide/gettingstarted', '/tutorial','/guide/samples', '/guide', '/guide/migration', '/guide/configreference', '/api'];
    var eb_2_0_text = ['About', 'Get Started', 'Tutorials', 'Samples', 'Guides', 'License', 'Migrate', 'Config.xml', 'APIs'];
    var eb_2_0_val = ['/guide/about', '/guide/gettingstarted', '/tutorial','/guide/samples','/guide/licensing', '/guide', '/guide/migration', '/guide/configreference', '/api'];


    console.log(ddl_ver, ddl_doc, ddl_ver.value);
    switch (ddl_ver.value) {
        case '/ssm/1-0':
            ddl_doc.options.length = 0;
            for (i=0; i < ssm_1_0_text.length; i++) {
                createOption(ddl_doc, ssm_1_0_text[i], ssm_1_0_val[i]);
            }
            break;
        case '/datawedge/5-0':
        case '/datawedge/6-0':
            ddl_doc.options.length = 0;
            for (i=0; i < dw_5_0_text.length; i++) {
                createOption(ddl_doc, dw_5_0_text[i], dw_5_0_val[i]);
            }
            break;
        case '/datawedge/6-2':
            ddl_doc.options.length = 0;
            for (i=0; i < dw_6_2_text.length; i++) {
                createOption(ddl_doc, dw_6_2_text[i], dw_6_2_val[i]);
            }
            break;
        case '/datawedge/6-3':
        case '/datawedge/6-4':
        case '/datawedge/6-5':
        case '/datawedge/6-6':
        case '/datawedge/6-7':
        case '/datawedge/6-8':
            ddl_doc.options.length = 0;
            for (i=0; i < dw_6_3_text.length; i++) {
                createOption(ddl_doc, dw_6_3_text[i], dw_6_3_val[i]);
            }
            break;
        case '/datawedge/6-9':
        case '/datawedge/7-0':
        case '/datawedge/7-1':
        case '/datawedge/7-2':
        case '/datawedge/7-3':
            ddl_doc.options.length = 0;
            for (i=0; i < dw_6_9_text.length; i++) {
                createOption(ddl_doc, dw_6_9_text[i], dw_6_9_val[i]);
            }
            break;
        case '/datawedge/7-4':
            ddl_doc.options.length = 0;
            for (i=0; i < dw_7_4_text.length; i++) {
                createOption(ddl_doc, dw_7_4_text[i], dw_7_4_val[i]);
            }
            break;
        case '/datawedge/7-5':
                ddl_doc.options.length = 0;
                for (i=0; i < dw_7_5_text.length; i++) {
                    createOption(ddl_doc, dw_7_5_text[i], dw_7_5_val[i]);
                }
                break;
        case '/datawedge/7-6':
            ddl_doc.options.length = 0;
            for (i=0; i < dw_7_6_text.length; i++) {
                createOption(ddl_doc, dw_7_6_text[i], dw_7_6_val[i]);
            }
            break;
        case '/datawedge/8-0':
        case '/datawedge/8-1':
            ddl_doc.options.length = 0;
            for (i=0; i < dw_8_0_text.length; i++) {
                createOption(ddl_doc, dw_8_0_text[i], dw_8_0_val[i]);
            }
            break;
        case '/datawedge/8-2':
            ddl_doc.options.length = 0;
            for (i=0; i < dw_8_2_text.length; i++) {
                createOption(ddl_doc, dw_8_2_text[i], dw_8_2_val[i]);
            }
            break;
        case '/datawedge/11-0':
        case '/datawedge/11-1':
            ddl_doc.options.length = 0;
            for (i=0; i < dw_11_0_text.length; i++) {
                createOption(ddl_doc, dw_11_0_text[i], dw_11_0_val[i]);
            }
            break;
        case '/datawedge/11-2':
        case '/datawedge/11-3':
        case '/datawedge/11-4':
            ddl_doc.options.length = 0;
            for (i=0; i < dw_11_2_text.length; i++) {
                createOption(ddl_doc, dw_11_2_text[i], dw_11_2_val[i]);
            }
            break;
        
        // EMDK for Android
        case '/emdk-for-android/4-0':
        case '/emdk-for-android/4-2':
        case '/emdk-for-android/5-0':
        case '/emdk-for-android/6-0':
        case '/emdk-for-android/6-3':
        case '/emdk-for-android/6-4':
        case '/emdk-for-android/6-6':
        case '/emdk-for-android/6-7':
        case '/emdk-for-android/6-8':
        case '/emdk-for-android/6-9':
        case '/emdk-for-android/6-10':
        case '/emdk-for-android/7-0':
        case '/emdk-for-android/7-1':
        case '/emdk-for-android/7-2':
            ddl_doc.options.length = 0;
            for (i=0; i < emdk_a_4_0_text.length; i++) {
                createOption(ddl_doc, emdk_a_4_0_text[i], emdk_a_4_0_val[i]);
            }
            break;
        case '/emdk-for-android/7-3':
        case '/emdk-for-android/7-4':
        case '/emdk-for-android/7-5':
        case '/emdk-for-android/7-6':
        case '/emdk-for-android/8-0':
            ddl_doc.options.length = 0;
            for (i=0; i < emdk_a_7_3_text.length; i++) {
                createOption(ddl_doc, emdk_a_7_3_text[i], emdk_a_7_3_val[i]);
            }
            break;
        case '/emdk-for-android/9-0':
        case '/emdk-for-android/9-1':
        case '/emdk-for-android/11-0':
            ddl_doc.options.length = 0;
            for (i=0; i < emdk_a_9_0_text.length; i++) {
                createOption(ddl_doc, emdk_a_9_0_text[i], emdk_a_9_0_val[i]);
            }
            break;
        // EMDK for Xamarin
        case '/emdk-for-xamarin/4-0':
            ddl_doc.options.length = 0;
            for (i=0; i < emdk_x_4_0_text.length; i++) {
                createOption(ddl_doc, emdk_x_4_0_text[i], emdk_x_4_0_val[i]);
            }
            break;
        case '/emdk-for-xamarin/2-1':
            ddl_doc.options.length = 0;
            for (i=0; i < emdk_x_2_1_text.length; i++) {
                createOption(ddl_doc, emdk_x_2_1_text[i], emdk_x_2_1_val[i]);
            }
            break;
        case '/emdk-for-xamarin/1-0':
            ddl_doc.options.length = 0;
            for (i=0; i < emdk_x_1_0_text.length; i++) {
                createOption(ddl_doc, emdk_x_1_0_text[i], emdk_x_1_0_val[i]);
            }
            break;
        
        // Enterprise Browser
        case '/enterprise-browser/1-4':
            ddl_doc.options.length = 0;
            for (i=0; i < eb_1_4_text.length; i++) {
                createOption(ddl_doc, eb_1_4_text[i], eb_1_4_val[i]);
            }
            break;
        case '/enterprise-browser/1-5':
        case '/enterprise-browser/1-6':
        case '/enterprise-browser/1-7':
            ddl_doc.options.length = 0;
            for (i=0; i < eb_1_5_text.length; i++) {
                createOption(ddl_doc, eb_1_5_text[i], eb_1_5_val[i]);
            }
            break;
        case '/enterprise-browser/1-8':
            ddl_doc.options.length = 0;
            for (i=0; i < eb_1_8_text.length; i++) {
                createOption(ddl_doc, eb_1_8_text[i], eb_1_8_val[i]);
            }
            break;
        case '/enterprise-browser/2-0':
        case '/enterprise-browser/2-5':
        case '/enterprise-browser/2-6':
        case '/enterprise-browser/3-0':
        case '/enterprise-browser/3-2':
        case '/enterprise-browser/3-3':
            ddl_doc.options.length = 0;
            for (i=0; i < eb_2_0_text.length; i++) {
                createOption(ddl_doc, eb_2_0_text[i], eb_2_0_val[i]);
            }
            break;
        default:
            break;

    }
}


function createOption (ddl, text, value) {
    var opt = document.createElement('option');
    opt.value = value;
    opt.text = text;
    ddl.options.add(opt);
}

/*
$(document).ready(function () {
    $("select").each(function () {
        $(this).val($(this).find('option[selected]').val());
    });
})*/

function changeVersion(version_from,version_to,default_url){
	var new_url = $(location).attr('href').replace(version_from,version_to);
	console.log(new_url);
	var jqxhr = $.get( new_url, function() {
	  window.location = new_url;
	})
	.fail(function() {
		window.location = default_url;
	});


}

function changeLanguage(fromurl, tourl, lang){
	var new_url = $(location).attr('href').replace(fromurl,tourl);
	console.log(new_url);
	window.location = new_url


}

// more tree binding functions
function addExpandableArrows() {
    $('.sidebar-container li.expandable').each(function (item) {
        $(this).not('>span.arrow').prepend('<span class="arrow"></span>');
    });
}
function recalcSidebar() {
    $(document.body).trigger("sticky_kit:recalc");
}
function bindTreeEvents(li) {
    li.bind('tree_toggle', function(e) {

        e.stopPropagation();

        if ($(this).hasClass('active')) {
            $(this).trigger('tree_collapse');
        } else {
            $(this).trigger('tree_expand');
        }

    }).bind('tree_collapse', function(e) {

        e.stopPropagation();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').find('> ul').stop(true, true).show().slideUp({
                duration: 400,
                complete: recalcSidebar
            });
        }

    }).bind('tree_expand', function(e) {

        e.stopPropagation();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active').find('> ul').stop(true, true).hide().slideDown({
                duration: 400,
                complete: recalcSidebar
            });
        }

    });

    $('.sidebar-container li .arrow').on('click', function(e) {
        var li = $(e.target).parent();
        li.trigger('tree_toggle');
        recalcSidebar();
    });
    $('.sidebar-container li .arrow-li').on('click', function(e) {
        var li = $(e.target).parent().parent();
        var arrow = li.find('.arrow').first()[0];

        console.log('need to click associated arrow');
        console.log(arrow);
        arrow.click();
        // li.trigger('tree_toggle');
        // recalcSidebar();
    });


// 3/18/21- Back-to-top button + revisions for MX Feature Matrix

// Inject back-to-top button into all HTML pages; then get it
var html='<button id="back-to-top-btn" title="Go to top">Back to Top</button>';

$("body").append(html);

var buttonToTop = document.getElementById("back-to-top-btn");

// Show button when user scolls past 450px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    buttonToTop.style.display = "block";
  } else {
    buttonToTop.style.display = "none";
  }
}

// Revisions to detect scrolling on MX Feature Matrix (div)
$(".fixed-column-right").scroll(function() {
console.log("Scrolling :"+$(this).scrollTop())
if ($(this).scrollTop() >450) {
console.log("Adding");
$("#back-to-top-btn").css("display","block");
} else {
console.log("hiding")
$("#back-to-top-btn").css("display","none");
}
});

// Scroll to top of page on button click
$("#back-to-top-btn").click(function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $(".fixed-column-right").scrollTop(0);
    });

}

// Reset version dropdown selection
$(document).ready(function () {
    console.log("in document ready");
    window.setTimeout(function(){
        $(".version-select").each(function () {
            $(this).prop('selectedIndex', 0);
            console.log("value:" + $(this).val());
        });
        $(".doc-select").each(function () {
            $(this).prop('selectedIndex', 0);
            console.log("value:" + $(this).val());
        });
    }, 500);
})