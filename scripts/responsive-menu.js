jQuery(function( $ ){

	$(".nav-primary .genesis-nav-menu").addClass("responsive-menu").before('<div id="responsive-menu-icon"></div>');
	
	$("#responsive-menu-icon").click(function(){
		$(".nav-primary .genesis-nav-menu").slideToggle();
	});
	
	$(window).resize(function(){
		if(window.innerWidth > 600) {
			$(".nav-primary .genesis-nav-menu").removeAttr("style");
		}
	});

	$('#burger-menu').click(function(){
		$('.nav-primary').slideToggle();
	});
	
});