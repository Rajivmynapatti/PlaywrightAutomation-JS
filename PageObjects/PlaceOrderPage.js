class PlaceOrderPage {


    constructor(page) {

        //Adding Personal information
        //CVV Code ?
        this.enterCVV = page.locator(".input.txt");

        //Expiry date:
        this.selectMonthAndYear = page.locator(".input.ddl");
        //Name on Card
        this.enternameOnCard = page.locator(".input.txt");

        this.enterCouponCode = page.locator(".input.txt");

        this.applyCouponButton = page.locator("[type='submit']");

        this.couponAppliedText = page.locator(".mt-1.ng-star-inserted");

        this.selectCountry = page.locator("[placeholder='Select Country']");

        this.selectCountryList = page.locator("section.ta-results");

        this.placeOrderButton = page.locator("a.btnn");


    }


    async addPersonalAndShippingInformation(CVV, Month, Year, NameOnCard, CouponCode) {

        //CVV Code ?
        await this.enterCVV.nth(1).fill(CVV);

        //Expiry date:
        await this.selectMonthAndYear.first().selectOption(Month);
        await this.selectMonthAndYear.last().selectOption(Year);

        //Name on Card
        await this.enternameOnCard.nth(2).fill(NameOnCard);

        //Apply Coupon text field
        await this.enterCouponCode.nth(3).fill(CouponCode);

        //Apply coupon button
        await this.applyCouponButton.click();

        //Confirmation message for coupon applied
        await this.couponAppliedText.waitFor();
        const successMessage = await this.couponAppliedText.textContent();
        console.log(successMessage);

    }

    async SelectCountry(CountryName) {
        const dropdownTextField = await this.selectCountry;
        await dropdownTextField.pressSequentially('ind', { delay: 100 });
        const dropdown = await this.selectCountryList;
        await dropdown.waitFor();
        const optionCount = await dropdown.locator("button").count();

        for (let i = 0; i < optionCount; ++i) {

            if (await dropdown.locator("button").nth(i).textContent() === CountryName) {
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }

    }

    async clickPlaceOrderButton() {

        //click on Place order button
        await this.placeOrderButton.click();


    }
}
module.exports = { PlaceOrderPage };