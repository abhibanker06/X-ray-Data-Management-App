import React from 'react'
import { RiFolderOpenLine, RiPencilLine, RiDeleteBinLine } from "react-icons/ri"

const CategoryCard = ({ id, name, description, count, onEdit, onDelete }) => {
  return (
    <div className='flex items-center justify-between 
      bg-white dark:bg-slate-800 
      w-full rounded-lg shadow-md 
      px-4 py-3 transition-colors'>

      
      <div className='flex items-center gap-3 overflow-hidden'>
        <RiFolderOpenLine className='text-teal-500 h-7 w-7 shrink-0' />

        <div className='overflow-hidden'>
          <h1
            className='font-medium text-gray-800 dark:text-slate-100 
              text-[15px] md:text-[17px] truncate'
            title={name}
          >
            {name}
          </h1>

          <h3
            className='text-gray-500 dark:text-slate-400 
              text-[12px] md:text-[14px] truncate'
            title={description}
          >
            {description}
          </h3>

          <h5 className='text-[11px] md:text-[12px] 
            text-teal-500 font-medium'>
            {count} images
          </h5>
        </div>
      </div>

      
      <div className='flex gap-1 shrink-0 ml-3 
        text-gray-500 dark:text-slate-400'>

        <span
          onClick={() => onEdit({ _id: id, name, description })}
          className='hover:bg-gray-100 dark:hover:bg-slate-700
            p-1.5 rounded-md cursor-pointer 
            transition-colors'>
          <RiPencilLine />
        </span>

        <span
          onClick={() => onDelete(id)}
          className='hover:bg-red-100 dark:hover:bg-slate-700
            hover:text-red-600
            p-1.5 rounded-md cursor-pointer 
            transition-colors'>
          <RiDeleteBinLine />
        </span>

      </div>
    </div>
  )
}

export default CategoryCard