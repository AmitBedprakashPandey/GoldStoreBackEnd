const UserModel = require("../Model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SECRET_KEY = process.env.SECRET_KEY || "AmitPandey9137976758"; // Use environment variable

// Register user
exports.register = async (req, res) => {
  try {
    const { email, pass } = req.body;

    // Check if the user already exists
    const foundUser = await UserModel.findOne({ email }).lean();
    if (foundUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password and create a new user
    const hashedPassword = await bcrypt.hash(pass, 10);
    const newUser = new UserModel({ email, pass: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error, please try again later" });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, pass } = req.body;

    // Find the user by email
    const user = await UserModel.findOne({ email }).lean();
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(pass, user.pass);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1d",
    });

    return res.status(200).json({ token, email: user.email });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(500)
      .json({ error: "Login failed, please try again later" });
  }
};

exports.checkUsername = async (req, res) => {
  try {
    const { email, pass } = req.body;
    const foundUser = await UserModel.findOne({ email }).lean();

    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }
    // Hash the password and create a new user
    const hashedPassword = await bcrypt.hash(pass, 10);

    await UserModel.findOneAndUpdate(foundUser, {
      pass: hashedPassword,
    });

    return res.status(200).json({ message: "Password Created successfully" });
  } catch (error) {
    console.log(error);
  }
};
