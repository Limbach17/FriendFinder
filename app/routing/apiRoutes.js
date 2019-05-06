var path = require("path");
var express = require("express");
var router = express.Router();

var friendsData = require("../data/friends");

router.get("/api/friends", function(req, res){
    res.json(friendsData);
});

router.post("/api/friends", function(req,res){
    console.log(req.body);
    var currentUser = req.body;
    var userScores = currentUser.scores;
    
    var bestMatch = {
        name: "",
        picture: "",
        scoreDiff: 0

    };

    var totalDiff;

    for (var i = 0; i < friendsData.length; i++){
        comparison = friendsData[i];
        console.log(comparison.name);
        totalDiff = 0;
        
        for (var j = 0; j < comparison.scores.length; j++){
             var comparisonScore = comparison.scores[j];
             var currentUserScore = userScores[j];

             totalDiff += Math.abs(parseInt(currentUser) - parseInt(comparisonScore));
        }

        if (totalDiff <= bestMatch.scoreDiff) {
            bestMatch.name = comparison.name;
            bestMatch.picture = comparison.picture;
            bestMatch.scoreDiff = totalDiff;
        }

        console.log(bestMatch.name + "\n");
        console.log(bestMatch.picture + "\n");
        console.log(bestMatch.scoreDiff + "\n");

    };

    friendsData.push(req.body);
    res.json(bestMatch);
    
});

module.exports = router;