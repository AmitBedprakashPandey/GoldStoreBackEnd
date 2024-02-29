// userController.js
const State = require("../Model/StateModel");

exports.create = async (req, res) => {
  try {
    const statesData = State(req.body);
    const insertedCitys = await State.insertMany(statesData);
    res.status(200).json({ message: "save", data: insertedCitys });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await State.find(); // Fetch all data from the database
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const updateData = State(req.body);
  try {
    const updatedCity = await State.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedCity) {
      return res.status(404).json({ message: "not found" });
    }
    res.status(200).json({ message: "update", data: updatedCity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.delete = async (req, res) => {
  const Id = req.params.id;
  try {
    const deletedCity = await State.findByIdAndDelete(Id);
    if (!deletedCity) {
      return res.status(404).json({ message: "not found" });
    }
    res.status(200).json({ message: "delete", data: deletedCity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
