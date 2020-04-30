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

	// ========== Scroll-to-top button ==========
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 350) {
			$('.js-go-to-top-btn').fadeIn(100);
		} else {
			$('.js-go-to-top-btn').fadeOut(100);
		}
		
	});

	$('.js-go-to-top-btn').on('click', function (e) { 
		e.preventDefault();
		$('body, html').animate({
			scrollTop: 0
		}, 1000);
	});
	// ========= =========== =========== ===========

	// Popup
	$('.js-open-popup-form-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup').fadeIn(300);
		$('html').addClass('is-fixed');
	});


	$('.js-close-popup-btn').on('click',function(e) {
		e.preventDefault();
		$(this).parents('.js-popup').fadeOut(300);
		$('html').removeClass('is-fixed');
	});

	$('.popup__overflow').on('click', function(e) {
		e.stopPropagation();

		var content = $(this).find('.popup__body');

		if(!content.is(e.target) && content.has(e.target).length === 0) {
			$('html').removeClass('is-fixed');
			$('.js-popup').fadeOut(300);
		}

	});
	// ========= =========== =========== ===========

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

	// ========= G o o g l e   m a p   s t y l e s ===========
	var latitude = $('.js-latitude').html(), // coordinates 
		longitude = $('.js-longitude').html(), // coordinates 
		map_zoom = 18, 
		marker_url = 'img/icons/svg/map.svg'; // map marker 
	// Styles
	var style =  [
		{
		"featureType": "landscape",
		"elementType": "all",
		"stylers": [
		    {
		        "visibility": "on"
		    }
		]
		},
		{
		"featureType": "poi.business",
		"elementType": "all",
		"stylers": [
		    {
		        "visibility": "simplified"
		    }
		]
		},
		{
		"featureType": "poi.business",
		"elementType": "labels",
		"stylers": [
		    {
		        "visibility": "simplified"
		    }
		]
		},
		{
		"featureType": "poi.park",
		"elementType": "all",
		"stylers": [
		    {
		        "visibility": "off"
		    }
		]
		},
		{
		"featureType": "poi.school",
		"elementType": "all",
		"stylers": [
		    {
		        "visibility": "on"
		    }
		]
		},
		{
		"featureType": "poi.sports_complex",
		"elementType": "all",
		"stylers": [
		    {
		        "visibility": "off"
		    }
		]
		},
		{
		"featureType": "transit.station.bus",
		"elementType": "all",
		"stylers": [
		    {
		        "visibility": "on"
		    },
		    {
		        "saturation": "21"
		    },
		    {
		        "weight": "4.05"
		    }
		]
		}
		];
		// Create the point
		var map_options = {
			center: new google.maps.LatLng(latitude, longitude),
			zoom: map_zoom,
			panControl: false,
			zoomControl: true,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles: style
		};
		// Init map
		var map = new google.maps.Map(document.getElementById('map'), map_options),
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(latitude, longitude),
				map: map,
				visible: true,
				icon: marker_url
			});
	// ========= =========== =========== ===========

	$('input[type=tel]').mask('+7 (999) 999-99-99');


});

$(window).on('load', function() {
	$('body').addClass('is-loaded');
});
