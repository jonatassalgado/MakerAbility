function cycleBackgrounds() {
	var index = 0;

	$imageEls = $('.toggleImages');

	setInterval(function () {
		index = index + 1 < $imageEls.length ? index + 1 : 0;
		$imageEls.eq(index).addClass('show');
		$imageEls.eq(index - 1).removeClass('show');
	}, 12000);
};


// Document Ready.
$(function () {
	cycleBackgrounds();
});
