const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const playwright = require("@playwright/test");
const { PageObjectManager } = require("../../PageObjects/PageObjectManager");

const url = "https://rahulshettyacademy.com/client";
const CVV = "123";
const Month = "03";
const Year = "25";
const NameOnCard = "R Rajiv Kumar";
const CouponCode = "rahulshettyacademy";
const CountryName = " Indonesia";
const uitestURL = "https://the-internet.herokuapp.com/login";

let userMessage;
let loginPage;



//Given a valid login to Ecommerence website with "rajiv2@grr.la" and "Test@1234"
Given('a valid login to Ecommerence website with {string} and {string}', { timeout: 100 * 1000 }, async function (email, password) {

  //*I am using the Hooks.js file to initialize the below code.

  // const broswer = await playwright.chromium.launch();
  // const context = await broswer.newContext();
  // const page = await context.newPage();
  // this.pageObjectManager = new PageObjectManager(page); *//

  //Calling from LoginPage.js where we have created Page Object and methods
 
  loginPage = this.pageObjectManager.getLogin();
  await loginPage.goToURL(url);

  await loginPage.validLogin(email, password);

});

// When add product with name "IPHONE 13 PRO" into Cart

When('add product with name {string} into Cart', async function (productName) {
  const dashboardPage = this.pageObjectManager.getDashboard();

  await dashboardPage.searchProductAddCart(productName);
  await dashboardPage.clickCartButton();
});

//Then Valiate same product name "IPHONE 13 PRO" is added to the Cart

Then('Valiate same product name {string} is added to the Cart', async function (productName) {
  const myCartPage = this.pageObjectManager.getmyCartPage();

  await myCartPage.verifyProductText(productName);
  await myCartPage.clickCheckOut();
});

//When Enter valid country name under Shipping address and Place order successfully

When('Enter valid country name under Shipping address and Place order successfully', async function () {
  const placeOrderPage = this.pageObjectManager.getplaceOrderPage();

  await placeOrderPage.addPersonalAndShippingInformation(CVV, Month, Year, NameOnCard, CouponCode);
  await placeOrderPage.SelectCountry(CountryName);
  await placeOrderPage.clickPlaceOrderButton();

});

//  Then Verify order present in the Order History page

Then('Verify order present in the Order History page', async function () {
  const thankyoupage = this.pageObjectManager.getthankyouPage();

  await thankyoupage.assertThankYouPageMessage();
  await thankyoupage.grabOrderID();
  await thankyoupage.matchOrderIDAndClickView();

});

//To login with a valid username and password

Given('User enter the {string} into the browser', { timeout: 100 * 1000 }, async function (uitestURL) {
  loginPage = this.pageObjectManager.getuiBasicPage();

  await loginPage.goToUrl(uitestURL);

});

When('User will enter the valid credentials like {string} and {string}', async function (username, password) {

  await loginPage.UIvalidlogin(username, password);
});

Then('User will be able to login into the website', async function () {

  userMessage = this.page.locator('#flash');
  await userMessage.waitFor();
  const text = await userMessage.textContent();
  console.log(text);
  await expect(userMessage).toContainText("secure");
});

//Scenario: To login with a invalid username and password 

When('User will enter the invalid credentials like {string} and {string}', async function (username, password) {
  loginPage = this.pageObjectManager.getuiBasicPage();
  await loginPage.UIvalidlogin(username, password);
});


Then('User will be able to see the error message in the website', async function () {
  userMessage = this.page.locator('#flash');
  await userMessage.waitFor();
  const text = await userMessage.textContent();
  console.log(text);
  await expect(userMessage).toContainText("invalid");
});

// ---------------------- Parametrisation.feature -------------------------------------------//
Given('user enter the {string}', { timeout: 100 * 1000 }, async function (URL) {
  loginPage = this.pageObjectManager.getuiBasicPage();
    await loginPage.goToUrl(URL);
});

When('user enter credentials {string} and {string}', async function (username, password) {
  await loginPage.UIvalidlogin(username, password)
});

Then('user will get the message', async function () {
  userMessage = this.page.locator('#flash');
  await userMessage.waitFor();
  const text = await userMessage.textContent();
  //console.log(text);
  await expect(userMessage).toContainText("secure");
});