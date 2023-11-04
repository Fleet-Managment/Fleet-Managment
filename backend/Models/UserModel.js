const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    
  },
  name: {
    type: String,
    required: [true, "Your Name is required"],
  },
  phone: {
    type: String,
    required: [true, "Your Phone Number is required"],
    
  },
  licence: {
    type: String,
    required: [true, "Your Licence Number is required"],
    
  },
  hpassword: {
    type: String,
    required: [true, "Your password is required"],
  },
  
 
  createdAt: {
    type: Date,
    default: new Date(),
  },
  image: {
    type: String, // Store the base64 encoded image as a string
  },
});



module.exports = mongoose.model("User", userSchema);