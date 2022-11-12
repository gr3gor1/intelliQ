const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const routes=require("./routes/api")
var cors = require('cors');

// express app
const app = express();


// connect to mongodb & listen for requests
const dbURI = "mongodb://docker:mongopw@localhost:55002/Softeng?authSource=admin";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(4000))
  .then(result=>console.log("database okey"))
  .catch(err => console.log(err));


//take data from request
app.use(bodyParser.json());
app.use(cors());


//initialize routes
app.use("/intelliq_api",routes);

//error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error:err.message})
    });