import React from 'react'
import { RiDeleteBinLine, RiEyeLine } from "react-icons/ri"

const ImageCard = ({ image, category, name, onDelete, id, onView, onSelect, isSelected }) => {

 const imageUrl = `${import.meta.env.VITE_API_URL}/uploads/${image}`

  return (
    <div
      className={`relative group rounded-2xl transition-all duration-200 w-full cursor-pointer
        ${isSelected ? 'ring-2 ring-blue-950 dark:ring-slate-400' : ''}`}
      onClick={() => onView()}
    >
      <div className='flex flex-col bg-white dark:bg-slate-800 w-full overflow-hidden rounded-2xl shadow-md'>

        
        <div className='bg-slate-500 dark:bg-slate-700 h-48 w-full'>
          <img src={imageUrl} alt={name} className='w-full h-full object-cover' />
        </div>

       
        <div className='p-2'>
          <h1 className='text-gray-500 dark:text-slate-300 text-[14px] truncate' title={name}>{name}</h1>
          <h1 className='text-gray-400 dark:text-slate-500 text-[12px] truncate'>{category}</h1>
        </div>
      </div>

      
      <div className={`absolute flex justify-between items-center p-3 w-full h-10 top-2 transition-opacity duration-300
        ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>

        <input
          className='w-4 h-4 cursor-pointer'
          type="checkbox"
          checked={isSelected}
          onChange={() => {}}
          onClick={(e) => { e.stopPropagation(); onSelect(id) }}
        />

        <div className='flex gap-2 text-lg'>
          <span
            onClick={(e) => { e.stopPropagation(); onView() }}
            className='text-gray-500 dark:text-slate-300 bg-white dark:bg-slate-700 p-1 rounded-md cursor-pointer'>
            <RiEyeLine />
          </span>
          <span
            onClick={(e) => { e.stopPropagation(); onDelete(id) }}
            className='text-red-500 bg-white dark:bg-slate-700 p-1 rounded-md cursor-pointer'>
            <RiDeleteBinLine />
          </span>
        </div>
      </div>
    </div>
  )
}

export default ImageCard