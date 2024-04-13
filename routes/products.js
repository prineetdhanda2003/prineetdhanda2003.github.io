const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");

const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now

router.get("/", productsController.getProducts);
router.get("/man", productsController.getMan);
router.get("/woman", productsController.getWoman);

router.get("/sale", productsController.getSale);
router.put("/productpage/addWishlist/:id", productsController.addWishlist);


router.get("/productPage/:id",  productsController.getProductPage); 

//router.get("/products/:type", ensureAuth, productsController.getMale); 


module.exports = router;