import { BlogCommentsPage } from './blog-comments.po';
import { browser, element, by, ExpectedConditions } from 'protractor';

describe('workspace-project App', () => {
  let page: BlogCommentsPage;

  beforeEach(() => {
    page = new BlogCommentsPage();
    page.navigateToBlog();


  });

  it('should display blogs', ()=>{

  expect( page.getBlogName()).toContain('Headings that are large are cool')
  });
  it('should display grid of blogs', ()=>{

    expect( page.getBlogGrid()).toContain('Headings that are large are cool')
    });
  it('should display list of blogs', ()=>{
    expect( page.getBlogListed()).toContain('Headings that are large are cool')
    });
  it('should go to comments page', ()=>{
    let btn = page.getBigBlog()
    btn.click()
    page.expectUrlContains('/blog/1');
    });
    it('should add a comment', ()=>{
      let btn = page.getBigBlog()
      btn.click()
      let comment = 'Test comment'
      page.getNameInput().sendKeys('E2E')
      page.getEmailInput().sendKeys('e2e@gmail.com')
      page.getCheckBox().click()
      page.getCommentInput().sendKeys(comment)
      page.getAddCommentButton().click()
      browser.sleep(2000)
      expect(page.getNewCommentText()).toContain(comment)
      });
  it('should reply to a comment', ()=>{
    let btn = page.getBigBlog()
    btn.click()
    page.getCommentReplyBtn().click()
    let comment = 'Test reply'
    page.getNameInput().sendKeys('E2E')
    page.getEmailInput().sendKeys('e2e@gmail.com')
    page.getCheckBox().click()
    page.getCommentInput().sendKeys(comment)
    page.getAddCommentButton().click()
    browser.sleep(2000)
    expect(page.getNewReplyText()).toContain(comment)
    });

})
