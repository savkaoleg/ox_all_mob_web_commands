mob.init();
mob.setTimeout(6000);
mob.open("https://www.wikipedia.org/");
const isVisible = mob.isVisible("id=search-input");
assert.equal(isVisible, true);