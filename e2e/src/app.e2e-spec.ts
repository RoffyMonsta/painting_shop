import { AppPage } from './app.po';
import { browser, element, by, ExpectedConditions } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();


  });

  it('should navigate to blog page',() => {
    browser.get('/blog')
    page.expectUrlContains('/blog');
  });

  it('should navigate to careers page',() => {
    browser.get('/careers')
    page.expectUrlContains('/careers');
  });

  it('should navigate to about us page',() => {
    browser.get('/about')
    page.expectUrlContains('/about');
  });

  it('should open a list of paintings',()=>{
    page.getListNavButton().click()
    expect(page.expectUrlContains('/list/1'))
  });
})
