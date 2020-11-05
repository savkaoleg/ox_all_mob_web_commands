mob.init();
mob.setTimeout(6000);
mob.open("https://www.wikipedia.org/");
const logs = mob.getAppiumLogs();
const logsCorrect = logs && Array.isArray(logs);
assert.equal(logsCorrect, true);