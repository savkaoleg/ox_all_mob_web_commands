mob.init();
mob.open("https://www.wikipedia.org/");
mob.pause(5000);
mob.scrollIntoView('#www-wikipedia-org > p', true);
mob.pause(5000);
const isVisible = mob.isVisible('#www-wikipedia-org > p');
assert.equal(isVisible, true);