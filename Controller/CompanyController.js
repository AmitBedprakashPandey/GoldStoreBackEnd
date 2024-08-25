// userController.js
const Company = require("../Model/CompanyModel");

exports.create = async (req, res) => {
  try {
    const Data = Company(req.body);

    const inserted = await Company.create(Data);
    res.status(200).json({ message: "save", data: inserted });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.findByUser = async (req, res) => {
  try {
    const data = await Company.findOne({ user: req.params.user });
    if (!data) {
      return res.status(200).json({ message: "not found" });
    }

    if (res.status === 401) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
};

exports.update = async (req, res) => {
  const user = req.params.user;
  const updateData = Company(req.body);
  try {
    const one = await Company.findOne({ user: user });

    const updatedCity = await Company.findByIdAndUpdate(one._id, updateData, {
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
