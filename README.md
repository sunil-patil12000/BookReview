# BookReview - A Book Review Application

BookReview is a full-stack web application for browsing, reviewing, and discovering books. Users can create accounts, browse books, leave reviews, and manage their profile.

## Features

- User authentication (signup, login, profile management)
- Browse and search for books
- Filter books by genre and rating
- View book details and reviews
- Add reviews to books
- User profile with review history
- Featured books carousel on the homepage

## Tech Stack

### Frontend
- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Shadcn UI components

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT Authentication

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/book-review.git
cd book-review
```

2. Set up environment variables
Create a `.env` file in the backend directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookReview
JWT_SECRET=your_jwt_secret_key
```

3. Install backend dependencies
```bash
cd backend
npm install
```

4. Install frontend dependencies
```bash
cd ../frontend
npm install
```

5. Seed the database
```bash
cd ../backend
npm run data:import
```

6. Start the development servers

In one terminal:
```bash
cd backend
npm run dev
```

In another terminal:
```bash
cd frontend
npm run dev
```

7. Access the application
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login existing user

### Books
- `GET /api/books` - Get all books (with optional filters)
- `GET /api/books/:id` - Get book by ID
- `POST /api/books/:id/reviews` - Add a review to a book (requires authentication)

### Users
- `GET /api/users/profile` - Get current user profile (requires authentication)
- `PUT /api/users/profile` - Update user profile (requires authentication)
- `GET /api/users/reviews` - Get all reviews by the current user (requires authentication)

## Documentation

- [Getting Started Guide](./GETTING_STARTED.md) - Detailed instructions for setup and usage
- [Deployment Guide](./DEPLOYMENT.md) - Instructions for deploying to production
- API Documentation - Available in the [Getting Started Guide](./GETTING_STARTED.md#api-documentation)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## GitHub Repository

To create your GitHub repository:

1. Create a new repository on GitHub
2. Push your local repository to GitHub:
```bash
git remote add origin https://github.com/yourusername/book-review.git
git branch -M main
git push -u origin main
```

3. Your project will be available at: `https://github.com/yourusername/book-review`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Book cover images and data are placeholders for demonstration purposes
- UI components from [shadcn/ui](https://ui.shadcn.com/)

## Deployment Options

### Vercel (Frontend)
The Next.js frontend can be easily deployed on Vercel:

1. Push your code to GitHub
2. Connect your repository in Vercel
3. Configure environment variables
4. Deploy

### Render or Heroku (Backend)
The Express backend can be deployed on platforms like Render or Heroku:

1. Push your code to GitHub
2. Create a new web service in Render/Heroku
3. Set the root directory to `/backend`
4. Add environment variables
5. Deploy

### MongoDB Atlas (Database)
For the database, MongoDB Atlas offers a free tier:

1. Create a cluster in MongoDB Atlas
2. Set up network access and database users
3. Get your connection string and update your backend .env file

## Verification

Run the installation verification script to check if everything is set up correctly:

```bash
node verify-install.js
```
