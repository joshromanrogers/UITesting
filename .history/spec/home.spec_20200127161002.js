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
basePage.navigateToHomepage();

describe("A suite", function() {

    it("should create a driver", () => {
      expect(basePage.driver).toBeDefined();
    });

    it("should navigate to the homepage", async () => {
      await basePage.navigateToHomepage();
      await basePage.driver.getTitle().then((title) => {
        console.log(title);
        expect(title).toBe('Sign in | Luna');
      }) 
    });

  
  });



  