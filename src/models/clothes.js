const mongoose = require("mongoose");

const clothesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  counterInStock: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
})

const Clothe = mongoose.model("clothe", clothesSchema)

module.exports = Clothe;