// customerModel.js

const mongoose = require("mongoose");

const BankSchema = new mongoose.Schema({
bank: {
    type: String,
    maxLength: 255,
  },
user:{type:String}
});

const Bank = mongoose.model("bank", BankSchema);

module.exports = Bank;
