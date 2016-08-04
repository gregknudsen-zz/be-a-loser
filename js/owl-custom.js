// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//   	autoplay: false
//   });
// });

$(function() {	  
 	$("#owl-demo").owlCarousel({		
		// nav: true,
		items: 1,
		loop: true,
		dots: true,
		// slideSpeed : 300,
		// paginationSpeed : 400,
		// autoPlay : true,
		// singleItem: true,
		video: true,
		//center: true,
		responsive:{
            480:{
                items:2
            }
        }	
 	});

});