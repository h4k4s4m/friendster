module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        //TODO responds with all friends
        res.json();
    });

    app.post("/api/friends", function (req, res) {
        //TODO takes in a new friend to find
        var x = req.body();
        res.json();
    });
}