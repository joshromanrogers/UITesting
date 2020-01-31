// login page specific helper methods for testing
let webdriver = require('selenium-webdriver');
let BasePage = require('./basePage');
let By = webdriver.By;

class LoginPage extends BasePage {

  async enterEmailAndSubmit() {
    await driver.findElement(By.name("email")).sendKeys('roman@luno.com', Key.RETURN);
  }

  async enterPasswordAndSubmit() {
    await driver.findElement(By.name('password')).sendKeys('StagingPassword1', Key.RETURN);
  }

}

module.exports = new LoginPage();