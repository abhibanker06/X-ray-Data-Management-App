import axios from "axios"

const BASE_URL = import.meta.env.VITE_API_URL+"/api/categories"

export const getCategories = async () => {
  const res = await axios.get(BASE_URL)
  return res.data
}

export const createCategory = async (name, description) => {
  const res = await axios.post(BASE_URL, { name, description })
  return res.data
}

export const updateCategory = async (id, name, description) => {
  const res = await axios.put(`${BASE_URL}/${id}`, { name, description })
  return res.data
}

export const deleteCategory = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`)
  return res.data
}