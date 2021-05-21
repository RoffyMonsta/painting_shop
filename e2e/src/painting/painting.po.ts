import { browser, By, by, element, ExpectedConditions, protractor } from 'protractor';

export class PaintingPage {
  navigateTo() {

    return browser.get('/')
  }

  getBuyButton(){
    return browser.driver.findElement(by.css('.painting__button'))
  }
  getPaintingTitle(){
    return  browser.driver.findElement(by.css('.painting-content__title')).getText()
  }
  getPaintingInput(){
    return  browser.driver.findElement(by.css('.painting-content__input'))
  }
  getPaintingAddToBasketButton(){
    return  browser.driver.findElement(by.css('.painting-content__button'))
  }
  getPaintingChangeAmountButton(){
    return  browser.driver.findElement(by.css('.add'))
  }
  getPaintingRemoveButton(){
    return  browser.driver.findElement(by.css('.remove'))
  }
  getBasketIcon(){
    return  browser.driver.findElement(by.css('.icons__basket-icon'))
  }
  getAmountOfPaintings(){
    return  browser.driver.findElement(by.css('.painting__pieces'))
  }
  getAmountErrorMessage(){
    return browser.driver.findElement(by.css('.painting-content__error-message'))
  }

  getReviewsButton(){
    return browser.driver.findElement(by.xpath("//*[contains(text(),'Reviews')]"))
  }
  getAddReviewButton(){
    return browser.driver.findElement(by.xpath("//*[contains(text(),'Add a review')]"))
  }
  getReviewSubtitleText(){
    return browser.driver.findElement(by.css('.review__subtitle')).getText()
  }
  getReviewScoreText(){
    return browser.driver.findElement(by.css('.score')).getText()
  }


  getNameInput(){
    return browser.driver.findElement(by.css('#mat-input-2'))
  }
  getEmailInput(){
    return browser.driver.findElement(by.css('#mat-input-3'))
  }
  getScoreInput(){
    return browser.driver.findElement(by.css('.mat-slider-thumb'))
  }
  getCommentInput(){
    return browser.driver.findElement(by.css('#mat-input-5'))
  }
  getReviewFormButton(){
    return browser.driver.findElement(by.css('.review-form__button'))
  }
  getNewReviewText(){
    return browser.driver.findElement(by.xpath("//*[contains(text(),'New test')]")).getText()
  }
}
