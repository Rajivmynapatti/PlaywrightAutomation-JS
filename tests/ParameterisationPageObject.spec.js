const { test, expect } = require('@playwright/test');
const { PageObjectManager } = require("../PageObjects/PageObjectManager");

//converting the Json into string using Json.stringify and then converting it into Json Object using Json.parse
const dataset = JSON.parse(JSON.stringify(require("../Utils/ParametersTestData.json")));

for(const data of dataset)
{
test(`Product purchase of ${data.productName}`, async ({ page }) => {

    const pageObjectManager = new PageObjectManager(page);

    //Calling from LoginPage.js where we have created Page Object and methods
    const loginPage = pageObjectManager.getLogin();

    await loginPage.goToURL(data.url);
    await loginPage.validLogin(data.email, data.password);

    //Calling methods from Dashboard.js
    const dashboardPage = pageObjectManager.getDashboard();

    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.clickCartButton();


    //Calling methods from MyCartPage.js
    const myCartPage = pageObjectManager.getmyCartPage();

    await myCartPage.verifyProductText(data.productName);
    await myCartPage.clickCheckOut();


    //Calling methods from PlaceOrderPage.js
    const placeOrderPage = pageObjectManager.getplaceOrderPage();

    await placeOrderPage.addPersonalAndShippingInformation(data.CVV, data.Month, data.Year, data.NameOnCard, data.CouponCode);
    await placeOrderPage.SelectCountry(data.CountryName);
    await placeOrderPage.clickPlaceOrderButton();


    //Calling methods from ThankyouPage.js
    const thankyou = pageObjectManager.getthankyouPage();

    await thankyou.assertThankYouPageMessage();

    await thankyou.matchOrderIDAndClickView();


    //Calling methods from OrderSummaryPage.js
    const orderSummaryPage = pageObjectManager.getorderSummaryPage();

    // await orderSummaryPage.assertOrderID();

    await orderSummaryPage.assertPurchaseProduct(data.productName);

}
);
}

