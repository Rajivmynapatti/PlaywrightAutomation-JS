const{expect} = require("@playwright/test")

let orderID;
class ThankYouPage{


    constructor(page){

        this.page = page;
        this.successText = page.locator("h1.hero-primary");
        this.grabOrder = page.locator("td.em-spacer-1 label");
        this.orderHistorylink = page.locator("button[routerlink*='myorders']");
        this.rows = page.locator("tbody tr");
        this.orderIdDetails = page.locator(".col-text");

    }

    async assertThankYouPageMessage()
    {
        const asserttext = await this.successText;
       await expect(asserttext).toHaveText(" Thankyou for the order. ")

    }

    async grabOrderID(){

        await this.page.waitForLoadState('networkidle');

        orderID = await this.grabOrder.last().textContent();
        console.log("The orderID is " + orderID);
        return orderID;

    }

    async matchOrderIDAndClickView(){
        
        await this.orderHistorylink.click();
        await this.page.locator("tbody").waitFor();

    //Scan through the rows of the orders table and get the count
    const rowOrderData = await this.rows;
    const rowcount = await rowOrderData.count();
    console.log("Total number of products in the order tables are " + rowcount);
   
    //Using for loop, we will traves through the rows and will first fetch the orderID and if found then will click on the same rows-> View button
    for (let i = 0; i < await this.rows.count(); ++i) {

        const rowOrderID = await this.rows.nth(i).locator("th").textContent();

        if (orderID.includes(rowOrderID)) {
            await this.rows.nth(i).locator("button").first().click();
            console.log("View button clicked");
            break;
        }

    }
    }

    


}
module.exports = {ThankYouPage};