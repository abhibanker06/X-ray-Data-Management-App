import axios from "axios"

const BASE_URL = import.meta.env.VITE_API_URL+"/api/images"

export const fetchImagesApi = async () => {
  const res = await axios.get(BASE_URL)
  return res.data
}

export const deleteImageApi = async (id) => {
  return await axios.delete(`${BASE_URL}/${id}`)
}

export const deleteMultipleImagesApi = async (ids) => {
  return await Promise.all(
    ids.map((id) => deleteImageApi(id))
  )
}

export const uploadImage = async (formData) => {
  const res = await axios.post(BASE_URL, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
  return res.data
}