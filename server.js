var path = require("path");
var express = require("express");
var env = require("dotenv").config();

var api = require("./routing/apiRoutes.js");
var html = require("./routing/htmlRoutes.js");

var app = express();

var PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function(){
    console.log("Server listening on http://localhost:" + PORT);
})