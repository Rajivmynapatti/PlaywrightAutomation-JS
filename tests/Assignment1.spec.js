const { test, expect } = require('@playwright/test')

test("Registeration of the user", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('.text-reset').click();
    await page.locator('#firstName').fill("Rajiv");
    await page.locator('#lastName').fill("Kumar");
    await page.locator('#userEmail').fill("rajiv14@grr.la");
    await page.locator('#userMobile').fill("1234567890");
    await page.locator("[formcontrolname='occupation']").selectOption("3: Engineer");
    await page.locator("[value='Male']").check();
    expect(page.locator("[value='Male']")).toBeChecked();
    console.log("Gender checked as Male true/false: " + await page.locator("[value='Male']").isChecked());
    //await page.pause();

    await page.locator('#userPassword').fill("Test@1234");
    await page.locator('#confirmPassword').fill("Test@1234");
    await page.locator("[type='checkbox']").check();
    await page.locator("[value='Register']").click();

    console.log(await page.locator('div h1.headcolor').textContent());
    await page.locator('.btn.btn-primary').click();

}

);

test("Login", async ({ browser, page }) => {
    await page.goto("https://rahulshettyacademy.com/client");
    const blinkinglink = page.locator('p.demo label');
    await expect(blinkinglink).toHaveAttribute("class", "blink_me");
    await page.locator('#userEmail').fill("rajiv2@grr.la");
    await page.locator('#userPassword').fill("Test@1234");
    await page.locator('#login').click();
    console.log("User Logged In successfully");
    console.log(await page.title());

    // await page.waitForLoadState('networkidle'); // this is used to check for the locator after all the network calls is completed.
    await page.locator('.card-body b').first().waitFor(); //WaitFor() method is used to wait for a particular locator to be available in the page but it is used if the locator returns only one element but not work if locator returns multiple element.
    const allProductTitles = await page.locator('.card-body b').allTextContents();
    console.log(allProductTitles);

    const firstProductName = await page.locator('.card-body b').first().textContent();
    console.log(firstProductName);

    await page.locator('.btn.btn-custom').last().click();
    console.log("User Logged Out successfully");


}
)   
