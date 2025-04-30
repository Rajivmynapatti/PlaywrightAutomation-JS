const { test, expect } = require("@playwright/test")

test("Child windows handling", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const newWindowLink = page.locator('.blinkingText');

    //We need to use Promise.all to execute below two lines in synchrously or below two steps will execute at a time,
    //A promise consists of three output: Rejected, Pending, Fulfilled. 
    // The promise will be success only if the promise result is fulfilled. and a promise will be failed if the promise result is rejected.
    //A promise will be providing a output as a promise only and all the promise will be stored in an array - []
    //To handle the child page then new need to write the below two lines of code.
    const [newPagePromise] = await Promise.all(
        [
            context.waitForEvent('page'), //It will wait for the new window to open
        
            await newWindowLink.click(), // After clicking on the link, a new window will open.

        ]
    );
    const childwindowElement = await newPagePromise.locator('.inner-box h1').textContent();
    console.log("Reached to Child window");
    console.log(childwindowElement);
    //await newPagePromise.pause();

   //here Page is the parent window and newPagePromise is the child window

    console.log("Switching back to Parent Window");
    await page.locator('#username').fill("rahulshettyacademy");
    await page.locator('#password').fill("learning");
    await page.locator("[name='signin']").click();



});