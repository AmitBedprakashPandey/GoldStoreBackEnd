// userController.js
const InvoiceId = require("../Model/IdGenraterModel2");

exports.create = async (req, res) => {
  try {
    const statesData = InvoiceId(req.body);
    const insertedCitys = await InvoiceId.create(statesData);
    res
      .status(200)
      .json({ message: "created successfully", data: insertedCitys });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.update = async (req, res) => {
  try {
    console.log("com id",req.params.companyid);
    const data = await InvoiceId.findOne({ companyid: req.params.companyid });
    console.log('out data',data);
    
    const updatedCity = await InvoiceId.findByIdAndUpdate(data._id,
      { number: Number(data.number) + 1 },
      { new: true }
    );

    if (!updatedCity) {
      return res.status(404).json({ message: "not found" });
    }

    res
      .status(200)
      .json({ message: "updated successfully", data: updatedCity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
  // try {
  //   const updatedCity = await InvoiceId.findByIdAndUpdate(id,updateData, {
  //     new: true,
  //   });
  //   if (!updatedCity) {
  //     return res.status(404).json({ message: "not found" });
  //   }
  //   res
  //     .status(200)
  //     .json({ message: "updated successfully", data: updatedCity });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: "Internal Server Error" });
  // }
};

exports.findOn = async (req, res) => {
  try {
    const data = await InvoiceId.findOne({ companyid: req.params.companyid }); // Fetch all data from the database
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
};
