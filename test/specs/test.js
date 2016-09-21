var assert = require('assert');

describe('Onliner search', function() {
    it('searches for WebdriverIO', function() {
        browser.url('https://www.onliner.by/');
        browser.setValue('.fast-search__input', '6s 16gb Silver');
	//browser.getText('a=Apple iPhone 6s 16GB Silver').then(function() {
   // browser.click('a=Apple iPhone 6s 16GB Silver');
//});
        //browser.click('.fast-search__submit');
		//browser.click('a=Apple iPhone 6s 16GB Silver');
		browser.driver.switchTo().frame('modal-iframe');
		browser.click('a=Apple iPhone 6s 16GB Silver');
        var title = browser.getTitle();
        console.log('Title is: ' + title);
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    });
});