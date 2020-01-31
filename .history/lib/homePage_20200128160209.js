// homepage specific helper methods for testing
let webdriver = require('selenium-webdriver');
let BasePage = require('./basePage');
let By = webdriver.By;

class HomePage extends BasePage {

  async findAndClickSignInButton() {
    await driver.findElement(By.linkText("SIGN IN")).click();
  }

  async findAndClickSignUpButton() {
    await driver.findElement(By.linkText("SIGN UP")).click();
  }

}

module.exports = new HomePage();