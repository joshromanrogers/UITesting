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

var { year } = require('../lib/basePage');

describe("A suite", function() {

    // it("contains spec with an expectation", function() {
    //   expect(true).toBe(true);
    // });

    it("should be 2020", () => {
      expect(year).toBe(2020);
    })

  
  });



  