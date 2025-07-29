# Journal - Backend

A simple Express backend that handles user authentication and CRUD operations for a personal journaling app. Entries can be created, viewed, updated, deleted, and organized into categories.

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JSON Web Tokens

## Features

- User authentication with 6 digit pin
- Token-based authentication using JWT
- Create, read, update, delete (CRUD) journal entries
- Categorize and filter entries
- RESTful API design

## Setup Instructions

1. **Clone the repository**

```
https://github.com/Volburaal/journal-backend.git
cd journal-backend
```

2. **Install Dependencies**

```
npm install
cd journal-backend
```

3. **Set Environment Variables**
```
CORS_ORIGIN
DATABASE_URL
JWT_SECRET
PIN_HASH : Hash the pin using bcrypt so it may be compared for auth
PORT
```

4. **Apply Migrations**

```
npx prisma migrate dev
```

**Start** using ```npm run dev``` to run it locally
