import { CentralStampClientPage } from './app.po';

describe('central-stamp-client App', () => {
  let page: CentralStampClientPage;

  beforeEach(() => {
    page = new CentralStampClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
