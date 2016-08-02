// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//   	autoplay: false
//   });
// });

$(function() {	  
 	$("#owl-demo").owlCarousel({		
		navigation : true,
		items: 1,
		loop: true,
		// dots: false,
		// slideSpeed : 300,
		// paginationSpeed : 400,
		// autoPlay : false,
		// singleItem: true,
		video: true,
		center: true	
 	});

 $("#owl-demo2").owlCarousel({
	items : 4,
	lazyLoad : true,
	autoPlay : false,
	navigation : true,
	pagination : false
 });

});