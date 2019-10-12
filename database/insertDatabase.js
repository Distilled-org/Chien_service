const mongoose = require('mongoose');
const faker = require('faker');
const imageData = require('./dataschema.js');

mongoose.connect('mongodb://localhost/imagetest', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


for (let i = 0; i < 100; i += 1) {

  const test = new imageData.images ({
    id: i,
    name: faker.commerce.productName(),
    url: `https://imagebasket.s3-us-west-1.amazonaws.com/image${i}.jpg`,
  });

  test.save( (err, test) => {
    if (err) { return console.error(err); }
    return 'test went through';
  });

}