// verify-install.js
// A simple script to verify the installation of the BookReview application

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('Verifying BookReview installation...');

// Check if .env file exists in backend
if (!fs.existsSync(path.join(__dirname, 'backend', '.env'))) {
  console.error('Error: .env file not found in backend directory');
  console.log('Please create a .env file based on .env.example');
  process.exit(1);
}

// Check MongoDB connection
exec('cd backend && node -e "require(\'./config/db\')()"', (error, stdout, stderr) => {
  if (error) {
    console.error('Error connecting to MongoDB:');
    console.error(stderr);
    console.log('Please check your MONGODB_URI in the .env file');
    process.exit(1);
  }
  
  console.log('MongoDB connection verified successfully!');
  
  // Check frontend dependencies
  exec('cd frontend && npm list react next', (error, stdout, stderr) => {
    if (error) {
      console.error('Error checking frontend dependencies:');
      console.error(stderr);
      console.log('Please run "cd frontend && npm install"');
      process.exit(1);
    }
    
    console.log('Frontend dependencies verified successfully!');
    console.log('\nInstallation looks good! You can start the application with:');
    console.log('- Development mode: npm run dev');
    console.log('- Production mode: npm start');
  });
});
