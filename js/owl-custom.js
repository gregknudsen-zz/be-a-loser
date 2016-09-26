
var Carousel = (function(){

	function init() {	  
	 	$("#owl-demo").owlCarousel({		
			// nav: true,
			items: 1,
			loop: true,
			video: true,
	 	});

	};

	return {
		init: init
	}

})();

$(document).ready(Carousel.init);