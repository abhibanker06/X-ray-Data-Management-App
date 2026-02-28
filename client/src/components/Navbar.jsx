import React, { useState } from 'react'
import { NavLink, Link } from "react-router-dom"
import { RiPulseLine, RiMenuLine, RiCloseLine, RiSunLine, RiMoonLine } from "react-icons/ri"
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { darkMode, toggleTheme } = useTheme()   // ✅ get theme state

  const linkBaseStyle = "p-2 rounded-lg transition-all duration-300 ease-in-out"

  return (
    <div className='bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700'>
      <nav className='flex justify-between items-center px-5 md:px-8 py-3'>

       
        <Link to="/" className='flex gap-2 items-center'>
          <RiPulseLine className='bg-blue-950 text-white text-3xl rounded-md shrink-0' />
          <div>
            <h1 className='text-lg md:text-2xl font-bold text-blue-950 dark:text-white'>
              X-Ray Dataset Manager
            </h1>
            <h4 className='text-[12px] md:text-[15px] text-gray-500 dark:text-gray-400'>
              ai4see Medical Imaging
            </h4>
          </div>
        </Link>

        
        <div className='hidden md:flex items-center gap-4 text-gray-600 dark:text-gray-300 font-medium'>
          <NavLink to="/" className={({ isActive }) =>
            `${linkBaseStyle} ${isActive ? "bg-blue-950 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`
          }>Dashboard</NavLink>
          <NavLink to="/dataset" className={({ isActive }) =>
            `${linkBaseStyle} ${isActive ? "bg-blue-950 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`
          }>Dataset</NavLink>
          <NavLink to="/upload" className={({ isActive }) =>
            `${linkBaseStyle} ${isActive ? "bg-blue-950 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`
          }>Upload</NavLink>
          <NavLink to="/categories" className={({ isActive }) =>
            `${linkBaseStyle} ${isActive ? "bg-blue-950 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`
          }>Categories</NavLink>

          
          <button
            onClick={toggleTheme}
            className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-xl'>
            {darkMode
              ? <RiSunLine className='text-yellow-400' />
              : <RiMoonLine className='text-gray-600' />
            }
          </button>
        </div>

        
        <div className='md:hidden flex items-center gap-2'>
        
          <button
            onClick={toggleTheme}
            className='p-2 rounded-lg text-xl cursor-pointer'>
            {darkMode
              ? <RiSunLine className='text-yellow-400' />
              : <RiMoonLine className='text-gray-600' />
            }
          </button>

          <button
            className='text-2xl text-blue-950 dark:text-white cursor-pointer'
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>
        </div>

      </nav>

    
      {menuOpen && (
        <div className='md:hidden flex flex-col gap-2 px-5 pb-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700'>
          {["/", "/dataset", "/upload", "/categories"].map((path, i) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `${linkBaseStyle} ${isActive ? "bg-blue-950 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"}`
              }
            >
              {["Dashboard", "Dataset", "Upload", "Categories"][i]}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar