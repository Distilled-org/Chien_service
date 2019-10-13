const express = require('express');
const path = require('path');
const db = require('../database/insertDatabase');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/imagetest', {useNewUrlParser: true});
const distPath = path.resolve(__dirname, '..', 'dist');

// req.url and the req.method
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});
app.use(express.static(distPath));
app.use(express.json());

app.get( '/images', (req, res)=> {
  res.send('got the request');
  // req.params = (/imagesID)
  // req.body = ();
  // after images = '';
});


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port: ${PORT}`);
});