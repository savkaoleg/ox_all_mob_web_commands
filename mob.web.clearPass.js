mob.init();
mob.open("https://www.wikipedia.org/");
mob.type("id=searchInput", "wiki");
mob.clear("id=searchInput");
const value = mob.getValue("id=searchInput");
const equal = value === '';
assert.equal(equal, true);