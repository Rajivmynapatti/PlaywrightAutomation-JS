class UIBasicPage {

    constructor(page) {


        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.signInButton = page.locator('.radius');
        this.logoutButton = page.locator('a.button');
    }
    async goToUrl(url) {
        await this.page.goto(url);

    }
    async UIvalidlogin(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
    }
    async logout() {
        await this.logoutButton.waitFor({ state: 'visible' }); // Ensures element is ready
        await this.logoutButton.click();
    }
}
module.exports = { UIBasicPage };
