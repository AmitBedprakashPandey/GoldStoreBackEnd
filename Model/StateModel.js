// customerModel.js

const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema({
  state: {
    type: String,
    maxLength: 255,
  },  
});

const state= mongoose.model("state",StateSchema);

module.exports = state;
