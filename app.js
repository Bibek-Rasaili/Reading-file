const express = require('express');
const bodyParser = require('body-parser');
// const request = require('request');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  //careful when using req, and request. - overloading occurs. same for response, res..
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log("form post is working.");
  var data;
  try {
    data = fs.readFileSync(__dirname + "/API.txt", 'utf8');
    console.log(data);
  } catch (e) {
    console.log(e);
  }
  res.write("<h1> The file reads: </h1>");
  res.write("<p>"+data+"</p>");
  res.send();
});

app.listen(3000, function() {
  console.log("Server listening at port 3000.");
});
