
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
		var filterApple = browser.element('span.schema-filter__checkbox-text=Apple');
		filterApple.waitForExist(5000);
		browser.click('span.schema-filter__checkbox-text=Apple');
		var phone = browser.getText('span=Apple iPhone 6s 16GB Silver');
		browser.waitForVisible(phone);
		//phone.waitForExist(5000);
		browser.click('div.schema-product__title=Apple iPhone 6s 16GB Silver');

	});

	it('Количество точек матрицы', function() {
		var prosessor = browser.getText('span.value__text=12 Мп');
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
