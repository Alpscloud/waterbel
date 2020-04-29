$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});

	var promoSlider = new Swiper('.js-promo-slider', {
		speed: 700,
		pagination: {
			el: '.js-promo-slider-pagination',
			clickable: true
		},
		touchRatio: 0,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,

		},
	});

	var feedbacksSlider = new Swiper('.js-feedbacks-slider', {
		speed: 700,
		pagination: {
			el: '.js-feedbacks-slider-pagination',
			clickable: true
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,

		},
	});

	$('[data-fancybox="gallery"]').fancybox({
		loop: true,
		buttons: ['close']
	});


});
