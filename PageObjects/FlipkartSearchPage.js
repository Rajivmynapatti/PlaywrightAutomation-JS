const { test, expect } = require("@playwright/test");

class FlipkartSearchPage {


    constructor(page, context) {
        this.page = page;
        this.context = context;
        this.searchTextBox = page.locator("input[name='q']");
        this.searchButton = page.locator("button[type='submit']");
    }


    async enterTextOnSearchBox(productName) {
        await this.searchTextBox.fill(productName);
    }

    async clickSearchButton() {
        await this.searchButton.click();

    }

    async assertSearchTextBox(productName) {

        await this.page.waitForLoadState('networkidle');
        const text = await this.searchTextBox.textContent();
        console.log(text);
        //await expect(this.searchTextBox).toHaveText(productName);
    }

    async grabProductListAndClickProductName() {

        await this.page.locator(".BUOuZu").waitFor();

        const allSearchProducts = await this.page.locator(".col.col-7-12");
        const firstProduct = allSearchProducts.locator(".KzDlHZ");

        const pagePromise = this.context.waitForEvent('page');
        await firstProduct.first().click();


        const childwindowElement = await pagePromise;

        await this.page.waitForLoadState('networkidle');

        await childwindowElement.locator(".VU-ZEz").textContent();
        const title = await childwindowElement.title();
        console.log(title);
        //console.log("switched to child window");

        // const buttons = await childwindowElement.locator("ul.row");
        // await buttons.locator('li').last().click();

        await childwindowElement.locator('ul.row li button.In9uk2').waitFor();
        await childwindowElement.getByRole('button', { name: 'Buy now' });

        await childwindowElement.getByPlaceholder('Enter Delivery Pincode').fill('560060');

        await childwindowElement.locator('span.i40dM4').click();

        const deliveryStatus = await childwindowElement.locator(".hVvnXm").textContent();
        console.log(deliveryStatus);

        //await childwindowElement.waitForLoadState('networkidle');


        // await childwindowElement.locator("a[href*=viewcart]").click();

    }
}
module.exports = { FlipkartSearchPage };
