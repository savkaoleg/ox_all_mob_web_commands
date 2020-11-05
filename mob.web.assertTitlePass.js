mob.init();
mob.setTimeout(6000);
mob.open("wikipedia.org");
const title = mob.getTitle();
mob.assertTitle(title);