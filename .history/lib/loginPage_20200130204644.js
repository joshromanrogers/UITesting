// login page specific helper methods for testing
let { By, Key, until } = require('selenium-webdriver');
let BasePage = require('./basePage');


class LoginPage extends BasePage {

  async enterAndSubmit(element, userInfo) {
    await driver.wait(until.elementLocated(By.name(element)), 5 * 1000).then(el => {
        return el.sendKeys(userInfo, Key.RETURN);
    });
  }

}

module.exports = new LoginPage();