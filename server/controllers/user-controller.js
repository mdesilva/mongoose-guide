//get the model
var User = require('../datasets/users');

module.exports.createUser = function(req,res){
  console.log(req.body);
  var user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  user.save(function(err,docs){
    if(err){
      console.log(err)
    }
    else{
      console.log("User " + user.username + " created");
      res.send("User created successfully!")
    }
  })
}

module.exports.getUsers = function(req,res){
  User.find(function(err,docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(docs);
      res.send(docs);
    }
  })
}
