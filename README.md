# BookReview

A web application for reviewing and discovering books.

## Overview

BookReview is a full-stack web application that allows users to browse books, read and write reviews, and manage their reading lists. The application is built with a Node.js backend API and a Next.js frontend.

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose ORM)
- JWT Authentication

### Frontend
- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Shadcn UI Components

## Project Structure

```
├── backend/               # Node.js Express API
│   ├── config/            # Configuration files
│   ├── middleware/        # Custom middleware
│   ├── models/            # Mongoose data models
│   ├── routes/            # API routes
│   └── server.js          # Main server entry point
│
└── frontend/              # Next.js client application
    ├── app/               # Next.js app router
    ├── components/        # React components
    ├── contexts/          # React context providers
    ├── hooks/             # Custom React hooks
    ├── lib/               # Utility functions
    └── public/            # Static assets
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB instance
- npm or pnpm

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/sunil-patil12000/BookReview
   cd BookReview
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

4. Create environment files:

   For backend (`.env` in backend folder):
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/bookreview
   JWT_SECRET=your_jwt_secret
   ```

   For frontend (`.env.local` in frontend folder):
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm run dev
   ```

2. Start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

3. Access the application at `http://localhost:3000`

## Features

- User authentication (signup, login, profile management)
- Browse and search books
- View detailed book information
- Read and write book reviews
- Rate books with a star rating system
- Featured books carousel
- Responsive design for mobile and desktop

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
