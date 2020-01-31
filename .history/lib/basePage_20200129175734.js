// generic helper methods for testing
let { Builder, By, Capabilities, until } = require('selenium-webdriver');
class BasePage {

  constructor() {
    this.driver = new Builder().withCapabilities(Capabilities.chrome()).build();
    global.driver = this.driver;
  }

  navigateToHomepage() {
    this.driver.get('https://staging.luno.com');
  }

  findTitle() {
    this.driver.findElement(By.title("Buy Bitcoin and Ethereum | Luno"));
  }
  
  findWalletTitle() {
    this.driver.getTitle();
    this.driver.wait(until.elementLocated(By.name('title')), 5*1000).then(() => {
      this.driver.getTitle();
    });
  }

  async enterEmailAndSubmit() {
    await driver.wait(until.elementLocated(By.name('email')), 5 * 1000).then(el => {
        return el.sendKeys('roman@luno.com', Key.RETURN);
    });
  }
  
  quitDriver() {
    this.driver.quit();
  }

}

module.exports = BasePage;
