import React from 'react'

const RecentCards = ({ icon, name, category, date }) => {
  return (
    <div className='flex justify-between items-center
      border-2 border-gray-200 dark:border-slate-700
      bg-white dark:bg-slate-800
      rounded-2xl mb-3'>

      <div className='flex items-center pl-5 gap-5 h-16 w-full overflow-hidden'>
        <div>
          <span className='text-gray-500 dark:text-slate-400 text-[20px]'>{icon}</span>
        </div>
        <div className='overflow-hidden'>
          <h1 className='font-medium text-[15px] md:text-[17px] text-blue-950 dark:text-slate-100 truncate w-32 md:w-48 lg:w-64'>
            {name}
          </h1>
          <h1 className='text-gray-500 dark:text-slate-400 text-[13px]'>{category}</h1>
        </div>
      </div>

      <div className='pr-3 shrink-0'>
        <h2 className='text-gray-500 dark:text-slate-400 text-[13px]'>{date}</h2>
      </div>

    </div>
  )
}

export default RecentCards