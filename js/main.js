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


/* AI Chatbot */
$(document).ready(function(){
  // add style to page
  // Create a link element for CSS
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://zebra-stage.github.io/css/aichatbot.css';
  link.onload = function() {
      console.log('CSS loaded and applied.');
  };
  link.onerror = function() {
      console.log('Error loading the CSS.');
  };
  // Append the link to the head
  document.head.appendChild(link);  

  var link2 = document.createElement('link');
  link2.rel = 'stylesheet';
  link2.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
  link2.onload = function() {
      console.log('CSS loaded and applied.');
  };
  link2.onerror = function() {
      console.log('Error loading the CSS.');
  };
  // Append the link to the head
  document.head.appendChild(link2);  

  //add html
  var htmlContent = `
  <div id="zbrbot-container" class="zbrbot-container salesforce-english-chat inherited-styles-for-exported-element">
  <div id="zbrbot-wrap" class="zbrchatbot-wrap">

    <div id="zbrbot-icon" class="zbrbot-icon " style="">
      <div class="zbrbot-iconimg">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-dots-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
        </svg>
      </div>

      <div class="zbrbot-icon-txt" id="iconText">AI Chatbot</div>
    </div>

    <div id="zbrbot" class="zbrbot zbrbot-hide ui-resizable on" style="">

      <header id="zbrbot-header" class="zbrbot-header ui-draggable-handle">
        <div class="zbrbot-headaibtns float-left">
          <div class="resize-icon zbrbot-hide" id="resize-icon" title="Resize">
            <button type="button" class="aibtn aibtn-dark aibtn-small">
              <img class="glyphicon-resize-full" src="https://www.zebra.com/content/dam/zebra-it/chaticons/zebra-max-icon-white-32x32.png" alt="Resize Expand">
              <img class="glyphicon-resize-small" src="https://www.zebra.com/content/dam/zebra-it/chaticons/zebra-min-icon-white-32x32.png" alt="Resize Collapse">
            </button>
          </div>
        </div>

        <div class="zbrbot-headaibtns float-middle">
          <div class="aibtn-wrap aibtn-liveagent-wrap" title="Techdocs GenAI Agent" id="zbrbot-title"></div>
        </div>

        <div class="zbrbot-headaibtns float-right">
          <div class="zbrbot-endchat" id="close-icon" title="End Chat">
            <button type="button" class="aibtn aibtn-dark aibtn-small aibtn-endchat" data-dismiss="modal" id="aibtn-endchat">
              <img src="https://www.zebra.com/content/dam/zebra-it/chaticons/close-icon-white-32x32.png" alt="End Chat">
            </button>
          </div>
          <div class="minimize-icon zbrbot-minimize zbrbot-hide" id="minimize-icon" title="Minimize">
            <button type="button" class="aibtn aibtn-dark aibtn-small close" data-dismiss="modal">
              <img src="https://www.zebra.com/content/dam/zebra-it/chaticons/zebra-minimize-icon-white-32x32.png" alt="Minimize">
            </button>
          </div>

          <div class="reload-icon zbrbot-reload zbrbot-hide" id="refresh-icon" title="Refresh">
            <button type="button" class="aibtn aibtn-dark aibtn-small refresh" data-dismiss="modal">
              <img src="https://www.zebra.com/content/dam/zebra-it/chaticons/zebra-refresh-icon-white-32x32.png" alt="Refresh">
            </button>
          </div>

        </div>
      </header>


      <div id="zbrbot-chatwindow" class=""></div>


      <div id="prefill-wrap" class="modal prefill-wrap" spellcheck="false">
        <div id="prefill-form" class="prefill-form" method="POST" novalidate="novalidate">


          <div class="row">
            <div class="col">


              <div class="form-group form-check">
                <label class="form-check-label" for="zbot-privacyploicy">
                  <div class="form-privacy-statement">
                    <strong>
                      <u id="zbr-declaration">Declaration, Notice and Consent:</u>
                    </strong>
                    <br>
                    <b style="font-weight: normal;" id="zbr-privacy-text">By using this chatbot, you consent to the recording and use of any information you share as provided in Zebra’s <a target="_blank" href="https://www.zebra.com/us/en/about-zebra/company-information/legal/terms-of-use.html">Terms of Use</a> and <a target="_blank" href="https://www.zebra.com/us/en/about-zebra/company-information/legal/privacy-statement.html">Privacy Statement</a>.</b>
                  </div>
                </label>
              </div>

            </div>
          </div>

          <div class="row">
            <div class="col">
              <button id="prefill-submit" class="aibtn aibtn-zbr">Start Chatting</button>
              <button id="close-chatbot" class="aibtn aibtn-zbr zbrbot-hide">Close Chatbot</button>
            </div>
          </div>
          <input type="hidden" name="ringside_visit_id" value="e08433b3-623f-4ae2-a2a2-a55b87cccf57">
        </div>
      </div>


    </div>
  </div>

  <df-messenger
  project-id="emc-zdtrk-research02-d"
  agent-id="7ecf5891-fd70-4a70-b44b-032b625c50cd"
  language-code="en"
  max-query-length="-1"
  allow-feedback="all">
  <df-messenger-chat
   chat-title="">
  </df-messenger-chat>
</df-messenger>  

</div>
`;
  // Append the HTML to the end of the body
  $('body').append(htmlContent);  

  $("#zbrbot-icon").click(function(){
    $("#zbrbot-icon").addClass("zbrbot-hide");
    $("#zbrbot").removeClass("zbrbot-hide");
    $("#prefill-submit").removeClass("zbrbot-hide");
    $("#close-chatbot").addClass("zbrbot-hide");
  });
  $("#zbrbot .zbrbot-endchat").click(function(){
    $("#zbrbot-icon").removeClass("zbrbot-hide");
    $("#zbrbot").addClass("zbrbot-hide");
    $("df-messenger").addClass("zbrbot-hide");
  });

  $("#close-chatbot").click(function(){
    $("df-messenger").addClass("zbrbot-hide");
    $("#zbrbot-icon").removeClass("zbrbot-hide");
    $("#zbrbot").addClass("zbrbot-hide");    
  });
  $('#prefill-submit').click(function() {
        $("#prefill-submit").addClass("zbrbot-hide");
        $("#close-chatbot").removeClass("zbrbot-hide");
        $("df-messenger").removeClass("zbrbot-hide");
                // Create a script element
                var script = document.createElement('script');
                script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
                script.onload = function() {
                    console.log('Script loaded and executed.');
                    // Here you can add any code to execute after the script is loaded
                };
                script.onerror = function() {
                    console.log('Error loading the script.');
                };
                // Append the script to the body or head
                document.body.appendChild(script);
            });  

});  
