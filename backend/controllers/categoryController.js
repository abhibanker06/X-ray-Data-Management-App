const categoryModel = require("../models/categoryModel");
const imageModel = require("../models/imageModel");

const createCategory = async (req, res) => {
  try {

    let { name, description } = req.body

    if (!name) {
      return res.status(400).json({ message: "Name is required" })
    }

    const category = await categoryModel.create({
      name,
      description
    })
    
    res.status(201).json(category)
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getCategory= async (req,res)=>{
    try {
        const categories = await categoryModel.find().sort({ createdAt: -1 })
        res.status(200).json(categories)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}   

const updateCategory = async (req,res)=>{
  try {
    const { name, description } = req.body

    const updatedCategory = await categoryModel.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true } // return updated document
    )

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" })
    }

    res.status(200).json(updatedCategory)

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const deleteCategory = async (req, res) => {
  try {
    const deleted = await categoryModel.findByIdAndDelete(req.params.id)

    if (!deleted) {
      return res.status(404).json({ message: "Category not found" })
    }

    await imageModel.deleteMany({ category: req.params.id })

    res.json({ message: "Category deleted successfully" })

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
module.exports = { createCategory, getCategory,updateCategory,deleteCategory}