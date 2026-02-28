const express = require("express");
const router = express.Router();
const upload = require("../config/multer");

const { uploadImage,getImages,deleteImages } = require("../controllers/imageController");

router.post("/",upload.single("image"), uploadImage);
router.get("/", getImages);
router.delete("/:id", deleteImages);


module.exports = router