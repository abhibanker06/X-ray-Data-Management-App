const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config(); // ← must be first!
const connectDB = require("./config/db");

const app = express();

app.use(cors({
  origin: 'https://x-ray-data-management-app.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

const categoryRoutes = require("./routes/categoryRoutes");
const imageRoutes = require("./routes/imageRoutes");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/api/categories", categoryRoutes);
app.use("/api/images", imageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});