// login page specific helper methods for testing
let webdriver = require('selenium-webdriver')
let { By, Key } = require('selenium-webdriver');
let BasePage = require('./basePage');

class LoginPage extends BasePage {

  async enterEmailAndSubmit() {
      let email = driver.wait(until.elementLocated(webdriver.By.name("email")), 5000);
      this.driver.wait(until.elementIsVisible(email), 5000).sendKeys('roman@luno.com', Key.RETURN);
  }

  async enterPasswordAndSubmit() {
    let password = driver.wait(until.elementLocated(webdriver.By.name("password")), 5000);
    this.driver.wait(until.elementIsVisible(password), 5000).sendKeys('StagingPassword1', Key.RETURN);
  }

  async enterCodeAndSubmit() {
    await driver.wait(webdriver.until.elementLocated(By.name('undefined')).sendKeys('1337', Key.RETURN), 10000);
  }

}

module.exports = new LoginPage();