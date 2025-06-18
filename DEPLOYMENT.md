# Deployment Guide for BookReview

This guide covers deploying the BookReview application to various platforms.

## Table of Contents
1. [Frontend Deployment (Vercel)](#frontend-deployment-vercel)
2. [Backend Deployment (Render)](#backend-deployment-render)
3. [Database Setup (MongoDB Atlas)](#database-setup-mongodb-atlas)
4. [Environment Variables](#environment-variables)
5. [Additional Considerations](#additional-considerations)

## Frontend Deployment (Vercel)

Vercel is the recommended platform for Next.js applications:

1. Push your code to GitHub, GitLab, or Bitbucket
2. Sign up for [Vercel](https://vercel.com)
3. Import your repository
4. Configure the project:
   - Root Directory: `frontend`
   - Build Command: (leave as default)
   - Output Directory: (leave as default)
5. Add environment variables:
   - `NEXT_PUBLIC_API_URL`: Your backend API URL
6. Deploy

## Backend Deployment (Render)

1. Sign up for [Render](https://render.com)
2. Create a new Web Service
3. Connect your repository
4. Configure the service:
   - Name: `book-review-api`
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Select the appropriate plan (Free tier is available)
5. Add environment variables:
   - `PORT`: 10000 (Render default, or your preferred port)
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Your secret key for JWT
   - `NODE_ENV`: `production`
6. Deploy

## Database Setup (MongoDB Atlas)

1. Sign up for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (the free tier is sufficient for starting)
3. Set up database access:
   - Create a database user with read/write permissions
   - Remember the username and password
4. Set up network access:
   - Add your IP address for local development
   - Add `0.0.0.0/0` for public access (or configure more secure options)
5. Get your connection string:
   - Go to Clusters > Connect > Connect your application
   - Copy the connection string and replace `<password>` with your database user's password
   - Add this as `MONGODB_URI` in your backend environment variables

## Environment Variables

### Frontend (Vercel)
- `NEXT_PUBLIC_API_URL`: URL of your backend API (e.g., `https://book-review-api.onrender.com/api`)

### Backend (Render)
- `PORT`: 10000 (or as required by your hosting provider)
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `JWT_SECRET`: A secure random string for JWT token encryption
- `NODE_ENV`: `production`
- `CORS_ORIGIN`: Your frontend URL (e.g., `https://book-review.vercel.app`)

## Additional Considerations

### CORS Configuration

Update the CORS configuration in the backend `server.js` file to allow requests from your deployed frontend:

```javascript
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
```

### Asset Handling

Ensure all image paths in the frontend are absolute or properly configured for production:
- Update image paths in your seed data
- Check all image references in your React components

### Health Checks

Add a health check endpoint to the backend:

```javascript
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});
```

### Monitoring

Consider adding monitoring tools like:
- [Sentry](https://sentry.io) for error tracking
- [LogRocket](https://logrocket.com) for session replay
- [Google Analytics](https://analytics.google.com) for usage metrics

### Continuous Deployment

Both Vercel and Render support continuous deployment from your GitHub repository:
- Set up branch deployments for testing
- Configure production deployments from your main branch
