// login page specific helper methods for testing
let { By, Key, until } = require('selenium-webdriver');
let BasePage = require('./basePage');
let users = require('../utils/mockData'); 

class ForgotPasswordPage extends BasePage {

}

module.exports = new ForgotPasswordPage();