import { CentralstampWebPage } from './app.po';

describe('centralstamp-web App', function() {
  let page: CentralstampWebPage;

  beforeEach(() => {
    page = new CentralstampWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
