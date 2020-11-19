mob.init();
mob.open("https://www.wikipedia.org");
mob.type("id=searchInput", "wiki");
mob.sendKeys("Enter");

const url = mob.getUrl();
assert.notEqual("https://www.wikipedia.org/", url);