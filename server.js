const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Corrected MongoDB connection URI with URL-encoded password
const dbURI = 'mongodb+srv://adrianjohan708:AdorJoyJanine%40897600@cluster0.iewln.mongodb.net/adrianjohan708?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Basic route to test if server is working
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
