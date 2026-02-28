import React from 'react'

const CountCard = (props) => {
  return (
    <div className='flex gap-3 justify-center items-center
      bg-white dark:bg-slate-800
      w-full
      h-20 md:h-24
      rounded-2xl shadow-md px-4'>
      <div>
        <span className='text-xl md:text-2xl'>{props.icon}</span>
      </div>
      <div>
        <h1 className='text-gray-500 dark:text-slate-400 text-[12px] md:text-[15px]'>{props.label}</h1>
        <h1 className='font-bold text-lg md:text-2xl text-blue-950 dark:text-slate-100'>{props.count}</h1>
      </div>
    </div>
  )
}

export default CountCard