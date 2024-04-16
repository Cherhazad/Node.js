const { STRING } = require('sequelize');
const db = require('../config/database');
const sequelize = require('sequelize');

const gameSchema = db.define('game', {
    id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    // name: { type: sequelize.STRING }, /* du joueur */
    // card: { type: sequelize.STRING }, /* pierre, feuille ou ciseaux ? */
    // status: { type: sequelize.STRING }, /* gagnant, perdant, égalité */
    action: { type: sequelize.STRING },
    win: { type: sequelize.NUMBER },
    lose: { type: sequelize.NUMBER },
    tie: { type: sequelize.NUMBER }
});

module.exports = gameSchema