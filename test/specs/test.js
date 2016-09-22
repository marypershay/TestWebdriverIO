
describe('Onliner', function() {
    it('searches for Onliner', function() {
        browser.url('https://www.onliner.by/');
		var title = browser.getTitle();
		expect(title).toBe('Onliner.by');
		browser.click('=Мобильные телефоны');

		browser.click('span.schema-filter__checkbox-text=Apple');
		//browser.waitForExist('=Apple iPhone 6s 16GB Silver');
		browser.waitForVisible('=Apple iPhone 6s 16GB Silver');
		
       // browser.setValue('.fast-search__input', '6s 16gb Silver');
	   //expect(browser.getValue('.fast-search__input')).toBe('6s 16gb Silver');
		
		
		
		
    });
});
