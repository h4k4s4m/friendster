// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});