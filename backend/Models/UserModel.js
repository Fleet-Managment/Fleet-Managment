const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  Name: {
    type: String,
    required: [true, "Your Name is required"],
  },
  Phone: {
    type: Number,
    required: [true, "Your Phone Number is required"],
    
  },
  Licence: {
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
});



module.exports = mongoose.model("User", userSchema);