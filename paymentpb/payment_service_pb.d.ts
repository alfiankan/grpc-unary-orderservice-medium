// package: service.paymentpb
// file: payment_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreatePaymentResponse extends jspb.Message { 
    getPaymentId(): string;
    setPaymentId(value: string): CreatePaymentResponse;
    getPaymentLink(): string;
    setPaymentLink(value: string): CreatePaymentResponse;

    hasExpired(): boolean;
    clearExpired(): void;
    getExpired(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpired(value?: google_protobuf_timestamp_pb.Timestamp): CreatePaymentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePaymentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePaymentResponse): CreatePaymentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePaymentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePaymentResponse;
    static deserializeBinaryFromReader(message: CreatePaymentResponse, reader: jspb.BinaryReader): CreatePaymentResponse;
}

export namespace CreatePaymentResponse {
    export type AsObject = {
        paymentId: string,
        paymentLink: string,
        expired?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreatePaymentRequest extends jspb.Message { 
    getOrderId(): string;
    setOrderId(value: string): CreatePaymentRequest;
    getTotalAmount(): number;
    setTotalAmount(value: number): CreatePaymentRequest;
    getPaymentMethod(): PaymentMethod;
    setPaymentMethod(value: PaymentMethod): CreatePaymentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePaymentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePaymentRequest): CreatePaymentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePaymentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePaymentRequest;
    static deserializeBinaryFromReader(message: CreatePaymentRequest, reader: jspb.BinaryReader): CreatePaymentRequest;
}

export namespace CreatePaymentRequest {
    export type AsObject = {
        orderId: string,
        totalAmount: number,
        paymentMethod: PaymentMethod,
    }
}

export enum PaymentMethod {
    BNI = 0,
    GOPAY = 1,
    SHOPEEPAY = 2,
    PAYPAL = 3,
    METAMASK = 4,
}
