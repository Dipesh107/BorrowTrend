const Clothe = require("../models/clothes");

const getAllClotheProducts = async (req, res) => {
  try {
    const clothes = await Clothe.find({});

    res.json(clothes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

const getClotheProductById = async (req, res) => {
  try {
    const clothe = await Clothe.findById(req.params.id);

    res.json(clothe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

module.exports = {
  getAllClotheProducts,
  getClotheProductById,
}