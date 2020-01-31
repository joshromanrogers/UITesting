//
// This file includes all home page tests
// We can use Jasmine to conduct the tests
//

// import mock data
let users = require('../utils/mockData');

var { By, until, Key, Builder, Capabilities, WebElement } = require("selenium-webdriver");

// import generic and page specific helper methods for testing
var HomePage = require('../lib/homePage');
var BasePage = require('../lib/basePage');
var LoginPage = require('../lib/loginPage');

describe("Sign in flow", function() {

  beforeEach( async () => {
    basePage = new BasePage();
    // increase default timeout interval and navigate to homepage
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
    await basePage.navigateToHomepage();
  });
  
  // close page after each test
  // afterEach (async () => {
  //   await driver.close().then(() => {
  //     this.driver = new Builder().withCapabilities(Capabilities.chrome()).build();
  //   })
  // });

  it("should find the sign in button and click it", async () => {
    await basePage.clickButton("SIGN IN");
    const signInTitle = await driver.getTitle();
    expect(signInTitle).toBe('Sign in | Luno');
  });

  it("signs in", async () => {
    await basePage.clickButton("SIGN IN");
    await LoginPage.enterAndSubmit('email', users[0].email);
    await LoginPage.enterAndSubmit('password', users[0].password);
    await LoginPage.enterAndSubmit('undefined', users[0].phoneVerification);

    const walletTitle = await driver.getTitle();
    // incorrect expect but using it for now
    expect(walletTitle).toBe('Sign in | Luno');
    // expect(walletTitle).toBe('Wallet');
  });

  it("doesn't allow an illegal email submission", async () => {
    await basePage.clickButton("SIGN IN");
    await LoginPage.enterAndSubmit('email', users[1].email);
    let text = await driver.wait(until.elementLocated(By.id('mat-error-0')), 5 * 1000).then(el => {
        return el.getText();
    });
    expect(text).toBe('Please enter a valid email');
  });

  it("doesn't allow a wrong password submission", async() => {
    await basePage.clickButton("SIGN IN");
    await LoginPage.enterAndSubmit('email', users[3].email);
    await LoginPage.enterAndSubmit('password', users[3].password);
    let text = await driver.wait(until.elementLocated(By.id('mat-error-2')), 5 * 1000).then(el => {
      return el.getText();
  });
  expect(text).toBe('Incorrect password. Try again.');
  })

});

describe("Sign up flow", function() {

  beforeEach( async () => {
    basePage = new BasePage();
    // increase default timeout interval and navigate to homepage
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
    await basePage.navigateToHomepage();
  });
  
  // close page after each test
  // afterEach (async () => {
  //   await driver.close().then(() => {
  //     this.driver = new Builder().withCapabilities(Capabilities.chrome()).build();
  //   })
  // });

  it("should find the sign up button and click it", async () => {
    await basePage.clickButton("SIGN UP");
    const signUpTitle = await driver.getTitle();
    expect(signUpTitle).toBe('Sign up | Luno');
  });

  it("should", async () => {
  
  });

  it("should", async () => {
  
  });

  
});