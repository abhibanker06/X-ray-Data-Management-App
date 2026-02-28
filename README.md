X-ray Dataset Manager - Setup Guide
=====================================


REQUIREMENTS
------------
- Node.js 

- MongoDB connection string
  (will be provided to you separately)


STEP 1 - Extract the ZIP
-------------------------
Extract the ZIP file and open the folder in your terminal or VS Code.


STEP 2 - Setup Backend
-----------------------
Open a terminal and run these commands one by one:

    cd backend
    npm install

Then create a file named ".env" inside the backend folder.
Write this inside it:

    PORT=5000
    MONGO_URI=paste_your_connection_string_here

Replace "paste_your_connection_string_here" with the MongoDB string provided to you.

Then start the backend by running:

    npm run dev

If successful you will see:  Server running on port 5000


STEP 3 - Setup Frontend
------------------------
Open a SECOND terminal (keep the first one running) and run:

    cd client
    npm install

Then create a file named ".env" inside the client folder.
Write this inside it:

    VITE_API_URL=http://localhost:5000

Then start the frontend by running:

    npm run dev

If successful you will see:  Local: http://localhost:5173


STEP 4 - Open the App
----------------------
Open your browser and go to:

    http://localhost:5173


IMPORTANT
---------
- Both terminals must be running at the same time
- Do not close either terminal while using the app
- The uploads folder is created automatically, no need to create it manually
