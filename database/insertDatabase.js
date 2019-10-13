const mongoose = require('mongoose');
const faker = require('faker');
const imageData = require('./dataschema.js');

mongoose.connect('mongodb://localhost/imagetest', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


const randomize = function() {
  const ary = [];
  const rand = Math.floor(Math.random() * 11);
  for (var i = 0; i < rand; i+=1) {
    const randomNum = Math.floor(Math.random() * 100) - 1;
    ary.push(`https://imagebasket.s3-us-west-1.amazonaws.com/image${randomNum}.jpg`);
  }
  return ary;
}

for (let i = 0; i < 5; i += 1) {

  const test = new imageData.images ({
    id: i,
    name: faker.commerce.productName(),
    url: randomize().shift(`https://imagebasket.s3-us-west-1.amazonaws.com/image${i}.jpg`),
  });

  test.save( (err, test) => {
    if (err) { return console.error(err); }
    return 'test went through';
  });

}