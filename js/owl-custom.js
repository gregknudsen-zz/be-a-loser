// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//   	autoplay: false
//   });
// });

$(function() {	  
 	$("#owl-demo").owlCarousel({		
		 navigation : true,
		// items: 1,
		// slideSpeed : 300,
		// paginationSpeed : 400,
		// autoPlay : false,
		// singleItem: true,
		video: true,
		responsive:{
      480:{
        items:2
      },
      600:{
        items:4
      }
    }
 	});

 $("#owl-demo2").owlCarousel({
	items : 4,
	lazyLoad : true,
	autoPlay : false,
	navigation : true,
	pagination : false
 });
});