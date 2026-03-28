import React from 'react'
import { RiCloseLine } from 'react-icons/ri'

const ImagePreviewModal = ({ image, onClose }) => {
  if (!image) return null

  const imageUrl = image.image.startsWith('http') ? image.image : `${import.meta.env.VITE_API_URL}/uploads/${image.image}`

  return (
    <div
      className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4'
      onClick={onClose}
    >
      <div
        className='bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg overflow-hidden'
        onClick={(e) => e.stopPropagation()}
      >
      
        <div className='flex justify-end p-3'>
          <span
            onClick={onClose}
            className='cursor-pointer text-gray-500 dark:text-slate-400 hover:text-black dark:hover:text-white text-xl'>
            <RiCloseLine />
          </span>
        </div>

        
        <div className='px-4 md:px-6'>
          <img
            src={imageUrl}
            alt={image.originalName}
            className='w-full h-60 md:h-80 object-contain rounded-xl'
          />
        </div>

        
        <div className='p-4 md:p-6'>
          <h1 className='font-semibold text-blue-950 dark:text-slate-100 text-[14px] md:text-[15px] truncate'
            title={image.originalName}>
            {image.originalName}
          </h1>
          <p className='text-gray-700 dark:text-slate-400 text-[12px] mt-1'>
            {new Date(image.createdAt).toLocaleDateString()}
          </p>
          <span className='inline-block mt-3 bg-teal-800 dark:bg-teal-700 text-white text-[12px] px-3 py-1 rounded-full font-medium'>
            {image.category?.name}
          </span>
        </div>

      </div>
    </div>
  )
}

export default ImagePreviewModal