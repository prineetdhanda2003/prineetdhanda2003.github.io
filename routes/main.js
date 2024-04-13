const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
//const postsController = require("../controllers/posts");
//const infoController = require("../controllers/info");
//const productsController = require("../controllers/products");
const locationsController = require("../controllers/locations");
const productRoutes = require("../routes/products")

const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/info", homeController.getInfo);
//router.get("/products", productsController.getProducts);
router.get("/newyork", locationsController.getNewyork);
router.get("/seoul", locationsController.getSeoul);
//router.get("/signup", homeController.getSignup);
router.use("/products", productRoutes);
//router.get("/productPage", productsController.getProductPage);

router.get("/profile", ensureAuth, authController.getProfile);
//router.get("/feed", postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
