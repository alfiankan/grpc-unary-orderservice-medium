// source: payment_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.service.paymentpb.CreatePaymentRequest', null, global);
goog.exportSymbol('proto.service.paymentpb.CreatePaymentResponse', null, global);
goog.exportSymbol('proto.service.paymentpb.PaymentMethod', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.paymentpb.CreatePaymentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.paymentpb.CreatePaymentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.paymentpb.CreatePaymentResponse.displayName = 'proto.service.paymentpb.CreatePaymentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.paymentpb.CreatePaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.paymentpb.CreatePaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.paymentpb.CreatePaymentRequest.displayName = 'proto.service.paymentpb.CreatePaymentRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.paymentpb.CreatePaymentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.paymentpb.CreatePaymentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.paymentpb.CreatePaymentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.paymentpb.CreatePaymentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paymentLink: jspb.Message.getFieldWithDefault(msg, 2, ""),
    expired: (f = msg.getExpired()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.paymentpb.CreatePaymentResponse}
 */
proto.service.paymentpb.CreatePaymentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.paymentpb.CreatePaymentResponse;
  return proto.service.paymentpb.CreatePaymentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.paymentpb.CreatePaymentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.paymentpb.CreatePaymentResponse}
 */
proto.service.paymentpb.CreatePaymentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentLink(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpired(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.paymentpb.CreatePaymentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.paymentpb.CreatePaymentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.paymentpb.CreatePaymentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.paymentpb.CreatePaymentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaymentLink();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExpired();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string payment_id = 1;
 * @return {string}
 */
proto.service.paymentpb.CreatePaymentResponse.prototype.getPaymentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.paymentpb.CreatePaymentResponse} returns this
 */
proto.service.paymentpb.CreatePaymentResponse.prototype.setPaymentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payment_link = 2;
 * @return {string}
 */
proto.service.paymentpb.CreatePaymentResponse.prototype.getPaymentLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.paymentpb.CreatePaymentResponse} returns this
 */
proto.service.paymentpb.CreatePaymentResponse.prototype.setPaymentLink = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp expired = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.paymentpb.CreatePaymentResponse.prototype.getExpired = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.paymentpb.CreatePaymentResponse} returns this
*/
proto.service.paymentpb.CreatePaymentResponse.prototype.setExpired = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.paymentpb.CreatePaymentResponse} returns this
 */
proto.service.paymentpb.CreatePaymentResponse.prototype.clearExpired = function() {
  return this.setExpired(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.paymentpb.CreatePaymentResponse.prototype.hasExpired = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.paymentpb.CreatePaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.paymentpb.CreatePaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.paymentpb.CreatePaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.paymentpb.CreatePaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    totalAmount: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    paymentMethod: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.paymentpb.CreatePaymentRequest}
 */
proto.service.paymentpb.CreatePaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.paymentpb.CreatePaymentRequest;
  return proto.service.paymentpb.CreatePaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.paymentpb.CreatePaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.paymentpb.CreatePaymentRequest}
 */
proto.service.paymentpb.CreatePaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTotalAmount(value);
      break;
    case 3:
      var value = /** @type {!proto.service.paymentpb.PaymentMethod} */ (reader.readEnum());
      msg.setPaymentMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.paymentpb.CreatePaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.paymentpb.CreatePaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.paymentpb.CreatePaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.paymentpb.CreatePaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTotalAmount();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getPaymentMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.service.paymentpb.CreatePaymentRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.paymentpb.CreatePaymentRequest} returns this
 */
proto.service.paymentpb.CreatePaymentRequest.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float total_amount = 2;
 * @return {number}
 */
proto.service.paymentpb.CreatePaymentRequest.prototype.getTotalAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.service.paymentpb.CreatePaymentRequest} returns this
 */
proto.service.paymentpb.CreatePaymentRequest.prototype.setTotalAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional PaymentMethod payment_method = 3;
 * @return {!proto.service.paymentpb.PaymentMethod}
 */
proto.service.paymentpb.CreatePaymentRequest.prototype.getPaymentMethod = function() {
  return /** @type {!proto.service.paymentpb.PaymentMethod} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.service.paymentpb.PaymentMethod} value
 * @return {!proto.service.paymentpb.CreatePaymentRequest} returns this
 */
proto.service.paymentpb.CreatePaymentRequest.prototype.setPaymentMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.service.paymentpb.PaymentMethod = {
  BNI: 0,
  GOPAY: 1,
  SHOPEEPAY: 2,
  PAYPAL: 3,
  METAMASK: 4
};

goog.object.extend(exports, proto.service.paymentpb);
