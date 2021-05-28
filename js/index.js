$(document).ready(function () {
	blink();
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
});

function blink() {
	$('.ter').delay(600).fadeTo(200, 0.5).delay(600).fadeTo(300, 1, blink);
}
