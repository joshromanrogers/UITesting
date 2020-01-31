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

  findTitle() {
    driver.findElement(By.title("Buy Bitcoin and Ethereum | Luno"));
  }
  
  // async findWalletTitle() {
  //   await driver.wait(until.elementLocated(By.title('Wallet')), 5*1000);
  //   };

  async findWalletTitle() {
    await driver.wait.until(ExpectedConditions.titleContains("Wallet"));
    await driver.getTitle().then(title => {
      return title;
    });
  }

  //   await this.driver.wait(() => {
  //     return driver.getTitle().then(function(title) {
  //         return title === 'Wallet';
  //     });
  // }, 5 * 1000);
  // }


  async enterEmailAndSubmit() {
    await driver.wait(until.elementLocated(By.name('email')), 5 * 1000).then(el => {
        return el.sendKeys('roman@luno.com', Key.RETURN);
    });
  }
  
  quitDriver() {
    driver.quit();
  }

}

module.exports = BasePage;
