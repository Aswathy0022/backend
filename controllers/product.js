const productDao = require("../dao/productDao");
const fs = require("fs");

const create = async (req, res) => {
  try {
    const { productName, productStock, productCurrency, productPrice } =
      req.body;
    const productImage = req.file;
    const imageBuffer = fs.readFileSync(productImage.path);
    const result = await productDao.insert({
      productName,
      productStock,
      productImage: imageBuffer,
    });
    res.send({ status: true, data: result, message: "created successfully" });
  } catch (err) {
    res.status(500).send({ status: false, data: result, message: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const result = await productDao.findAll();
    res.send({ status: true, data: result, message: "all the product" });
  } catch (err) {
    res.status(500).send({ status: false, data: "", message: err.message });
  }
};

module.exports = { create, getAll };
