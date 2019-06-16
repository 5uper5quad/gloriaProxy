require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const request = require('request');
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/:id', express.static('public'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`all cylinders firing on http://localhost:${port}`);
});

app.get('/languageFeatures/:id', (req, res) => {
  console.log(`http://localhost:3009${req.url}`)
  axios
    .get(`http://localhost:3009{req.url}`)
    .then((response) => {
      console.log('here is your response: ', response.data)
      res.send(response.data);
    })
    .catch((err) => {
      console.log('your axios has an error :(', err)
    });
});