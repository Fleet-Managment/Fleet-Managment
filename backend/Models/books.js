
const mongoose = require("mongoose");

const addbookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "title required"],
      unique: true,
    },
    author: {
      type: String,
      required: [true, "author required"],
    },
    genre: {
      type: String,
      required: [true, "genre required"],
    },
    year: {
      type: Number,
      required: [true, "year required"],
    },
    image: {
      type: String, // Store the base64 encoded image as a string
    },
   
  });


  module.exports = mongoose.model("books", addbookSchema);