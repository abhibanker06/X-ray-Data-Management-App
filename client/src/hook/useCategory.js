import { useState, useEffect } from 'react'
import { getCategories, createCategory, updateCategory, deleteCategory } from '../api/categoryApi'

const useCategories = () => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [categories, setCategories] = useState([])
  const [editId, setEditId] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchCategories = async () => {
    try {
      const data = await getCategories()
      setCategories(Array.isArray(data) ? data : [])
    } catch (err) {
      console.log(err.message)
      setCategories([])
    }
  }

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this category?")
    if (!confirm) return
    try {
      await deleteCategory(id)
      await fetchCategories()
    } catch (err) {
      console.log(err.message)
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await updateCategory(editId, name, description)
      setName("")
      setDescription("")
      setEditId(null)
      await fetchCategories()
    } catch (err) {
      console.log(err.message)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name) return alert("Name is required")
    setLoading(true)
    try {
      await createCategory(name, description)
      setName('')
      setDescription('')
      await fetchCategories()
    } catch (err) {
      console.log(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return {
    name, setName,
    description, setDescription,
    categories,
    editId, setEditId,
    loading,
    handleDelete,
    handleUpdate,
    handleSubmit
  }
}

export default useCategories