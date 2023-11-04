
const mongoose = require("mongoose");

const addscheduleSchema = new mongoose.Schema({
    from: {
      type: String,
      required: [true, " required"],
      
    },
    to: {
      type: String,
      required: [true, " required"],
      
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
   
   
  });


  module.exports = mongoose.model("schedule", addscheduleSchema);