var path = require("path");
var friends = require(path.join(__dirname, "../app/data/friends.js"));


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        //TODO responds with all friends
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        //TODO finds the closest match in the table
        //Returns the compatible friend
        friends.push(req.body);
        findClosestMatch();
        res.json();
    });
}

function findClosestMatch() {
    let lastF = friends[friends.length - 1].scores;

    for (let x = 0; x < friends.length - 1; x++) {

        console.log(x);





    }




}