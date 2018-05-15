import { NgxAdminPage } from './app.po';

describe('ngx-admin App', function() {
  let page: NgxAdminPage;

  beforeEach(() => {
    page = new NgxAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
