mob.init();
mob.open("wikipedia.org");
const element = mob.findElement('#js-link-box-en > strong');
const selectedText = mob.getText(element);

if(selectedText){
    mob.assertText('#js-link-box-en > strong', selectedText);
} else {
    assert.equal(1,2, 'Script broken');
}