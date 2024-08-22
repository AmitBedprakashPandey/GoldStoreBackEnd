const Model = require("../Model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Key = "AmitPandey9137976758";

exports.register = async (req, res) => {
  try {
    const { email, pass } = req.body;
    const foundUser = await Model.findOne({ email: email });
    if (foundUser) {
      return res.status(302).json({ message: "aleady have user" });
    }
    const hashedPassword = await bcrypt.hash(pass, 10);
    const user = new Model({ email, pass: hashedPassword });
    const inserted = await Model.create(user);
    return res.status(200).json({ message: "Created Successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error, Refresh and try again !" });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, pass } = req.body;
  console.log(email,pass);
  try {
    const user = await Model.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User Not found !" });
    }
    const passwordMatch = await bcrypt.compare(pass, user.pass);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Please Check Password" });
    }

    const token = jwt.sign({ userId: user.email }, Key, {
      expiresIn: "2d",
    });
    return res.status(200).json({ token: token, email: user.email });
  } catch (error) {
       res.status(500).json({ message: "Login failed Refresh and try agian !!",error });
  }
};
