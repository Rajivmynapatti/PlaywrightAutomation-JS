const{test, expect} = require("@playwright/test")

test ("Assertion of locator", async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

const bool= await page.locator("#displayed-text").isVisible();
    expect(bool).toBeTruthy();


await page.locator("#hide-textbox").click();

expect(bool).toBeTruthy();

//To accept the alert dialog using dialog listners
page.on("dialog", dialog=> dialog.accept());

//To dismiss the alert dialog
//page.on("dialog", dialog=> dialog.dismiss());

await page.locator("#alertbtn").click();

await page.locator("#mousehover").hover();

await page.locator(".mouse-hover-content a").nth(0).click();







})