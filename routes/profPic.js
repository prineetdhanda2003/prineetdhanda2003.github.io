/*const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const profPicController = require("../controllers/profPic.js");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Routes - simplified for now
router.get("/:id", ensureAuth, profPicController.getPic);

router.post("/newProfPic", upload.single("file"), profPicController.newProfPic);


router.delete("/deletePic/:id", profPicController.deletePost); 

module.exports = router;

*/
