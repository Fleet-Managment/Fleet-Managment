const mongoose = require("mongoose");


const AdminSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: [true, "Your email address is required"],
    
  },
  Name: {
    type: String,
    required: [true, "Your Name is required"],
  },
  Phone: {
    type: Number,
    required: [true, "Your Phone Number is required"],
  },
  Hpassword: {
    type: String,
    required: [true, "Your password is required"],
  },
  CreatedAt: {
    type: Date,
    default: new Date(),
  },
});



module.exports = mongoose.model("Admin", AdminSchema);