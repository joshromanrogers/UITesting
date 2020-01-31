// generic helper methods for testing
let webdriver = require('selenium-webdriver');

module.exports = class BasePage {

  constructor() {
    this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
  }

  navigateToHomepage() {
    driver.get('https://staging.luno.com');
  }

}

