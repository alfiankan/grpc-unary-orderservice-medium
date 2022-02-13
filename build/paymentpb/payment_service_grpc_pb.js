// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var payment_service_pb = require('./payment_service_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_service_paymentpb_CreatePaymentRequest(arg) {
  if (!(arg instanceof payment_service_pb.CreatePaymentRequest)) {
    throw new Error('Expected argument of type service.paymentpb.CreatePaymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_paymentpb_CreatePaymentRequest(buffer_arg) {
  return payment_service_pb.CreatePaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_paymentpb_CreatePaymentResponse(arg) {
  if (!(arg instanceof payment_service_pb.CreatePaymentResponse)) {
    throw new Error('Expected argument of type service.paymentpb.CreatePaymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_paymentpb_CreatePaymentResponse(buffer_arg) {
  return payment_service_pb.CreatePaymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PaymentService = exports.PaymentService = {
  createPayment: {
    path: '/service.paymentpb.Payment/CreatePayment',
    requestStream: false,
    responseStream: false,
    requestType: payment_service_pb.CreatePaymentRequest,
    responseType: payment_service_pb.CreatePaymentResponse,
    requestSerialize: serialize_service_paymentpb_CreatePaymentRequest,
    requestDeserialize: deserialize_service_paymentpb_CreatePaymentRequest,
    responseSerialize: serialize_service_paymentpb_CreatePaymentResponse,
    responseDeserialize: deserialize_service_paymentpb_CreatePaymentResponse,
  },
};

exports.PaymentClient = grpc.makeGenericClientConstructor(PaymentService);
