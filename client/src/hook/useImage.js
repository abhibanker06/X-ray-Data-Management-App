import { useState, useEffect } from "react"
import {
  fetchImagesApi,
  deleteImageApi,
  deleteMultipleImagesApi
} from "../api/imageApi"

const useImages = () => {
  const [images, setImages] = useState([])
  const [selectedImg, setSelectedImg] = useState(null)
  const [selectedIds, setSelectedIds] = useState([])
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [sortBy, setSortBy] = useState("newest")

  const fetchImages = async () => {
    try {
      const data = await fetchImagesApi()
      setImages(Array.isArray(data) ? data : [])
    } catch (err) {
      console.log(err.message)
      setImages([])
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  const filteredImages = images
    .filter((img) => {
      const matchesSearch = img.originalName
        ?.toLowerCase()
        .includes(search.toLowerCase())

      const matchesCategory = selectedCategory
        ? img.category?._id === selectedCategory
        : true

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === "newest") return new Date(b.createdAt) - new Date(a.createdAt)
      if (sortBy === "oldest") return new Date(a.createdAt) - new Date(b.createdAt)
      if (sortBy === "name") return a.originalName?.localeCompare(b.originalName)
      return 0
    })

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    )
  }

  const handleSelectAll = () => {
    if (selectedIds.length === filteredImages.length) {
      setSelectedIds([])
    } else {
      setSelectedIds(filteredImages.map((img) => img._id))
    }
  }

  const handleClear = () => setSelectedIds([])

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this file?")
    if (!confirm) return

    await deleteImageApi(id)
    await fetchImages()
  }

  const handleDeleteSelected = async () => {
    const confirm = window.confirm(
      `Delete ${selectedIds.length} selected images?`
    )
    if (!confirm) return

    await deleteMultipleImagesApi(selectedIds)
    setSelectedIds([])
    await fetchImages()
  }

  return {
    filteredImages,
    images,
    selectedImg,
    setSelectedImg,
    selectedIds,
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    handleSelect,
    handleSelectAll,
    handleClear,
    handleDelete,
    handleDeleteSelected,
  }
}

export default useImages