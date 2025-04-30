const { expect } = require("@playwright/test")

class APIsUtils {


    constructor(apiContext, loginPayLoad) {

        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }

    async getToken(loginPayLoad) {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayLoad
            }
        )
        expect(loginResponse.ok()).toBeTruthy();
        const loginResponseJson = await loginResponse.json();
        const loginToken = loginResponseJson.token;
        console.log(loginToken);
        return loginToken;
    }

    async createOrder(orderPayLoad) {

        let response = {};
        response.token = await this.getToken();


        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayLoad,
                headers: {
                    'Authorization': response.token,
                    'Content-Type': 'application/json'
                },
            }
        )
        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
        const orderID = orderResponseJson.orders[0];
        const orderMessage = orderResponseJson.message;
        response.orderID = orderID;

        await expect(orderMessage).toContain("Order Placed Successfully");
        return response;
    }
}
module.exports = { APIsUtils };