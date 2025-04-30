const {expect} = require("@playwright/test");

class MyCartPage {

    constructor(page, expect) {

        this.page = page;
        this.expect = expect;

        this.allCartItems = page.locator('div li');
        this.checkoutButton = page.locator("text = Checkout");

    }

    async verifyProductText(productName) {

        await this.allCartItems.first().waitFor();
        const bool = await this.page.locator("//h3[text()='" + productName + "']").isVisible();
       await expect(bool).toBeTruthy();
    }
    async clickCheckOut() {

        await this.checkoutButton.click();


    }

}
module.exports = { MyCartPage };