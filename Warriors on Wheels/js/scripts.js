( function ( $ ) {
'use strict';
$(document).ready(function(){
$('.m-bellows').bellows();
$(".video").fitVids();
//Portfolio item
//==================================================================
//==================================================================
$(".portfolio-item-block").click(function() {
		var current_portfolio_item = this;
		if ($("body").width() >= 734) {
			if ($(this).is(".open")) {
				$(".portfolio-item-block").css("margin-bottom", 0);
				$(".details").fadeOut();
				$(".portfolio-item-block").removeClass("open");
				
			} else {
				$(".portfolio-item-block").css("margin-bottom", 0);
				$(".portfolio-item-block").removeClass("open");
				$(".details").fadeOut();
				$(".portfolio-list").addClass("static");
				$(current_portfolio_item).addClass("open");
					
				if($(current_portfolio_item).attr("data-item") == 1)
				{
					$(current_portfolio_item).css("margin-bottom", $(".details", current_portfolio_item).height() + 120);
					$(current_portfolio_item).next(".portfolio-item-block").css("margin-bottom", $(".details", current_portfolio_item).height() + 120);
					$(current_portfolio_item).next(".portfolio-item-block").next(".portfolio-item-block").css("margin-bottom", $(".details", current_portfolio_item).height() + 120);
				}
				if($(current_portfolio_item).attr("data-item") == 2)
				{	
					$(current_portfolio_item).css("margin-bottom", $(".details", current_portfolio_item).height() + 120);
					$(current_portfolio_item).prev(".portfolio-item-block").css("margin-bottom", $(".details", current_portfolio_item).height() + 120);
					$(current_portfolio_item).next(".portfolio-item-block").css("margin-bottom", $(".details", current_portfolio_item).height() + 120);
				}
				if($(current_portfolio_item).attr("data-item") == 3)
				{
					$(current_portfolio_item).css("margin-bottom", $(".details", current_portfolio_item).height() + 120);
					$(current_portfolio_item).prev(".portfolio-item-block").css("margin-bottom", $(".details", current_portfolio_item).height() + 120);
					$(current_portfolio_item).prev(".portfolio-item-block").prev(".portfolio-item-block").css("margin-bottom", $(".details", current_portfolio_item).height() + 120);
				}
				
				$(".details", current_portfolio_item).fadeIn(50);
			}
		} 
		else 
		{
			if ($(this).is(".open")) {
				$(".portfolio-item-block").css("margin-bottom", 0).removeClass("open");
				$(".details").fadeOut();
			} else {
				
				$(".portfolio-item-block").css("margin-bottom", 0).removeClass("open");
				$(".details").fadeOut();
				$(".portfolio-list").addClass("static");
				$(current_portfolio_item).addClass("open");
				$(current_portfolio_item).css("margin-bottom", $(".details", current_portfolio_item).height() + 120);
				$(".details", current_portfolio_item).fadeIn();
			}	
		}
	});
		
	$(".btn-close").click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		$(".portfolio-item-block").css("margin-bottom", 0);
		$(".details").fadeOut();
		$(".portfolio-item-block").removeClass("open");
	});
	
	$(".details").click(function(e) {
		e.stopPropagation();
		return false;
});

//shrink top header
//==================================================================
//==================================================================
		var topHeader = (function() {
		var docElem = document.documentElement,
			header = document.querySelector( '.top-header' ),
			didScroll = false,
			changeHeaderOn = 480,
			visibleHeaderOn = 300;
		function init() {
			window.addEventListener( 'scroll', function( event ) {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 5 );
				}
			}, false );
		}
		function scrollPage() {
			var sy = scrollY();
			if ( sy >= visibleHeaderOn )
				$(".top-header").addClass('active-header');
			else 
				$(".top-header").removeClass('active-header');
			if ( sy >= changeHeaderOn ) {
				$(".top-header").addClass('top-header-shrink');
				$(".logo").addClass("logopos");
				$(".menuwrapper").addClass("menupos");
				$("select").addClass("dw-menu");
			}
			else {
				$(".top-header").removeClass('top-header-shrink');
				$(".logo").removeClass("logopos");
				$(".menuwrapper").removeClass("menupos");
				$("select").removeClass("dw-menu");
			}
			didScroll = false;
		}
		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}
		init();
	})();
	
//header text visibility
//===================================================================
//===================================================================

	$(window).scroll( function() {
		var value = $(this).scrollTop();
        if ( value > 150 ){
			$(".home-inner-wrap").addClass("read");
			$(".jms-arrows-prev").addClass("jms-arrows-prev-disable");
			$(".jms-arrows-next").addClass("jms-arrows-next-disable");
			}
		else{
			$(".home-inner-wrap").removeClass("read");
			$(".jms-arrows-prev").removeClass("jms-arrows-prev-disable");
			$(".jms-arrows-next").removeClass("jms-arrows-next-disable");
			}
	});
//Mobile menu
//=================================================================
//=================================================================
$(document).ready(function() {
            // Create the dropdown bases
            $("<select />").appendTo(".menu");
            // Create default option "Go to..."
            $("<option />", {
                "selected": "selected",
                "value": "",
                "text": "Go to..."
            }).appendTo(".menu select");
            // Populate dropdowns with the first menu items
            $(".menu li a").each(function() {
                var el = $(this);
                $("<option />", {
                    "value": el.attr("href"),
                    "text": el.text()
                }).appendTo(".menu select");
            });
            //make responsive dropdown menu actually work
            $(".menu select").change(function() {
                //window.location = $(this).find("option:selected").val();
				var el = $(this).find("option:selected").val();
				var elWrapped = $(el);	
				scrollToDiv(elWrapped,64);
				return false;
            });
});

	
//service grid
//====================================================================
//====================================================================

	$(".service-grid").hover(
		function () {
			$(this).children(".service-details").stop().fadeTo(400, .9);
		}, 
		function () {
			$(this).children(".service-details").stop().fadeTo(400, 0);
		}
	);
	
//Menu smooth scroll
//======================================================================
//======================================================================
	$('.w-icon-link').click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);	
		scrollToDiv(elWrapped,64);
		return false;
	});

	$('.menu li a').click(function(){
		$(".menu li a").removeClass('active');
		$(this).addClass('active');	
		var el = $(this).attr('href');
		var elWrapped = $(el);	
		scrollToDiv(elWrapped,64);
		return false;
	
	});
	
	function scrollToDiv(element,navheight){
	var offset = element.offset();
	var offsetTop = offset.top;
	var totalScroll = offsetTop-navheight;
		$('body,html').animate({
				scrollTop: totalScroll
		}, 1200);
	}

	
//active menu selector 
//==============================================================
//==============================================================
var lastId,
    topMenu = $("#header"),
    topMenuHeight = topMenu.outerHeight() + 66,
// All list items
    menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
		if (item.length) {
            return item;
        }
    });
$(window).resize(function () {
    topMenuHeight = topMenu.outerHeight() + 66;
});

$(window).scroll(function () {
    var fromTop = $(this).scrollTop() + topMenuHeight;
    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop){
            return this;
        }
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    if (lastId !== id) {
        lastId = id;
		topMenu.find("a").removeClass("active");
        menuItems
            .parent()
            .end().filter("[href=#" + id + "]").addClass("active");
    }
});	

//toggle team skill
//====================================================================
//====================================================================
$("#member1").click(function () {$header = $(".team1-skill").slideToggle(500);$header.addClass("team-skill-active");});
$("#member2").click(function () {$header = $(".team2-skill").slideToggle(500);$header.addClass("team-skill-active");});
$("#member3").click(function () {$header = $(".team3-skill").slideToggle(500);$header.addClass("team-skill-active");});
$("#member4").click(function () {$header = $(".team4-skill").slideToggle(500);$header.addClass("team-skill-active");});
$("#member5").click(function () {$header = $(".team5-skill").slideToggle(500);$header.addClass("team-skill-active");});

// BACK TO TOP 
//=====================================================================
//=====================================================================

	$(window).scroll(function(){
		if($(window).scrollTop() > 200)
			$("#back-to-top").fadeIn(200);
		 else
			$("#back-to-top").fadeOut(200);
	});
	$('#back-to-top, .back-to-top').click(function() {
		  $('html, body').animate({ scrollTop:0 }, '800');
		  return false;
	});
	
//twitter feed
//===================================================================
//===================================================================

	jQuery(function(){
		jQuery('#tweets').tweetable({
		username: 'WarriorsOnWheels', //twitter username 
		time: true, 
		rotate: true, 
		speed: 7000, 
		limit: 5, 
		replies: true,
		position: 'append',
		failed: "Sorry, twitter is currently unavailable for this user.",
		loading: "Loading tweets...",
		html5: true,
		onComplete:function($ul){
			$('time').timeago();
		}
		});
	});
});
//END DOCUMENT.READY FUNCTION

	
// BEGIN WINDOW.LOAD FUNCTION		
$(window).load(function() {

//preloader
//================================================================
//=================================================================

	$("#status").fadeOut();
	$("#preloader").delay(350).fadeOut("slow");

//initialize teem slider
//==================================================================
//==================================================================
    $("#teem-slider").flexisel({
        visibleItems: 3,
        enableResponsiveBreakpoints: true,
		clone : false,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:749,//resolution change point
                visibleItems: 1//visible item
            }, 
            landscape: { 
                changePoint:750,//resolution change point
                visibleItems: 3//visible item
            },
            tablet: { 
                changePoint:959,//resolution change point
                visibleItems: 3//visible item
            }
        }
    });
	
//initialize portfolio slider
//===================================================================
//===================================================================
    $("#portfolio-slider").flexisel({
        visibleItems: 2,
        enableResponsiveBreakpoints: true,
		clone : false,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:749,//resolution change point
                visibleItems: 1//visible item
            }, 
            landscape: { 
                changePoint:750,//resolution change point
                visibleItems: 2//visible item
            },
            tablet: { 
                changePoint:959,//resolution change point
                visibleItems: 2//visible item
            }
        }
    });
	

//initialize testimonial slider    
//=================================================================
//=================================================================

	$("#testimonial-slider").flexisel({
        visibleItems: 1,
        enableResponsiveBreakpoints: true,
		clone : true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,//resolution change point
                visibleItems: 1//visible item
            }, 
            landscape: { 
                changePoint:640,//resolution change point
                visibleItems: 1//visible item
            },
            tablet: { 
                changePoint:768,//resolution change point
                visibleItems: 1//visible item
            }
        }
    });
	
//initialize clients slider
//================================================================
//================================================================

	$("#clients-slider").flexisel({
		 visibleItems: 4,
        enableResponsiveBreakpoints: true,//responsive layout
		autoPlay : true,//auto play
		clone : true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,//resolution change point
                visibleItems: 1//visible item
            }, 
            landscape: { 
                changePoint:640,//resolution change point
                visibleItems: 3//visible item
            },
            tablet: { 
                changePoint:768,//resolution change point
                visibleItems: 3//visible item
            }
        }
    });
	
});

//common function for image hover and image count in cycle plugin  
//=================================================================
//=================================================================

jQuery(function() {
	// on mouse over
	jQuery(".content-area").hover(function () {
		jQuery(this).find(".imageCover").stop().animate({
			opacity: 0
		}, "slow");
		jQuery(this).find(".infoBlk").stop().animate({
			backgroundColor: "#333333"
		}, "slow");

	},
	// on mouse out
	function () {
		jQuery(this).find(".imageCover").stop().animate({
			opacity: 1
		}, "slow");
		jQuery(this).find(".infoBlk").stop().animate({
			backgroundColor: "#fff"
		}, "slow");
		jQuery(this).find(".infoCont").slideUp();
		jQuery(this).find(".infoBlk .infoLink").removeClass('current')
	});
		
	//slideToggle
	jQuery('.content-area .infoBlk').click(function() {
		jQuery(this).toggleClass('current');							
		jQuery(this).parents('.content-area').find(".infoCont").slideToggle();
	});
		
	//count total images
    jQuery('.content-area').each(function() {
		jQuery(this).find('.slideInfo .totalImg').html(jQuery(this).find('.workImgCont img').length);
  	});
	
	//on image click 
    jQuery('.imageCover').click(function() {
		var currentImgInSlides = jQuery(this).next('.workImgCont').find('img:visible').next().index()+1;
		if(currentImgInSlides==0)
		{
			jQuery(this).parents('.content-area').find('.slideInfo .currentImg').html(1)
		}
		else
		{
			jQuery(this).parents('.content-area').find('.slideInfo .currentImg').html(currentImgInSlides)
		}
	});

	//init jquery cycle plugin for future work slider
   jQuery('.workImgCont').each(function() {
	   jQuery(this).cycle({ 
			fx:'scrollHorz', 
			next:   jQuery(this).parents('.content-area').find('.imageCover'), 
			timeout: 0,
			speed:200,
		});
	});
	//init jquery cycle plugin for blog post slider
	jQuery('.blog-imagecycle').each(function() {
	   jQuery(this).cycle({ 
			fx:'scrollHorz', 
			next:   jQuery(this).parents('.thumb').find('.imageCover'), 
			timeout: 0,
			pager:'#nav-blog',
		});
	});
}); 
}( jQuery ));