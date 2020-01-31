// homepage specific helper methods for testing
let webdriver = require('selenium-webdriver');
let BasePage = require('./basePage');
let By = webdriver.By;

class HomePage extends BasePage {

  findAndClickSignInButton() {
    driver.findElement(By.linkText("SIGN IN")).click();
  }

}

module.exports = new HomePage();