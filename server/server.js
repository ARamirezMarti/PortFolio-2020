const express = require('express');
require('dotenv').config()
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');



let app = express();


app.use(cors({
    origin:true,
    methods:["GET","PUT","POST","DELETE"],
    allowedHeaders:['Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method','text/plain']
}));

//app.use( express.static(path.resolve(__dirname+'/public')));

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(fileUpload());
app.use('/api',require('./routes/projects.routes'));



const mongoDeprecation={
    useNewUrlParser:true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.MONGO_DB,mongoDeprecation,(err,res)=>{
        if(err) throw err;

        console.log('Connected to database');

        app.listen(process.env.PORT,()=>{
            console.log(`Server listening on port ${process.env.PORT}`);
        })
        

});


