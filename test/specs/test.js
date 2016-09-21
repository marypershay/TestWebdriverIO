
describe('Onliner search', function() {
    it('searches for Onliner', function() {
        browser.url('https://www.onliner.by/');
		var title = browser.getTitle();
		expect(title).toBe('Onliner.by');
        browser.setValue('.fast-search__input', '6s 16gb Silver');
		expect(browser.getValue('.fast-search__input')).toBe('6s 16gb Silver');
		
	//browser.getText('a=Apple iPhone 6s 16GB Silver').then(function() {
   // browser.click('a=Apple iPhone 6s 16GB Silver');
//});
        //browser.click('.fast-search__submit');
		//browser.click('a=Apple iPhone 6s 16GB Silver');
		//browser.driver.switchTo().frame('modal-iframe');
		//browser.click('a=Apple iPhone 6s 16GB Silver');
        
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
		
		
		
    });
});
