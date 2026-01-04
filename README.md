# User CRUD Backend API

A simple **backend-only** project implementing CRUD operations for users.

This project is intentionally kept backend-focused — **no frontend**, no EJS, no templating — to practice real-world backend concepts like database design, migrations, Docker, and ORM usage.

---

## 🚀 Tech Stack

- **Node.js** – Runtime environment
- **Express.js** – HTTP server & routing
- **PostgreSQL 17.4** – Database
- **Drizzle ORM** – Type-safe SQL ORM (first-time usage)
- **Docker & Docker Compose** – Database containerization

---

## 📌 Features

- Create user
- Get all users
- Get single user by ID
- Update user
- Delete user
- Auto-incrementing primary key using Postgres identity columns
- Database schema & migrations managed by Drizzle ORM

---

## 📂 Project Structure

```
CRUD/
│
├── controllers/        # Route handlers (business logic)
├── drizzle/            # Drizzle migrations
├── drizzle.config.js   # Drizzle configuration
├── db/                 # Database connection setup
├── routes/             # Express routes
├── docker-compose.yml  # Postgres Docker setup
├── index.js            # App entry point
├── package.json
└── README.md
```

---

## 🐳 Docker Setup (PostgreSQL)

This project uses **Dockerized PostgreSQL (v17.4)**.

### Start Postgres container

```bash
docker compose up -d
```

Ensure the container is running:

```bash
docker ps
```

Postgres will be available on:

```
localhost:5432
```

---

## 🧬 Database & Migrations (Drizzle ORM)

### Generate migration from schema

```bash
npx drizzle-kit generate
```

### Push schema to database

```bash
npx drizzle-kit push
```

> ⚠️ Make sure Postgres container is running before executing `push`

---

## ▶️ Running the Server

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm start
```

Server runs on:

```
http://localhost:8000
```

---

## 🔌 API Endpoints

### Create User

```http
POST /users
POST /users/add
```

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Get All Users

```http
GET /users
GET /users/all
```

### Get User by ID

```http
GET /users/:id
```

### Update User

```http
PUT /users/update/:id
```

```json
{
  "name": "Updated Name",
  "email": "updated@example.com"
}
```

### Delete User

```http
DELETE /users/delete/:id
```

---

## 🧠 Learning Goals

- Understand backend-only architecture
- Learn Drizzle ORM fundamentals
- Practice Postgres schema design
- Work with Dockerized databases
- Write clean, maintainable backend code

---

## ⚠️ Notes

- No frontend included by design
- `.env` files are ignored
- `node_modules` is excluded from Git

---

## 📜 License

This project is for learning and educational purposes.
