// login page specific helper methods for testing
let { By, Key, until } = require('selenium-webdriver');
let BasePage = require('./basePage');

class LoginPage extends BasePage {

  async enterEmailAndSubmit() {
    await driver.wait(until.elementLocated(By.name('email')), 5 * 1000).then(el => {
        return el.sendKeys('roman@luno.com', Key.RETURN);
    });
  }

  async enterPasswordAndSubmit() {
    await driver.wait(until.elementLocated(By.name('password')), 5 * 1000).then(el => {
        return el.sendKeys('StagingPassword1', Key.RETURN);
    });
  }

  async enterCodeAndSubmit() {
    await driver.wait(until.elementLocated(By.name('undefined')), 5 * 1000).then(el => {
        return el.sendKeys('1337', Key.RETURN);
    });
  }

}

module.exports = new LoginPage();