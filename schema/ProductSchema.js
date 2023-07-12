const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  productName: String,
  productStock: Number,
  productImage: Buffer,
  productPrice: String,
  productCurrency: String,
});

const ProductModal = mongoose.model("product", ProductSchema);

module.exports = ProductModal;
