const { test, expect } = require('@playwright/test');
const exp = require('constants');

test.skip("E2E test", async ({ page }) => {
    const productName = "IPHONE 13 PRO";
    const allProducts = page.locator("div.card-body");

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("rajiv2@grr.la");
    await page.locator("#userPassword").fill("Test@1234");
    await page.locator("#login").click();

    await page.waitForLoadState('networkidle');

    const titles = await page.locator('div.card-body b').allTextContents();
    console.log(titles);

    const count = await allProducts.count();
    console.log("The total count of the products are " + count);

    for (let i = 0; i < count; ++i) {
        if (await allProducts.nth(i).locator("b").textContent() === productName) {
            // await allProducts.nth(i).locator("text= Add To Cart").click();
            await allProducts.nth(i).locator('.btn.w-10.rounded').click();

            break;
        }

    }
    await page.locator('[routerlink*="cart"]').click();

    //the below code tell playwright to wait for the list of elements to be visible for that we are using waitfor();
    await page.locator('div li').first().waitFor();

    const bool = await page.locator("//h3[text()='"+productName+"']").isVisible();
    expect(bool).toBeTruthy();

    await page.locator("text = Checkout").click();

    //Adding Personal information

    //CVV Code ?
    await page.locator(".input.txt").nth(1).fill("123");

    //Expiry date:
    await page.locator(".input.ddl").first().selectOption("10");
    await page.locator(".input.ddl").last().selectOption("26");

    //Name on Card
    await page.locator(".input.txt").nth(2).fill("Rajiv");

    //Apply Coupon text field
    await page.locator(".input.txt").nth(3).fill("rahulshettyacademy");

    //Apply coupon button
    await page.locator("[type='submit']").click();

    //Confirmation message for coupon applied
    await page.locator(".mt-1.ng-star-inserted").waitFor();
    const successMessage = await page.locator(".mt-1.ng-star-inserted").textContent();
    console.log(successMessage);


    const dropdownTextField = await page.locator("[placeholder='Select Country']");
    await dropdownTextField.pressSequentially('ind', { delay: 100 });
    const dropdown = await page.locator("section.ta-results");
    await dropdown.waitFor();
    const optionCount = await dropdown.locator("button").count();

    for (let i = 0; i < optionCount; ++i) {

        if (await dropdown.locator("button").nth(i).textContent() === " Indonesia") {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    //click on Place order button
    await page.locator("a.btnn").click();

    //Automating Order details page
    const asserttext = await page.locator("h1.hero-primary");
   await  expect(asserttext).toHaveText(" Thankyou for the order. ");

    //To grab the order ID
    const orderID = await page.locator("td.em-spacer-1 label").last().textContent();
    console.log("The orderID is " + orderID);



    // To click on the ORders button
    await page.locator("button[routerlink*='myorders']").click();

    //Wait to load all the data in the orders table
    await page.locator("tbody").waitFor();

    //Scan through the rows of the orders table and get the count
    const rowOrderData = await page.locator("tbody tr");
    const rowcount = await rowOrderData.count();
    console.log("Total number of products in the order tables are "+ rowcount);

    //Using for loop, we will traves through the rows and will first fetch the orderID and if found then will click on the same rows-> View button
    for (let i = 0; i < rowcount; ++i) {

        const rowOrderID = await rowOrderData.nth(i).locator("th").textContent();
        if (orderID.includes(rowOrderID)) {
            await rowOrderData.nth(i).locator("button").first().click();
            console.log("View button clicked");
            break;
        }

    }
    await page.pause();

    //Fetching the order ID from the order details page when user click on View button and then adding assestions.
    const orderDetailsID = await page.locator("div.col-text").textContent();
    expect(orderID.includes(orderDetailsID)).toBeTruthy();

}
);

