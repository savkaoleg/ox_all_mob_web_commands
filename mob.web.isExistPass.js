mob.init();
mob.open("https://www.wikipedia.org/");
const isExist = mob.isExist("id=searchLanguage");
assert.equal(isExist, true);