class DashboardPage {


    constructor(page) {

        this.allProducts = page.locator("div.card-body");
        this.allProductsNames = page.locator("div.card-body b");
        this.cartButton = page.locator('[routerlink*="cart"]');

    }

    async searchProductAddCart(productName) {

        const titles = await this.allProductsNames.allTextContents();
        console.log(titles);

        const count = await this.allProducts.count();
        console.log("The total count of the products are " + count);

        for (let i = 0; i < count; ++i) {
            if (await this.allProducts.nth(i).locator("b").textContent() === productName) {
                // await allProducts.nth(i).locator("text= Add To Cart").click();
                await this.allProducts.nth(i).locator('.btn.w-10.rounded').click();
                break;
            }
        }
        
    }
    async clickCartButton(){
        await this.cartButton.click();

    }

}
module.exports = { DashboardPage };