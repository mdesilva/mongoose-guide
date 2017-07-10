# mongoose-guide
Demonstrates how to use mongoose to connect and manipulate a mongo database. 

This guide is a perfect working model for connecting to mongo databases for any node.js application. Setup is simple; requires only the express and mongoose dependencies to get up and running, with the addition of bodyParser to handle form and json data. 

Look to the app.js file to learn how to connect the database, write to console upon error, and write to the console once it is running. 

Look to the server/datasets/users.js file to learn how a schema and a model is setup. 

A schema tells the mongoose of the fields that each document in the model will have. 

A model is the markup of each document in a collection. 


Additionally, look at the server/controllers/user-controller.js to see how simple commands to query and write to the mongo database are performed.
