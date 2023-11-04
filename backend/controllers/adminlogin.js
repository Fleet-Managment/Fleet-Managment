const User = require("../Models/AdminModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require('bcrypt');


module.exports.Adminlogin = async (req, res) => {
    try {
      const { Email, Password } = req.body;
      console.log({Email},{Password})
      if(!Email || !Password ){
        return res.json({message:'All fields are required'})
      }
      const user = await User.findOne({ Email });
      console.log({user})
      if(!user){
        return res.json({message:'Incorrect password or email' }) 
      }
      const auth = await bcrypt.compare(Password,user.Hpassword)
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