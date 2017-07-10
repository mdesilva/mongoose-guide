var express = require('express');
var mongoose = require('mongoose');
var app = express();
var userController = require(__dirname + '/server/controllers/user-controller')
var bodyParser = require('body-parser'); //user body-parser to read request body

//setup the connection to the database
mongoose.connect('mongodb://localhost:27017/learnDB', {
  useMongoClient: true,
});

//get the connection
var db = mongoose.connection;

//bind connection to error event to get error notifcations
db.on('error',console.error.bind(console, 'MongoDB connection error'))

//notify us if the connection is successful
db.once('open', function(){
  console.log('MongoDB connection active!')
})





app.listen(3000);

//parse form data
app.use(bodyParser.urlencoded({extended: false}));

//parse json
app.use(bodyParser.json());



app.get('/users/create', function(req,res){
  res.sendFile(__dirname + '/createUser.html')
})

app.post('/users/create', userController.createUser);

app.get('/users', userController.getUsers)
