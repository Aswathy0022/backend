const Router = require("express").Router;
const { create, getAll } = require("../controllers/product");
const upload = require("../middleware/imageUploadMiddleware");

const router = Router();

router.post("/product/create", upload.single("productImage"), create);
router.get("/product/all", getAll);

module.exports = router;
