var path = require("path");
var express = require("express");
var router = express.Router();

var friendsData = require("../data/friends");

router.get("/api/friends", function(req, res){
    res.json(friendsData);
});

router.post("/api/friends", function(req,res){
    friendsData.push(req.body);

    var bestMatches = [];

    
})

module.exports = router;