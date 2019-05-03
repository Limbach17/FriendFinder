var path = require("path");
var express = require("express");
var router = express.Router();

var friendsData = require("../data/friends");

router.get("/api/friends", function(req, res){
    res.json(friendsData);
});

router.post("/api/friends", function(req,res){
   /*  console.log(req.body);
    var currentUser = req.body.newUser;
    
    var bestMatches = [];

    for (var i = 0; i < friendsData.length; i++){
        var comparison = friendsData.length[i];
        var comparisonDiff;
        
        for (var j = 0; j < 10; j++){
            comparisonDiff += Math.abs(comparison.scores[j] - currentUser.scores[j]);
        }

    }; */

    friendsData.push(req.body);
    alert("Holy friends, Batman!");
});

module.exports = router;