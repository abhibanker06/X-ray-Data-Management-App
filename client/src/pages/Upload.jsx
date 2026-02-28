import React from 'react'
import Navbar from '../components/Navbar'
import {FaUpload} from 'react-icons/fa6'
import { useState } from "react"
import useCategories from "../hook/useCategory"
import { uploadImage } from "../api/imageApi"

const Upload = () => {

    const { categories } = useCategories()
    const [selectedCategory, setSelectedCategory] = useState("");
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false)

    const handleUpload = async (e) => {
        e.preventDefault()
        if (!selectedCategory || !file) {
            return alert("All fields are required")
        }
        try {
            const formData = new FormData()
            formData.append("category", selectedCategory)
            formData.append("image", file)

            await uploadImage(formData)

            alert("Image uploaded successfully")
            setSelectedCategory("")
            setFile(null)
        } catch (err) {
            console.log(err.message)
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (e) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setIsDragging(false)
        const droppedFile = e.dataTransfer.files[0]
        if (!droppedFile) return
        if (!droppedFile.type.startsWith("image/")) {
            return alert("Only image files are allowed")
        }
        setFile(droppedFile)
    }

  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-900'>
        <Navbar />

        
        <div className='mt-8 px-5 md:px-10 lg:px-20'>
            <h1 className='font-bold text-blue-950 dark:text-slate-100 text-2xl md:text-3xl'>Upload Images</h1>
            <p className='text-gray-500 dark:text-slate-400 text-[13px] md:text-[15px]'>Add new X-ray images to your dataset</p>
        </div>

        <form onSubmit={handleUpload}>

            
            <div className='mt-5 mx-5 md:mx-10 lg:mx-20 bg-white dark:bg-slate-800 shadow-sm p-5 rounded-xl'>
                <h1 className='font-medium text-[18px] md:text-[20px] text-blue-950 dark:text-slate-100'>
                  Target Category
                </h1>
                <div className='mt-5'>
                    <select
                        className='outline-none px-5 py-2 w-full md:w-80 rounded-md border-2
                          border-gray-400 dark:border-slate-600
                          bg-white dark:bg-slate-700
                          text-gray-800 dark:text-slate-100'
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

           
            <label
                className={`flex flex-col cursor-pointer justify-center items-center 
                    h-48 md:h-60
                    rounded-xl border-2 border-dashed 
                    mt-6 md:mt-10 
                    mx-5 md:mx-10 lg:mx-20
                    transition-all duration-200
                    ${isDragging
                      ? 'border-blue-950 bg-blue-50 dark:border-blue-400 dark:bg-slate-700'
                      : 'border-gray-300 dark:border-slate-600 dark:bg-slate-800'
                    }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div className={`text-2xl md:text-3xl ${isDragging ? 'text-blue-950 dark:text-blue-400' : 'text-gray-500 dark:text-slate-400'}`}>
                    <FaUpload />
                </div>
                <p className='text-[16px] md:text-[20px] mt-2 text-gray-700 dark:text-slate-300'>
                    {isDragging ? 'Drop it here!' : 'Drag & drop images here'}
                </p>
                <p className='text-gray-500 dark:text-slate-500 text-[13px] md:text-[15px]'>
                  or click to browse files
                </p>

                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </label>

            
            {file && (
                <p className="text-sm text-blue-950 dark:text-blue-400 mt-3 px-5 md:px-10 lg:px-20 truncate">
                    Selected File: <span className='font-medium'>{file.name}</span>
                </p>
            )}

        
            <div className='mx-5 md:mx-10 lg:mx-20 mt-5 mb-10'>
                <button
                    type="submit"
                    className='w-full md:w-auto bg-blue-950 hover:bg-blue-900 dark:bg-blue-800 dark:hover:bg-blue-700 text-white px-6 py-2 rounded-md cursor-pointer'>
                    Upload Image
                </button>
            </div>

        </form>
    </div>
  )
}

export default Upload