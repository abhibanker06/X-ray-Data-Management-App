import React from 'react'
import { Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Dataset from "./pages/Dataset";
import Categories from "./pages/Categories";
import Upload from "./pages/Upload"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dataset" element={<Dataset />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  )
}

export default App;
