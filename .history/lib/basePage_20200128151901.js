// generic helper methods for testing
let webdriver = require('selenium-webdriver');
class BasePage {

  constructor() {
    this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
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
