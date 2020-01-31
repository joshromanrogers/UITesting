// homepage specific helper methods for testing
let { By } = require('selenium-webdriver');
let BasePage = require('./basePage');

class HomePage extends BasePage {

  // async clickButton(buttonName) {
  //   await driver.findElement(By.linkText(buttonName)).click();
  // }

}

module.exports = new HomePage();