const mongoose = require("mongoose");

const jewellerySchema = new mongoose.Schema({
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

const Jewellery = mongoose.model("jewellery", jewellerySchema)

module.exports = Jewellery;