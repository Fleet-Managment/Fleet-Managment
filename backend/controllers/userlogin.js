const MUser = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require('bcrypt');


module.exports.Userlogin = async (req, res) => {
    try {
      const { Email, Password } = req.body;
      if(!Email || !Password ){
        return res.json({message:'All fields are required'})
      }
      const user = await MUser.findOne({ Email });
      if(!user){
        return res.json({message:'Incorrect  email' }) 
      }
      const password =  await bcrypt.hash(Password, 12);
      const auth = await bcrypt.compare(password,user.hpassword)
      if (!auth) {
        return res.json({message:'Incorrect password ' }) 
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