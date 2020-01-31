// homepage specific helper methods for testing
let { By } = require('selenium-webdriver');
let BasePage = require('./basePage');

class HomePage extends BasePage {

  async findAndClickSignInButton() {
    await this.driver.findElement(By.linkText("SIGN IN")).click();
  }

  async findAndClickSignUpButton() {
    await this.driver.findElement(By.linkText("SIGN UP")).click();
  }

}

module.exports = new HomePage();