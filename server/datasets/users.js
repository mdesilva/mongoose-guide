var mongoose = require('mongoose');

//define a schema. Schemas allows you to define the fields in each document,
//They are then compiled into models using the mongoose.model() method

var UserModelSchema = new mongoose.Schema({
  username: String,
  password: String
});

//compile the model, which will be the database collection that mongoose will create
                                //collection, schema
module.exports = mongoose.model('User', UserModelSchema)
