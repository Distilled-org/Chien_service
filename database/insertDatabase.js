var mongoose = require('mongoose');
var faker = require('faker');
var imageData = require('./dataschema.js');

mongoose.connect('mongodb://localhost/imagetest', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//Insert the photo into the database
//import the imagmes from dataschema file

//generate an empty array to store all the data so we can push it into the database

for (var i = 0; i < 100; i++) {

    var test = new imageData.images({
      id: i,
      name: faker.commerce.productName(),
      url: `https://imagebasket.s3-us-west-1.amazonaws.com/image${i}.jpg`
    })

    test.save(function (err, test){
      if(err) {return console.error(err);}
      console.log('test went through');
    })

}