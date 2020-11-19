mob.init();
mob.open("wikipedia.org");
mob.clickHidden("#js-lang-lists > div:nth-child(2) > ul > li:nth-child(3) > a");
const url = mob.getUrl();
assert.equal("https://en.m.wikipedia.org/wiki/Main_Page", url);