var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/imagetest', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


var imageSchema = new mongoose.Schema({
  id: String,
  name: String,
  url: String
});

var images = mongoose.model('images', imageSchema);


module.exports.images = images;
