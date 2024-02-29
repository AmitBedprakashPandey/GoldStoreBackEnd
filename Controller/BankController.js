// userController.js
const Bank = require("../Model/BankModel");

exports.create = async (req, res) => {
  try {    
    const data = Bank(req.body);
    const insert = await Bank.create(data);
    res
      .status(200)
      .json({ message: "save", data: insert });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Bank.find({user:req.params.user}); // Fetch all data from the database
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
};

exports.update = async (req, res) => {
  const id= req.params.id;
  const user= req.params.user;
  const updateData = Bank(req.body);
  try {
    const updatedCity = await Bank.findOneAndUpdate({_id:id,user:user},updateData, {
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
  const user = req.params.user;
  try {
    const deletes = await Bank.findOneAndDelete({_id:Id,user:user});
    if (!deletes) {
      return res.status(404).json({ message: "not found" });
    }
    res
      .status(200)
      .json({ message: "delete", data: deletes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
