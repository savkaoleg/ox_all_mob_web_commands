mob.init();
mob.open("https://www.wikipedia.org");
mob.click("id=searchInput");
mob.type("id=searchInput", "wiki");
mob.pause(5000);
mob.hideKeyboard("pressKey", "Search");
mob.pause(5000);