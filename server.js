const express = require('express');
const app = express();
const port = 3000;

// Set up connection to the database


// Connect to the databas
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

app.get('/features', (req, res) => {
  // Send the features.html file in response to the GET request
  res.sendFile(__dirname + '/public/features.html');
  
});
app.get('/music', (req, res) => {
  // Send the features.html file in response to the GET request
  res.sendFile(__dirname + '/public/music.html');
  
});

