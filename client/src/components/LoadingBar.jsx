import React from 'react'

const LoadingBar = ({loading}) => {
    if(!loading) return null

    return (
        <div className='flex items-center gap-3 my-3'>
      
            <span className='text-sm font-medium text-blue-950 dark:text-white whitespace-nowrap'>
                Loading...
            </span>

            <div className='w-full h-3 bg-gray-200 rounded-full overflow-hidden'>
        
                <div className='h-full w-1/3 bg-teal-500 rounded-full animate-slide'></div>
            </div>

        </div>  
    )
}

export default LoadingBar
