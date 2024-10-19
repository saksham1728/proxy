// routes/proxyRouter.js
const express = require('express');
const request = require('request');
const router = express.Router();

// Proxy route for the video stream
router.get('/proxy', (req, res) => {
  const streamUrl = 'http://flbl16.112421.net:8082/4151818/tracks-v1a1/mono.m3u8?token=FYCMQWAK8R';

  res.set('Content-Type', 'application/x-mpegURL'); // Set the correct MIME type
  request(streamUrl).pipe(res);
});

module.exports = router;
