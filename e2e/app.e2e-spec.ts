import { HackcheckPage } from './app.po';

describe('hackcheck App', () => {
  let page: HackcheckPage;

  beforeEach(() => {
    page = new HackcheckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
