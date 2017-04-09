import { TutorialServicePage } from './app.po';

describe('tutorial-service App', () => {
  let page: TutorialServicePage;

  beforeEach(() => {
    page = new TutorialServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
