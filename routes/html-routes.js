const path = require("path")
const db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        var query = {};
        if(req.query.author_id) {
            query.AuthorId = req.query.author_id
        }
 
        db.Burger.findAll({
            where: query,
            // include: [db.Customer]
        }).then(function(dbBurger) {
            var hbrsObj = {
                burgers: dbBurger
            }
            res.render("index", hbrsObj)
        });
     });
}