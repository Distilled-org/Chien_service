const express = require('express');
const db = require('../database/insertDatabase');
const app = express();
const PORT = 8080;

// req.url and the req.method
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});
app.use(express.static('public'));
app.use(express.json());

app.get( '/server', (req, res)=> {
  res.send('got the request');
});