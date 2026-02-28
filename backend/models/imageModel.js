const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
  image: {
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