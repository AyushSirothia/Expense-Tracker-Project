const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    "expense",
    "root",
    "Ayush@2811",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

module.exports = sequelize;