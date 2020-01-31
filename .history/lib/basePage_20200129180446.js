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
  
  async findWalletTitle() {
    await this.driver.wait(() => {
      driver.getTitle().then(function(title) {
          return title === 'Wallet';
      });
  }, 5 * 1000);
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
