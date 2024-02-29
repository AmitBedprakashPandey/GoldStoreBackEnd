// userController.js
const Customer = require("../Model/CustomerModel");

exports.create = async (req, res) => {
  try {    
    const statesData = Customer(req.body);
    const insertedCitys = await Customer.create(statesData);
    res
      .status(200)
      .json({ message: "create ", data: insertedCitys });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Customer.find({user:req.params.user}); // Fetch all data from the database
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
};

exports.update = async (req, res) => {
  const id= req.params.id;
  const updateData = Customer(req.body);
  try {
    const updatedCity = await Customer.findByIdAndUpdate(id,updateData, {
      new: true,
    });
    if (!updatedCity) {
      return res.status(404).json({ message: "not found" });
    }
    res
      .status(200)
      .json({ message: "update ", data: updatedCity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.delete = async (req, res) => {
  const Id = req.params.id;
  try {
    const deletedCity = await Customer.findByIdAndDelete(Id);
    if (!deletedCity) {
      return res.status(404).json({ message: "not found" });
    }
    res
      .status(200)
      .json({ message: "delete ", data: deletedCity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
