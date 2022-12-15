const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  desc: {
    type: String,
    required: true,
  },
  bookmark:{
   type: Boolean
  },
  priority: {
    type: String,
    required: true,
  }},{timestamps:true});

const ProductModel = mongoose.model("products", productSchema);
module.exports = ProductModel;
