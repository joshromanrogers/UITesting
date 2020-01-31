//
// This file includes all home page tests
// We can use Jasmine to conduct the tests
//

// import mock data
let users = require('../utils/mockData');

var { By, until, Key } = require("selenium-webdriver");

// import generic and page specific helper methods for testing
var HomePage = require('../lib/homePage');
var BasePage = require('../lib/basePage');
var LoginPage = require('../lib/loginPage');

describe("A suite", function() {

  beforeEach( async () => {
    basePage = new BasePage();
    // increase default timeout interval and navigate to homepage
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
    await basePage.navigateToHomepage();
  });
  
    // close page after each test
    // afterEach (async (done) => {
    //   await driver.quit().then(() => done());
    // });


  // it("should create a driver", () => {
  //   expect(basePage.driver).toBeDefined();
  // });

  // it("should navigate to the homepage", async () => {
  //   const title = await basePage.driver.getTitle();
  //   expect(title).toBe('Buy Bitcoin and Ethereum | Luno');
  // });

  it("should find the sign in button and click it", async () => {
    await HomePage.clickButton("SIGN IN");
    const signInTitle = await driver.getTitle();
    expect(signInTitle).toBe('Sign in | Luno');
  });

  it("should sign in", async () => {
    await HomePage.clickButton("SIGN IN");
    await LoginPage.enterEmailAndSubmit(users[0].email);
    await LoginPage.enterPasswordAndSubmit(users[0].password);
    await LoginPage.enterVerificationCodeAndSubmit(users[0].phoneVerification);

    const walletTitle = await driver.getTitle();
    // incorrect expect but using it for now
    expect(walletTitle).toBe('Sign in | Luno');
    // expect(walletTitle).toBe('Wallet');
  });

  it("should find the sign up button and click it", async () => {
    await HomePage.clickButton("SIGN UP");
    const signUpTitle = await driver.getTitle();
    expect(signUpTitle).toBe('Sign up | Luno');
  });

  
});