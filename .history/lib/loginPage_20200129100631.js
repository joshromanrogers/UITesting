// login page specific helper methods for testing
let { By, Key } = require('selenium-webdriver');
let BasePage = require('./basePage');

class LoginPage extends BasePage {

  async enterEmailAndSubmit() {
    await driver.wait(driver.findElement(By.name("email")).sendKeys('roman@luno.com', Key.RETURN));
  }

  async enterPasswordAndSubmit() {
    await driver.wait(await driver.findElement(By.name('password')).sendKeys('StagingPassword1', Key.RETURN));
  }

  async enterCodeAndSubmit() {
    await driver.wait(await driver.findElement(By.name('undefined')).sendKeys('1337', Key.RETURN));
  }

}

module.exports = new LoginPage();