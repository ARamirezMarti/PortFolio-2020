const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3500;
let app = express();

app.use(cors({
    origin:true,
    methods:["GET","PUT","POST","DELETE"],
    allowedHeaders:['Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method']
}));
app.use(morgan('tiny'));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(fileUpload());
app.use('/api',require('./routes/projects.routes'));



mongoose.connect('mongodb://localhost:27017/portfolio2020',{ useNewUrlParser:true },(err,res)=>{
        if(err) throw err;

        console.log('Connected to database');

        app.listen(port,()=>{
            console.log(`Server listening on port ${port}`);
        })
        

});


