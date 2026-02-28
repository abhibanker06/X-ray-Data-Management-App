import React from 'react'
import Navbar from '../components/Navbar'
import CategoryCard from '../components/Cards/CategoryCard'
import LoadingBar from '../components/LoadingBar'
import useCategories from '../hook/useCategory'

const Categories = () => {

  const {
    name, setName,
    description, setDescription,
    categories,
    editId, setEditId,
    loading,
    handleDelete,
    handleUpdate,
    handleSubmit
  } = useCategories()

  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-900'>
      <Navbar />

      
      <div className='mt-8 px-5 md:px-10 lg:px-20'>
        <h1 className='font-bold text-blue-950 dark:text-slate-100 text-2xl md:text-3xl'>
          Categories
        </h1>
        <p className='text-gray-500 dark:text-slate-400 text-[13px] md:text-[15px]'>
          Manage your X-ray image categories
        </p>
      </div>

      
      <div className='mt-5 mx-5 md:mx-10 lg:mx-20 
        bg-white dark:bg-slate-800 
        rounded-md shadow-sm 
        p-5'>

        <h1 className='font-medium text-gray-800 dark:text-slate-100 text-[18px] md:text-[20px]'>
          {editId ? "Edit Category" : "Add New Category"}
        </h1>

        <LoadingBar loading={loading} />

        <form onSubmit={editId ? handleUpdate : handleSubmit}>
          <div className='mt-5 flex flex-col md:flex-row gap-3'>

            
            <input
              className='border-2 outline-none 
                border-gray-400 dark:border-slate-600
                bg-white dark:bg-slate-800
                text-gray-800 dark:text-slate-100
                placeholder:text-gray-400 dark:placeholder:text-slate-500
                w-full md:w-72 px-5 py-2 rounded-md'
              type="text"
              placeholder='Category name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            
            <input
              className='border-2 outline-none 
                border-gray-400 dark:border-slate-600
                bg-white dark:bg-slate-800
                text-gray-800 dark:text-slate-100
                placeholder:text-gray-400 dark:placeholder:text-slate-500
                w-full md:w-72 px-5 py-2 rounded-md'
              type="text"
              placeholder='Description (optional)'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            
            <input
              className='cursor-pointer py-2 px-4 
                bg-blue-950 dark:bg-blue-800
                hover:bg-blue-900 dark:hover:bg-blue-700
                text-white 
                rounded-lg w-full md:w-auto 
                disabled:opacity-50'
              type="submit"
              value={editId ? "Update" : "Add"}
              disabled={loading}
            />
          </div>
        </form>
      </div>

      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-4 mt-10 px-5 md:px-10 lg:px-20 pb-10'>

        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            id={category._id}
            name={category.name}
            description={category.description}
            count={category.imageCount}
            onEdit={(info) => {
              setEditId(info._id)
              setName(info.name)
              setDescription(info.description)
            }}
            onDelete={handleDelete}
          />
        ))}
      </div>

    </div>
  )
}

export default Categories