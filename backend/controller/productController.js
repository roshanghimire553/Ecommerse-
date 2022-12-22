// const { model } = require("mongoose");
const Product = require("../models/productModel");

//add a product//
exports.addproduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).json({
      success: true,
      product: product,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllProduct = async (req, res) => {
  const product = await Product.find();
  return res.status(200).json({
    message: "success",
    product,
  });
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      res.status(404).json({
        success: false,
      });
    }
    let updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      product: updatedProduct,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.removeProduct = async (req, res) => {
  try {
    const product = Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({
        success: false,
      });
    }
    await product.remove();
    res.status(200).json({
      success: true,
      message: "The Product is removed",
    });
  } catch (e) {
    console.log(e);
  }
};
