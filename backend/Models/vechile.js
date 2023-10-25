
const mongoose = require("mongoose");

const addvechileSchema = new mongoose.Schema({
    plate: {
      type: String,
      required: [true, " required"],
      unique: true,
    },
    model: {
      type: String,
      required: [true, "required"],
    },
    fuel: {
      type: String,
      required: [true, " required"],
    },
    color: {
      type: String,
      required: [true, "required"],
    },
   
   
  });


  module.exports = mongoose.model("vechile", addvechileSchema);