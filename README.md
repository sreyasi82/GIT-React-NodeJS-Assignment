# TodoList Application

A full‑stack TodoList application with a **React frontend** and a **Node.js/Express backend**.  
This README includes instructions for **local development**, **production builds**, and **deployment to GitHub Pages** or any hosting provider.


## Features
- React-based UI for managing todos  
- Node.js/Express backend API  
- Hot reload during development  
- Production build optimized for deployment  
- GitHub Pages support for frontend hosting  

##  Project Structure

project-root/
│
├── frontend/        # React app (deployed to GitHub Pages)
│   ├── src/
│   └── package.json
│
└── backend/         # Node.js API server (deploy separately)
├── server.js
└── package.json




# 🛠️ Local Development

## 1. Install Dependencies

### Frontend

cd frontend

npm install

cd ../backend

npm install

## 2. Running Locally

#Start Backend

nodemon server.js

#Backend runs at:

http://localhost:8001

#Start Frontend

npm start

#Frontend runs at:

http://localhost:3000
