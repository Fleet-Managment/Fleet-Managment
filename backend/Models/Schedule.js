
const mongoose = require("mongoose");

const addscheduleSchema = new mongoose.Schema({
    place: {
      type: String,
      required: [true, " required"],
      unique: true,
    },
    time: {
      type: String,
      required: [true, "required"],
    },
    vechile: {
      type: String,
      required: [true, " required"],
    },
    driver : {
      type: String,
      required: [true, "required"],
    },
    contact : {
        type: Number,
        required: [true, "required"],
      },
   
   
  });


  module.exports = mongoose.model("schedule", addscheduleSchema);