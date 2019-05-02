var path = require("path");
var express = require("express");
var env = require("dotenv").config();

var app = express();

var PORT = process.env.PORT;

app.listen(PORT, function(){
    console.log("Server listening on http://localhost:" + PORT);
})