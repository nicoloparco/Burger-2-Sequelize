const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")

const app = express()
const PORT = process.env.PORT || 3000
const db = require("./models");

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/burger-api-routes.js")(app);
require("./routes/customer-api-routes.js")(app);
require("./routes/html-routes.js")(app);


db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App Listening on Port: " + PORT);
    });
});


