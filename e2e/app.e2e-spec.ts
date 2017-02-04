import { Esummit17Page } from './app.po';

describe('esummit17 App', function() {
  let page: Esummit17Page;

  beforeEach(() => {
    page = new Esummit17Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
