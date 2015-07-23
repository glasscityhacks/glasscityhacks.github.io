$(function() {
	$('header').scrollspy({
		min: 5,
		max: Number.POSITIVE_INFINITY,
		onEnter: function() {
			$(".main-header").addClass('fixed');
		},
		onLeave: function() {
			$(".main-header").removeClass('fixed');
		}
	});
	$('a[href^="#"]').click(function() {
		$.scrollTo($(this).attr('href'), 800, {offset:-80});
	});
});
