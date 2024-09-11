const mongoose = require("mongoose");

const LivePriceSchema = new mongoose.Schema({
  date: { type: String },
  price: { type: Array },
  status: { type: Boolean },
  companyId : {type:String}
});

const LivePrice = mongoose.model("liveprice", LivePriceSchema);

module.exports = LivePrice;
