mob.init();
mob.setTimeout(6000);
mob.open("https://www.wikipedia.org");
mob.execute(function(){alert('p');});