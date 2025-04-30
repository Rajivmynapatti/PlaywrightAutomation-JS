const{FlipkartLaunchPage} = require("./FlipkartLaunchPage");
const{FlipkartSearchPage} = require("./FlipkartSearchPage");
const {FlipkarProductDetailsPage} = require("./FlipkartProductDetailsPage");


class FKPageObjectManager{


    constructor(page, context){

        this.page = page;
        this.context = context;
        this.fkhomePage = new FlipkartLaunchPage(this.page);
        this.fksearchPage = new FlipkartSearchPage(this.page, this.context);
        this.fkProductDetailsPage = new FlipkarProductDetailsPage(this.page);

    }

    getHomePage(){
        return this.fkhomePage;
    }

    getSearchPage(){
        return this.fksearchPage;
    }

    getProductDetailsPage(){

        return this.fkProductDetailsPage;
    }

}
module.exports= {FKPageObjectManager};