const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
//careful when using req, and request. - overloading occurs. same for response, res..

});

app.listen(3000, function(){
  console.log("Server listening at port 3000.");
});
