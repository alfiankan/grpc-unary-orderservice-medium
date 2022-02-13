"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderService_1 = require("./services/OrderService");
var Product_1 = require("./entities/Product");
var payment_service_pb_1 = require("./paymentpb/payment_service_pb");
describe("test create order", function () {
    it("harus return string pay link", function () {
        var orderService = new OrderService_1.OrderService();
        var p1 = new Product_1.Product(1, "Mie Indomie", 1500);
        var p2 = new Product_1.Product(2, "Kornet", 5000);
        var paymentLink = orderService.placeOrder("GT903K", Array(p1, p2), payment_service_pb_1.PaymentMethod.SHOPEEPAY);
        return paymentLink.then(function (link) {
            console.log('payment link ==> ', link);
            expect(typeof link).toBe('string');
        });
    });
});
//# sourceMappingURL=createorder.test.js.map