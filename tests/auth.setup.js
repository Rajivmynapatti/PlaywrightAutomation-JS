import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('Authnticate first', async ({ page }) => {

    const url = "https://rahulshettyacademy.com/client";
    const username = "rajiv2@grr.la";
    const password = "Test@1234";

    await page.goto(url);
    await page.locator("#userEmail").fill(username);
    await page.locator("#userPassword").fill(password);

    await page.locator("#login").click();

    await page.waitForURL("https://rahulshettyacademy.com/client/dashboard/dash");


    await page.context().storageState({ path: authFile });


})
