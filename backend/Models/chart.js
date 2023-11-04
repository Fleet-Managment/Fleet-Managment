
const mongoose = require("mongoose");

const Chart = new mongoose.Schema({
    business: {
      type: String,
      required: [true, " required"],
      
    },
    expenses: {
      type: String,
      required: [true, "required"],
    },
    createdAt: {
        type: Date,
        default: new Date(),
      },
    

    
   
   
  });


  module.exports = mongoose.model("data", Chart);