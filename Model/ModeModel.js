// customerModel.js

const mongoose = require("mongoose");

const ModeSchema = new mongoose.Schema({
mode: {
    type: String,
    maxLength: 255,
  },
user:{type:String}
});

const Mode = mongoose.model("mode", ModeSchema);

module.exports = Mode;
