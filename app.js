const express = require('express');
const sequelize = require('./database');

const bodyParser = require("body-parser");
const bookIssue = require('./models/bookIssue');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json({extended: false}));


app.post('/add-book', async(req,res,next) => {
    try{
        console.log(req.body);
        const {book,issueDate,issueTime,returnDate,returnTime} = req.body;
        const data = await bookIssue.create({bookName:book,issueDate:issueDate,issueTime:issueTime,returnDate:returnDate,returnTime:returnTime});
        console.log(data,'data in creating bookIssue in app.js');
        res.status(201).json({data:data.dataValues});
    }
    catch(error){
        console.log(error,'error in post in app.js');
    }
    
})

async function sync(){
    try{
        const data = await sequelize.sync({force:true});
        console.log(data);
        app.listen(3000,() => {
            console.log('Backend-Server started on port 3000')
        })
    }
    catch(error){
        console.log(error,'error in sync database in app.js')
    }
 
}

sync()