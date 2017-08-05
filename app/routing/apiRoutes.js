
var friendsArray = require("../data/friends.js");


module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

app.post("/api/friends", function(req, res) {
  var newUserResults = req.body.scores;
  var simpleArrayResults = [];
  var userCount = 0;
  var bestMatch = 0; 

  for(var i=0; i<friendsArray.length; i++){
      var resultsDifference = 0;

      for(var j=0; j<newUserResults.length; j++){
        resultsDifference += (Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(newUserResults[j])));
      }


simpleArrayResults.push(resultsDifference);
}
  for(var i=0; i<simpleArrayResults.length; i++){
      if(simpleArrayResults[i] <= simpleArrayResults[bestMatch]){
        bestMatch = i;
      }
    }
    var mostCompatible = friendsArray[bestMatch];
    res.json(mostCompatible);


    friendsArray.push(req.body);
  });
}




