// userController.js
const Branch = require("../Model/BranchModel");

exports.create = async (req, res) => {
  try {    
    const statesData = Branch(req.body);
    const insertedCitys = await Branch.create(statesData);
    res
      .status(200)
      .json({ message: "save", data: insertedCitys });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Branch.find({user:req.params.user}); // Fetch all data from the database
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
};

exports.update = async (req, res) => {
  const id= req.params.id;
  const updateData = Branch(req.body);
  try {
    const updatedCity = await Branch.findByIdAndUpdate(id,updateData, {
      new: true,
    });
    if (!updatedCity) {
      return res.status(404).json({ message: "not found" });
    }
    res
      .status(200)
      .json({ message: "update", data: updatedCity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.delete = async (req, res) => {
  const Id = req.params.id;
  try {
    const deletedCity = await Branch.findByIdAndDelete(Id);
    if (!deletedCity) {
      return res.status(404).json({ message: "not found" });
    }
    res
      .status(200)
      .json({ message: "delete", data: deletedCity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
