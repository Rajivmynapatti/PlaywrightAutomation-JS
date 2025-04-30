const { DashboardPage } = require("./DashboardPage");
const {LoginPage} = require("./LoginPage");
const {MyCartPage} = require("./MyCartPage");
const{PlaceOrderPage} = require("./PlaceOrderPage");
const{ThankYouPage} = require("./ThankYouPage");
const{OrderSummaryPage} = require("./OrderSummaryPage");
const{UIBasicPage} = require("./UIBasicPage");


class PageObjectManager{


    constructor(page){

        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.myCartPage = new MyCartPage(this.page);

        this.placeOrderPage = new PlaceOrderPage(this.page);

        this.thankyouPage = new ThankYouPage(this.page);
        this.orderSummaryPage = new OrderSummaryPage(this.page);
        this.uiBasicPage = new UIBasicPage(this.page);

    }

    getLogin (){
        return this.loginPage;

    }
    getDashboard(){

        return this.dashboardPage;
    }
    getmyCartPage(){

        return this.myCartPage;
    }
    getplaceOrderPage(){

        return this.placeOrderPage;
    }
    getthankyouPage(){

        return this.thankyouPage;
    }
    getorderSummaryPage(){

        return this.orderSummaryPage;
    }
    getuiBasicPage(){

        return this.uiBasicPage;
    }

   

}
module.exports = {PageObjectManager};