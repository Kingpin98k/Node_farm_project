const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello Welcome to the Server");
});

app.get('/hello', (req, res) => {
  res.status(200).send("Hello From this Side also !");
});

app.get('/page', (req, res) => {
  res.type('text/html');
  res.send('<html><body><h1>Hello, world!</h1></body></html>');
});

app.post('/page', (req, res) => {
  res.send("Updated Successfully !!");
});

app.listen(9999, () => {
  console.log('Started Listening on 9999');
});
