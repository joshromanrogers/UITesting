// generic helper methods for testing
let { Builder, By, Capabilities, until } = require('selenium-webdriver');
var driver =  new Builder().withCapabilities(Capabilities.chrome()).build();
class BasePage {

  constructor() {
    global.driver = driver;
  }

  navigateToHomepage() {
    this.driver.get('https://staging.luno.com');
  }

  findTitle() {
    this.driver.findElement(By.title("Buy Bitcoin and Ethereum | Luno"));
  }
  
  async findWalletTitle() {
    this.driver.wait(until.elementLocated(By.name('title')), 5*1000).then(el => {
      return el;
    });

  //   await this.driver.wait(() => {
  //     return driver.getTitle().then(function(title) {
  //         return title === 'Wallet';
  //     });
  // }, 5 * 1000);
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
