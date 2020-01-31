// generic helper methods for testing
let webdriver = require('selenium-webdriver');
this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

module.exports = class BasePage {

  constructor() {
  }


  navigateToHomepage() {
    driver.get('https://staging.luno.com');
  }

}

