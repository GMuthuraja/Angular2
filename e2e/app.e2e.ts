import { Myangular010Page } from './app.po';

describe('myangular010 App', function() {
  let page: Myangular010Page;

  beforeEach(() => {
    page = new Myangular010Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('myangular010 works!');
  });
});
