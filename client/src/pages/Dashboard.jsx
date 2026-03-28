import React from 'react'
import Navbar from "../components/Navbar"
import CountCard from '../components/Cards/CountCard'
import { FaClock, FaFolder, FaImage, FaArrowTrendUp } from 'react-icons/fa6'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts'
import RecentCards from '../components/Cards/RecentCards'
import useImages from "../hook/useImage"
import useCategories from "../hook/useCategory"

const Dashboard = () => {

  const { images } = useImages()
  const { categories } = useCategories()

  const imagesArr = Array.isArray(images) ? images : []
  const categoriesArr = Array.isArray(categories) ? categories : []

  const totalImages = imagesArr.length || 0
  const totalCategories = categoriesArr.length || 0

  const recentCount = imagesArr.filter((img) => {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    return new Date(img.createdAt) > sevenDaysAgo
  }).length || 0


  const avgPerCategory = totalCategories > 0 ? (totalImages / totalCategories).toFixed(1) : 0
  const chartData = categoriesArr.map((cat) => ({ name: cat.name, count: cat.imageCount }))
  const recentImages = [...imagesArr].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5)
  const colors = ['#14b8a6', '#3b82f6', '#ec4899', '#eab308', '#8b5cf6', '#22c55e']

  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-900'>
      <Navbar />

      
      <div className='mt-8 px-5 md:px-10 lg:px-20'>
        <h1 className='font-bold text-blue-950 dark:text-slate-100 text-2xl md:text-3xl'>Dashboard</h1>
        <p className='text-gray-500 dark:text-slate-400 text-[13px] md:text-[15px]'>Overview of your X-ray dataset</p>
      </div>

      
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 px-5 md:px-10 lg:px-20 mt-8'>
        <CountCard label="Total Images"     count={totalImages}     icon={<FaImage        className='text-teal-400' />} />
        <CountCard label="Categories"       count={totalCategories} icon={<FaFolder       className='text-teal-400' />} />
        <CountCard label="Recently Added"   count={recentCount}     icon={<FaClock        className='text-teal-400' />} />
        <CountCard label="Avg per Category" count={avgPerCategory}  icon={<FaArrowTrendUp className='text-teal-400' />} />
      </div>

      
      <div className='flex flex-col lg:flex-row gap-6 px-5 md:px-10 lg:px-20 mt-10'>

        
        <div className='bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6 w-full lg:w-1/2'>
          <h2 className='font-bold text-lg mb-4 text-blue-950 dark:text-slate-100'>Category Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-20} textAnchor="end" height={60} />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--tooltip-bg, #fff)',
                  border: 'none',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        
        <div className='bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6 w-full lg:w-1/2'>
          <h2 className='font-bold text-lg mb-4 text-blue-950 dark:text-slate-100'>Proportion</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={chartData} dataKey="count" innerRadius={60} outerRadius={110} paddingAngle={3}>
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      
      <div className='mt-10 px-5 md:px-10 lg:px-20 mb-6'>
        <div className='bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6 md:p-10'>
          <h1 className='font-bold text-xl md:text-2xl text-blue-950 dark:text-slate-100'>Recently Added</h1>
          <div className='pt-6'>
            {recentImages.length === 0 ? (
              <p className='text-gray-400 dark:text-slate-500 text-sm'>No images yet</p>
            ) : (
              recentImages.map((img) => (
                <RecentCards
                  key={img._id}
                  icon={<FaImage />}
                  name={img.originalName}
                  category={img.category?.name || "Uncategorized"}
                  date={new Date(img.createdAt).toLocaleDateString()}
                  image={img.image}
                />
              ))
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard