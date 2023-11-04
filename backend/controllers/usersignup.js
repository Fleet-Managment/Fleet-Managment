const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require('bcrypt');

module.exports.Usersignup = async (req, res, next) => {
    try {
      const { name,phone,licence,  email,password, createdAt,image } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.json({ message: "User already exists" });
      }
      const hpassword =  await bcrypt.hash(password, 12);
      const user = await User.create({ email, hpassword, name,phone,licence, createdAt,image });
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