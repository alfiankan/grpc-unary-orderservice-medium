
import { OrderService } from "./services/OrderService";
import { Product } from "./entities/Product";
import { PaymentMethod } from "./paymentpb/payment_service_pb";

describe("test create order", () => {
    it("harus return string pay link", () => {
        
        const orderService = new OrderService()

        let p1 = new Product(1, "Mie Indomie", 1500)
        let p2 = new Product(2, "Kornet", 5000)
    
        const paymentLink = orderService.placeOrder(
            "GT903K", 
            Array<Product>(p1, p2), 
            PaymentMethod.SHOPEEPAY
        )
        return paymentLink.then(link => {
            console.log('payment link ==> ', link)
            expect(typeof link).toBe('string')

        })
        
    });
});

