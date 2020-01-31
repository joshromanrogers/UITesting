// login page specific helper methods for testing
let { By, Key } = require('selenium-webdriver');
let BasePage = require('./basePage');

class LoginPage extends BasePage {

  async enterEmailAndSubmit() {
    await driver.wait(driver.findElement(By.name("email")).sendKeys('roman@luno.com', Key.RETURN), 50000);
  }

  async enterPasswordAndSubmit() {
    await driver.wait(await driver.findElement(By.name('password')).sendKeys('StagingPassword1', Key.RETURN), 100000);
  }

  async enterCodeAndSubmit() {
    await driver.wait(await driver.findElement(By.name('undefined')).sendKeys('1337', Key.RETURN), 50000);
  }

}

module.exports = new LoginPage();