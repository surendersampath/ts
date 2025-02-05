const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'helloworld.html'));
});

app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});