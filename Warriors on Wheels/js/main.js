(function($) {

	$(window).load(function() {
		// $('.hasCountdown').animate({
		// 	opacity: 1
		// }, 'slow')

		setTimeout(function(){
			$('.item-1').removeClass('positioned');
		}, 100);

		setTimeout(function(){
			$('.item-2').removeClass('positioned');
		}, 300);

		setTimeout(function(){
			$('.item-3').removeClass('positioned');
		}, 500);

		setTimeout(function(){
			$('.item-4').removeClass('positioned');
		}, 700);

		setTimeout(function(){
			$('.item-5').removeClass('positioned');
		}, 900);

		setTimeout(function(){
			$('.item-6').removeClass('positioned');
		}, 1100);

		setTimeout(function(){
			$('.item-7').removeClass('positioned');
		}, 1300);

		setTimeout(function(){
			$('.item-8').removeClass('positioned');
		}, 1500);

		setTimeout(function(){
			$('.item-9').removeClass('positioned');
		}, 1700);

		setTimeout(function(){
			$('.item-10').removeClass('positioned');
		}, 1900);

		setTimeout(function() {
			$('.hasCountdown').animate({
				opacity: 1
			}, 'slow');
		}, 2100);

		setTimeout(function() {
			$('.open-window').animate({
				opacity: 1,
				bottom: 40
			}, 'slow');
		}, 2500);
	});


	$(document).ready(function(){
	  $('.bxslider').bxSlider();
	});

	$('.tweets').tweetable({
		html5: true,
		time: true,
	    username: 'avathemes',
	    limit: 10,
	    rotate: true,
	    speed: 5500,
	    onComplete:function($ul){
	        $('time').timeago();
	    }
	});


	$('.open-window').on('click', function(event) {
		
		$('.drop-container').toggleClass('toggle-container');
		
	});



	$("a[rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'slow',
		show_title: false
	});


	$('.footer button').on('click', function(event) {
		event.preventDefault();
		$('body,html').animate({
				scrollTop: 0
			}, 800);
	});


	$('.item-5 a').on('click', function(event) {
		event.preventDefault();

		var aboutPos = $('#aboutSection').offset().top;

		$('body, html').animate({
			scrollTop: aboutPos
		}, 'slow');
	});



	$('#mainNav li a').on('click', function(e) {
	    e.preventDefault();
	    var aniLocation = $(this).attr('href');
	    $('body, html').animate({
	        scrollTop : $(aniLocation).offset().top
	    }, {
	        duration: 1000,
	        queue: false,
	        specialEasing: {
	            width: "linear",
	            height: "easeInOutExpo"
	        }
	    });
	});


	if ($(window).width() < 1190) {
		$('.element.linked a').text('');
	}



	$(window).load(function() {
		$('.loader').fadeOut('slow', function() {
			$(this).remove();
		});
	});


	$('.slide-holder a').click(function(event) {
		event.preventDefault();
	});

	$('.smallNavigation').on('click', function(event) {
		$('#mainNav').toggleClass('deactiveNav');
	});

	$('#mainNav li a').click(function(event) {
		$('#mainNav').removeClass('deactiveNav');
	});


})(jQuery);
