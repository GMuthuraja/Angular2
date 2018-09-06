export class Myangular010Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('myangular010-app h1')).getText();
  }
}
