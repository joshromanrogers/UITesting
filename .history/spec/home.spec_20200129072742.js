//
// This file includes all home page tests
// We can use Jasmine to conduct the tests
//

// import mock data
// import { data } from '../utils/mockData';

var { By, until, Key } = require("selenium-webdriver");

// import generic and page specific helper methods for testing
var HomePage = require('../lib/homePage');
var BasePage = require('../lib/basePage');
var LoginPage = require('../lib/loginPage');

basePage = new BasePage();

describe("A suite", function() {

  beforeEach( async () => {
    // increase default timeout interval and navigate to homepage
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
    await basePage.navigateToHomepage();
  });
  
    // // close page after each test
    // afterEach (async () => {
    
    //   await basePage.driver.quit();
    //    });


  // it("should create a driver", () => {
  //   expect(basePage.driver).toBeDefined();
  // });

  // it("should navigate to the homepage", async () => {
  //   const title = await basePage.driver.getTitle();
  //   expect(title).toBe('Buy Bitcoin and Ethereum | Luno');
  // });

  // it("should find the sign in button and click it", async () => {
  //   await HomePage.findAndClickSignInButton();
  //   const signInTitle = await basePage.driver.getTitle();
  //   expect(signInTitle).toBe('Sign in | Luno');
  // })

  it("should sign in", async () => {
    await HomePage.findAndClickSignInButton();
    await LoginPage.enterEmailAndSubmit();
    await driver.sleep(1000);
    await LoginPage.enterPasswordAndSubmit();
    await driver.sleep(1000);
    await LoginPage.enterCodeAndSubmit();
    await driver.sleep(1000);
    const walletTitle = await basePage.driver.getTitle();
    expect(walletTitle).toBe('Wallet');

  })

  // it("should find the sign up button and click it", async () => {
  //   await HomePage.findAndClickSignUpButton();
  //   const signUpTitle = await basePage.driver.getTitle();
  //   expect(signUpTitle).toBe('Sign up | Luno');
  // })

  
});



  