const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static.apply("public"));

require("./routes/burger-api-routes.js")(app);
require("./routes/customer-api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({ force: true}).then(function() {
    app.listen(PORT, function() {
        console.log("App Listening on Port: " + PORT);
    });
});