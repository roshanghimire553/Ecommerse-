const express = require("express");
const app = express();
module.exports = app;

const productRoute = require("./routes/productRoute");
app.use("/api/product", productRoute);
