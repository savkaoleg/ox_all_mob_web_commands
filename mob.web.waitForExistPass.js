mob.init();
mob.setTimeout(6000);
mob.open('wikipedia.org');
mob.waitForExist('#www-wikipedia-org > div.central-textlogo > h1 > strong')