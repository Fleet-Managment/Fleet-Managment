const User = require("../Models/AdminModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require('bcrypt');

module.exports.Adminsignup = async (req, res, next) => {
    try {
      const { Email, Name,Phone,Password,  CreatedAt } = req.body;
      console.log({Email},{Password})
      const existingUser = await User.findOne({ Email });
      if (existingUser) {
        return res.json({ message: "User already exists" });
      }
      const Hpassword =  await bcrypt.hash(Password, 12);
      const user = await User.create({ Email, Name,Phone,Hpassword,  CreatedAt });
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res
        .status(201)
        .json({ message: "User signed in successfully", success: true, user });
      next();
    } catch (error) {
      console.error(error);
    }
  };

