# StayFinder Server

This is the backend server for the StayFinder application, built with Node.js, Express, MongoDB, and Firebase Admin SDK.

## Features

- User authentication with Google Sign-In (Firebase)
- User data storage in MongoDB
- REST API for user management

## Project Structure

```
server/
│
├── config/
│   └── db.js              # MongoDB connection setup
├── controllers/
│   └── userControllers.js # User controller functions
├── models/
│   └── userModel.js       # Mongoose user schema/model
├── routes/
│   └── userRoutes.js      # User-related API routes
├── .env                   # Environment variables (MongoDB URI)
├── .gitignore
├── package.json
├── server.js              # Main server entry point
├── serviceAccount.json    # Firebase Admin SDK credentials
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB Atlas account or local MongoDB instance
- Firebase project with service account credentials

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd StayFinder/server
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the `server` directory:
     ```
     MONGO_URI=your_mongodb_connection_string
     ```

4. **Add Firebase service account:**
   - Place your `serviceAccount.json` file in the `server` directory.

### Running the Server

```sh
node server.js
```

The server will start on [http://localhost:5000](http://localhost:5000).

## API Endpoints

- `POST /api/users/google-login`  
  Log in or register a user with Google credentials.

- `POST /api/verify-token`  
  Verify a Firebase ID token.

- `GET /api/users`  
  Get all users.

## License

This project is licensed under the ISC License.