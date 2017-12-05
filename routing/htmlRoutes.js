// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");




module.exports = (app) => {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
    });

    app.get("*", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/index.html"))
        }
    }
}