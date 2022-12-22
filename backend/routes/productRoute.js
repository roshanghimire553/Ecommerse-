const express = require("express");
const {
  addproduct,
  getAllProduct,
  updateProduct,
  removeProduct,
} = require("../controller/productController");
const router = express.Router();
// const { addProduct } = require("./controller/productController");

router.route("/").post(addproduct);
router.route("/").get(getAllProduct);
router.route("/:id").put(updateProduct);
router.route("/:id").delete(removeProduct);

module.exports = router;
