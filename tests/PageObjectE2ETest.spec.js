const { test, expect } = require('@playwright/test');
const { PageObjectManager } = require("../PageObjects/PageObjectManager");

//converting the Json into string using Json.stringify and then converting it into Json Object using Json.parse
const dataset = JSON.parse(JSON.stringify(require("../Utils/PageObjectTestData.json")));


test('@smoke Product purchase', async ({ page }) => {

    const pageObjectManager = new PageObjectManager(page);

    //Calling from LoginPage.js where we have created Page Object and methods
    const loginPage = pageObjectManager.getLogin();

    await loginPage.goToURL(dataset.url);
    await loginPage.validLogin(dataset.email, dataset.password);

    //Calling methods from Dashboard.js
    const dashboardPage = pageObjectManager.getDashboard();

    await dashboardPage.searchProductAddCart(dataset.productName);
    await dashboardPage.clickCartButton();


    //Calling methods from MyCartPage.js
    const myCartPage = pageObjectManager.getmyCartPage();

    await myCartPage.verifyProductText(dataset.productName);
    await myCartPage.clickCheckOut();


    //Calling methods from PlaceOrderPage.js
    const placeOrderPage = pageObjectManager.getplaceOrderPage();

    await placeOrderPage.addPersonalAndShippingInformation(dataset.CVV, dataset.Month, dataset.Year, dataset.NameOnCard, dataset.CouponCode);
    await placeOrderPage.SelectCountry(dataset.CountryName);
    await placeOrderPage.clickPlaceOrderButton();


    //Calling methods from ThankyouPage.js
    const thankyoupage = pageObjectManager.getthankyouPage();

    await thankyoupage.assertThankYouPageMessage();

    await thankyoupage.grabOrderID();
    await thankyoupage.matchOrderIDAndClickView();


    //Calling methods from OrderSummaryPage.js
    const orderSummaryPage = pageObjectManager.getorderSummaryPage();

    await orderSummaryPage.assertOrderID();

    await orderSummaryPage.assertPurchaseProduct(dataset.productName);

}
);


