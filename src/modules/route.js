const express = require("express")
const router = express.Router()
const controller = require("./controller")

router.get("/api/products/list", controller.productList)
router.get("/api/products/:id", controller.productDetail)

module.exports = router