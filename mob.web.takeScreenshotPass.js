mob.init();
mob.open("https://www.wikipedia.org");
var ss = mob.takeScreenshot();  //Take a screenshot of the current page or screen and return it as base64 encoded string.
const ssCorrect = ss && typeof ss === 'string' && ss.length > 0;
assert.equal(ssCorrect, true);