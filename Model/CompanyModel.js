const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: { type: String },
  user: { type: String },
  address: { type: String },
  state: { type: String },
  city: { type: String },
  pincode: { type: String },
  office: { type: String },
  mobile: { type: String },
  email: { type: String },
  pan: { type: String },
  gst: { type: String },
  logo: { type: String },
  signa: { type: String },
  ownerimg: { type: String },
  owner: { type: String },
  youtube: { type: String },
  facebook: { type: String },
  whatsapp: { type: String },
  insta: { type: String },
  map: { type: String },
  banner: { type: [String], default: [] },
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
