const { test, expect, request } = require("@playwright/test");
const{APIsUtils} = require("../Utils/APIsUtils");

const loginPayLoad = { userEmail: "rajiv2@grr.la", userPassword: "Test@1234" };
const orderPayLoad = {orders: [{country: "India", productOrderedId: "67a8df1ac0d3e6622a297ccb"}]};

let response;

test.beforeAll( async () => {
    const apiContext = await request.newContext();
  
    const apiUtils = new APIsUtils(apiContext, loginPayLoad);
    response =  await apiUtils.createOrder(orderPayLoad);

})

test("Login with API and Perform Web Testing", async ({ page }) => {

    page.addInitScript(value => 
    {
     window.localStorage.setItem('token', value);
    }, 
    response.token);

    await page.goto("https://rahulshettyacademy.com/client/");

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
        if (response.orderID.includes(rowOrderID)) {
            await rowOrderData.nth(i).locator("button").first().click();
            console.log("View button clicked");
            break;
        }

    }
    await page.pause();


})