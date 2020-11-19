mob.init();
mob.open("wikipedia.org");
const text = mob.getText('#js-link-box-en > strong');
log.info(text);
const textCorrect = text && typeof text === 'string' && text.length > 0;
assert.equal(textCorrect, true);