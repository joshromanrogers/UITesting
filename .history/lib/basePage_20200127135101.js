// generic helper methods for testing
let webdriver = require('selenium-webdriver');
this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

module.exports = class BasePage {

  constructor() {
    // make this driver global so it can be used by all tests, rather than creating new drivers each time
    global.driver = driver;
  }


  navigateToHomepage() {
    driver.get('https://staging.luno.com');
  }

}

