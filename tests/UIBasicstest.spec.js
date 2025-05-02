const { test, expect } = require('@playwright/test');

const { UIBasicPage } = require("../PageObjects/UIBasicPage");

//cleatest.describe.configure({mode: 'parallel'});
test('First Playwright test', async ({ browser, page }) => {
    //const context = await browser.newContext();//newContext is like opening a browser in incoginto mode.
    //const page = await context.newPage();
    //await page.goto("https://rahulshettyacademy.com/locatorspractice/");
   // const url = "https://the-internet.herokuapp.com/login";
   const url = "https://the-internet.herokuapp.com/login";
    const username = "tomsmith";
    const password = "SuperSecretPassword!";

    const userMessage = page.locator('.example h2');

    const loginPage = new UIBasicPage(page);

    await loginPage.goToUrl(url);
    await page.waitForLoadState();
    
    await expect(page).toHaveTitle("The Internet");

    await loginPage.UIvalidlogin(username, password);

    // const errormsg = await page.locator('.flash.error').textContent();
    // console.log(errormsg);
    await page.screenshot({path: "screenshot.png"});

    await userMessage.waitFor();
    const text = await userMessage.textContent();
    console.log (text);
    await expect(userMessage).toContainText("Secure");

    await loginPage.logout();



});