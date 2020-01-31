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

  beforeEach( () => {
    basePage.navigateToHomepage();
  });

  it("should create a driver", async () => {
    await expect(basePage.driver).toBeDefined();
  });

  it("should navigate to the homepage", () => {
    basePage.driver.getTitle().then((title) => {
      expect(title).toBe('Sign in | Luna');
    }) 
  });

  
});



  