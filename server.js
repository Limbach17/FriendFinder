var path = require("path");
var express = require("express");
var env = require("dotenv").config();

var api = require("./app/routing/apiRoutes.js");
var html = require("./app/routing/htmlRoutes.js");

var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var PORT = process.env.PORT;

app.use(api);
app.use(html);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function(){
    console.log("Server listening on http://localhost:" + PORT);
})