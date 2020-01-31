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
var { By } = require("selenium-webdriver");
var BasePage = require('../lib/basePage');



describe("A suite", function() {

  beforeEach( async () => {
    basePage = new BasePage();
    // increase default timeout interval and navigate to homepage
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
    await basePage.navigateToHomepage();
  });

  // close page after each test
  afterEach (async () => {
    await basePage.quit();
     });


  it("should create a driver", () => {
    expect(basePage.driver).toBeDefined();
  });

  it("should navigate to the homepage", async () => {
    const title = await basePage.driver.getTitle();
    expect(title).toBe('Buy Bitcoin and Ethereum | Luno');
  });

  it("should find the sign in button and click it", async () => {
    await HomePage.findAndClickSignInButton();
    const title = await basePage.driver.getTitle();
    expect(title).toBe('Sign in | Luno');
  })

  it("should find the sign up button and click it", async () => {
    await HomePage.findAndClickSignUpButton();
    const title = await basePage.driver.getTitle();
    expect(title).toBe('Sign up | Luno');
  })

  
});



  