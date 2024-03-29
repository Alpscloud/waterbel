document.addEventListener('DOMContentLoaded', function() {

	var fileInputs = document.querySelectorAll( '.input-file' );


	Array.prototype.forEach.call( fileInputs, function( input ) {
		var label    = input.nextElementSibling,
		labelVal = label.innerHTML;

		input.addEventListener('change', function(e) {
			var fileName = '',
			nextElem = label.nextElementSibling;

			if(nextElem.classList.contains('is-active')) {
				nextElem.classList.remove('is-active');
			}

			if( this.files && this.files.length > 1 ) {
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			}
			else {
				fileName = e.target.value.split( '\\' ).pop();
			}

			if( fileName ) {	
				nextElem.innerHTML = fileName;
				nextElem.classList.add('is-active');
			} else {

				label.innerHTML = labelVal;
			}
		});
	});

});
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

	// ========= Smooth scrolling to the acnhors ===========
	$('.js-smooth-scroll-link').on('click', function (e) {
		e.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;

		$('html, body').animate({scrollTop: top}, 'slow');
	});	
	// ========= =========== =========== ===========



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

		if ($('.js-open-mobile-menu-btn').hasClass('is-active')) {
			$('.js-open-mobile-menu-btn').removeClass('is-active');
			$('.js-nav').removeClass('is-opened');
		}

		$('.js-popup-form').fadeIn(300);
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


	$('.js-add-to-cart-btn').on('click',function(e) {
		e.preventDefault();


		$('.js-popup-add-to-cart').fadeIn(300);
		$('html').addClass('is-fixed');


		
	});
	// ========= =========== =========== ===========

	// Mobile menu
	$('.js-open-mobile-menu-btn').on('click', function(e) {
		e.preventDefault();

		if($('.js-toggle-mobile-search-btn').hasClass('is-active')) {
			$('.js-toggle-mobile-search-btn').removeClass('is-active');
			$('.js-search').stop().slideUp(100);
		}

		if($('.js-toggle-phones-block-btn').hasClass('is-active')) {
			$('.js-toggle-phones-block-btn').removeClass('is-active');
			$('.header .phones-home').removeClass('is-opened');
		}

		if($('.js-toggle-mobile-phones-btn').hasClass('is-active')) {
			$('.js-toggle-mobile-phones-btn').removeClass('is-active');
			$('.js-header-phones').stop().slideUp(100);
			
		}


		$(this).addClass('is-active');
		$('html').addClass('is-fixed');
		$('.js-nav').addClass('is-opened');
	});

	$('.js-close-mobile-menu-btn').on('click', function(e) {
		e.preventDefault();

		$('html').removeClass('is-fixed');
		$('.js-nav').removeClass('is-opened');
		$('.js-open-mobile-menu-btn').removeClass('is-active');
	});

	// Mobile search
	$('.js-toggle-mobile-search-btn').on('click', function(e) {
		e.preventDefault();

		if($('.js-toggle-phones-block-btn').hasClass('is-active')) {
			$('.js-toggle-phones-block-btn').removeClass('is-active');
			$('.header .phones-home').removeClass('is-opened');
		}

		if($('.js-toggle-mobile-phones-btn').hasClass('is-active')) {
			$('.js-toggle-mobile-phones-btn').removeClass('is-active');
			$('.js-header-phones').stop().slideUp(100);
			
		}

		$(this).toggleClass('is-active');
		$('.js-search').stop().slideToggle(100);
	});

	// Tablet phones
	$('.js-toggle-phones-block-btn').on('click', function(e) {
		e.preventDefault();

		if($('.js-toggle-mobile-search-btn').hasClass('is-active')) {
			$('.js-toggle-mobile-search-btn').removeClass('is-active');
			$('.js-search').stop().slideUp(100);
		}

		$(this).toggleClass('is-active');
		$('.header .phones-home').toggleClass('is-opened');
	});

	// Mobile phones
	$('.js-toggle-mobile-phones-btn').on('click', function(e) {
		e.preventDefault();

		if($('.js-toggle-mobile-search-btn').hasClass('is-active')) {
			$('.js-toggle-mobile-search-btn').removeClass('is-active');
			$('.js-search').stop().slideUp(100);
		}

		$(this).toggleClass('is-active');
		$('.js-header-phones').stop().slideToggle(100);
	});

	// Toggled menu sublist
	$('.js-toggled-sublist-btn').on('click', function(e) {
		e.preventDefault();
		var li = $(this).parent('li.has-sublist');
		li.toggleClass('is-toggled');
		li.find('.sublist').stop().slideToggle(200);
	});

	// Mobile filter
	$('.js-open-mobile-filter-btn').on('click', function(e) {
		e.preventDefault();
		$('html').addClass('is-fixed');
		$('.js-aside').addClass('is-opened');
	});
	$('.js-close-mobile-aside-btn').on('click', function(e) {
		e.preventDefault();
		$('html').removeClass('is-fixed');
		$('.js-aside').removeClass('is-opened');
	});

	// Product tabs
	$('.js-tab-content').not(":first").hide();
	$('.js-tab-btn:first').addClass('is-active');

	$('.js-tab-btn').on('click', function(e) {
		e.preventDefault();
		$('.js-tab-content').removeClass('is-active');
		$('.js-tab-btn').removeClass('is-active').eq($(this).index()).addClass('is-active');
		$('.js-tab-content').hide().eq($(this).index()).fadeIn().addClass('is-active');
	}).eq(0).addClass('is-active');

	

	var promoSlider = new Swiper('.js-promo-slider', {
		speed: 700,
		pagination: {
			el: '.js-promo-slider-pagination',
			clickable: true
		},
		touchRatio: 1,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,

		},
		breakpoints: {
			769: {
				touchRatio: 0
			}
		}
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

	var productSliderThumbnails = new Swiper('.js-product-slider-thumbnails', {
		direction: 'horizontal',
		spaceBetween: 20,
		slidesPerView: 4,
		touchRatio: 0,
		breakpoints: {
			1100: {
				direction: 'vertical'
			}
		}
	});

	var productSliderMain = new Swiper('.js-product-slider-main', {
		spaceBetween: 0,
		slidesPerView: 1,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},

		navigation: {
		  nextEl: '.js-product-slider-btn-next',
		  prevEl: '.js-product-slider-btn-prev',
		  disabledClass: 'is-disabled'
		},
		thumbs: {
		  swiper: productSliderThumbnails
		},
		on: {
			init: function() {
				$('.product-slider').find('.slider__loader').hide(200);
			}
		},
	});

	var productsCardsSlider = new Swiper('.js-products-cards-slider', {
		spaceBetween: 10,
		slidesPerView: 1,
		autoplay: {
			delay: 7500,
			disableOnInteraction: false
		},

		navigation: {
		  nextEl: '.js-products-cards-slider-btn-next',
		  prevEl: '.js-products-cards-slider-btn-prev',
		  disabledClass: 'is-disabled'
		},

		breakpoints: {
			1300: {
				spaceBetween: 20,
				slidesPerView: 5,
			},
			1000: {
				spaceBetween: 20,
				slidesPerView: 3,
			},
			700: {
				spaceBetween: 10,
				slidesPerView: 3,
			},
			450: {
				spaceBetween: 10,
				slidesPerView: 2,
			}
		}
	});

	$('[data-fancybox]').fancybox({
		loop: true,
		buttons: ['close']
	});

	// Sorting
	$('.js-sorting-dropdown').on('click', function(e) {
		e.preventDefault();

		var target = $(e.target);

		if(target.is('li')) {
			var sortingValue = target.attr('data-sorting-value');
			var sortingValueText = target.text();

			if(target.hasClass('is-active')) {
				$('.js-sorting-dropdown li').removeClass('is-active');
				target.removeClass('is-active');
			} else {
				$('.js-sorting-dropdown li').removeClass('is-active');
				target.addClass('is-active');
			}

			$('.js-sorting-input').val(sortingValue);
			$('.js-sorting-text span').html(sortingValueText);
			

		} else {
			return;
		}

		
	});

	$('.js-filter-toggle-block').on('click', function(e) {
		e.preventDefault();

		var filterBlock = $(this).parents('.filter__block');

		if(filterBlock.hasClass('is-toggled')) {
			filterBlock.removeClass('is-toggled');
			$(this).next('.js-filter-inputs').stop().slideUp(150);
		} else {
			filterBlock.addClass('is-toggled');
			$(this).next('.js-filter-inputs').stop().slideDown(150);
		}

	});



	// ========= Ajax form ===========
	$('.js-input').on('focus',function() {
		if($(this).hasClass('is-error')) {
			$(this).removeClass('is-error');
		}
	});

	$('.js-toggle-checkout-details-btn').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('is-active');
		$('.js-checkout-details').stop().slideToggle(150);
	});

	var nonLinearSlider = document.getElementById('price');

	if (nonLinearSlider) {

		noUiSlider.create(nonLinearSlider, {
			connect: true,
			behaviour: 'tap',
			start: [0, 1000000],
			range: {
				'min': [0],
				'max': [1000000]
			}
		});

		var nodes = [
			document.getElementById('priceLow'), // 0
			document.getElementById('priceHigh')  // 1
		];

		var priceInput = $('.js-price-input');

		nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
			nodes[handle].innerHTML = values[handle];
			priceInput.val(values[handle]);
		});
	}

	// quantity
	$('.product__quantity').on('click', function(event) {
		var input = $(this).find('.js-quantity-input'),
			value = input.val(),
			target = $(event.target);
		
		if(target.attr('data-action') === 'plus') {
			value++;
			
			input.val(value);
		

		} else if(target.attr('data-action') === 'minus') {	
			if(input.val() <= 1) {return};
			value--;	
			
			input.val(value);
			
		}

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
		if($('#map').length > 0) {
			var map = new google.maps.Map(document.getElementById('map'), map_options),
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(latitude, longitude),
					map: map,
					visible: true,
					icon: marker_url
				});
		}
	// ========= =========== =========== ===========

	$('input[type=tel]').mask('+7 (999) 999-99-99');


});

$(window).on('load', function() {
	setTimeout(function() {
		$('body').addClass('is-loaded');
	}, 500);
	
});
