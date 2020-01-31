// generic helper methods for testing
let webdriver = require('selenium-webdriver');
class BasePage {

  constructor() {
    this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    global.driver = this.driver;
  }

  async navigateToHomepage() {
    await this.driver.get('https://staging.luno.com');
  }

}

module.exports = BasePage;
