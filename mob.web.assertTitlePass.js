mob.init();
mob.open("wikipedia.org");
const title = mob.getTitle();
mob.assertTitle(title);