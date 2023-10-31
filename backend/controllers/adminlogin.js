const User = require("../Models/AdminModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require('bcrypt');


module.exports.Adminlogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log({email},{password})
      if(!email || !password ){
        return res.json({message:'All fields are required'})
      }
      const user = await User.findOne({ email });
      console.log({user})
      if(!user){
        return res.json({message:'Incorrect password or email' }) 
      }
      const auth = await bcrypt.compare(password,user.hpassword)
      if (!auth) {
        return res.json({message:'Incorrect password or email' }) 
      }
       const token = createSecretToken(user._id);
       res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
       });
       res.status(201).json({ message: "User logged in successfully", success: true });
       next()
    } catch (error) {
      console.error(error);
    }
  }