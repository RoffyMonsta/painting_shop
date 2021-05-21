import { browser, By, by, element, ExpectedConditions, protractor } from 'protractor';

export class BlogCommentsPage {
  navigateToBlog() {

    return browser.get('/blog')
  }

 getBlogName(){
   return browser.driver.findElement(by.css('.blog__title')).getText()
 }
 getBlogGrid(){
  return browser.driver.findElement(by.css('app-blog-grid .blog__title')).getText()
}
getBlogListed(){
  let btnList = browser.driver.findElement(by.css('.title-name__list'))
  btnList.click()
  return browser.driver.findElement(by.css('app-blog-listed .blog__title')).getText()
}
getBigBlog(){
  return browser.driver.findElement(by.css('app-blog-big'))
}
expectUrlContains(expected: any, timeout= 2000) {
  browser.wait(ExpectedConditions.urlContains(expected), timeout);
}

  getNameInput(){
    return browser.driver.findElement(by.css('#mat-input-2'))
  }
  getEmailInput(){
    return browser.driver.findElement(by.css('#mat-input-3'))
  }
  getCommentInput(){
    return browser.driver.findElement(by.css('#mat-input-4'))
  }
  getCheckBox(){
    return browser.driver.findElement(by.css('.mat-checkbox-inner-container'))
  }
  getAddCommentButton(){
    return browser.driver.findElement(by.css('.comment-form__button'))
  }
  getNewCommentText(){
    return browser.driver.findElement(by.xpath("//*[contains(text(),'Test comment')]")).getText()
  }
  getCommentReplyBtn(){
    return browser.driver.findElement(by.css('.comment__reply-btn'))
  }
  getNewReplyText(){
    return browser.driver.findElement(by.xpath("//*[contains(text(),'Test reply')]")).getText()
  }
}
