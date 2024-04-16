const sequelize = require('sequelize');

const db = new sequelize({
    dialect: "sqlite",
    storage: "game.sqlite"
});

db.sync();

module.exports = db;