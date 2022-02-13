// package: service.paymentpb
// file: payment_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as payment_service_pb from "./payment_service_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IPaymentService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPayment: IPaymentService_ICreatePayment;
}

interface IPaymentService_ICreatePayment extends grpc.MethodDefinition<payment_service_pb.CreatePaymentRequest, payment_service_pb.CreatePaymentResponse> {
    path: "/service.paymentpb.Payment/CreatePayment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<payment_service_pb.CreatePaymentRequest>;
    requestDeserialize: grpc.deserialize<payment_service_pb.CreatePaymentRequest>;
    responseSerialize: grpc.serialize<payment_service_pb.CreatePaymentResponse>;
    responseDeserialize: grpc.deserialize<payment_service_pb.CreatePaymentResponse>;
}

export const PaymentService: IPaymentService;

export interface IPaymentServer {
    createPayment: grpc.handleUnaryCall<payment_service_pb.CreatePaymentRequest, payment_service_pb.CreatePaymentResponse>;
}

export interface IPaymentClient {
    createPayment(request: payment_service_pb.CreatePaymentRequest, callback: (error: grpc.ServiceError | null, response: payment_service_pb.CreatePaymentResponse) => void): grpc.ClientUnaryCall;
    createPayment(request: payment_service_pb.CreatePaymentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: payment_service_pb.CreatePaymentResponse) => void): grpc.ClientUnaryCall;
    createPayment(request: payment_service_pb.CreatePaymentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: payment_service_pb.CreatePaymentResponse) => void): grpc.ClientUnaryCall;
}

export class PaymentClient extends grpc.Client implements IPaymentClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createPayment(request: payment_service_pb.CreatePaymentRequest, callback: (error: grpc.ServiceError | null, response: payment_service_pb.CreatePaymentResponse) => void): grpc.ClientUnaryCall;
    public createPayment(request: payment_service_pb.CreatePaymentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: payment_service_pb.CreatePaymentResponse) => void): grpc.ClientUnaryCall;
    public createPayment(request: payment_service_pb.CreatePaymentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: payment_service_pb.CreatePaymentResponse) => void): grpc.ClientUnaryCall;
}
