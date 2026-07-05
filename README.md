# Google OAuth Authentication

A simple MERN stack application that demonstrates secure user authentication using Google OAuth. Users can sign in with their Google account, and their profile information is retrieved and stored for authentication purposes.

## Features

* Sign in with Google
* Secure Google OAuth 2.0 authentication
* User profile retrieval
* MongoDB integration
* React frontend
* Express.js backend

## Tech Stack

* React.js
* Node.js
* Express.js
* MongoDB
* Mongoose
* Google OAuth



## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```


### 2. Install backend dependencies

```bash
cd Backend
npm install
```

### . Configure environment variables

Create a `.env` file inside the `Backend` folder and add the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
```

### 4. Start the backend server

```bash
cd Backend
npm start
```

### 3. Install frontend dependencies

```bash
cd Frontend
npm install
```

### . Configure environment variables

Create a `.env` file inside the `Backend` folder and add the following variables:

```env
VITE_GOOGLE_CLIENT_ID="your_google_client_id"
VITE_API_URL="http://localhost:5000"
```


### 4. Start the frontend

Open a new terminal and run:

```bash
cd Frontend
npm start
```

### 5. Open the application

Visit:

```

```


