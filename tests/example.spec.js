import { test } from '@playwright/test';

test("already authticate user" , async({page}) =>{

   //await page.goto("https://rahulshettyacademy.com/client/dashboard/dash");

   await page.screenshot({path: "thisisbug.png"});
   await page.locator(".btn.btn-custom").nth(3).click();
   
   console.log("clicked");

    

})
