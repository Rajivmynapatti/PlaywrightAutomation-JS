const { Before, AfterStep, Status } = require("@cucumber/cucumber");
const { PageObjectManager } = require("../../PageObjects/PageObjectManager");
const playwright = require("@playwright/test");

Before(async function () {
    // this hook will be executed after every Scenario;

    const broswer = await playwright.chromium.launch({
        headless: false
    });

    const context = await broswer.newContext();
    this.page = await context.newPage();

    this.pageObjectManager = new PageObjectManager(this.page);

})

AfterStep(async function ({ result }) {
    // This hook will be executed after every steps, and take a screenshot on step failure
    if (result.status === Status.FAILED) {

        await this.page.screenshot({ path: "cucumber.png" });
        //expect(await this.page.screenshot()).toMatchSnapshot("CucumberError.png");
    }

})
