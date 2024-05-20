const productController = require("../controllers/productController");
const router = require("express").Router();

router.post("/api/sendInfo", productController.getInfomation);
module.exports = router;