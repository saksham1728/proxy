const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for CORS
app.use(cors());

// Route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Video Streaming Proxy Server!');
});

// Proxy route for the video stream
app.get('/proxy', (req, res) => {
  const streamUrl = 'http://flbl16.112421.net:8082/4151818/tracks-v1a1/mono.m3u8?token=FYCMQWAK8R';
  
  res.set('Content-Type', 'application/x-mpegURL'); // Set the correct MIME type
  request(streamUrl).pipe(res);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
