// const { model } = require("mongoose");
const Product = require("../models/productModel");

//add a product//
exports.addproduct = async (req, res, next) => {
  try {
    const product = Product.create(req.body);
    return res.status(200).json({
      success: true,
      product: product,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllProduct = async (req, res) => {
  return res.status(200).json({
    message: "success",
  });
};
