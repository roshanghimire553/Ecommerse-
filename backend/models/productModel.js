const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
    minlength: 2,
  },
  price: {
    type: Number,
    required: [true, "please enter product price"],
  },
  description: {
    type: String,
    required: [true, "please enter product description"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: [true, "please select the url"],
      },
    },
  ],
  noofreviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: [true, "plese select name"],
      },
      rating: {
        type: Number,
        required: [true, "please select ratings"],
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please select a category"],
    enum: [
      "Electronics",
      "clothes",
      "food",
      "smarts phones",
      "laptop",
      "headphones",
      "beauty",
      "Home appliances",
    ],
  },
});

module.exports = mongoose.model("product", productSchema);
