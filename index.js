
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/ladder", function(req, res){
  res.sendFile(__dirname + "/ladder.html");
});

app.post("/ladder", function(req, res){

var depth = parseInt(req.body.height);
var height = parseInt(req.body.height);

var ladder = Math.sqrt(Math.pow(depth, 2) + Math.pow(height, 2));

res.send("The ladder must be " + ladder.toFixed(0));

})

app.listen(3000, function() {
  console.log ("Server is running")
});
