// generic helper methods for testing
let { Builder, By, Capabilities, until, ExpectedConditions } = require('selenium-webdriver');
// build a new chrome driver
var driver =  new Builder().withCapabilities(Capabilities.chrome()).build();
class BasePage {

  constructor() {
    global.driver = driver;
  }

  navigateToHomepage() {
    driver.get('https://staging.luno.com');
  }

  // async findWalletTitle() {
  //   await driver.wait.until(ExpectedConditions.titleContains("Wallet"));
  //   await driver.getTitle().then(title => {
  //     return title;
  //   });
  // }

  async enterEmailAndSubmit(email) {
    await driver.wait(until.elementLocated(By.name('email')), 5 * 1000).then(el => {
        return el.sendKeys(email, Key.RETURN);
    });
  }
  
  quitDriver() {
    driver.quit();
  }

}

module.exports = BasePage;
