// app.js
const express = require('express');
const cors = require('cors');
const proxyRouter = require('./routes/proxyRouter'); // Import the proxy router

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for CORS
app.use(cors());

// Route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Video Streaming Proxy Server!');
});

// Use the proxy router for routes starting with /api
app.use('/api', proxyRouter); // Mount the router at /api

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
