const express = require("express");
const app = express();
const categoryRoutes = require("./routes/categoryRoutes")
const imageRoutes = require("./routes/imageRoutes")
const cors = require("cors")
const path = require("path")


app.use(cors());

const connectDB = require("./config/db")
require("dotenv").config()
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use("/api/categories", categoryRoutes)
app.use("/api/images", imageRoutes)

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});