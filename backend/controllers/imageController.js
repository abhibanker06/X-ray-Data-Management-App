const imageModel = require("../models/imageModel");
const categoryModel = require("../models/categoryModel");
const cloudinary = require("../config/cloudinary");

const uploadImage = async (req, res) => {
  try {
    const { category } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }

    const newImage = await imageModel.create({
      image: req.file.path,
      public_id: req.file.filename,
      originalName: req.file.originalname,
      category
    });

    await categoryModel.findByIdAndUpdate(category, { $inc: { imageCount: 1 } });

    res.status(201).json(newImage);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const getImages = async (req, res) => {
  try {
    const images = await imageModel.find().populate("category").sort({ createdAt: -1 });
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const deleteImages = async (req, res) => {
  try {
    const image = await imageModel.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ message: "File not found" });
    }

    // Delete from Cloudinary
    if (image.public_id) {
      await cloudinary.uploader.destroy(image.public_id);
    }

    await categoryModel.findByIdAndUpdate(image.category, {
      $inc: { imageCount: -1 }
    });

    await imageModel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Successfully deleted" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { uploadImage, getImages, deleteImages }