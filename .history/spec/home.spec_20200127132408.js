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

let year = 2020;

describe("A suite", function() {

    // it("contains spec with an expectation", function() {
    //   expect(true).toBe(true);
    // });

    it("should be 2020", () => {
      expect(year).toBe(2020)
    })

    it("should create a driver", () => {
      expect(BasePage.driver).toBeDefined;
    })

  
  });



  