import { PaintingPage } from './painting.po';
import { browser, element, by, ExpectedConditions } from 'protractor';

describe('workspace-project App', () => {
  let page: PaintingPage;

  beforeEach(() => {
    page = new PaintingPage();
    page.navigateTo();
    page.getBuyButton().click()
    browser.sleep(2000);

  });

  it('should go to painting page and show title', ()=>{

  expect( page.getPaintingTitle()).toContain('Mona Lisa')
  });

  it('should add 4 paintings to the basket', ()=>{
    page.getPaintingInput().clear()
    page.getPaintingInput().sendKeys('4')
    page.getPaintingAddToBasketButton().click()
    page.getBasketIcon().click()
    expect(page.getAmountOfPaintings().getText()).toContain('4 pcs')
  });

  it('should display error on adding more than 10 paintings', ()=>{

    page.getPaintingInput().clear()
    page.getPaintingInput().sendKeys('14')
    page.getPaintingAddToBasketButton().click()
    expect(page.getAmountErrorMessage().getText()).toContain('Amount of paintings is 1-10')
  });

  it('should change amount of paintings in basket', ()=>{
  page.getPaintingInput().clear()
  page.getPaintingInput().sendKeys('4')
  page.getPaintingAddToBasketButton().click()
  page.getPaintingInput().clear()
  page.getPaintingInput().sendKeys('8')
  page.getPaintingChangeAmountButton().click()
  page.getBasketIcon().click()
  browser.sleep(2000)
  expect(page.getAmountOfPaintings().getText()).toContain('8 pcs')
  });

  fit('should remove painting after adding', ()=>{
    page.getPaintingAddToBasketButton().click()
    browser.sleep(2000)
    page.getPaintingRemoveButton().click()
    expect(page.getPaintingAddToBasketButton().getText()).toContain('+ Add to cart')
  });

  it('should show reviews of painting', ()=>{

    page.getReviewsButton().click()
    browser.sleep(2000)
    expect(page.getReviewSubtitleText()).toContain('')
  });

  it('should add a reviews of painting and show it', ()=>{
    let name = 'TestUser'
    let score = 2
    let comment = 'New test'
    let email = 'anton@gmai.com'
    page.getAddReviewButton().click()
    browser.sleep(2000)
    page.getCommentInput().sendKeys(comment)
    page.getNameInput().sendKeys(name)
    page.getEmailInput().sendKeys(email)
    browser.actions().dragAndDrop(page.getScoreInput(), {
      x: 30,
      y: 0
    }).perform();
    page.getReviewFormButton().click()
    page.getReviewsButton().click()
    browser.sleep(2000)

    expect(page.getNewReviewText()).toContain(comment)
  });

})
