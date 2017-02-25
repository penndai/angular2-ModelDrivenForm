import { ModelFormappPage } from './app.po';

describe('model-formapp App', function() {
  let page: ModelFormappPage;

  beforeEach(() => {
    page = new ModelFormappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
