const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
  image: {
    type: String, // This will now store the Cloudinary URL
    required: true
  },
  public_id: {
    type: String,
    required: true
  },
  originalName: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model("Image", imageSchema)