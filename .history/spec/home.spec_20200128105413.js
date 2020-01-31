//
// This file includes all home page tests
// We can use Jasmine to conduct the tests
//

// import mock data
// import { data } from '../utils/mockData';

// import generic helper methods for testing
// import BasePage from '../lib/basePage';

// import homepage specific helper methods for testing
// import HomePage from '../lib/homePage';

var BasePage = require('../lib/basePage');

basePage = new BasePage();

describe("A suite", function() {
  let originalTimeout;

  beforeEach( async () => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
    await basePage.navigateToHomepage();
  });

  it("should create a driver", () => {
    expect(basePage.driver).toBeDefined();
  });

  it("should navigate to the homepage", async () => {
    const title = await basePage.driver.getTitle();
    expect(title).toBe('Sign in | Luno');
  });

  
});



  