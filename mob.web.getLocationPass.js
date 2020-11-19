mob.init();
mob.open("https://www.wikipedia.org/");
const loc = mob.getLocation("id=searchInput");
log.info(loc);

const locCorrect = !!loc && !!loc.x && !!loc.y;

assert.equal(locCorrect, true);