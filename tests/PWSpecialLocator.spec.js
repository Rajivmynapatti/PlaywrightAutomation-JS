import{test , expect}  from  "@playwright/test"

test("PlayWright Special Locator test", async({browser, page})=>
{
await page.goto("https://rahulshettyacademy.com/angularpractice/");
const title = await page.title();
console.log("This page title is "+ title);
await expect(page).toHaveTitle("ProtoCommerce");

const name = await page.locator("[name='name']").first();
await name.fill("Rajiv");
await page.locator("[name='email']").fill("Rajiv@grr.la");
await page.getByPlaceholder("Password").fill("Test@1234");

await page.getByRole("checkbox").check();
await expect(page.getByLabel("Check me out if you Love IceCreams!")).toBeChecked();

await page.locator("#exampleFormControlSelect1").selectOption("Male");

await page.getByLabel("Employed").check();
await expect(page.getByLabel("Employed")).toBeChecked();

const disabledButton = page.getByLabel('Entrepreneur (disabled)');
await expect(disabledButton).toBeDisabled();

await page.getByRole('button',{name:'Submit'}).click();

await page.locator("div.alert").waitFor();

// const alertTitle= await page.locator("div.alert").textContent();
// console.log(alertTitle);
// await expect(alertTitle).toContain("Success!")

const bool = await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
await expect(bool).toBeTruthy();

await page.getByRole("link",  {name: 'Shop'}).click();

const checkOut = await page.locator("div a.btn");


await page.locator("app-card.col-lg-3").filter({hasText: "Samsung Note 8"}).getByRole("button").click();


await checkOut.click();


//await page.pause();






}
)