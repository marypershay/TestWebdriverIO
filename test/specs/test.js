
describe('Onliner', function() {
    it('searches for Onliner', function() {
        browser.url('https://www.onliner.by/');
		var title = browser.getTitle();
		expect(title).toBe('Onliner.by');
		browser.click('span.project-navigation__sign=Мобильные телефоны');

		browser.click('span.schema-filter__checkbox-text=Apple');
		//browser.waitForExist('=Apple iPhone 6s 16GB Silver');
		//browser.waitForVisible('=Apple iPhone 6s 16GB Silver');
		browser.waitForExist(500);
		browser.click('span=Apple iPhone 6s 16GB Silver');
		
       // browser.setValue('.fast-search__input', '6s 16gb Silver');
	   //expect(browser.getValue('.fast-search__input')).toBe('6s 16gb Silver');
		
		
		
		
    });
});
