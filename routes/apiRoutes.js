var path = require("path");
var friends = require(path.join(__dirname, "../app/data/friends.js"));


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        friends.push(req.body);
        var x = findClosestMatch();
        res.json(x);
    });
}


function findClosestMatch() {
    var lastF = friends[friends.length - 1];
    console.log(lastF['scores[]']);
    var difference = 0;
    var diffArray = [];
    console.log(friends);

    for (var x = 0; x < friends.length - 1; x++) {

        for (var y = 0; y < friends[x].scores.length; y++) {
            difference += Math.abs(parseInt(lastF[y] - parseInt(friends[x].scores[y])));
        }

        diffArray.push(difference);
        difference = 0;
    }

    var index = 0;
    var value = diffArray[0];
    for (var i = 1; i < diffArray.length; i++) {
        if (diffArray[i] < value) {
            value = diffArray[i];
            index = i;
        }
    }
    //index of lowest number in array correlates to the index of that friend
    return friends[index];
}