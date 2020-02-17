const express = require('express');
const bodyParser = require('body-parser');
// const request = require('request');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
//careful when using req, and request. - overloading occurs. same for response, res..
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
  console.log("form post is working.");

  fs.readFile(__dirname+"/API.txt", function(error, data){
    if (error) {
      console.log("Error! "+error);
    } else {
      console.log("No error. now read the file: \n");
      console.log(data);
    }
  });
});

app.listen(3000, function(){
  console.log("Server listening at port 3000.");
});
