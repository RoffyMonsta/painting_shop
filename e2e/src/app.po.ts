import { browser, By, by, element, ExpectedConditions, protractor } from 'protractor';

export class AppPage {
  navigateTo() {

    return browser.get('/')
  }
  expectUrlContains(expected: any, timeout= 2000) {
    browser.wait(ExpectedConditions.urlContains(expected), timeout);
  }
  getListNavButton(){
    return browser.driver.findElement(by.css('.side-nav__nav-button'))
  }

}
