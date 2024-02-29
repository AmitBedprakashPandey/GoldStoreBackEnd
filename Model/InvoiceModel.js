// customerModel.js

const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  branch: {
    type: String,
  },
  user: { type: String },
  quot: {
    type: Number,
  },
  quotdate: {
    type: Date,
  },
  customer: {
    type: String,
  },
  invoice: [],
  mode: { type: String },
  bank: { type: String },
  pycheq: { type: Number },
  tamt: { type: Number },
  ttax: { type: Number },
  tdisc: { type: Number },
  gtotal: { type: Number },
  paidamt: { type: Number },
  balamt: { type: Number },
  status: { type: Boolean },
});

const Invoice = mongoose.model("invoice", invoiceSchema);

module.exports = Invoice;
