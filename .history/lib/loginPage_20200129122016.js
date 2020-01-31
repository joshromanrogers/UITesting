// login page specific helper methods for testing
let webdriver = require('selenium-webdriver')
let { By, Key } = require('selenium-webdriver');
let BasePage = require('./basePage');

class LoginPage extends BasePage {

  async enterEmailAndSubmit() {
    await driver.wait(webdriver.until.elementLocated(By.name("email")).then((email) => email.sendKeys('roman@luno.com', Key.RETURN), 10000);
  }

  async enterPasswordAndSubmit() {
    await driver.wait(webdriver.until.elementLocated(By.name('password')).sendKeys('StagingPassword1', Key.RETURN), 10000);
  }

  async enterCodeAndSubmit() {
    await driver.wait(webdriver.until.elementLocated(By.name('undefined')).sendKeys('1337', Key.RETURN), 10000);
  }

}

module.exports = new LoginPage();