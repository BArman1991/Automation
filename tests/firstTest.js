var config = require('../config')
module.exports = {
    "Our first test":""+ function (browser) {
        browser.url("https://actionqa.com");
        browser.pause(3 * 1000);
        browser.end()
    },


    "Click test": function(Browser){
        const name = config.Shooter
        Browser.url("https://kinokrad.co");
        Browser.click("#storyID-341069 > div > div.postertitle > h2 > a")
        Browser.pause(2 * 1000)
        Browser.assert.visible("#fulltext")
        Browser.setValue("#story", name)
        Browser.click("#wrapp > div.search-block > form > input.imginput")
        Browser.assert.containsText("#dle-content > div:nth-child(12) > h3 > a","Стрелок (2007)")
        Browser.pause(5*1000)



        Browser.end();
    }
}