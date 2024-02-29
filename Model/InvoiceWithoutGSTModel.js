// customerModel.js

const mongoose = require("mongoose");

const invoiceWithoutGSTSchema = new mongoose.Schema({
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
  mode:{ type: String },
  bank:{ type: String },
  pycheq:{ type: Number },
  tamt: { type: Number },
  tdisc: { type: Number },
  gtotal: { type: Number },
  paidamt: { type: Number },
  balamt: { type: Number },
  status:{type:Boolean}
});

const invoiceWithoutGST = mongoose.model("invoiceWithoutGST", invoiceWithoutGSTSchema);

module.exports = invoiceWithoutGST;
