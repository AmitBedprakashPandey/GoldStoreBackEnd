// userController.js
const InvoiceId = require("../Model/IdGenraterModel");

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
  console.log(req.params);
  try {
    const one = await InvoiceId.findOne({quot:req.params.id,user:req.params.user});
    console.log(one);
    const updatedCity =   await InvoiceId.findByIdAndUpdate(one._id,{invoiceid:Number(one.invoiceid) + 1}, {
      new: true,
    });
    
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
    const data = await InvoiceId.find({user:req.params.user}); // Fetch all data from the database
    res.status(200).json(data );
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
};