// customerModel.js

const mongoose = require("mongoose");

const InvoiceIdGenraterSchema = new mongoose.Schema({
  number: { type: Number,
    maxLength: 8,
  },
  companyid: { type: String },
});

const InvoiceIdGenrater = mongoose.model("numbergst", InvoiceIdGenraterSchema);

module.exports = InvoiceIdGenrater;
