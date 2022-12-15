const express = require("express");
const { v4: uuidv4 } = require("uuid");
const ProductModel = require("../Schema/productSchema");
const router = express.Router();

router.get("/", async (req, res) => {
  let products = await ProductModel.find();
  try {
     res.status(200).json({ msg: "ok", res: products });
  } catch (e) {
    res.status(400).json({ msg: "e.message" });
  }
});

router.post("/", async (req, res) => {
  const { title, qty, desc, priority } = req.body;

  try {
    let product = await ProductModel.create({ title, qty, desc, priority });
    res.json({ msg: "product added", res: product });
  } catch (e) {
    res.status(400).json({ msg: "e.message" });
  }
});

router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  let product = await ProductModel.findByIdAndDelete({ _id: id });
  try {
    res.json({ msg: "product deleted", res: product });
  } catch (e) {
    res.status(500).json({ msg: "e.message" });
  }
});

// router.put("/:id", (req, res) => {
//     let { id } = req.params;
//     const bookmarked= req.body;
// });

module.exports = router;
