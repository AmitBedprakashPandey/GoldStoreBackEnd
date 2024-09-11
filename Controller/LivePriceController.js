// userController.js
const Model = require("../Model/LivePriceModel");
const CompanyModel = require("../Model/CompanyModel");

const Companyid = "66c81d6541ef1fc1211c1e63";

exports.create = async (req, res) => {
  try {
    const data = Model(req.body);
    const foudData = await Model.findOne({ status: true });

    if (foudData) {
      const updateData = await Model.findOneAndUpdate({ status: true }, { status: false });
      
      const insertedCitys = await Model.create(data);
      res.status(200).json({ message: "save", data: insertedCitys,update:updateData });
    } else {
      const insertedCitys = await Model.create(data);
      res.status(200).json({ message: "save", data: insertedCitys });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getCompany= async (req,res)=>{
    try {
        const data = await CompanyModel.find();
        res.status(200).json(data[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


exports.getLivePrice = async (req, res) => {
    try {
      const foudData = await Model.findOne({ status: true });
  
        res.status(200).json({data: foudData});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

exports.getAllLivePrice = async (req, res) => {
  try {
    const list = await Model.find();
    res.status(200).json(list);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


