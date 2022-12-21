const express = require("express");
const { addproduct } = require("../controller/productController");
const router = express.Router();
// const { addProduct } = require("./controller/productController");

router.route("/product").post(addproduct);

module.exports = router;
