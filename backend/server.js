const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());

app.get('/proxy', (req, res) => {
  
  const streamUrl = 'http://flbl16.112421.net:8082/4151818/tracks-v1a1/mono.m3u8?token=FYCMQWAK8R';

 
  request(streamUrl).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
