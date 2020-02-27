const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controller.js")

app.use(routes)


app.listen(PORT, function() {
    console.log("Server listening on us-cdbr-iron-east-05.cleardb.net/" + PORT)
});

