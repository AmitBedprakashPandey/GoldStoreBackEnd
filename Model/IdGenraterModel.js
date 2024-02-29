// customerModel.js

const mongoose = require("mongoose");

const InvoiceIdGenraterSchema = new mongoose.Schema({
  invoiceid: {
    type: Number,
    maxLength: 8,
  },
  user:{type:String}
});

const InvoiceIdGenrater = mongoose.model("invoiceid", InvoiceIdGenraterSchema);

module.exports = InvoiceIdGenrater;
