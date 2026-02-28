const express = require("express");
const app = express();
const categoryRoutes = require("./routes/categoryRoutes")
const imageRoutes = require("./routes/imageRoutes")
const cors = require("cors")
const path = require("path")


app.use(cors({
  origin: "https://x-ray-data-management-app.vercel.app"
}))

const connectDB = require("./config/db")
require("dotenv").config()
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use("/api/categories", categoryRoutes)
app.use("/api/images", imageRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});