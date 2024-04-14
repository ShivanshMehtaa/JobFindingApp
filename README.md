# MERN Job Finding Application

This is a job finding application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to search for job listings and upload their resumes.

## Features

- User authentication (signup, login, logout)
- Job listing browsing
- Resume upload and storage on Cloudinary
- User profile management
- Search functionality for job listings

## Technologies Used

- MongoDB: NoSQL database for storing job listings and user data
- Express.js: Backend framework for handling HTTP requests and routes
- React.js: Frontend library for building user interfaces
- Node.js: JavaScript runtime for the backend
- Cloudinary: Cloud-based image and video management service for storing resume images

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mern-job-finder.git

2. Install dependencies
   ```bash
    cd mern-job-finder
    cd client && npm install
    cd ../server && npm install

3. Setup your cloudinary account and fill the details in the .env file in server
   ```bash
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret

4. Start the server and client
```bash
     cd server && npm start
     cd client && npm start
