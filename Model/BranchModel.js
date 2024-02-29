// customerModel.js

const mongoose = require("mongoose");

const BranchSchema = new mongoose.Schema({
  branch: {
    type: String,
    maxLength: 255,
  },
  user:{type:String}
});

const Branch = mongoose.model("Branch", BranchSchema);

module.exports = Branch;
