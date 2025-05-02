const { test, expect } = require("@playwright/test");

test("Visual Testing", async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/login");

    await page.locator('#username').fill('tomsmith');

    await page.locator('#username').screenshot({ path: "locatorScreenshot.png" });


    await page.locator('#password').fill('SuperSecretPassword!');

    await page.locator('.radius').click();

    await page.screenshot({ path: 'pageScreenshot.png' });

    expect(await page.screenshot()).toMatchSnapshot("success.png");


})