class FlipkartLaunchPage{

    constructor(page){

        this.page = page;
        this.closeButton = page.locator("span[role='button']");
    }

        async goToURL(url){
            await this.page.goto(url);
        }

        async clickOnCloseButton(){

            await this.closeButton.click();

        }
}
module.exports = {FlipkartLaunchPage};
