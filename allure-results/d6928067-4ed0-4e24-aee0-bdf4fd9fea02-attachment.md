# Test info

- Name: Registeration of the user
- Location: /Users/rrajivkumar/PlayWrightAutomation/tests/Assignment1.spec.js:3:1

# Error details

```
Error: locator.textContent: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('div h1.headcolor')

    at /Users/rrajivkumar/PlayWrightAutomation/tests/Assignment1.spec.js:21:56
```

# Page snapshot

```yaml
- banner:
  - text: Ecom
  - link " dummywebsite@rahulshettyacademy.com":
    - /url: emailto:dummywebsite@rahulshettyacademy.com
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
- heading "We Make Your Shopping Simple" [level=3]
- heading "Practice Website for Rahul Shetty Academy Students" [level=1]:
  - text: Practice Website for
  - emphasis: Rahul Shetty Academy
  - text: Students
- link "Register":
  - /url: /client/auth/register
- heading "Register" [level=1]
- text: First Name
- textbox "First Name": Rajiv
- text: Last Name
- textbox "Last Name": Kumar
- text: Email
- textbox "email@example.com": rajiv11@grr.la
- text: Phone Number
- textbox "enter your number": "1234567890"
- text: Occupation
- combobox:
  - option "Choose your occupation" [disabled]
  - option "Doctor"
  - option "Student"
  - option "Engineer" [selected]
  - option "Scientist"
- text: Gender
- radio "Male" [checked]
- text: Male
- radio "Female"
- text: Female Password
- textbox "Passsword": Test@1234
- text: Confirm Password
- textbox "Confirm Password": Test@1234
- checkbox [checked]
- text: I am 18 year or Older
- button "Register"
- paragraph: Already have an account? Login here
- heading "Why People Choose Us?" [level=1]
- text: 
- heading "3546540" [level=1]
- paragraph: Successfull Orders
- text: 
- heading "37653" [level=1]
- paragraph: Customers
- text: 
- heading "3243" [level=1]
- paragraph: Sellers
- text: 
- heading "4500+" [level=1]
- paragraph: Daily Orders
- text: 
- heading "500+" [level=1]
- paragraph: Daily New Customer Joining
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test')
   2 |
   3 | test("Registeration of the user", async ({ page }) => {
   4 |     await page.goto("https://rahulshettyacademy.com/client");
   5 |     await page.locator('.text-reset').click();
   6 |     await page.locator('#firstName').fill("Rajiv");
   7 |     await page.locator('#lastName').fill("Kumar");
   8 |     await page.locator('#userEmail').fill("rajiv11@grr.la");
   9 |     await page.locator('#userMobile').fill("1234567890");
  10 |     await page.locator("[formcontrolname='occupation']").selectOption("3: Engineer");
  11 |     await page.locator("[value='Male']").check();
  12 |     expect(page.locator("[value='Male']")).toBeChecked();
  13 |     console.log("Gender checked as Male true/false: " + await page.locator("[value='Male']").isChecked());
  14 |     //await page.pause();
  15 |
  16 |     await page.locator('#userPassword').fill("Test@1234");
  17 |     await page.locator('#confirmPassword').fill("Test@1234");
  18 |     await page.locator("[type='checkbox']").check();
  19 |     await page.locator("[value='Register']").click();
  20 |
> 21 |     console.log(await page.locator('div h1.headcolor').textContent());
     |                                                        ^ Error: locator.textContent: Test timeout of 40000ms exceeded.
  22 |     await page.locator('.btn.btn-primary').click();
  23 |
  24 | }
  25 |
  26 | );
  27 |
  28 | test("Login", async ({ browser, page }) => {
  29 |     await page.goto("https://rahulshettyacademy.com/client");
  30 |     const blinkinglink = page.locator('p.demo label');
  31 |     await expect(blinkinglink).toHaveAttribute("class", "blink_me");
  32 |     await page.locator('#userEmail').fill("rajiv2@grr.la");
  33 |     await page.locator('#userPassword').fill("Test@1234");
  34 |     await page.locator('#login').click();
  35 |     console.log("User Logged In successfully");
  36 |     console.log(await page.title());
  37 |
  38 |     // await page.waitForLoadState('networkidle'); // this is used to check for the locator after all the network calls is completed.
  39 |     await page.locator('.card-body b').first().waitFor(); //WaitFor() method is used to wait for a particular locator to be available in the page but it is used if the locator returns only one element but not work if locator returns multiple element.
  40 |     const allProductTitles = await page.locator('.card-body b').allTextContents();
  41 |     console.log(allProductTitles);
  42 |
  43 |     const firstProductName = await page.locator('.card-body b').first().textContent();
  44 |     console.log(firstProductName);
  45 |
  46 |     await page.locator('.btn.btn-custom').last().click();
  47 |     console.log("User Logged Out successfully");
  48 |
  49 |
  50 | }
  51 | )   
  52 |
```