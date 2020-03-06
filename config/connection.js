const Sequelize  = require("sequelize");
var sequelize = new Sequelize ("heroku_c929ea8326567c4", "b4f46f9fddd68a", "12e9811b", {
    host: "us-cdbr-iron-east-04.cleardb.net",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;


