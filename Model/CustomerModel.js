// customerModel.js

const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: 255,
  },
  user: { type: String },
  address: {
    type: String,
    maxLength: 255,
  },
  state: {
    type: String,
    maxLength: 255,
  },
  city: {
    type: String,
    maxLength: 255,
  },
  pincode: {
    type: String,
    maxLength: 10,
  },
  mobile: {
    type: String,
    maxLength: 15,
  },
  phone: {
    type: String,
    maxLength: 15,
  },
  email: {
    type: String,
    maxLength: 255,
  },
  pan: {
    type: String,
    maxLength: 20,
  },
  gst: {
    type: String,
    maxLength: 20,
  },
  dob: {
    type: Date,
  },
  anndate: {
    type: Date,
  },
  date: {
    type: Date,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
