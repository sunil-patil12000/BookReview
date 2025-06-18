# Getting Started with BookReview

This guide will help you set up and start using the BookReview application.

## Table of Contents
1. [Initial Setup](#initial-setup)
2. [Starting the Application](#starting-the-application)
3. [Sample User Accounts](#sample-user-accounts)
4. [Using the Application](#using-the-application)
5. [API Documentation](#api-documentation)
6. [Customization](#customization)
7. [Troubleshooting](#troubleshooting)

## Initial Setup

After cloning the repository, follow these steps:

1. Install all dependencies:
```bash
npm run install:all
```

2. Create environment variables:
   - Copy the `.env.example` file in the backend directory to `.env`
   - Modify the values as needed (especially the MongoDB connection string)

3. Seed the database:
```bash
npm run seed
```

## Starting the Application

### Development Mode
```bash
npm run dev
```
This will start both the frontend and backend in development mode with hot reloading.

### Production Mode
```bash
npm start
```
This will start both the frontend and backend in production mode.

## Sample User Accounts

After seeding the database, you can use these sample accounts:

| Email               | Password | Role  |
|---------------------|----------|-------|
| user@example.com    | password | User  |
| admin@example.com   | password | Admin |

## Using the Application

1. **Browse Books**: The homepage displays all books with filtering options.
2. **Book Details**: Click on any book to view its details and reviews.
3. **Add Reviews**: When logged in, you can add reviews to books.
4. **User Profile**: Access your profile to view your reviews and update your information.
5. **Login/Register**: Create a new account or log in with an existing one.

## API Documentation

The backend provides the following main endpoints:

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login existing user

### Books
- `GET /api/books` - Get all books
  - Query parameters:
    - `genre`: Filter by genre
    - `minRating`: Filter by minimum rating
    - `featured`: Show only featured books (true/false)
    - `search`: Search in title and author
- `GET /api/books/:id` - Get book by ID
- `POST /api/books/:id/reviews` - Add a review (requires authentication)

### Users
- `GET /api/users/profile` - Get current user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/reviews` - Get all reviews by the current user

## Customization

### Styling
The frontend uses Tailwind CSS for styling. You can customize the styles by modifying:
- `frontend/tailwind.config.ts` - For theme customization
- `frontend/app/globals.css` - For global styles

### Book Data
To customize the sample book data, modify `backend/seeder/data.js` before running the seed script.

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally or your Atlas connection string is correct
- Check if the network allows the connection (firewall settings)

### Missing Dependencies
If you encounter missing module errors:
```bash
cd frontend && npm install
cd ../backend && npm install
```

### JWT Errors
If you're experiencing authentication issues, ensure your JWT_SECRET is properly set in the backend .env file.

### API Connection Issues
Make sure the frontend is configured to connect to the correct backend URL (default is http://localhost:5000).

For more help, please open an issue on the GitHub repository.
