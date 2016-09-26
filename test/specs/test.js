
describe('Apple iPhone 6s 16GB Silver', function() {

	beforeAll(function () {
		browser.url('https://www.onliner.by/');
	});


	it('search on Onliner.by', function() {
		// var title = browser.getTitle();
		// expect(title).toBe('Onliner.by');
		var mobilePhones =browser.element('span.project-navigation__sign=Мобильные телефоны');
		mobilePhones.waitForExist(5000);
		browser.click('span.project-navigation__sign=Мобильные телефоны');
		browser.waitForVisible('span.schema-filter__checkbox-text=Apple');
		browser.click('span.schema-filter__checkbox-text=Apple');
		browser.waitForVisible('span=Apple iPhone 6s 16GB Silver');
		browser.click('div.schema-product__title=Apple iPhone 6s 16GB Silver');
	});

	it('Количество точек матрицы', function() {
	//	var prosessor = browser.getText('span.value__text=12 Мп');
	//	expect(prosessor).toBe('12 Мп');

		
	});

	it('Процессор', function() {

	});

	it('Сканер отпечатка пальца ', function() {

	});

	it('Длина', function() {

	});

	it('FM-приёмник', function() {

	});
});



// describe('Onliner', function() {




// 	beforeAll(function (done) {
// 		browser
// 		.url('https://www.onliner.by/');
// 			it('searches for Onliner', function() {
// //		browser.url('https://www.onliner.by/');
// var title = browser.getTitle();
// expect(title).toBe('Onliner.by');
// var mobilePhones =browser.element('span.project-navigation__sign=Мобильные телефоны');
// mobilePhones.waitForExist(5000);
// browser.click('span.project-navigation__sign=Мобильные телефоны');

// var logout = browser.element('span.schema-filter__checkbox-text=Apple');
// logout.waitForExist(5000);
// browser.click('span.schema-filter__checkbox-text=Apple');

// var phone = browser.element('span=Apple iPhone 6s 16GB Silver');
// phone.waitForExist(10000);
// browser.click('div.schema-product__title=Apple iPhone 6s 16GB Silver');

// });
// 	});
// });
