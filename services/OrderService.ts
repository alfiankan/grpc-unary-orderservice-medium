import { Product } from "../entities/Product"
import { PaymentClient } from "../paymentpb/payment_service_grpc_pb"
import { ChannelCredentials } from '@grpc/grpc-js';
import { CreatePaymentRequest, CreatePaymentResponse, PaymentMethod } from "../paymentpb/payment_service_pb";
import { v4 as uuidv4 } from "uuid";
import { promisify } from "util";

class OrderService {

    private paymentServiceRpc: PaymentClient

    constructor() {
        // membuat client object dengan insecure connection/ tanpa SSL/TLS
        this.paymentServiceRpc = new PaymentClient(
           "localhost:3000", 
           ChannelCredentials.createInsecure()
        )
    }

    async createPayment(orderID: string, paymentMethod: PaymentMethod, total: number): Promise<any> {

        let request = new CreatePaymentRequest()
        request.setOrderId(orderID)
        request.setPaymentMethod(paymentMethod)
        request.setTotalAmount(total)

        return new Promise((resolve, reject) => {
            // memanggil method/function createPayment di aplikasi payment service
            this.paymentServiceRpc.createPayment(request, (err, response) => {
                if (err) {
                    reject(err)
                } else {
                    // mengambil data payment link
                    resolve(response.getPaymentLink())
                }
            })
        });
    }

    placeOrder(userID: string, items: Array<Product>, paymentMethod: PaymentMethod): Promise<any> {
        
        // use case membuat order (ilustrasi)
        let orderID = uuidv4()
        let total = 0
        items.map(item => {
            total += item.price
        })
        // jika tanpa error maka akan mengambil data payment link

        return this.createPayment(orderID, paymentMethod, total)
        
    }

}

export {OrderService}