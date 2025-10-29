# 🎓 Educational Platform Backend API

![Node.js](https://img.shields.io/badge/Node.js-v20+-green)
![Express](https://img.shields.io/badge/Express.js-5.x-blue)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![JWT](https://img.shields.io/badge/Auth-JWT-yellow)
![License](https://img.shields.io/badge/License-ISC-orange)

A simple and modular backend API for an educational platform — built with **Node.js**, **Express**, **MongoDB**, and **JWT Authentication**.
This backend provides APIs for managing users, news, education materials, and research content.

---

## 🚀 Features

* 🔐 JWT authentication (with `jsonwebtoken`)
* 🧠 Input validation using **express-validator**
* 💾 Database support via **MongoDB + Mongoose**
* ⚡ Real-time caching layer with **Redis**
* 🧩 Modular architecture (controllers, middlewares, routes)
* 🛠 Easy development with **nodemon**
* 🌐 RESTful API design

---

## 📦 Tech Stack

| Layer      | Technology        |
| ---------- | ----------------- |
| Runtime    | Node.js 20+       |
| Framework  | Express 5.1       |
| Database   | MongoDB 8.x       |
| Cache      | Redis             |
| Validation | express-validator |
| Auth       | JWT               |
| ORM        | Mongoose          |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/devue4/educational-backend.git
cd backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Rename `.env.example` to `.env` and edit values as needed:

```env
PORT=3000
JWT_SECRET=your_secret_key
REDIS_URL=redis://127.0.0.1:6379
MONGO_URI=mongodb://localhost:27017/dbname
```

### 4️⃣ Start the server

```bash
npm start
```

The backend will start on:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🗂 Project Structure

```
project/
├── controllers/
│   ├── userController.js
│   ├── newsController.js
│   ├── researchController.js
│   └── educationController.js
│
├── middlewares/
│   ├── errorHandler.js
│   ├── isAdmin.js
│   └── validators/
│       ├── authValidator.js
│       ├── newsValidator.js
│       ├── researchValidator.js
│       └── educationValidator.js
│
├── routes/
│   ├── userRoutes.js
│   ├── newsRoutes.js
│   ├── researchRoutes.js
│   ├── educationRoutes.js
│   └── authRoutes.js
│
├── services/
│   └── jwtService.js
│
├── app.js
├── main.js
├── .env.example
└── package.json
```

---

## 🔗 Example API Endpoints

### 📰 News API (`/api/news`)

| Method   | Endpoint        | Description           | Auth Required |
| -------- | --------------- | --------------------- | ------------- |
| `GET`    | `/api/news`     | Get all news articles | ❌             |
| `GET`    | `/api/news/:id` | Get a single article  | ❌             |
| `POST`   | `/api/news`     | Add new article       | ✅ Admin       |
| `PUT`    | `/api/news/:id` | Update article        | ✅ Admin       |
| `DELETE` | `/api/news/:id` | Delete article        | ✅ Admin       |

📘 **Sample Response**

```json
[
  {
    "_id": "68d143dd1cfaaa8c9339ea65",
    "title": "start backend",
    "content": "hello world",
    "author": {
      "_id": "68cc5889eb3bede0a6ddd03e",
      "fullName": "amir hossine mahmoudi"
    },
    "publishedAt": "2025-09-22T12:44:16.387Z",
    "createdAt": "2025-09-22T12:41:01.306Z",
    "updatedAt": "2025-09-22T12:44:16.388Z",
    "__v": 0
  }
]
```

---

### 🔐 Auth API (`/api/auth`)

| Method | Endpoint              | Description                  |
| ------ | --------------------- | ---------------------------- |
| `POST` | `/api/auth/send-code` | Send OTP verification code   |
| `POST` | `/api/auth/verify`    | Verify OTP and get JWT token |

---

### 👤 User API (`/api/user`)

| Method | Endpoint            | Description      | Auth Required |
| ------ | ------------------- | ---------------- | ------------- |
| `GET`  | `/api/user/profile` | Get user profile | ✅             |
| `PUT`  | `/api/user/profile` | Update profile   | ✅             |

---

### 🧠 Research API (`/api/research`)

| Method | Endpoint        | Description           | Auth Required |
| ------ | --------------- | --------------------- | ------------- |
| `GET`  | `/api/research` | Get all research data | ❌             |
| `POST` | `/api/research` | Add new research      | ✅ Admin       |

---

### 🎓 Education API (`/api/education`)

| Method | Endpoint         | Description         | Auth Required |
| ------ | ---------------- | ------------------- | ------------- |
| `GET`  | `/api/education` | Get education items | ❌             |
| `POST` | `/api/education` | Add education item  | ✅ Admin       |

---

## 🧩 Middleware Overview

### `authenticate`

Validates JWT tokens for protected routes.

### `isAdmin`

Restricts access to admin-only routes.

### `asyncHandler`

Wraps async functions to simplify error handling.

---

## 🧪 Example Request (with JWT)

**POST** `/api/news`

```bash
curl -X POST http://localhost:3000/api/news \
  -H "Authorization: Bearer <your_jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Backend started",
    "content": "The API is now live!"
  }'
```

---

## 🧑‍💻 Scripts

| Command     | Description                     |
| ----------- | ------------------------------- |
| `npm start` | Start the backend using nodemon |
| `npm test`  | Run test script (placeholder)   |

---

## 👨‍💻 Author

**Sina Cleanr**
📧 Email: [[amir.1384.1384.am@gmail.com](mailto:amir.1384.1384.am@gmail.com)]
🌐 GitHub: [https://github.com/devue4](https://github.com/devue4)

---

## 📄 License

This project is licensed under the **ISC License**.
Feel free to use, modify, and distribute.

