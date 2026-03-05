# 🫁 X-ray Dataset Manager

A full-stack web application to upload, organize, and manage X-ray image datasets by category.

---

## ✨ Features

- 📤 Upload X-ray images and assign them to categories
- 🖼️ View all images in a clean gallery layout
- 🔍 Preview images in a modal
- 🗑️ Delete single or multiple images at once
- 📁 Manage categories with live image counts
- 📱 Fully responsive — works on desktop and mobile

---

## 🛠️ Tech Stack

- **Frontend** — React, Vite, Tailwind CSS
- **Backend** — Node.js, Express.js
- **Database** — MongoDB (Mongoose)

---

## ✅ Requirements

- [Node.js](https://nodejs.org/) v18 or higher
- MongoDB connection string (local or Atlas)

---

## 🚀 Installation & Setup

### 1. Extract the ZIP
Extract the project folder and open it in your terminal or VS Code.

### 2. ⚙️ Setup Backend

    cd backend
    npm install

Create a `.env` file inside the `backend` folder:

    PORT=5000
    MONGO_URI=paste_your_connection_string_here

Start the backend:

    npm run dev

You should see: `Server running on port 5000` ✅

### 3. 🎨 Setup Frontend

Open a **second terminal** and run:

    cd client
    npm install

Create a `.env` file inside the `client` folder:

    VITE_API_URL=http://localhost:5000

Start the frontend:

    npm run dev

You should see: `Local: http://localhost:5173` ✅

---

## 🌐 Running the App

Both terminals must be running at the same time.

Open your browser and go to:

    http://localhost:5173

---

## 📝 Notes

- The `uploads` folder is created automatically on first run
- Do not close either terminal while using the app
- Do not include `node_modules` when sharing or submitting the project
