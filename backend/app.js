const express = require("express");
const app = express();
module.exports = app;
app.use(express.json());

const productRoute = require("./routes/productRoute");
app.use("/api/product", productRoute);
