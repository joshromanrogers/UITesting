// login page specific helper methods for testing
let { By, Key, until } = require('selenium-webdriver');
let BasePage = require('./basePage');


class LoginPage extends BasePage {

  async enterEmailAndSubmit(email) {
    await driver.wait(until.elementLocated(By.name('email')), 5 * 1000).then(el => {
        return el.sendKeys(email, Key.RETURN);
    });
  }

  async enterPasswordAndSubmit(password) {
    await driver.wait(until.elementLocated(By.name('password')), 5 * 1000).then(el => {
        return el.sendKeys(password, Key.RETURN);
    });
  }

  async enterVerificationCodeAndSubmit(phoneVerification) {
    await driver.wait(until.elementLocated(By.name('undefined')), 5 * 1000).then(el => {
        return el.sendKeys(phoneVerification, Key.RETURN);
    });
  }
}

module.exports = new LoginPage();