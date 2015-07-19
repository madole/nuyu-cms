$(function() {
	var $window, $sticky, top, paddingTop, mediumWindowWidth;
	mediumWindowWidth = 992;
	$window = $(window);
	$sticky = $('.about__meet-the-team');
	top = $('.about__right-column').offset().top;
	width = $sticky.width();
	
	$window.scroll(function() {
		if($window.width() >= mediumWindowWidth) {
			//Recalculate width if scrolling and sticky hasn't been applied yet
			//to account for ipad portrait-landscape rotation
			if(!$sticky.hasClass('sticky')) {
				width = $sticky.width();
				top = $('.about__right-column').offset().top;
			}
			$sticky.toggleClass('sticky', ($window.scrollTop() > top));
			$sticky.css('width', width);
		}
	});
	
});
