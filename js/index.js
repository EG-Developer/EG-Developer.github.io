"use strict";

 $(window).load(function () {
	//------------------------------------------------------------------------
	//						PRELOADER SCRIPT
	//------------------------------------------------------------------------
	$("#preloader").delay(400).fadeOut("slow", function() {
		AOS.init({
			easing: 'ease-in-out-sine'
		});
});
	$("#preloader .clock").fadeOut();
});

document.addEventListener('DOMContentLoaded', function() {





$('.carousel-single-dots').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: false,
    rewind: true,
    items: 1
});


});
