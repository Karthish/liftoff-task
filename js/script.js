$(document).ready(function() {
	$('.btn-default').click(function() {
		$('.extra-content').slideToggle();
	});

	$('.button').click(function(e) {
		$('.button').removeClass('selected-btn');
		$(this).addClass('selected-btn');
	});

	$('.strength').click(function() {
		$('.tab2-content-con').hide();
		$('.tab3-content-con').hide();
		$('.tab-content1').show();
	});

	$('.responses').click(function() {
		$('.tab-content1').hide();
		$('.tab3-content-con').hide();
		$('.tab2-content-con').show();
	});

	$('.share').click(function() {
		$('.tab-content1').hide();
		$('.tab2-content-con').hide();
		$('.tab3-content-con').show();
	});
});
