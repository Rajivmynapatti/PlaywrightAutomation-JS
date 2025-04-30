const { test, expect } = require("@playwright/test")
const { FKPageObjectManager } = require("../PageObjects/FKPageObjectManager");
const{FlipkartSearchPage} = require('../PageObjects/FlipkartSearchPage');
const dataset = JSON.parse(JSON.stringify(require("../Utils/FlipkartTestData.json")));


test("FlipKart E2E Test", async ({ browser }) => {
   
    const context = await browser.newContext();
    const page = await context.newPage();

    const pageObjectManager = new FKPageObjectManager(page, context);

    const launchPage = pageObjectManager.getHomePage();

    await launchPage.goToURL(dataset.url);

    const searchPage = pageObjectManager.getSearchPage(context)

    await searchPage.enterTextOnSearchBox(dataset.productName);

    await searchPage.clickSearchButton();

    await searchPage.assertSearchTextBox(dataset.productName);

    await searchPage.grabProductListAndClickProductName();

})
