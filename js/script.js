$(document).ready(function(){
	$('.more').click(function(event) {
		$('.back').addClass('active')
		$('.front').removeClass('active')
	});
	$('.go-back').click(function(event) {
		$('.front').addClass('active')
		$('.back').removeClass('active')
	});
})