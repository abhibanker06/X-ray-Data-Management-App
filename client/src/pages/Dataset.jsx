import React from 'react'
import Navbar from '../components/Navbar'
import ImageCard from '../components/Cards/ImageCard'
import ImagePreviewModal from '../components/ImagePreviewModal'
import useCategories from '../hook/useCategory'
import useImages from "../hook/useImage"

const Dataset = () => {

    const {
    filteredImages,
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
    handleDeleteSelected
    } = useImages()

  const { categories } = useCategories()

  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-900'>
      <Navbar />

      
      <div className='mt-8 px-5 md:px-10 lg:px-20'>
        <h1 className='font-bold text-blue-950 dark:text-slate-100 text-2xl md:text-3xl'>Dataset Browser</h1>
        <p className='text-gray-500 dark:text-slate-400 text-[13px] md:text-[15px]'>Browse and manage your X-ray images</p>
      </div>

      
      <div className='mt-6 px-5 md:px-10 lg:px-20'>
        <div className='flex flex-col md:flex-row gap-3'>

          
          <input
            className='border-2 outline-none border-gray-400 dark:border-slate-600
              bg-white dark:bg-slate-800
              text-gray-800 dark:text-slate-100
              placeholder:text-gray-400 dark:placeholder:text-slate-500
              w-full md:w-80 px-5 py-1.5 rounded-md'
            type="text"
            placeholder='Search by filename...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

         
          <select
            className='outline-none px-5 py-1.5 rounded-md border-2
              border-gray-400 dark:border-slate-600
              bg-white dark:bg-slate-800
              text-gray-800 dark:text-slate-100
              w-full md:w-auto'
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>

          
          <select
            className='outline-none px-5 py-1.5 rounded-md border-2
              border-gray-400 dark:border-slate-600
              bg-white dark:bg-slate-800
              text-gray-800 dark:text-slate-100
              w-full md:w-auto'
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="name">Name</option>
          </select>

          
          <div className='flex items-center gap-3 md:ml-auto'>
            {selectedIds.length === 0 ? (
              <button
                onClick={handleSelectAll}
                className='border-2 border-gray-400 dark:border-slate-600
                  text-gray-700 dark:text-slate-300
                  hover:bg-gray-100 dark:hover:bg-slate-700
                  px-5 py-1.5 rounded-md text-sm cursor-pointer w-full md:w-auto'>
                Select All
              </button>
            ) : (
              <>
                <button
                  onClick={handleDeleteSelected}
                  className='bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md text-sm cursor-pointer'>
                  Delete ({selectedIds.length})
                </button>
                <button
                  onClick={handleClear}
                  className='border-2 border-gray-400 dark:border-slate-600
                    text-gray-600 dark:text-slate-300
                    hover:bg-gray-100 dark:hover:bg-slate-700
                    px-4 py-1.5 rounded-md text-sm cursor-pointer'>
                  Clear
                </button>
              </>
            )}
          </div>

        </div>
      </div>

      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 px-5 md:px-10 lg:px-20 pb-10'>
        {filteredImages.map((img) => (
          <ImageCard
            key={img._id}
            id={img._id}
            image={img.image}
            category={img.category?.name || "Uncategorized"}
            name={img.originalName}
            onDelete={handleDelete}
            onView={() => setSelectedImg(img)}
            onSelect={handleSelect}
            isSelected={selectedIds.includes(img._id)}
          />
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className='flex justify-center mt-20 text-gray-400 dark:text-slate-500 text-[15px]'>
          No images found
        </div>
      )}

      <ImagePreviewModal
        image={selectedImg}
        onClose={() => setSelectedImg(null)}
      />
    </div>
  )
}

export default Dataset