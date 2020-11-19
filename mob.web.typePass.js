mob.init();
mob.open("https://www.wikipedia.org");
mob.click("id=searchInput");
mob.type("id=searchInput", "wiki");
const value = mob.getValue("id=searchInput");
const equal = value === 'wiki';
assert.equal(equal, true);