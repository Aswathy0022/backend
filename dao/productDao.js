const ProductModal = require("../schema/ProductSchema");

const insert = async ({
  productName,
  productStock,
  productImage,
  productCurrency,
  productPrice,
}) => {
  try {
    const result = await ProductModal.create({
      productName,
      productStock,
      productImage,
      productCurrency,
      productPrice,
    });
    delete result.productImage;
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const findAll = async () => {
  try {
    const result = await ProductModal.find();

    return result.map((item) => ({
      name: item.productName,
      image: item.productImage.toString("base64"),
      price: item.productPrice,
      stock: item.productStock,
      currency: item.productCurrency,
    }));
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { insert, findAll };
