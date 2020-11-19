mob.init();
mob.open("https://www.wikipedia.org/");
const element = mob.findElement("#js-link-box-en");
element.click();

let url = mob.getUrl();
assert.equal("https://en.m.wikipedia.org/wiki/Main_Page", url);

mob.back();

url = mob.getUrl();
assert.equal("https://www.wikipedia.org/", url);