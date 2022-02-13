import express from "express"
import { Product } from "./entities/Product"
import { PaymentMethod } from "./paymentpb/payment_service_pb"
import { OrderService } from "./services/OrderService"


function main() {
    const server = express()
    const orderService = new OrderService()
    // buat endpoint post
    server.post("/order", (req, res) => {

        // fake default order

        let p1 = new Product(1, "Mie Indomie", 1500)
        let p2 = new Product(2, "Kornet", 5000)
    
        const paymentLink = orderService.placeOrder(
            "GT903K", 
            Array<Product>(p1, p2), 
            PaymentMethod.GOPAY
        ).then(paymentLink => {
            res.send({
                "success": true,
                "message": "Order Created",
                "data": {
                    "payment_link": paymentLink
                }
            })
        }).catch(err => {
            res.send({
                "success": false,
                "message": "Order Failed",
                "data": {
                    "payment_link": err
                }
            })
        })
        

    })

    server.listen("5000", () => {
        console.log("Order Service Started")
    })
}

main()