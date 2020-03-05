const Sequelize  = require("sequelize");
var sequelize = new Sequelize ("database_development", "root", "docker", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;

// var connection = mysql.createConnection({
//     host: "us-cdbr-iron-east-05.cleardb.net",
//     port: 3306,
//     user: "bff44ce58e9705",
//     password: "676e3259",
//     database: "heroku_4affa8582a960a4"
// });