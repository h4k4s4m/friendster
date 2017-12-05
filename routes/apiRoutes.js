var friends = require("../data/friends");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        //TODO responds with all friends
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        //TODO takes in a new friend to find

        friends.push(req.body);
        res.json();
    });
}