mob.init();
mob.open("https://www.wikipedia.org");
const capabilities = mob.getCapabilities();
const capsValid = !!capabilities && !!capabilities.platformName && !!capabilities.browserName;
assert.equal(capsValid, true, 'Caps not valid');