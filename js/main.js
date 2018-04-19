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

}