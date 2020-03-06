var db = require("../models")

module.exports = function(app) {

    app.get("/api/burgers", function(req, res) {
       var query = {};
       if(req.query.author_id) {
           query.AuthorId = req.query.author_id
       }

       db.Burger.findAll({
           where: query,
        //    include: [db.Customer]
       }).then(function(dbBurger) {
           res.json(dbBurger)
       });
    });

    app.get("/api/burgers/:id", function(req, res) {
        db.Burger.findOne({
            where: {
                id: req.params.id
            },
            // include: [db.Customer]
        }).then(function(dbBurger) {
            res.json(dbBurger)
        });
    });

    app.post("/api/burgers", function(req, res) {
        db.Burger.create(req.body).then(function(dbBurger) {
            res.json(dbBurger)
        });
    });

    app.delete("/api/burgers/:id", function(req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
            res.json(dbBurger)
        });
    });

    app.put("/api/burgers/:id", function(req, res) {
        db.Burger.update(
            {
            devoured: true
         }, {
            where: {
                id: req.params.id
                }
         }).then(function(dbBurger) {
                res.json(dbBurger)
            });
    });
};