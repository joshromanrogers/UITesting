//
// This file includes all home page tests
// We can use Jasmine to conduct the tests
//

// import mock data
// import { data } from '../utils/mockData';

// import generic helper methods for testing
// import BasePage from '../lib/basePage';

// import homepage specific helper methods for testing
var HomePage = require('../lib/homePage');

var BasePage = require('../lib/basePage');

basePage = new BasePage();

describe("A suite", function() {

  beforeEach( async () => {
    // increase default timeout interval and navigate to homepage
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
  });

  // afterEach( async () => {
  //   await basePage.driver.quit();
  // })

  it("should create a driver", () => {
    expect(basePage.driver).toBeDefined();
  });

  it("should navigate to the homepage", async () => {
    await basePage.navigateToHomepage();
    const title = await basePage.driver.getTitle();
    expect(title).toBe('Buy Bitcoin and Ethereum | Luno');
  });

  // it("should find the sign in button and click it", async () => {
  //   HomePage.findAndClickSignInButton();
  //   await driver.wait(until.titleIs('Sign in | Luno'), 50 * 1000);
  //   const title = await basePage.driver.getTitle();
  //   expect(title).toBe('Sign in | Luno');
  // })

  
});



  