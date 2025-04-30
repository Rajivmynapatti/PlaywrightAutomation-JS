const{test, expect} = require("@playwright/test")

test("Handling frames", async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const framePage = page.frameLocator("#courses-iframe");

    console.log("User has switched to frames");

    await framePage.locator("a[href='consulting']:visible").click();
    console.log("User has clicked button on frames");




})