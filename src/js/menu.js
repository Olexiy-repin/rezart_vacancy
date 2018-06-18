(() => {
	let menu = $('.vacancy-menu');
	let browserWidth = document.documentElement.clientWidth;

	if (browserWidth >= 1200) {
		menu.show();
	} else {
		menu.hide();
		$('.vacancy-title').on('click', () => {
			menu.slideToggle(600);
			// $('.vacancy__sale-container').hide(600);
		});
	}
})();

// (() => {
// 	let menu = $('.vacancy-menu');
// 	let sale = $('.vacancy__sale').text();
// 	let vacancyTitle = $('.vacancy-title');
// 	$('.vacancy__sale-container').hide();
//
// 	$('.vacancy__sale').on('click', () => {
// 		menu.hide(600);
// 		vacancyTitle[0].innerHTML = sale;
// 		$('.vacancy__sale-container').show(600);
// 	});
//
// 	$('.vacancy__all-vacancy').on('click', () => {
// 		menu.hide(600);
// 		vacancyTitle[0].innerHTML = 'все вакансии';
// 		$('.vacancy__sale-container').show(600);
// 	});
// })();
