import { test, expect } from "@playwright/test"

//const{test, expect} = require("@playwright/test");

test('Calender handling', async ({ page }) => {
    const monthNumber = "3";
    const date = "15";
    const year = "2025";

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    await page.locator(".react-date-picker__inputGroup").click();

    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();

    await page.getByText(year).click();

    await page.locator(".react-calendar__year-view__months button").nth(Number(monthNumber) - 1).click();

    await page.locator("//abbr[text()='" + date + "']").click();

    await page.pause();

}
);