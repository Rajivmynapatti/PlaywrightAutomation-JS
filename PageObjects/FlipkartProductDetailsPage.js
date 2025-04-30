
class FlipkarProductDetailsPage {


    constructor(page) {

        this.page = page;
        this.addToCartButton = page.locator("li button.QqFHMw");
        this.productName = page.locator("span.VU-ZEz");
        this.productPrice = page.locator("div.Nx9bqj.CxhGGd");
        this.buyNowButton = page.locator("li button.QqFHMw");

    }

    async clickAddToCart() {
        await this.page.waitForLoadState('networkidle');


        await this.addToCartButton.first().click();
    }

async clickBuyNowButton(){

    await this.buyNowButton.last().click();
}
}
module.exports = {FlipkarProductDetailsPage};