const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Your Name is required"],
  },
  phone: {
    type: Number,
    required: [true, "Your Phone Number is required"],
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



module.exports = mongoose.model("Admin", userSchema);