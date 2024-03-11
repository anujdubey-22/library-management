const Sequelize = require('sequelize');

const sequelize = require('../database');

const bookReturn = sequelize.define('BookReturn', {
    id:{
        type: Sequelize.INTEGER,
        allownull: false,
        autoIncrement: true
    },
    bookName:{
        type: Sequelize.STRING,
        allownull: false
    },
    fine:{
        type: Sequelize.INTEGER
    }
});


module.exports = bookReturn;