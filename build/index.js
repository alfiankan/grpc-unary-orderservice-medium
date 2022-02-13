"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Product_1 = require("./entities/Product");
var payment_service_pb_1 = require("./paymentpb/payment_service_pb");
var OrderService_1 = require("./services/OrderService");
function main() {
    var server = (0, express_1.default)();
    var orderService = new OrderService_1.OrderService();
    // buat endpoint post
    server.post("/order", function (req, res) {
        // fake default order
        var p1 = new Product_1.Product(1, "Mie Indomie", 1500);
        var p2 = new Product_1.Product(2, "Kornet", 5000);
        var paymentLink = orderService.placeOrder("GT903K", Array(p1, p2), payment_service_pb_1.PaymentMethod.GOPAY).then(function (paymentLink) {
            res.send({
                "success": true,
                "message": "Order Created",
                "data": {
                    "payment_link": paymentLink
                }
            });
        }).catch(function (err) {
            res.send({
                "success": false,
                "message": "Order Failed",
                "data": {
                    "payment_link": err
                }
            });
        });
    });
    server.listen("5000", function () {
        console.log("Order Service Started");
    });
}
main();
//# sourceMappingURL=index.js.map