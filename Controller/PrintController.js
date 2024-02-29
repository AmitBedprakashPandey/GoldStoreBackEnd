// userController.js
const Company = require("../Model/CompanyModel");
const Customer = require("../Model/CustomerModel");
const Invoice = require("../Model/InvoiceModel");

// quotation no. , company details, customer details

exports.findInvoice = async (req, res) => {
  const id = req.params.id;
  const user = req.params.user;
  try {
    const invoice = await Invoice.findOne({ _id: id, user: user });
    const customer = await Customer.findOne({
      name: invoice.customer,
      user: user,
    });
    const company = await Company.findOne({ user: invoice.user });

    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    res.status(200).json({ ...invoice, customer: customer, company: company });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
};
