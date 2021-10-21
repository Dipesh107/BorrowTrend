const mongoose = require("mongoose");

const shoesSchema = new mongoose.Schema({
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

const Shoe = mongoose.model("shoe", shoesSchema)

module.exports = Shoe;