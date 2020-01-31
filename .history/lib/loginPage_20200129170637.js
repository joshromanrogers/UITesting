// login page specific helper methods for testing
let { By, Key, until } = require('selenium-webdriver');
let BasePage = require('./basePage');

class LoginPage extends BasePage {

  async enterEmailAndSubmit() {

    await driver.wait(until.elementLocated(By.name('email')), 5 * 1000).then(el => {
        return el.sendKeys('roman@luno.com', Key.RETURN);
    });

    // await driver.wait(driver.findElement(By.name("email")).sendKeys('roman@luno.com', Key.RETURN), 20000);
  }

  async enterPasswordAndSubmit() {
    // await driver.wait(await driver.findElement(By.name('password')).sendKeys('StagingPassword1', Key.RETURN), 50000);
    await driver.wait(until.elementLocated(By.name('password')), 5 * 1000).then(el => {
        return el.sendKeys('StagingPassword1', Key.RETURN);
    });
  }

  async enterCodeAndSubmit() {
    await driver.wait(await driver.findElement(By.name('undefined')).sendKeys('1337', Key.RETURN), 20000);
  }

}

module.exports = new LoginPage();