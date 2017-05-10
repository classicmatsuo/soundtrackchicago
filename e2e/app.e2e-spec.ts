import { SoundtrackAppPage } from './app.po';

describe('soundtrack-app App', () => {
  let page: SoundtrackAppPage;

  beforeEach(() => {
    page = new SoundtrackAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
