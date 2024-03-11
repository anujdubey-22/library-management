const Sequelize = require('sequelize');

const sequelize = require('../database');

const bookIssue = sequelize.define('BookIssue', {
    id:{
        type: Sequelize.INTEGER,
        allownull: false,
        autoIncrement: true,
        primaryKey: true
    },
    bookName:{
        type: Sequelize.STRING,
        allownull: false
    },
    issueDate:{
        type: Sequelize.STRING,
        allownull:false
    },
    issueTime:{
       type: Sequelize.STRING 
    },
    returnDate:{
        type: Sequelize.STRING,
        allownull:false
    },
    returnTime:{
         type: Sequelize.STRING   
    },
    fine:{
        type: Sequelize.INTEGER
    }
});


module.exports = bookIssue;