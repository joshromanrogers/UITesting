// generic helper methods for testing

let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

class BasePage {

  constructor() {
    // make this driver global so it can be used by all tests, rather than creating new drivers each time
    global.driver = driver;
  }


  navigateToHomepage() {
    // driver.get('https://staging.luno.com');
  }

}

module.exports = BasePage;
