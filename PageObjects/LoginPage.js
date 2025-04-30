class LoginPage{

    constructor(page){

        this.page = page;
        this.loginButton = page.locator("#login");
        this.username = page.locator("#userEmail");
        this.password = page.locator("#userPassword");

    }

    async goToURL(url){

        await this.page.goto(url);

    }

    async validLogin(Vemail, Vpassword){

        await this.username.fill(Vemail);
        await this.password.fill(Vpassword);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');



    }

}
module.exports = {LoginPage};