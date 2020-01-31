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

  async clickButton(buttonName) {
      await driver.findElement(By.linkText(buttonName)).click();
    }

  // async findWalletTitle() {
  //   await driver.wait.until(ExpectedConditions.titleContains("Wallet"));
  //   await driver.getTitle().then(title => {
  //     return title;
  //   });
  // }
  
  quitDriver() {
    driver.quit();
  }

}

module.exports = BasePage;
