// generic helper methods for testing
let { Builder, By } = require('selenium-webdriver');
class BasePage {

  constructor() {
    this.driver = new Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    global.driver = this.driver;
  }

  navigateToHomepage() {
    this.driver.get('https://staging.luno.com');
  }

  findTitle() {
    this.driver.findElement(By.title("Buy Bitcoin and Ethereum | Luno"));
  }
  
  quitDriver() {
    this.driver.quit();
  }

}

module.exports = BasePage;
