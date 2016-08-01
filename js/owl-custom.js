// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//   	autoplay: false
//   });
// });

$().ready(function($) {	  
 $("#owl-demo").owlCarousel({		
	navigation : true,
	slideSpeed : 300,
	paginationSpeed : 400,
	autoPlay : false,
	singleItem:true
 });

 $("#owl-demo2").owlCarousel({
	items : 4,
	lazyLoad : true,
	autoPlay : false,
	navigation : true,
	pagination : false
 });
});