// userController.js
const Invoice = require("../Model/InvoiceWithoutGSTModel");
exports.create = async (req, res) => {
  try {
    const statesData = Invoice(req.body);
    const insertedCitys = await Invoice.create(statesData);
    res.status(200).json({ message: "create ", data: insertedCitys });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Invoice.find({ user: req.params.user }); // Fetch all data from the database
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const data = await Invoice.findOne({
      quot: req.params.quot,
      user: req.params.user,
    }); // Fetch all data from the database

    if (data === null) {
      return res.status(200).json({ message: "Not Found" });
    }
    res.status(200).json({ data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;

  const updateData = Invoice(req.body);
  try {
    const updatedCity = await Invoice.findOneAndUpdate(
      { _id: id, user: req.params.user },
      updateData,
      {
        new: true,
      }
    );
    if (!updatedCity) {
      return res.status(404).json({ message: "not found" });
    }
    res.status(200).json({ message: "update ", data: updatedCity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.delete = async (req, res) => {
  const Id = req.params.id;
  try {
    const deletedCity = await Invoice.findOneAndDelete({
      _id: Id,
      user: req.params.user,
    });
    if (!deletedCity) {
      return res.status(404).json({ message: "not found" });
    }
    res.status(200).json({ message: "delete ", data: deletedCity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
