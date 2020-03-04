const express = require("express");
const exphbs = require("express-handlebars")
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + "./public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")

require("./routes/burger-api-routes.js")(app);
require("./routes/customer-api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({ force: true}).then(function() {
    app.listen(PORT, function() {
        console.log("App Listening on Port: " + PORT);
    });
});