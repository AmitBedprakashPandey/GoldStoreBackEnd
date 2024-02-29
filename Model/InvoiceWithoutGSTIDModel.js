// customerModel.js

const mongoose = require("mongoose");

const InvoiceWithoutGSTIdGenraterSchema = new mongoose.Schema({
  invoiceid: {
    type: Number,
    maxLength: 8,
  },
  user:{type:String}
});

const InvoiceIdGenrater = mongoose.model("invoicewithoutgstid", InvoiceWithoutGSTIdGenraterSchema);

module.exports = InvoiceIdGenrater;
