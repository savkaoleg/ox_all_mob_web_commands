mob.init();
mob.open("https://www.wikipedia.org/");
const logs = mob.getDeviceLogs();

const logsCorrect = logs && Array.isArray(logs) && logs.length > 0;
assert.equal(logsCorrect, true);