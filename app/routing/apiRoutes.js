var path = require("path");
var express = require("express");
var router = express.Router();

var friendsData = require("../data/friends.js");

router.get("/api/friends", function(req, res){
    res.json(friendsData);
});

///this is where I got tripped up///

router.post("/api/friends", function(req,res){
    var currentUser = req.body.newUser;

    var bestMatches = [];

    //just taking a shot in the dark///

    for (var i = 0; i < friendsData.length; i++){
        var comparison = friends.length[i];
        var comparisonDiff;
        
        for (var j = 0; j < 10; j++){
            comparisonDiff += Math.abs(comparison.scores[j] - currentUser.scores[j]);
        }

    };

    friendsData.push(req.body);
});

module.exports = router;