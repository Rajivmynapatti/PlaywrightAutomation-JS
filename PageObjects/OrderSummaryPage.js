const{expect}  = require('@playwright/test');
const{ThankYouPage} = require("./ThankYouPage");

let orderID;

class OrderSummaryPage{

    constructor(page){

        this.page = page;
        this.summaryorder = page.locator("div.col-text");
        this.productName = page.locator("div.title");

    }

    async assertOrderID (){
        
        await this.summaryorder.waitFor();
       
        const orderIDText = await this.summaryorder.textContent(); 

        console.log("summaryorderID " + orderIDText);

    
        // orderID = await thankspage.grabOrderID();

        // await expect(thankyou).includes(orderIDText);



          //Fetching the order ID from the order details page when user click on View button and then adding assestions.

    }

    // }
    async assertPurchaseProduct (productName){

      // const assertProductName =  await this.productName;
     
       console.log("summaryProductname " +await this.productName.textContent());

       await expect(this.productName).toHaveText(productName);
    }
}
module.exports = {OrderSummaryPage};